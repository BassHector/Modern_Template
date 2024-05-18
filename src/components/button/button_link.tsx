import react from 'react'
import './button.css'
import React from "react";

type Button_link = {
    label: string,
    onClick: () => void
}

const ButtonLink: React.FC<Button_link> = ({label, onClick}) => {
    return (
        <button className={"default_Button"} onClick={onClick}>
            {label}
        </button>
    )
}

export default ButtonLink