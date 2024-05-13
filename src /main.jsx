import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import "modern-normalize";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from "./redux/store";
import App from './components/App/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
