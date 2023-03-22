# The first thing we need to do is define from what image we want to build from. Here we will use the latest LTS (long term support) version 16 of node available from the Docker Hub:
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# This image comes with Node.js and NPM already installed so the next thing we need to do is to install your app dependencies using the npm binary
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]