#Values assignes to Environment variables
VERSION=latest
IMAGE=automation
PORT=4444:4444

help:
		@echo ""
	    @echo "Makefile commands:"
		@echo ""
	    @echo "build" - Builds Docker Image
	    @echo "run" - Runs Docker Container
	    @echo "all" - Creates Docker image and Runs Container
		@echo "rmi" - Removes all unused images
		@echo "rm" - Removes all failed docker containers
		@echo ""

.PHONY: build run rmi rm all help

.DEFAULT_GOAL := all

#Goal for docker build
build:
	@docker build -t ${IMAGE} -f Dockerfile .

#Goal for docker run
run:
	@docker run -p ${PORT} -it ${IMAGE}:${VERSION}

rmi:
	@docker system prune

rm:
	@docker container prune

all: build run