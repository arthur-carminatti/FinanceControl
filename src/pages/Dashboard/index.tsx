import { useContext } from "react"
import { SummaryCard, SummaryContainer } from "./styles"
import { AccountContext } from "../../contexts/AccountContext"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { priceFormatter } from "../../utils/formatter"
import { TransactionsContainer } from "../Transactions/styles"
import { useSummary } from "../../hooks/useSummary"
import { ManageTransactions } from "../ManageTransactions"

export function Dashboard() {
    const { accountSelected } = useContext(AccountContext)
    const summary = useSummary()

    return (
        <>
            {accountSelected.length > 0 ?
                <TransactionsContainer>
                    <SummaryContainer>
                        <SummaryCard>
                            <header>
                                <span>Entradas</span>
                                <ArrowCircleUp size={32} color="#00b37e " />
                            </header>

                            <strong>{priceFormatter.format(summary.balance)}</strong>
                        </SummaryCard>
                    </SummaryContainer>
                </TransactionsContainer>
                : <>
                    <SummaryContainer>
                        <SummaryCard>
                            <header>
                                <span>Entradas</span>
                                <ArrowCircleUp size={32} color="#00b37e " />
                            </header>

                            <strong>{priceFormatter.format(summary.balance)}</strong>
                        </SummaryCard>
                    </SummaryContainer>
                    <ManageTransactions />
                </>
            }
        </>
    )
}