<?php

namespace App\Http\Controllers\Admin\CMS;

use App\Http\Controllers\AdminCMSController;
use Illuminate\Http\Request;
use App\Models\CMS\Config;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Exception;

class ConfigController extends AdminCMSController
{
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('config');
    }

    public function index() : Response
    {
        $this->shareMeta();
        return Inertia::render('admin/cms/config/Index', [
            'config' => function () {
                return Config::orderBy('id', 'asc')->get();
            },
            'config_key' => Config::Keys
        ]);
    }
    
    
    public function store(Request $request) : RedirectResponse
    {
        try {
            DB::beginTransaction();

            foreach ($request->all() as $key => $value) {
                $config = Config::where('key', $key)->first();
                $newConfig = [
                    'key' => $key,
                    'value' => $value==null ? '' : $value
                ];
                if($config){
                    $config->key = $key;
                    $config->value = $value==null ? '' : $value;
                    $config->save();
                }else
                    $config = Config::create($newConfig);

            }

            DB::commit();
            return Redirect::to(route('admin.cms.config.index'))
            ->with('success', 'Setting Updated');

        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }

    }
}
