import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { useImmerReducer } from 'use-immer';
import Button from './common/Button';


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
        default:
            ""
    }
}

const innerLondonOptions = [
	{
		value: "",
		label: "",
	},
	{
		value: "Camden",
		label: "Camden",
	},
	{
		value: "Greenwich",
		label: "Greenwich",
	},
	{
		value: "Hackney",
		label: "Hackney",
	},
	{
		value: "Hammersmith and Fulham",
		label: "Hammersmith and Fulham",
	},
	{
		value: "Islington",
		label: "Islington",
	},
	{
		value: "Kensington and Chelsea",
		label: "Kensington and Chelsea",
	},
	{
		value: "Lambeth",
		label: "Lambeth",
	},
	{
		value: "Lewisham",
		label: "Lewisham",
	},
	{
		value: "Southwark",
		label: "Southwark",
	},
	{
		value: "Tower Hamlets",
		label: "Tower Hamlets",
	},
	{
		value: "Wandsworth",
		label: "Wandsworth",
	},
	{
		value: "Westminster",
		label: "Westminster",
	},
	{
		value: "City of London",
		label: "City of London",
	},
];

const outerLondonOptions = [
	{
		value: "",
		label: "",
	},
	{
		value: "Barking and Dangenham",
		label: "Barking and Dangenham",
	},
	{
		value: "Barnet",
		label: "Barnet",
	},
	{
		value: "Bexley",
		label: "Bexley",
	},
	{
		value: "Brent",
		label: "Brent",
	},
	{
		value: "Bromley",
		label: "Bromley",
	},
	{
		value: "Croydon",
		label: "Croydon",
	},
	{
		value: "Ealing",
		label: "Ealing",
	},
	{
		value: "Enfield",
		label: "Enfield",
	},
	{
		value: "Haringey",
		label: "Haringey",
	},
	{
		value: "Harrow",
		label: "Harrow",
	},
	{
		value: "Havering",
		label: "Havering",
	},
	{
		value: "Hillingdon",
		label: "Hillingdon",
	},
	{
		value: "Hounslow",
		label: "Hounslow",
	},
	{
		value: "Kingston upon Thames",
		label: "Kingston upon Thames",
	},
	{
		value: "Merton",
		label: "Merton",
	},
	{
		value: "Newham",
		label: "Newham",
	},
	{
		value: "Redbridge",
		label: "Redbridge",
	},
	{
		value: "Richmond upon Thames",
		label: "Richmond upon Thames",
	},
	{
		value: "Sutton",
		label: "Sutton",
	},
	{
		value: "Waltham Forest",
		label: "Waltham Forest",
	},
];

const AddListing = () => {
    const [state, dispatch] = useImmerReducer(reducerFunction, intialState)


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
                                {/* Area */}
                                <div className="relative z-0">
                                    <select id="area" value={state.areaValue} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>{dispatch({type: "catchAreaValue", area: e.target.value})}}>
                                        <option value="">-- Select Area --</option>
                                        <option value="Inner London">Inner London</option>
                                        <option value="Outer London">Outer London</option>
                                    </select>
                                    <label htmlFor="area" className="absolute text-sm text-gray-500 duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-6">Area</label>
                                </div>
                                {/* Borough */}
                                <div className="relative z-0">
                                    <select id="borough" value={state.boroughValue} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>{dispatch({type: "catchBoroughValue", borough: e.target.value})}}>
                                        <option value="">-- Select Area --</option>
                                        {state.areaValue == "Inner London" &&
                                            innerLondonOptions.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                        {state.areaValue == "Outer London" &&
                                            outerLondonOptions.map(borough => {
                                                return (<option key={Math.random()} value={borough.value}>{borough.value}</option>)
                                            })
                                        }
                                    </select>
                                    <label htmlFor="borough" name="borough" className="absolute text-sm text-gray-500 duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-6">Borough</label>
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