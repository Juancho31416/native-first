export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
    const URL = `https://api.github.com/users/${username}`;
    console.log('llego a servicio')
    return fetch(URL)
            .then((res) => res.json());
}