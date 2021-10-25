# Start a PHP server with Apache
docker run -d -p 8080:80 -v $(pwd)/lamp_html:/var/www/html:z --rm --name fsday-php php:8-apache
curl localhost:8080
curl localhost:8080?name=Joel
## Edit the php page and reload
curl localhost:8080
docker stop fsday-php

# Start a MongoDB database server
docker run -d -p 27017:27017 --name fsday-mongodb mongo:5
## Connect to the database using Compass
## Stop the server
docker stop fsday-mongodb
## Connection is now lost because the datatabse is down
## Restart the server
docker restart fsday-mongodb
## Server is restarted and data is persisted
## Stop and remove associated data
docker stop fsday-mongodb
docker rm fsday-mongodb
## Restart server, all previous data is lost
### Using --rm will automatically clean up
### Mounting a volume will persist data, even after container removal
docker run -d -p 27017:27017 -v $(pwd)/data:/data/db:z --rm --name fsday-mongodb mongo:5

# Start a Node.js server
docker run -d -p 8080:5000 -v $(pwd)/node_src:/opt/app:z --rm --name fsday-simple-node node:14 node /opt/app/simple
curl localhost:8080
## Edit the source code and restart the server
docker restart fsday-simple-node
curl localhost:8080
## Stop and try a different version of Node.js
docker stop fsday-simple-node
docker run -d -p 8080:5000 -v $(pwd)/node_src:/opt/app:z --rm --name fsday-simple-node node:16 node /opt/app/simple
curl localhost:8080

# Start a full MERN app
## Initiate the network (only run this the first time)
docker network create fsday-mern
## Start MongoDB Server
docker run -d -p 27017:27017 --name fsday-mongodb --rm --network fsday-mern mongo:5
## Add data
docker exec fsday-mongodb mongosh localhost:27017/fullstackday --eval "db.fsdaydata.insertOne({\"name\":\"Joel\"}); db.fsdaydata.findOne();"
docker exec fsday-mongodb mongosh localhost:27017/fullstackday --eval "db.fsdaydata.insertOne({\"name\":\"Natacha\"}); db.fsdaydata.findOne();"
## Start Express server
docker run -d -p 8080:5000 -v $(pwd)/mern_stack/server:/opt/app:z --rm --network fsday-mern --name fsday-mern-server node:14 node /opt/app/
## Start the front end
docker run -d -p 3000:3000 -v $(pwd)/mern_stack/front:/opt/app:z --rm --network fsday-mern --name fsday-mern-front -w /opt/app node:14 npm start
## Stop everything and delete data
docker stop fsday-mern-server fsday-mern-front fsday-mongodb

# Build your own containers
## Build the MERN server container
docker build -t fullstackday/fs-day-server -f Dockerfile.back .
## Start the MongoDB server, then the FSDay server
docker run -d -p 27017:27017 --name fsday-mongodb --rm --network fsday-mern mongo:5
docker run -d --rm --name server -p 5000:5000 --network fsday-mern fullstackday/fsday-mern-server
## Test the server
curl localhost:5000/data

docker build -t fullstackday/client -f Dockerfile.back .
docker build -t fullstackday/backend -f Dockerfile.client .
docker build -t fullstackday/mongodb -f Dockerfile.mongodb .
docker run -d -p 27017:27017 --rm --name mongo fullstackday/mongodb
docker run -d -p 3000:3000 --rm --name backend fullstackday/backend
docker run -d -p 8080:80 --rm --name client fullstackday/client
