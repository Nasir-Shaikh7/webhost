import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <>
        <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16"/>
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
        <div className="hidden md:flex items-center space-x-4">
            
        </div>
        </>
    );
}