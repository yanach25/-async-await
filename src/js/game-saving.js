import UserInfo from './user-info';

export default class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = new UserInfo(userInfo.id, userInfo.name, userInfo.level, userInfo.points);
  }
}
