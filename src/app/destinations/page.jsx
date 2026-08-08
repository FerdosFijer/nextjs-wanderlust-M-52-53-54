import DestinationCard from "@/components/DestinationCard";

const DestinationsPage =async () => {
    const res = await fetch('http://localhost:5000/destination')
    const destinations = await res.json()
    console.log(destinations);
    
    return (
        <div>
            <h1>All Destinations</h1>
            <div>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} ></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;