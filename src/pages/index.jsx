import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { NotFound } from './NotFound';

export const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sing-up" element={<SignUp />} />
    <Route path="/sing-in" element={<SignIn />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
