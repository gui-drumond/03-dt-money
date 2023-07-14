import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../context/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";



export function Transactions(){
   
    const { transactions } = useContext(TransactionContext);
    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        { transactions && transactions.map( transaction => <tr key={transaction.id}>
                            <td width='50%'>{transaction.description}</td>
                            <td> <PriceHighLight variant={transaction.type}>
                                {transaction.type === 'outcome' && '- '}
                                {priceFormatter.format(transaction.price)}
                                </PriceHighLight>
                            </td>
                            <td>{transaction.type === 'income' ? 'Entrada': 'Saída' }</td>
                            <td>{transaction.createdAt}</td>
                        </tr>)}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}