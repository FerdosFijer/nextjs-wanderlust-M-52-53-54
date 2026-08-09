"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const {  data: session, isPending} = authClient.useSession() 
    const user = session?.user;
    // console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

  return (
  <div className="bg-white py-3">
    <nav className="flex items-center justify-between max-w-7xl mx-auto text-slate-600">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>

      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          height={150}
          width={150}
          alt="logo"
        />
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>

        
         { user ? <> <li><Avatar>
                        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar> 
                    </li>
                    <li><Button variant="danger" className=" rounded-none" onClick={handleSignOut}>Logout</Button></li>
         </>  : <>
          <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
        </>}
        
          
            
          
        
      </ul>
    </nav>
  </div>
  );
};

export default Navbar; 