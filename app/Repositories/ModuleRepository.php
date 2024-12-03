<?php
namespace App\Repositories;

use App\Models\Module;
use App\Models\ModuleCreated;

class ModuleRepository
{
    public function getCustomModuleData(int $moduleId, array $params = []): array
    {
        $customModule = Module::select('id', 'tableName')->find($moduleId);

        if (!$customModule) {
            return [];
        }

        $model = new ModuleCreated();
        $model->setTable($customModule->tableName);
        $fields = $customModule->fields->pluck('columnName')->toArray(); 

        $haveAll = $params['all'] ?? true;

        return $haveAll
            ? $model->select($fields)->get()->toArray()
            : $model->select($fields)->paginate($params['per_page'] ?? 10, ['*'], 'page', $params['page'] ?? 1)->toArray();
    }
}
