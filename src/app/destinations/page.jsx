import DestinationCard from "@/components/DestinationCard";

const DestinationsPage =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const destinations = await res.json()
    // console.log(destinations);
    
    return (
        <div >
            <h1>Total Destinations : {destinations.length}</h1>
            <div className="grid grid-cols-4 gap-8 ">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} ></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;