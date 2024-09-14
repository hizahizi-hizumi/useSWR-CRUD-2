import type { Task } from "@/types/task"
import { delete_ } from "./delete"
import { get } from "./get"
import { post } from "./post"
import { put } from "./puts"

const tasks: Task[] = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
]

export function getTasks(): Task[] {
  return tasks
}

export function addTask(task: Task): void {
  tasks.push(task)
}

export function updateTask(task: Task): void {
  const index = tasks.findIndex((t) => t.id === task.id)
  tasks[index] = task
}

export function deleteTask(id: number): Task {
  const index = tasks.findIndex((t) => t.id === id)
  const [task] = tasks.splice(index, 1)
  return task
}

export const handlers = [get, post, put, delete_]
