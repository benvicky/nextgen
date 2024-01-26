# Stage 1: Build Angular App
FROM node:20.9.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

# Stage 2: Serve Angular App using http-server
FROM node:20.9.0-alpine
WORKDIR /app
RUN npm install -g http-server json-server
COPY --from=build /app/dist/nextgen /app/dist/nextgen
COPY db.json .
EXPOSE 4200 3000

# Use && to run multiple commands in a single CMD
CMD sh -c "json-server --watch db.json --port 3000 --host 0.0.0.0 & http-server /app/dist/nextgen -p 4200 -a 0.0.0.0" 