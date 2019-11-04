
Demo Link: http://api.apphelpify.com:9091

- email: bob@test.com
- password: changeme

## :ledger: A Simple Inventory Management Admin UI

### What does this do ?

It gives you simple bolerpate Admin UI to manage inventory, ui, and dashboard.

### Vue Integrations
  - :heavy_check_mark: Vue.js
  - :heavy_check_mark: Vuex
  - :heavy_check_mark: Vue Router
  - :heavy_check_mark: JWT Authentication for protected routes
  - :heavy_check_mark: Element UI Library
  - :construction: Unit Tests
  - :construction: Cypress E2E tests

Note: [Get the backend code here.](https://github.com/manju4ever/inventory-service)

### Development Usage
1. Clone the repository and install all the dependencies

    `$ npm i`

2. Run (runs in watch mode)

    `$ npm run serve`


### Production Usage
1. Clone the repository and install all the dependencies

    `$ npm i`
    
 2. Run 
 
    `$ npm run deploy`
  
 ### Project Structure
 
```bash
src
├── App.vue
├── api
│   ├── account.js
│   ├── index.js
│   └── inventory.js
├── assets
│   └── logo.png
├── components
│   ├── InventoryGrid.vue
│   ├── LoginForm.vue
│   ├── RegisterForm.vue
│   └── SideNav.vue
├── main.js
├── router
│   └── index.js
├── store
│   ├── index.js
│   └── modules
│       ├── account.js
│       └── inventory.js
├── styles
│   └── global.scss
├── utils
│   ├── LocalStorage.js
│   └── index.js
└── views
    ├── Dashboard.vue
    ├── Home.vue
    ├── Inventory.vue
    ├── Login.vue
    ├── NotFound.vue
    ├── Orders.vue
    ├── Register.vue
    └── Settings.vue
```
