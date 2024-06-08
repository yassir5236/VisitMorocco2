<?php

namespace Database\Factories;

use App\Models\Type;
use Illuminate\Database\Eloquent\Factories\Factory;

class TypeFactory extends Factory
{
    protected $model = Type::class;

    public function definition()
    {
        return [
            'nom' => $this->faker->word,
        ];
    }
}
