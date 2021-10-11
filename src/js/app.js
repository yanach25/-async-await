import GameSavingLoader from './game-saving-loader';

/* eslint-disable  no-console */
GameSavingLoader.load().then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});
