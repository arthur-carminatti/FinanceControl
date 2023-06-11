import { ReactNode, useState, createContext, useEffect, useCallback } from "react";
import { api } from "../lib/axios";

interface Account {
    id: number
    bank: string
    agency: number
    numberAccount: number
}

interface CreateAccountInput {
    bank: string
    agency: number
    numberAccount: number
}

interface TransactionContextType {
    account: Account[]
    createAccount: (data: CreateAccountInput) => Promise<void>
    deleteAccount: (id: number) => Promise<void>
}

interface AccountProviderProps {
    children: ReactNode
}

export const AccountContext = createContext({} as TransactionContextType)

export function AccountProvider({ children }: AccountProviderProps) {
    const [account, setAccount] = useState<Account[]>([])

    async function fetchAccounts(query?: string) {
        const response = await api.get('account', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        })

        setAccount(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchAccounts()
    }, [])

    async function createAccount(data: CreateAccountInput) {
        const { bank, agency, numberAccount } = data

        const responseGet = await api.get('account')
        const dataGet = responseGet.data
        setAccount(dataGet)

        const response = await api.post('account', {
            bank,
            agency,
            numberAccount
        })

        setAccount(state => [...state, response.data])
        console.log(account.map(item => {
            return item.bank
        }))
    }

    async function deleteAccount(id: number) {
        await api.delete(`account/${id}`)
        setAccount(account.filter(account => account.id !== id))
    }

    return (
        <AccountContext.Provider value={{
            account,
            createAccount,
            deleteAccount
        }}>
            {children}
        </AccountContext.Provider>
    )
}