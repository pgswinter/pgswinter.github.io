let deferredPrompt;
const addBtn = document.querySelector('.btnAdd');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  // e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  // addBtn.style.display = 'block';
  listenToUserAction();

  // if (deferredPrompt !== 'undefined') {
  //   deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   deferredPrompt.userChoice.then((choiceResult) => {
  //     if (choiceResult.outcome === 'accepted') {
  //       console.log('User accepted the A2HS prompt');
  //     } else {
  //       console.log('User dismissed the A2HS prompt');
  //     }
  //     deferredPrompt = null;
  //   });
  // }

  // addBtn.addEventListener('click', (e) => {
  //   // hide our user interface that shows our A2HS button
  //   addBtn.style.display = 'none';
  //   // Show the prompt

  // });
});

// listen to install button clic
function listenToUserAction() {
  const installBtn = document.querySelector(".btnAdd");
  installBtn.addEventListener("click", presentAddToHome);
}

// present install prompt to user
function presentAddToHome() {
  promptEvent.prompt();  // Wait for the user to respond to the prompt
  promptEvent.userChoice
    .then(choice => {
        if (choice.outcome === 'accepted') {
            console.log('User accepted');
        } else {
            console.log('User dismissed');
        }
    })
}

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   // e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI to notify the user they can add to home screen
//   addBtn.style.display = 'block';

//   addBtn.addEventListener('click', (e) => {
//     // hide our user interface that shows our A2HS button
//     addBtn.style.display = 'none';
//     // Show the prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the A2HS prompt');
//         } else {
//           console.log('User dismissed the A2HS prompt');
//         }
//         deferredPrompt = null;
//       });
//   });
// });
