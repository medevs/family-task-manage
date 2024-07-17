<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;
use App\Models\User;
use App\Models\Category;

class TasksTableSeeder extends Seeder
{
    public function run()
    {
        $user = User::first();
        $category = Category::first();

        Task::create([
            'title' => 'Do laundry',
            'description' => 'Wash and fold clothes',
            'user_id' => $user->id,
            'category_id' => $category->id,
            'due_date' => now()->addDays(2),
            'priority' => 'medium',
            'status' => 'pending',
        ]);

        Task::create([
            'title' => 'Grocery shopping',
            'description' => 'Buy groceries for the week',
            'user_id' => $user->id,
            'category_id' => $category->id,
            'due_date' => now()->addDay(),
            'priority' => 'high',
            'status' => 'pending',
        ]);
    }
}