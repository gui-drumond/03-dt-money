import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
 

export function NewTransactionModal(){
    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <CloseButton >
                    <X />
                </CloseButton>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <form action="">
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>
                    <TransactionType>
                        <TransactionButton variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionButton>
                        <TransactionButton variant="outcome"  value="outcome">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionButton>
                    </TransactionType>
                    <button type="submit">Salvar</button>
                </form>
            </Content>
          </Dialog.Portal>
    )
}