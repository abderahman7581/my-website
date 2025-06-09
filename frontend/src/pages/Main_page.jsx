import { Helmet } from "react-helmet";

import MainView from "../view/main/main.jsx";

export default function Main_page() {
    return (
        <>
            <Helmet>
                <title>الصفحة الرئيسة</title>
            </Helmet>
            <MainView />
        </>
    )
}
