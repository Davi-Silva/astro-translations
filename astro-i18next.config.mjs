/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "de"],
  load: ["client", "server"],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};
