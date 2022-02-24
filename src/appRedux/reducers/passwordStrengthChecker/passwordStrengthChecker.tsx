// @ts-nocheck
import { passwordActType } from '../../constants/actionTypes.tsx';


const initialState = {
  passwordInput:'',
  passwordStrengthData: {}
}

export default (state: typeof initialState = initialState, action: any) => {
  const { type, payload } = action || {};

  switch (type) {
    case passwordActType.POST_PASSWORD_STRENGTH:
      return { ...state, passwordInput: payload };
    case passwordActType.POST_PASSWORD_STRENGTH_SUCCESS:
      return { ...state, passwordStrengthData: payload };
    default:
      return state;
  }
}