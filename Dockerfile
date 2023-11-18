# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN yarn run build
RUN npm install -g serve
# Expose the port that the application will run on
EXPOSE 3000
# Start the Next.js application
CMD ["npx", "serve", "out"]
