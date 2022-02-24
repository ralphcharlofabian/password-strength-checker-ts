// @ts-nocheck
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import {passwordStrengthCheckerActions} from './../../actions/passwordStregthChecker/index.tsx';

//utilities
import { request } from '../../../utilities/helper';

//constants
import { passwordActType } from './../../constants/actionTypes.tsx';
import { noAuthHeaders } from '../../constants/configs';

interface Response {
  score? : number;
  guessTimeString?: string;
  warning?: string;
  suggestions?: Array<string>;
}


//function here
function* postPasswordStrength({payload}) {
  try {
    let resp:Response = yield call(() => request.post(`https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength`, {
      headers: noAuthHeaders,
      body: JSON.stringify(payload),
    }));

    if (resp) {
      yield put(passwordStrengthCheckerActions.postPasswordStrengthSuccess(resp));
    }

  } catch (err:string) {
    console.error(err);
  }
}





export function* passwordStrengthWatcher() {
  yield takeEvery(passwordActType.POST_PASSWORD_STRENGTH, postPasswordStrength);
}




export default function* rootSaga() {
  yield all([
    fork(passwordStrengthWatcher),
  ]);
}