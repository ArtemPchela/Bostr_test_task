import React, {useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import styles from "./style.module.scss";
import likeImg from "./images/heart.svg";
import likeImgActive from "./images/heartActive.svg";
import share from "./images/shareIcon.svg";
import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import ProgressBar from "../../Atoms/ProgressBar";
import DropdownLanguages from "../../Atoms/DropdownLanguages";
import ShareModal from "../../Atoms/ShareModal";


export default function Content() {

    const [modal, setModal] = useState(false);
    const [modalInner, setModalInner] = useState("");


    const modalToggleHandler = (value) => {
        setModal(!modal);
        setModalInner(value)
    };

    const [cards, setCards] = useState([]);

    const getCards = () => {
        axios
            .get("./cards.json")
            .then(response => {
                console.log(response);
                   setCards(response.data)

                }
            )

            .catch(error => setCards(null));
    }


    return (
        <div className={styles.content}>
            <div className="container">
                <div className={`row no-gutters ${styles.content_rowInputs}`}>
                    <div className="col-12 col-xl-5">
                        <div className={styles.content_jobTitle}>
                            <input className={styles.content_jobTitle_field}
                                   type="text"
                                   placeholder="Job Title"/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-5">
                        <div className={styles.content_locationTitle}>
                            <input className={styles.content_locationTitle_field}
                                   type="text"
                                   placeholder="Bostad Location"/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-2">
                        <div className={styles.content_buttons}>
                            <button className={styles.content_buttons_mutch}
                                    onClick={getCards}
                            >
                                Match
                            </button>
                            <button className={styles.content_buttons_adjusment}>
                                <span className={styles.content_buttons_adjusment_arrow}>

                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/*-------------Cards----------*/}
                <div className="row">
                    <div className="col">
                        <div className={styles.cardsNumber}>
                            {cards ? cards.length : 0} Matches Found
                        </div>
                    </div>
                </div>

                <div className={`${styles.cardsRow} row`}>
                    {cards ? cards.map((card, index) => {
                     const {
                            backgroundImg,
                            matches,
                            userLike,
                            likes,
                            views,
                            community,
                            address,
                            city,
                            price,
                            monthlyPrice,
                            squareMeter,
                            rooms,
                            id
                        } = card
                        return (
                            <div className="col-12 col-md-4 col-sm-6 col-xl-3"
                                key={index}
                            >
                                <div className={styles.product}>
                                    <div className={styles.product_img} style={{backgroundImage: `url(${backgroundImg})`}}>
                                        <div className={styles.product_img_precent}>
                                            {matches}% Matched
                                        </div>
                                        <div className={styles.product_img_like}>
                                            <img src={userLike ? likeImgActive : likeImg} alt=""/>
                                        </div>
                                    </div>
                                    <div className={styles.product_description}>
                                        <div className={styles.product_description_social}>
                                            <div className={styles.product_description_social_wrapper}>
                                                <div className={styles.product_description_social_wrapper_likes}>
                                                    {likes} Likes
                                                </div>
                                                <div className={styles.product_description_social_wrapper_views}>
                                                    {views} Views
                                                </div>
                                            </div>
                                            <div className={styles.product_description_social_share}>
                                                <div className={styles.product_description_social_share_social}>
                                                    <img className={styles.product_description_social_share_social_icon}
                                                         onClick={() => modalToggleHandler(".overlay")}
                                                         src={share}
                                                         alt="shareIcon"/>
                                                </div>
                                            </div>
                                        </div>
                                        {modal && <ShareModal closeHandler={modalToggleHandler} src={modalInner}/>}

                                        <address className={styles.product_description_address}>
                                            <h3 className={styles.product_description_address_title}>
                                                {community}
                                            </h3>
                                            <h6 className={styles.product_description_address_geo}>
                                                {address}, {city}
                                            </h6>
                                        </address>
                                        <div className={styles.product_description_info}>
                                            <div className={styles.product_description_price}>
                                                <h5>{price} kr</h5>
                                                <h5 className={styles.product_description_monthly}>
                                                    {monthlyPrice} kr/mon
                                                </h5>
                                            </div>
                                            <div className={styles.product_description_sqrMeters}>
                                                <h5>{squareMeter} m<sup>2</sup></h5>
                                                <h5 className={styles.product_description_monthly}>
                                                    {Math.round(price / squareMeter)} kr/m<sup>2</sup>
                                                </h5>
                                            </div>
                                            <div className={styles.product_description_rooms}>
                                                <h5>{rooms} rum</h5>
                                            </div>
                                        </div>
                                        <div className={styles.product_description_match}>
                                            <ProgressBar done={matches}/>
                                        </div>
                                    </div>
                                    <footer className={styles.product_description_footer}>
                                        <div className={styles.product_description_footer_wrapper}>
                                            <div className={styles.product_description_footer_location}>
                                                {city}
                                            </div>
                                            <div className={styles.product_description_footer_view}>
                                                <Link to={`./place/${id}`}>Viev Detail</Link>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        )
                    }) : "Sorry, something wrong, try again!"}
                </div>
                {/*-------------Cards----------*/}

                {/*-----subscribe and social-------*/}

                <div className={`${styles.socialWrapper} row`}>
                    <div className="col-sm-3 col-md-3">
                        <DropdownLanguages/>
                    </div>
                    <div className="col-sm-9 col-md-6">
                        <div className={styles.subscribe}>
                            <input className={styles.subscribe_input}
                                   type="email"
                                   placeholder="Email address"
                                   required/>
                            <button className={styles.subscribe_button}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-12 d-flex justify-content-end justify-content-sm-center col-md-3">
                        <div className={styles.subscribe_social}>
                            <ul className={styles.subscribe_social_list}>
                                <li className={styles.subscribe_social_list_items}>
                                    <a href="https://www.instagram.com/">
                                        <img className={styles.subscribe_social_list_items_pic}
                                             src={instagram}
                                             alt="instagram"
                                        />
                                    </a>
                                </li>
                                <li className={styles.subscribe_social_list_items}>
                                    <a href="https://twitter.com/">
                                        <img className={styles.subscribe_social_list_items_pic}
                                             src={twitter}
                                             alt="twitter"
                                        />
                                    </a>
                                </li>
                                <li className={styles.subscribe_social_list_items}>
                                    <a href="https://www.facebook.com/">
                                        <img className={styles.subscribe_social_list_items_pic}
                                             src={facebook}
                                             alt="facebook"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
