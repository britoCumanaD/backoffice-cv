<?php

namespace App\Interfaces\CMS;

class LayoutInterface
{
    // Template Types
    const TYPE_PAGE     = 'page';
    const TYPE_MODULE   = 'module';

    const ALL_TYPES = [
        self::TYPE_PAGE,
        self::TYPE_MODULE,
    ];

    const ALL_TYPES_LABELLED = [
        self::TYPE_PAGE => 'Page',
        self::TYPE_MODULE => 'Module',
    ];

}
