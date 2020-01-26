#!/usr/bin/env bash

docker service create --replicas 1 --name users-service -l=apiRoute='/users' -p 3000:3000 shishir/users-service