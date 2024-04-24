<div align="center">
<img src="https://cdn.dimescheduler.com/dime-scheduler/Dime.Scheduler-Black.svg" height="100px" />
</div>

<div align="center">
<img src="assets/app.webp" height="300px" />
</div>

<p align="center">
  <a href="https://docs.dimescheduler.com">Documentation</a> |
  <a href="https://docs.dimescheduler.com/history">Changelog</a> |
  <a href="https://docs.dimescheduler.com/roadmap">Roadmap</a>
</p>

<div align="center">
  <img src="https://github.com/dime-scheduler/sdk-js/actions/workflows/ci.yml/badge.svg?branch=master" />
  <img src="https://img.shields.io/npm/v/dimescheduler?style=flat-square" />
  <img src="https://img.shields.io/npm/l/dimescheduler" />
</div>


<h1 align="center"> Dime.Scheduler SDK for JavaScript</h1>

Supercharge your business by powering up Microsoft Dynamics 365 Business Central with a centralized resource and project planning solution 📅. Dime.Scheduler, with its powerful features and flexible design, has a proven track record in various industries and is trusted by dozens of resellers and thousands of people all over the world 🚀.

🧑‍🏫 Want to see the SDK in action? Check out an example [here](https://stackblitz.com/edit/ds-category?file=index.js).

## Installation

Use whichever package manager you prefer:

```bash
npm install dimescheduler
yarn add dimescheduler
```

## Example

🧑‍🏫 Want to see the SDK in action? Check out an example [here](https://stackblitz.com/edit/ds-category?file=index.js).

```javascript
import DimeSchedulerClient, { Import } from 'dimescheduler';

const category = new Import.Category();
category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
category.name = "My category";

const dimeSchedulerClient = new DimeSchedulerClient(apiKey);
var results = await dimeSchedulerClient.import
  .processAsync(category)
  .then((res) => console.log(res.data.Success? 'Success!' : "Oh oh, something didn't quite go well."))
  .catch((err) => console.log('Something went wrong: ' + err.toString()));
```

## Read more

Check out the [📚 docs »](https://docs.dimescheduler.com) for more info.

## Contributing

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

Pull requests are welcome. Please check out the contribution and code of conduct guidelines.

## License

![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square)

Copyright © Dime Software - All rights reserved.

Unauthorized copying of this file, via any medium is strictly prohibited Proprietary and confidential.

Written by Hendrik Bulens hendrik@dime-software.com, March 2022.

