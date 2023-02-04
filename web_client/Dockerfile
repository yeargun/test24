FROM node

WORKDIR /usr/src/app

# to get cached npm install
COPY package*.json ./
RUN npm install 

# COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
