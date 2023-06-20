import { ReactNode, useState, useCallback, useEffect, createContext } from "react";
import { api } from "../lib/axios";

interface Transactions {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface CreateTransactionInput {
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

interface TransactionContextType {
    transactions: Transactions[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput) => Promise<void>
    deleteTransaction: (id: number) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([])
    const [summary, setSummary] = useState({
        income: 0,
        outcome: 0,
        balance: 0
    });

    const fetchTransactions = useCallback(
        async (query?: string) => {
            const response = await api.get('transactions', {
                params: {
                    _sort: 'createdAt',
                    _order: 'desc',
                    q: query
                }
            })

            setTransactions(response.data)
        }, [])

    const createTransaction = useCallback(
        async (data: CreateTransactionInput) => {
            const { description, price, category, type } = data

            const response = await api.post('transactions', {
                description,
                price,
                category,
                type,
                createdAt: new Date()
            })

            setTransactions(state => [response.data, ...state])
        }, [])

    const transformTransaction = useCallback(
        async () => {
            const newSummary = transactions.reduce((acc, transaction) => {
                if (transaction.type === 'income') {
                    acc.income += transaction.price;
                    acc.balance += transaction.price;
                } else {
                    acc.outcome += transaction.price;
                    acc.balance -= transaction.price;
                }
                return acc;
            }, {
                income: 0,
                outcome: 0,
                balance: 0
            });

            setSummary(newSummary);
        }, [transactions])

    const deleteTransaction = useCallback(
        async (id: number) => {
            await api.delete(`transactions/${id}`)
            setTransactions(transactions.filter(transaction => transaction.id !== id))
        }, [transactions])

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction,
            deleteTransaction,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}