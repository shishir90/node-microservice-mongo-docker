#!/usr/bin/env bash

eval `docker-machine env manager1`

cd .. 

cd users-service

SERVICE=$(echo users-service | cut -d'/' -f 2)

docker rmi shishir/$SERVICE

sh ./create-image.sh

IMAGE_ID=$(docker images -q $SERVICE)

docker tag $IMAGE_ID shishir/$SERVICE:latest

docker push shishir/$SERVICE:latest

docker rmi $SERVICE

cd ..

