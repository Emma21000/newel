"use client";
import i18n from "../i18n";

export default function Languages() {
  function changeLanguage () {
  if(i18n.language === "en"){
    i18n.changeLanguage("hy");
  }
  else if(i18n.language === "hy") {
    i18n.changeLanguage("ru");
  }
  else {
    i18n.changeLanguage("en");
  }
  }
  return (
    <div className="">
        <button className="text-5xl" onClick={changeLanguage}>
          {
          i18n.language === "en" 
            ? "🇺🇸" :
            i18n.language === "hy"
            ? "🇦🇲" :
            "🇷🇺"
          }
        </button>
    </div>
  );
}