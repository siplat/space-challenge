import io from 'socket.io-client';
import { characters } from './boot';

let socket;

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'login' });
  }

  create() {
    const { width, height } = this.game.scale;
    socket = io();
    window.globalContext = {
      socket,
      name: '',
      character: characters[0],
    };

    this.add
      .text(width * 0.5, 80, 'Select character', {
        fontSize: 30,
      })
      .setOrigin(0.5, 0.5);

    const characterMargin = 120;
    const charactersWidth = (characters.length - 1) * characterMargin;
    const charactersLeftStart = width * 0.5 - charactersWidth * 0.5;

    const characterOptions = [];

    characters.forEach((character, i) => {
      const x = charactersLeftStart + i * characterMargin;
      const characterOption = this.add.sprite(
        x,
        height * 0.5,
        character.name,
        0
      );
      characterOption.setInteractive().on('pointerdown', () => {
        window.globalContext.character = character;
        characterOptions.forEach(option => {
          option.setScale(1.0);
        });
        characterOption.setScale(2);
      });
      characterOptions[i] = characterOption;
    });

    characterOptions[0].setScale(2);

    const playButton = this.add
      .text(width * 0.5, height - 100, 'play', {
        fontSize: 60,
        color: 'green',
      })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on('pointerdown', () => {
        window.globalContext.name = 'Someone...'; //prompt("What's your name?");

        socket.emit('LOGIN', {
          name: window.globalContext.name,
          character: window.globalContext.character,
        });
        playButton.setScale(0.0, 0.0);
      });

    socket.on('connect', () => {});

    socket.on('JOIN_GAME', ({ levelIndex }) => {
      this.scene.start('game', { levelIndex });
    });
  }

  update() {}
}
