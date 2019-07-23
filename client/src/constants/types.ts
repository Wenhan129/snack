export enum statusTypes {
  UNSTARTED = "Unstarted",
  IN_PROGRESS = "In Progress"
}

export enum actionTypes {
  CREATE_TASK = "CREATE_TASK",
  EDIT_TASK = "EDIT_TASK"
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: statusTypes;
  updatedAt?: number;
  createdAt: number;
}
