function getDataFromNetwork() {
  const url = `https://simple-api-online.herokuapp.com/api`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(() => {
      return null;
    });
}

function getDataFromCache() {
  if (!("caches" in window)) {
    return null;
  }
  const url = `https://simple-api-online.herokuapp.com/api`;
  return caches
    .match(url)
    .then(response => {
      if (response) {
        return response.json();
      }
      return null;
    })
    .catch(err => {
      console.error("Error getting data from cache", err);
      return null;
    });
}

function updateData() {
  getDataFromCache().then(data => {
    if(data) {
      renderData(data);
    } else {
      console.log(`Data is loading from NETWORK`);
    }
  });
  getDataFromNetwork().then(data => {
    if(data) {
      renderData(data);
    } else {
      console.log(`Data is loading from CACHES`);
    }
  });
}

function renderData(data) {
  if (!data) {
    // There's no data, skip the update.
    return;
  }
  const displayApi = document.createElement('p');
  const dataLastUpdated = JSON.stringify(displayApi.textContent);
  const textNode = document.createTextNode(JSON.stringify(data));
  const addToBody = displayApi.appendChild(textNode);
  console.log(`dataLastUpdated: `, dataLastUpdated);
  console.log(`JSON.stringify(data): `, JSON.stringify(data));
  // TODO: ADD current time to data
  // if(dataLastUpdated === JSON.stringify(data)) {
  //   return;  
  // }
  document.body.appendChild(addToBody);
}

function init() {
  updateData();
}

init();

window.addEventListener("beforeinstallprompt", e => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  showInstallPromotion();
});

window.addEventListener("appinstalled", evt => {
  console.log("a2hs installed");
});

if (window.navigator.standalone === true) {
  console.log("display-mode is standalone");
}

const btnAdd = document.querySelector(".btnAdd");

btnAdd.addEventListener("click", e => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = "none";
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }
    deferredPrompt = null;
  });
});
