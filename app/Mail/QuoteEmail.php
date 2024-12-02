<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Log;

class QuoteEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $lastName;
    public $email;
    public $phone;
    public $content;
    public $size;
    public $biscuit;
    public $cream;
    public $topper;
    public $date;
    public $images;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name = '', $lastName = '', $email = '', $phone = '', $content = '', $size = '', $biscuit = '', $cream = '', $topper = '', $date = '', $images = null)
    {
        $this->name = $name;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->phone = $phone;
        $this->content = $content;
        $this->size = $size;
        $this->biscuit = $biscuit;
        $this->cream = $cream;
        $this->topper = $topper;
        $this->date = $date;
        $this->images = $images;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $email =  $this->subject('New Quote')
            ->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
            ->replyTo($this->email, $this->name.' '.$this->lastName)
            ->view('email.QuoteEmail');

            Log::info($this->images);
            foreach($this->images as $file) {
                $email->attach($file->getRealPath(), [
                    'as' => $file->getClientOriginalName(),
                    'mime' => $file->getMimeType(),
                ]);
            }

        return $email;
    }
}
