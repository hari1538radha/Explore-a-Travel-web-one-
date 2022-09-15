import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import Main from './component/signup/Main/Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandinPage from './component/LandingPage/LandinPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>} exact ></Route>
        <Route path="/Signup" element={<Main/>}></Route>
        <Route path="/LandingPage" element={<LandinPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
