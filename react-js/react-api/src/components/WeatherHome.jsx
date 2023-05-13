import { useDispatch, useSelector } from "react-redux";
import { getProductAPI, getWeatherDetails } from "../redux/weatherReducerSlice";
import { useEffect } from "react";
import axios from "axios";
const WeatherHome = () => {
  let dispatch = useDispatch();
  let { weatherList, weatherDetails, productList } = useSelector(
    (state) => state.weather
  ); // get updated state

  let getDetails = async (event) => {
    let value = event.target.value;
    if (event.keyCode === 13 && value !== "") {
      let isFound = weatherList.findIndex((details, index) => {
        return details.name.toLowerCase() === value.toLowerCase();
      });

      dispatch(getWeatherDetails({ value, isFound }));

      // try {
      //   let city = value;
      //   let API_KEY = "417e5e47e007f7938b48ffa2581405b0";
      //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      //   let { data } = await axios.get(url);
      //   if (isFound === -1)
      //     dispatch(setWeatherList({ data })); // dispatch(action(payload))
      //   else {
      //     // updating old record
      //     dispatch(setWeatherList({ isFound, data })); // dispatch(action)
      //   }
      // } catch (error) {
      //   alert("city not found");
      //   dispatch(setWeatherDetails(null));
      // }
    }
  };

  let getProductList = () => {
    dispatch(getProductAPI());
  };

  return (
    <>
      <button onClick={getProductList}>Get Product</button>
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

      <ul>
        {productList.map((product, index) => {
          return <li key={index}>{product.title}</li>;
        })}
      </ul>
    </>
  );
};

export default WeatherHome;
