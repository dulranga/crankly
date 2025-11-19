import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WaitlistSuccessBanner from "@/components/WaitlistSuccessBanner";
import { TailwindIndicator } from "@/components/tailwindIndicator";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Navbar />
            <WaitlistSuccessBanner />
            {children}
            <Footer />
            <TailwindIndicator />
        </div>
    );
}
