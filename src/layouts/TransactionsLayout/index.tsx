import { Outlet } from "react-router-dom";
import { HeaderTransactions } from "../../components/Header";

export function TransactionsLayout() {
    return (
        <>
            <HeaderTransactions />
            <Outlet />
        </>
    )
}