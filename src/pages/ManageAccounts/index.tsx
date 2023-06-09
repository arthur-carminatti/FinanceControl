import { FirstCollum, LastCollum, ManageAccountContainer, NewAccountButton } from "./styles";
import manageAccount from '../../assets/ManageAccountImage.png'

import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../../components/NewTransactionModal";

export function ManageAccounts() {
    return (
        <ManageAccountContainer>
            <FirstCollum>
                <h1>Olá, usuário!</h1>
                <img src={manageAccount} alt="" />
            </FirstCollum>

            <LastCollum>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewAccountButton>Cadastrar Conta</NewAccountButton>
                    </Dialog.Trigger>

                    <Dialog.Trigger asChild>
                        <NewAccountButton>Remover Conta</NewAccountButton>
                    </Dialog.Trigger>

                    <Dialog.Trigger asChild>
                        <NewAccountButton>Mesclar Contas</NewAccountButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </LastCollum>
        </ManageAccountContainer>
    )
}