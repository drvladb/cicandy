FROM node:latest as build

WORKDIR /app
COPY package.json index.js ./
RUN npm install

FROM node:alpine

COPY --from=build /app /
EXPOSE 3001
CMD ["npm", "start"]
