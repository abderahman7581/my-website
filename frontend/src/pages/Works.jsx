import { Helmet } from "react-helmet";

import WorksView from "../view/works/works.jsx";

export default function Works() {
    return (
        <>
            <Helmet>
                <title>اعمالي</title>
            </Helmet>
            <WorksView />
        </>
    );
}
