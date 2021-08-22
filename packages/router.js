import Home from './client/App'
import Article from './client/Article';

export const routes = [
  {
    path: '/',
    key: 'Home',
    exact: true,
    component: Home
  },
  {
    path: '/articles/:id',
    key: 'Articles',
    exact: true,
    component: Article
  }
]
