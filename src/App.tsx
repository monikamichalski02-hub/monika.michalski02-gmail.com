/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import History from './pages/History';
import Guide from './pages/Guide';
import Newsletter from './pages/Newsletter';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<History />} />
          <Route path="guide" element={<Guide />} />
          <Route path="newsletter" element={<Newsletter />} />
          {/* Fallback routes */}
          <Route path="vinyles" element={<History />} />
          <Route path="platines" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
