import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AccountContext } from '../../../contexts/AccountContext';

export function RemoveAccountModal() {
    const { deleteAccount, account } = useContext(AccountContext)
    const [selectedAccountId, setSelectedAccountId] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm()

    const isButtonDisabled  = account.length === 0 || selectedAccountId === null

    async function handleDeleteAccount() {
        if (selectedAccountId !== null) {
            await deleteAccount(selectedAccountId);
        }
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Remover Conta</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleDeleteAccount)}>
                    <div>
                        {account.map(acc => {
                            return (
                                <label>
                                    <input
                                        type="radio"
                                        placeholder='Banco'
                                        required
                                        {...register('bank')}
                                        value={acc.id}
                                        onChange={(e) => setSelectedAccountId(Number(e.target.value))}
                                    />
                                    {acc.bank}
                                </label>
                            )
                        })}
                    </div>

                    <button type='submit' disabled={isSubmitting || isButtonDisabled}>
                        Remover Conta
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}