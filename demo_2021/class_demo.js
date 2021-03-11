class Demo {
  callDemo() {
    this.callFoo()
  }
  callFoo() {
    console.log('hhh')
  }
}

const demo = new Demo()
demo.callDemo()
