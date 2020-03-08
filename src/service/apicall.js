export function getJokesLista() {
    return fetch("https://api.chucknorris.io/jokes/categories")
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        })

}

export function randomJokes(category) {
    let API_JOKES = `https://api.chucknorris.io/jokes/random`
    return fetch(`${API_JOKES}?category=${category}`)
        .then(res => res.json())
        .catch(err => {})
}

export function queryJokes(query) {
    let API = `https://api.chucknorris.io/jokes/search`
    return fetch(`${API}?query=${query}`)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        })
}