# specify the node base image with your desired version node:<version>
FROM node:12-alpine
WORKDIR /app

# Copy over the whole folder content
COPY . ./

# Make a clean yarn install
RUN yarn install && \
    yarn cache clean

EXPOSE 3000
CMD yarn start