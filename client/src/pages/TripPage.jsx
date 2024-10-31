import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TripPage() {
  const [trips, setPlaces] = useState([]);
  const { tripEdit } = useParams();

  const featchData = async () => {
    try {
      const data = await axios.get(`http://localhost:4001/trips/${tripEdit}`);
      console.log(data.data.data);
      setPlaces(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    featchData();
  }, []);

  return <h1>This is Trip Page</h1>;
}
