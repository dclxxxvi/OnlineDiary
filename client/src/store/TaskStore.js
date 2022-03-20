import {makeAutoObservable} from "mobx";

export default class TaskStore {
  constructor() {
    this._taskList = []
    makeAutoObservable(this)
  }

  setTaskList(taskList) {
      this._taskList = taskList;
  }

  get TaskList() {
      return this._taskList;
  }
}