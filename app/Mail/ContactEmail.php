<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $lastName;
    public $email;
    public $phone;
    public $content;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name = '', $lastName = '', $email = '', $phone = '', $content = '')
    {
        $this->name = $name;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->phone = $phone;
        $this->content = $content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return  $this->subject('New Email')
            ->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
            ->replyTo($this->email, $this->name.' '.$this->lastName)
            ->view('email.contactEmail');
    }
}
