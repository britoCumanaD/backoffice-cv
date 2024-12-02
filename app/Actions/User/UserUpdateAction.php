<?php

namespace App\Actions\User;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserUpdateAction
{
    public function handle(User $user, array $user_data): User
    {
        // Extract the roles data if it exists
        $roles_data = Arr::get($user_data, 'roles', []);
        unset($user_data['roles']);

        try {
            DB::beginTransaction();

            if (isset($user_data['password']) && !empty($user_data['password'])) {
                $user_data['password'] = Hash::make($user_data['password']);
            } else {
                unset($user_data['password']);
            }

            $user->update($user_data);
            $user = app(UserSetRolesAction::class)->handle($user, $roles_data);

            DB::commit();
            return $user;
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
