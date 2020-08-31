import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

const loadLocaleMessages = (): LocaleMessages => {
  const translations = require.context('./translations', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const output: LocaleMessages = {};

  translations.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      output[locale] = translations(key)
    }
  });
  return output;
}
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: loadLocaleMessages()
});

export default i18n;