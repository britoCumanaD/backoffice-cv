<?php

namespace App\Models\CMS;

use App\Traits\CMS\HasContent;
use App\Traits\CMS\HasMetadata;
use App\Traits\CMS\HasUrl;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    use HasContent, HasFactory, HasMetadata, HasUrl;

    protected $table = 'cms_pages';

    protected $guarded = [];

    public function layout() : BelongsTo
    {
        return $this->belongsTo(Layout::class);
    }

    public function parent() : BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function childrens() : HasMany
    {
        return $this->hasMany(self::class, 'parent_id', 'id')->select('id', 'parent_id', 'template_id', 'name', 'slug');
    }

    public function parentName() : BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id')->select('id', 'name');
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
