#!/usr/bin/env bash

eval `docker-machine env manager1`

cd ..

cd users-service

sh ./start-service.sh

cd ..

