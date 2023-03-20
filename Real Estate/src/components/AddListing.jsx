import React, {useEffect} from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { useImmerReducer } from 'use-immer';
import Button from './common/Button';

// React Leaflet
import { MapContainer, TileLayer, Marker, useMap, Polygon } from 'react-leaflet'

import { northCentral, northEast, northWest, southEast, southSouth, southWest } from '../utility/utilities';
//import State Boroughs
import Abia from './borough/Abia'
import Adamawa from './borough/Adamawa'
import AkwaIbom from './borough/AkwaIbom'
import Anambra from './borough/Anambra'
import Bauchi from './borough/Bauchi'
import Bayelsa from './borough/Bayelsa'
import Benue from './borough/Benue'
import Borno from './borough/Borno'
import CrossRiver from './borough/CrossRiver'
import Delta  from './borough/Delta'
import Ebonyi from './borough/Ebonyi'
import Edo from './borough/Edo'
import Ekiti from './borough/Ekiti'
import Enugu from './borough/Enugu'
import FederalCapitalTerritory from './borough/FederalCapitalTerritory'
import Gombe from './borough/Gombe'
import Imo from './borough/Imo'
import Jigawa from './borough/Jigawa'
import Kaduna from './borough/Kaduna'
import Kano from './borough/Kano'
import Katsina from './borough/Katsina'
import Kebbi from './borough/Kebbi'
import Kogi from './borough/Kogi'
import Kwara from './borough/Kwara'
import Lagos from './borough/Lagos'
import Nasarawa from './borough/Nasarawa'
import Niger from './borough/Niger'
import Ogun from './borough/Ogun'
import Ondo from './borough/Ondo'
import Osun from './borough/Osun'
import Oyo from './borough/Oyo'
import Plateau from './borough/Plateau'
import Rivers from './borough/Rivers'
import Sokoto from './borough/Sokoto'
import Taraba from './borough/Taraba'
import Yobe from './borough/Yobe'
import Zamfara from './borough/Zamfara'


const intialState = {
    titleValue: '',
    descriptionValue: '',
    areaValue: '',
    boroughValue: '',
    listingTypeValue: '',
    propertyStatusValue: '',
    priceValue: '',
    picture1Value: '',
    picture2Value: '',
    picture3Value: '',
    picture4Value: '',
    picture5Value: '',
    roomsValue: '',
    poolValue: '',
    furnishedValue: '',
    elevatorValue: '',
    cctvValue: '',
    parkingValue: '',
    wifiValue: '',
    mapInstance: null,
}

const reducerFunction = (draft, action) => {
    switch(action.type){
        case 'catchTitleValue':
            draft.titleValue = action.title
            break;
        case 'catchDescriptionValue':
            draft.descriptionValue = action.description
            break;
        case 'catchAreaValue':
            console.log(action.area)
            draft.areaValue = action.area
            break;
        case 'catchBoroughValue':
            draft.boroughValue = action.borough
            break;
        case 'catchListingTypeValue':
            draft.listingTypeValue = action.listingType
            break;
        case 'catchPropertyStatusValue':
            draft.propertyStatusValue = action.propertyStatus
            break;
        case 'catchPriceValue':
            draft.priceValue = action.price
            break;
        case 'catchPicture1Value':
            draft.picture1Value = action.picture1
            break;
        case 'catchPicture2Value':
            draft.picture2Value = action.picture2
            break;
        case 'catchPicture3Value':
            draft.picture3Value = action.picture3
            break;
        case 'catchPicture4Value':
            draft.picture4Value = action.picture4
            break;
        case 'catchPicture5Value':
            draft.picture5Value = action.picture5
            break;
        case 'catchRoomsValue':
            draft.roomsValue = action.rooms
            break;
        case 'catchFurnishedValue':
            draft.furnishedValue = action.furnished
            break;
        case 'catchPoolValue':
            draft.poolValue = action.pool
            break;
        case 'catchElevatorValue':
            draft.elevatorValue = action.elevator
            break;
        case 'catchCctvValue':
            draft.cctvValue = action.cctv
            break;
        case 'catchParkingValue':
            draft.parkingValue = action.parking
            break;
        case 'catchWifiValue':
            draft.wifiValue = action.wifi
            break;
        case 'getMap':
            draft.mapInstance = action.mapData
            break;
        default:
            ""
    }
}

const AddListing = () => {
    const [state, dispatch] = useImmerReducer(reducerFunction, intialState)

    const MyMapComponent = () => {
        const map = useMap()
        useEffect(()=>{
            dispatch({type: 'getMap', mapData: map})
        })
        return null
    }
    
    // UseEffect to change the map visualViewport, depending on choosen borough
    useEffect(()=>{
        if (state.boroughValue === "Abia") {
			state.mapInstance.setView([5.532003041, 7.486002487], 7);
		} else if (state.boroughValue === "Adamawa") {
			state.mapInstance.setView([10.2703408, 13.2700321], 7);
		} else if (state.boroughValue === "Akwa Ibom") {
			state.mapInstance.setView([5.007996056, 7.849998524], 7);
		}  else if (state.boroughValue === "Anambra") {
			state.mapInstance.setView([6.210433572, 7.06999711], 7);
		}  else if (state.boroughValue === "Bauchi") {
			state.mapInstance.setView([	11.68040977, 10.19001339], 7);
		}  else if (state.boroughValue === "Bayelsa") {
			state.mapInstance.setView([4.762978599524332, 6.028898], 7);
		}  else if (state.boroughValue === "Benue") {
			state.mapInstance.setView([7.190399596, 8.129984089], 7);
		}  else if (state.boroughValue === "Borno") {
			state.mapInstance.setView([10.62042279, 12.18999467], 7);
		}  else if (state.boroughValue === "Cross River") {
			state.mapInstance.setView([4.960406513, 8.330023558], 7);
		}   else if (state.boroughValue === "Delta") {
			state.mapInstance.setView([5.890427265, 5.680004434], 7);
		}  else if (state.boroughValue === "Ebonyi") {
			state.mapInstance.setView([6.199691799435065, 8.0348906], 7);
		}  else if (state.boroughValue === "Edo") {
			state.mapInstance.setView([6.607657499417959, 5.9722713], 7);
		}  else if (state.boroughValue === "Ekiti") {
			state.mapInstance.setView([7.736890999391845, 5.2738326], 7);
		}  else if (state.boroughValue === "Enugu") {
			state.mapInstance.setView([6.553609399419997, 7.4143061], 7);
		}  else if (state.boroughValue === "Federal Capital Territory") {
			state.mapInstance.setView([8.831122799397733, 7.172467300000001], 7);
		}  else if (state.boroughValue === "Gombe") {
			state.mapInstance.setView([10.383009999458512, 11.206567], 7);
		}  else if (state.boroughValue === "Imo") {
			state.mapInstance.setView([5.585945599467946, 7.0669651], 7);
		}  else if (state.boroughValue === "Jigawa") {
			state.mapInstance.setView([12.325236199610885, 9.510329599999999], 7);
		}  else if (state.boroughValue === "Kaduna") {
			state.mapInstance.setView([10.382531799458487, 7.853322600000001], 7);
		}  else if (state.boroughValue === "Kano") {
			state.mapInstance.setView([11.894838899570903, 8.5364136], 7);
		}  else if (state.boroughValue === "Katsina") {
			state.mapInstance.setView([12.563082499634245, 7.6207063], 7);
		}  else if (state.boroughValue === "Kebbi") {
			state.mapInstance.setView([11.416757399530335, 4.107454499999999], 7);
		}  else if (state.boroughValue === "Kogi") {
			state.mapInstance.setView([7.79496019939138, 6.686866899999999], 7);
		}  else if (state.boroughValue === "Kwara") {
			state.mapInstance.setView([8.836789099397848, 4.668848699999999], 7);
		}  else if (state.boroughValue === "Lagos") {
			state.mapInstance.setView([6.526903299421034, 3.5774005], 7);
		}  else if (state.boroughValue === "Nasarawa") {
			state.mapInstance.setView([8.438786799392046, 8.238284899999998], 7);
		}  else if (state.boroughValue === "Niger") {
			state.mapInstance.setView([9.932608299434758, 5.651108799999999], 7);
		}  else if (state.boroughValue === "Ogun") {
			state.mapInstance.setView([6.978858199405861, 3.4389293], 7);
		}  else if (state.boroughValue === "Ondo") {
			state.mapInstance.setView([7.0209685994047035, 5.0567477], 7);
		}  else if (state.boroughValue === "Osun") {
			state.mapInstance.setView([7.548404699393967, 4.497830700000001], 7);
		}  else if (state.boroughValue === "Oyo") {
			state.mapInstance.setView([8.215124899390593, 3.5642896999999993], 7);
		}  else if (state.boroughValue === "Plateau") {
			state.mapInstance.setView([9.058344599402849, 9.6826289], 7);
		}  else if (state.boroughValue === "Rivers") {
			state.mapInstance.setView([4.841602799518385, 6.8604088], 7);
		}  else if (state.boroughValue === "Sokoto") {
			state.mapInstance.setView([13.061119499685718, 5.3152203], 7);
		}  else if (state.boroughValue === "Taraba") {
			state.mapInstance.setView([8.0141333993904, 10.737633599999999], 7);
		}  else if (state.boroughValue === "Yobe") {
			state.mapInstance.setView([12.123324199591742, 11.506593699999998], 7);
		}   else if (state.boroughValue === "Zamfara") {
			state.mapInstance.setView([12.007899799581104, 6.4191432], 7);
		}
    },[state.boroughValue])

    const boroughDisplay = () => {
        if (state.boroughValue === "Abia") {
			return <Polygon positions={Abia}/>
		} else if (state.boroughValue === "Adamawa") {
			return <Polygon positions={Adamawa}/>
		} else if (state.boroughValue === "Akwa Ibom") {
			return <Polygon positions={AkwaIbom}/>
		}  else if (state.boroughValue === "Anambra") {
			return <Polygon positions={Anambra}/>
		}  else if (state.boroughValue === "Bauchi") {
			return <Polygon positions={Bauchi}/>
		}  else if (state.boroughValue === "Bayelsa") {
			return <Polygon positions={Bayelsa}/>
		}  else if (state.boroughValue === "Benue") {
			return <Polygon positions={Benue}/>
		}  else if (state.boroughValue === "Borno") {
			return <Polygon positions={Borno}/>
		}  else if (state.boroughValue === "Cross River") {
			return <Polygon positions={CrossRiver}/>
		}   else if (state.boroughValue === "Delta") {
			return <Polygon positions={Delta}/>
		}  else if (state.boroughValue === "Ebonyi") {
			return <Polygon positions={Ebonyi}/>
		}  else if (state.boroughValue === "Edo") {
			return <Polygon positions={Edo}/>
		}  else if (state.boroughValue === "Ekiti") {
			return <Polygon positions={Ekiti}/>
		}  else if (state.boroughValue === "Enugu") {
			return <Polygon positions={Enugu}/>
		}  else if (state.boroughValue === "Federal Capital Territory") {
			return <Polygon positions={FederalCapitalTerritory}/>
		}  else if (state.boroughValue === "Gombe") {
			return <Polygon positions={Gombe}/>
		}  else if (state.boroughValue === "Imo") {
			return <Polygon positions={Imo}/>
		}  else if (state.boroughValue === "Jigawa") {
			return <Polygon positions={Jigawa}/>
		}  else if (state.boroughValue === "Kaduna") {
			return <Polygon positions={Kaduna}/>
		}  else if (state.boroughValue === "Kano") {
			return <Polygon positions={Kano}/>
		}  else if (state.boroughValue === "Katsina") {
			return <Polygon positions={Katsina}/>
		}  else if (state.boroughValue === "Kebbi") {
			return <Polygon positions={Kebbi}/>
		}  else if (state.boroughValue === "Kogi") {
			return <Polygon positions={Kogi}/>
		}  else if (state.boroughValue === "Kwara") {
			return <Polygon positions={Kwara}/>
		}  else if (state.boroughValue === "Lagos") {
			return <Polygon positions={Lagos}/>
		}  else if (state.boroughValue === "Nasarawa") {
			return <Polygon positions={Nasarawa}/>
		}  else if (state.boroughValue === "Niger") {
			return <Polygon positions={Niger}/>
		}  else if (state.boroughValue === "Ogun") {
			return <Polygon positions={Ogun}/>
		}  else if (state.boroughValue === "Ondo") {
			return <Polygon positions={Ondo}/>
		}  else if (state.boroughValue === "Osun") {
			return <Polygon positions={Osun}/>
		}  else if (state.boroughValue === "Oyo") {
			return <Polygon positions={Oyo}/>
		}  else if (state.boroughValue === "Plateau") {
			return <Polygon positions={Plateau}/>
		}  else if (state.boroughValue === "Rivers") {
			return <Polygon positions={Rivers}/>
		}  else if (state.boroughValue === "Sokoto") {
			return <Polygon positions={Sokoto}/>
		}  else if (state.boroughValue === "Taraba") {
			return <Polygon positions={Taraba}/>
		}  else if (state.boroughValue === "Yobe") {
			return <Polygon positions={Yobe}/>
		}   else if (state.boroughValue === "Zamfara") {
			return <Polygon positions={Zamfara}/>
		}
    }


    return (
        <>
        <div className='bg-shade1'>
            <Header/>
            <section className=' flex items-center'>
                <div className='container__limiter flex items-center h-full my-10'>
                    <form className='bg-white rounded-md shadow-shadow1 grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-3 py-7 mini:py-16 px-10 w-full md:divide-x-2 md:divide-shade1 mini:gap-x-10' autoComplete='false'>
                        <div className='col-span-2'>
                            <h3 className="mb-5 text-lg font-medium text-gray-900">Property Details</h3>
                            <div className='grid md:grid-cols-2 gap-x-8 gap-y-7 md:gap-y-10 mini:gap-y-14'>
                                {/* Title */}
                                <div className="relative z-0">
                                    <input type="text" value={state.titleValue} id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>{dispatch({type: "catchTitleValue", title: e.target.value})}}/>
                                    <label htmlFor="title" name="title" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Title</label>
                                </div>
                                {/* Description */}
                                <div className="relative z-0">
                                    <input type="text" id="description" value={state.descriptionValue} name="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>{dispatch({type: "catchDescriptionValue", description: e.target.value})}}/>
                                    <label htmlFor="description" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 ">Description</label>
                                </div>                                
                                {/* Listing Type */}
                                <div className="relative z-0">
                                    <input type="text" value={state.listingTypeValue} id="listingType" name="listingType" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>{dispatch({type: "catchListingTypeValue", listingType: e.target.value})}}/>
                                    <label htmlFor="listingType" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Listing Type</label>
                                </div>
                                {/* PopertyStatus */}
                                <div className="relative z-0">
                                    <input type="text" value={state.propertyStatusValue} id="propertyStatus" name="propertyStatus" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>{dispatch({type: "catchPropertyStatusValue", propertyStatus: e.target.value})}}/>
                                    <label htmlFor="propertyStatus"  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Status</label>
                                </div>
                                {/* Price */}
                                <div className="relative z-0">
                                    <input type="text" value={state.priceValue} id="price" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:bg-transparent" placeholder=" " onChange={(e)=>{dispatch({type: "catchPriceValue", price: e.target.value})}}/>
                                    <label htmlFor="price"  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                                </div>
                                {/* Rooms */}
                                <div className="relative z-0">
                                    <input type="text" value={state.roomsValue} id="rooms" name="rooms" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>{dispatch({type: "catchRoomsValue", room: e.target.value})}}/>
                                    <label htmlFor="rooms"  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No of Rooms</label>
                                </div>
                                {/* Area */}
                                <div className="relative z-0">
                                    <select id="area" value={state.areaValue} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>{dispatch({type: "catchAreaValue", area: e.target.value})}}>
                                        <option value="">-- Select Area --</option>
                                        <option value="northEast">North East</option>
                                        <option value="northWest">North West</option>
                                        <option value="northCentral">North Central</option>
                                        <option value="southEast">South East</option>
                                        <option value="southSouth">South South</option>
                                        <option value="southWest">South West</option>
                                    </select>
                                    <label htmlFor="area" className="absolute text-sm text-gray-500 duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-6">Area</label>
                                </div>
                                {/* Borough */}
                                <div className="relative z-0">
                                    <select id="borough" value={state.boroughValue} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>{dispatch({type: "catchBoroughValue", borough: e.target.value})}}>
                                        <option value="">-- Select Area --</option>
                                        {state.areaValue == "northEast" &&
                                            northEast.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                        {state.areaValue == "northWest" &&
                                            northWest.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                        {state.areaValue == "northCentral" &&
                                            northCentral.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                        {state.areaValue == "southEast" &&
                                            southEast.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                        {state.areaValue == "southSouth" &&
                                            southSouth.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                        {state.areaValue == "southWest" &&
                                            southWest.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                    </select>
                                    <label htmlFor="borough" name="borough" className="absolute text-sm text-gray-500 duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-6">Borough</label>
                                </div>
                                {/* Picture 1 */}
                                <div className=''>                                
                                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Picture 1</label>
                                    <input name='picture1' className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50" id="file_input" type="file"/>  
                                    {/* onChange={(e)=>{dispatch({type: "catchPicture1Value", picture1: e.target.value})}} */}
                                </div>
                                {/* Picture 2 */}
                                <div className=''>                                
                                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Picture 2</label>
                                    <input name='picture2' className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50" id="file_input" type="file" />
                                    {/* onChange={(e)=>{dispatch({type: "catchPicture2Value", picture2: e.target.value})}} */}
                                </div>
                                {/* Picture 3 */}
                                <div className=''>                                
                                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Picture 3</label>
                                    <input name='picture3' className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50" id="file_input" type="file" />
                                    {/* onChange={(e)=>{dispatch({type: "catchPicture3Value", picture3: e.target.value})}} */}
                                </div>
                                {/* Picture 4 */}
                                <div className=''>                                
                                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Picture 4</label>
                                    <input name='picture4' className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50" id="file_input" type="file"/>
                                    {/* onChange={(e)=>{dispatch({type: "catchPicture4Value", picture4: e.target.value})}} */}
                                </div>
                                {/* Picture 5 */}
                                <div className=''>                                
                                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Picture 5</label>
                                    <input value={state.picture5Value} name='picture5' className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50" id="file_input" type="file" onChange={(e)=>{dispatch({type: "catchPicture5Value", picture5: e.target.value})}}/>
                                </div>
                            </div>
                            <div className='hidden mt-14 md:block'>
                                <Button shade="bordered" content="Add Property"/>
                            </div>
                        </div>

                        {/* Desktop left */}
                        <div className='mini:pl-8'>
                            <h3 className="mb-5 text-lg font-medium text-gray-900">Property features</h3>
                            <ul className="flex flex-col space-y-3">
                                <div className='flex space-x-3'>
                                    <li>
                                        <input type="checkbox" id="furnished" value="furnished" className="hidden peer" required=""/>
                                        <label htmlFor="furnished" className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                            <div className="block">
                                                <div className="w-full text-sm">Furnished</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="elevator" value="elevator" className="hidden peer" required=""/>
                                        <label htmlFor="elevator" className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                            <div className="block">
                                                <div className="w-full text-sm">Elevator</div>
                                            </div>
                                        </label>
                                    </li>
                                </div>
                                <div className='flex space-x-3'>
                                    <li>
                                        <input type="checkbox" id="cctv" value="cctv" className="hidden peer" required=""/>
                                        <label htmlFor="cctv" className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                            <div className="block">
                                                <div className="w-full text-sm">Cctv</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="parking" value="parking" className="hidden peer" required=""/>
                                        <label htmlFor="parking" className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                            <div className="block">
                                                <div className="w-full text-sm">Parking</div>
                                            </div>
                                        </label>
                                    </li>
                                </div>
                                <div className='flex space-x-3'>
                                    <li>
                                        <input type="checkbox" id="wifi" value="wifi" className="hidden peer" required=""/>
                                        <label htmlFor="wifi" className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                            <div className="block">
                                                <div className="w-full text-sm">Wifi</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="pool" value="pool" className="hidden peer" required=""/>
                                        <label htmlFor="pool" className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                            <div className="block">
                                                <div className="w-full text-sm">Pool</div>
                                            </div>
                                        </label>
                                    </li>
                                </div>
                            </ul>

                            {/* Map */}
                            <div className="hero shadow-inner border border-black mt-10" id='' style={{ height: '300px'}}>
                                <MapContainer center={[9.072264, 7.491302]} zoom={12} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <MyMapComponent/>
                                    {boroughDisplay()}                                    
                                </MapContainer>
                            </div>

                            <div className='flex justify-center mt-14 md:hidden'>
                                <Button shade="bordered" content="Add Property"/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
        </>
    )
}

export default AddListing