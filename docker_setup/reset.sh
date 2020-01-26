#!/usr/bin/env bash

eval `docker-machine env manager1`

docker service rm users-service

for server in manager1 worker1 worker2
do
  eval `docker-machine env $server`
  
  docker rmi -f shishir/users-service
  
done
