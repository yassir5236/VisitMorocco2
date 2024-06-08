<?php

namespace Database\Factories;

use App\Models\Destination;
use Illuminate\Database\Eloquent\Factories\Factory;

class DestinationFactory extends Factory
{
    protected $model = Destination::class;

    public function definition()
    {
        return [
            'nom' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'region_id' => \App\Models\Region::factory(),
            'type_id' => \App\Models\Type::factory(),
            'interet_id' => \App\Models\Interet::factory(),
            'latitude' => $this->faker->latitude,
            'longitude' => $this->faker->longitude,
            'images' => json_encode([
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
                $this->faker->imageUrl()
            ]), // Add this line
        ];
    }
}