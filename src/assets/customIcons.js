import { h } from "vue";
// import web from "@/components/icons/Web.vue";

const iconsComponent = {
  // web,
};

const customIcons = {
  component: (props) => h(iconsComponent[props.icon]),
};

export { customIcons /* aliases */ };
