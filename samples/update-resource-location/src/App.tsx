import './App.css'
import DimeSchedulerClient, { Environment } from "dimescheduler";
import { ResourceGpsTracking } from "dimescheduler/models";
import { useForm } from "react-hook-form";
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, } from 'react';

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

  const { register, handleSubmit, setValue, getValues } = useForm<Inputs>()

  useEffect(() => {
    if (map.current)
      return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-4.312529, 36.715181],
      zoom: 6
    })

    map.current!.on('click', ({ lngLat }) => {
      setValue("latitude", lngLat.lat);
      setValue("longitude", lngLat.lng);

      const { resourceNo } = getValues();
      resourceNo && lngLat.lat && lngLat.lng && updateLocation(resourceNo, lngLat.lat, lngLat.lng);
    });
  });

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
        <div className="flex justify-center items-center">
          <img src="https://cdn.dimescheduler.com/dime-scheduler/v2/logo.svg" className="logo" alt="Dime.Scheduler logo" />
        </div>

        <div className="mb-2 mt-2 space-y-2">
          <p className="text-gray-500">Enter a resource no, and select a location on the map to update the location of the resource in Dime.Scheduler.</p>
        </div>

        <div className="v-screen flex-col items-center justify-center">
          <div className="max-h-auto mx-auto max-w-5xl">
            <form className='mb-4 mt-4 flex justify-center'>
              <div className='columns-2'>

                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Resource No.</label>
                  <input {...register("resourceNo", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
              </div>
            </form>

            <div>
              <div ref={mapContainer} className="map-container" style={{ "height": "600px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
