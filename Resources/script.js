gsap.from('#title', {
    duration: 3,
    x: -3000
})
gsap.to('#title',{
    delay: 4,
    duration: 2,
    x: 100
})
gsap.to('#xd',{
    delay: 4,
    duration: 3,
    color: 'transparent',
    backgroundColor: 'transparent',
    
    display: 'none'
});
gsap.from('nav',{
    delay: 5.5,
    y: -150,
    duration: .7,
    ease: 'lineal'
})