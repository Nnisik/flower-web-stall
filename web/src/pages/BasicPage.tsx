import Header from "../layouts/Header.tsx";
import Footer from "../layouts/Footer.tsx";
import {FC} from "react";
import {IBasicPageProps} from "../types/IBasicPageProps.ts";

const BasicPage:FC<IBasicPageProps> = ({children}) => {
    return  (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
}

export default BasicPage;
