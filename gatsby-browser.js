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

    document.querySelector(".headerNavWrapper").style.top = "0";
    mobileNav()

}

function toggleMobileNavOnClick(headerNavWrapper, hamBurgerBtn, headerDiv, headerDivNav, headerDivLogo) {


    hamBurgerBtn.addEventListener("click", function () {
        //headerDiv.scrollTop = 0
        //console.log('Hamburger Clicked')

        if (!headerDiv.classList.contains("open")) {
            headerDiv.classList.add("open")
            hamBurgerBtn.classList.add("is-active")

            headerNavWrapper.style.zIndex = "100004";

            // window.onscroll = function () {
            //     headerWrapper.style.top = "0";
            // }

        } else {
            headerDiv.classList.remove("open")
            hamBurgerBtn.classList.remove("is-active")
            headerNavWrapper.style.zIndex = "1000";
        }


    });

    headerDivNav.addEventListener("click", function () {
        headerDiv.classList.remove("open")
        hamBurgerBtn.classList.remove("is-active")
        headerNavWrapper.style.zIndex = "1000";
    });

    headerDivLogo.addEventListener("click", function () {
        headerDiv.classList.remove("open")
        hamBurgerBtn.classList.remove("is-active")
        headerNavWrapper.style.zIndex = "1000";
    });

}

function mobileNav() {
    const headerNavWrapper = document.querySelector(".headerNavWrapper")
    const headerDivLogo = document.querySelector(".headerNavWrapper a ")
    const hamBurgerBtn = document.querySelector(".hamburger")
    const headerDiv = document.querySelector(".header-nav")
    const headerDivNav = document.querySelector(".header-nav ul ")


    var prevScrollpos = 0;
    // No errors
    var projectsNav = document.querySelector('.projects-nav');

    //console.log('prevScrollpos = ' + prevScrollpos)
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if ((prevScrollpos >= currentScrollPos) || (hamBurgerBtn.classList.contains("is-active"))) {
            document.querySelector(".headerNavWrapper").style.top = "0";

            if (projectsNav) {
                projectsNav.style.top = "50px";
            }

        } else {
            document.querySelector(".headerNavWrapper").style.top = "-61px";
            if (projectsNav) {
                projectsNav.style.top = "-10px";
            }
        }
        prevScrollpos = currentScrollPos;
    }

    toggleMobileNavOnClick(headerNavWrapper, hamBurgerBtn, headerDiv, headerDivNav, headerDivLogo)
}
