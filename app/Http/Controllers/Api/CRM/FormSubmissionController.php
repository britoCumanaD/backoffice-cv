<?php

namespace App\Http\Controllers\Api\CRM;

use App\Actions\CRM\FormSubmission\FormSubmissionStoreAction;
use App\Http\Controllers\Controller;
use App\Models\CRM\Form;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class FormSubmissionController extends Controller
{
    /**
     * @param Request $request
     * @param Form $form
     * @return JsonResponse
     * @throws ValidationException
     */
    public function store(Request $request, Form $form)
    {
        $send = app(FormSubmissionStoreAction::class)->handle($form, $request->all());

        return new JsonResponse([
            'message'       => $form->success_message ?? 'Successfully submitted ' . $form->name . ' form',
            'redirect_url'  => $form->redirect_url ?? false,
            'send'          => $send
        ]);
    }

    public function get(Request $request): JsonResponse
    {
        $page = $this->getQueryForm($request->form)->first();

        return new JsonResponse(
            $page->toArray()
        );
    }

    public function getQueryForm($name)
    {
        return Form::select('id', 'name', 'slug', 'success_message')
                    ->with('formFields')
                    ->where('slug', $name);
    }

}