<?php

namespace App\Models\CMS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    use HasFactory;

    const Keys = [
        [
            'key' => 'logo',
            'type' => 'text',
            'component' => 'ImageField',
            'is_required' => true,
            'label' => 'Select a logo'
        ],
        [
            'key' => 'favicon',
            'type' => 'text',
            'component' => 'ImageField',
            'is_required' => true,
            'label' => 'Select a Favicon'
        ],
        [
            'key' => 'copyright',
            'type' => 'text',
            'component' => 'TextField',
            'is_required' => false,
            'label' => 'Copyright'
        ],
        [
            'key' => 'primaryColor',
            'type' => 'text',
            'component' => 'ColorField',
            'is_required' => true,
            'label' => 'Primary Color of page'
        ],
        [
            'key' => 'secondaryColor',
            'type' => 'text',
            'component' => 'ColorField',
            'is_required' => true,
            'label' => 'Secondary Color of page'
        ],
        [
            'key' => 'colorText',
            'type' => 'text',
            'component' => 'ColorField',
            'is_required' => true,
            'label' => 'Text Color of page'
        ],
        [
            'key' => 'bodyColor',
            'type' => 'text',
            'component' => 'ColorField',
            'is_required' => true,
            'label' => 'Body Color of page'
        ],
        [
            'key' => 'bgNavbar',
            'type' => 'text',
            'component' => 'ColorField',
            'is_required' => true,
            'label' => 'Navbar Color of page'
        ],
        [
            'key' => 'keyGoogle',
            'type' => 'text',
            'component' => 'TextField',
            'is_required' => false,
            'label' => 'Key of Google Analytics'
        ]
    ];

    protected $table = 'cms_config';
    protected $guarded = [];
}
