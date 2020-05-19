import React from "react";
import styles from "./style.module.scss";
import twitter from "../../Molecules/Content/images/twitter.svg";
import facebook from "../../Molecules/Content/images/facebook.svg";
import instagram from "../../Molecules/Content/images/instagram.svg";


export default function ShareModal({closeHandler}) {
    return (
        <div className={styles.modal}
             onClick={closeHandler}
        >
            <div className={styles.modal_window}>
                <div className={styles.close}
                     onClick={closeHandler}
                >
                </div>
                <div className={styles.modal_title}>
                    Share
                </div>
                <div className={styles.modal_shareSocial}>
                    <a className={styles.modal_shareSocial_link}
                       href="https://twitter.com/">
                        <div className={styles.modal_shareSocial_link_imgWrapper}>
                            <img className={styles.modal_shareSocial_link_imgWrapper_pic}
                                 src={twitter}
                                 alt="twitter"/>
                        </div>
                        Twitter
                    </a>
                    <a className={styles.modal_shareSocial_link}
                       href="https://www.facebook.com/">
                        <div className={styles.modal_shareSocial_link_imgWrapper}>
                            <img className={styles.modal_shareSocial_link_imgWrapper_pic}
                                 src={facebook}
                                 alt="facebook"/>
                        </div>
                        Facebook
                    </a>
                    <a className={styles.modal_shareSocial_link}
                       href="https://www.instagram.com/">
                        <div className={styles.modal_shareSocial_link_imgWrapper}>
                            <img className={styles.modal_shareSocial_link_imgWrapper_pic}
                                 src={instagram}
                                 alt="instagram"/>
                        </div>
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    )
}
