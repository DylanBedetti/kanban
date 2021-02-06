CREATE TABLE "boards" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "background_image" varchar,
  "user_owner_id" int,
  "created_at" timestamp,
  "edited_at" timestamp
);

CREATE TABLE "lists" (
  "id" SERIAL PRIMARY KEY,
  "order" int,
  "title" varchar NOT NULL,
  "user_owner_id" int,
  "created_at" timestamp,
  "edited_at" timestamp,
  "board_id" int
);

CREATE TABLE "cards" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" varchar,
  "due_date" timestamp,
  "user_owner_id" int,
  "created_at" timestamp,
  "edited_at" timestamp,
  "list_id" int
);

CREATE TABLE "comments" (
  "id" SERIAL PRIMARY KEY,
  "content" varchar NOT NULL,
  "user_owner_id" int,
  "created_at" timestamp,
  "edited_at" timestamp,
  "card_id" int
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "profile_photo" varchar,
  "created_at" timestamp,
  "edited_at" timestamp,
  "password" varchar NOT NULL
);

ALTER TABLE "boards" ADD FOREIGN KEY ("user_owner_id") REFERENCES "users" ("id");

ALTER TABLE "lists" ADD FOREIGN KEY ("user_owner_id") REFERENCES "users" ("id");

ALTER TABLE "lists" ADD FOREIGN KEY ("board_id") REFERENCES "boards" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("user_owner_id") REFERENCES "users" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("list_id") REFERENCES "lists" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_owner_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("card_id") REFERENCES "cards" ("id");
