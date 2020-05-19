import React, {useState} from "react";
import styles from "./style.module.scss";

const menuTest = ["test", "test1", "test2"];

export default function DropdownMenu() {
    const [dropdown, setDropdown] = useState("Unga och Inne");
    const [active, setActive] = useState(false);

    return (
        <div className={`${styles.dropdown} ${active ? styles.dropdown_active : ""}`}
             onClick={() => setActive(!active)}
        >
            <div>{dropdown}</div>
            <ul className={`${styles.dropdown_list}`}>
                {menuTest.filter(element => element !== dropdown)
                    .map((element) =>
                        <li key={element}
                            onClick={() => setDropdown(element)}>{element}</li>
                    )}
            </ul>
        </div>
    );
}
