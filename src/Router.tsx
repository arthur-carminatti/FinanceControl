import { Routes, Route } from 'react-router-dom'
import { Transactions } from './pages/Transactions';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Dashboard } from './pages/Dashboard';
import { ManageAccounts } from './pages/ManageAccounts';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/manageaccounts" element={<ManageAccounts />} />
                <Route path="/transactions" element={<Transactions />} />
            </Route>
        </Routes>
    );
}