const getCharacter = (id) => {
    return new Promise((resolve, reject) => {
        const API = 'https://swapi.co/api/';
        const PEOPLE_URL = 'people/:id';
    
        const URL = `${API}${PEOPLE_URL.replace(':id', id)}`;
        const opts = { crossDomain: true };
    
        $.get(URL, opts, (character) => { resolve (character)})
        .fail((err) => { reject(err); });
    });
};

const multipleRequests = () => {
    const promises = [
        getCharacter(1),
        getCharacter(2),
        getCharacter(3),
        getCharacter(4),
        getCharacter(5),
        getCharacter(6),
        getCharacter(7),
        getCharacter(8),
        getCharacter(9),
        getCharacter(10)
    ];

    Promise.all(promises)
    .then((arrayValues) => {
        arrayValues.forEach((character) => {
            console.log(character.name);
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

multipleRequests();