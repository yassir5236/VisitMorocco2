<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use App\Models\Image;
use Illuminate\Validation\ValidationException;



use Illuminate\Http\Request;

class DestinationController extends Controller
{


    // public function index()
    // {
    //     $destinations = Destination::all();
    //     return response()->json($destinations);
    // }

    public function index()
{
    $destinations = Destination::with('images')->get();
    return response()->json($destinations);
}

    public function create()
    {
        return view('destinations.create');
    }




    public function store(Request $request)
    {
        try {
            $request->validate([
                'nom' => 'required|string|max:255',
                'description' => 'required|string',
                'region_id' => 'nullable|exists:regions,id',
                'type_id' => 'nullable|exists:types,id',
                'interet_id' => 'nullable|exists:interets,id',
                'latitude' => 'required|numeric',
                'longitude' => 'required|numeric',
                'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            ]);

            $destination = Destination::create($request->all());

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $path = $image->store('images', 'public');
                    Image::create(['destination_id' => $destination->id, 'path' => $path]);
                }
            }

            return response()->json($destination, 201);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }
    }

    public function update(Request $request, Destination $destination)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'required|string',
            'region_id' => 'nullable|exists:regions,id',
            'type_id' => 'nullable|exists:types,id',
            'interet_id' => 'nullable|exists:interets,id',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $destination->update($request->all());

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('images', 'public');
                Image::create(['destination_id' => $destination->id, 'path' => $path]);
            }
        }

        return response()->json($destination);
    }






    // public function show(Destination $destination)

    // {

    //     return response()->json($destination);
    // }


    public function show(Destination $destination)
    {
        // Eager load images relationship
        $destination = $destination->load('images');

        return response()->json($destination);
    }

    public function edit(Destination $destination)
    {
        return view('destinations.edit', compact('destination'));
    }


    public function destroy(Destination $destination)
    {
        $destination->delete();

        return response()->json(null, 204);
    }




    // public function search(Request $request)
    // {
    //     $query = Destination::query();
  
    
    //     if ($request->has('search')) {
    //         $searchTerm = $request->input('search');
    //         $query->where(function ($q) use ($searchTerm) {
    //             $q->whereHas('region', function ($query) use ($searchTerm) {
    //                 $query->where('nom', 'LIKE', "%{$searchTerm}%");
    //             })
    //             ->orWhereHas('type', function ($query) use ($searchTerm) {
    //                 $query->where('nom', 'LIKE', "%{$searchTerm}%");
    //             })
    //             ->orWhereHas('interet', function ($query) use ($searchTerm) {
    //                 $query->where('nom', 'LIKE', "%{$searchTerm}%");
    //             });
    //         });
    //     }
    
    //     $destinations = $query->get();
    
    //     return response()->json($destinations);
    // }



    public function search(Request $request)
{
    $query = Destination::query();

    if ($request->has('search')) {
        $searchTerm = $request->input('search');
        $query->where(function ($q) use ($searchTerm) {
            $q->whereHas('region', function ($query) use ($searchTerm) {
                $query->where('nom', 'LIKE', "%{$searchTerm}%");
            })
            ->orWhereHas('type', function ($query) use ($searchTerm) {
                $query->where('nom', 'LIKE', "%{$searchTerm}%");
            })
            ->orWhereHas('interet', function ($query) use ($searchTerm) {
                $query->where('nom', 'LIKE', "%{$searchTerm}%");
            });
        });
    }

    // Eager load the 'images' relationship
    $destinations = $query->with('images')->get();

    return response()->json($destinations);
}


    
    
}
