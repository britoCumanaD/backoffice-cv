<?php

namespace App\Interfaces\CMS;

class TemplateFieldInterface
{
    // Template s
    const TYPE_CMS_MENU          = 'cms_menu';
    const TYPE_CRM_FORM          = 'crm_form';
    const TYPE_IMAGE             = 'image';
    const TYPE_NUMBER            = 'number';
    const TYPE_REPEATER          = 'repeater';
    const TYPE_TEXT              = 'text';
    const TYPE_TEXTAREA          = 'textarea';
    const TYPE_WYSIWYG           = 'wysiwyg';
    const TYPE_SELECT            = 'select';
    const TYPE_SELECT_MULTI      = 'select Multiple';
    const TYPE_CHECKBOX          = 'checkbox';
    const TYPE_RADIO             = 'radio';
    const TYPE_QUILL_EDITOR      = 'quill editor';
    const TYPE_DATE              = 'date';
    const TYPE_HOUR              = 'hour';
    const TYPE_SELECT_BACKOFFICE = 'select_backoffice';
    const TYPE_DATE_HOUR         = 'date_hour';
    const TYPE_PHONE             = 'phone';
    const TYPE_MODULE            = 'module_custom';
    const TYPE_URL               = 'url';
    const TYPE_AUDIO             = 'audio';



    const ALL_TYPES = [
        self::TYPE_CMS_MENU,
        self::TYPE_CRM_FORM,
        self::TYPE_IMAGE,
        self::TYPE_NUMBER,
        self::TYPE_REPEATER,
        self::TYPE_TEXT,
        self::TYPE_TEXTAREA,
        self::TYPE_WYSIWYG,
        self::TYPE_SELECT,
        self::TYPE_SELECT_MULTI,
        self::TYPE_CHECKBOX,
        self::TYPE_RADIO,
        self::TYPE_QUILL_EDITOR,
        self::TYPE_URL,
        self::TYPE_AUDIO,
        self::TYPE_MODULE
    ];

    const ALL_TYPES_MODULES = [
        self::TYPE_IMAGE,
        self::TYPE_NUMBER,
        self::TYPE_TEXT,
        self::TYPE_TEXTAREA,
        self::TYPE_QUILL_EDITOR,
        self::TYPE_DATE,
        self::TYPE_HOUR,
        self::TYPE_DATE_HOUR,
        self::TYPE_SELECT_BACKOFFICE,
        self::TYPE_CHECKBOX,
        self::TYPE_RADIO,
        self::TYPE_PHONE,
    ];

    // Labelled types - typically used for showing the types to a user
    const ALL_TYPES_LABELLED = [
        self::TYPE_CMS_MENU     => "CMS Menu",
        self::TYPE_CRM_FORM     => "CRM Form",
        self::TYPE_IMAGE        => "Image",
        self::TYPE_NUMBER       => "Number",
        self::TYPE_REPEATER     => "Repeater",
        self::TYPE_TEXT         => "Text",
        self::TYPE_TEXTAREA     => "Text Area",
        //self::TYPE_WYSIWYG      => "WYSIWYG",
        self::TYPE_SELECT       => "Select",
        self::TYPE_SELECT_MULTI => "Select Multiple",
        self::TYPE_CHECKBOX     => "Checkbox",
        self::TYPE_RADIO        => "Radio",
        self::TYPE_QUILL_EDITOR => "Quill Editor",
        self::TYPE_URL          => "Url",
        self::TYPE_AUDIO        => "Audio",
        self::TYPE_MODULE       => "Module"
    ];

    const ALL_TYPES_MODULES_LABELLED = [
        self::TYPE_IMAGE                => "Image",
        self::TYPE_NUMBER               => "Number",
        self::TYPE_TEXT                 => "Text",
        self::TYPE_TEXTAREA             => "Text Area",
        self::TYPE_QUILL_EDITOR         => "Quill Editor",
        self::TYPE_DATE                 => "Date",
        self::TYPE_HOUR                 => "Hour",
        self::TYPE_SELECT_BACKOFFICE    => "Select",
    ];

    // Types that are allowed to be used in a repeater -- essentially any that don't have relationships
    const REPEATER_TYPES = [
        self::TYPE_IMAGE,
        self::TYPE_NUMBER,
        self::TYPE_TEXT,
        self::TYPE_TEXTAREA,
        self::TYPE_QUILL_EDITOR,
        self::TYPE_IMAGE,
        self::TYPE_AUDIO,
    ];

    static function getAllRepeaterTypesLabelled() : array
    {
        $types = [];

        foreach (self::REPEATER_TYPES as $type) {
            $types[$type] = self::ALL_TYPES_LABELLED[$type];
        }

        return $types;
    }

    // Types that should be cast/stored as JSON
    const JSON_TYPES =[
        self::TYPE_REPEATER
    ];


    // Default settings for each type
    const SETTINGS = [
        self::TYPE_CMS_MENU => [],
        self::TYPE_CRM_FORM => [],
        self::TYPE_IMAGE    => [],
        self::TYPE_NUMBER   => [
            'min' => null,
            'max' => null,
        ],
        self::TYPE_REPEATER => [
            'template_id' => '',
        ],
        self::TYPE_TEXT     => [
            'max_length' => null,
        ],
        self::TYPE_TEXTAREA => [
            'max_length' => null,
            'rows'       => null,
        ],
        //self::TYPE_WYSIWYG  => [],
        self::TYPE_SELECT         => [
            'values' => null,
        ],
        self::TYPE_SELECT_MULTI   => [
            'values' => null,
        ],
        self::TYPE_CHECKBOX         => [
            'values' => null,
        ],
        self::TYPE_RADIO         => [
            'values' => null,
        ],
        self::TYPE_QUILL_EDITOR  => [],
        self::TYPE_DATE    => [],
        self::TYPE_HOUR    => [],
        self::TYPE_SELECT_BACKOFFICE    => [
            'options' => [],
        ],
        self::TYPE_DATE_HOUR    => [],
        self::TYPE_PHONE    => [],
        self::TYPE_URL    => [],
        self::TYPE_AUDIO    => [],
    ];


    // Table/Model field helpers
    const FIELD_NAME_MAX_LENGTH = 120;
    const FIELD_SLUG_MAX_LENGTH = self::FIELD_NAME_MAX_LENGTH; // Slug shouldn't be any longer than name
    const FIELD_TYPE_MAX_LENGTH = 50;
}
