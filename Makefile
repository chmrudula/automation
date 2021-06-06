#Values assignes to Environment variables
VERSION=latest
IMAGE=automation
PORT=4444:4444

help:
		@echo ""
	    @echo "Makefile commands:"
		@echo ""
	    @echo "up" - Builds all Docker Images
	    @echo "run" - Runs all Docker Containers
	    @echo "all" - Creates all Docker images and Runs all Container
		@echo "rmi" - Removes all unused images
		@echo "rm" - Removes all failed docker containers
		@echo "clean" - cleans all docker images
		@echo "down" - stopping all docker containers
		@echo ""

.PHONY: up run rmi rm all clean help

.DEFAULT_GOAL := all

#Goal for docker build
up:
	@docker-compose up

#Goal for docker run
run:
	@npm test

#Goal for stopping all docker containers
down:
	@docker-compose down

#Goal for removing unused docker images
rmi:
	@docker system prune

#Goal for cleaning all images
clean:
	@docker image prune -a

#Goal for removing failed docker containers
rm:
	@docker container prune

#Goal for building an image and running the container
all: up