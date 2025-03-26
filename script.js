document.addEventListener("DOMContentLoaded", loadContacts);

function addContact() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    
    if (!name || !phone || !email) {
        alert("Please fill in all fields.");
        return;
    }
    
    let contact = { name, phone, email };
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    loadContacts();
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
}

function loadContacts() {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    let contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    
    contacts.forEach((contact, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${contact.name} - ${contact.phone} - ${contact.email} 
                        <button onclick="deleteContact(${index})">Delete</button>`;
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    loadContacts();
}
