// @ts-nocheck
import axios from 'axios';
import { useState, useEffect, SetStateAction } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './../../appRedux/store/index.tsx'
//actions
import { passwordStrengthCheckerActions as checkPasswordStrength } from '../../appRedux/actions/passwordStregthChecker/index.tsx';


import { Input, Row, Col, Card } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


import ColorBlocks from '../colorBlocks/index.tsx';


//Style
const pwStrCheckerSyle = {
  guessTimeString : {
    paddingTop:18,
    fontSize:18
  },
  warning: {
    paddingTop:10, 
    color:'gray'
  },
  suggestions: {
    paddingTop:5,
    color:'gray'
  }
}

const textHeaderStyle = {
  textAlign: 'center',
  fontSize: 'xx-large',
  fontWeight: 700,
  paddingBottom: 20,
}


type Password = string;


const PasswordStrengthChecker = () => {
  const dispatch = useDispatch();
  //const useAppDispatch = () => useDispatch<AppDispatch>()
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


  let [password, passwordFn] = useState<Password>('');


  const passwordStrengthData = useAppSelector(({passwordStrengthCheckerReducer }) => passwordStrengthCheckerReducer.passwordStrengthData);

  const typedPasswordFn = (e: { target: { value: SetStateAction<string>; }; }) => {
    passwordFn(e.target.value)
  }


  useEffect(()=>{
    let data = { 'password' : password} 
    password.length > 0 ? dispatch(checkPasswordStrength.postPasswordStrength(data)) : null;
  },[password]);



  return (
    <div>
      <Row align="middle" style={{paddingTop:'15%'}}>
      <Col span={12} offset={6}>
        <Card>
         <Row align="middle">
           <Col span={12} offset={6}>
              <Row>
               <Col span={14} offset={5}>
                 <div style={textHeaderStyle}>Is your password strong enough?</div>
               </Col>
              </Row>
              <Input.Password
                placeholder="input password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{width: 500}}
                onChange={typedPasswordFn} 
                />
              <ColorBlocks passwordScore={passwordStrengthData.score} passwordLength={password.length}/>
              <div style={{textAlign: 'center'}}>
                {(password.length > 0 && passwordStrengthData.guessTimeString)? <div style={pwStrCheckerSyle.guessTimeString}>{`It will take ${passwordStrengthData.guessTimeString} to guess your password.`}</div> : null}
                {(password.length > 0 && passwordStrengthData.warning) ? <div style={pwStrCheckerSyle.warning}>{passwordStrengthData.warning}</div> : null}
                {(password.length > 0 && passwordStrengthData.suggestions) ? <div style={pwStrCheckerSyle.suggestions}>{passwordStrengthData.suggestions.map((suggestion) => {
                  return suggestion})}</div> : null}
              </div>
           </Col>

         </Row>

         


        </Card>
      </Col>
    </Row>

    </div>
  );
}

export default PasswordStrengthChecker;
