<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;

class UserAuthentication
{
    protected $baseUrl;
    protected $apiKey;

    public function __construct()
    {
        $this->baseUrl = env('SUPABASE_URL');
        $this->apiKey = env('SUPABASE_KEY');
    }


    public function user_authentication($email, $password){
        
    }
}
?>