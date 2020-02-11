let promptEvent;

// Capture event and defer
window.addEventListener("beforeinstallprompt", function(e) {
  e.preventDefault();
  promptEvent = e;
  listenToUserAction();
});

// listen to install button clic
function listenToUserAction() {
  const installBtn = document.querySelector(".btnAdd");
  installBtn.addEventListener("click", presentAddToHome);
}

// present install prompt to user
function presentAddToHome() {
  promptEvent.prompt(); // Wait for the user to respond to the prompt
  promptEvent.userChoice.then(choice => {
    if (choice.outcome === "accepted") {
      console.log("User accepted");
    } else {
      console.log("User dismissed");
    }
  });
}