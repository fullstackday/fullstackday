FROM node:18
WORKDIR /opt/app
COPY ./package*.json .
RUN npm install
COPY ./backend/* .
RUN npm run build
CMD ["npm", "run" "start:prod"]