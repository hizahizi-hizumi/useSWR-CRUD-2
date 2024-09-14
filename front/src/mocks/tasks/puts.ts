import { http, HttpResponse } from "msw"

import type { Task } from "@/types/task"
import { getTasks, updateTask } from "."
import { ENDPOINT } from "./ENDPOINT"

type PutTasksParams = {
  id: string
}

type PutTasksRequestBody = {
  title: string
}

type PutTasksResponseBody = Task | null

export const put = http.put<PutTasksParams, PutTasksRequestBody, PutTasksResponseBody, string>(
  `${ENDPOINT}/:id`,
  async ({ params, request }) => {
    // return HttpResponse.error();
    const req = await request.json()

    const tasks = getTasks()

    const isTaskExist = tasks.some((task) => task.id === Number(params.id))

    if (!isTaskExist) {
      return HttpResponse.json(null, { status: 404 })
    }

    const taskTitles = tasks.map((task) => task.title)
    const isParamsInvalid = taskTitles.includes(req.title)

    if (isParamsInvalid) {
      return HttpResponse.json(null, { status: 400 })
    }

    const task = {
      id: Number(params.id),
      title: req.title,
    }

    updateTask(task)

    return HttpResponse.json(task, { status: 200 })
  },
)
