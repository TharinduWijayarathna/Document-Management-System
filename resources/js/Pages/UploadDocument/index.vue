<template>
    <AppLayout>
        <template #content>
            <div class="row">
                <div class="col-12">
                    <div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
                        <div class="page_title_left">
                            <h3 class="f_s_25 f_w_700 dark_text">Upload Document</h3>
                            <ol class="breadcrumb page_bradcam mb-0">
                                <li class="breadcrumb-item">
                                    <Link :href="route('home')">Home</Link>
                                </li>
                                <li class="breadcrumb-item active">Upload Document</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row ">


                <div class="col-xl-12">
                    <div class="white_card card_height_100 mb_30 ">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="white_card card_height_100 mb_30">

                                    <div class="white_card_body mt-4">
                                        <div class="QA_section">
                                            <div>
                                                <div class="row">
                                                    <div class="col-md-5">
                                                        <input type="text" class="form-control">
                                                    </div>

                                                    <div class="col-md-2">
                                                        <button class="btn btn-md btn-primary text-center"><i
                                                                class="fa fa-plus"></i></button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="QA_table mb_30">

                                                <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
                                                    <table class="table lms_table_active dataTable no-footer dtr-inline"
                                                        id="DataTables_Table_0" role="grid"
                                                        aria-describedby="DataTables_Table_0_info" style="width: 1067px;">
                                                        <thead>
                                                            <tr role="row">
                                                                <th>asd</th>
                                                                <th>asd</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>ads</th>
                                                                <td>sa</td>

                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                    <div class="dataTables_info" id="DataTables_Table_0_info" role="status"
                                                        aria-live="polite">Showing 1 to 10 of 11 entries</div>
                                                    <div class="dataTables_paginate paging_simple_numbers"
                                                        id="DataTables_Table_0_paginate">

                                                        <a class="paginate_button previous disabled"
                                                            aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0"
                                                            id="DataTables_Table_0_previous"><i
                                                                class="fa-solid fa-arrow-left"></i>
                                                        </a>
                                                        <span>
                                                            <a class="paginate_button current"
                                                                aria-controls="DataTables_Table_0" data-dt-idx="1"
                                                                tabindex="0">1</a>

                                                            <a class="paginate_button " aria-controls="DataTables_Table_0"
                                                                data-dt-idx="2" tabindex="0">2</a>
                                                        </span>

                                                        <a class="paginate_button next" aria-controls="DataTables_Table_0"
                                                            data-dt-idx="3" tabindex="0" id="DataTables_Table_0_next"><i
                                                                class="fa-solid fa-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </template>
    </AppLayout>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';


</script>
