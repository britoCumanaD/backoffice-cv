<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\CRM\Contact;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactEmail;
use App\Mail\QuoteEmail;
use Log;

class ContactController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {

        $request_data = $this->validateData($request->all());

        if (
            $contact = $this->createOrUpdateContact([
                'first_name' => $request_data['first_name'],
                'last_name' => $request_data['last_name'],
                'telephone' => $request_data['phone'],
                'email' => $request_data['email']
            ])
        ) {

            if (isset($request_data['message'])) {
                Mail::to(env('MAIL_FROM_ADDRESS'))->send(
                    new ContactEmail(
                        $contact->first_name,
                        $contact->last_name,
                        $contact->email,
                        $contact->telephone,
                        $request_data['message']
                    )
                );
            } else {
                Mail::to(env('MAIL_FROM_ADDRESS'))->send(
                    new QuoteEmail(
                        $contact->first_name,
                        $contact->last_name,
                        $contact->email,
                        $contact->telephone,
                        isset($request_data['details']) ? $request_data['details'] : '',
                        $request_data['size'],
                        $request_data['cream'],
                        $request_data['topper'],
                        $request_data['biscuit'],
                        $request_data['date'],
                        request()->file()
                    )
                );
            }
        }

        return new JsonResponse('Message sent successfully');
    }

    private function validateData(array $submissionData): array
    {
        $rules = [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'telephone' => 'string|nullable',
            'phone' => 'string|nullable',
            'message' => 'string|nullable',
            'details' => 'string|nullable',
            'biscuit' => 'string|nullable',
            'cream' => 'string|nullable',
            'date' => 'string|nullable',
            'size' => 'string|nullable',
            'topper' => 'string|nullable',
        ];

        $validator = Validator::make($submissionData, $rules);
        return $validator->validate();
    }

    private function createOrUpdateContact($data)
    {
        $data = collect($data);

        if ($contact = Contact::where('email', $data->get('email'))->onlyTrashed()->first())
            $contact->restore();

        return Contact::updateOrCreate(
            $data->only('email')->toArray(),
            $data->except('email', 'message')->toArray()
        );
    }
}
