<?php


// app/Http/Controllers/LikeController.php
namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Request $request, $postId)
    {
        $like = Like::firstOrCreate([
            'post_id' => $postId,
            'user_id' => auth()->id(),
        ]);

        return response()->json($like, 201);
    }

    public function destroy($postId)
    {
        $like = Like::where('post_id', $postId)->where('user_id', auth()->id())->first();
        if ($like) {
            $like->delete();
        }
        return response()->json(null, 204);
    }
}
