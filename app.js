function showMessage() {
    alert(
        "Business opportunities will be available here soon. " +
        "Mphazima BizHub will provide access to tenders, opportunities and business resources."
    );
}

function joinBizHub() {
    alert(
        "Welcome to Mphazima BizHub! " +
        "Customer registration will be available soon."
    );
}


// Make Mphazima BizHub installable
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js")
            .then(function () {
                console.log("Mphazima BizHub service worker registered.");
            })
            .catch(function (error) {
                console.log("Service worker registration failed:", error);
            });
    });
}
