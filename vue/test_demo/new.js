/**
 * Vue 构造函数
function Vue (options) {
    // 保证了无法直接通过Vue()去调用，只能通过new的方式去创建实例
    if (!(this instanceof Vue)
    ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}
 */
function Vue() {
  // 保证了无法直接通过Vue()去调用，只能通过new的方式去创建实例
  if (!(this instanceof Vue)) {
    throw new Error(
      'Vue is a constructor and should be called with the `new` keyword'
    )
  }
}
function MyVue() {
  if (!new.target) {
    throw new Error(
      'MyVue is a constructor and should be called with the `new` keyword'
    )
  }
}

module.exports = {
  Vue,
  MyVue,
}
