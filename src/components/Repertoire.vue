<template>
  <div>
    <h1>Репертуар группы</h1>
    <template v-for="list in lists">
      <div class="list" :key="'repertoire__list--' + list.name"><!-- TODO: name keys properly, maybe like BEM -->
        <h2>{{list.title}}</h2>
        <ul>
          <li v-for="song in repertoire[list.name]" :key="'repertoire-song__' + song">
            {{song}}
          </li>
        </ul>
      </div>
    </template>   
  </div>
</template>
<script>
  export default {
    name: 'Repertoire',
    data() {
      return {
        lists: [
          {
            name: 'dance',
            title: 'Танцевальные'
          },
          {
            name: 'calm',
            title: 'Танцевальные'
          },
          {
            name: 'self',
            title: 'Танцевальные'
          }
        ],
        repertoireStringLiterals: {
          dance: `A-Ha — Take on Me
Alice Merton — No Roots
Animal Джаz — Три Полоски
Ava Max — Sweet But Psycho
Blur — Song 2
Bruno Mars — Locked Out of Heaven
Bruno Mars — Runaway Baby
Coldplay — Adventure of a Lifetime
Coldplay — Yellow
Chumbawamba — Tubthumping
DNCE — Kissing Strangers
Ed Sheeran — Shape of You
Ed Sheeran — I Don’t Care (feat. Justin Bieber)
Kaiser Chiefs — Ruby
Maroon 5 — Misery
Maroon 5 — This Love
Mojo — Lady + Daft Punk — Get Lucky
Ottawan — Hands Up + Haddaway — What is Love
Red Hot Chili Peppers — Can’t Stop
Red Hot Chili Peppers — Dani California
Smash Mouth — All Star
Spice Girls — Wannabe
The Weeknd — Blinding Lights
Walk the Moon — Shut Up and Dance
Базиль — Ай-яй-я
Браво — Любите, девушки
Братья Грим — Кустурица
Братья Грим — Ресницы
Валерий Меладзе и ВИА Гра — Океан и три реки
Градусы — Кто Ты
Звери — Районы-кварталы
Звери — Танцуй
Песня Деда Мороза и Снегурочки (из м/ф «Ну, погоди!»)
Ленинград — Рыба
Руки Вверх — 18 мне уже
Серебро — Между нами любовь
Иван Дорн — Ненавижу
Иван Дорн — Стыцамэн
Мумий Тролль — Невеста
Чайф — 17 лет (Пусть всё будет так, как ты захочешь)
Hi-Fi — Седьмой Лепесток`,
          calm: `Adele — Rolling in the Deep
Capital Cities — Safe & Sound
Coldplay — Amazing Day
Coldplay — The Scientist
Ed Sheeran — Perfect
James Blunt — You’re Beautiful
John Lennon — Stand By Me
Limp Bizkit — Behind Blue Eyes
Linkin Park — One More Light
Maroon 5 — She Will Be Loved
Noize MC — Вояджер 1
Red Hot Chili Peppers — Californication
Rihanna — Umbrella
Sam Smith — I’m Not the Only One
System of a Down — Lonely Day
Twenty One Pilots — Heathens
Амега — Лететь
Баста — Сансара
Братья Грим — Аэроплан
Бумбокс — Вахтёрам
Группа Пицца — Пятница
ДДТ — Это Всё
Николай Носков — Это Здорово
Земфира — П. М. М. Л.
Звери — Напитки покрепче
Мумий Тролль — Малыш
Отпетые Мошенники — Люби меня, люби
5’nizza — Весна`,
          self: `TUMANOV — Город
TUMANOV — До Конца
TUMANOV — Кто Ты
TUMANOV — Муза
TUMANOV — Пой Мне`
        }
      }
    },
    computed: {
      repertoire() {
        return {
          dance: this.repertoireStringLiterals.dance.split('\n'), // TODO add sort
          calm: this.repertoireStringLiterals.calm.split('\n'),
          self: this.repertoireStringLiterals.self.split('\n')
        }
      }
    }
  }
</script>