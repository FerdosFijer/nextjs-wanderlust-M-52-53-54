import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  console.log(token);
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
    headers:{
      authorization:`Bearer ${token}`
    }
  });
  const destination = await res.json();
//   console.log(destination);

  const { imageUrl, destinationName, country, price, duration , category,description } =destination;
  return (
    <div className="max-w-7xl mx-auto mb-10">

      <div className="flex items-center gap-3 justify-end mt-5 mb-3">
        <EditModal destination={destination} />
        <DeleteAlert destination={destination}/>
      </div>

      <Image
        className="w-full h-100 object-cover"
        alt={destinationName}
        src={imageUrl}
        height={500}
        width={800}
      />
      <div className="flex justify-between ">
        <div>
        <div className="flex items-center gap-2 mt-5 text-xl">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className=" font-semibold mt-5 ">
          <h2>Name: {destinationName}</h2>
        </div>
        <div className="flex gap-2 items-center">
          <FaRegCalendar />
          Total Days: {duration}
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-6 ">Overview: {category}</h2>
          <p className="mb-6"> {description}</p>
        </div>
      </div>
      <BookingCard destination={destination}/>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
