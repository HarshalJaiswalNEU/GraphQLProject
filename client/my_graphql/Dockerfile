# Use Node.js version 14 as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable to production
ENV NODE_ENV=production

# Expose port 3000 for the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]