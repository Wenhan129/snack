import { createStore, applyMiddleware } from "redux";
import { RootAction, RootState } from "typesafe-actions";

import { composeEnhancers } from "./utils";
import rootReducer from "./root-reducer";
import logger from "../middlewares/logger";

const initialState = {};

const enhancers = composeEnhancers(applyMiddleware(logger));

const store = createStore(rootReducer, initialState, enhancers);

export default store;
