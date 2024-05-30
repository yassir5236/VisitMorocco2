<?php




namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Utilisateur;
use Illuminate\Support\Facades\Hash;

class UtilisateurController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'nomUtilisateur' => 'required|string|unique:utilisateurs',
            'email' => 'required|email|unique:utilisateurs',
            'motDePasse' => 'required|string|min:6',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048' // Validation de l'image
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('images'), $imageName);
            $imagePath = 'images/' . $imageName;
        }

        $user = Utilisateur::create([
            'nomUtilisateur' => $request->nomUtilisateur,
            'email' => $request->email,
            'motDePasse' => Hash::make($request->motDePasse),
            'image' => $imagePath // Enregistrez le chemin de l'image
        ]);

        return response()->json(['user' => $user, 'message' => 'Utilisateur enregistré avec succès'], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'motDePasse' => 'required|string',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->motDePasse])) {
            $user = Auth::user();
            $token = $user->createToken('Token d\'accès')->plainTextToken;
            return response()->json(['token' => $token, 'user' => $user], 200);
        } else {
            return response()->json(['message' => 'Les informations d\'identification sont incorrectes'], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Déconnexion réussie'], 200);
    }

   
}

