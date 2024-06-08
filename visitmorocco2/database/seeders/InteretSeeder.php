<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Interet;

class InteretSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Interet::factory(10)->create();
    }
}
