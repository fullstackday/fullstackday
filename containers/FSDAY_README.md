docker network create fullstackday
cd ../backend
* Change src/app.module.ts to use mongodb://mongo
npm run db:build
docker build -t fullstackday/backend -f Dockerfile.backend .
docker run --name mongo -p 27017:27017 -d --rm --network fullstackday fullstackday/mongodb
docker run --name backend -p 3000:3000 --rm --network fullstackday -d fullstackday/backend
curl localhost:3000/records
docker build -t fullstackday/client .
docker run -d --name client --rm -p 8080:80 fullstackday/client