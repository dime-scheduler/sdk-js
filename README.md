<div align="center">
<img src="https://cdn.dimescheduler.com/dime-scheduler/v2/logo.svg" height="100px" />
</div>

<br />

<div align="center">
<img src="https://cdn.dimescheduler.com/dime-scheduler/screenshots/ds-screen-8.png" height="300px" />
</div>

<p align="center">
  <a href="https://docs.dimescheduler.com">Documentation</a> |
  <a href="https://docs.dimescheduler.com/history">Changelog</a> |
  <a href="https://docs.dimescheduler.com/roadmap">Roadmap</a>
</p>
F
<div align="center">
  <img src="https://img.shields.io/npm/v/dimescheduler?style=flat-square" />
  <img src="https://img.shields.io/npm/l/dimescheduler?style=flat-square&color=brightgreen" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
</div>


<h1 align="center"> Dime.Scheduler SDK for JavaScript</h1>

Supercharge your business by powering up Microsoft Dynamics 365 Business Central with a centralized resource and project planning solution 📅. Dime.Scheduler, with its powerful features and flexible design, has a proven track record in constious industries and is trusted by dozens of resellers and thousands of people all over the world 🚀.

Check out the [📚 docs »](https://docs.dimescheduler.com) for more info.

## Installation

Use whichever package manager you prefer:

```bash
# with npm
npm install dimescheduler

# with yarn
yarn add dimescheduler

# with bun
bun i dimescheduler
```

## Example

The sample below shows how to insert or update a category, which is a visual indicator that is used to render the background colors of appointments on the planning board. All you need to do is:
- Import the Dime.Scheduler client class
- Import and instantiate the model classes
- Instantiate the client class with the API key, and optionally, the environment
- Invoke the import method to enter this object into Dime.Scheduler


```javascript
import DimeSchedulerClient from 'dimescheduler';
import { Category } from "dimescheduler/models";

const category = new Category();
category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
category.name = "My category";

const dimeSchedulerClient = new DimeSchedulerClient(apiKey);
const response = await dimeSchedulerClient.import(category);
```

## Contributing

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

Pull requests are welcome. Please check out the contribution and code of conduct guidelines.

## License

![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square)


