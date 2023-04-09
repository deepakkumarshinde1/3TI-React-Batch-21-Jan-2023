import { useDispatch, useSelector } from "react-redux";
import {
  getWeatherDetails,
  setWeatherDetails,
  setWeatherList,
} from "../redux/weatherReducerSlice";
import { useEffect } from "react";
const WeatherHome = () => {
  let dispatch = useDispatch();
  let { weatherList, weatherDetails } = useSelector((state) => state.weather); // get updated state

  let getDetails = async (event) => {
    let value = event.target.value;
    if (event.keyCode === 13 && value !== "") {
      let isFound = weatherList.findIndex((details, index) => {
        return details.name.toLowerCase() === value.toLowerCase();
      });

      let city = value;
      let API_KEY = "417e5e47e007f7938b48ffa2581405b0";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      switch (Number(data.cod)) {
        case 404:
          alert("City Not Found");
          dispatch(setWeatherDetails(null)); // dispatch(action(payload))
          break;

        case 200:
          dispatch(setWeatherDetails(data)); // dispatch(action(payload))
          if (isFound === -1)
            //adding new record
            dispatch(setWeatherList({ data })); // dispatch(action(payload))
          // dispatch(action) // adding in list
          else {
            // updating old record
            dispatch(setWeatherList({ isFound, data })); // dispatch(action)
          }
          break;

        default: // dispatch(action)
          alert("something went wrong, try again");
          dispatch(setWeatherDetails(null));
          break;
      }
    }
  };

  useEffect(() => {
    dispatch(getWeatherDetails());
  }, []);

  return (
    <>
      <input type="text" onKeyUp={getDetails} />
      <hr />
      {weatherDetails ? (
        <div>
          <p>
            City:{weatherDetails.name} ({weatherDetails.sys.country})
          </p>
          <p>Min Temp:{weatherDetails.main.temp_min} deg/cel</p>
          <p>Max Temp:{weatherDetails.main.temp_max} deg/cel</p>
        </div>
      ) : null}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th>Sr No</th>
            <th>City</th>
            <th>Temp</th>
          </tr>
        </thead>
        <tbody>
          {weatherList.map((cityDetails, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {cityDetails.name} {cityDetails.sys.country}
                </td>
                <td>{cityDetails.main.temp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default WeatherHome;
