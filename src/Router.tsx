import { Routes, Route } from 'react-router-dom'
import { Transactions } from './pages/Transactions';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Dashboard } from './pages/Dashboard';
import { TransactionsLayout } from './layouts/TransactionsLayout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Dashboard />} />
            </Route>

            <Route path="/transactions" element={<TransactionsLayout />}>
                <Route path="/transactions" element={<Transactions />} />
            </Route>
        </Routes>
    );
}