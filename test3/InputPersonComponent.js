/*

Make the component to writing the person information.

*/
const cx = require('classnames')
const {createElement: ce, DOM: {div, h1, h2, span, label}} = require('react')
const {propTypes, Field, reduxForm} = require('redux-form')

/**
 *
 */
const InputPersonComponent = ({values = {}, change}) => {
  return (
    div({className: cx({
      withTitle: values.title,
      withAge: values.age
    })},
      div({},
        div({},
          label({},'First Name'),
          ' ',
          ce(Field, {name:'firstName',component:'input',type:'text'})
        ),
        div({},
          label({},'Last Name'),
          ' ',
          ce(Field, {name:'lastName',component:'input',type:'text'})
        )
      )
    )
  )
}

/* ヾ(⌐■_■)ノ♪ with Babel, use `{...propTypes}` */
InputPersonComponent.propTypes = Object.assign({}, propTypes, {})

exports = module.exports

/* make decorator */
exports.InputPersonComponent = reduxForm({
  form: 'FormPerson'
})(InputPersonComponent)

