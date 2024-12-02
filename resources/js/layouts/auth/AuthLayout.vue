<template>
    <main
        id="auth-layout"
        class="bg-gray-200"
    >

        <div class="flex items-center justify-center min-h-screen min-w-full p-4 relative">
            <slot />
        </div>
    </main>
</template>

<script>
    export default {
        name: "AuthLayout",
        metaInfo() {

            const { config } = this.$page.props
            const favicon = config && config.favicon ? config.favicon : '';
            return {
                title: 'CMS',
                meta: [
                    {
                        name: 'description',
                        content: 'CMS',
                    }
                ],
                link: [
                    { rel: 'icon', href: favicon }
                ]
            }
        },
    }
</script>
