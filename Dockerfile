# Use an official Node.js runtime as the base image
FROM node:21-alpine3.18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build
RUN npm install -g serve
# Expose the port that the application will run on
ENV NEXT_PUBLIC_API_URL=https://a1quest-api-production.up.railway.app/api/v1
ENV NEXT_PUBLIC_SESSION_NAME=A1Quest_User
ENV NEXT_PUBLIC_SESSION_KEY=A1_QUE_US_KEY
ENV NEXT_PUBLIC_TOKEN_NAME=A1Quest
ENV NEXT_PUBLIC_TOKEN_KEY=A1_QUE_TOK_KEY
EXPOSE 3001
# Start the Next.js application
CMD ["npx", "serve", "out", "-p", "3001"]
