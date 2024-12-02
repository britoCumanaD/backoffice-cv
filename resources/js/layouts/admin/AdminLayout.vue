<template>
    <main
        id="admin-layout"
        class="flex min-h-screen"
    >
        <side-menu  v-if="isModal"
            :url="url()"
        />

        <div class="flex flex-1 flex-col max-w-full"
            :class="{'lg:ml-64': isModal}"
        >
            <top-menu v-if="isModal" />

            <page-alerts />

            <div class="bg-gray-50 flex-1 p-8">
                <slot/>
            </div>
        </div>


        <!-- Singleton Modals -->
        <file-manager-modal class="z-30" />
        <ModuleCustomModal class="z-30"/>
    </main>
</template>

<script>
    import { Inertia } from '@inertiajs/inertia'

    import FileManagerModal from "../../components/admin/modals/FileManagerModal";
    import PageAlerts from "../../components/core/alerts/PageAlerts";
    import ModuleCustomModal from "../../components/admin/modals/ModuleCustomModal";

    export default {
        name: "AdminLayout",
        components: {
            FileManagerModal,
            PageAlerts,
            ModuleCustomModal
        },
        metaInfo() {
            const { config } = this.$page.props
            const favicon = config && config.favicon ? config.favicon : null;
            return {
                title: this.metaTitle,
                meta: [
                    {
                        name: 'description',
                        content: this.metaDescription,
                    }
                ],
                link: [
                    favicon ? { rel: 'icon', href: favicon } : {}
                ]
            }
        },
        data() {
            return {
                isModal:false,
            }
        },
        computed: {
            metaDescription() {
                return this.getMetaDataField(
                    'description',
                    'A CMS powered by Laravel, Tailwind, Vue, and Inertia'
                );
            },
            metaTitle() {
                return this.getMetaDataField(
                    'title',
                );
            }
        },
        mounted() {
            const urlParams = new URLSearchParams(window.location.search);
            this.isModal = urlParams.get('isModal') ? false : true

            Inertia.on('success', event => {
                this.hideMobileSideMenu();
            })
            window.addEventListener('scroll', this.onScroll);
        },
        methods: {
            getMetaDataField(slug, fallback = '') {
                try {
                    return this.$page.props.meta[slug] ?? fallback;
                } catch (e) {
                    console.log(e);
                    return fallback;
                }
            },
            url() {
                return location.pathname.substr(1)
            },
            hideMobileSideMenu() {
                if (this.$store.getters['admin/isMobileSideMenuOpen']) {
                    this.$store.commit('admin/hideMobileSideMenu');
                }
            },
            onScroll() {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                this.$store.commit('admin/setFixedBarAction', currentScrollPosition> 220)
            },
        }
    }
</script>
