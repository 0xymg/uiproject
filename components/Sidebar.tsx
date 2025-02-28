import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import Link from "next/link";
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from 'lucide-react'

const Sidebar = () => {
    return (
        <Command className="bg-secondary w-[300px] rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <Link href='/'>Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper className="mr-2 h-4 w-4" />
                        <Link href='/posts'>Posts</Link></CommandItem>
                    <CommandItem>
                        <Folders className="mr-2 h-4 w-4" />
                        <Link href='#'>Categories</Link></CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link href='/posts'>Profile</Link>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem> 
                        <CreditCard className="mr-2 h-4 w-4" />
                        <Link href='/posts'>Billing</Link>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem> 
                        <Settings className="mr-2 h-4 w-4" />
                        <Link href='/posts'>Settings</Link>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>

    );
}

export default Sidebar;