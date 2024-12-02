<template>
    <div class="bg-gray-100 flex flex-col min-h-screen min-w-screen">
        <nav class="flex flex-row justify-end px-6 py-4">
            <ul class="flex flex-row font-medium space-x-4 text-theme-base-contrast">
                <template v-if="$page.props.auth.user">
                    <li>
                        <a
                            class="hover:text-theme-primary"
                            :href="$route('admin.index')"
                        >
                            Admin
                        </a>
                    </li>
                </template>
                <template v-else>
                    <li v-if="$routeCheck('login')">
                        <inertia-link
                            class="hover:text-theme-primary"
                            :href="$route('login')"
                        >
                            Login
                        </inertia-link>
                    </li>
                    <li v-if="$routeCheck('register')">
                        <inertia-link
                            class="hover:text-theme-primary"
                            :href="$route('register')"
                        >
                            Register
                        </inertia-link>
                    </li>
                </template>
            </ul>
        </nav>

        <!-- Content Section -->
        <div class="bg-gray-100 flex min-h-screen min-w-screen justify-center items-center">
            <img :src="$page.props.config.logo" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        layout: 'website-layout'
    }
</script>

<style scoped>
    .skewed-logo-bg {
        --tw-rotate: -18deg;
        --tw-skew-y: 12deg
    }
</style>
