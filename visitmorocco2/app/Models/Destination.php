<?php
// app/Models/Destination.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model {
    use HasFactory;

    protected $fillable = [
        'nom',
        'description',
        'region_id',
        'type_id',
        'interet_id' 

    ];
    public function region() {
        return $this->belongsTo(Region::class);
    }

    public function type() {
        return $this->belongsTo(Type::class);
    }

    public function interet() {
        return $this->belongsTo(Interet::class);
    }
}
