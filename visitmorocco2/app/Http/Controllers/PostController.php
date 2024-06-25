<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // public function index()
    // {
    //     // $posts = Post::with('user', 'comments', 'likes')->orderByDesc('created_at')->get();
    //     $posts = Post::all();

    //     return response()->json($posts);
    // }

   
    public function index()
    {
        try {
            // Récupérer tous les posts avec la relation utilisateur chargée
            $posts = Post::with('utilisateur')->get();

            // Réponse JSON avec les posts récupérés
            return response()->json($posts, 200);
        } catch (\Exception $e) {
            // En cas d'erreur, retourner une réponse JSON avec l'erreur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'body' => 'required|string',
                'user_id' => 'required', // Assurez-vous que 'user_id' existe dans la table 'utilisateurs'
            ]);
    
            $post = Post::create([
                'user_id' => $request->user_id,
                'title' => $request->title,
                'body' => $request->body,
            ]);
    
            return response()->json($post, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    

    public function show(Post $post)
    {
        $post->load('user', 'comments', 'likes');
        return response()->json($post);
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post->update($request->only(['title', 'body']));

        return response()->json($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json(['message' => 'Post deleted']);
    }
}
