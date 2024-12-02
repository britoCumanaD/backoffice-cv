<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\CMS\Template;
use App\Models\CMS\Layout;
use App\Models\CMS\Content;
use App\Traits\BindsDynamically;
use Illuminate\Database\Eloquent\SoftDeletes;

class ModuleCreated extends Model
{
    use HasFactory, BindsDynamically, SoftDeletes;

    public function layout() : BelongsTo
    {
        return $this->belongsTo(Layout::class);
    }

    public function template() : BelongsTo
    {
        return $this->belongsTo(Template::class);
    }

    public function content()
    {
        return $this->morphMany(Content::class, 'contentable');
    }
}
