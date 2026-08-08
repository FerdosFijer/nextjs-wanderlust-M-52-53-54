import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({destination}) => {
    const {_id, imageUrl, destinationName, country, category, price, duration} =destination;
    return (
        <div className='card rounded-xl mt-10 text-gray-500'>
            <Image className='w-full h-70' alt={destinationName} src={imageUrl} height={400} width={400}/>
            <div>
                <div className='flex items-center gap-2'>
                    <LuMapPin/> <span>{country}</span>
                </div>
                <div className='flex justify-between items-center gap-2 font-semibold'>
                    <h2>{destinationName}</h2>
                    <h3>{price}</h3>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaRegCalendar/>
                    {duration}
                </div>
            </div>
            <Link href={`/destinations/${_id}`}> <button className='flex items-center text-blue-400'>  <h2> BOOK NOW </h2> <BsArrowUpRight /></button></Link>
        </div>
    );
};

export default DestinationCard;