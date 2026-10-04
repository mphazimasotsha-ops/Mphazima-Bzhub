function showMessage() {
    alert(
        "Mphazima BizHub opportunities are coming soon. " +
        "You will be able to find business opportunities, tenders and other resources here."
    );
}

function joinBizHub() {
    alert(
        "Welcome to Mphazima BizHub! " +
        "Registration will be available soon."
    );
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => {
                console.log("Mphazima BizHub is ready to install.");
            })
            .catch(error => {
                console.log("Service worker error:", error);
            if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => {
                console.log("Mphazima BizHub is ready to install.");
            })
            .catch(error => {
                console.log("Service worker error:", error);
            });
    });
            }
