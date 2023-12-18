// Import the react JS packages
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Home function.
export const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get("http://localhost:8000/home/", {
            headers: {
              "Content-Type": "application/json",
            },
          });
          setMessage(data.message);
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  };

  return (
    <div style={divStyle}>
      <h3>Hi {message}</h3>
    </div>
  );
};
