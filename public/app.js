window.addEventListener('load', async () => {
  // let mode = 'DEVELOPMENT';
  let mode = 'PRODUCTION';

  if (mode === 'DEVELOPMENT') {
    console.log('%c 🔴🔴🔴 SERVICE WORKERS SHOULD BE UNREGISTERED IN DEV MODE 🔴🔴🔴', 'background: #222; color: #bada55');
    return;
  }

  const workerRegistration = await registerWorker();

  await navigator.serviceWorker.ready;

  const currentSubscription = await workerRegistration.pushManager.getSubscription();

  if (currentSubscription) {
    console.log('%c 👇 We Already Have a Current Subscription 👇', 'background: #222; color: #bada55');
    console.log(currentSubscription);
    // sendPush(subscription); // Should be sent from a server as a chron job. this is just a test!
  } else {
    console.log('%c 👇 We Have Created a New Subscription 👇', 'background: #222; color: #bada55');
    const subscription = await registerPush(workerRegistration);
    console.log(subscription);
    // sendPush(subscription); // Should be sent from a server as a chron job. this is just a test!
  }

});


// ------------------------------------------------------------------------------------------

async function registerWorker() {
  return await navigator.serviceWorker.register("/sw.js");
}

async function registerPush(workerRegistration) {
  const publicVapidKey = "BJR38iSDBijTfcWD_jqvoSFxu9_w6UxRPrJKXj1oiN8c4qPH-tv6qPcGAp-ZJAzJaMJ8kMKaKJHGWc6LrIAHHAU";

  const urlBase64ToUint8Array = base64String => {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
    return outputArray;
  }

  // Send the subscription returned to the server to store it for future chron mass notifications
  return await workerRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
}

async function sendPush(subscription) {
  await fetch("http://localhost:5000/notify-sub", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
}



// ------------------------------------------------------------------------------------------

window.addEventListener('appinstalled', (evt) => {
  console.log('💡 The PWA is installed on this device');
  stylesheet = document.styleSheets[0]
  stylesheet.insertRule(".pwa-btn { display: none !important;}", 0);
});

if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('💡 The PWA is installed on this device');
  stylesheet = document.styleSheets[0]
  stylesheet.insertRule(".pwa-btn { display: none !important;}", 0);
} else {
  console.log('💡 The PWA is not installed on this device');
}