<template>
    <li
        class="menu-item"
        :class="`menu-item-level-${menuItemLevel}`"
    >
        <button
            v-if="hasChildren"
            class="menu-link-parent"
            :class="{
                'menu-link-active': isActive,
                'toggled': isToggled,
            }"
            @click="toggleItem(menuItemKey)"
        >
            <component
                v-if="menuItem.icon"
                :is="menuItem.icon"
                class="h-5 w-5"
            />

            <div
                v-else
                class="h-5 w-5"
            ></div>

            <span class="ml-2">
                {{ menuItem.label }}
            </span>

            <div class="ml-auto text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded border border-gray-200 p-1">
                <icon-chevron-right class="h-3 w-3 duration-300 transform ease-out transition"
                    :class="isToggled ? 'rotate-90' : 'rotate-180'"
                />

            </div>
        </button>

        <a
            v-else-if="forceLoad"
            class="menu-link"
            :class="{'menu-link-active': isActive}"
            :href="routeHref"
            :preserve-state="preserveState"
        >
            <component
                v-if="menuItem.icon"
                :is="menuItem.icon"
                class="h-5 w-5"
            />

            <div
                v-else
                class="h-5 w-5"
            ></div>

            <span class="ml-2">
                {{ menuItem.label }}
            </span>
        </a>

        <inertia-link
            v-else-if="routeHref"
            class="menu-link"
            :class="{'menu-link-active': isActive}"
            :href="routeHref"
            :preserve-state="preserveState"
        >
            <component
                v-if="menuItem.icon"
                :is="menuItem.icon"
                class="h-5 w-5"
            />

            <div
                v-else
                class="h-5 w-5"
            ></div>

            <span class="ml-2">
                {{ menuItem.label }}
            </span>
        </inertia-link>


        <template v-show="hasChildren">
            <collapse-transition dimension="height">
                <ul
                    v-show="isToggled"
                    class="sub-menu"
                >
                    <side-menu-item
                        v-for="(child, key) in menuItem.children"
                        :key="`${menuItemKey}.${key}`"
                        class="sub-menu-item"
                        :menu-item="child"
                        :menu-item-key="`${menuItemKey}.${key}`"
                        :menu-item-level="menuItemLevel + 1"
                        :toggled-items="toggledItems"
                        @openItem="onChildOpened"
                        @toggleItem="onChildToggled"
                    />
                </ul>
            </collapse-transition>
        </template>
    </li>
</template>

<script>
    import CollapseTransition from '@ivanv/vue-collapse-transition';
    import _ from 'lodash';

    export default {
        name: "SideMenuItem",
        components: {
            'collapse-transition': CollapseTransition
        },
        props: {
            menuItem: {
                type: Object,
                required: true,
            },
            menuItemKey: {
                type: String,
                required: true,
            },
            menuItemLevel: {
                type: Number,
                default: 1
            },
            toggledItems: {
                type: Object,
                default: () => { return {}; }
            }
        },
        computed: {
            hasChildren() {
                if (!this.menuItem.children) {
                    return false;
                }

                return Object.keys(this.menuItem.children).length > 0;
            },
            currentMdoule(){
                const test = this.$page.url.split('?');
                if(test.length>1){
                    const params = test[1].split('&')
                    const module = params.find((param)=> param.includes('module='))
                    if(module)
                        return module.replace('module=', '')
                }
                return false
            },
            isActive() {
                let activeRoutes = [];

                if (this.menuItem.activeRoutes) {
                    if (Array.isArray(this.menuItem.activeRoutes)) {
                        activeRoutes = _.clone(this.menuItem.activeRoutes);
                    } else {
                        activeRoutes.push(this.menuItem.activeRoutes);
                    }
                }

                if (this.menuItem.route) {
                    activeRoutes.push(this.menuItem.route);
                }

                let isActive = false;
                _.forEach(activeRoutes, route => {
                    if (this.$routeCurrent(route) && (
                        !this.hasChildren && (this.menuItem.module == undefined || 
                        this.menuItem.module == this.currentMdoule)
                        ) || (
                            this.hasChildren && this.menuItem.children.index.module == this.currentMdoule
                        )
                    ) {
                        isActive = true;
                    }
                });

                return isActive;
            },
            isToggled() {
                return !!this.toggledItems[this.menuItemKey];
            },
            routeHref() {
                try {
                    return this.menuItem.module ? this.$route(this.menuItem.route, { 'module': this.menuItem.module}) : this.$route(this.menuItem.route);
                } catch (e) {
                    // If the route doesn't exist, return as string
                    return this.menuItem.route;
                }
            },
            forceLoad() {
                try {
                    return this.$route(this.menuItem.forceLoad);
                } catch (e) {
                    // If the route doesn't exist, return as string
                    return this.menuItem.route;
                }
            },
            preserveState() {
                let preserve_state = false;
                try {
                    if (!this.menuItem.hasOwnProperty('preserveState')) {
                        return preserve_state;
                    }

                    return !!this.menuItem.preserveState
                } catch (e) {
                    return preserve_state
                }
            },
        },
        mounted() {
            // If the current item is active, let any parent elements know
            if (this.isActive) {
                this.openItem(this.menuItemKey);
            }
        },
        methods: {
            onChildOpened (itemKey) {
                // If a child is opened, also open this item
                this.openItem(itemKey);
                this.openItem(this.menuItemKey);
            },
            onChildToggled(itemKey) {
                this.toggleItem(itemKey)
            },
            openItem(itemKey) {
                this.$emit('openItem', itemKey);
            },
            toggleItem(itemKey) {
                this.$emit('toggleItem', itemKey);
            }
        }
    }
</script>
