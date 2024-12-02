<?php

namespace App\Actions\CRM\FormSubmission;

use App\Actions\AbstractQueryAction;
use App\Models\CRM\FormSubmission;
use Illuminate\Database\Eloquent\Builder;

class FormSubmissionQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_likes = [
        'form_id' => 'form_id',
    ];

    protected $order_by          = 'submitted_at';
    protected $order_direction   = 'desc';


    protected function getQueryBuilder(): Builder
    {
        return FormSubmission::query();
    }
}
