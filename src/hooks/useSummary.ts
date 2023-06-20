import { useState, useContext, useEffect } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';
import { AccountContext } from '../contexts/AccountContext';
import { api } from '../lib/axios';

export function useSummary() {
    const { transactions } = useContext(TransactionsContext);
    const { accountSelected } = useContext(AccountContext);
    const [summary, setSummary] = useState({
        income: 0,
        outcome: 0,
        balance: 0
    });

    useEffect(() => {
        accountSelected.map(acc => {
            const newSum = transactions.reduce((tr, transaction) => {
                if (transaction.type === 'income') {
                    tr.income += transaction.price;
                    tr.balance += transaction.price;
                } else {
                    tr.outcome += transaction.price;
                    tr.balance -= transaction.price;
                }
                return tr;
            }, {
                income: 0,
                outcome: 0,
                balance: 0
            });

            setSummary(newSum);

            api.patch(`account/${acc.id}`, { balance: newSum.balance })

            setSummary({
                income: 0,
                outcome: 0,
                balance: 0
            })
        })

    }, [transactions, accountSelected]);

    return summary;
}