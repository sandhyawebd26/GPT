import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
console.log("dhsjfhd",language)
const dlang = localStorage.getItem('lang') 
  return (
    <select onChange={handleLangChange} value={language}>
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  );
}

export default LanguageSelector;
