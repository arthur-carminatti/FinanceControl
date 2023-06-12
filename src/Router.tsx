import { Routes, Route } from 'react-router-dom'
import { Transactions } from './pages/Transactions';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Dashboard } from './pages/Dashboard';
import { TransactionsLayout } from './layouts/TransactionsLayout';
import { ManageAccounts } from './pages/ManageAccounts';
import { ManageTransactions } from './pages/ManageTransactions';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/manageaccounts" element={<ManageAccounts />} />
                <Route path="/managetransactions" element={<ManageTransactions />} />
            </Route>

            <Route path="/transactions" element={<TransactionsLayout />}>
                <Route path="/transactions" element={<Transactions />} />
            </Route>
        </Routes>
    );
}