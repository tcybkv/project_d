document.addEventListener("DOMContentLoaded", () => {
    const musicBtn = document.getElementById("music-btn");
    const additionalButtonsContainer = document.getElementById("additional-buttons-container");
    let additionalButtonsVisible = false;

    musicBtn.addEventListener("click", () => {
        additionalButtonsVisible = !additionalButtonsVisible;
        toggleAdditionalButtons();
    });

    const toggleAdditionalButtons = () => {
        if (additionalButtonsVisible) {
            createButtons();
        } else {
            removeButtons();
        }
    };

    const createButtons = () => {
        additionalButtonsContainer.innerHTML = '';
        const buttonClasses = ["musicBtn", "musicBtn", "musicBtn"];
        const buttonImages = ["images/icon_prev.png", "images/icon_play.png", "images/icon_next.png"];
        for (let i = 0; i < 3; i++) {
            const newBtn = document.createElement("button");
            newBtn.classList.add(buttonClasses[i]);
            const img = document.createElement("img");
            img.src = buttonImages[i];
            img.alt = "Button " + (i + 1);
            newBtn.appendChild(img);
            additionalButtonsContainer.appendChild(newBtn);
        }
    };

    const removeButtons = () => {
        additionalButtonsContainer.innerHTML = '';
    };
});
