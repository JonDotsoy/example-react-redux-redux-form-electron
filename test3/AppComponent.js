const {createElement: ce, DOM: {div, ul, li, span, h1, h2, pre, code}} = require('react')
const get = require('lodash/get')
const {InputPersonComponent} = require('./InputPersonComponent')
const {connect} = require('react-redux')

const AppComponent = ({values}) => {
  return (
    div({},
      /* HEADER */
      div({},
        h1({},
          'Example APP'
        )
      ),
      /* Body */
      div({},
        'My Form',
        div({},
          ce(InputPersonComponent, {})
        )
      ),
      /* Footer */
      div({},
        code({}, 'values:'),
        div({},
          pre({}, JSON.stringify(values, null, 2))
        )
      )
    )
  )
}

exports = module.exports
exports.AppComponent = connect(
  state => ({
    values: get(state, ['form'])
  })
)(AppComponent)

