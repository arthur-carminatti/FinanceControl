import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <a href="/"><h1><span>F</span>inance <span>C</span>ontrol</h1></a>

                <nav>
                    <a href="/">Painel Geral</a>
                    <a href="/transactions">Gerenciar Transações</a>
                    <a href="">Gerenciar Contas</a>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}

export function HeaderTransactions() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <a href="/"><h1><span>F</span>inance <span>C</span>ontrol</h1></a>

                <nav>
                    <a href="/">Painel Geral</a>
                    <a href="/transactions">Gerenciar Transações</a>
                    <a href="">Gerenciar Contas</a>
                </nav>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}