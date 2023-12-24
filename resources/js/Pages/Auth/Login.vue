<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-lg-6">
            <div class="modal-content cs_modal">
                <div class="modal-header justify-content-center theme_bg_1">
                    <h5 class="modal-title text-white">Log in</h5>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submit">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Enter your email" v-model="form.email"
                                required autofocus autocomplete="username">
                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Password" v-model="form.password"
                                required autocomplete="current-password">
                            <InputError class="mt-2" :message="form.errors.password" />
                        </div>
                        <button type="submit" class="btn btn_1 full_width text-center"
                            :class="{ 'disabled': form.processing }" :disabled="form.processing">Log in</button>


                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
