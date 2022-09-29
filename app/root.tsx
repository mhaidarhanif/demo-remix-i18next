import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";

import i18nextServer from "~/i18next.server";
import rootStyles from "~/styles/root.css";

type LoaderData = { locale: string };

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from i18n config
  // or if not, set it to the i18next default namespace "translation"
  i18n: "common",
};

export const loader: LoaderFunction = async ({ request }) => {
  let locale = await i18nextServer.getLocale(request);
  return json<LoaderData>({ locale });
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rootStyles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Demo Remix i18Next",
});

export default function Root() {
  // Get the locale from the loader
  let { locale } = useLoaderData<LoaderData>();
  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
