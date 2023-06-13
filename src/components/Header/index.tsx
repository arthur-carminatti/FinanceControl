import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { NewTransactionModal } from "../Modal/NewTransactionModal";
import * as Dialog from '@radix-ui/react-dialog';
import { useContext } from "react";
import { AccountContext } from "../../contexts/AccountContext";

export function Header() {
    const { accountSelected } = useContext(AccountContext)

    return (
        <HeaderContainer>
            <HeaderContent>
                <a href="/"><h1><span>F</span>inance <span>C</span>ontrol</h1></a>

                <nav>
                    <a href="/">Painel Geral</a>
                    <a href="/transactions">Gerenciar Transações</a>
                    <a href="/manageaccounts">Gerenciar Contas</a>
                </nav>

                {accountSelected.length != 0
                    ? <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewTransactionButton>Nova Transação</NewTransactionButton>
                        </Dialog.Trigger>

                        <NewTransactionModal />
                    </Dialog.Root>
                    : ''
                }
            </HeaderContent>
        </HeaderContainer>
    )
}