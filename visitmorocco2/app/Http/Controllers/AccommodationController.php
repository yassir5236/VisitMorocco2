<?php

namespace App\Http\Controllers;
use App\Models\Accommodation;
use Illuminate\Http\Request;



class AccommodationController extends Controller
{
    public function index($regionId)
    {
        return Accommodation::where('region_id', $regionId)->get();
    }

    public function store(Request $request, $regionId)
    {
        $accommodation = Accommodation::create(array_merge($request->all(), ['region_id' => $regionId]));
        return response()->json($accommodation, 201);
    }

    public function show($regionId, $id)
    {
        return Accommodation::where(['region_id' => $regionId, 'id' => $id])->firstOrFail();
    }

    public function update(Request $request, $regionId, $id)
    {
        $accommodation = Accommodation::where(['region_id' => $regionId, 'id' => $id])->firstOrFail();
        $accommodation->update($request->all());
        return response()->json($accommodation, 200);
    }

    public function destroy($regionId, $id)
    {
        Accommodation::where(['region_id' => $regionId, 'id' => $id])->firstOrFail()->delete();
        return response()->json(null, 204);
    }
}
