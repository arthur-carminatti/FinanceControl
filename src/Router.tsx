import { Routes, Route } from 'react-router-dom'
import { Transactions } from './pages/Transactions';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Transactions />} />
            </Route>
        </Routes>
    );
}