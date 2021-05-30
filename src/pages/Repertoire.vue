<template>
  <div class="repertoire-container">
    <div class="repertoire">
      <div class="repertoire__lists">
        <div class="repertoire__list-container">
          <div class="repertoire__list"><!-- TODO: name keys properly, maybe like BEM -->
            <h2 class="heading">Танцевальные</h2>
            <ul class="repertoire__songs">
              <li v-for="song in repertoire['dance']" :key="'repertoire__dance-song--' + song" class="repertoire__song">
                {{song}}
              </li>
            </ul>
          </div>
        </div>
        <div class="repertoire__list-container">
          <div class="repertoire__list"><!-- TODO: name keys properly, maybe like BEM -->
            <h2 class="heading">Умеренные и лирические</h2>
            <ul class="repertoire__songs">
              <li v-for="song in repertoire['calm']" :key="'repertoire__dance-song--' + song" class="repertoire__song">
                {{song}}
              </li>
            </ul>
          </div>
          <div class="repertoire__list"><!-- TODO: name keys properly, maybe like BEM -->
            <h2 class="heading">Авторские</h2>
            <ul class="repertoire__songs">
              <li v-for="song in repertoire['self']" :key="'repertoire__dance-song--' + song" class="repertoire__song">
                {{song}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="repertoire__footer">
        Наиболее актуальный репертуар группы всегда доступен по <a href="https://drive.google.com/open?id=1vycwEOIRNxAyVxBXVwKMGAgj2weNK8q0" class="inline-link">ссылке</a>.
      </p>
    </div>
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
            title: 'Умеренные и лирические'
          },
          {
            name: 'self',
            title: 'Авторские'
          }
        ],
        repertoireStringLiterals: {// TODO read from file, ideally from Google Drive document
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

<style lang="scss" scoped>
  .repertoire-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .repertoire {
    max-width: 1600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
      margin-top: 1rem;
    }
  }
  .repertoire__lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 1rem;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  .repertoire__list-container {
    text-align: center;
    flex: 1 1 0px;
    margin: 0 1rem;
  }
  .repertoire__songs {
    margin: 0;
    padding-inline-start: 0;
  }
  .repertoire__song {
    list-style-type: none;
    margin-bottom: .4rem;
  }
  .repertoire__footer {
    text-align: center;
  }
</style>