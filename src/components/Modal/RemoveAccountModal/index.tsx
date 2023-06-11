import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AccountContext } from '../../../contexts/AccountContext';

export function RemoveAccountModal() {
    const { deleteAccount, account } = useContext(AccountContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm()

    async function handleDeleteAccount(id: number) {
        deleteAccount(id)
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
                                    />
                                    {acc.bank}
                                </label>
                            )
                        })}
                    </div>

                    <button type='submit' disabled={isSubmitting}>
                        Remover Conta
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}