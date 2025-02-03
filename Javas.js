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

// all list items selecting li(s) like arrays in gsap
// gsap.utils.toArray('.downmid ul li').forEach((item, index) => {
//     gsap.to(item, {
//         scrollTrigger: {
//             trigger: item,
//             start: 'top center',  // When the top of the item hits the center of the viewport
//             end: 'bottom center', // When the bottom of the item hits the center of the viewport
//             scrub: 1,             // Smooth transition with scrolling
//             markers: true,        // Show debug markers (remove in production)
//             onEnter: () => gsap.to(item, {
//                 color: 'white', 
//             }),  // Glow effect when entering
//             onLeave: () => gsap.to(item, {
//                 color: 'initial', 
//             }),  // Revert to original state when leaving
//             onLeaveBack: () => gsap.to(item, {
//                 color: 'initial', 
//             }),  // Revert when scrolling back up
//             onEnterBack: () => gsap.to(item, {
//                 color: 'white', 
//             })  // Glow effect when re-entering the viewport from the top
//         }
//     });
// });




// One By One approach
gsap.to(".li1", {
  scrollTrigger: {
    trigger: ".li1",
      start: "top center",   // When the top of the item hits the center of the viewport
      end: "bottom center",  // When the bottom of the item hits the center of the viewport
      onEnter: () => gsap.to(".li1", {
        color: 'white',            // Change text color to white
        filter: 'blur(0)',         // Remove the blur effect smoothly
      }),
      onLeave: () => gsap.to(".li1", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onLeaveBack: () => gsap.to(".li1", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onEnterBack: () => gsap.to(".li1", {
        color: 'white',            // Keep text color white
        filter: 'blur(0)',         // Remove blur effect smoothly when re-entering
      })
    }
  });
gsap.to(".li2", {
    scrollTrigger: {
      trigger: ".li2",
      start: "top center",   // When the top of the item hits the center of the viewport
      end: "bottom center",  // When the bottom of the item hits the center of the viewport
      onEnter: () => gsap.to(".li2", {
        color: 'white',            // Change text color to white
        filter: 'blur(0)',         // Remove the blur effect smoothly
      }),
      onLeave: () => gsap.to(".li2", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onLeaveBack: () => gsap.to(".li2", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onEnterBack: () => gsap.to(".li2", {
        color: 'white',            // Keep text color white
        filter: 'blur(0)',         // Remove blur effect smoothly when re-entering
      })
    }
  });
gsap.to(".li3", {
    scrollTrigger: {
      trigger: ".li3",
      start: "top center",   // When the top of the item hits the center of the viewport
      end: "bottom center",  // When the bottom of the item hits the center of the viewport
      onEnter: () => gsap.to(".li3", {
        color: 'white',            // Change text color to white
        filter: 'blur(0)',         // Remove the blur effect smoothly
      }),
      onLeave: () => gsap.to(".li3", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onLeaveBack: () => gsap.to(".li3", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onEnterBack: () => gsap.to(".li3", {
        color: 'white',            // Keep text color white
        filter: 'blur(0)',         // Remove blur effect smoothly when re-entering
      })
    }
  });
gsap.to(".li4", {
    scrollTrigger: {
      trigger: ".li4",
      start: "top center",   // When the top of the item hits the center of the viewport
      end: "bottom center",  // When the bottom of the item hits the center of the viewport
      onEnter: () => gsap.to(".li4", {
        color: 'white',            // Change text color to white
        filter: 'blur(0)',         // Remove the blur effect smoothly
      }),
      onLeave: () => gsap.to(".li4", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onLeaveBack: () => gsap.to(".li4", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onEnterBack: () => gsap.to(".li4", {
        color: 'white',            // Keep text color white
        filter: 'blur(0)',         // Remove blur effect smoothly when re-entering
      })
    }
  });
gsap.to(".li5", {
    scrollTrigger: {
      trigger: ".li5",
      start: "top center",   // When the top of the item hits the center of the viewport
      end: "bottom center",  // When the bottom of the item hits the center of the viewport
      onEnter: () => gsap.to(".li5", {
        color: 'white',            // Change text color to white
        filter: 'blur(0)',         // Remove the blur effect smoothly
      }),
      onLeave: () => gsap.to(".li5", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onLeaveBack: () => gsap.to(".li5", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onEnterBack: () => gsap.to(".li5", {
        color: 'white',            // Keep text color white
        filter: 'blur(0)',         // Remove blur effect smoothly when re-entering
      })
    }
  });
gsap.to(".li6", {
    scrollTrigger: {
      trigger: ".li6",
      start: "top center",   // When the top of the item hits the center of the viewport
      end: "bottom center",  // When the bottom of the item hits the center of the viewport
      onEnter: () => gsap.to(".li6", {
        color: 'white',            // Change text color to white
        filter: 'blur(0)',         // Remove the blur effect smoothly
      }),
      onLeave: () => gsap.to(".li6", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onLeaveBack: () => gsap.to(".li6", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onEnterBack: () => gsap.to(".li6", {
        color: 'white',            // Keep text color white
        filter: 'blur(0)',         // Remove blur effect smoothly when re-entering
      })
    }
  });
gsap.to(".li7", {
    scrollTrigger: {
      trigger: ".li7",
      start: "top center",   // When the top of the item hits the center of the viewport
      end: "bottom center",  // When the bottom of the item hits the center of the viewport
      onEnter: () => gsap.to(".li7", {
        color: 'white',            // Change text color to white
        filter: 'blur(0)',         // Remove the blur effect smoothly
      }),
      onLeave: () => gsap.to(".li7", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onLeaveBack: () => gsap.to(".li7", {
        color: 'rgba(255, 255, 255, 0.3)',            // Keep text color white
        filter: 'blur(4px)',       // Reapply blur effect smoothly
      }),
      onEnterBack: () => gsap.to(".li7", {
        color: 'white',            // Keep text color white
        filter: 'blur(0)',         // Remove blur effect smoothly when re-entering
      })
    }
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

let mm2= gsap.matchMedia();
mm2.add("(min-width: 1451px)", () => {
        gsap.to(".downcontent", {
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
        });
      

// Listen for resize events
window.addEventListener("resize", () => {
    // Throttle the resize events to avoid excessive calls
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(handleAnimation, 150); // 150ms debounce
});

