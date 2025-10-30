const user = "hello"

interface User {
  id: number
  value: number | string
  key: number
}

interface ApiResponse<T> {
  data?: T
  status: number
  message?: string | null
}

const response: ApiResponse<User> = {
  data: {
    id: 120,
    value: "hello",
    key: 2012
  },
  status: 200,
}
