<template>
  <v-app id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      router.afterEach(() => {
        setTimeout(() => {
          AOS.refreshHard();
        }, 500);
      });
    });
  },

  mounted() {
    AOS.init({
      duration: 1800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  },

  updated() {
    AOS.refreshHard();
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
