import "./App.less";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect } from "react";
import { applyTheme } from "./utils";
import Color from "./Colors";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const lngs: Record<string, { nativeName: string }> = {
    "en-US": { nativeName: "EN" },
    "fr-FR": { nativeName: "FR" },
  };
  const selectedLanguage = Object.keys(lngs).map((lng) => (
    <button
      key={lng}
      className={
        i18n.resolvedLanguage === lng
          ? "text-orange font-semibold"
          : "text-light hover:text-orange"
      }
      type="submit"
      onClick={() => i18n.changeLanguage(lng)}
    >
      {lngs[lng].nativeName}
    </button>
  ));

  useEffect(() => {
    applyTheme(new Color());
  }, []);
  return (
    <div className="App">
      <nav className="sticky top-0 text-light bg-dark z-20">
        <div className="menu">
          <a className={"hover:text-orange"} href="#Profile">
            {t("header.Profile")}
          </a>
          <a className={"hover:text-orange"} href="#timeline">
            {t("header.Experiences")}/{t("header.Education")}
          </a>
          <a className={"hover:text-orange"} href="#Projects">
            {t("header.Projects")}
          </a>
          <a className={"hover:text-orange"} href="#skillsLanguages">
            {t("header.Skills")}/{t("header.Languages")}
          </a>
          <a
            href={"./" + t("header.CVLien")}
          >
            {t("header.CV")}
          </a>
        </div>
        <div>
          {selectedLanguage[0]} / {selectedLanguage[1]}
        </div>
      </nav>

      <Routes>
        <Route path="/MyResume" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
