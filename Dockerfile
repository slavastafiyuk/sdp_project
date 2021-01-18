FROM node:alpine
WORKDIR './MY-APP'
EXPOSE 3000

COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]

