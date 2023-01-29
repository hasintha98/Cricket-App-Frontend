import './App.css';
import './styles/home.css'
import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
const HomePage = React.lazy(() => import('./pages/HomePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <div>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Home" element={<HomePage />} />
            <Route path="/login" name="Login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
