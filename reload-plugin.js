export function initReloadPlugin() {
  // setup
  const body = document.querySelector('body'),
    pluginStructure = `
      <div data-reload-plugin-element="container">
        <button aria-label="Reload page" data-reload-plugin-element="button">
          <svg viewBox="0 0 16 16" fill="#fff">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
        </button>
      </div>
    `;

  body.innerHTML += pluginStructure;

  const pluginContainer = document.querySelector('[data-reload-plugin-element="container"]'),
    pluginBtn = document.querySelector('[data-reload-plugin-element="button"]'),
    pluginSvg = document.querySelector('[data-reload-plugin-element="button"] svg');

  // stylesheet
  pluginContainer.setAttribute('style', `
    position: fixed;
    bottom: 2rem;
    right: 2.5rem;
  `);

  pluginBtn.setAttribute('style', `
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid rgba(100, 100, 100, 1);
    background-color: #161616;
  `);

  pluginSvg.setAttribute('style', `
    width: 1.2rem;
    height: 1.2rem;
  `);

  // dynamism
  pluginBtn.onclick = () => window.location.reload();
}