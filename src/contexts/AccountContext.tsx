import { ReactNode, useState, createContext, useEffect, useCallback } from "react";
import { api } from "../lib/axios";

interface Account {
    id: number
    bank: string
    agency: number
    numberAccount: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
    balance: number
    income: number
    outcome: number
}

interface CreateAccountInput {
    bank: string
    agency: number
    numberAccount: number
}

interface CreateTransactionInput {
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

interface TransactionContextType {
    account: Account[]
    accountSelected: Account[]
    createAccount: (data: CreateAccountInput) => Promise<void>
    fetchAccounts: (query?: string) => Promise<void>
    editAccount: (data: CreateTransactionInput) => Promise<void>
    deleteAccount: (id: number) => Promise<void>
    compareAccount: (id: number) => void
}

interface AccountProviderProps {
    children: ReactNode
}

export const AccountContext = createContext({} as TransactionContextType)

export function AccountProvider({ children }: AccountProviderProps) {
    const [account, setAccount] = useState<Account[]>([])
    const [accountSelected, setAccountSelected] = useState<Account[]>([])

    // async function fetchAccounts() {
    //     const response = await api.get('account')

    //     setAccount(response.data)
    // }

    // useEffect(() => {
    //     fetchAccounts()
    // }, [accountSelected])

    const fetchAccounts = useCallback(
        async (query?: string) => {
            const response = await api.get('account', {
                params: {
                    _sort: 'createdAt',
                    _order: 'desc',
                    q: query
                }
            })

            setAccount(response.data)
        }, [])

    useEffect(() => {
        fetchAccounts()
    }, [fetchAccounts])

    async function createAccount(data: CreateAccountInput) {
        const { bank, agency, numberAccount } = data

        const responseGet = await api.get('account')
        const dataGet = responseGet.data
        setAccount(dataGet)

        const response = await api.post('account', {
            bank,
            agency,
            numberAccount,
            description: '',
            category: '',
            type: '',
            balance: 0,
            price: 0,
            income: 0,
            outcome: 0,
            createdAt: new Date()
        })

        setAccount(state => [...state, response.data])
    }

    async function editAccount(data: CreateTransactionInput) {
        const { description, price, category, type } = data

        const idRoute = accountSelected[0].id

        await api.patch(`account/${idRoute}`, {
            description,
            price,
            category,
            type,
        });

        setAccountSelected(state => {
            const updatedAccount = {
                ...state[0],
                description,
                price,
                category,
                type
            };

            return [...state, updatedAccount];
        });
    }

    async function deleteAccount(id: number) {
        await api.delete(`account/${id}`)
        setAccount(account.filter(account => account.id !== id))
    }

    function compareAccount(id: number) {
        const compare = account.filter(account => account.id === id)
        setAccountSelected(compare)
    }

    return (
        <AccountContext.Provider value={{
            account,
            accountSelected,
            createAccount,
            deleteAccount,
            compareAccount,
            editAccount,
            fetchAccounts,
        }}>
            {children}
        </AccountContext.Provider>
    )
}