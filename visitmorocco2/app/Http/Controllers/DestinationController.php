<?php

// app/Http/Controllers/DestinationController.php
namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;

class DestinationController extends Controller {
    public function index() {
        return Destination::with('region', 'type', 'interets')->get();
    }

    public function show($id) {
        return Destination::with('region', 'type', 'interets')->findOrFail($id);
    }

    public function store(Request $request) {
        $request->validate([
            'nom' => 'required',
            'description' => 'required',
            'region_id' => 'required',
            'type_id' => 'required',
        ]);

        return Destination::create($request->all());
    }

    public function update(Request $request, $id) {
        $destination = Destination::findOrFail($id);
        $destination->update($request->all());
        return $destination;
    }

    public function destroy($id) {
        Destination::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}

