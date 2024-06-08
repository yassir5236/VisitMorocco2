<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// return new class extends Migration
// {
//     /**
//      * Run the migrations.
//      */
//     public function up(): void
//     {
//         Schema::create('destinations', function (Blueprint $table) {
//             $table->id();
//             $table->string('nom');
//             $table->text('description');
//             $table->unsignedBigInteger('region_id')->nullable();
//             $table->unsignedBigInteger('type_id')->nullable();
//             $table->unsignedBigInteger('interet_id')->nullable();
//             $table->timestamps();

        
//             $table->foreign('region_id')->references('id')->on('regions')->onDelete('cascade');
//             $table->foreign('type_id')->references('id')->on('types')->onDelete('cascade');
//             $table->foreign('interet_id')->references('id')->on('interets')->onDelete('cascade');

//         });
//     }

//     /**
//      * Reverse the migrations.
//      */
//     public function down(): void
//     {
//         Schema::dropIfExists('destinations');
//     }
// };


return new class extends Migration
{
    public function up(): void
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->text('description');
            $table->unsignedBigInteger('region_id')->nullable();
            $table->unsignedBigInteger('type_id')->nullable();
            $table->unsignedBigInteger('interet_id')->nullable();

            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->json('images')->nullable(); 

            $table->timestamps();

            $table->foreign('region_id')->references('id')->on('regions')->onDelete('cascade');
            $table->foreign('type_id')->references('id')->on('types')->onDelete('cascade');
            $table->foreign('interet_id')->references('id')->on('interets')->onDelete('cascade');
        });

        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('destination_id');
            $table->string('path');
            $table->timestamps();

            $table->foreign('destination_id')->references('id')->on('destinations')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('images');
        Schema::dropIfExists('destinations');
    }
};

