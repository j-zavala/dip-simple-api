# Use the official Node.js image as the base image
# FROM node:18
FROM --platform=linux/amd64 node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install || { cat /root/.npm/_logs/* ; exit 1; }
RUN apt-get install -y vim

# Copy the rest of the application code to working directory
COPY . .

# Build the Nest.js application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the Nest.js application
CMD ["npm", "run", "start:prod"]
