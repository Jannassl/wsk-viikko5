import './App.css';
import Home from './Views/Home';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Profile } from './Views/Profile';
import Upload from './Views/Upload';
import Layout from './components/Layout';
import Single from './Views/Single';
const App = () => {
  return (
    <>
    <Router basename={import.meta.env.BASE_URL}>
      <h1>My App</h1>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/profile' element ={<Profile />} />
          <Route path='/upload' element={<Upload />}  />
          <Route path='/media/:id' element={<Single />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
};
export default App;
