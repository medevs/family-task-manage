<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $categories = ['Chores', 'Homework', 'Errands', 'Family Time'];

        foreach ($categories as $category) {
            Category::create(['name' => $category]);
        }
    }
}