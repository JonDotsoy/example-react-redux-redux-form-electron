/*

Make the reducer

*/
const {reducer: reducerForm} = require('redux-form')
const {combineReducers} = require('redux')

/* My default state */
const initialState = {}

const Reducer = (store = initialState, action) => {
  switch(action.type) {
    default: return store
  }
}


exports = module.exports

/*

@ref http://redux.js.org/docs/api/combineReducers.html
*/
exports.Reducer = combineReducers({
  form: reducerForm,
  app: Reducer
})

