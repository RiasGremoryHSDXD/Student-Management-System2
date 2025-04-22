<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Services\SupabaseService;



// Route::get('/Home', function () {
//     return inertia('Customers');
// });

// // Route::get('/api/customers', [CustomerController::class, 'api']);

// Route::get('/test-supabase', function (\App\Services\SupabaseService $supabaseService) {
//     $data = $supabaseService->getCustomerNames();
//     return response()->json($data); // Return the data as a JSON response

// });

// // Route::get('/customers', [CustomerController::class, 'index']);

Route::get('/', [CustomerController::class, 'index']);
Route::get('/favanimetitle', [CustomerController::class, 'anime_fav_title']);
