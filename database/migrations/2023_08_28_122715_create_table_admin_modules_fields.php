<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableAdminModulesFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_modules_fields', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('admin_module_id');
            $table->string('name');
            $table->string('columnName');
            $table->string('type');
            $table->integer('order');
            $table->string('field_type');
            $table->string('field_type_setting');
            $table->boolean('is_required')->default(true);
            $table->timestamps();

            $table->foreign('admin_module_id')
                ->references('id')
                ->on('admin_modules')
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
        Schema::dropIfExists('admin_modules_fields');
    }
}
