import React from "react";
import styles from "./style.module.scss";
import home from "./images/home.svg";
import DropdownMenu from "../../Atoms/DropdownMenu";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row justify-content-between align-items-center d-flex">
                    <div className="col-4 col-md-4 col-xl-4">
                        <div className={styles.header_logo}>
                            <img className={styles.header_logo_image}
                                 src={home} alt="logo"/>
                            <span>Bostr</span>
                        </div>
                    </div>
                    <div className="col-8 col-md-8 col-xl-8">
                        <div className={styles.header_buttonWrapper}>
                            <DropdownMenu/>
                            <button className={styles.header_button}>Logga in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )


}
