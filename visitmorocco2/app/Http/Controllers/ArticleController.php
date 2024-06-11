<?php

namespace App\Http\Controllers;
use App\Models\Article;
// use Article as GlobalArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;






class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::with('category')->get();
        return response()->json($articles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif', // Max 2MB, and it must be an image file.
        ]);

        $article = new Article();
        $article->title = $request->title;
        $article->content = $request->content;
        $article->category_id = $request->category_id;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('article_images');
            $article->image = $imagePath;
        }

        $article->save();

        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'required|exists:categories,id',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Max 2MB, and it must be an image file.
        ]);

        $article->title = $request->title;
        $article->content = $request->content;
        $article->category_id = $request->category_id;

        if ($request->hasFile('image')) {
            // Delete the old image
            Storage::delete($article->image);
            
            // Store the new image
            $imagePath = $request->file('image')->store('article_images');
            $article->image = $imagePath;
        }

        $article->save();

        return response()->json($article, 200);
    }

    public function destroy(Article $article)
    {
        $article->delete();
        return response()->json(null, 204);
    }
}
