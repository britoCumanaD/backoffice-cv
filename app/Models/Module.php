<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\CMS\Template;
use App\Models\CMS\Layout;
use App\Models\CMS\Content;

class Module extends Model
{
    use HasFactory;

    protected $table = 'admin_modules';

    protected $guarded = [];

    public function layout() : BelongsTo
    {
        return $this->belongsTo(Layout::class);
    }

    public function fields() : HasMany
    {
        return $this->hasMany(ModulesFields::class, 'admin_module_id', 'id')->select('id', 'name', 'columnName', 'type', 'order', 'field_type as inputType', 'field_type_setting as inputSettings', 'is_required')->orderBy('order');
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
