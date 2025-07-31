import styles from "./Weather.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=d340ddd7f500656b21b6a44403c2b480&units=metric&lang=ru"
        );
        setWeather(response.data);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.weather}>
      <h2>Погода в {weather.name}</h2>
      <p>Температура: {weather.main.temp} °C</p>
      <p>Ощущается как: {weather.main.feels_like} °C</p>
      <p>Погода: {weather.weather[0].description}</p>
      <p>Ветер: {weather.wind.speed} м/с</p>
    </div>
  );
};
