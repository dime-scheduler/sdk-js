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

Using npm:
```bash
npm install dimescheduler
```

Using yarn:
```bash
yarn add dimescheduler
```

Using bun:
```bash
bun i dimescheduler
```

Using pnpm:
```bash
pnpm add dimescheduler
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

## Usage

### Accessing the library

Once the package is installed, you can import the library using import or require approach:

Import:
```javascript
import DimeSchedulerClient from 'dimescheduler';
```

Require:
```javascript
const dimescheduler = require('dimescheduler');
```

### API key

Create an [API key](https://docs.dimescheduler.com/administration/apikeys) in Dime.Scheduler and store it somewhere safely.

Once you have a key, you can instantiate the `DimeSchedulerClient` class:

```javascript
const client = new DimeSchedulerClient("My API KEY");
```

### Choose environment

By default, the production environment is used. To use the SDK for the sandbox, you can import the `Environment` enum:

```javascript
import DimeSchedulerClient, { Environment } from 'dimescheduler';
const client = new DimeSchedulerClient("My API KEY", Environment.Sandbox);
```

### Models

The models are available in the `dimescheduler/models` submodule:

Import:
```javascript
import { Category } from "dimescheduler/models";
const category = new Category();
```

Require:
```javascript
const models = require('dimescheduler/models');
const category = new models.Category();
```

For the complete list of supported models, check out the [API docs](https://docs.dimescheduler.com/develop/api).

### Using the API

For most operations, the `import` method in the `DimeSchedulerClient` will suffice. All models in the `dimescheduler/models` submodule are supported.

To **add or update** an entry, simply make a call like this:

```javascript
const category = new Category();
category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
category.name = "My category";

const response = await dimeSchedulerClient.import(category);
```

To **remove** an entry, specify the `append` argument, which is true by default:

```javascript
const category = new Category();
category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
category.name = "My category";

const response = await dimeSchedulerClient.import(category, false);
```

## Running tests

Create an `.env` in the root of the project and complete the following list:

```bash
API_KEY=
```