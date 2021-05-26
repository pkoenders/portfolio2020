import React from "react"
import * as ScrollToTopStyles from './scrollToTop.module.scss'

const ScrollToTop = () => {
    // const [showScroll, setShowScroll] = useState(false)

    // const checkScrollTop = () => {
    //     if (!showScroll && window.pageYOffset > 400) {
    //         setShowScroll(true)
    //     } else if (showScroll && window.pageYOffset <= 400) {
    //         setShowScroll(false)
    //     }
    // };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // if (typeof window !== 'undefined') {
    //     window.addEventListener('scroll', checkScrollTop)
    // }

    return (
        <button onClick={scrollTop} aria-label="Go to the top of the page" className={ScrollToTopStyles.btn} ><i className={" material-icons-round"} aria-hidden="true">arrow_upward</i></button>
    )
}

export default ScrollToTop