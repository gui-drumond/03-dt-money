import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

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

    async function handleSearchTransactions(data: SearchFormsInputs){
        console.log(data)
        await new Promise(resolve => setTimeout(resolve, 3000))
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