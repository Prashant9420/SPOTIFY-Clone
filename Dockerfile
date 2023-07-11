FROM node:alpine
WORKDIR .
RUN npm install -g http-server
COPY ./ ./
CMD ["http-server","-p","3000"]
