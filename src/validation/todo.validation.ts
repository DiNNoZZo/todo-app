import { z } from "zod";
import { valDate } from "./funkcions.validation";

export const todoValidationFields = {
  description: 'Description',
  priority: 'Priority',
  category: 'Category',
  assignedTo: 'Assigned to',
  dueDate: 'Due date',
  note: 'Note',
}

export const todoSchema = z.object({
  description: z.string().min(2),
  priority: z.string(),
  category: z.string(),
  assignedTo: z.string().min(3),
  note: z.string().min(3),
  dueDate: z.any().superRefine((val, ctx) => valDate(val, ctx)),
  complete: z.boolean(),
})

export type TTodoSchema = z.infer<typeof todoSchema>;