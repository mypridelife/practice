// ==UserScript==
// @name         微信阅读
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://weread.qq.com/*
// @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @grant        none
// ==/UserScript==

;(function () {
  ;("use strict")
  $(document).ready(function () {
    var timer = setInterval(() => {
      window.scrollBy(0, 100)
    }, 1000)

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop()
      var scrollHeight = $(document).height()
      var windowHeight = $(this).height()
      if (scrollTop + windowHeight == scrollHeight) {
        console.log("到底部了")
        function n(e) {
          return document.getElementsByClassName(e)[0]
        }
        var o, c, f, p, m
        n("readerFooter_button")
          ? ((i = document.body),
            (u = "keydown"),
            (c = 39),
            (p = i.ownerDocument),
            (m = p.defaultView || p.parentWindow),
            p.createEvent
              ? (m.KeyEvent
                  ? (f = p.createEvent("KeyEvents")).initKeyEvent(
                      u,
                      !0,
                      !0,
                      m,
                      !1,
                      !1,
                      !1,
                      !1,
                      c,
                      0
                    )
                  : ((f = p.createEvent("UIEvents")),
                    Object.defineProperty(f, "keyCode", {
                      get: function () {
                        return this.keyCodeVal
                      },
                    }),
                    Object.defineProperty(f, "which", {
                      get: function () {
                        return this.keyCodeVal
                      },
                    }),
                    f.initUIEvent(u, !0, !0, m, 1),
                    (f.keyCodeVal = c),
                    f.keyCode !== c &&
                      console.log("keyCode " + f.keyCode + " 和 (" + f.which + ") 不匹配")),
                i.dispatchEvent(f))
              : p.createEventObject &&
                (((f = p.createEventObject()).keyCode = c), i.fireEvent("on" + u, f)))
          : (console.log("已读完"), clearInterval(o))
      }
    })
  })
})()
