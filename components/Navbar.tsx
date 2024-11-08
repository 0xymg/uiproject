import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import logo from "../img/logo.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import {User, LogOut, Settings } from 'lucide-react'
import { ThemeSwitcher } from "./ThemeSwitcher";



const Navbar = () => {
    return (
        <div className=" bg-primary dark:bg-slate-700 flex justify-between py-2 px-5 h-[70px] items-center">

            <Link href='/'>
                <Image src={logo} alt="airbus logo" width={100} />
            </Link>

            <div className="flex items-center">
                <ThemeSwitcher></ThemeSwitcher>
                <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/19360452?v=4" alt="@ymg" />
                        <AvatarFallback className="text-black font-bold">YG</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-2">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/profile">
                            Profile
                        </Link>
                        <DropdownMenuShortcut> <User className="mr-2 h-4 w-4"/> </DropdownMenuShortcut>

                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/settings">
                            Settings
                        </Link>
                        <DropdownMenuShortcut> <Settings className="mr-2 h-4 w-4"/> </DropdownMenuShortcut>

                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/auth">
                            Log out
                        </Link>
                        <DropdownMenuShortcut> <LogOut className="mr-2 h-4 w-4"/> </DropdownMenuShortcut>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
            </div>


        </div>
    );
}

export default Navbar;