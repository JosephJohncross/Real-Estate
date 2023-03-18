import React, {useState, useEffect} from 'react';
import { getListings } from '../services/https-request';
import Header from './layout/Header';
import Footer from './layout/Footer';

// React Spinner 
import FadeLoader from "react-spinners/FadeLoader"; 
//Spinner styling
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


// React Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import ListingCard from './common/ListingCard'
import { Axios } from 'axios';

export const Listing = () => {
  const [latitude, setLatitude] = useState(51.505)
  const [longitude, setLongitude] = useState(-0.09)
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  

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

  useEffect(()=> {
    const controller = new AbortController();

    getListings(setListings, setLoading, controller)
    console.log(listings)

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
        <Header/>
        { loading ? <div className="border border-black absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center">
                        <div className="sweet-loading">
                                            <FadeLoader
                                            cssOverride={override}
                                            size={70}
                                            color={"#004002"}
                                            loading={loading}
                                            speedMultiplier={1.5}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                            />
                        </div> 
                    </div> :

                    <section className='bg-white max-h-max overflow-hidden'>
                      <div className='container__limiter grid grid-cols-12 grid-rows-[100vh] gap-x-2'>
                        <div className='col-span-3 overflow-y-scroll property__scroll pr-6 my-7'>
                          { listings.map(listing => {
                            return(
                              <ListingCard
                                key={listing.id}
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
              
                              {listings.map(listing => {
                                return (
                                  // Each marker on the map 
                                  <Marker icon={getListingType(listing.listing_type)} position={[listing.latitude, listing.longitude]} key={listing.id}>
                                    <Popup>
                                    <div className='font-didact w-44'>
                                      <p className='font-semibold'>{listing.title}</p>
                                      <img src={listing.picture1} alt='propert-image' className='w-full h-28'/>
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
        }
        <Footer/>
    </>
  )
}
