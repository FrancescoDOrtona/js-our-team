// Array di oggetti con membri del team

teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg',
    },
    
]

console.log(teamMembers);

// Variabili
const membersCardsDOMElement = document.querySelector('.members-cards');


// Ciclo for per stampare il cotenuto degli oggetti
for (let i = 0; i < teamMembers.length; i++){
    const currentMember = teamMembers[i];
    membersCardsDOMElement.innerHTML += `<div class="card"></div>`;
    console.log(currentMember)

    const cardDOMElement = document.querySelector('.card');

    for (const property in currentMember) {

        cardDOMElement.innerHTML += `${currentMember[property]}`;

        console.log(`${property}: ${currentMember[property]}`);
      }
}