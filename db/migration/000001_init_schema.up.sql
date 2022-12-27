CREATE TABLE "users" (
  "id" VARCHAR PRIMARY KEY,
  "name" varchar,
  "surname" varchar,
  "gender" varchar,
  "pronouns" varchar,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "posts" (
  "id" int UNIQUE PRIMARY KEY,
  "likeCount" int,
  "comments" int NOT NULL,
  "likeAccounts" varchar
);

CREATE TABLE "comments" (
  "id" int NOT NULL UNIQUE PRIMARY KEY,
  "content" varchar
);

ALTER TABLE "posts" ADD FOREIGN KEY ("comments") REFERENCES "comments" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("likeAccounts") REFERENCES "users" ("id");
