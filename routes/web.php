<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DocumentTypeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::prefix('document_type')->group(function () {
    Route::get('/', [DocumentTypeController::class, 'index'])->name('document_type.index');
    Route::get('/create', [DocumentTypeController::class, 'create'])->name('document_type.create');
    Route::post('/', [DocumentTypeController::class, 'store'])->name('document_type.store');
    Route::get('/{document_type}/edit', [DocumentTypeController::class, 'edit'])->name('document_type.edit');
    Route::put('/{document_type}', [DocumentTypeController::class, 'update'])->name('document_type.update');
    Route::delete('/{document_type}', [DocumentTypeController::class, 'destroy'])->name('document_type.destroy');
});

require __DIR__ . '/auth.php';
