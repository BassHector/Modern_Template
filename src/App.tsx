import React, {useState, useEffect} from 'react';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import './App.css';
import NavBar from "./components/navigation";
import ButtonLink from "./components/button";
import Intro from "./components/containers";
import IntroContainer from "./components/containers";
import backGround from "./images/skyGradient.png";
import RocketShip from "./images/rocketShipOutLine.png";
gsap.registerPlugin(ScrollTrigger)


function App() {
    const [lastScrollPosition, setScrollPosition] = useState<number>(0);
    const [navBarVisible, setNavBarVisible] = useState<boolean>(true);
    const shipRef = useRef<HTMLImageElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (shipRef.current && bodyRef.current) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: bodyRef.current,
                    start: 'top top',
                    end: "+=800px",
                    scrub: 0.5,
                    markers: true,
                },
            }).to(shipRef.current, { top: "-50%"});
        }
    });

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollTop:number = document.documentElement.scrollTop;
            if (scrollTop > lastScrollPosition) {
                setNavBarVisible(false)
            } else{
                setNavBarVisible(true)
            }
            setScrollPosition(scrollTop)
        });
    })


    return (
    <div className="App" ref={bodyRef}>
        <NavBar visible={navBarVisible}>
            <p>About</p>
        </NavBar>
        <IntroContainer>
            <img src={backGround} alt={"Rocket Ship"} />
            <img src={RocketShip} alt={"Rocket Ship"} id={"ship"} ref={shipRef}/>
        </IntroContainer>
        <div className="page_wrapper">
          <header className="App-header">

          </header>
        </div>
    </div>
  );

}


export default App;
