import React from 'react';
import './intro_container.css'

type mainContainerProps = {
    children: React.ReactNode
}

const IntroContainer:React.FC<mainContainerProps> = ({children}) => {

    return(
        <div className="intro_container">
            {children}
        </div>
    )
}

export default IntroContainer