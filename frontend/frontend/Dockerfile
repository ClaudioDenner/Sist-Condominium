FROM node:slim
WORKDIR /frontend
COPY . /frontend
EXPOSE 3000
RUN npm i
RUN npm run build
CMD [ "npm", "run","start" ]