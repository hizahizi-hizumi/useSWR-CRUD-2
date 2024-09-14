import { http, HttpResponse } from "msw"

import type { Task } from "@/types/task"
import { getTasks } from "./"
import { ENDPOINT } from "./ENDPOINT"

type GetTasksParams = never
type GetTasksRequestBody = never

type GetTasksResponseBody = Task[]

export const get = http.get<GetTasksParams, GetTasksRequestBody, GetTasksResponseBody, string>(ENDPOINT, () => {
  return HttpResponse.json(getTasks())
})
