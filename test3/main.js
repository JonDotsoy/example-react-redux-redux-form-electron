const {AppComponent} = require('./AppComponent')
const ReactDOM = require('react-dom')
const {createStore} = require('redux')
const {Reducer} = require('./Reducer')
const {Provider} = require('react-redux')
const {createElement: ce} = require('react')
/*  */
const selector = document.querySelector('#app')

/* Create Store */
const store = createStore(Reducer)

ReactDOM.render(
  ce(Provider, {store},
    ce(AppComponent)
  ),
  selector
)


/*

Globalize

*/
global.store = store

