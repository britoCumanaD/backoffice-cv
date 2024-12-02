<?php

namespace App\Actions\CMS\WhatNews;

use App\Models\CMS\Page as WhatNews;
use App\Traits\CMS\ManagesContent;
use App\Traits\CMS\ManagesMetadata;
use App\Traits\CMS\ManagesPageUrl;
use Exception;
use Illuminate\Support\Facades\DB;

class WhatNewsStoreAction
{
    use ManagesContent, ManagesMetadata, ManagesPageUrl;

    public function handle(array $page_data) : WhatNews
    {
        $this->data = $page_data;

        // Extract the relation data
        $content    = $this->extractContentFromData();
        $metadata   = $this->extractMetadataFromData();
        $url        = $this->extractUrlFromData();

        try {
            DB::beginTransaction();

            $WhatNew = WhatNews::create($this->data);
            $WhatNew->load('parent');
            $WhatNew->load('parent.url');

            $this->storeContent($WhatNew, $content);
            $this->storeMetadata($WhatNew,$metadata);
            $this->storePageUrl($WhatNew, $url);

            DB::commit();

            return $WhatNew;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
