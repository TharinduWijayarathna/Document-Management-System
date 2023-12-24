<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DocumentTypeController extends ParentController
{
    public function  index()
    {
        return Inertia::render('Configurations/DocumentType/index');
    }
}
