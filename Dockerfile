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

# Set environment variables
ENV NEXT_PUBLIC_API_URL=http://api.a1quest.com/api/v1
ENV NEXT_PUBLIC_SESSION_NAME="A1Quest User"
ENV NEXT_PUBLIC_SESSION_KEY=A1_QUE_US_KEY
ENV NEXT_PUBLIC_TOKEN_NAME=A1Quest
ENV NEXT_PUBLIC_TOKEN_KEY=A1_QUE_TOK_KEY
ENV NEXT_PUBLIC_PAYSTACK_KEY=pk_live_ccf463d9c67d5ea7cbadf3c1c407479aa402d7b4
ENV NEXT_PUBLIC_FLUTTERWAVE_KEY=FLWPUBK-94156be0be2bf141b55321c2e2f86cf0-X

# Build the Next.js application
RUN npm run build
RUN npm install -g serve
# Expose the port that the application will run on
EXPOSE 3001
# Start the Next.js application
CMD ["npx", "serve", "out", "-p", "3001"]
