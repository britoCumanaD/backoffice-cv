<template>
    <component v-if="layoutComponent" :is="layoutComponent">
        <component v-if="templateComponent" :is="templateComponent" />
    </component>
</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { mapActions } from "vuex";
import { STORE_NAME_WEBSITES } from "../../../store/modules/website";
import configMixin from "../../../mixins/configMixin";
export default {
    mixins: [configMixin],
    name: "PageShow",
    metaInfo() {
        const metadata = this.page.data.metadata;
        const favicon = this.config.favicon || "";
        const keyGoogle = this.config.keyGoogle || null;
        let googleAnalytics = { script: [] };
        if (keyGoogle) {
            googleAnalytics = {
                script: [
                    {
                        src: `https://www.googletagmanager.com/gtag/js?id=${keyGoogle}`,
                    },
                    {
                        innerHTML: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${keyGoogle}');`,
                    },
                ],
            };
        }
        return {
            title: metadata.title,
            meta: [
                {
                    "http-equiv": "Content-Type",
                    content: "text/html; charset=utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                { name: "description", content: metadata.description },
                {
                    property: "og:description",
                    content: metadata.og_description,
                },
                { property: "og:image", content: metadata.og_image },
                { property: "og:title", content: metadata.og_title },
                { property: "og:type", content: metadata.og_type },
                { property: "og:url", content: metadata.og_url },
            ],

            script: [...googleAnalytics.script],
            link: [
                {
                    rel: "canonical",
                    href: `<https://${metadata.canonical}/>`,
                },
                { rel: "icon", href: favicon },
            ],
        };
    },
    props: {
        page: {
            required: true,
            type: Object,
        },
        posts: {
            type: Object,
        },
        categories: {
            type: Array,
        },
        config: {
            type: Object,
        },
        featured: Array,
        categories_products: Array,
        feature_products: Array,
        products: Array,
    },
    provide() {
        return {
            config: this.config,
            featured: this.featured,
            page: this.page,
            posts: this.posts,
            categories_products: this.categories_products,
            feature_products: this.feature_products,
            products: this.products,
        };
    },
    components: {
        Layout: () => import("../../../layouts/website/Layout.vue"),
    },
    mounted() {
        this.setConfigInit({
            ...this.config,
            content: this.page.data.content,
            url: this.page.data.url,
            posts: this.posts,
        });
    },
    computed: {
        content() {
            try {
                return this.page.data.content;
            } catch (e) {
                return null;
            }
        },
        layout() {
            try {
                return this.page.data.layout;
            } catch (e) {
                return null;
            }
        },
        layoutComponent() {
            switch (this.layoutSlug) {
                case "full-layout":
                case "layout-post":
                case "product-layout":
                case "product-category-layout":
                    return "Layout";
                default:
                    return "Layout";
            }
        },
        layoutSlug() {
            try {
                return this.layout.slug;
            } catch (e) {
                return null;
            }
        },
        template() {
            try {
                return this.page.data.template;
            } catch (e) {
                return null;
            }
        },
        templateComponent() {
            switch (this.templateSlug) {
                case "home-template":
                    return "Home";
                case "blog":
                    return "Blog";
                case "blog-post":
                    return "PostDetails";
                case "nosotros":
                    return "UsPage";
                case "page-contactanos":
                    return "ContactPage";
                case "menu":
                    return "Menu";
                case "product-category-template":
                    return "MenuDetails";
            }
        },
        templateSlug() {
            try {
                return this.template.slug;
            } catch (e) {
                return null;
            }
        },
    },
    methods: {
        ...mapActions(STORE_NAME_WEBSITES, ["setConfigInit"]),
        getContentFieldData(slug, defaultValue = null) {
            // Example method used to get page content, with a fallback value
            try {
                return this.content[slug].data
                    ? this.content[slug].data
                    : defaultValue;
            } catch (e) {
                return defaultValue;
            }
        },
    },
};
</script>
