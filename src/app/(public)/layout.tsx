import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { TailwindIndicator } from "@/components/tailwindIndicator";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
            <TailwindIndicator />
        </div>
    );
}
