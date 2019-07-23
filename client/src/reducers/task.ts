import { ITask, statusTypes } from "../constants/types";
import { ActionType, createReducer } from "typesafe-actions";

import * as actions from "../actions/task";
import uuid from "uuid/v1";

export type TaskAction = ActionType<typeof actions>;

const mockTasks: ITask[] = [
  {
    id: uuid(),
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: statusTypes.UNSTARTED,
    createdAt: Date.now()
  },
  {
    id: uuid(),
    title: "Peace on Earth",
    description: "No big deal.",
    status: statusTypes.IN_PROGRESS,
    createdAt: Date.now()
  }
];

const taskReducer = createReducer(mockTasks)
  .handleAction(actions.createTask, (state, action) =>
    state.concat(action.payload)
  )
  .handleAction(actions.editTask, (state, action) =>
    state.map(task => {
      if (task.id === action.payload.id) {
        return Object.assign({}, task, action.payload.updatedAt);
      }
    })
  );

export default taskReducer;
