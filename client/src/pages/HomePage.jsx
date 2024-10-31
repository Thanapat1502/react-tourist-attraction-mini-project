import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [trips, setPlaces] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  const featchData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:4001/trips?keywords=${inputText}`
      );
      console.log(data.data.data);
      setPlaces(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    featchData();
  }, [inputText]);

  return (
    <>
      <div>
        <div className="input-area flex flex-col justify-center items-center px-5 py-5 mt-5">
          <h1 className="font-extrabold text-8xl text-blue-500 m-10">
            เที่ยวไหนดี
          </h1>
          <label htmlFor="search-bar">ค้นหาที่เที่ยว</label>
          <input
            type="text"
            name="search-bar"
            placeholder="หาที่เที่ยวแล้วไปกัน"
            onChange={handleInput}
            className="border w-full mx-20"
          />
          <hr />
        </div>
        <main className="card-area">
          {trips.map((trip) => {
            const shortDescription =
              trip.description.length > 100
                ? trip.description.slice(0, 100) + "..."
                : trip.description;
            return (
              <div
                key={trips.edit}
                className="card-container flex flex-row gap-4 h-56 m-10">
                <img src={trip.photos[0]} alt="" className="rounded-xl w-1/6" />
                <div className="trip-box">
                  <a target="_blank" href={trip.url}>
                    <h1 className="title font-bold text-lg">{trip.title}</h1>
                  </a>
                  <p className="description">
                    {shortDescription}{" "}
                    <a target="_blank" href={trip.url}>
                      อ่านต่อ
                    </a>
                  </p>
                  <p className="tag mt-4">
                    หมวด{" "}
                    {trip.tags.map((tag) => {
                      return (
                        <span>
                          <button>{tag}, </button>
                        </span>
                      );
                    })}
                  </p>
                  <div className="small-images flex flex-row h-34 w-36 gap-10 mt-4">
                    <img src={trip.photos[1]} alt="" className="rounded-xl" />
                    <img src={trip.photos[2]} alt="" className="rounded-xl" />
                    <img src={trip.photos[3]} alt="" className="rounded-xl" />
                  </div>
                  <button></button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}
