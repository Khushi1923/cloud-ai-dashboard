# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to take advantage of Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build TypeScript code
RUN npm run build

# Set environment variable for port
ENV PORT=5000

# Expose the port
EXPOSE 5000

# Start the server using the compiled JavaScript file
CMD ["npm", "run", "start"]

