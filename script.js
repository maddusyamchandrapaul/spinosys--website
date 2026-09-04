/* =========================================
   SPINOSYS V2 JAVASCRIPT
========================================= */


/* =========================
   MOBILE MENU
========================= */

const mobileToggle =
    document.getElementById("mobileToggle");

const mobileNav =
    document.getElementById("mobileNav");


mobileToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});


document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

        });

    });


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,7,11,0.94)";

    } else {

        navbar.style.background =
            "rgba(5,7,11,0.72)";

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".section, .innovation, .cta"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   PRODUCT CORE MOVEMENT
========================= */

const productVisual =
    document.querySelector(".product-visual");

const productCore =
    document.querySelector(".visual-core");


if (productVisual && productCore) {

    productVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                productVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.05;

            const moveY =
                (y - rect.height / 2) * 0.05;

            productCore.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    productVisual.addEventListener(
        "mouseleave",
        () => {

            productCore.style.transform =
                "translate(0,0)";

        }
    );

}


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.querySelector(".footer-bottom span");

if (year) {

    year.innerHTML =
        `© ${new Date().getFullYear()} Spinosys. All rights reserved.`;

}