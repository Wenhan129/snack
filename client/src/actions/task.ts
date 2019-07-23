import { ITask } from "../constants/types";
import { createAction } from "typesafe-actions";
import uuid from "uuid/v1";
import { statusTypes } from "../constants/types";

export const createTask = createAction("CREATE_TASK", action => {
  return (title: string, description: string) =>
    action({
      id: uuid(),
      title,
      description,
      status: statusTypes.UNSTARTED,
      createdAt: Date.now()
    });
});

export const editTask = createAction("EDIT_TASK", action => {
  return (id: string, updatedAt: Date) => action({ id, updatedAt });
});
