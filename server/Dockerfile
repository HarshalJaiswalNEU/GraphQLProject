# Use the official Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port 3001 for the server
EXPOSE 3001

# Start the server
CMD ["npm", "start"]