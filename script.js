function enterWebsite() {
    const cover = document.getElementById("cover");
    cover.style.animation = "fadeOut 1s forwards";
    
    setTimeout(() => {
        cover.style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1000);
}

function showPopup(url) {
    // Menampilkan pop-up dengan iframe menuju URL
    document.getElementById("popup-frame").src = url;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    // Menyembunyikan pop-up dan menghapus src dari iframe
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-frame").src = "";
}