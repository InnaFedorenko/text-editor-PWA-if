const butInstall = document.getElementById('buttonInstall');
let deferredPrompt; 

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    deferredPrompt = event;  
    butInstall.setAttribute('hidden', false);
    
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // deferredPrompt is a global variable we've been using in the sample to capture the `beforeinstallevent`
  deferredPrompt.prompt();
  // Find out whether the user confirmed the installation or not
  const { outcome } = await deferredPrompt.userChoice;
  // The deferredPrompt can only be used once.
  deferredPrompt = null;
  // Act on the user's choice
  if (outcome === 'accepted') {
    console.log('User accepted the install prompt.');
  } else if (outcome === 'dismissed') {
    console.log('User dismissed the install prompt');
  }
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // prevent default behavior
   // butInstall.setAttribute('hidden', true);
    console.log('👍', 'appinstalled', event);
});
