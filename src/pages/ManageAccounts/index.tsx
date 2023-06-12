import { FirstCollum, LastCollum, ManageAccountContainer, NewAccountButton } from "./styles";
import manageAccount from '../../assets/ManageAccountImage.png'
import * as Dialog from '@radix-ui/react-dialog';
import { NewAccountModal } from "../../components/Modal/NewAccountModal";
import { RemoveAccountModal } from "../../components/Modal/RemoveAccountModal";
import { MergeAccountModal } from "../../components/Modal/MergeAccount";

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

                    <NewAccountModal />
                </Dialog.Root>

                <Dialog.Root>

                    <Dialog.Trigger asChild>
                        <NewAccountButton>Remover Conta</NewAccountButton>
                    </Dialog.Trigger>

                    <RemoveAccountModal />
                </Dialog.Root>

                <Dialog.Root>

                    <Dialog.Trigger asChild>
                        <NewAccountButton>Mesclar Contas</NewAccountButton>
                    </Dialog.Trigger>

                    <MergeAccountModal />
                </Dialog.Root>
            </LastCollum>
        </ManageAccountContainer>
    )
}