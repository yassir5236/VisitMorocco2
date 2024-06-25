<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Like;
use App\Models\Utilisateur;



class Post extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'title', 'body'];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'user_id'); // 'user_id' est la clé étrangère dans la table 'posts'
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
