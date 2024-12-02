<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BaseRequest extends FormRequest
{
    public $status = 303;

    public function rules() : array
    {
        return [];
    }
}
