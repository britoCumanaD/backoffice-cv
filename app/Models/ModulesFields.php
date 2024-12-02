<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ModulesFields extends Model
{
    use HasFactory;

    protected $table = 'admin_modules_fields';

    protected $guarded = [];

    public function module() : BelongsTo
    {
        return $this->belongsTo(Modules::class);
    }

}
