<?php

namespace Database\Seeders\Api;

use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $row = [
            [
                'name' => 'API Top Menu',
	            'slug' => 'api-top-menu',
	            'menu_items' => [
                    [
                        'rel' => '#',
                        'href' => '/',
                        'label' => 'Home',
                        'target' => 'inertia',
                        'child_items' => [],
                        'custom_class' => 'transition duration-500 hover:text-white',
                    ],
                    [
                        'rel' => '#',
                        'href' => '/about',
                        'label' => 'About Us',
                        'target' => 'inertia',
                        'child_items' => [],
                        'custom_class' => 'transition duration-500 hover:text-white',
                    ],
                    [
                        'rel' => '#',
                        'href' => '/customize',
                        'label' => 'Customize',
                        'target' => 'inertia',
                        'child_items' => [],
                        'custom_class' => 'transition duration-500 hover:text-white',
                    ],
                    [
                        'rel' => '#',
                        'href' => '/contact',
                        'label' => 'Contact Us',
                        'target' => 'inertia',
                        'child_items' => [],
                        'custom_class' => 'transition duration-500 hover:text-white',
                    ]
                ]
            ]
        ];

        foreach ($row as $value) {
            \App\Models\CMS\Menu::create($value);
        }
    }
}
