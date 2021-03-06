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
  if (getDataFromCache() !== null) {
    getDataFromCache().then(dataCache => {
      if (getDataFromNetwork() !== null) {
        getDataFromNetwork().then(dataNetwork => {
          if (JSON.stringify(dataCache) === JSON.stringify(dataNetwork)) {
            renderData(dataCache);
          } else {
            renderData(dataNetwork);
          }
        });
      } else {
        renderData(dataCache);
      }
    });
  } else {
    if (getDataFromNetwork() !== null) {
      getDataFromNetwork().then(dataNetwork => {
        renderData(dataNetwork);
      });
    } else {
      console.log("No data in cache and no data was fetched by network");
    }
  }
}

function renderData(data) {
  if (!data) {
    // There's no data, skip the update.
    return;
  }
  const displayApi = document.createElement("p");
  const dataLastUpdated = JSON.stringify(displayApi.textContent);
  const textNode = document.createTextNode(JSON.stringify(data));
  const addToBody = displayApi.appendChild(textNode);
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
