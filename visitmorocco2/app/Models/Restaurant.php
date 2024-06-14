<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;

    protected $fillable = [
        'region_id',
        'name',
        'description',
    ];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }
}