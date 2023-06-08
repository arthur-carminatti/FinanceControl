import { ReactNode, useState, useEffect, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

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
            deleteTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}