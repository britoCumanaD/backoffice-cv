<template>
    <drop-down :disabledBtn="disabledBtn" ref="languageDropDown">
        <template v-slot:label>
            <img
                class="mr-4 rounded"
                :src="`${mainUrl}/images/${languagesSelect.flag}`"
                width="30"
                height="25"
            />
            <!-- chevron chere -->
            <component-icon
                :name="'chevron'"
                :width="10"
                :height="15"
                :color="'blue-800'"
                :class="{
                    'rotate-90': !disabledBtn,
                    '-rotate-90': disabledBtn,
                }"
                class="transform"
            />
        </template>
        <template v-slot:body>
            <section
                class="max-h-20 w-20 overflow-y-auto light-scroll flex flex-col items-start justify-center p-3"
            >
                <button
                    v-for="(language, index) in languages"
                    :key="index"
                    class="pb-2 hover:bg-grayscale-e5 w-full text-xs flex justify-center items-center"
                    @click="changeLanguage(language)"
                >
                    <img
                        :src="`/images/${flags[language.locale]}`"
                        width="30"
                        height="14"
                        class="rounded"
                    />
                    <span class="ml-2 text-sm leading-3 -mb-1" v-text="language.alias" />
                </button>
            </section>
        </template>
    </drop-down>
</template>
<script>
import DropDown from "./DropDown.vue";
import ComponentIcon from "./common/Icon.vue";
export default {
    components: {
        DropDown,
        ComponentIcon,
    },
    data: () => ({
        languagesSelect: {
            text: "ES",
            flag: "espana.svg",
            locale: "es_ES",
        },
        languages: [
            {
                locale: "es_ES",
                flag: "espana.svg",
                alias: "ES",
            },
            {
                locale: "en_US",
                flag: "eeuu.svg",
                alias: "EN",
            },
        ],
        flags: {
            ca_ES: "calatuna.svg",
            es_ES: "espana.svg",
            en_US: "eeuu.svg",
            pt_PT: "portugal.svg",
            pt_BR: "brasil.svg",
            en_GB: "united-kingdom.png",
            fr_FR: "france.png",
            it_IT: "italian.svg"
        },
        disabledBtn: false,
        mainUrl: ""
    }),
    mounted() {
        this.prepareLanguageGlobal();
        this.mainUrl = window.location.origin
    },
    methods: {
        prepareLanguageGlobal() {
            if (localStorage.language_locale) {
                const _languagesSelect = JSON.parse(
                    localStorage.language_locale
                );
              
                const filteredLanguages = this.languages.find(
                    (language) => language.locale === _languagesSelect.locale
                );

                if (filteredLanguages) {
                    this.$root.$i18n.locale = _languagesSelect.locale;
                    this.languagesSelect.locale = _languagesSelect.locale;
                    this.languagesSelect.text = _languagesSelect.alias;
                    this.languagesSelect.flag =
                        this.flags[_languagesSelect.locale];
                    return;
                }

                localStorage.removeItem("language_locale");
            }

            this.disabledBtn = this.languages.length === 1;

            this.$root.$i18n.locale = this.languages[0].locale;
            this.languagesSelect.locale = this.languages[0].locale;
            this.languagesSelect.text = this.languages[0].alias;
            this.languagesSelect.flag = this.flags[this.languages[0].locale];
        },
        changeLanguage(_language) {
            this.$root.$i18n.locale = _language.locale;
            this.languagesSelect.locale = _language.locale;
            this.languagesSelect.text = _language.alias;
            this.languagesSelect.flag = this.flags[_language.locale];

          
            localStorage.setItem("language_locale", JSON.stringify(_language));
            this.$refs.languageDropDown.dropdownOpen = false;
        },
    },
};
</script>
<style scoped>
.light-scroll {
    scrollbar-color: #dbdbdb transparent;
    scrollbar-width: thin;
}
.light-scroll::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
}
.light-scroll::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: #dbdbdb;
}

.scroll-hidden::-webkit-scrollbar {
    display: none;
}
</style>
