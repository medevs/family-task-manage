<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FamilyGroup extends Model
{
    protected $fillable = ['name'];

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('is_admin');
    }
}