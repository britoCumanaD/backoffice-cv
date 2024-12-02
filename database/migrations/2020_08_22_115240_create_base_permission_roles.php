<?php

use App\Interfaces\PermissionInterface;
use App\Interfaces\RoleInterface;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Support\Facades\Hash;

class CreateBasePermissionRoles extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create the new permissions
        foreach ($this->getNewPermissions() as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Create the new roles and assign any permissions
        foreach ($this->getNewRoles() as $role_name => $permissions) {
            $role = Role::create(['name' => $role_name]);
            // Assign the permissions to the role
            foreach ($permissions as $permission) {
                $role->givePermissionTo($permission);
            }
        }

        $user = User::factory()->create([
            'first_name'    => 'Admin',
            'last_name'     => 'Account',
            'email'         => 'admin@example.com',
            'password'      => Hash::make('AdminPassword')
        ]);
        $user->assignRole(Role::whereName(RoleInterface::ADMIN)->first());
        $user->assignRole(Role::whereName(RoleInterface::USER)->first());

        $user = $user = User::factory()->create([
            'first_name'    => 'Super',
            'last_name'     => 'Account',
            'email'         => 'super@example.com',
            'password'      => Hash::make('SuperPassword')
        ]);
        $user->assignRole(Role::whereName(RoleInterface::ADMIN)->first());
        $user->assignRole(Role::whereName(RoleInterface::SUPER)->first());
        $user->assignRole(Role::whereName(RoleInterface::USER)->first());

        $user = $user = User::factory()->create([
            'first_name'    => 'User',
            'last_name'     => 'Account',
            'email'         => 'user@example.com',
            'password'      => Hash::make('UserPassword')
        ]);
        $user->assignRole(Role::whereName(RoleInterface::USER)->first());
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Delete the new Permissions and Roles
        Permission::whereIn('name', $this->getNewPermissions())->delete();
        Role::whereIn('name', array_keys($this->getNewRoles()))->delete();
    }


    /**
     * New Permissions being added in the migration
     *
     * @return array
     */
    protected function getNewPermissions()
    {
        return [
            // CMS
            PermissionInterface::CREATE_CMS,
            PermissionInterface::DELETE_CMS,
            PermissionInterface::EDIT_CMS,
            PermissionInterface::VIEW_CMS,

            PermissionInterface::CREATE_CMS_PAGE,
            PermissionInterface::DELETE_CMS_PAGE,
            PermissionInterface::EDIT_CMS_PAGE,
            PermissionInterface::VIEW_CMS_PAGE,
            
            // Advanced CMS
            PermissionInterface::CREATE_CMS_ADVANCED,
            PermissionInterface::DELETE_CMS_ADVANCED,
            PermissionInterface::EDIT_CMS_ADVANCED,
            PermissionInterface::VIEW_CMS_ADVANCED,
            // CRM Contacts
            PermissionInterface::CREATE_CRM_CONTACTS,
            PermissionInterface::DELETE_CRM_CONTACTS,
            PermissionInterface::EDIT_CRM_CONTACTS,
            PermissionInterface::VIEW_CRM_CONTACTS,
            // CRM Form Submissions
            PermissionInterface::VIEW_CRM_FORM_SUBMISSIONS,
            // CRM Forms
            PermissionInterface::CREATE_CRM_FORMS,
            PermissionInterface::DELETE_CRM_FORMS,
            PermissionInterface::EDIT_CRM_FORMS,
            PermissionInterface::VIEW_CRM_FORMS,
            // File Manager
            PermissionInterface::EDIT_FILE_MANAGER,
            PermissionInterface::VIEW_FILE_MANAGER,
            // Profile
            PermissionInterface::EDIT_PROFILE,
            PermissionInterface::VIEW_PROFILE,
            // Telescope
            PermissionInterface::VIEW_TELESCOPE,
            // Users
            PermissionInterface::CREATE_USERS,
            PermissionInterface::DELETE_USERS,
            PermissionInterface::EDIT_USERS,
            PermissionInterface::VIEW_USERS,
        ];
    }

    /**
     * New Roles with the associated permissions
     *
     * @return array[]
     */
    protected function getNewRoles()
    {
        return [
            RoleInterface::SUPER => [
                // CMS
                PermissionInterface::CREATE_CMS,
                PermissionInterface::DELETE_CMS,
                PermissionInterface::EDIT_CMS,
                PermissionInterface::VIEW_CMS,

                PermissionInterface::CREATE_CMS_PAGE,
                PermissionInterface::DELETE_CMS_PAGE,
                PermissionInterface::EDIT_CMS_PAGE,
                PermissionInterface::VIEW_CMS_PAGE,
                
                PermissionInterface::VIEW_CMS_ADVANCED,
                PermissionInterface::CREATE_CRM_CONTACTS,
                PermissionInterface::DELETE_CRM_CONTACTS,
                PermissionInterface::EDIT_CRM_CONTACTS,
                PermissionInterface::VIEW_CRM_CONTACTS,
                PermissionInterface::VIEW_CRM_FORM_SUBMISSIONS,
                PermissionInterface::CREATE_CRM_FORMS,
                PermissionInterface::DELETE_CRM_FORMS,
                PermissionInterface::EDIT_CRM_FORMS,
                PermissionInterface::VIEW_CRM_FORMS,
                PermissionInterface::EDIT_FILE_MANAGER,
                PermissionInterface::VIEW_FILE_MANAGER,
                PermissionInterface::EDIT_PROFILE,
                PermissionInterface::VIEW_PROFILE,
                PermissionInterface::CREATE_USERS,
                PermissionInterface::DELETE_USERS,
                PermissionInterface::EDIT_USERS,
                PermissionInterface::VIEW_USERS,
            ],
            RoleInterface::ADMIN => [
                PermissionInterface::EDIT_CMS_PAGE,
                PermissionInterface::VIEW_CMS_PAGE,
                PermissionInterface::EDIT_CMS_ADVANCED,
                PermissionInterface::VIEW_CMS_ADVANCED,
                PermissionInterface::CREATE_CRM_CONTACTS,
                PermissionInterface::DELETE_CRM_CONTACTS,
                PermissionInterface::EDIT_CRM_CONTACTS,
                PermissionInterface::VIEW_CRM_CONTACTS,
                PermissionInterface::EDIT_CRM_FORMS,
                PermissionInterface::VIEW_CRM_FORMS,
                PermissionInterface::EDIT_FILE_MANAGER,
                PermissionInterface::VIEW_FILE_MANAGER,
            ],
            RoleInterface::USER => [
                PermissionInterface::VIEW_CMS_ADVANCED,
                PermissionInterface::VIEW_CRM_CONTACTS,
                PermissionInterface::VIEW_CRM_FORM_SUBMISSIONS,
                PermissionInterface::VIEW_FILE_MANAGER,
                PermissionInterface::VIEW_PROFILE,
                PermissionInterface::VIEW_CMS_PAGE,
            ],
        ];
    }


}