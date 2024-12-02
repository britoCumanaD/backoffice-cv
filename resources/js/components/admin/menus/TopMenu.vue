<template>
    <nav
        class="bg-white flex justify-between items-center border-b px-6 fixed w-full z-50 top-0 py-2 top-menu"
    >
        <button
            class="
                menu-link
                lg:hidden
                focus:outline-none
            "
            type="button"
            @click="showMobileSideMenu"
        >
            <icon-hamburger-menu />
        </button>


        <div class="ml-auto select-none flex cursor-pointer">

            <div class="flex items-center gap-2">
                <div class="shrink-0">
                    <div wire:id="Pz7zu2xTgpHrMo8IRlug">
                        <img src="https://www.gravatar.com/avatar/8a14f73d659ac64078d47d3022a325cd?d=mp" class="inline-block w-8 h-8 rounded-full">
                    </div>
                </div>
                <div class="hidden leading-none sm:block">
                    <strong>
                        <div class="text-sm font-medium leading-none text-gray-900 dark:text-white">
                            {{ $page.props.auth.user.name ?? 'User' }}
                        </div>
                    </strong>
                    <small class="block text-xs text-gray-500 leading-none mt-0.5" id="userDropdownButton">
                        View profile
                    </small>
                </div>
            </div>
        </div>

        

        <div
            ref="userDropdownMenu"
            class="
                flex flex-col py-2
                focus:outline-none
            "
        >
            <p class="dropdown-subheading mb-2">
                Hello, {{ $page.props.auth.user.first_name ?? 'User' }}
            </p>

            <inertia-link
                v-if="userCan('profile.view')"
                class="dropdown-link"
                :href="$route('admin.profile.index')"
                @click="closeUserDropdown"
            >
                Profile
            </inertia-link>

            <div class="dropdown-separator"></div>

            <a
                class="dropdown-link"
                href="/logout"
            >
                Logout
            </a>
        </div>
    </nav>
</template>

<script>
    import tippy from 'tippy.js';
    import 'tippy.js/animations/shift-away-extreme.css';

    export default {
        name: "TopMenu",
        data() {
            return {
                userDropDown: null,
            }
        },
        mounted() {
            this.initialiseUserDropdown();
        },
        methods: {
            closeUserDropdown() {
                try {
                    if (Array.isArray(this.userDropDown)) {
                        this.userDropDown.forEach(item => {
                            item.hide();
                        })
                    } else {
                        this.userDropDown.hide();
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            initialiseUserDropdown() {
                let userDropdownMenu = this.$refs.userDropdownMenu;
                userDropdownMenu.style.display = 'block';
            
                this.userDropDown = tippy('#userDropdownButton',{
                    animation: 'shift-away-extreme',
                    content: userDropdownMenu,
                    interactive: true,
                    theme: 'dropdown',
                    trigger: 'click',
                });
            },
            showMobileSideMenu() {
                this.$store.commit('admin/showMobileSideMenu');
            }
        },
    }
</script>
