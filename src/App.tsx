import React, {useState, useEffect, useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';
import { useGSAP } from "@gsap/react";
import './App.css';
import {IntroContainer, TextCenterContainer, CarouselSegment} from "./components/containers";
import RocketShip from "./images/rocketShipOutLine.png";
import Voyager1 from "./images/voyager1rocket.jpg";
import {ScrollEventListener} from "./components/eventlisteners";
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)



function App() {
    const [mainContainerBounds, setMainContainerBounds] = useState<ScrollTrigger>()
    const shipRef = useRef<HTMLImageElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const BlanketRef = useRef<HTMLDivElement>(null);
    const appHeadRef = useRef<HTMLDivElement>(null);
    const headerTextRef = useRef<HTMLDivElement>(null);
    const CarouselRef = useRef<HTMLDivElement>(null);
    const carouselTopRef = useRef<HTMLDivElement>(null);
    const carouselMidRef = useRef<HTMLDivElement>(null);
    const carouselBotRef = useRef<HTMLDivElement>(null);



    useGSAP(() => {
        //intro parralax
        if (shipRef.current && bodyRef.current && BlanketRef.current) {
            const blanketHeight = BlanketRef.current?.offsetHeight ?? 0;
            gsap.timeline({
                scrollTrigger: {
                    trigger: bodyRef.current,
                    start: 'top top',
                    end: () => `+=${blanketHeight}`,
                    scrub: 0.5,
                    pin: true,
                    markers: true
                },
            }).to(shipRef.current, { top: `${BlanketRef.current.offsetHeight - (shipRef.current.offsetHeight)}px` })
                .to(BlanketRef.current,{opacity: 1});
        }

    },[]);

    useGSAP(() => {
        //after intro parralax
        if(BlanketRef.current && headerTextRef.current && appHeadRef.current){
            gsap.timeline({
                scrollTrigger: {
                    trigger:headerTextRef.current,
                    start: `top top`,
                    pin: true,
                    markers: true
                }
            }).to(headerTextRef.current,{
                duration: 1,
                text: {
                    value: "Did you know...",
                }
            } )
        }
        if(carouselTopRef.current && carouselMidRef.current && carouselBotRef.current && CarouselRef.current && BlanketRef.current && appHeadRef.current){
            console.log(CarouselRef.current.offsetHeight + appHeadRef.current.offsetHeight + BlanketRef.current.offsetHeight)
            gsap.timeline({
                scrollTrigger: {
                    trigger: CarouselRef.current,
                    start: `top top`,
                    markers: true
                }
            })
            console.log(carouselTopRef.current.getBoundingClientRect())
        }
    },[])

    return (
    <div className="App" ref={bodyRef}>
        <ScrollEventListener/>
        <IntroContainer>
            <div className={'introBackGround'}>
                <img src={RocketShip} alt={"Rocket Ship"} id={"ship"} ref={shipRef}/>
                <div className={"Blanket"} id={"shipBlanket"} ref={BlanketRef}>
                    <TextCenterContainer text={"I Love RocketShips"}></TextCenterContainer>
                </div>
            </div>
            {/*<img src={backGround} alt={"Rocket Ship"} />*/}
        </IntroContainer>
        <div className="main_wrapper">
          <header className="App-header" ref={appHeadRef}>
              <TextCenterContainer>
                  <h1 ref={headerTextRef}></h1>
              </TextCenterContainer>
          </header>
            <div className={"Carousel"} ref={CarouselRef}>
                <CarouselSegment ref={carouselTopRef} id={"giga"}>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                </CarouselSegment>
                <CarouselSegment ref={carouselMidRef}>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                </CarouselSegment>
                <CarouselSegment ref={carouselBotRef}>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                    <img className={"voyager"} src={Voyager1} alt={"voyager1"}/>
                </CarouselSegment>
            </div>

        </div>
    </div>
    );

}


export default App;
