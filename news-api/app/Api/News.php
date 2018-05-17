<?php

namespace App\Api;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class News extends Model
{
	use Notifiable;

	public $timestamps = false;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'title', 'shortdesc', 'body',
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'createat'
	];
}
