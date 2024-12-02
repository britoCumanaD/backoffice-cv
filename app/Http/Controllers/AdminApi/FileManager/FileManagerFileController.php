<?php

namespace App\Http\Controllers\AdminApi\FileManager;

use App\Actions\FileManager\FileManagerFileStoreAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileManagerFileController extends AbstractFileManagerController
{
    /**
     * Get a list of files based on the (optional) base directory
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $filesList = collect(Storage::disk($this->storage_disk)->files($request->get('directory')));

        $files = [];
        foreach ($filesList as $key => $file) {
            if($file!='.gitignore'){
                $files[] = [
                    'meta' => [
                        'path' => $file,
                        'size' => Storage::disk($this->storage_disk)->size($file),
                        'timestamp' => Storage::disk($this->storage_disk)->lastModified($file),
                        'type' => Storage::disk($this->storage_disk)->mimeType($file)
                    ],
                    'url' => Storage::disk($this->storage_disk)->url($file)
                ];
            }
        }

        return response()->json(compact('files'));

    }

    public function store(Request $request)
    {
        if (!config('tvi.file_manager.uploads.enabled')) {
            abort(403, 'Uploads are disabled.');
        }

        $directory = $request->get('directory', "");
        $file = $request->file('file');

        $action = new FileManagerFileStoreAction($this->storage_disk);
        return $action->handle($directory, $file);

    }


    public function delete($file)
    {
        $fileToDelete = str_replace('___', '/', $file);
        $files = new \Illuminate\Filesystem\Filesystem();
        $path =  storage_path(). "/app/public/{$fileToDelete}";
        if($files->exists($path))
            $files->delete($path);
        
    }
}
