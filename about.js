 


        
   

    // Fade-in animation
    document.querySelectorAll(".fade-in").forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 500);
    });

    // Bounce button animation
    const whatsappButton = document.querySelector(".whatsapp-button");
    whatsappButton.addEventListener("mouseenter", () => {
        whatsappButton.style.transform = "scale(1.1)";
    });
    whatsappButton.addEventListener("mouseleave", () => {
        whatsappButton.style.transform = "scale(1)";
    });



    const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1
const clamp = (val, min, max) => Math.max(min, Math.min(val, max))

class DragScroll {
  constructor(obj) {
    this.$el = document.querySelector(obj.el)
    this.$wrap = this.$el.querySelector(obj.wrap)
    this.$items = this.$el.querySelectorAll(obj.item)
    this.$bar = this.$el.querySelector(obj.bar)
    this.init()
  }
  
  init() {
    this.progress = 0
    this.speed = 0
    this.oldX = 0
    this.x = 0
    this.playrate = 0
    //
    this.bindings()
    this.events()
    this.calculate()
    this.raf()
  }
  
  bindings() {
    [
     'events', 
     'calculate',
     'raf', 
     'handleWheel', 
     'move', 
     'raf', 
     'handleTouchStart',
     'handleTouchMove', 
     'handleTouchEnd'
    ].forEach(i => { this[i] = this[i].bind(this) })
  }
  
  calculate() {
    this.progress = 0
    this.wrapWidth = this.$items[0].clientWidth * this.$items.length
    this.$wrap.style.width = `${this.wrapWidth}px`
    this.maxScroll = this.wrapWidth - this.$el.clientWidth
  }
  
  handleWheel(e) {
    this.progress += e.deltaY
    this.move()
  }
  
  handleTouchStart(e) {
    e.preventDefault()
    this.dragging = true
    this.startX = e.clientX || e.touches[0].clientX
    this.$el.classList.add('dragging')
  }

  handleTouchMove(e) {
    if (!this.dragging) return false
    const x = e.clientX || e.touches[0].clientX
    this.progress += (this.startX - x) * 2.5
    this.startX = x
    this.move()
  }

  handleTouchEnd() {
    this.dragging = false
    this.$el.classList.remove('dragging')
  }
  
  move() {
    this.progress = clamp(this.progress, 0, this.maxScroll)
  }
  
  events() {
    window.addEventListener('resize', this.calculate)
    window.addEventListener('wheel', this.handleWheel)
    //
    this.$el.addEventListener('touchstart', this.handleTouchStart)
    window.addEventListener('touchmove', this.handleTouchMove)
    window.addEventListener('touchend', this.handleTouchEnd)
    //
    window.addEventListener('mousedown', this.handleTouchStart)
    window.addEventListener('mousemove', this.handleTouchMove)
    window.addEventListener('mouseup', this.handleTouchEnd)
    document.body.addEventListener('mouseleave', this.handleTouchEnd)
  }
  
  raf() {
    // requestAnimationFrame(this.raf)
    this.x = lerp(this.x, this.progress, 0.1)
    this.playrate = this.x / this.maxScroll
    //
    this.$wrap.style.transform = `translateX(${-this.x}px)`
    this.$bar.style.transform = `scaleX(${.18 + this.playrate * .82})`
    //
    this.speed = Math.min(100, this.oldX - this.x)
    this.oldX = this.x
    //
    this.scale = lerp(this.scale, this.speed, 0.1)
    this.$items.forEach(i => {
      i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`
      i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`
    })
  }
}


/*--------------------
Instances
--------------------*/
const scroll = new DragScroll({
  el: '.carousel',
  wrap: '.carousel--wrap',
  item: '.carousel--item',
  bar: '.carousel--progress-bar',
})


/*--------------------
One raf to rule em all
--------------------*/
const raf = () => {
  requestAnimationFrame(raf)
  scroll.raf()
}
raf()


function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
 

  window.onscroll = function () {
            let scrollUpBtn = document.getElementById("scrollUpBtn");
            if (window.scrollY > 100) { // 100px-ден төмен болса, батырманы көрсетеміз
                scrollUpBtn.style.display = "block";
            } else {
                scrollUpBtn.style.display = "none";
            }
        };

          
  document.addEventListener("DOMContentLoaded", function () {
            new Swiper(".swiper-container", {
                loop: true,  // Бесконечная прокрутка
                slidesPerView: 3, // Показывает 3 фото за раз
                spaceBetween: 20, // Расстояние между фото
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1 }
                }
            });
        });