<?php

namespace Database\Factories;

use App\Models\Interet;
use Illuminate\Database\Eloquent\Factories\Factory;

class InteretFactory extends Factory
{
    protected $model = Interet::class;

    public function definition()
    {
        return [
            'nom' => $this->faker->word,
        ];
    }
}
