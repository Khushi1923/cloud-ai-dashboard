# Use Node.js as base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately (to optimize Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code (including TypeScript files)
COPY . .

# Build TypeScript project 
RUN npm run build

# Expose the correct port
EXPOSE 5000

# Run the compiled JavaScript server
CMD ["node", "dist/server.js"]
