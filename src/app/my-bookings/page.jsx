import BookingCancelAlert from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { IoTrashBin } from "react-icons/io5";

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
    headers: await headers() 
    })
    const {token} = await auth.api.getToken({
        headers: await headers()
      })
    const user = session?.user;
    const res = await fetch (`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    headers:{
      authorization:`Bearer ${token}`
    }
  });
    const bookings = await res.json();
    console.log(bookings);
    

    return (
        <div className='max-w-7xl mx-auto '>
            <h1 className="text-3xl font-bold mb-5"> my booking</h1>
            <div className="space-y-5">
                {
                    bookings.map(booking =>
                    <div key={booking._id} className="flex justify-between min-w-4xl items-center border-2 m-10 p-5 shadow-2xl rounded-2xl">
                        <div  className="flex gap-5">
                            <Image src={booking.imageUrl} alt={"booking.destinationName"} width={200} height={200}/> 
                            <div>
                                <p>Booking ID: {booking._id}</p>
                                <h1 className="font-bold text-2xl">Destination: {booking.destinationName}</h1>
                                {/* <p>{booking.departureDate}</p> */}
                                <p>Destination Date: {new Date(booking.departureDate).toLocaleDateString( "en-us", {year:"numeric", month: "long", day:"numeric"})}</p>
                                <p className="text-3xl font-bold text-cyan-500">Amount:$ {booking.price}</p>
                            </div>
                            
                        </div>
                        <div className="flex gap-2">
                            <BookingCancelAlert bookingId ={booking?._id}/>
                            <Button variant="outline" className="rounded-none  bg-cyan-500"> <BsEye /> View </Button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;