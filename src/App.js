// REDUX, REDUX PERSIST AND REDUX THUNK


// import React from 'react';
// import { store, persistor } from './config/store/index';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
// import WithThemeAndRoutes from '../src/withThemeAndRoutes'
// import './App.css';

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {/* App with MUI Theme Provider and Navigations */}
//         <WithThemeAndRoutes />
//       </PersistGate>
//     </Provider>
//   );
// }

// export default App;


// REDUX AND REDUX THUNK


import React from 'react';
import {
  store,
} from './config/store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import WithThemeAndRoutes from '../src/withThemeAndRoutes'
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App() {
  return (
    <Provider store={store}>
      {/* App with MUI Theme Provider and Navigations */}
      <WithThemeAndRoutes />
    </Provider>
  );
}

export default App;
