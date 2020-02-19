import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reduce";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));

export default store;
