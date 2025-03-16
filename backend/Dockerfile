FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the application
COPY . .

# Set the port dynamically from Cloud Run
ENV PORT=5000
EXPOSE 5000

# Run the application
CMD ["node", "server.js"]
