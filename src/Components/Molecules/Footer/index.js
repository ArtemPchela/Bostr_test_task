import React from "react";
import styles from "./style.module.scss";
import bostr from "./bostr.json";
import discover from "./discover.json";
import account from "./account.json";
import {Link} from "react-router-dom";
import home from "./images/home.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={`${styles.footer_wrapper} row`}>
                    <div className="col-3 col-md-3 col-lg-2 col-xl-2">
                        <div className={styles.footer_wrapper_logo}>
                            <img className={styles.footer_wrapper_logo_image}
                                 src={home} alt="logo"/>
                            <span>Bostr</span>
                        </div>
                    </div>
                    <div className="col-9 col-md-5 col-lg-4 col-xl-3">
                        <div className={styles.footer_wrapper_nav}>
                            <div className={styles.footer_wrapper_nav_link}>
                                <h2 className={styles.footer_wrapper_nav_link_title}>
                                    Bostr
                                </h2>
                                {bostr.map(element =>
                                    <Link to={element.url}
                                          key={element.url}
                                          className={`${styles.footer_wrapper_nav_link_links}`}
                                    >
                                        {element.title}
                                    </Link>)
                                }
                            </div>
                            <div className={styles.footer_wrapper_nav_link}>
                                <h2 className={styles.footer_wrapper_nav_link_title}>
                                    Discover
                                </h2>
                                {discover.map(element =>
                                    <Link to={element.url}
                                          key={element.url}
                                          className={`${styles.footer_wrapper_nav_link_links}`}
                                    >
                                        {element.title}
                                    </Link>)
                                }
                            </div>
                            <div className={styles.footer_wrapper_nav_link}>
                                <h2 className={styles.footer_wrapper_nav_link_title}>
                                    Account
                                </h2>
                                {account.map(element =>
                                    <Link to={element.url}
                                          key={element.url}
                                          className={`${styles.footer_wrapper_nav_link_links}`}
                                    >
                                        {element.title}
                                    </Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/*----coperight----*/}

                <div className="row">
                    <div className="col-12  justify-content-center">
                        <div className={styles.footer_wrapper_copyright}>
                            <span>© 2020 - bostr.se</span>
                        </div>
                    </div>
                </div>

                {/*----coperight----*/}

            </div>
        </footer>
    )
}
