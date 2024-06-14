<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;


class RestaurantController extends Controller
{
    public function index($regionId)
    {
        return Restaurant::where('region_id', $regionId)->get();
    }

    public function store(Request $request, $regionId)
    {
        $restaurant = Restaurant::create(array_merge($request->all(), ['region_id' => $regionId]));
        return response()->json($restaurant, 201);
    }

    public function show($regionId, $id)
    {
        return Restaurant::where(['region_id' => $regionId, 'id' => $id])->firstOrFail();
    }

    public function update(Request $request, $regionId, $id)
    {
        $restaurant = Restaurant::where(['region_id' => $regionId, 'id' => $id])->firstOrFail();
        $restaurant->update($request->all());
        return response()->json($restaurant, 200);
    }

    public function destroy($regionId, $id)
    {
        Restaurant::where(['region_id' => $regionId, 'id' => $id])->firstOrFail()->delete();
        return response()->json(null, 204);
    }
}