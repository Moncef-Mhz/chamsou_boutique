import React from "react";
import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import Preloader from "../components/Preloader";
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Preloader />
        <Component {...pageProps} />;
      </Layout>
    </StateContext>
  );
}
