<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('family_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('family_group_user', function (Blueprint $table) {
            $table->foreignId('family_group_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->boolean('is_admin')->default(false);
            $table->primary(['family_group_id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('family_group_user');
        Schema::dropIfExists('family_groups');
    }
};