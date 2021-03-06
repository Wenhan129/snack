import React from "react";
import { useDispatch, connect } from "react-redux";
import { createTask, deleteTask } from "../actions/task";
import { RootState } from "typesafe-actions";
import { ITask } from "../constants/types";

function TaskPage({ tasks }: RootState) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(createTask("How r you", "Hey I'm a description"));
        }}
      />
      {tasks.map((task: ITask) => {
        return (
          <div>
            {task.title}-------------<span>{task.id}</span>
            <button
              onClick={() => {
                dispatch(deleteTask(task.id));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(TaskPage);
