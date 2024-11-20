import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn, LogOut } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";

export default function Navbar() {
    const{ login, logout, authenticated, user} = usePrivy();

    const handleAuth = () =>{
        if(authenticated){
            logout();
        }else{
            login();
        }
    }

    return(
    <>
    <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/data-storage-2351.svg"
            alt="Web3 logo"
            width={40}
            height={40}
            priority
          />
          <span className="ml-2 text-xl font-bold">WEB3</span>
        </Link>
        <div className="ml-auto hidden md:flex items-center space-x-4">
        <Link
            href="/dashboard"
            className="text-foreground hover:text-primary"
          >
            Dashboard
          </Link>
          <Link href="/search" className="text-foreground hover:text-primary">
            Search
          </Link>
          <Link href="/docs" className="text-foreground hover:text-primary">
            Docs
          </Link>
          <Button onClick={handleAuth} variant="outline">
            {authenticated ? (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </>
            )}
          </Button>
        </div>
        </nav>
    </>
    );
}
