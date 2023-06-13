import { useContextSelector } from 'use-context-selector';
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Trash } from 'phosphor-react';
import { ManageTransactions } from '../ManageTransactions';
import { useContext } from 'react';
import { AccountContext } from '../../contexts/AccountContext';

export function Transactions() {

    const deleteTransaction = useContextSelector(TransactionsContext, (context) => {
        return (
            context.deleteTransaction
        )
    })

    const { accountSelected } = useContext(AccountContext)

    return (
        <div>
            {
                accountSelected.length != 0 ? <>
                    <Summary />

                    <TransactionsContainer>
                        <SearchForm />

                        <TransactionsTable>
                            <tbody>
                                {accountSelected.map(acc => {
                                    function removeTransaction() {
                                        deleteTransaction(acc.id)
                                    }
                                    return (
                                        <tr key={acc.id}>
                                            <td>{acc.type === 'outcome' ? 'Despesa' : 'Receita'}</td>
                                            <td>{acc.category}</td>
                                            <td width="30%">{acc.description}</td>
                                            <td>
                                                <PriceHighLight variant={acc.type}>
                                                    {acc.type === 'outcome' && '- '}
                                                    {priceFormatter.format(acc.price)}
                                                </PriceHighLight>
                                            </td>
                                            <td>{dateFormatter.format(new Date(acc.createdAt))}</td>
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