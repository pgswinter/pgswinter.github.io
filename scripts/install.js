"use strict";

let deferredInstallPrompt = null;
const installButton = document.getElementById("btnAdd");
installButton.addEventListener("click", installPWA);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute("hidden");
}

function installPWA(evt) {
  // CODELAB: Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute("hidden", true);
  // CODELAB: Log user response to prompt.
  deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === "accepted") {
      console.log("User accepted the A2HS prompt", choice);
    } else {
      console.log("User dismissed the A2HS prompt", choice);
    }
    deferredInstallPrompt = null;
  });
  deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === "accepted") {
      console.log("User accepted the A2HS prompt", choice);
    } else {
      console.log("User dismissed the A2HS prompt", choice);
    }
    deferredInstallPrompt = null;
  });
}

window.addEventListener("appinstalled", logAppInstalled);

function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
  console.log("Logistic App was installed.", evt);
}

// window.addEventListener("appinstalled", evt => {
//   console.log("a2hs installed");
// });

// if (window.navigator.standalone === true) {
//   console.log("display-mode is standalone");
// }

// const btnAdd = document.querySelector(".btnAdd");

// btnAdd.addEventListener("click", e => {
//   // hide our user interface that shows our A2HS button
//   btnAdd.style.display = "none";
//   // Show the prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice.then(choiceResult => {
//     if (choiceResult.outcome === "accepted") {
//       console.log("User accepted the A2HS prompt");
//     } else {
//       console.log("User dismissed the A2HS prompt");
//     }
//     deferredPrompt = null;
//   });
// });
