import { TodoModel } from "../models/todo.model";

export const mockTodoList: TodoModel[] = [
  { id: 1, title: 'Conduct the webinar', status: 'todo', completed: false },
  { id: 2, title: 'Prepare the task', status: 'completed', completed: true },
  { id: 3, title: 'Feed the dog', status: 'inProgress', completed: false },
]
