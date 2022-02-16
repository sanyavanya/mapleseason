<template>
  <div class="repertoire-container">
    <div class="repertoire parallax">
      <div class="repertoire__lists">
        <div class="repertoire__list-container">
          <div class="repertoire__list">
            <!-- TODO: name keys properly, maybe like BEM -->
            <h2 class="heading text-with-shadow">Танцевальные</h2>
            <ul class="repertoire__songs text-with-shadow">
              <li
                v-for="song in repertoire['dance']"
                :key="'repertoire__dance-song--' + song"
                class="repertoire__song"
              >
                {{ song }}
              </li>
            </ul>
          </div>
        </div>
        <div class="repertoire__list-container">
          <div class="repertoire__list">
            <!-- TODO: name keys properly, maybe like BEM -->
            <h2 class="heading text-with-shadow">Умеренные и лирические</h2>
            <ul class="repertoire__songs text-with-shadow">
              <li
                v-for="song in repertoire['calm']"
                :key="'repertoire__dance-song--' + song"
                class="repertoire__song"
              >
                {{ song }}
              </li>
            </ul>
          </div>
          <div class="repertoire__list">
            <!-- TODO: name keys properly, maybe like BEM -->
            <h2 class="heading text-with-shadow">Авторские</h2>
            <ul class="repertoire__songs text-with-shadow">
              <li
                v-for="song in repertoire['self']"
                :key="'repertoire__dance-song--' + song"
                class="repertoire__song"
              >
                {{ song }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="repertoire__footer text-with-shadow">
        Наиболее актуальный репертуар группы всегда доступен по
        <a
          href="https://docs.google.com/document/d/1vycwEOIRNxAyVxBXVwKMGAgj2weNK8q0"
          class="inline-link"
          >ссылке</a
        >.
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
          title: 'Танцевальные',
        },
        {
          name: 'calm',
          title: 'Умеренные и лирические',
        },
        {
          name: 'self',
          title: 'Авторские',
        },
      ],
      repertoireStringLiterals: {
        // TODO read from file, ideally from Google Drive document
        dance: `A-Ha — Take On Me
Alice Merton — No Roots
Animal Джаz — Три Полоски
Blur — Song 2
Bruno Mars — Locked Out of Heaven
Bruno Mars — Runaway Baby
Coldplay — Adventure of a Lifetime
Cream Soda — Никаких Больше Вечеринок
Dabro — Юность
Ed Sheeran — Shape of You
Ed Sheeran — I Don’t Care (feat. Justin Bieber)
Maroon 5 — This Love
Mojo — Lady + Daft Punk — Get Lucky
Nothing but Theaves — Amsterdam
Ottawan — Hands Up + Haddaway — What Is Love
Red Hot Chili Peppers — Can’t Stop
Red Hot Chili Peppers — Dani California
The Weeknd — Blinding Lights
Walk the Moon — Shut Up and Dance
Андрей Губин — Зима-Холода
Базиль — Ай-яй-я
Браво — Любите, девушки
Братья Грим — Кустурица
Братья Грим — Ресницы
Валерий Меладзе и ВИА Гра — Океан и три реки
Градусы — Кто Ты
Звери — Районы-кварталы
Звери — Танцуй
Иван Дорн — Ненавижу
Клара Румянова и Анатолий Папанов — Песня Деда Мороза и Снегурочки (из м/ф «Ну, погоди!»)
Мумий Тролль — Невеста
Руки Вверх — 18 мне уже
Серебро — Между нами любовь
Чайф — 17 лет (Пусть всё будет так, как ты захочешь)
Шура — Ты не верь слезам
Hi-Fi — Седьмой лепесток`,
        calm: `Adam Lambert — Whattaya Want From Me
Adele — Rolling in the Deep
Capital Cities — Safe & Sound
Coldplay — Amazing Day
Coldplay — The Scientist
Ed Sheeran — Bad Habits
Ed Sheeran — Perfect
James Blunt — You’re Beautiful
John Lennon — Stand By Me
Limp Bizkit — Behind Blue Eyes
Linkin Park — One More Light
Maroon 5 — She Will Be Loved
NoizeMC — Вояджер 1
Nothing but Theaves — Sorry
Red Hot Chili Peppers — Californication
Rihanna — Umbrella
Twenty One Pilots — Heathens
Амега — Лететь
Баста — Сансара
Братья Грим — Аэроплан
Бумбокс — Вахтёрам
Группа Пицца — Пятница
ДДТ — Это Всё
Земфира — П.М.М.Л.
Звери — Напитки покрепче
Михей и Джуманджи - Сука-любовь
Леонид Агутин — Аэропорты
Николай Носков — Это здорово
Отпетые Мошенники — Люби меня, люби
5’nizza — Весна`,
        self: `TUMANOV — Город
TUMANOV — До конца
TUMANOV — Кто ты
TUMANOV — Муза
TUMANOV — Плато
TUMANOV — Пой мне`,
      },
    };
  },
  computed: {
    repertoire() {
      return {
        dance: this.repertoireStringLiterals.dance.split('\n'), // TODO add sort
        calm: this.repertoireStringLiterals.calm.split('\n'),
        self: this.repertoireStringLiterals.self.split('\n'),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.repertoire-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.repertoire {
  background-image: url('../assets/images/photos/repertoire.jpg');
  max-width: 1600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    margin-top: 1rem;
    background-size: cover;
  }
  @media (min-width: 1000px) {
    background-position: 0% 50%;
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
  margin-bottom: 0.4rem;
}
.repertoire__footer {
  text-align: center;
}
</style>
