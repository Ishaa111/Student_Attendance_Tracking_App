// utils/schema.js
const { pgTable, serial, boolean, integer, varchar } = require("drizzle-orm/pg-core");

exports.GRADES = pgTable('grades', {
    id: serial('id').primaryKey(),
    grade: varchar('grade', { length: 10 }).notNull()
});

exports.STUDENTS = pgTable('students', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 20 }).notNull(),
    grade: varchar('grade', { length: 10 }).notNull(),
    address: varchar('address', { length: 50 }),
    contact: varchar('contact', { length: 11 }),
});

exports.ATTENDANCE = pgTable('attendance', {
    id: serial('id').primaryKey(),
    studentId: integer('studentId').notNull(), 
    present: boolean('present').default(false),
    day: integer('day').notNull(), // e.g., 22
    date: varchar('date', { length: 20 }).notNull(), // e.g., 05/2024
  });