<?php

namespace App\Interfaces\CMS;

class PageInterface
{
    // Template Types
    const TYPE_PAGE              = 'page';
  
    const ALL_TYPES = [
        self::TYPE_PAGE,
    ];

    const ALL_TYPES_LABELLED = [
        self::TYPE_PAGE => 'Page',
    ];

}
