import { ActionType, createReducer } from "typesafe-actions";
import produce from "immer";

import { ITask, statusTypes } from "../constants/types";
import uuid from "uuid/v1";

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
  .handleAction("CREATE_TASK", (state, action) =>
    produce(state, draft => {
      draft.push(action.payload);
    })
  )
  .handleAction("EDIT_TASK", (state, action) =>
    produce(state, draft => {
      draft[
        draft.findIndex(task => task.id === action.payload.id)
      ].updatedAt = Date.now();
    })
  )
  .handleAction("DELETE_ACTION", (state, action) =>
    produce(state, draft => {
      const indexToRemove = draft.findIndex(
        task => task.id === action.payload.id
      );
      draft.splice(indexToRemove, 1);
    })
  );

export default taskReducer;
