<template>
    <nav class="sidebar dark_sidebar  ">
        <div class="logo-area text-center">
            <Link class="large_logo text-white" :href="route('home')"><img src="../../../../public/img/logo/favicon.png"
                class="appIcon" alt>
            Telecommunications Regulatory Commission
            </Link>

            <div class="sidebar_close_icon d-lg-none">
                <i class="ti-close"></i>
            </div>
        </div>
        <ul id="sidebar_menu">
            <h4 class="menu-text"><span>Main Functions</span> <i class="fas fa-ellipsis-h"></i> </h4>

            <li>
                <a href="#" aria-expanded="false">
                    <div class="nav_icon_small">
                        <img src="../../../src/img/menu-icon/dashboard.svg" alt>
                    </div>
                    <div class="nav_title">
                        <span>Test</span>
                    </div>
                </a>
            </li>

            <h4 class="menu-text"><span>Configurations</span> <i class="fas fa-ellipsis-h"></i> </h4>

            <li>
                <a href="#" aria-expanded="false">
                    <div class="nav_icon_small">
                        <img src="../../../src/img/menu-icon/dashboard.svg" alt>
                    </div>
                    <div class="nav_title">
                        <span>Test</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
</script>
<style scoped>
.logo-area {
    padding: 15px 0;
    margin-bottom: 30px;
}

.appIcon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px auto;
    display: block;
}
</style>