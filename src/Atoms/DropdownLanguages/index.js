import React, {useState} from "react";
import styles from "./style.module.scss";

const languages = ["English", "Dutch", "Germany"];

export default function DropdownLanguages() {
    const [dropdownLang, setDropdownLang] = useState("Swedish");
    const [active, setActive] = useState(false);

    return (
        <div
            className={`${styles.dropdownLang} ${active ? styles.dropdownLang_active : ""}`}
            onClick={() => setActive(!active)}
        >
            <div>{dropdownLang}</div>
            <ul className={styles.dropdownLang_listLang}>
                {languages.filter(element => element !== dropdownLang)
                    .map((element) =>
                        <li key={element}
                            onClick={() => setDropdownLang(element)}>{element}</li>
                    )}
            </ul>
        </div>
    );
}
