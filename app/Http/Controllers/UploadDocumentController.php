<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class UploadDocumentController extends ParentController
{
    public function index()
    {
        return Inertia::render('UploadDocument/index');
    }
}
