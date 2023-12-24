<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DocumentTypeController;
use App\Http\Controllers\UploadDocumentController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::prefix('document_type')->group(function () {
    Route::get('/', [DocumentTypeController::class, 'index'])->name('document_type.index');
    Route::get('/create', [DocumentTypeController::class, 'create'])->name('document_type.create');
    Route::post('/', [DocumentTypeController::class, 'store'])->name('document_type.store');
    Route::get('/{document_type}/edit', [DocumentTypeController::class, 'edit'])->name('document_type.edit');
    Route::put('/{document_type}', [DocumentTypeController::class, 'update'])->name('document_type.update');
    Route::delete('/{document_type}', [DocumentTypeController::class, 'destroy'])->name('document_type.destroy');
});

Route::prefix('upload_document')->group(function () {
    Route::get('/', [UploadDocumentController::class, 'index'])->name('upload_document.index');
    Route::get('/create', [UploadDocumentController::class, 'create'])->name('upload_document.create');
    Route::post('/', [UploadDocumentController::class, 'store'])->name('upload_document.store');
    Route::get('/{upload_document}/edit', [UploadDocumentController::class, 'edit'])->name('upload_document.edit');
    Route::put('/{upload_document}', [UploadDocumentController::class, 'update'])->name('upload_document.update');
    Route::delete('/{upload_document}', [UploadDocumentController::class, 'destroy'])->name('upload_document.destroy');
});

require __DIR__ . '/auth.php';
