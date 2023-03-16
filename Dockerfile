FROM node:16-apline
WORKDIR /job_portal
COPY package.json package-lock.json ./job_portal/
RUN npm install nodemon
COPY . ./job_portal
RUN npm install
ENV port=5000
EXPOSE 5000
CMD [ "npm","run dev" ]