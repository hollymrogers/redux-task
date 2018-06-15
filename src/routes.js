import Landing from './components/landing'
import ReactTasks from './components/reactTasks'
import ImportExportTasks from './components/importExportTasks'
import TodoList from './containers/todoList'
import Cats from'./containers/cats/cats'

export const routes = [
  { path: '/', component: Landing, exact: true },
  { path: '/reactTasks', component: ReactTasks, exact: false },
  { path: '/importExportTasks', component: ImportExportTasks, exact: false },
  { path: '/todoList', component: TodoList, exact: false },
  { path: '/cats', component: Cats, exact: false },
]


