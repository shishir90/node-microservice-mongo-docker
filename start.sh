#!/usr/bin/env bash

function setup-swarm {
  # first we go to our docker folder
  cd docker_setup

  echo '···························'
  echo '·· setting up the swarm  >>>> ··'
  echo '···························'

  # we create and init the swarm cluster
  (bash < ./setup-swarm.sh)

  # we go back to the root project
  cd ..
}

function setup-mongo {

  echo '···························'
  echo '·· setting up the mongodb cluster  >>>> ··'
  echo '···························'
  # we go into the folder
  cd mongo-replica-with-docker

  # we create and init our mongodb replica set cluster
  (bash < create-replica-set.sh)

  # we go back to the root project
  cd ..
}

function setup-image {

    # go inside the docker folder again
    cd docker_setup

    echo '···························'
    echo '·· creating service image >>>>  ··'
    echo '···························'

    # we start all our microservices
    (bash < create-image.sh)

   cd ..
}

function setup-service {

    # go inside the docker folder again
    cd docker_setup

    echo '···························'
    echo '·· starting user service >>>>  ··'
    echo '···························'

    # we start all our microservices
    (bash < start-service.sh)

   cd ..
}

function status {
  eval `docker-machine env manager1`
  # we verify the docker swarm
  docker node ls

  # we verify our docker services
  docker service ls
}

function main {
  setup-swarm
  setup-mongo
  setup-image
  setup-service
  status
}

main
