<template>
  <nav
      :key="url"
      class="side-menu"
      :class="{
          'side-menu-open': isMobileSideMenuOpen
      }"
  >
      <!-- Header -->
      <div class="relative">
          <div
              class="
                  absolute flex flex-row items-center justify-start
                  bottom-0 left-0 top-0
                  transition-default transition-colors
                  lg:hidden
              "
          >
              <button
                  class="menu-toggle"
                  type="button"
                  @click="hideMobileSideMenu"
              >
                  <icon-close />
              </button>
          </div>

      </div>

      <div v-if="loadingMenu" class="animate-pulse">

          <div
              v-for="(menuSkeleton, i) in 5"
              :key="`loding-menu-a-${i}`"
              class="rounded-md bg-gray-300 h-8 w-full mb-3"
          />
          <div class="menu-separator" />
          <div
              v-for="(menuSkeleton, i) in 5"
              :key="`loding-menu-b-${i}`"
              class="rounded-md bg-gray-300 h-8 w-full mb-3"
          />
          <div class="menu-separator" />
          <div
              v-for="(menuSkeleton, i) in 5"
              :key="`loding-menu-c-${i}`"
              class="rounded-md bg-gray-300 h-8 w-full mb-3"
          />
          <div class="menu-separator" />
      </div>

      <div
          v-for="(menuSection, menuSectionKey) in visibleMenu"
          :key="menuSectionKey"
          class="menu-section"
          v-else
      >
          <p
              v-if="menuSection.showLabel"
              class="menu-subheading"
          >
              {{ menuSection.label }}
          </p>

          <ul class="root-menu">
              <side-menu-item
                  v-for="(menuItem, menuItemKey) in menuSection.children"
                  :key="`${menuSectionKey}.${menuItemKey}`"
                  class="root-menu-item"
                  :menu-item="menuItem"
                  :menu-item-key="`${menuSectionKey}.${menuItemKey}`"
                  :toggled-items="toggledItems"
                  @openItem="onMenuItemOpened"
                  @toggleItem="onMenuItemToggled"
              />
          </ul>

          <div
              v-if="menuSectionKey !== lastMenuSection"
               class="menu-separator"
          ></div>
      </div>
  </nav>
</template>

<script>

  import _ from 'lodash';
  import { STORE_NAME_MENU } from "../../../store/modules/menu";
  import SideMenuItem from "./SideMenuItem";
  import { mapGetters, mapActions } from "vuex";

  export default {
      name: "SideMenu",
      components: {SideMenuItem},
      props: {
          url: String,
      },
      data() {
          return {
              mountedItems: {},
              toggledItems: {},
              configValues: {},
          }
      },
      async mounted() {
          this.configValues = this.$page.props.config
          await this.getModules()
      },
      computed: {
          ...mapGetters(STORE_NAME_MENU, ["MENU", "loadingMenu"]),
          isMobileSideMenuOpen() {
              return this.$store.getters['admin/isMobileSideMenuOpen'];
          },
          lastMenuSection() {
              let keys = Object.keys(this.visibleMenu);
              return keys[keys.length - 1];
          },
          visibleMenu() {
              let visibleMenu = {};

              _.forEach(this.MENU, (menuItem, key) => {
                  let item = this.getVisibleMenuWithChildren(menuItem);
                  if (item) {
                      visibleMenu[key] = item;
                  }
              });

              return visibleMenu;
          }
      },
      methods: {
          ...mapActions(STORE_NAME_MENU, ["getModules"]),
          canViewMenu(menu) {
              // If there is a route, ensure it exists
              if (menu.route && menu.route.length && !this.$routeCheck(menu.route)) {
                  return false;
              }

              return this.userCanAny(menu.requiresAnyPermissions) && this.userCanAll(menu.requiresAllPermissions);
          },
          getVisibleMenuWithChildren(menu) {
              if (!menu) {
                  return false;
              }

              // Ensure the menu is valid and the user has permission to view it
              if (!this.canViewMenu(menu)) {
                  return false;
              }

              // If the menu has no children and the user has permission to view it, then show it
              if (!menu.children) {
                  return menu;
              }

              // Menu has children so only show visible children
              let visibleMenu = _.cloneDeep(menu);
              visibleMenu.children = {};

              _.forEach(menu.children, (child, key) => {
                  child = this.getVisibleMenuWithChildren(child);

                  if (child) {
                      visibleMenu.children[key] = child;
                  }
              });

              return visibleMenu;
          },
          hideMobileSideMenu() {
              this.$store.commit('admin/hideMobileSideMenu');
          },
          onMenuItemOpened(itemKey) {
              this.$set(this.toggledItems, itemKey, true);
          },
          onMenuItemToggled(itemKey) {
              if (this.toggledItems[itemKey]) {
                  this.$set(this.toggledItems, itemKey, false);
              } else {
                  this.$set(this.toggledItems, itemKey, true);
              }
          },

      },
  }
</script>
