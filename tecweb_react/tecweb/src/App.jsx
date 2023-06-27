import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home } from './ui/screens/home/home.screen';
import { Login } from './ui/screens/login/login.screen';
import { SignUp } from './ui/screens/signup/signup.screen';
import { Jobs } from './ui/screens/jobs/jobs.screen';
import { Profile } from './ui/screens/profile/profile.screen';

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;
