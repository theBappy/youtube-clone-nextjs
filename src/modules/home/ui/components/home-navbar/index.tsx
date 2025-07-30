import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from 'next/link'
import Image from 'next/image'
import { SearchInput } from './search-input';
import { AuthButton } from '../../auth/ui/components/auth-button';
import { ModeToggle } from "../../views/theme-toggler";



export const HomeNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-zinc-900 text-black dark:text-white flex items-center px-2 pr-5 z-50 shadow">
      <div className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
            <Link prefetch   href="/" className="hidden md:block">
            <div className="p-4 flex items-center gap-1">
              <Image src="/logo.svg" alt="log" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">uTube</p>
            </div>
            </Link>
        </div>
        {/* search bar */}
        <div className="flex-1 flex justify-center max-w-[700px] mx-auto">
        <SearchInput />
        </div>
        <div className="flex-shrink-0 flex items-center gap-4">
          <ModeToggle />
          <AuthButton />
        </div>
      </div>
    </div>
  );
};
