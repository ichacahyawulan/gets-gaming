class GameItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set game(game) {
    this._game = game;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          background-color: #CDADD0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .game-thumbnail {
          width: 100%;
          max-height: 500px;
          object-fit: cover;
          object-position: center;
        }
        
        .game-info {
          padding: 24px;
        }
        
        .game-info > h2 {
          font-size: 24px;
          font-weight: 700px;
          color: #070710;
        }
        
        .game-info > p {
          color: #070710;
          padding-top: 8px;
          line-height: 25px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="game-thumbnail" src="${this._game.thumbnail}" alt="Fan Art">
      <div class="game-info">
        <h2>${this._game.title}</h2>

        <p>${this._game.short_description}</p>
        <p><b>Platform:</b> ${this._game.platform}</p>
        <p><b>Publisher:</b> ${this._game.publisher}</p>
        <p><b>Developer:</b> ${this._game.developer}</p>
        <p><b>Release Date:</b> ${this._game.release_date}</p>
        <p><b>Game URL:</b> <a href="${this._game.game_url}">Open game preview!</a></p>
      </div>
    `;
  }
}

customElements.define('game-item', GameItem);