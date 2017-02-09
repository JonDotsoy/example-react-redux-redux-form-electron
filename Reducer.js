const {combineReducers} = require('redux')
const {reducer: formReducer} = require('redux-form')

const initialState = {}

/* ಠ╭╮ಠ Ok... and there? */
const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

exports = module.exports
exports.Reducer = combineReducers({
  form: formReducer, // (._.) ( l: ) ( .-. ) ( :l ) (._.) Ok! this is a reducer to redux-form
  myState: MyReducer
})

