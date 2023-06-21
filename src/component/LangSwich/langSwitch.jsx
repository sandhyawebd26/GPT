import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import i18n from "../../../i18n";

function LanguageSelector() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("lang");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    localStorage.setItem("lang", lang);
    setLanguage(lang);
    i18n.changeLanguage(lang).then(() => router.replace(router.asPath));
  };

  return (
    <select onChange={handleLangChange} value={language}>
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  );
}

export default LanguageSelector;
