import './App.css'
import DimeSchedulerClient, { Environment } from "dimescheduler";
import { ResourceGpsTracking } from "dimescheduler/models";

import { useForm, SubmitHandler } from "react-hook-form";

function App() {

  type Inputs = {
    resourceNo: string
    latitude: number
    longitude: number
    apiKey: string
  }


  const updateLocation = async (resourceNo: string, latitude: number, longitude: number, apiKey: string) => {
    const location = new ResourceGpsTracking();
    location.resourceNo = resourceNo;
    location.latitude = latitude;
    location.longitude = longitude;

    const client = new DimeSchedulerClient(apiKey, Environment.Test);    
    await client.import.processAsync(location);
  }

  const { register, handleSubmit, setValue, } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => updateLocation(data.resourceNo, data.latitude, data.longitude, data.apiKey)

  const populateLocations = (lat: any, lng: any) => {
    setValue("latitude", lat);
    setValue("longitude", lng);
  }

  return (
    <>
      <div className="bg-white">
        <a href="https://www.dimescheduler.com" target="_blank">
          <img src="https://cdn.dimescheduler.com/dime-scheduler/v2/logo.svg" className="logo" alt="Vite logo" />
        </a>
        <div className="flex v-screen flex-col items-center justify-center">
          <div className="max-h-auto mx-auto max-w-xl">
            <div className="mb-8 space-y-3">
              <h1 className="text-4xl font-semibold">Update resource's actual location</h1>
              <p className="text-gray-500">Update the location of a resource. All we need is the resource no, the coordinates, and an API key to connect to Dime.Scheduler!</p>

              <p className="text-gray-500">Some sample locations:</p>
              <ul className="text-gray-500">
                <li onClick={() => populateLocations("36.715181", "-4.312529")}>📋 Málaga, Spain </li>
                <li onClick={() => populateLocations("37.388006", "-5.982023")}>📋 Sevilla, Spain</li>
                <li onClick={() => populateLocations("36.715181", "-4.312529")}>📋 Rome, Italy</li>
                <li onClick={() => populateLocations("36.715181", "-4.312529")}>📋 Napoli, Italy</li>
              </ul>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="pt-4 pb-4">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Resource No.</label>
                <input {...register("resourceNo", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>

              <div className="pt-4 pb-4">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Longitude</label>
                <input {...register("latitude", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>

              <div className="pt-4 pb-4">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Latitude</label>
                <input {...register("longitude", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>

              <div className="pt-4 pb-10">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">API Key</label>
                <input {...register("apiKey", { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>

              <button className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-purple px-4 py-2 text-sm font-medium text-white-500 transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">Set</button>

            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
