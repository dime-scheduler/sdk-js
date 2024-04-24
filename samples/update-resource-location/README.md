# Dime.Scheduler SDK for JavaScript sample: Update location

To run the project, run the following commands:

```cmd
bun install
bun dev
```

The terminal will prompt the URI where you can access the web app.

Most of the interesting code is in the `App.tsx` file. In the `updateLocation` method, the SDK is invoked.

```javascript
const updateLocation = async (resourceNo: string, latitude: number, longitude: number, apiKey: string) => {
    const location = new Models.ResourceGpsTracking();
    location.resourceNo = resourceNo;
    location.latitude = latitude;
    location.longitude = longitude;

    const client = new DimeSchedulerClient(apiKey);
    await client.import.processAsync(location);
  }
```