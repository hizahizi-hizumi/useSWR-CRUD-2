import { http, HttpResponse } from "msw"

import type { Task } from "@/types/task"
import { deleteTask, getTasks } from "."
import { ENDPOINT } from "./ENDPOINT"

type DeleteTasksParams = {
  id: string
}

type DeleteTasksRequestBody = never

type DeleteTasksResponseBody = Task | null

export const delete_ = http.delete<DeleteTasksParams, DeleteTasksRequestBody, DeleteTasksResponseBody, string>(
  `${ENDPOINT}/:id`,
  async ({ params }) => {
    // return HttpResponse.error();
    const tasks = getTasks()

    const isTaskExist = tasks.some((task) => task.id === Number(params.id))

    if (!isTaskExist) {
      return HttpResponse.json(null, { status: 404 })
    }

    const task = deleteTask(Number(params.id))

    return HttpResponse.json(task, { status: 200 })
  },
)
