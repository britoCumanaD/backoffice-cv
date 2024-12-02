<?php

namespace App\Traits\CMS;

use App\Http\Resources\Web\CMS\ContentResource;
use App\Http\Resources\Web\CMS\MenuResource;
use App\Http\Resources\Web\CRM\FormResource;
use App\Interfaces\CMS\TemplateFieldInterface;
use App\Models\CMS\Menu;
use App\Models\CRM\Form;

trait ResourceHasContent
{
    protected function formatContent()
    {
        $content = ContentResource::collection($this->content)->keyBy('templateField.slug');

        // Loop through the content and get any "relation" fields
        $menu_fields = [];
        $form_fields = [];

        foreach ($content as $template_field_slug => $c) {
            if ($c->template_field_type === TemplateFieldInterface::TYPE_CMS_MENU) {
                $menu = Menu::whereId($c->data)->select('id','menu_items','name','slug')->first();
                if($menu)
                    $menu = $menu->toArray();

                $content[$template_field_slug] = $menu;
                
            } elseif ($c->template_field_type === TemplateFieldInterface::TYPE_CRM_FORM) {
                $form = Form::whereId($c->data)->select('id','name','slug')->with('formFields')->first();
                if($form)
                    $form = $form->toArray();

                $content[$template_field_slug] = $form;
            }
        }

        return $content;
    }
}
