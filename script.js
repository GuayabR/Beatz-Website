// Beatz! X Website
// C 2025 GuayabR. All Rights Reserved.

const DEVICE = detectDeviceType();

window.addEventListener("DOMContentLoaded", () => {
    //var btn = document.getElementById("download_btn");
    //if (btn) btn.textContent = "Download for " + detectDeviceType() + "!";

    console.log(DEVICE);

    if (DEVICE == "Chromebook") {
        document.body.classList.add("chromebook");
    }
});

function detectDeviceType() {
    const userAgent = navigator.userAgent || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/CrOS/.test(userAgent)) {
        return "Chromebook";
    }

    if (/Mobile|iP(hone|od)|IEMobile|Windows Phone|kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
        return "Mobile";
    }
    return "Windows";
}

function home() {
    window.location.href = "/";
}