<?php


namespace App\Http\Controllers;
use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;




// class ActivityController extends Controller
// {
 

//     public function index(Request $request)
//     {
//         $userId = $request->query('user_id');
//         $activities = Activity::with('reservations')->get()->map(function ($activity) use ($userId) {
//             $activity->reserved = $activity->reservations->contains('user_id', $userId);
//             return $activity;
//         });

//         return response()->json($activities);
//     }

    
//         public function store(Request $request)

//     {
//         $request->validate([
//             'name' => 'required|string|max:255',
//             'description' => 'required|string',
//             'location' => 'required|string|max:255',
//             'duration' => 'required|integer',
//             'price' => 'required|numeric',
//             'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
//         ]);

//         try {
//             $imagePath = $request->file('image')->store('images', 'public');
//         } catch (\Exception $e) {
//             return response()->json(['error' => 'Image upload failed.'], 500);
//         }

//         $activity = Activity::create(array_merge(
//             $request->except('image'),
//             ['image_path' => $imagePath]
//         ));

//         return response()->json($activity, 201);
//     }



// }



class ActivityController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->query('user_id');
        $activities = Activity::with('reservations')->get()->map(function ($activity) use ($userId) {
            $activity->reserved = $activity->reservations->contains('user_id', $userId);
            return $activity;
        });

        return response()->json($activities);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'location' => 'required|string|max:255',
            'duration' => 'required|integer',
            'price' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        try {
            $imagePath = $request->file('image')->store('images', 'public');
        } catch (\Exception $e) {
            return response()->json(['error' => 'Image upload failed.'], 500);
        }

        $activity = Activity::create(array_merge(
            $request->except('image'),
            ['image_path' => $imagePath]
        ));

        return response()->json($activity, 201);
    }

    public function show($id)
    {
        $activity = Activity::find($id);

        if (!$activity) {
            return response()->json(['error' => 'Activity not found'], 404);
        }

        return response()->json($activity);
    }

    public function update(Request $request, $id)
    {
        $activity = Activity::find($id);

        if (!$activity) {
            return response()->json(['error' => 'Activity not found'], 404);
        }

        $request->validate([
            'name' => 'string|max:255',
            'description' => 'string',
            'location' => 'string|max:255',
            'duration' => 'integer',
            'price' => 'numeric',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete($activity->image_path);
            $imagePath = $request->file('image')->store('images', 'public');
            $activity->image_path = $imagePath;
        }

        $activity->update($request->except('image', 'image_path'));
        $activity->save();

        return response()->json($activity);
    }

    public function destroy($id)
    {
        $activity = Activity::find($id);

        if (!$activity) {
            return response()->json(['error' => 'Activity not found'], 404);
        }

        Storage::disk('public')->delete($activity->image_path);
        $activity->delete();

        return response()->json(['message' => 'Activity deleted successfully']);
    }
}
