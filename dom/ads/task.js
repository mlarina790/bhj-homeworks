const allAds = Array.from(document.querySelectorAll('span.rotator__case'));

function rotationAds() {
    for (let i = 0; i < allAds.length; i++) {
        const adsElement = allAds[i];
        if (adsElement.classList.contains('rotator__case_active')) {
            adsElement.classList.remove('rotator__case_active');
            if (i + 1 === allAds.length) {
                i = 0;
                allAds[i].classList.add('rotator__case_active');
                return false;
            } else {
                const nextAdsElement = allAds[i + 1];
                nextAdsElement.classList.add('rotator__case_active');
                return false
            }
        }
    }
}
setInterval(rotationAds, 1000);