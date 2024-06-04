<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Region;
use Illuminate\Support\Facades\Validator;

class RegionController extends Controller
{
    // Lister toutes les régions
    public function index()
    {
        $regions = Region::all();
        return response()->json($regions, 200);
    }

    // Créer une nouvelle région
    public function store(Request $request)
    {
        // Valider les données de la requête
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Créer et sauvegarder la région
        $region = Region::create($request->all());
        return response()->json($region, 201);
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

    // Mettre à jour une région spécifique
    public function update(Request $request, $id)
    {
        // Valider les données de la requête
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $region = Region::find($id);

        if (is_null($region)) {
            return response()->json(['message' => 'Region not found'], 404);
        }

        // Mettre à jour les informations de la région
        $region->update($request->all());
        return response()->json($region, 200);
    }

    // Supprimer une région spécifique
    public function destroy($id)
    {
        $region = Region::find($id);

        if (is_null($region)) {
            return response()->json(['message' => 'Region not found'], 404);
        }

        $region->delete();
        return response()->json(['message' => 'Region deleted successfully'], 200);
    }
}
