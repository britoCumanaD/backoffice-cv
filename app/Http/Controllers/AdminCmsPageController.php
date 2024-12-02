<?php

namespace App\Http\Controllers;

use App\Interfaces\PermissionInterface;
use App\Traits\Admin\InertiaMeta;

class AdminCmsPageController extends AdminController
{

    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('CMS');

        $this->middleware(
            PermissionInterface::getMiddlewareString(PermissionInterface::CREATE_CMS_PAGE)
        )->only(['create', 'store']);

        $this->middleware(
            PermissionInterface::getMiddlewareString(PermissionInterface::DELETE_CMS_PAGE)
        )->only('destroy');

        $this->middleware(
            PermissionInterface::getMiddlewareString(PermissionInterface::EDIT_CMS_PAGE)
        )->only(['edit', 'update']);

        $this->middleware(
            PermissionInterface::getMiddlewareString(PermissionInterface::VIEW_CMS_PAGE)
        )->only(['index', 'show']);
    }
}
