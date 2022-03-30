This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/aframson/MusalaSoft.git

cd Musala Soft

npm install 
or
yarn
```
run the development server after installation is successfull:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/api/...`. The page auto-updates as you edit the file.

# Description
REST service (JSON/HTTP) for storing information about gateways and their associated devices.<br>
- Programming language: JavaScript
- Framework: Nextjs (React)
- Database: MongoDb
- Automated build: Vercel

Open [The Documentation](https://documenter.getpostman.com/view/6960062/UVypyGgK) To test and read more on the API


# Endpoints:

## Create a gateway:
POST http://localhost:3000/api/gateway/v1/create<br>
body: {<br>
"serial": "string", //a unique serial number ex: AbC123<br>
"name": "string", //a human-readable name ex: Gateway A<br>
"ip": "string" //an IPv4 address ex: 10.0.0.1<br>
}

## Get all stored gateways:
GET http://localhost:3000/api/gateway/v1/fetch


## Get a specific gateway:
GET http://localhost:3000/api/gateway/v1/{{gatewayId}} // ex: http://localhost:8080/gateways/Syhhvc455


## Add a device to a gateway
POST http://localhost:3000/api/gateway/v1/add_device/{{GatewayId}}
body: {<br>
"vendor": "string", // ex: Vendor A<br>
"status": "online|offline" // ex: online<br>
}

## Remove a device from a gateway
DELETE http://localhost:8080/gateways/{serial}/device/{device_uid} // ex: http://localhost:8080/gateways/AbC123/device/1

