<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Utilisateur extends Authenticatable {
    use HasFactory;

    protected $fillable = [
        'nomUtilisateur',
        'email',
        'motDePasse',
        'image'

    ];

    protected $hidden = [
        'motDePasse'
    ];

    // public function publicationsForum() {
    //     return $this->hasMany(PublicationForum::class);
    // }

    // public function reservationsActivite() {
    //     return $this->hasMany(ReservationActivite::class);
    // }
}

