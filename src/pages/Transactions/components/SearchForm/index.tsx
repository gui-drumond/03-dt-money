import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../../../context/TransactionsContext";

const searchFormSchema  = z.object({
    query: z.string()
})

type SearchFormsInputs = z.infer<typeof searchFormSchema>;

export function SearchForm(){

    const { 
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SearchFormsInputs>({
        resolver: zodResolver(searchFormSchema)
    });
    const { fetchTransactions } = useContext(TransactionContext);

    async function handleSearchTransactions(data: SearchFormsInputs){
        await fetchTransactions(data.query)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text"
                placeholder="Busque por transações" 
                {...register('query')}
                />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/> Buscar
            </button>
        </SearchFormContainer>
    )
}