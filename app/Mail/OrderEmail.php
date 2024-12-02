<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $order;
    public $messaje;
    public $total;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($messaje = '', $order = [], $total=0)
    {
        $this->messaje = $messaje;
        $this->order = $order;
        $this->total = $total;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return  $this->subject('Nueva compra')
            ->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
            ->view('email.OrderEmail');
    }
}
