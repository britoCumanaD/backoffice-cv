<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Module;
use App\Models\ModulesFields;
use Illuminate\Support\Facades\DB;

class UpdateModulesAdmin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $modules = Module::get()->toArray();
        foreach ($modules as $module) {
            $fields = ModulesFields::select('columnName', 'type', 'is_required')
                ->where('admin_module_id', $module['id'])
                ->orderBy('order')->get()->toArray();
            $table = DB::select("SELECT TABLE_NAME 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = '".env('DB_DATABASE')."' 
                AND TABLE_NAME = '".$module['tableName']."'");

            if (count($table) > 0) {
                $stringFields = "'id', 'layout_id', 'template_id', 'created_at', 'updated_at', 'deleted_at'";
                if(!is_null($module['relations'])){
                    $relations = json_decode($module['relations']);
                    foreach ($relations as $relation) {
                        $stringFields .= ", '".$relation->{'name'}."'";
                    }
                }

                foreach ($fields as $field) {
                    if($stringFields!='')
                        $stringFields .= ",";

                    
                    $stringFields .= "'".$field['columnName']."'";

                    /*if($field['name'] != $field['oldName']){
                        
                        Schema::table($module['tableName'], function($table) use ($field) {
                            $table->renameColumn($field['oldName'], $field['name']);
                        });

                    }else{*/
                        $column = DB::select("SELECT *
                            FROM information_schema.columns
                            WHERE table_name = '".$module['tableName']."' 
                            AND COLUMN_NAME = '".$field['columnName']."'
                            AND TABLE_SCHEMA = '".env('DB_DATABASE')."'");
                        
                        if(count($column)>0){
                            if($field['type']=='boolean')
                                $field['type'] = 'integer';
                            
                            Schema::table($module['tableName'], function($table) use ($field) {
                                $table->{$field['type']}($field['columnName'])->nullable($field['is_required'] == 0)->change();
                            });
                        } else {
                            Schema::table($module['tableName'], function($table) use ($field) {
                                $table->{$field['type']}($field['columnName'])->nullable($field['is_required'] == 0)->after('template_id');
                            });
                        }
                    //}

                }

                $columns = DB::select("SELECT *
                    FROM information_schema.columns
                    WHERE table_name = '".$module['tableName']."' 
                    AND COLUMN_NAME NOT IN (".$stringFields.")
                    AND TABLE_SCHEMA = '".env('DB_DATABASE')."'");
                foreach ($columns as $column) {
                    Schema::table($module['tableName'], function($table) use ($column) {
                        $table->dropColumn($column->{'COLUMN_NAME'});
                    });
                }

            } else {
                Schema::create($module['tableName'], function (Blueprint $newtable) use ($fields, $module) {
                    $newtable->id();
                    $newtable->unsignedBigInteger('layout_id')->nullable();
                    $newtable->unsignedBigInteger('template_id')->nullable();
                    if(!is_null($module['relations'])){
                        $relations = json_decode($module['relations']);
                        foreach ($relations as $relation) {
                            switch ($relation->{'type'}) {
                                case 'one_to_one':
                                case 'one_to_many':
                                    $newtable->unsignedBigInteger($relation->{'name'})->nullable();
                                    $newtable->foreign($relation->{'name'})
                                        ->references('id')
                                        ->on($relation->{'table'})
                                        ->onDelete('cascade');
                                break;
                            }
                        }
                    }
                    foreach ($fields as $field) {
                        $newtable->{$field['type']}($field['columnName'])->nullable($field['is_required'] == 0);
                    }
                    $newtable->timestamps();
                    $newtable->softDeletes();

                    $newtable->foreign('layout_id')
                        ->references('id')
                        ->on('cms_layouts')
                        ->onDelete('cascade');
                    $newtable->foreign('template_id')
                        ->references('id')
                        ->on('cms_templates')
                        ->onDelete('cascade');
                });
            }
        }
    }

    public function down()
    {
        //
    }
}
