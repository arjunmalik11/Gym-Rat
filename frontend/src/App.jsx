

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HOME, PROFILE, SIGN_IN, SIGN_UP, ONBOARDING, MY_WORKOUTS } from './constants/routes';

import SignUp from './pages/SignUp';
import SignIn from "./pages/SignIn";
import Home from './pages/Home';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage/LandingPage';
import OnboardingMain from './pages/Onboarding/OnboardingMain';

import 'react-tooltip/dist/react-tooltip.css'
import LoadingPage from './pages/LandingPage/LoadingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to={SIGN_UP.INDEX} />} />
        <Route path={MY_WORKOUTS.INDEX} element={<Home />} />
        <Route path={"/initializing"} element={<LoadingPage />} />
        <Route path={PROFILE.INDEX} element={<Profile />} />
        <Route path={SIGN_UP.INDEX} element={<SignUp />} />
        <Route path={SIGN_IN.INDEX} element={<SignIn />} />
        <Route path={ONBOARDING.INDEX} element={<OnboardingMain />} />
        <Route path={HOME.INDEX} element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
