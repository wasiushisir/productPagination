import { createStore,applyMiddleware} from "redux";


import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import productReducer from "./reducers/productsReducer";

const store=createStore(productReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store