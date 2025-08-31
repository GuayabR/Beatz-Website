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

function download() {
    // Replace with your GitHub repo, release tag, and asset name
    const githubUrl = "https://github.com/GuayabR/Beatz-X/releases/download/v1.0/BeatzX-1.0.zip";

    fetch(githubUrl)
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.blob();
        })
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Beatz! X 1.0.0.zip"; // downloaded file name
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        })
        .catch((err) => console.error("Download failed:", err));
}
