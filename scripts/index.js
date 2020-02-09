window.addEventListener("beforeinstallprompt", e => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  showInstallPromotion();
});

window.addEventListener("appinstalled", evt => {
  console.log("a2hs installed");
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
});

if (window.navigator.standalone === true) {
  console.log("display-mode is standalone");
}
