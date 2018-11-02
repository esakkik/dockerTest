FROM 	node:8-alpine

WORKDIR /appDir

COPY 	package.json /appDir

RUN 	npm install

COPY 	src/ /appDir/src

EXPOSE	3000

CMD [ "npm", "start" ]