const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'aac3425e48msheeb71fe26030a8fp17cac0jsn0c74665383ca',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function getWeatherFrom(query = 'Rivas, Nicaragua') {

    const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
        FETCH_OPTIONS
    )


    const data = await response.json()


    const { location, current } = data;
    const { country, localtime, name } = location;
    const {
        condition,
        humidity,
        feelslike_c,
        is_day,
        temp_c,
        wind_kph,
        wind_dir
    } = current;
    const { code, text } = condition;

    return {
        conditionCode: code,
        conditionText: text,
        country,
        localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    };

}