import { useTranslation } from "react-i18next";

// This tells remix to load the "home" namespace
export let handle = {
  i18n: "home",
};

export default function Index() {
  let { i18n, t } = useTranslation(["home", "common"]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("es")}>Spanish</button>
        <button onClick={() => changeLanguage("jp")}>Japanese</button>
        <button onClick={() => changeLanguage("id")}>Indonesian</button>
      </div>
      <h1>Welcome</h1>
      <p>Greeting from Common: {t("greeting", { ns: "common" })}</p>
      <p>Title from Home: {t("title", { ns: "home" })}</p>
    </div>
  );
}
