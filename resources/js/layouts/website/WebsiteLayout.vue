<template>
    <main
        id="website-layout"
    >
        <slot />
    </main>
</template>

<script>
    export default {
        name: "WebsiteLayout",
        metaInfo() {
            return {
                title: 'CMS',
                meta: [
                    {
                        name: 'description',
                        content: 'CMS - A CMS powered by Laravel, Tailwind, Vue, and Inertia',
                    }
                ]
            }
        },
    }
</script>
