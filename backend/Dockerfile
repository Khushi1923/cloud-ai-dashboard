# Use Node.js as base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build TypeScript
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["node", "dist/server.js"]
