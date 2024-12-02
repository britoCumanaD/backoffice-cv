<?php

use App\Interfaces\CMS\TemplateInterface;
use App\Interfaces\CMS\TemplateFieldInterface;
use App\Models\CMS\Layout;
use App\Models\CMS\Template;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnTypeCmsLayouts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cms_layouts', function($table) {
            $table->string('type', 255)->after('slug')->default('page');
        });

        // Create Layout
        $template = Template::create([
            'description'   => 'Default template for layouts.',
            'name'          => 'Default Layout Template',
            'slug'          => 'default-layout-template',
            'type'          => TemplateInterface::TYPE_LAYOUT,
        ]);

        $template->templateFields()->create([
            'name'  => 'Shared Content',
            'order' => 0,
            'slug'  => 'shared-content',
            'type'  => TemplateFieldInterface::TYPE_TEXT,
        ]);

        Layout::create([
            'name'          => 'Default Layout',
            'slug'          => 'default-layout',
            'template_id'   => $template->id,
            'type'          => TemplateInterface::TYPE_PAGE,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cms_layouts', function($table) {
            $table->dropColumn('type');
        });
    }
}
