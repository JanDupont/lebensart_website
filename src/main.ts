import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./routers/index.js";

// internationalization
import { createI18n } from "vue-i18n";
import messagesDE from "./lang/de.json";
import messagesEN from "./lang/en.json";
const messages = {
	en: messagesEN,
	de: messagesDE,
};
const i18n = createI18n({
	legacy: false,
	locale: "de",
	messages,
});

loadFonts();

createApp(App).use(router).use(vuetify).use(i18n).mount("#app");
