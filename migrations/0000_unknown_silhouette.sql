CREATE TABLE "grades" (
	"id" serial PRIMARY KEY NOT NULL,
	"grade" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL,
	"grade" varchar(10) NOT NULL,
	"address" varchar(50),
	"contact" varchar(11)
);
