// @ts-nocheck
import { passwordActType } from '../../constants/actionTypes.tsx';

interface Password {
  password: string;
}

interface PasswordData {
  score? : number;
  guessTimeString?: string;
  warning?: string;
  suggestions?: Array<string>;
}

export const postPasswordStrength = (payload: Password) => ({
  type: passwordActType.POST_PASSWORD_STRENGTH,
  payload
});

export const postPasswordStrengthSuccess = (payload: PasswordData) => ({
  type: passwordActType.POST_PASSWORD_STRENGTH_SUCCESS,
  payload
});