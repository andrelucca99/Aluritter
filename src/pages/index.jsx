import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { SignUp } from './SignUp';
import { NotFound } from './NotFound';

export const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/singup" element={<SignUp />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
