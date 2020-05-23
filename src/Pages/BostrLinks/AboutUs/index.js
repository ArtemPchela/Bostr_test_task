import React from "react";
import styles from "./style.module.scss";

export default function AboutUs() {
    return (
        <div className={styles.content}>
            <div className="container">
                <div className={`row ${styles.content_title}`}>
                    Hello, I introduce our company!
                </div>
            </div>
        </div>
    )
}
