class Vue {
  static methods1() {
    console.log("methods1")
    this.methods2()
  }
  static methods2() {
    console.log("methods2")
  }
}
const vue = new Vue()
Vue.methods1()
