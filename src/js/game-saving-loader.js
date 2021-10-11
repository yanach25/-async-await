import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedJson = await json(data);
      const parsedData = JSON.parse(parsedJson);
      return new GameSaving(parsedData.id, parsedData.created, parsedData.userInfo);
    } catch (err) {
      return err;
    }
  }
}
