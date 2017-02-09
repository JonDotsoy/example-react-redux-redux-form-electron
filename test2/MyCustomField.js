const get = require('lodash/get')
const {propTypes} = require('redux-form')
const {DOM: {button}} = require('react')

const MyCustomField = (props, context) => {
  const {form, change, values} = props

  console.warn('globalize (props):', global.props = props)

  return div({},
    div({},
      div({}, 'VALUE (AMAND)'),
      ' ',
      div({}, get(values, ['title'], ''))
    ),
    div({},
      button({
        type: 'button',
        onClick: () => {
          change('title', 'UpdateD: ' + Math.random())
        }
      }, 'HO!! button')
    )
  )
}

MyCustomField.propTypes = Object.assign({}, propTypes, {

})

exports = module.exports
exports.MyCustomField = MyCustomField

