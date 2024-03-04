const modal = document.querySelector('.modal');
const modalTriggerButton = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modalTriggerButton.onclick = () => openModal();
modalCloseButton.onclick = () => closeModal();
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

// MODAL INNER

const phoneInput = document.querySelector('#phone_input');
const gmailInput = document.querySelector('#gmail_input');
const modalButton = document.querySelector('#modal_button');
const modalResult = document.querySelector('#modal_result');

const phoneRegExp = /\+996\s?[2579]\d{2}\s?\d{2}-\d{2}-\d{2}/;
const gmailRegExp = /^[a-zA-Z0-9.]{3,}@gmail.com/;

modalButton.addEventListener('click', () => {
    let phoneValid = phoneRegExp.test(phoneInput.value);
    let gmailValid = gmailRegExp.test(gmailInput.value);

    if (phoneValid && gmailValid) {
        modalResult.innerHTML = 'PHONE AND GMAIL TRUE';
        modalResult.style.color = 'green';
    } else if (phoneValid && !gmailValid) {
        modalResult.innerHTML = 'GMAIL WRONG';
        modalResult.style.color = 'red';
    } else if (!phoneValid && gmailValid) {
        modalResult.innerHTML = 'PHONE WRONG';
        modalResult.style.color = 'red';
    } else {
        modalResult.innerHTML = 'PHONE AND GMAIL WRONG';
        modalResult.style.color = 'red';
    }
});


// SCROLL HANDLER

const isBottomOfPage = () => (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

const handleScroll = () => {
    if (isBottomOfPage()) {
        openModal();
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

// After 30s

setTimeout(function() {
    openModal();
}, 30000);


