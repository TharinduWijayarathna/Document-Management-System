<template>
    <div class="footer_part">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <Link :href="route('home')" class="text-dark">
                    All Rights Reserved. {{ year }} © <span class="text-primary">Telecommunications Regulatory Commission</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const year = ref(new Date().getFullYear());

</script>
<style></style>