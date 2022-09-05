window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  init();
});

function init() {
  createSupportButton();
  createDialog();

  let supBtn = document.getElementById("support-button"),
    supDialogCloseBtn = document.getElementById("support-close");

  supBtn.addEventListener("click", openSupport);
  supDialogCloseBtn.addEventListener("click", closeSupport);
}

function closeSupport() {
  console.log("close support");
  document.getElementById("support-dialog").classList.remove("show");
  document.getElementById("support-button").classList.add("show");
}

function openSupport() {
  console.log("open support");
  document.getElementById("support-dialog").classList.add("show");
  document.getElementById("support-button").classList.remove("show");
}

function createSupportButton() {
  const btnSupContent = `
  <div class="support-button__round">
    <div class="support-button__icon">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M16,12a2,2,0,1,1,2-2A2,2,0,0,1,16,12Zm0-2Z"/><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M16,24a2,2,0,0,1-2-2V16a2,2,0,0,1,4,0v6A2,2,0,0,1,16,24Zm0-8v0Z"/></g><g id="frame"><rect class="cls-1" height="32" width="32"/></g></svg>
    </div>
  </div>`;

  const btnSupport = document.createElement("div");
  btnSupport.setAttribute("id", "support-button");
  btnSupport.setAttribute("class", "support-button");
  btnSupport.innerHTML = btnSupContent;
  document.body.append(btnSupport);
}

function createDialog() {
  const dialog = `
  <div class="support-dialog__header">
    <div class="support-dialog__header-content"></div>
    <div class="support-dialog__header-close" id="support-close">
      <?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
    </div>
  </div>  
  <div class="support-dialog__content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore et porro quasi, accusamus tempore sed minus mollitia nisi laborum ipsam voluptas optio dolore, necessitatibus libero neque inventore. Magnam, quo.</p>
    <p>Voluptas, non dolorum. Perspiciatis et amet possimus molestiae, rem hic laudantium adipisci fugiat officiis commodi incidunt expedita quam aperiam inventore dolores earum aliquid architecto fugit eligendi culpa qui! Consequuntur, harum.</p>
    <p>Aliquid error a id deleniti quae accusantium vitae? Repellendus error laboriosam officia libero ullam modi nam dolorum ipsum assumenda aspernatur, sint, accusamus aliquid quis consequuntur enim saepe ducimus excepturi debitis?</p>
    <p>Saepe atque expedita voluptatibus recusandae, adipisci excepturi, doloremque quidem similique doloribus dolores optio eum minima et. Delectus quidem deserunt, natus enim id quam recusandae dolorum necessitatibus vitae ipsa itaque soluta?</p>
    <p>Voluptatibus velit in ipsam perferendis atque veniam eius at sit dolore, soluta vitae vel aspernatur voluptates fugit eaque dicta dolor laboriosam nobis qui! Veritatis assumenda exercitationem optio officiis alias mollitia!</p>
  </div>
  <div class="support-dialog__footer"></div>
`;

  const dialogSup = document.createElement("div");
  dialogSup.setAttribute("id", "support-dialog");
  dialogSup.setAttribute("class", "support-dialog");
  dialogSup.innerHTML = dialog;

  document.body.append(dialogSup);
}
