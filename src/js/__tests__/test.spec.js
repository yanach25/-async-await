import GameSavingLoader from '../game-saving-loader';

const data = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  },
};

test('should pass', async () => {
  await expect(GameSavingLoader.load()).resolves.toEqual(data);
});
