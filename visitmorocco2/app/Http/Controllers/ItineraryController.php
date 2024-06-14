<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers;
use App\Models\Itinerary;

use Illuminate\Http\Request;


class ItineraryController extends Controller
{
    public function index($regionId)
    {
        return Itinerary::where('region_id', $regionId)->get();
    }

    public function store(Request $request, $regionId)
    {
        $itinerary = Itinerary::create(array_merge($request->all(), ['region_id' => $regionId]));
        return response()->json($itinerary, 201);
    }

    public function show($regionId, $id)
    {
        return Itinerary::where(['region_id' => $regionId, 'id' => $id])->firstOrFail();
    }

    public function update(Request $request, $regionId, $id)
    {
        $itinerary = Itinerary::where(['region_id' => $regionId, 'id' => $id])->firstOrFail();
        $itinerary->update($request->all());
        return response()->json($itinerary, 200);
    }

    public function destroy($regionId, $id)
    {
        Itinerary::where(['region_id' => $regionId, 'id' => $id])->firstOrFail()->delete();
        return response()->json(null, 204);
    }
}
