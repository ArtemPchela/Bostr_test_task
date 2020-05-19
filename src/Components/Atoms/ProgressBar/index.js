import React, {useState} from "react";
import styles from "./style.module.scss";


export default function ProgressBar({done}) {

    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 200);


    return (
        <div className={styles.progress}>
            <h4 className={styles.progress_done_title}>{done}% Matched</h4>
            <div className={styles.progress_done} style={style}>

            </div>
        </div>
    )
}

