<?php

namespace App\Http\Controllers;

use App\Models\Article;

use App\Models\Conseil;
// use Article as GlobalArticle;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;








class ArticleController extends Controller
{
    public function index()
    {
        $articles = Conseil::with('category')->get();
        return response()->json($articles);
    }

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'title' => 'required',
    //         'content' => 'required',
    //         'category_id' => 'required',
    //         'image' => 'image|mimes:jpeg,png,jpg,gif', // Max 2MB, and it must be an image file.
    //     ]);

    //     $article = new Article();
    //     $article->title = $request->title;
    //     $article->content = $request->content;
    //     $article->category_id = $request->category_id;

    //     if ($request->hasFile('image')) {
    //         $imagePath = $request->file('image')->store('article_images');
    //         $article->image = $imagePath;
    //     }

    //     $article->save();

    //     // return response()->json($article, 201);
    //     return 'hello';


    // }



    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required|integer|exists:categories,id',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif',
        ]);

        

        $path = $request->file('image')->store('images', 'public');
        $article = Conseil::create([
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
            'category_id' => $validatedData['category_id'],
            'image' => $path,
        ]);


        return response()->json($article, 201);
    }


    public function update(Request $request, Conseil $article)
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

    public function destroy(Conseil $article)
    {
        $article->delete();
        return response()->json(null, 204);
    }
}
