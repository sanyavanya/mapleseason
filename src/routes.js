import Home from './pages/Home' // TODO organize project folder structure properly
import Photo from './pages/Photo'
import Video from './pages/Video'
import Music from './pages/Music'
import Repertoire from './pages/Repertoire'
import Contact from './pages/Contact'

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
  {
    path: '/music',
    name: 'music',
    component: Music
  },
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
  