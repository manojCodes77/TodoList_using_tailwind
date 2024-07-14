document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
let form = document.getElementById('myForm');
let information = document.querySelector('.information');

form.addEventListener('submit', function (e) {
    checkInformationEmpty();
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    if (name === '' || description === '') {
        information.innerHTML = '<p>Please fill all the fields</p>';
        information.style.color = 'red';
    } else {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `<p><strong>Name:</strong> ${name}<br><strong>Description:</strong> ${description}</p>`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            entryDiv.remove();
            checkInformationEmpty();
        });
        entryDiv.appendChild(deleteButton);
        information.appendChild(entryDiv);

        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
    }
});

let flag2=true;
function checkInformationEmpty() {
    if (information.children.length===0) {
        information.innerHTML = '<p>No information available. Please fill in the form.</p>';
        flag2=true;
    }
    else{
        if(flag2){
            information.innerHTML = '';
            flag2=false;
        }
    }
    console.log(information.hasChildNodes());
}
checkInformationEmpty();