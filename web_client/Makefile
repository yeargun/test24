# webapp:
# 	docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine

build:
	docker build . -t web_app_stuf

sh_app:
	docker exec -it web_app_stuf sh


.PHONY: webapp build sh_app
