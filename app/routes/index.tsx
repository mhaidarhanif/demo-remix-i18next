import { useTranslation } from "react-i18next";

// This tells remix to load the "home" namespace
export let handle = {
  i18n: "home",
};

export default function Index() {
  let { t } = useTranslation("home");

  return (
    <div>
      <h1>Welcome</h1>
      <p>Greeting from Common: {t("greeting")}</p>
      <p>Title from Home: {t("title")}</p>
    </div>
  );
}
