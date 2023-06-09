import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../contexts/TransactionsContext';

const newAccountFormSchema = z.object({
    bank: z.string().min(2, 'Deve conter no mínimo 2 caractéres!').max(15, 'Deve conter no máximo 15 caractéres!'),
    agency: z.number(),
    numberAccount: z.number()
})

type NewAccountFormIputs = z.infer<typeof newAccountFormSchema>

export function NewAccountModal() {
    const createAccount = useContextSelector(TransactionsContext, (context) => {
        return context.createAccount
    })

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset
    } = useForm<NewAccountFormIputs>({
        resolver: zodResolver(newAccountFormSchema)
    })

    async function handleCreateNewAccount(data: NewAccountFormIputs) {
        const { bank, agency, numberAccount } = data

        await createAccount({
            bank,
            agency,
            numberAccount
        })

        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Criar Nova Conta</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewAccount)}>
                    <input
                        type="text"
                        placeholder='Banco'
                        required
                        {...register('bank')}
                    />
                    {errors.bank && <span>{errors.bank.message}</span>}
                    <input
                        type="number"
                        placeholder='Agência'
                        required
                        {...register('agency', { valueAsNumber: true })}
                    />
                    {errors.agency && <span>{errors.agency.message}</span>}
                    <input
                        type="number"
                        placeholder='Número da conta'
                        required
                        {...register('numberAccount', { valueAsNumber: true })}
                    />
                    {errors.numberAccount && <span>{errors.numberAccount.message}</span>}

                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}