// 分数和等级类
class Mark {
  private score: number;
  private level: number;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  constructor() {
    this.score = 0;
    this.level = 1;
    this.scoreEle = document.getElementsByClassName('score')[0] as HTMLElement;
    this.levelEle = document.getElementsByClassName('level')[0] as HTMLElement;
    this.init();
  }

  init() {
    this.scoreEle.innerText = this.score + '';
    this.levelEle.innerText = this.level + '';
  }

  // 获取分数
  getScore() {
    return this.score;
  }

  // 设置分数
  setScore(score: number) {
    if (score < 0) {
      throw new Error('分数不能为负数');
    } else {
      this.score = score;
      // 加分后判断分数对应的等级
      this.level = Math.floor(this.score / (this.level * 10)) + 1;
      this.scoreEle.innerText = this.score + '';
      this.levelEle.innerText = this.level + '';
    }
  }

  // 加分
  addScore() {
    this.setScore(this.score + 1);
  }
  // 清零
  clearScore() {
    this.score = 0;
    this.level = 1;
  }
}

export default Mark;
