import React from "react";
import styles from "./style.module.scss";

export default function Contact() {
    return (
        <div>
            <div className={styles.content}>
                <div className="container">
                    <div className={`row ${styles.content_title}`}>
                        Hello, you may call us and we quickly help you!
                    </div>
                </div>
            </div>
        </div>
    )
}
