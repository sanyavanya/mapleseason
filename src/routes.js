import Home from './pages/Home' // TODO organize project folder structure properly
import Photo from './pages/Photo'
import Video from './pages/Video'
import Music from './pages/Music'
import Repertoire from './pages/Repertoire'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export const routes = [ // TODO add 404
  {
    path: '',
    name: '',
    component: Home
  },
  {
    path: '/photo',
    name: 'Фото',
    component: Photo
  },
  {
    path: '/video',
    name: 'Видео',
    component: Video
  },
  {
    path: '/music',
    name: 'Музыка',
    component: Music
  },
  {
    path: '/repertoire',
    name: 'Репертуар',
    component: Repertoire
  },
  {
    path: '/contact',
    name: 'Организация выступлений',
    component: Contact
  },
  {
    path: '*',
    name: 'Четыреста четыре',
    component: NotFound
  }
]
  