import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch currency data when 'currency' changes
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Fixed the extra semicolon here
      .then((res) => {
        setData(res[currency]); // Update state with fetched data
        console.log(res[currency]); // Log the fetched data
      })
      .catch((error) => console.error("Error fetching currency data:", error)); // Added error handling
  }, [currency]); // Added 'currency' as a dependency to refetch on change

  return data; // Return the updated data
}

export default useCurrencyInfo;
