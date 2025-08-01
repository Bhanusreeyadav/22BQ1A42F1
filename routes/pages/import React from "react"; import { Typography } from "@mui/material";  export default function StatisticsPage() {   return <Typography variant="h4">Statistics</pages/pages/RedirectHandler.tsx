import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RedirectHandler() {
  const { shortcode } = useParams();

  useEffect(() => {
    if (!shortcode) return;

    axios
      .get(`/api/resolve/${shortcode}`)
      .then((res) => {
        window.location.href = res.data.originalUrl;
      })
      .catch(() => {
        window.location.href = "/404";
      });
  }, [shortcode]);

  return <p>Redirecting...</p>;
}
