import Home from './components/Home' // TODO organize project folder structure properly
import Photo from './components/Photo'
import Video from './components/Video'
// import Music from './components/Music'
import Repertoire from './components/Repertoire'
import Contact from './components/Contact'

export const routes = [ // TODO add 404
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  // {
  //   path: '/music',
  //   name: 'music',
  //   component: Music
  // },
  {
    path: '/repertoire',
    name: 'repertoire',
    component: Repertoire
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]
  