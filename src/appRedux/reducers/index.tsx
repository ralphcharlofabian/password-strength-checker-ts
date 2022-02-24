// @ts-nocheck
import { combineReducers } from "redux";

import * as passwordStrengthChecker from "./passwordStrengthChecker/index.tsx";


export  const rootReducer =  combineReducers({
  ...passwordStrengthChecker
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>