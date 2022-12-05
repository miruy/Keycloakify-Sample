#!/bin/bash

docker rm keycloak-testing-container || true

cd /Users/kim-yurim/Desktop/workspace/keycloakifysample/build_keycloak

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_ADMIN=admin \
   -e KEYCLOAK_ADMIN_PASSWORD=admin \
   -e JAVA_OPTS=-Dkeycloak.profile=preview \
   -v /Users/kim-yurim/Desktop/workspace/keycloakifysample/build_keycloak/src/main/resources/theme/keycloakifysample:/opt/keycloak/themes/keycloakifysample:rw \
   -it quay.io/keycloak/keycloak:20.0.1 \
   start-dev
