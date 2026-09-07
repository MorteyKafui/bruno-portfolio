import { defineRouting } from "next-intl/routing";
import { LOCALE_COOKIE_MAX_AGE, defaultLocale, locales } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  // The locale is always part of the URL so server and client agree on it and
  // every page has a unique, indexable address per language.
  localePrefix: "always",
  // Detection order handled by the proxy: URL prefix, this cookie, then
  // Accept-Language, then the default locale. Never IP or geography.
  localeCookie: { maxAge: LOCALE_COOKIE_MAX_AGE },
});
