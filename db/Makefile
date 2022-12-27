postgres:
	docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine

createdb:
	docker exec -it postgres15 createdb --username=root --owner=root stuf_db

dropdb:
	docker exec -it postgres15 dropdb stuf_db

migrateup:
	migrate -path migration -database "postgresql://root:secret@localhost:5432/stuf_db?sslmode=disable" -verbose up

migratedown:
	migrate -path migration -database "postgresql://root:secret@localhost:5432/stuf_db?sslmode=disable" -verbose down

.PHONY: createdb dropdb postgres migrateup migratedown
