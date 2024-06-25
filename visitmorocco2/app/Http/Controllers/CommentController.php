<?php
// app/Http/Controllers/CommentController.php
namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $postId)
    {
        $validated = $request->validate([
            'body' => 'required|string',
        ]);

        $comment = Comment::create([
            'post_id' => $postId,
            'user_id' => auth()->id(),
            'body' => $validated['body'],
        ]);

        return response()->json($comment, 201);
    }

    public function destroy(Comment $comment)
    {
        $this->authorize('delete', $comment);
        $comment->delete();
        return response()->json(null, 204);
    }
}
