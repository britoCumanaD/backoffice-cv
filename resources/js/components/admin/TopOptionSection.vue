<template>
    <section
        v-if="userCan(userCanSection) || userCanSection==''"
        class="flex flex-row items-center mb-6 "
        :class="{'fixed top-0 z-20 bg-white shadow-md p-3 right-0 w-full-side justify-between' : fixedBarAction}"
    >
        <h1 class="font-medium text-lg" :class="fixedBarAction ? 'mr-8' : 'mr-auto'"
        v-text="title" />

        <section class="flex flex-row">

            <inertia-link
                v-if="userCan(userCanBack)"
                class="
                    button button-default-responsive button-primary-subtle
                    flex flex-row items-center mr-2
                "
                :href="$route(address, {module: module})"
            >
                <icon-chevron-left
                    class="w-5 md:mr-2"
                />
                <span
                    class="hidden md:inline"
                >
                    Back
                </span>
            </inertia-link>

            <button
                v-if="userCan(userCanBtn) || userCanBtn==''"
                class="
                    button button-default-responsive button-primary
                    flex flex-row items-center
                "
                type="submit"
            >
                <icon-save class="w-5 md:mr-2"/>

                <span
                    class="hidden md:inline"
                    v-text="buttonText"
                />
            </button>
        </section>
    </section>


</template>

<script>
import { STORE_NAME_ADMIN } from "../../store/modules/admin";
import { mapGetters } from "vuex";

export default {
    props: {
        userCanSection:{
            type: String,
            default: ''
        },
        userCanBtn:{
            type: String,
            default: ''
        },
        userCanBack:{
            type: String,
        },
        address:{
            type: String,
        },
        title:{
            type: String,
        },
        buttonText:{
            type: String,
        },
        btnView: {
            type: Boolean,
            default: false
        },
        urlPage:{
            type: String,
            default: ''
        },
        module: {
            type: String,
            default: ''
        },
    },
    computed:{
        ...mapGetters(STORE_NAME_ADMIN, ["fixedBarAction"]),
    }
}
</script>
