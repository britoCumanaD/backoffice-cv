
  export default {
    computed: {
      isMobile() {
          return this.$screen.width < 769;
      },
      isTablet() {
          return this.$screen.width < 1024;
      },
      isDesktopMedium() {
          return this.$screen.width < 1281;
      },
      isDesktop() {
          return this.$screen.width >= 1281;
      },
    },
  };
  