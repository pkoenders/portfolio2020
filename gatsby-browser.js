/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it




import mediumZoom from 'medium-zoom'

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )

    if (answer === true) {
        window.location.reload()
    }
}



export const onRouteUpdate = () => {


    // Load page
    document.addEventListener("DOMContentLoaded", ready())

    mediumZoom('.images p span img', {
        //background: '#efeff0',
        background: '#ffffff',
    })



}

function ready() {
    //alert('DOM is ready');

    mobileNav()

}

function toggleMobileNavOnClick(hamBurgerBtn, headerDiv, headerDivNav, headerDivLogo) {


    hamBurgerBtn.addEventListener("click", function () {
        //headerDiv.scrollTop = 0
        //console.log('Hamburger Clicked')

        if (!headerDiv.classList.contains("open")) {
            headerDiv.classList.add("open")
            hamBurgerBtn.classList.add("is-active")

            // window.onscroll = function () {
            //     headerWrapper.style.top = "0";
            // }

        } else {
            headerDiv.classList.remove("open")
            hamBurgerBtn.classList.remove("is-active")
        }


    });

    headerDivNav.addEventListener("click", function () {
        headerDiv.classList.remove("open")
        hamBurgerBtn.classList.remove("is-active")
    });

    headerDivLogo.addEventListener("click", function () {
        headerDiv.classList.remove("open")
        hamBurgerBtn.classList.remove("is-active")
    });

}

function mobileNav() {

    const hamBurgerBtn = document.querySelector(".hamburger")
    const headerDiv = document.querySelector(".header-nav")
    const headerDivNav = document.querySelector(".header-nav ul ")
    const headerDivLogo = document.querySelector(".header-nav-wrapper a ")

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if ((prevScrollpos > currentScrollPos) || (hamBurgerBtn.classList.contains("is-active"))) {
            document.querySelector(".header-nav-wrapper").style.top = "0";
        } else {
            document.querySelector(".header-nav-wrapper").style.top = "-61px";
        }
        prevScrollpos = currentScrollPos;
    }

    toggleMobileNavOnClick(hamBurgerBtn, headerDiv, headerDivNav, headerDivLogo)
}
