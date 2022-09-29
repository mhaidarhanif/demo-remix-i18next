export default {
  // This is the list of languages your application supports
  supportedLngs: ["en", "es", "jp", "id"],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "en",
  // The default namespace of i18next is "translation"
  defaultNS: "common",
  // Disabling suspense is recommended
  react: { useSuspense: false },
};
