import { RadioContainer, RadioInput, RadioSquare, TransactionsContainer } from "./styles";
import { useContext, useState } from 'react';
import { AccountContext } from '../../contexts/AccountContext';
import { useForm } from "react-hook-form";

export function ManageTransactions() {
    const { account, compareAccount } = useContext(AccountContext)
    const [selectedAccountId, setSelectedAccountId] = useState<number | null>(null);

    const isButtonDisabled = account.length === 0 || selectedAccountId === null

    const {
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = useForm()

    function handleSelectAccount() {
        if (selectedAccountId !== null) {
            compareAccount(selectedAccountId)
        }
    }

    return (
        <TransactionsContainer>
            <form onSubmit={handleSubmit(handleSelectAccount)}>
                <div>
                    {account.map((acc) => {
                        return (
                            <label key={acc.id}>
                                <RadioContainer>
                                    <RadioInput
                                        type="radio"
                                        value={acc.id}
                                        {...control.register('bank')}
                                        onChange={(e) => setSelectedAccountId(Number(e.target.value))}
                                    />
                                    <RadioSquare checked={selectedAccountId === acc.id} />
                                </RadioContainer>
                                {acc.bank}
                            </label>
                        );
                    })}
                </div>

                <button type='submit' disabled={isSubmitting || isButtonDisabled}>
                    Selecionar conta
                </button>
            </form>
        </TransactionsContainer>
    )
}