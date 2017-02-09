const {Component, createElement: e, DOM: {div, button, form, label, ul, span, li, input, h1, h2}} = require('react')
const get = require('lodash/get')
const {render} = require('react-dom')
const {createStore} = require('redux')
const {connect, Provider, getFormValues} = require('react-redux')
const {Reducer} = require('./Reducer')

// (ᵔᴥᵔ) workin with redux-form
const {Field, reduxForm} = require('redux-form')

const store = createStore(Reducer)

// globalize store
console.warn('store:', global.store = store)

// @reduxForm ಥ_ಥ I do not have decorators.
const MyForm = ({handleSubmit}) => {
  return (
    div({},
      div({role: 'header'},
        h1({}, 'Usando React-Form')
      ),
      div({role: 'body'},
        // (ง ͠° ͟ل͜ ͡°)ง This is a form
        div({},
          form({onSubmit: (e) => {
            e.preventDefault()
            handleSubmit()
          }},
            div({role: 'section-form'},
              label({}, 'Nomber'),
              ' ', // ಠ~ಠ I'm a space.
              // Load the Field element
              e(Field, {name: 'firstName', component: 'input', type: 'text'})
            ),
            div({role: 'section-form'},
              label({}, 'Apellido'),
              ' ', // ಠ~ಠ I'm a space.
              e(Field, {name: 'lastName', component: 'input', type: 'text'})
            ),
            div({role: 'section-submit'},
              // ¯\_(ツ)_/¯ Spec
              button({type: 'submit'}, 'Ok Ready!?')
            )
          )
        )
      ),
      div({role: 'footer'},
        div({})
      )
    )
  )
}

/*
(づ￣ ³￣)づ Decorator to reduxForm
*/
const MyFormDecorated = reduxForm({
  form: 'myform' // The name to form in state ~(˘▾˘~)
})(MyForm)

/* Example1
In your app using redux
*/
const MyAPP = e(Provider, {store},
  div({},
    span({},
      e(MyFormDecorated, {
        handleSubmit: (values) => {
          const firstName = get(store.getState(), ['form', 'myform', 'values', 'firstName'])
          const lastName = get(store.getState(), ['form', 'myform', 'values', 'lastName'])
          // ƪ(˘⌣˘)ʃ
          console.warn('load store.getState()')
          console.info('firstName: %o, lastName: %o', firstName, lastName)
        }
      })
    )
  )
)

// ┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴ this is to render
const selectorAPP = document.querySelector('#app')
render(MyAPP, selectorAPP)

