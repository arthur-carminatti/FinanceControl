import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useContext } from "react";
import { AccountContext } from "../../contexts/AccountContext";

export function Summary() {
    const { accountSelected } = useContext(AccountContext)

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e " />
                </header>

                <strong>{priceFormatter.format(accountSelected[0].balance)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68 " />
                </header>

                <strong>{priceFormatter.format(accountSelected[0].balance)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff " />
                </header>

                <strong>{priceFormatter.format(accountSelected[0].balance)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}