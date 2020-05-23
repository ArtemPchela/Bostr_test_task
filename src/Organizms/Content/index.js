import React, {useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import styles from "./style.module.scss";
import Pagination from "../../Molecules/Pagination";
import likeImg from "./images/heart.svg";
import likeImgActive from "./images/heartActive.svg";
import share from "./images/shareIcon.svg";
import Socialicons from "../../Atoms/Socialicons";
import ProgressBar from "../../Molecules/ProgressBar";
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
    const [currentPage, setCurrentPage] = useState(1);
    const cardPages = 10;

    const paginate = (number) => {
        setCurrentPage(number);
    }

    const getCards = () => {
        axios
            .get("http://api-alpha.bostr.se:8080/user/v1/data/dwellings/last/10")
            .then(response => {
                    console.log(response);
                    setCards(response.data.hits.hits)
                }
            )
            .catch(error => setCards(null));
    }

    return (
        <div className={styles.content}>
            <div className="container">

                {/*----------Inputs forms and buttons----------*/}
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
                {/*----------Inputs forms and buttons----------*/}

                {/*----------All founded cards----------*/}
                <div className="row">
                    <div className="col">
                        <div className={styles.cardsNumber}>
                            {cards ? cards.length : 0} Matches Found
                        </div>
                    </div>
                </div>
                {/*----------All founded cards----------*/}

                {/*----------Cards----------*/}
                <div className={`${styles.cardsRow} row`}>
                    {cards ? cards.filter((card, index) => {
                        if (index + 1 <= currentPage * cardPages && index + 1 > (currentPage - 1) * cardPages) {
                            console.log(index);
                            return true;
                        }
                        return false;
                    }).map((card, index) => {

                        let maxMatches = 100;
                        let matches = Math.floor((Math.random() * maxMatches) + 1);

                        const matchesStyle = {
                            color: matches < 30 ? "#C75152" : matches < 70 ? "#4DA1DB" : "#59B370"
                        }

                        const backgroundImg = "";
                        const userLike = false;
                        const likes = 5;
                        const views = 2;

                        let minSquareMeter = 50;
                        let maxSquareMeter = 150;
                        const squareMeter = minSquareMeter + Math.floor(Math.random() * (maxSquareMeter - minSquareMeter));

                        const {
                            _id,
                            _index, //"dwellings-20200517_1151",
                            _score, // 1,
                            _source: {
                                dwelling: {
                                    ID, //"8099c8b8-6503-4575-885c-a7c5bf1148f4",
                                    cdate, //"2020-05-17T11:51:01.018771895Z",
                                    feeMonth,
                                    // floor,  //3,
                                    listPrice,
                                    location: {
                                        address: {
                                            streetAddress, // "Midsommarvägen 42"
                                        },
                                        namedAreas, //[ "Midsommarkransen"],
                                        position: {
                                            lat,   //59.30047116,
                                            lon, //18.00820522
                                        },
                                        region: {
                                            countyName, //"Stockholms län",
                                            municipalityName, //"Stockholm"
                                        }
                                    },
                                    lsdate, //"2020-05-17T13:35:33.952262681Z",
                                    mdate, //"2020-05-17T11:51:01.018771895Z",
                                    nbRooms, //2,
                                    objectType: {
                                        typeID, //1000,
                                        typeName //"Lägenhet"
                                    },
                                    pdate, //"2020-05-17T12:41:41+02:00",
                                    source: {
                                        // ID, //"3833066",
                                        name, //"Booli",
                                        url, //"https://api.booli.se/listings"
                                    }
                                }
                            },
                        } = card
                        return (
                            <div className="col-12 col-md-4 col-sm-6 col-xl-3"
                                 key={index}
                            >
                                <div className={styles.product}>
                                    <div className={styles.product_img}
                                         style={{backgroundImage: `url(${backgroundImg})`}}>
                                        <div className={styles.product_img_precent} style={matchesStyle}>
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
                                                {countyName}
                                            </h3>
                                            <h6 className={styles.product_description_address_geo}>
                                                {streetAddress}, {municipalityName}
                                            </h6>
                                        </address>
                                        <div className={styles.product_description_info}>
                                            <div className={styles.product_description_price}>
                                                <h5>{listPrice.amount} kr</h5>
                                                <h5 className={styles.product_description_monthly}>
                                                    {feeMonth.amount} kr/mon
                                                </h5>
                                            </div>
                                            <div className={styles.product_description_sqrMeters}>
                                                <h5>{squareMeter} m<sup>2</sup></h5>
                                                <h5 className={styles.product_description_monthly}>
                                                    {Math.round(listPrice.amount / squareMeter)} kr/m<sup>2</sup>
                                                </h5>
                                            </div>
                                            <div className={styles.product_description_rooms}>
                                                <h5>{nbRooms} rum</h5>
                                            </div>
                                        </div>
                                        <div className={styles.product_description_match}>
                                            <ProgressBar done={matches}/>
                                        </div>
                                    </div>
                                    <footer className={styles.product_description_footer}>
                                        <div className={styles.product_description_footer_wrapper}>
                                            <div className={styles.product_description_footer_location}>
                                                {municipalityName}
                                            </div>
                                            <div className={styles.product_description_footer_view}>
                                                <Link to={`./place/${ID}`}>Viev Detail</Link>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        )
                    }) : "Sorry, something wrong, try again!"}

                </div>
                {/*----------Cards----------*/}

                {/*----------Pagination----------*/}
                <Pagination
                    postsPerPage={cardPages}
                    totalPosts={cards.length}
                    paginate={paginate}
                />
                {/*----------Pagination----------*/}

                {/*----------Subscribe and social----------*/}
                <div className={`${styles.socialWrapper} row`}>

                    {/*----------Dropdown menu languages----------*/}
                    <div className="col-sm-3 col-md-3">
                        <DropdownLanguages/>
                    </div>
                    {/*----------Dropdown menu languages----------*/}

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

                    {/*----------Social icons----------*/}
                    <Socialicons/>
                    {/*----------Social icons----------*/}

                </div>
                {/*----------Subscribe and social----------*/}
            </div>
        </div>
    )
}
