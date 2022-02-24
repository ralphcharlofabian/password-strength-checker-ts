// @ts-nocheck
import { all } from 'redux-saga/effects';

import {passwordStrengthCheckerSaga} from './passwordStrengthChecker/index.tsx';

export default function* rootSaga() {
  yield all([
    passwordStrengthCheckerSaga()
  ]);
}