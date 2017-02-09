const {Component, createElement: e, DOM: {div, button, form, label, ul, span, li, input, h1, h2}} = require('react')
const {MyCustomField} = require('./MyCustomField')
const {render} = require('react-dom')
const {createStore} = require('redux')
const {connect, Provider, getFormValues} = require('react-redux')
const {Reducer} = require('./Reducer')

// (ᵔᴥᵔ) workin with redux-form
const {Field, reduxForm} = require('redux-form')

const store = createStore(Reducer)

// globalize store
console.warn('store:', global.store = store)

/*
Using a custom Field
*/
const MyCustomFieldDecorated = reduxForm({
  form: 'myForm2'
})(
  connect(
    state => ({
      values: require('redux-form').getFormValues('myForm2')(state)
    })
  )(MyCustomField)
)

const MyAPP2 = e(Provider, {store},
  div({},
    span({},
      e(MyCustomFieldDecorated)
    )
  )
)

// ┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴ this is to render
const selectorAPP = document.querySelector('#app')
render(MyAPP2, selectorAPP)

