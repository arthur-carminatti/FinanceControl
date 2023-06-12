import { TransactionsContainer } from "./styles";
import { useContext } from 'react';
import { AccountContext } from '../../contexts/AccountContext';
import { useForm } from "react-hook-form";

export function ManageTransactions() {
    const { account, deleteAccount } = useContext(AccountContext)
    const { handleSubmit } = useForm()

    async function handleDeleteAccount(selectedAccountId: any) {
        await deleteAccount(selectedAccountId)
    }

    return (
        <TransactionsContainer>
            <form onSubmit={handleSubmit(handleDeleteAccount)}>
                <div>
                    {account.map(acc => {
                        return (
                            <button
                                key={acc.id}
                                type="submit"
                                onClick={() => handleDeleteAccount(acc.id)}
                            >
                                {acc.bank}
                            </button>
                        )
                    })}
                </div>
            </form>
        </TransactionsContainer>
    )
}