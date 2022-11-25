import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react-hooks/rules-of-hooks

const LanguageSelector = (props) => {
    const { i18n } = useTranslation();
    return (
        <>
            <span title="Turkce" onClick={() => i18n.changeLanguage("tr")}>TR</span>
            <span title="English" onClick={() => i18n.changeLanguage("en")}>EN</span>
        </>
    )
}

export default LanguageSelector;