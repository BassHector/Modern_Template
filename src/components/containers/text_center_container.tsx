import './text_center_container.css'
import react from 'react';
import React from 'react';

type textProps = {
    text?: string,
    children?: React.ReactNode
}

const TextCenterContainer:react.FC<textProps> = ({text, children}) => {
    return(
        <div className="text_center" id={"text_center_container"}>
            <h1>{text}</h1>
            {children}
        </div>
    )
}

export default TextCenterContainer;