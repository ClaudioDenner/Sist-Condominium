FROM node:19-slim
WORKDIR /backend
COPY . /backend
EXPOSE 3000
RUN npm install
RUN npm run build
# RUN npm run migration:run
CMD [ "npm","run","start"]