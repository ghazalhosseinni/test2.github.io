// ----------------------------------------------------------------------------------------
// ------------------------------- Vuetify config strat -----------------------------------
// ----------------------------------------------------------------------------------------
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { fa } from "vuetify/locale";
import { customIcons } from "@/assets/customIcons.js";

// Custom theme properties
const lightTheme = {
  dark: false,
  colors: {
    primary: "#004FFE",
    secondary: "#009C9A",
  },
};

const vuetify = createVuetify({
  locale: {
    locale: "fa",
    fallback: "fa",
    messages: { fa },
    rtl: { fa: true },
  },
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      svg: customIcons,
    },
  },
  components,
  directives,
});

export { vuetify };
// ----------------------------------------------------------------------------------------
// ------------------------------- Vuetify config end -------------------------------------
// ----------------------------------------------------------------------------------------
