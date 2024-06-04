<?php



namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interet extends Model {
    use HasFactory;

    protected $fillable = [
        'nom',
        'description'
    ];

    public function destinations()
{
    return $this->belongsToMany(Destination::class);
}
}


