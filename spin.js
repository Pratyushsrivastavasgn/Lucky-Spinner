function spinWheel(wheel, EndDegree) {
    let anim;
    if (anim) anim.cancel();
    anim = wheel.animate(
        { transform: `rotate(-${EndDegree}deg)` },
        {
            duration: 4000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    anim.onfinish = () => {
        let num = Math.round(((EndDegree + 90) % 360) / (360 / 12)) % 12;
        const prizes = [
            "$1000", "$2000", "$3000", "$4000", "$5000", "$6000",
            "$7000", "$8000", "$9000", "$10000", "$11000", "$12000"
        ];
        const popup = document.getElementById("resultPopup");
        const message = document.getElementById("popupMessage");
        message.textContent = " Yay! You won " + prizes[num];
        popup.style.display = "block";
        // Auto-hide popup after 3 seconds
        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    };
}
document.addEventListener("DOMContentLoaded", () => {
    const wheel = document.querySelector(".ui-wheel-of-fortune ul");
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const EndDegree = Math.floor(Math.random() * 3600 + 360);
        spinWheel(wheel, EndDegree);
    });
});