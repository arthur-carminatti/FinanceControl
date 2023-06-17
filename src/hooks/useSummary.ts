import { useState, useContext, useEffect } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export function useSummary() {
    const { transactions } = useContext(TransactionsContext);
    const [summary, setSummary] = useState({
        income: 0,
        outcome: 0,
        balance: 0
    });

    useEffect(() => {
        const newSummary = transactions.reduce(
            (acc, transaction) => {
                if (transaction.type === 'income') {
                    acc.income += transaction.price;
                    acc.balance += transaction.price;
                } else {
                    acc.outcome += transaction.price;
                    acc.balance -= transaction.price;
                }

                return acc;
            },
            {
                income: 0,
                outcome: 0,
                balance: 0
            }
        );

        setSummary(newSummary);

    }, [transactions]);

    return summary;
}