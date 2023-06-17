import { ReactNode, useState, createContext, useEffect, useContext } from "react";
import { AccountContext } from "./AccountContext";
import { api } from "../lib/axios";

interface SummaryProviderProps {
    children: ReactNode
}

interface SummaryContextType {
    summary: {
        income: number,
        outcome: number
    }
}

export const SummaryContext = createContext({} as SummaryContextType)

export function SummaryProvider({ children }: SummaryProviderProps) {
    const { accountSelected } = useContext(AccountContext)

    const [summary, setSummary] = useState({
        income: 0,
        outcome: 0,
        balance: 0
    });

    async function updateBalance(accountId: number, newBalance: number) {
        await api.patch(`account/${accountId}`, { balance: newBalance })
    }

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

        if (accountSelected && accountSelected.length > 0) {
            updateBalance(accountSelected[0].id, newSummary.balance);
        }

    }, [accountSelected]);

    return (
        <SummaryContext.Provider value={{
            summary
        }}>
            {children}
        </SummaryContext.Provider>
    )
}