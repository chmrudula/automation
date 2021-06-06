VERSION=latest
IMAGE=automation
PORT=4444:4444

.PHONY: build run stop rm rmi

.DEFAULT_GOAL := all

build:
	@docker build -t ${IMAGE} -f Dockerfile .

run:
	@docker run -p ${PORT} -it ${IMAGE}:${VERSION}

all: build run