import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestObject, applyData) => {
    setIsLoading(true);
    try {
      const res = await fetch(requestObject.url, {
        method: requestObject.method ? requestObject.method : "GET",
        headers: requestObject.headers ? requestObject.headers : {},
        body: requestObject.body ? JSON.stringify(requestObject.body) : null,
      });
      if (!res.ok) {
        throw new Error("Connection error");
      }
      const data = await res.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "It's not you It's me");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
