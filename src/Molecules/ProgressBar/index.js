import React, {useState, useEffect} from "react";
import styles from "./style.module.scss";

export default function ProgressBar({done}) {

    const [style, setStyle] = useState({});

    let progress = null;

    useEffect(() => {
        progress = setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`,
                backgroundColor: done < 30 ? "#C75152" : done < 70 ? "#4DA1DB" : "#59B370"
            }
            setStyle(newStyle);
        }, 200);
        return () => clearTimeout(progress);
    }, [done])

    return (
        <div className={styles.progress}>
            <h4 className={styles.progress_done_title} style={{color: style.backgroundColor}}>{done}% Matched</h4>
            <div className={styles.progress_done} style={style}>

            </div>
        </div>
    )
}


