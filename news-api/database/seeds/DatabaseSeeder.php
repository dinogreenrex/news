<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
	    //Seed 10 records
	    $news = factory(App\Api\News::class, 10)->create();
    }
}
