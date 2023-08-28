import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "fr-FR": {
        translation: {
          header: {
            Profile: "Profile",
            Experiences: "Expériences",
            Education: "Études",
            Projects: "Projets",
            Skills: "Compétences",
            Languages: "Langages",
            CV: "CV (FR)",
            CVLien: "CV Jean Epp.pdf",
          },
          profile: {},
          competencies: {
            level: "Niveau",
            years: "ans",
            year: "an",
            months: "mois",
          },
          languages: {
            Fluency: "Niveau",
            German: "Allemand",
            English: "Anglais",
            French: "Français",
            Spanish: "Espagnol",
            "Native speaker": "Langue Maternelle",
            Fluent: "Courant",
            "Limited working": "Professionelle limitée",
            Beginner: "Débutant",
          },
        },
      },
      "en-US": {
        translation: {
          header: {
            Profile: "Profile",
            Experiences: "Experiences",
            Education: "Education",
            Projects: "Projects",
            Skills: "Skills",
            Languages: "Languages",
            CV: "CV (EN)",
            CVLien: "CV Jean Epp (EN).pdf",
          },
          profile: {},
          competencies: {
            level: "level",
            years: "years",
            year: "year",
            months: "months",
          },
          languages: {
            Fluency: "Fluency",
            German: "German",
            English: "English",
            French: "French",
            Spanish: "Spanish",
            "Native speaker": "Native Speaker",
            Fluent: "Fluent",
            "Limited working": "Limited working",
            Beginner: "Beginner",
          },
        },
      },
    },
  });

export default i18n;
