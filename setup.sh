docker exec -it $(docker ps | grep frontend | awk '{ print $1 }') /bin/sh -c 'npm rebuild node-sass'
docker restart $(docker ps | grep serv1 | awk '{ print $1 }')
docker-compose up
