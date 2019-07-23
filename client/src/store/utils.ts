import { compose } from "redux";

export const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    (window as any) &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
