export async function getWeatherFrom(query = 'Rivas, Nicaragua') {

    return fetch(`/API/get-weather?q=${query}`).then(res => res.json());
}