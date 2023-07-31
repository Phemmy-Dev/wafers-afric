const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})


// Swiper

new Swiper ("#swiper-1", {
  effect: "fade",
  autoplay: {
    delay:4000,
    disableOnInteraction:false
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable:true
  },
  lazyLoading: true,
  loop: true
});