import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
//   console.log(destination);

  const {
    imageUrl,
    destinationName,
    country,
    description,
    category,
    price,
    duration,
  } = destination;
  return (
    <div className="max-w-7xl mx-auto">

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
      <div>
        <div className="flex items-center gap-2 mt-5 text-xl">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className=" font-semibold mt-5 ">
          <h2>Name: {destinationName}</h2>
          <h3> Price: ${price}</h3>
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
    </div>
  );
};

export default DestinationDetailsPage;
