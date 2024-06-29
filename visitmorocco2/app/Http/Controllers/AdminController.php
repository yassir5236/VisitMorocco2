<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Activity;
use App\Models\Destination;
use App\Models\Reservation;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getStatistics()
    {
        $userCount = Utilisateur::count();
        $activityCount = Activity::count();
        $destinationCount = Destination::count();
        $reservationCount = Reservation::count();

        return response()->json([
            'users' => $userCount,
            'activities' => $activityCount,
            'destinations' => $destinationCount,
            'reservations' => $reservationCount,
        ]);
    }
}

