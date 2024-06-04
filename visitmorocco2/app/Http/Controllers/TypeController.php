<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;
use Illuminate\Support\Facades\Validator;

class TypeController extends Controller
{
    // Lister tous les types
    public function index()
    {
        $types = Type::all();
        return response()->json($types, 200);
    }

    // Créer un nouveau type
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

        // Créer et sauvegarder le type
        $type = Type::create($request->all());
        return response()->json($type, 201);
    }

    // Afficher un type spécifique
    public function show($id)
    {
        $type = Type::find($id);

        if (is_null($type)) {
            return response()->json(['message' => 'Type not found'], 404);
        }

        return response()->json($type, 200);
    }

    // Mettre à jour un type spécifique
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

        $type = Type::find($id);

        if (is_null($type)) {
            return response()->json(['message' => 'Type not found'], 404);
        }

        // Mettre à jour les informations du type
        $type->update($request->all());
        return response()->json($type, 200);
    }

    // Supprimer un type spécifique
    public function destroy($id)
    {
        $type = Type::find($id);

        if (is_null($type)) {
            return response()->json(['message' => 'Type not found'], 404);
        }

        $type->delete();
        return response()->json(['message' => 'Type deleted successfully'], 200);
    }
}
