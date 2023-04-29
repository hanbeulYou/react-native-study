import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';

function App() {
  // Tab.Navigator를 활용해 Tab들 이동
  // Provider을 활용해 redux 연결
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
