import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Trash } from 'phosphor-react';
import { ManageTransactions } from '../ManageTransactions';
import { useContext } from 'react';
import { AccountContext } from '../../contexts/AccountContext';
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transactions() {
    const { accountSelected } = useContext(AccountContext)
    const { transactions, deleteTransaction } = useContext(TransactionsContext)

    return (
        <div>
            {
                accountSelected.length != 0 ? <>
                    <Summary />

                    <TransactionsContainer>
                        <SearchForm />

                        <TransactionsTable>
                            <tbody>
                                {transactions.map(transaction => {
                                    function removeTransaction() {
                                        deleteTransaction(transaction.id)
                                    }
                                    return (
                                        <tr key={transaction.id}>
                                            <td>{transaction.type === 'outcome' ? 'Despesa' : 'Receita'}</td>
                                            <td>{transaction.category}</td>
                                            <td width="30%">{transaction.description}</td>
                                            <td>
                                                <PriceHighLight variant={transaction.type}>
                                                    {transaction.type === 'outcome' && '- '}
                                                    {priceFormatter.format(transaction.price)}
                                                </PriceHighLight>
                                            </td>
                                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                            <td>
                                                <button onClick={removeTransaction}>
                                                    <Trash size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </TransactionsTable>
                    </TransactionsContainer>
                </> :
                    <ManageTransactions />
            }
        </div>
    )
}