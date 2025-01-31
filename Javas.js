function gsup() {
    let time = gsap.timeline();
    time.from(".deev1 .weare", {
        delay: 1,
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power2.out',
    });

    time.from(".deev1 span", {
        duration: 1,
        opacity: 0,
        x: 100
    });

    time.from(".deev1 .copy", {
        duration: 1,
        opacity: 0,
        x: 100
    }, "<");

    time.from(".div2", {
        duration: 1,
        x: 100,
        opacity: 0
    }, "+=0.1");

    time.from(".navigation", {
        duration: 0.8,
        y: -100,
        opacity: 0,
        ease: 'power2.out'
    });

    time.from(".div3 .deev3left, .div3 .deev3right", {
        duration: 1,
        y: 100,
        opacity: 0,
    }, "<");




    gsap.to(".parent", {
        y: -150,
        scrollTrigger: {
            trigger: '.main',
            start: 'top top',
            end: 'bottom 50%',
            scrub: 1,
            // markers: true,
            pin: true

        }
    });
   





    gsap.to(".imaage, .threeimage1 span", {
        duration: 0.8,
        opacity: 1,
        y: -10,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.threeimage',
            start: 'top 70%',
        }
    });
}

gsup();

var writingtext = document.getElementById("writingtext");
var content = writingtext.innerHTML;
var arr = content.split(""); // Split text into an array
writingtext.innerHTML = "";

arr.forEach(e => {
    var span = document.createElement("span");
    span.classList.add("animate");
    span.innerHTML = e;
    writingtext.appendChild(span);
});

var animate = document.querySelectorAll(".animate");
animate.forEach(f => {
    f.style.backgroundColor = "white";
    f.style.fontWeight = "bold";
});

gsap.to(".animate", {
    duration: 3,
    stagger: 0.05,
    color: "black",
    scrollTrigger: {
        trigger: ".animatetext",
        start: "-40% top",
        end: "200% 50%",
        scrub: 1,
    }
});

gsap.to(".animleft", {
    duration: 1,
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".animatetext",
        start: "top top",
        end: "150% top",
        pin: true,
    }
});

gsap.to(".downmid li", {
    // duration:1,
    color: "white",
    filter: "blur(0)",
    stagger: 1,
    scrollTrigger: {
        // markers:true,
        trigger: ".downmid li",
        start: "top center",
        end: "500vh top",
        scrub: 1,
    },
});


gsap.from(".lastcontent img", {
    duration: 1,
    y: -200,
    scrollTrigger: {
        trigger: ".downcontent",
        // markers:true,
        start: "90% center",
        end: "bottom top",
        scrub: 1,
    },
});


let mm = gsap.matchMedia();


            mm.add("(min-width:992px)",()=>{ 
            gsap.to(".lastcontent3", {
                stagger: 1,
                scrollTrigger: {
                    trigger: ".llastleft",
                    markers: true,
                    start: "-12% top", // Adjust scroll start position
                    end: "110% top", // Adjust scroll end position
                    pin: true, // Pin the element
                    scrub: 1, // Smooth scroll sync with animation
                },
            });
        });
            // Initial call to handle animation
handleanim();

// Listen for window resize event
window.addEventListener("resize", handleanim);

let animation;

// This function will handle animations dynamically on resize
function handleAnimation() {
    // Invalidate and recalculate the ScrollTriggers
    if (window.innerWidth >= 1450) {
        // If window width is large enough, enable the animation
        if (!animation) {
            animation = gsap.to(".downcontent", {
                duration: 1,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".downleft",
                    start: "top center",
                    end: "760vh top",
                    pin: true,
                },
            });
            animation = gsap.to(".downcontent", {
                duration: 1,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".downright",
                    start: "top center",
                    end: "760vh top",
                    pin: true,
                },
            });
        }
    } else {
        // If window width is smaller, remove the animation
        if (animation) {
            gsap.killTweensOf(".downleft"); // Stop the animation
            gsap.killTweensOf(".downright"); // Stop the animation
            animation = null; // Clear the reference to the animation
        }
    }

    // Make sure the ScrollTrigger is updated
    ScrollTrigger.refresh();
}

// Initial call to handleAnimation
handleAnimation();

// Listen for resize events
window.addEventListener("resize", () => {
    // Throttle the resize events to avoid excessive calls
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(handleAnimation, 150); // 150ms debounce
});

