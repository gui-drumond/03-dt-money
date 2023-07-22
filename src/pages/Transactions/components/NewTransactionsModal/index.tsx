import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
 
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
    description: z.string(), 
    price: z.number(), 
    category: z.string(), 
    type: z.enum(['outcome', 'income']), 
})


type NewtransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal(){

    const { 
        control,
        register,
        handleSubmit,
        formState: {
             isSubmitting
            }
        } = useForm<NewtransactionsFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    });

    async function handleNewTransaction(data: NewtransactionsFormInputs) {
        console.log('aaaa',data)
        await new Promise(resolver => setTimeout(resolver, 3000))
    }
    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <CloseButton >
                    <X />
                </CloseButton>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <form onSubmit={handleSubmit(handleNewTransaction)}>
                    <input
                         type="text"
                         placeholder="Descrição"
                         required 
                        {...register('description')}
                     />
                    <input
                         type="number"
                         placeholder="Preço"
                         required 
                        {...register('price', { valueAsNumber: true})}
                     />
                    <input
                         type="text"
                         placeholder="Categoria"
                         required 
                        {...register('category')}
                     />
                    <Controller 
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionButton>
                                    <TransactionButton variant="outcome"  value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionButton>
                                </TransactionType>
                            )
                          }}
                        />
                    
                    <button type="submit" disabled={isSubmitting} >Cadastrar</button>
                </form>
            </Content>
          </Dialog.Portal>
    )
}