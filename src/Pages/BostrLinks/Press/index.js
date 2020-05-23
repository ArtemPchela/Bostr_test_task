import React from "react";
import styles from "./style.module.scss";

export default function Press() {
    return (
        <div>
            <div className={styles.content}>
                <div className="container">
                    <div className={`row ${styles.content_title}`}>
                        Hello, here you may see all actual information about us and what kind of products we made!
                    </div>
                </div>
            </div>
        </div>
    )
}
