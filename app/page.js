"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching API...");

        const response = await fetch("https://skapi.sheriakiganjani.co.tz/maswali_na_majibu.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
          },
          body: JSON.stringify({
            api_key: "YTc4YWY3ZWVlZWViODU3YTY5ODUzNTA4ZGU3YzVhYzM1NTdjNjM1MWEyYzA1ODU1ZDhlqA12AjkP0qNTc4ZjU3N2QwMDVmMw==",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setResponseData(data);
        console.log("API response:", data);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {responseData && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
