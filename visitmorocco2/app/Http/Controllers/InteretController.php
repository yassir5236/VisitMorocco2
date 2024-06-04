<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Interet;
use Illuminate\Support\Facades\Validator;

class InteretController extends Controller
{
    // Lister tous les intérêts
    public function index()
    {
        $interets = Interet::all();
        return response()->json($interets, 200);
    }

    // Créer un nouvel intérêt
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

        // Créer et sauvegarder l'intérêt
        $interet = Interet::create($request->all());
        return response()->json($interet, 201);
    }

    // Afficher un intérêt spécifique
    public function show($id)
    {
        $interet = Interet::find($id);

        if (is_null($interet)) {
            return response()->json(['message' => 'Interest not found'], 404);
        }

        return response()->json($interet, 200);
    }

    // Mettre à jour un intérêt spécifique
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

        $interet = Interet::find($id);

        if (is_null($interet)) {
            return response()->json(['message' => 'Interest not found'], 404);
        }

        // Mettre à jour les informations de l'intérêt
        $interet->update($request->all());
        return response()->json($interet, 200);
    }

    // Supprimer un intérêt spécifique
    public function destroy($id)
    {
        $interet = Interet::find($id);

        if (is_null($interet)) {
            return response()->json(['message' => 'Interest not found'], 404);
        }

        $interet->delete();
        return response()->json(['message' => 'Interest deleted successfully'], 200);
    }
}

