import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../../pages/Transactions/components/NewTransactionsModal";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo DT Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova Transação</NewTransactionsButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
