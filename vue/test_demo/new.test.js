const { Vue, MyVue } = require('./new')

describe('test Vue', () => {
  test('without `new`', () => {
    expect(() => Vue()).toThrow(
      'Vue is a constructor and should be called with the `new` keyword'
    )
  })
  test('with `new`', () => {
    expect(new Vue()).toEqual({})
  })
})
describe('test MyVue  ', () => {
  test('without `new`', () => {
    expect(() => MyVue()).toThrow(
      'MyVue is a constructor and should be called with the `new` keyword'
    )
  })
  test('with `new`', () => {
    expect(new MyVue()).toEqual({})
  })
})
