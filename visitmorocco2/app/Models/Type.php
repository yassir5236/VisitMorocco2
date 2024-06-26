<?php

// app/Models/Type.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model {
    use HasFactory;

    protected $fillable = [
        'nom',
        'description'
    ];

    public function destinations() {
        return $this->hasMany(Destination::class);
    }


}

