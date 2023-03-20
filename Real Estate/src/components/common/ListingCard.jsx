import React from 'react'

const ListingCard = ({...props}) => {
  return (
    <div className='flex flex-col font-work group'>
        <div className='h-40'>
            <img src={props.picture} alt='property-image' className='w-full h-full rounded-lg'/>
        </div>
        <div className='px-4 -translate-y-10 group-hover:-translate-y-16 transition-transform duration-700'>
            <div className='h-32 rounded-md shadow-lg bg-white p-2 border-transparent border-2 transition-colors group-hover:shadow-[1px 1px #fff299]'>
                <div className='flex justify-between'>
                    <p className='text-sm'>For {props.property_status}</p>
                    <p className='text-sm'>{props.listing_type}</p>
                </div>
                <p className='font-semibold mt-3 mb-2'>$ {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{props.rental_frequency !== null ? `/${props.rental_frequency}` : ""}</p>
                <div className='flex divide-x'>
                    <div className='flex space-x-2 items-center pr-4'>
                        <p className='text-sm font-medium'>{props.room}</p>
                        <img src="https://img.icons8.com/metro/16/2832C2/room.png" className=''/>
                    </div>
                    <div className='flex space-x-2 items-center px-4'>
                        <p className='text-sm font-medium'>{props.parking ? "Yes" :  "No"}</p>
                        <img src="https://img.icons8.com/ios-glyphs/18/2832C2/outdoor-parking.png"/>
                    </div>
                </div>
                <div className='flex flex-col justify-between mt-2'>
                    <p className='font-bold text-sm'>{props.title}</p>
                    <p className=''></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListingCard