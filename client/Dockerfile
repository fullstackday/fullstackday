FROM node:16
WORKDIR /opt/app
COPY package*.json .
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:1.17
WORKDIR /usr/share/nginx/html
COPY --from=0 /opt/app/dist/client/ .