import './App.css';
import Home from './Views/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Profile } from './Views/Profile';
import Upload from './Views/Upload';
import Layout from './components/Layout';
import Single from './Views/Single';
import Login from './Views/Login';
import { UserProvider } from './contexts/UserContext';
import HandleAutoLogin from './components/HandleAutoLogin';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const basename = import.meta.env.BASE_URL
  console.log("basename", basename)

  return (
    <Router basename={basename}>
      <UserProvider>
        <HandleAutoLogin />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/upload" element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            } />
            <Route path="/media/:id" element={<Single />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
