import react, {useEffect} from 'react'

const ScrollEventListener:react.FC = () => {
    useEffect(() => {
        const consoleLogScroll = (e:any) => {
            console.log("remounted")
        }
        window.addEventListener("scroll",(consoleLogScroll))
        return () => {
            window.removeEventListener("scroll",consoleLogScroll)
            console.log("unmounted")
        }
    }, []);

    return <div/>
}

export default ScrollEventListener