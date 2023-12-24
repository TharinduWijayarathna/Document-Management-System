<template>
    <AppLayout>
        <template #content>
            <div class="row">
                <div class="col-12">
                    <div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
                        <div class="page_title_left">
                            <h3 class="f_s_25 f_w_700 dark_text">Dashboard</h3>
                            <ol class="breadcrumb page_bradcam mb-0">
                                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                                <li class="breadcrumb-item active">Dark</li>
                            </ol>
                        </div>
                        <div class="page_title_right">
                            <div class="page_date_button">
                                {{ Today }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row ">



                <div class="col-xl-12">
                    <div class="white_card card_height_100 mb_30 ">
                        <div class="row">

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

const Today = ref(new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
}));

</script>
