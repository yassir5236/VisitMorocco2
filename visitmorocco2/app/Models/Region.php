<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'description',
        'image',
    ];

    public function destinations()
    {
        return $this->hasMany(Destination::class);
    }

    public function itineraries()
    {
        return $this->hasMany(Itinerary::class);
    }

    public function accommodations()
    {
        return $this->hasMany(Accommodation::class);
    }

    public function restaurants()
    {
        return $this->hasMany(Restaurant::class);
    }
}
