import { useState, useEffect } from "react";
import axios from "axios";

export default function useContact(url) {
  const [contact, setContact] = useState({
    loading: false,
    data: [],
    error: null,
  });

  const getContact = async (url) => {
    try {
      setContact({ ...contact, loading: true });
      const response = await axios.get(url);

      if (response.status === 200) {
        setContact({ ...contact, loading: false, data: response.data });
      } else {
        setContact({ ...contact, error: response.statusText });
      }
    } catch (error) {
      setContact({ ...contact, error: error.response.data });
    }
  };

  useEffect(() => {
    getContact(url);
  }, []);

  return contact;
}
