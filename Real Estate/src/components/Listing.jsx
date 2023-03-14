import React, {useState} from 'react'

// React Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import myListings from '../utility/Dummydata'
import ListingCard from './common/ListingCard'

export const Listing = () => {
  const [latitude, setLatitude] = useState(51.505)
  const [longitude, setLongitude] = useState(-0.09)
  

  const houseIcon = new Icon({
    iconUrl: '/src/assets/images/mapicons/house.png',
    iconSize: [35, 35]
  })

  const appartmentIcon = new Icon({
    iconUrl: '/src/assets/images/mapicons/apartment.png',
    iconSize: [40, 40]
  })

  const officeIcon = new Icon({
    iconUrl: '/src/assets/images/mapicons/office.png',
    iconSize: [40, 40]
  })

  const getListingType = (listing_type) => {
    if (listing_type === "Apartment"){
        return appartmentIcon
    }else if (listing_type === "House"){
      return houseIcon
    }else if (listing_type === "Office"){
        return officeIcon
    }
  }

  return (
    <section className='bg-white max-h-max overflow-hidden'>
      <div className='container__limiter grid grid-cols-12 grid-rows-[100vh] gap-x-2'>
        <div className='col-span-3 overflow-y-scroll property__scroll pr-6 my-7'>
          { myListings.map(listing => {
            return(
              <ListingCard
                title={listing.title}
                price={listing.price}
                listing_type={listing.listing_type}
                room={listing.rooms}
                property_status={listing.property_status}
                picture={listing.picture1}
                rental_frequency={listing.rental_frequency}
                parking={listing.parking}
              />
            )
          })}
        </div>
        <div className='col-span-9 overflow-y-scroll p-7 shadow-2xl map-scroll rounded-lg'>
          <div className="hero shadow-inner" id='' style={{ height: '100%'}}>
            <MapContainer center={[latitude, longitude]} zoom={16} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {myListings.map(listing => {
                return (
                  // Each marker on the map 
                  <Marker icon={getListingType(listing.listing_type)} position={[listing.location.coordinates[0], listing.location.coordinates[1]]} key={listing.id}>
                    <Popup>
                    <div className='font-didact'>
                      <p className='font-semibold'>{listing.title}</p>
                      <img src={listing.picture1} alt='propert-image' className='w-full h-auto'/>
                      <p className=''></p>
                      <button className='w-full px-3 py-2 bg-sky-400 rounded-sm hover:bg-sky-500 font-semibold'>Link</button>
                    </div>
                    </Popup>
                  </Marker>
                )
              })}    
            </MapContainer>
          </div>
        </div>                
      </div>
    </section>
  )
}
