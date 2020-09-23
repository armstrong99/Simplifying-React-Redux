import shoeReducer from './shoeReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    shoesStore: shoeReducer
})


export default rootReducer