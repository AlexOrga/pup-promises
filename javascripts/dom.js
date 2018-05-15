const outputDiv = $('#pups');

const domString = (pups) => {
  let domString = '';
  pups.forEach((pup) => {
    domString += `<div class="col-sm-6 col-md-4">`;
    domString +=    `<div class="thumbnail">`;
    domString +=    `<div class="caption"`;
    domString +=      `<h3 class="panel-title">${pup.name}</h3>`;
    domString +=      `<p>${pup.bio}</p>`;
    domString +=     `</div>`;
    domString +=     `</div>`;
    domString +=    `</div>`;
  });
  printToDom(domString);
};

const printToDom = (pupz) => {
  outputDiv.append(pupz);
};

module.exports = domString;
