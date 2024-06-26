<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\InteretController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ItineraryController;
use App\Http\Controllers\AccommodationController;
use App\Http\Controllers\RestaurantController;

use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\AdminController;










/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::post('/register', [UtilisateurController::class, 'register']);
Route::post('/login', [UtilisateurController::class, 'login'])->name('login');
Route::middleware('auth:sanctum')->post('/logout', [UtilisateurController::class, 'logout']);



// Route::get('/destinations', [DestinationController::class, 'index']);
// Route::post('/destinations', [DestinationController::class, 'store']);
// Route::get('/destinations/{id}', [DestinationController::class, 'show']);
// Route::put('/destinations/{id}', [DestinationController::class, 'update']);
// Route::delete('/destinations/{id}', [DestinationController::class, 'destroy']);




Route::get('destinations/index', [DestinationController::class, 'index'])->name('destinations.index');
Route::get('destinations/create', [DestinationController::class, 'create'])->name('destinations.create');
Route::post('destinations', [DestinationController::class, 'store'])->name('destinations.store');
Route::get('destinations/{destination}', [DestinationController::class, 'show'])->name('destinations.show');
Route::get('destinations/{destination}/edit', [DestinationController::class, 'edit'])->name('destinations.edit');
Route::put('destinations/{destination}', [DestinationController::class, 'update'])->name('destinations.update');
Route::delete('destinations/{destination}', [DestinationController::class, 'destroy'])->name('destinations.destroy');
Route::get('/destinations/search/Destination', [DestinationController::class, 'search']);



Route::get('regions/index', [RegionController::class, 'index']);
Route::post('regions/store', [RegionController::class, 'store']);

Route::get('regions/{region}', [RegionController::class, 'show']);
Route::put('regions/{region}', [RegionController::class, 'update']);
Route::delete('regions/{region}', [RegionController::class, 'destroy']);
Route::get('regionss/search', [RegionController::class, 'search']);



Route::get('types', [TypeController::class, 'index']);
Route::post('types', [TypeController::class, 'store']);
Route::get('types/{type}', [TypeController::class, 'show']);
Route::put('types/{type}', [TypeController::class, 'update']);
Route::delete('types/{type}', [TypeController::class, 'destroy']);




Route::get('interets', [InteretController::class, 'index']);
Route::post('interets', [InteretController::class, 'store']);
Route::get('interets/{interet}', [InteretController::class, 'show']);
Route::put('interets/{interet}', [InteretController::class, 'update']);
Route::delete('interets/{interet}', [InteretController::class, 'destroy']);







Route::get('/activities', [ActivityController::class, 'index']);
Route::post('/activities/store', [ActivityController::class, 'store']);
Route::get('/activities/{id}', [ActivityController::class, 'show']);
Route::put('/activities/{id}', [ActivityController::class, 'update']);
Route::delete('/activities/{id}', [ActivityController::class, 'destroy']);
// Route::get('/activities/search', [ActivityController::class, 'search']);





// Route::middleware('auth:sanctum')->group(function () {
// Route::post('/reservations/store', [ReservationController::class, 'store']);
// Route::post('/api/reservations/store', [ReservationController::class, 'store']);
Route::post('/reservations/store', [ReservationController::class, 'store']);

Route::get('/reservations', [ReservationController::class, 'index']);
Route::put('/reservations/{reservation}/accept', [ReservationController::class, 'accept']);
Route::put('/reservations/{reservation}/reject', [ReservationController::class, 'reject']);
// });




Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::put('/categories/{id}', [CategoryController::class, 'update']);
Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);




Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/articles/store', [ArticleController::class, 'store']);
Route::get('/articles/{article}', [ArticleController::class, 'show']);
Route::put('/articles/{article}', [ArticleController::class, 'update']);
Route::delete('/articles/{article}', [ArticleController::class, 'destroy']);






// Route::get('regions', [RegionController::class, 'index']);
// Route::get('regions/{region}', [RegionController::class, 'show']);
// Route::put('regions/{region}', [RegionController::class, 'update']);
// Route::delete('regions/{region}', [RegionController::class, 'destroy']);

// Route::get('regions/{region}/itineraries ', [ItineraryController::class, 'index']);
// Route::post('regions/{region}/itineraries', [ItineraryController::class, 'store']);
// Route::get('regions/{region}/itineraries/{itinerary}', [ItineraryController::class, 'show']);
// Route::put('regions/{region}/itineraries/{itinerary}', [ItineraryController::class, 'update']);
// Route::delete('regions/{region}/itineraries/{itinerary}', [ItineraryController::class, 'destroy']);

// Route::get('regions/{region}/accommodations', [AccommodationController::class, 'index']);
// Route::post('regions/{region}/accommodations', [AccommodationController::class, 'store']);
// Route::get('regions/{region}/accommodations/{accommodation}', [AccommodationController::class, 'show']);
// Route::put('regions/{region}/accommodations/{accommodation}', [AccommodationController::class, 'update']);
// Route::delete('regions/{region}/accommodations/{accommodation}', [AccommodationController::class, 'destroy']);

// Route::get('regions/{region}/restaurants', [RestaurantController::class, 'index']);
// Route::post('regions/{region}/restaurants', [RestaurantController::class, 'store']);
// Route::get('regions/{region}/restaurants/{restaurant}', [RestaurantController::class, 'show']);
// Route::put('regions/{region}/restaurants/{restaurant}', [RestaurantController::class, 'update']);
// Route::delete('regions/{region}/restaurants/{restaurant}', [RestaurantController::class, 'destroy']);
// Route::get('regions/search', [RegionController::class, 'search']);

















Route::get('regions', [RegionController::class, 'index']);
Route::post('regions/store', [RegionController::class, 'store']);
Route::get('regions/{region}', [RegionController::class, 'show']);
Route::put('regions/{region}', [RegionController::class, 'update']);
Route::delete('regions/{region}', [RegionController::class, 'destroy']);
Route::get('regions/search', [RegionController::class, 'search']);

Route::get('regions/{region}/itineraries', [ItineraryController::class, 'index']);
Route::post('regions/{region}/itineraries', [ItineraryController::class, 'store']);
Route::get('regions/{region}/itineraries/{itinerary}', [ItineraryController::class, 'show']);
Route::put('regions/{region}/itineraries/{itinerary}', [ItineraryController::class, 'update']);
Route::delete('regions/{region}/itineraries/{itinerary}', [ItineraryController::class, 'destroy']);

Route::get('regions/{region}/accommodations', [AccommodationController::class, 'index']);
Route::post('regions/{region}/accommodations', [AccommodationController::class, 'store']);
Route::get('regions/{region}/accommodations/{accommodation}', [AccommodationController::class, 'show']);
Route::put('regions/{region}/accommodations/{accommodation}', [AccommodationController::class, 'update']);
Route::delete('regions/{region}/accommodations/{accommodation}', [AccommodationController::class, 'destroy']);

Route::get('regions/{region}/restaurants', [RestaurantController::class, 'index']);
Route::post('regions/{region}/restaurants', [RestaurantController::class, 'store']);
Route::get('regions/{region}/restaurants/{restaurant}', [RestaurantController::class, 'show']);
Route::put('regions/{region}/restaurants/{restaurant}', [RestaurantController::class, 'update']);
Route::delete('regions/{region}/restaurants/{restaurant}', [RestaurantController::class, 'destroy']);







// Route::middleware('auth:sanctum')->group(function () {
    Route::get('posts/index', [PostController::class, 'index']);
    Route::post('posts/store', [PostController::class, 'store']);
    Route::get('posts/{post}', [PostController::class, 'show']);
    Route::delete('posts/{post}', [PostController::class, 'destroy']);

    Route::post('posts/{post}/comments', [CommentController::class, 'store']);
    Route::delete('comments/{comment}', [CommentController::class, 'destroy']);

    Route::post('posts/{post}/like', [LikeController::class, 'store']);
    Route::delete('posts/{post}/like', [LikeController::class, 'destroy']);
// });


Route::get('admin/statistics', [AdminController::class, 'getStatistics']);
