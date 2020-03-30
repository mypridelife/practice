new Vue({
  el: '#app',
  data: {
    //swiper
    swiper: '',
    //界面数据
    showPageoneCircle: false,
    showPageoneText: false,
    pageoneText: '专做节能服务的抠门店小二'
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    this.handleStart()
  },
  methods: {
    animateCSS(element, animationName, callback) {
      const node = document.querySelector(element)
      node.classList.add('animated', animationName)

      function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
      }

      node.addEventListener('animationend', handleAnimationEnd)
    },
    handleStart() {
      this.pageOneStart()
    },
    pageOneStart() {
      this.animateCSS('.pageone-bg', 'zoomIn', () => {
        console.log('zoomIn')
        this.showPageoneCircle = true
        this.animateCSS('.pageone-circle', 'rotateIn', () => {
          console.log('rotateIn')
          this.showPageoneText = true
          this.animateCSS('.pageone-text', 'fadeInDownBig', () => {
            console.log('fadeInDown')
          })
        })
      })
    },
    pageTwoStart() {}
  }
})
