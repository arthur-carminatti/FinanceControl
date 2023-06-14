import { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../contexts/AccountContext';

export function useSummary() {
    const { accountSelected } = useContext(AccountContext);
    const [summary, setSummary] = useState({
        income: 0,
        outcome: 0,
        balance: 0
    });

    useEffect(() => {
        const newSummary = accountSelected.reduce(
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
    }, [accountSelected]);

    return summary;
}