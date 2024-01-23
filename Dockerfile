# Use an official Node.js runtime as a parent image
FROM node:20.9.0 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Angular dependencies
RUN npm install

# Copy the rest of the Angular application files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a smaller Node.js image for the final image
FROM node:20.9.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install JSON Server globally
RUN npm install -g json-server

# Copy the built Angular app from the previous stage
COPY --from=build /usr/src/app/dist /usr/src/app/dist

# Copy the JSON Server data from the root directory
COPY db.json /usr/src/app/db.json

# Expose port 80 for Angular app and port 3000 for JSON Server
EXPOSE 80
EXPOSE 3000

# Start JSON Server and Angular app
CMD ["json-server", "--watch", "db.json", "--port", "3000", "&", "npm", "start"]