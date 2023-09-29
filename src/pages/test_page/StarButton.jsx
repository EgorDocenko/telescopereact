import React from 'react'
import styles from "./StarButton.module.css"

const StarButton = ({
    title,
    color = "black",
    color2 = "white",
    width = "6vw",
    ...props
}) => {
    return <button
        className={styles.StarButton}
        style={{
            backgroundColor: color,
            color: color2,
            width: width

        }}
        {...props}
    >

        {title}

    </button>

}

export default StarButton
