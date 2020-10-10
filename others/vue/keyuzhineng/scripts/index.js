new Vue({
  el: '#app',
  data: {
    // swiper
    swiper: '',
    timer: null,
    // player
    isPlaying: true,
    // 界面数据 1-7
    showPageoneImage: false,
    showPageoneText: false,
    pageoneText1: '专做智能环境',
    pageoneText2: '与节能服务的店小二',

    showPagetwoImage1: false,
    showPagetwoImage2: false,
    showPagetwoText1: false,
    showPagetwoText2: false,
    pagetwoText1: '共享平台',
    pagetwoText1_1: '服务升级',
    pagetwoText2: '招募项目合伙人',

    showPagethreeImage: false,
    showPagethreeText1: false,
    showPagethreeText2: false,
    showPagethreeText3: false,
    showPagethreeImage4: false,
    pagethreeText1: '资证不收费',
    pagethreeText1_1: '专业专注20年',
    pagethreeText1_2: '7S全程平台',
    pagethreeText2: '(金融+人力+营销+技术+集',
    pagethreeText2_1: '采+管理+运维)一体化服务',

    pagefourContents: [
      { img: './images/4/p1.png', visiable: false },
      { text: '建筑智能化系统设计专项甲级', visiable: false },
      { text: '建筑装饰工程设计专项甲级', visiable: false },
      { img: './images/4/p2.png', visiable: false },
      { text: '机电工程总承包壹级', visiable: false },
      { text: '电力工程施工总承包叁级', visiable: false },
      { text: '市政公用工程施工总承包叁级', visiable: false },
      { img: './images/4/p3.png', visiable: false },
      { text: '消防设施工程专业承包壹级', visiable: false },
      { text: '电子与智能化工程专业承包壹级', visiable: false },
      { text: '建筑机电安装工程专业承包壹级', visiable: false },
      { text: '建筑装修装饰工程专业承包壹级', visiable: false },
      { text: '环保工程专业承包壹级', visiable: false },
      { text: '河南省公共安全技术防范服务壹级', visiable: false },
      { text: '城市及道路照明工程专业承包贰级', visiable: false },
      { text: '洁净室空气净化专业承包贰级', visiable: false },
      { text: '第一、二类医疗器械经营', visiable: false },
      { text: '设备维修安装企业能力等级A类Ⅱ级', visiable: false }
    ],

    showPagefiveBg: false,
    showPagefiveImage: false,
    showPagefiveText: false,
    pagefiveText: '专做节能服务的店小二',

    showPagesixBg: false,
    showPagesixImage: false,
    showPagesixText: false,
    pagesixText: '专做节能服务的店小二',

    showPagesevenBg: false,
    showPagesevenImage: false,
    showPagesevenText: false,
    pagesevenText: '专做节能服务的店小二'
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      speed: 500,
      preloadImages: true,
      initialSlide: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  },
  watch: {
    'swiper.activeIndex'(n, o) {
      console.log(`from page${o + 1} to page${n + 1}`)
      //   this.handleRemoveAnimate()
      this.timer = null
      switch (o) {
        case 0:
          this.pageOneEnd()
          break
        case 1:
          this.pageTwoEnd()
          break
        case 2:
          this.pageThreeEnd()
          break
        case 3:
          this.pageFourEnd()
          break
        case 4:
          this.pageFiveEnd()
          break
        case 5:
          this.pageSixEnd()
          break
        case 6:
          this.pageSevenEnd()
          break

        default:
          break
      }
      //由于翻页速度为500ms，为了体验，延时400ms
      this.timer = setTimeout(() => {
        this.timer = null
        switch (n) {
          case 0:
            this.pageOneStart()
            break
          case 1:
            this.pageTwoStart()
            break
          case 2:
            this.pageThreeStart()
            break
          case 3:
            this.pageFourStart()
            break
          case 4:
            this.pageFiveStart()
            break
          case 5:
            this.pageSixStart()
            break
          case 6:
            this.pageSevenStart()
            break

          default:
            break
        }
      }, 500)
    }
  },
  created() {
    this.init()
  },
  methods: {
    handlePlay() {
      this.isPlaying = !this.isPlaying
    },
    /**
     * 加入和移除动画
     */
    animateCSS(element, animationName, callback) {
      const node = typeof element === 'string' ? document.querySelector(element) : element
      //   node.classList.remove('hide')
      node.classList.add('animated', animationName)

      function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
      }
      node.addEventListener('animationend', handleAnimationEnd)
    },
    //隐藏和显示
    // handleRemoveAnimate() {
    //   const nodes = document.querySelectorAll('.animated')
    //   console.log('nodes', nodes)
    //   if (nodes.length > 0) {
    //     let nodeArr = Array.prototype.slice.call(nodes)
    //     console.log(nodeArr)

    //     nodeArr.map(node => {
    //       node.classList.remove('animated')
    //     })
    //   }
    // },
    /**
     * 每个页面的动画函数，放到进入页面开始执行，跳出页面停止执行
     */
    pageOneStart() {
      this.showPageoneImage = true
      this.animateCSS('.pageone-image', 'zoomIn', () => {})
      this.showPageoneText = true
      this.animateCSS('.pageone-text-container', 'flipInY', () => {})
    },
    pageOneEnd() {
      this.showPageoneImage = false
      this.showPageoneText = false
    },
    pageTwoStart() {
      this.showPagetwoImage1 = true
      this.animateCSS('.pagetwo-image1', 'slideInDown', () => {})
      this.showPagetwoImage2 = true
      this.animateCSS('.pagetwo-image2', 'slideInUp', () => {})
      this.timer = setTimeout(() => {
        this.timer = null
        this.showPagetwoText1 = true
        this.animateCSS('.pagetwo-text1', 'fadeInLeft', () => {})
        this.showPagetwoText2 = true
        this.animateCSS('.pagetwo-text2', 'rollin', () => {})
        this.animateCSS('.pagetwo-text2', 'fadeInRight', () => {})
      }, 1000)
    },
    pageTwoEnd() {
      this.showPagetwoImage1 = false
      this.showPagetwoImage2 = false
      this.showPagetwoText1 = false
      this.showPagetwoText2 = false
    },
    pageThreeStart() {
      this.showPagethreeImage = true
      this.showPagethreeImage4 = true
      this.showPagethreeText1 = true
      this.showPagethreeText2 = true
      this.showPagethreeText3 = true
      this.animateCSS('.pagethree-image', 'zoomIn', () => {})
      this.animateCSS('.pagethree-image4', 'zoomIn', () => {})
      this.animateCSS('.pagethree-text1', 'fadeInLeft', () => {})
      this.animateCSS('.pagethree-text2', 'flipInY', () => {})
      this.animateCSS('.pagethree-text3', 'bounceInRight', () => {})
    },
    pageThreeEnd() {
      this.showPagethreeImage = false
      this.showPagethreeText1 = false
      this.showPagethreeText2 = false
      this.showPagethreeText3 = false
      this.showPagethreeImage4 = false
    },
    pageFourStart() {
      this.map(this.pagefourContents, (e, i) => {
        this.pagefourContents[i].visiable = true
        return new Promise(resolve => {
          const ele = document.querySelector(`#page4-text${i}`)
          if (ele) {
            this.animateCSS(ele, 'fadeInUpBig', () => {})
            setTimeout(() => {
              resolve(true)
            }, 50)
          } else {
            resolve(true)
          }
        })
      })
    },
    pageFourEnd() {
      this.map(this.pagefourContents, (e, i) => {
        return new Promise(resolve => {
          const ele = document.querySelector(`#page4-text${i}`)
          if (ele) {
            this.animateCSS(ele, 'fadeInDownBig')
            setTimeout(() => {
              resolve(true)
              this.pagefourContents[i].visiable = false
            }, 50)
          } else {
            resolve(true)
          }
        })
      })
    },
    pageFiveStart() {},
    pageSixStart() {},
    pageSevenStart() {},

    pageFiveEnd() {},
    pageSixEnd() {},
    pageSevenEnd() {},
    init() {
      // 创建地图
      // var map = new qq.maps.Map(document.getElementById("container"), {
      //   center: new qq.maps.LatLng(39.916527, 116.397128),      // 地图的中心地理坐标
      //   zoom: 8,     // 地图缩放级别
      //   mapStyleId: 'style1'  // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗
      // });

      const noncestr = Math.random()
        .toString(36)
        .substr(2, 15)
      const timestamp = parseInt(new Date().getTime() / 1000).toString()

      this.signature(noncestr, timestamp).then(signature_res => {
        const signature = signature_res.signature
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wxb2a7aa9a83b53648', // 必填，公众号的唯一标识
          timestamp, // 必填，生成签名的时间戳
          nonceStr: noncestr, // 必填，生成签名的随机串
          signature, // 必填，签名
          jsApiList: ['updateAppMessageShareData', 'chooseImage'] // 必填，需要使用的JS接口列表
        })
        // alert('111111111', noncestr, signature)
        console.log('111111111', noncestr, signature)

        wx.ready(e => {
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          // alert('2222222222222')

          wx.updateAppMessageShareData({
            title: '分享标题', // 分享标题
            desc: '分享描述', // 分享描述
            link: 'http://kyhj.gitee.io/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://img.xiumi.us/xmi/ua/1OqPJ/i/d9830cfba7a827d370234a0e62d71f9f-sz_412594.PNG?x-oss-process=style/xm', // 分享图标
            success: e => {
              // 设置成功
            },
            error: f => {}
          })
        })
        wx.error(res => {
          console.error(res)
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        })
      })
    },
    /**
     * 从服务端获取微信签名
     * @param { string } noncestr 随机数
     * @param { string } timestamp 时间戳
     */
    signature(noncestr, timestamp) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://119.3.224.246:8000/wx/signature?noncestr=${noncestr}&timestamp=${timestamp}`)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.message)
          })
      })
    },
    async chain_map(...args) {
      if (args.length > 0) {
        const fun = args.shift()
        if (!fun) {
          return []
        }

        const ret = await fun()
        return [ret].concat(await this.chain_map(...args))
      } else {
        return []
      }
    },
    /**
     * 循环。当前一步循环走完之后，在执行下一步循环
     * @param {*} arr 数组
     * @param {*} callback 回调。(it: 循环项, i: 下表, _arr: 当前数组)
     */
    async map(arr, callback) {
      const funcs = arr.map((it, i, _arr) => {
        return async () => {
          return await callback(it, i, _arr)
        }
      })
      return this.chain_map(...funcs)
    }
  }
})
