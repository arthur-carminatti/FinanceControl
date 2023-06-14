import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AccountContext } from "../../../../contexts/AccountContext";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const {fetchAccounts} = useContext(AccountContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchAccounts(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                buscar
            </button>
        </SearchFormContainer>
    )
}