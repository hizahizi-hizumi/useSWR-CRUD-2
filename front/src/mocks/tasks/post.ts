import { http, HttpResponse } from "msw"

import type { Task } from "@/types/task"
import { addTask, getTasks } from "."
import { ENDPOINT } from "./ENDPOINT"

type PostTasksParams = never

type PostTasksRequestBody = {
  title: string
}

type PostTasksResponseBody = Task | null

export const post = http.post<PostTasksParams, PostTasksRequestBody, PostTasksResponseBody, string>(
  ENDPOINT,
  async ({ request }) => {
    // return HttpResponse.error();
    const req = await request.json()

    const existedTasks = getTasks()

    const taskTitles = existedTasks.map((task) => task.title)
    const isParamsValid = taskTitles.includes(req.title)

    if (isParamsValid) {
      return HttpResponse.json(null, { status: 400 })
    }

    let sortedTasks: Task[] = []
    let id = 1

    if (existedTasks.length > 0) {
      sortedTasks = [...existedTasks].sort((a, b) => b.id - a.id)
      id = sortedTasks[0].id + 1
    }

    const task = {
      id: id,
      title: req.title,
    }

    addTask(task)

    return HttpResponse.json(task, { status: 201 })
  },
)
