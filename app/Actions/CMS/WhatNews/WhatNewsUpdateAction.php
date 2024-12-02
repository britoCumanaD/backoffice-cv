<?php

namespace App\Actions\CMS\WhatNews;

use App\Models\CMS\Page as WhatNews;
use App\Traits\CMS\ManagesContent;
use App\Traits\CMS\ManagesMetadata;
use App\Traits\CMS\ManagesPageUrl;
use Exception;
use Illuminate\Support\Facades\DB;

class WhatNewsUpdateAction
{
    use ManagesContent, ManagesMetadata, ManagesPageUrl;

    public function handle(WhatNews $WhatNew, array $page_data) : WhatNews
    {
        $this->data = $page_data;

        // Extract the content data
        $content    = $this->extractContentFromData();
        $metadata   = $this->extractMetadataFromData();
        $url        = $this->extractUrlFromData();

        try {
            DB::beginTransaction();

            $WhatNew->update($this->data);
            $WhatNew->load('template');
            $WhatNew->load('template.templateFields');
            $WhatNew->load('metadata');
            $WhatNew->load('parent');
            $WhatNew->load('parent.url');

            $this->updateContent($WhatNew, $content);
            $this->updateMetadata($WhatNew, $metadata);
            $this->updatePageUrl($WhatNew, $url);

            DB::commit();

            return $WhatNew;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
