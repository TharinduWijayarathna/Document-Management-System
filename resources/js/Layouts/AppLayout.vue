<template>
    <div>

        <Head :title="title ? title : 'Email Management'">

            <!-- Favicon and Touch Icons-->
            <link rel="apple-touch-icon" sizes="180x180" href="/img/logo/favicon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/img/logo/favicon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/logo/favicon.png" />
            <link rel="mask-icon" href="/img/logo/favicon.png" />

            <slot name="meta_head" />
        </Head>

        <div class="crm_body_bg">
            <SideBar />

            <section class="main_content dashboard_part large_header_bg">

                <NavBar />
                <div class="main_content_iner overly_inner ">
                    <div class="container-fluid p-0 ">
                        <slot name="content" />
                    </div>
                </div>
                <Footer />
            </section>



            <BackToTop />


            <slot name="modals" />
        </div>
    </div>
</template>


<script setup>
import { Head, Link } from '@inertiajs/vue3'
import SideBar from '@/Components/Main/Sidebar.vue';
import NavBar from '@/Components/Main/Navbar.vue';
import Footer from '@/Components/Main/Footer.vue';
import BackToTop from '@/Components/Main/BackToTop.vue';


</script>

<style>
.header_iner {
    padding: 7px !important;
}

.bg-template {
    background-color: #1e1e2d;
}

body {
    background-image: url('/img/bg/bg.png');
}

.main_content_iner {
    background-color: transparent !important;
}

.dataTables_paginate {
    margin-top: 0;
}

#DataTables_Table_0_info {
    margin-top: 8px;
}
</style>