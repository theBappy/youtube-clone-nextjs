import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from 'next/link'
import Image from 'next/image'
import { AuthButton } from "@/modules/home/ui/auth/ui/components/auth-button";
import { StudioUploadModal } from "./studio-upload-modal";


export const StudioNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
            <Link href="/studio">
            <div className="p-4 flex items-center gap-1">
              <Image src="/logo.svg" alt="log" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">uStudio</p>
            </div>
            </Link>
        </div>
        {/* spacer */}
        <div className="flex-1" />

        <div className="flex-shrink-0 flex items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
