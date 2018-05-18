<?php

namespace App\Http\Controllers;

use App\Api\News;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Monolog\Logger;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
	    $news = DB::table('news');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
	    $news = new News();

	    $news->street = $request->street;
	    $news->city= $request->city;
	    $news->country = $request->country;
	    $news->postalcode = $request->postcode;
	    $news->save();
	    $newEntry = News::find($news->id);



	    /*$insert = DB::table('person_address')->insert(
				['city' => $request->get('city'),'street' => $request->get('street'),
					'country' => $request->get('country'), 'postalcode' => $request->get('postcode')]
			);*/

	    return response()->json($newEntry, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Api\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show($newsId,$sort = null)
    {
	    $news = News::find($newsId);
			return $news;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Api\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Api\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
	    $news->id = $request->get('id');
	    $news->createat= $request->get('createdat');
	    $news->title= $request->get('title');
	    $news->shortdesc= $request->get('shortdesc');
	    $news->body = $request->get('body');
	    $news->update();
	    return response()->json($news, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Api\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy($newsId)
    {
	    $news = News::find($newsId);
	    $news->delete();
	    return $news->id;
    }
}
