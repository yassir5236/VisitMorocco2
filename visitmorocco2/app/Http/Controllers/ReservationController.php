<?php
namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'activity_id' => 'required',
        ]);

        $reservation = Reservation::create($request->all());

        return response()->json($reservation, 201);
    }
}
