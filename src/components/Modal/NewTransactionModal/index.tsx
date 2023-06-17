import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButtom } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from 'react';
import { AccountContext } from '../../../contexts/AccountContext';

const newTransactionFormSchema = z.object({
    description: z.string().min(2, 'Minimo 2 caractéres').max(30, 'Máximo de 30 caractéres'),
    price: z.number(),
    category: z.string().min(2, 'Minimo 2 caractéres').max(15, 'Máximo de 15 caractéres'),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormIputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { editAccount, accountSelected, sumBalanceAccount } = useContext(AccountContext)

    const isButtonDisabled = accountSelected.length === 0

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset
    } = useForm<NewTransactionFormIputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormIputs) {
        const { description, price, category, type } = data

        await editAccount({
            description,
            price,
            category,
            type
        })

        await sumBalanceAccount({
            description,
            price,
            category,
            type,
        })

        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>
                    {
                        accountSelected.length != 0
                            ? `Nova Transação: ${accountSelected[0].bank}`
                            : 'Nova Transação'
                    }
                </Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder='Descrição'
                        required
                        {...register('description')}
                    />
                    {errors.description && <span>{errors.description.message}</span>}
                    <input
                        type="number"
                        placeholder='Preço'
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder='Categoria'
                        required
                        {...register('category')}
                    />
                    {errors.category && <span>{errors.category.message}</span>}

                    <Controller
                        control={control}
                        name='type'
                        render={({ field }) => {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButtom variant='income' value='income'>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButtom>

                                    <TransactionTypeButtom variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButtom>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type='submit' disabled={isSubmitting || isButtonDisabled}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}