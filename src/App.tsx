// import logo from './logo.svg';
// import './App.css';
// @ts-nocheck
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './appRedux/store/index.tsx';

// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import PasswordStrengthChecker from './components/passwordStrengthChecker/index.tsx';


function App() {
  return (
    <Provider store={store}>
      <PasswordStrengthChecker/>
    </Provider>
  );
}

export default App;
