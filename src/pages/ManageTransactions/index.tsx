import { TransactionsContainer } from "./styles";
import { useContext, useState } from 'react';
import { AccountContext } from '../../contexts/AccountContext';
import { useForm } from "react-hook-form";

export function ManageTransactions() {
    const { account } = useContext(AccountContext)
    const [selectedAccountId, setSelectedAccountId] = useState<number | null>(null);

    const { register } = useForm()

    return (
        <TransactionsContainer>
            <form>
                <div>
                    {account.map(acc => {
                        return (
                            <button>
                                <input
                                    type="submit"
                                    required
                                    {...register('bank')}
                                    onChange={(e) => setSelectedAccountId(Number(e.target.value))}
                                />
                                {acc.bank}
                            </button>
                        )
                    })}
                </div>
            </form>
        </TransactionsContainer>
    )
}