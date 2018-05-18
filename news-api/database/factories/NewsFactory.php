<?php

use Faker\Generator as Faker;

$factory->define(App\Api\News::class, function (Faker $faker) {
	return [
		'createdat' => $faker->date(),
		'title' => $faker->sentence,
		'shortdesc' => $faker->sentence,
		'body' => $faker->text(3000),
	];
});