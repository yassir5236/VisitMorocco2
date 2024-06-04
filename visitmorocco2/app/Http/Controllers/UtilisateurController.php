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
            'image' => 'nullable|image' // Validation de l'image
        ]);


        $user = new Utilisateur();
        $user->nomUtilisateur = $request->nomUtilisateur;
        $user->email = $request->email;
        $user->motDePasse = bcrypt($request->motDePasse);
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('imagesUsers', 'public');

            $user->image = $imagePath;
        }
        $user->save();

        return response()->json(['user' => $user, 'message' => 'Utilisateur enregistré avec succès'], 201);
    }



    // public function login(Request $request)
    // {
    //     // $request->validate([
    //     //     'email' => 'required|email',
    //     //     'motDePasse' => 'required|string',
    //     // ]);

    //     // if (Auth::attempt(['email' => $request->email, 'password' => $request->motDePasse])) {
    //     //     $user = Auth::user();
    //     //     $token = $user->createToken('Token d\'accès')->plainTextToken;
    //     //     return response()->json(['token' => $token, 'user' => $user], 200);
    //     // } else {
    //     //     return response()->json(['message' => 'Les informations d\'identification sont incorrectes'], 401);
    //     // }

    //     $user = Utilisateur::where('email', $request->email)->first();
    //         if(!$user || !Hash::check($request->motDePasse,$user->motDePasse)){
    //             return ["error" =>"Email or password is not matched"];
    //         }


    //     return $user;
    // }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'motDePasse' => 'required|string',
        ]);

        $user = Utilisateur::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->motDePasse, $user->motDePasse)) {
           
            return response()->json(['message' => 'Les informations d\'identification sont incorrectes'], 401);
        }
      

        return response()->json(['message' => 'Connexion réussie', 'user' => $user], 200);
    }



    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Déconnexion réussie'], 200);
    }
}
