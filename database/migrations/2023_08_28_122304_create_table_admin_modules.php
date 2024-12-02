<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableAdminModules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_modules', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('tableName');
            $table->string('icon');
            $table->unsignedBigInteger('layout_id')->nullable();
            $table->unsignedBigInteger('template_id')->nullable();
            $table->json('relations')->nullable();
            $table->boolean('status')->default(true);
            $table->timestamps();

            $table->foreign('layout_id')
                ->references('id')
                ->on('cms_layouts')
                ->onDelete('cascade');
            $table->foreign('template_id')
                ->references('id')
                ->on('cms_templates')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_modules');
    }
}
