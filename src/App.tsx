import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';
import { MissionPage } from './pages/MissionPage';
import { ApplicationPage } from './pages/ApplicationPage';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/mission" element={<MissionPage />} />
                <Route path="/apply" element={<ApplicationPage />} />
            </Routes>
        </HashRouter>
    );
}
