#!/usr/bin/env bash

docker rm -f users-service

docker rmi users-service

docker image prune

docker volume prune

docker build -t users-service .
