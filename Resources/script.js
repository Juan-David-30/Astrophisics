
window.onload = 
function disapearLoad() {  

    gsap.to('#load, #loader',{
        duration: 2,
        color: 'transparent',
        backgroundColor: 'transparent',
        display: 'none'
    });
    gsap.to('#xd',{
        duration: 3,
        color: 'transparent',
        backgroundColor: 'transparent',
        display: 'none'
    });

    gsap.from('nav',{
        delay: 1.5,
        y: -150,
        duration: .7,
        ease: 'lineal'
    });

    gsap.from('#section1, #section2', {
        delay: 1,
        duration: 2,
        y: 50,
        x: 00,
        ease: 'lineal'
    });
    gsap.from('#section1, #section2', {
        delay: 3,
        duration: 1,
        backgroundColor: 'transparent',
    });
    gsap.from('#contentsection, #titlesection',{
        delay: 2,
        duration: 2,
        opacity: 0,
        display: 'none',
        y: 80
    });
}
let loader = gsap.timeline({ repeat: 8, yoyo: true});

loader.to('#load',{
    duration: .5,
    x: 145,
    ease: 'lineal'
})