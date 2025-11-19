import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_NUMBER } from "@/consts/contacts";
import { auth } from "@/lib/auth";
import { Menu, PhoneIcon } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS: {
    title: string;
    url: string;
}[] = [];

const Navbar = async ({}) => {
    const session = await auth.api.getSession({ headers: await headers() });

    const logoIcon = (
        <Link href={"/"} className="">
            <Image
                src={logo}
                className="object-contain aspect-[2] dark:saturate-0 dark:invert-100"
                height={50}
                width={140}
                alt={"Logo Glify Cleaning"}
            />
        </Link>
    );
    return (
        <div className="sticky top-0 z-50 bg-background px-2 md:px-10">
            <div className="w-full lg:container mx-auto">
                {/* Desktop Menu */}
                <nav className="hidden justify-between items-center lg:flex py-4 px-10 rounded-3xl">
                    {logoIcon}
                    <div className="flex items-center">
                        <ul className="flex gap-10 font-medium">
                            {NAV_LINKS.map((link, i) => (
                                <li key={i} className="hover:text-primary transition-colors">
                                    <Link href={link.url}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button asChild size={"lg"} variant={"default"} className="px-8">
                            <Link href={"/#join"}>Get Early Access</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {logoIcon}

                        <div>
                            <Button asChild size={"lg"} variant={"default"} className="px-8">
                                <Link href={"/#join"}>Get Early Access</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
