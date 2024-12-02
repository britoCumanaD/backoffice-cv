<?php

use App\Interfaces\CMS\TemplateInterface;
use App\Interfaces\CMS\TemplateFieldInterface;
use App\Models\CMS\Layout;
use App\Models\CMS\Template;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCmsTemplateFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms_template_fields', function (Blueprint $table) {
            // Field Creation
            $table->id();
            $table->unsignedBigInteger('template_id');
            $table->string('type', TemplateFieldInterface::FIELD_TYPE_MAX_LENGTH);
            $table->string('name', TemplateFieldInterface::FIELD_NAME_MAX_LENGTH);
            $table->string('slug', TemplateFieldInterface::FIELD_SLUG_MAX_LENGTH);
            $table->text('description')->nullable()->default(null);
            $table->boolean('is_required')->default(false);
            $table->unsignedInteger('order');
            $table->json('settings')->nullable()->default(null);
            $table->timestamps();
            $table->softDeletes();

            // Index Creation
            $table->foreign('template_id')
                ->references('id')
                ->on('cms_templates')
                ->onDelete('cascade');
            $table->index('type');
            $table->index('name');
            $table->index('slug');
        });

        // Create Template
        $templatePage = Template::create([
            'description'   => 'Default template for pages.',
            'name'          => 'Default Page Template',
            'slug'          => 'default-page-template',
            'type'          => TemplateInterface::TYPE_PAGE,
        ]);

        $templatePage->templateFields()->createMany([
            [
                'name'  => 'Header',
                'order' => 0,
                'slug'  => 'header',
                'type'  => TemplateFieldInterface::TYPE_TEXT,
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cms_template_fields');
    }
}
