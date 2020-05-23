import React from "react";
import styles from "./style.module.scss";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";
import facebook from "./icons/facebook.svg";

export default function Socialicons() {
    return (
        <div className="col-sm-12 d-flex justify-content-end justify-content-sm-center col-md-3">
            <div className={styles.social}>
                <ul className={styles.social_list}>
                    <li className={styles.social_list_items}>
                        <a href="https://www.instagram.com/">
                            <img className={styles.social_list_items_pic}
                                 src={instagram}
                                 alt="instagram"
                            />
                        </a>
                    </li>
                    <li className={styles.social_list_items}>
                        <a href="https://twitter.com/">
                            <img className={styles.social_list_items_pic}
                                 src={twitter}
                                 alt="twitter"
                            />
                        </a>
                    </li>
                    <li className={styles.social_list_items}>
                        <a href="https://www.facebook.com/">
                            <img className={styles.social_list_items_pic}
                                 src={facebook}
                                 alt="facebook"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
