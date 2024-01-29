`use strict`;

const input = process.argv.slice(2);
const skill = input[0];

function clearScreen() {
  console.clear();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e8; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function generatePossibility() {
  let randomInt = Math.floor(Math.random() * 10) + 1;
  return randomInt;
}

class GameCharacter {
  constructor(code, hp, dmg) {
    this.code = code;
    this.hp = hp;
    this.dmg = dmg;
  }
}

class Monster extends GameCharacter {
  constructor(code, dmg, hp) {
    super(code, hp, dmg);
  }

  hit(hero) {
    hero.hp -= this.dmg;
    sleep(500);
    console.log(`Player got hit by monster, HP -${this.dmg}`);
  }
}

class Hero extends GameCharacter {
  constructor(code, hp, dmg, skill, minHp, maxHp) {
    super(code, hp, dmg);
    this.skill = skill;
    this.minHp = minHp;
    this.maxHp = maxHp;
    this.defaultDmg = dmg;
  }

  hit(monster) {
    monster.hp -= this.dmg;
  }

  resetDmg() {
    this.dmg = this.defaultDmg;
  }

  useSkill(skill) {
    let regen = 10;
    if (skill === "regen") {
      hero.hp += regen;
      console.log(`Player got potion +${regen} HP`);
    } else if (skill === "ulti") {
      this.dmg = this.dmg * 2;
      console.log("Player use ulti. ONE HIT KILL!");
    }
  }
}

class GameSystem {
  constructor(stage, prepStage, endStage, arenaLog, currentMonster) {
    this.stage = stage;
    this.prepStage = prepStage;
    this.endStage = endStage;
    this.arenaLog = arenaLog;
    this.currentMonster = currentMonster;
  }

  isSkillUsed() {
    let skillPs = generatePossibility();
    if (skillPs === 1) {
      return true;
    }
    return false;
  }

  spawnMonster() {
    let bigMonsterPs = generatePossibility();
    if (bigMonsterPs <= 3) {
      return new Monster("M", 7, 2);
    }
    return new Monster("m", 7, 1);
  }

  checkHp(hero) {
    if (hero.hp > hero.maxHp) {
      return hero.maxHp;
    } else if (hero.hp < hero.minHp) {
      return hero.minHp;
    }
    return hero.hp;
  }

  printHp(hero) {
    return `HP: ${this.checkHp(hero)}`;
  }

  gameStatus(hero) {
    if (hero.hp > 0) {
      return "You Win";
    } else {
      return "You Lose";
    }
  }

  gameInfo(i, hero, skill, monster) {
    let title = `Stage ${i}`;
    let fightLog = this.printArenaLog(i, monster, hero);
    let footer = "Fight:";
    if (i === this.prepStage) {
      title = "Hero ready to go";
      fightLog = `${hero.code}${this.printArenaLog(i, monster, hero)}`;
      footer = "Hero Preparation";
    } else if (i === this.endStage) {
      title = "End Stage";
      footer = this.gameStatus(hero);
    } else if (i < this.endStage && hero.hp <= 0) {
      title = `Stage ${i - 1}`;
      footer = this.gameStatus(hero);
    }
    console.log(title);
    console.log(this.printHp(hero));
    console.log(`SKILL: ${skill}`);
    console.log(fightLog);
    console.log(footer);
  }

  printArenaLog(i, monster, hero) {
    if (i === this.endStage) {
      this.arenaLog[i - 1] = this.currentMonster;
      return this.arenaLog.join(" | ") + hero.code;
    } else if (i === this.prepStage) {
      return this.arenaLog.join(" | ");
    } else if (i < this.endStage && hero.hp <= 0) {
      this.arenaLog[i - 1] = this.currentMonster;
      return this.arenaLog.join(" | ");
    }
    let current = `H vs ${monster.code}`;
    this.arenaLog[i] = current;
    this.arenaLog[i - 1] = this.currentMonster;
    this.currentMonster = monster.code;
    let strArenaLog = this.arenaLog.join(" | ");
    return strArenaLog;
  }
}

function fight(hero, monster, skill, gameSys) {
  if (gameSys.isSkillUsed()) {
    sleep(500);
    hero.useSkill(skill);
  }

  while (monster.hp > 0) {
    monster.hit(hero);
    hero.hit(monster);
  }
  hero.resetDmg();
}

const hero = new Hero("H", 100, 1, skill, 0, 100);
const gameSys = new GameSystem(11, 0, 11, new Array(12).fill(""), "");

function startGame() {
  let i = 0;
  while (i < gameSys.stage && hero.hp > 0) {
    if (i === gameSys.prepStage) {
      ``;
      gameSys.gameInfo(i, hero, skill, gameSys, "");
      sleep(500);
      clearScreen();
    } else {
      const monster = gameSys.spawnMonster();
      gameSys.arenaLog[i] = monster.code;
      gameSys.gameInfo(i, hero, skill, monster);
      fight(hero, monster, skill, gameSys);
      sleep(500);
      clearScreen();
    }
    i++;
  }
  gameSys.gameInfo(i, hero, skill, gameSys, "");
}
startGame();
