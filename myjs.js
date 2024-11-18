function init() {
    gsap.from("#small-trees1", {
        scrollTrigger : {
            scrub: true
        },
        x: -20,
    })

    gsap.from("#small-trees2", {
        scrollTrigger : {
            scrub: true
        },
        x: 20,
    })

    gsap.from("#taal-volcano", {
        scrollTrigger : {
            scrub: true
        },
        y: 50,
    })

    gsap.from("#jw-diokno", {
        scrollTrigger : {
            scrub: true
        },
        y: 80,
    })

    gsap.from("#taal-basilica", {
        scrollTrigger : {
            scrub: true
        },
        y: 80,
    })

    gsap.from("#people", {
        scrollTrigger : {
            scrub: true
        },
        y: 60,
    })

    gsap.from("#brick-floor", {
        scrollTrigger : {
            scrub: true
        },
        y: 80,
    })   

    ScrollReveal({
        reset: true,
        distance: '-40px',
        duration: 2500,
        delay: 400

    });
    ScrollReveal().reveal('#taal-arc, #artboard, #btn-mo, #btn-tbc, #btn-b, #btn-tmh, #btn-tcc', {delay: 3});
    ScrollReveal().reveal('#cloud1, #caption2-1, #caption5-1, #green-leaf2, #small-trees2, #taal-basilica  ', {delay: 2, origin: 'left', interval: 2});
    ScrollReveal().reveal('#cloud2, #caption2-2,  #caption3-1, #green-leaf1, #b-big, #caption7-1, #green-leaf3, #small-trees1, #jw-diokno', {delay: 2, origin: 'right', interval: 2});
    ScrollReveal().reveal('#bird1, #bird2, #bird3, #bird4, #bird5, #bird6, #bird7,  #caption4-1, #caption6-1, #taal-volcano ', {delay: 2, origin: 'top', interval: 200});
    ScrollReveal().reveal('.card1, .card2, .card3, .card4, .card5, #mo-big, #tbc-big, #tmh-big, #tcc-big, #people, #brick-floor ', {delay: 2, origin: 'bottom', interval: 100});
}