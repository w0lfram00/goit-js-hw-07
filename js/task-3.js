const refs = {
    input: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output')
}

refs.input.addEventListener('input', handleNameInput)

function handleNameInput(event) {
    let username = event.currentTarget.value.trim();
    
    if (!username) username = 'Anonymous';

    refs.nameSpan.textContent = username;
}