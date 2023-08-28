import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Nav.less";
import { useTranslation, Trans } from "react-i18next";

function Example() {
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
  return (
    <Menu>
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
      <a className={"hover:text-orange"} href={"./" + t("header.CVLien")}>
        {t("header.CV")}
      </a>
      <div>
        {selectedLanguage[0]} / {selectedLanguage[1]}
      </div>
    </Menu>
  );
}

export default Example;
