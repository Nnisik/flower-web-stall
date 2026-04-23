import Header from "../layouts/Header.tsx";
import Footer from "../layouts/Footer.tsx";
import {FC, ReactNode} from "react";

interface BasicPageProps {
    children: ReactNode | ReactNode[];
}

const BasicPage:FC<BasicPageProps> = ({children}) => {
    return  (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
}

export default BasicPage;
