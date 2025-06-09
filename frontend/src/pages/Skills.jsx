import { Helmet } from "react-helmet";

import AccountsView from "../view/skills";

export default function Accounts() {
    return (
        <>
            <Helmet>
                <title>مهارات</title>
            </Helmet>
            <AccountsView />
        </>
    )
}
