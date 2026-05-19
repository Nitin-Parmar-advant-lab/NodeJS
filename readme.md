- npm start is exception which run directly, any other configration in the package.json scripts, must have to write run like this
```
npm run dev, npm run build, npm run start-server
```

- for installation, we can determent that where we are gone use that package, in the local devlopment or on the deployment server by this

For local development:
```
npm install nodemon --save-dev
```

For deployment server:
```
npm install nodemon --save
```
but nodemon is for the local devlopment so it should not be insteed in the deployment serverf