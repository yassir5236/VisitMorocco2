<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Region;
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\Validator;

class RegionController extends Controller
{
    // Lister toutes les régions
    public function index()
    {
        $regions = Region::all();
        return response()->json($regions, 200);
    }




    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);


        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        } else {
            $imagePath = null;
        }

        //   return 'hello';

        Region::create([
            'nom' => $request->nom,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return response()->json(['message' => 'Region created successfully.']);
    }







    // Afficher une région spécifique
    public function show($id)
    {
        $region = Region::find($id);

        if (is_null($region)) {
            return response()->json(['message' => 'Region not found'], 404);
        }

        return response()->json($region, 200);
    }






    // public function update(Request $request, $id)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'nom' => 'required|string|max:255',
    //         'description' => 'nullable|string',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json($validator->errors(), 400);
    //     }

    //     $region = Region::find($id);

    //     if (is_null($region)) {
    //         return response()->json(['message' => 'Region not found'], 404);
    //     }

    //     $region->update($request->all());
    //     return response()->json($region, 200);
    // }



    public function update(Request $request, Region $region)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);

        if ($request->hasFile('image')) {
          
            $imagePath = $request->file('image')->store('images', 'public');
        } else {
            $imagePath = $region->image;
        }



        $region->update([
            'nom' => $request->name,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return response()->json(['message' => 'Region updated successfully.']);
    }



    public function destroy($id)
    {
        $region = Region::find($id);

        if (is_null($region)) {
            return response()->json(['message' => 'Region not found'], 404);
        }

        $region->delete();
        return response()->json(['message' => 'Region deleted successfully'], 200);
    }



    // public function search(Request $request)
    // {
    //     $query = $request->input('query');
    //     $regions = Region::where('nom', 'LIKE', "%{$query}%")->get();

    //     return response()->json($regions);
    // }


    // public function search(Request $request)
    // {
    //     $query = $request->input('query');

    //     if (empty($query)) {
    //         $regions = Region::all(); // Récupère toutes les régions si la requête est vide
    //     } else {
    //         $regions = Region::where('nom', 'LIKE', "%{$query}%")->get();
    //     }

    //     return response()->json($regions);
    // }


    public function search(Request $request)
    {
        $query = $request->input('query');

        if (empty($query)) {
            // Fetch all regions along with their guides
            $regions = Region::with(['itineraries', 'accommodations', 'restaurants'])->get();
        } else {
            // Fetch regions based on search query along with their guides
            $regions = Region::where('nom', 'LIKE', "%{$query}%")
                ->with(['itineraries', 'accommodations', 'restaurants'])
                ->get();
        }

        return response()->json($regions);
    }

    // public function search(Request $request)
    // {
    //     $query = $request->input('query');

    //     $regions = Region::where('nom', 'like', '%'.$query.'%')->get();

    //     return response()->json($regions);
    // }
}
