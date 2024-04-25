import './App.css'
import DimeSchedulerClient, { Environment } from "dimescheduler";
import { ResourceGpsTracking } from "dimescheduler/models";

import { useForm, SubmitHandler } from "react-hook-form";
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
type Inputs = {
  resourceNo: string
  latitude: number
  longitude: number
  apiKey: string
}

function App() {

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-4.312529);
  const [lat, setLat] = useState(36.715181);
  const [zoom, setZoom] = useState(9)
  const { register, handleSubmit, setValue, } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => updateLocation(data.resourceNo, data.latitude, data.longitude, data.apiKey)

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    })

    map.current!.on('click', ({ lngLat }) => {
      setValue("latitude", lngLat.lat);
      setValue("longitude", lngLat.lng);
    });
  });

  const populateLocations = (lat: any, lng: any) => {
    setValue("latitude", lat);
    setValue("longitude", lng);
    map?.current?.setCenter([lng, lat]);
  }

  const updateLocation = async (resourceNo: string, latitude: number, longitude: number) => {
    const location = new ResourceGpsTracking();
    location.resourceNo = resourceNo;
    location.latitude = latitude;
    location.longitude = longitude;

    const client = new DimeSchedulerClient(import.meta.env.VITE_DS_API_KEY, Environment.Test);
    await client.import(location);
  }

  return (
    <>
      <div className="bg-white">
        <a href="https://www.dimescheduler.com" target="_blank">
          <img src="https://cdn.dimescheduler.com/dime-scheduler/v2/logo.svg" className="logo" alt="Vite logo" />
        </a>
        <div className="v-screen flex-col items-center justify-center">
          <div className="max-h-auto mx-auto max-w-5xl">
            <div className="mb-2 space-y-2">

              <p className="text-gray-500">Sample locations:</p>
              <ul className="p-2 mb-12 flex flex-nowrap no-scrollbar justify-center">
                <li className='"w-auto mx-1 p-1 px-4 border-gray-200' onClick={() => populateLocations("36.715181", "-4.312529")}>📋 Málaga </li>
                <li className='"w-auto mx-1 p-1 px-4 border-gray-200 ' onClick={() => populateLocations("37.388006", "-5.982023")}>📋 Sevilla</li>
                <li className='"w-auto mx-1 p-1 px-4 border-gray-200' onClick={() => populateLocations("41.403640", "2.175615")}>📋 Barcelona</li>
                <li className='"w-auto mx-1 p-1 px-4 border-gray-200' onClick={() => populateLocations("39.470946", "-0.374211")}>📋 Valencia</li>
              </ul>
            </div>


            <div>
              <div ref={mapContainer} className="map-container" style={{ "height": "400px" }} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-14 flex justify-center'>
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Resource No.</label>
                <input {...register("resourceNo", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />

                <div className="columns-2">
                  <div className="pt-4 pb-4">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Longitude</label>
                    <input {...register("longitude", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                  </div>

                  <div className="pt-4 pb-4">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Latitude</label>
                    <input {...register("latitude", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                  </div>
                </div>

                <button className="w-50 ring-offset-background focus-visible:ring-ring flex h-10 w-full justify-center whitespace-nowrap rounded-md bg-purple px-4 py-2 text-sm font-medium text-white-500 transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">Set</button>

              </div>

            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
