<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
          $table->increments('id');
          $table->engine = 'InnoDB';
          $table->charset = 'utf8';
          $table->collation = 'utf8_unicode_ci';
	        $table->date('createdat');
	        $table->string('title',100);
	        $table->string('shortdesc',100);
	        $table->text('body');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
