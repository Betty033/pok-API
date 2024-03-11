const fetchdata = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {
            displayData(json.results)
            console.log(json)
        });

};
/*
const fetchdata = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

        if (!response.ok) {
            throw new Error(` Error status: ${response.status}`)
        }
        const data = await response.json();
        displayData(data);

    } catch (error) {
        console.error(error);

    }
}*/
fetchdata();

const displayData = (data) => {

    const container = document.querySelector('#postsContainer');
    data.forEach((user) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = ` 

        <h2> ${user.name}</h2 >

    `;
        container.appendChild(postElement);
    });
};