"use client";
// style
import "./advicebox.css";
// hooks
import { useState, useEffect } from "react";
// assets
import Image from "next/image";
import lines from "@/public/pattern-divider-desktop.svg";
import dice from "@/public/icon-dice.svg";

export default function AdviceBox() {
  let [advice, setAdvice] = useState("");
  let [loading, setLoading] = useState(false);
  let getAdvice = async () => {
    setLoading(true);
    await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((res) => {
        setAdvice(res.slip);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <>
      <article>
        <section>
          <h3>{loading ? "loading..." : `ADVICE #${advice.id}`}</h3>
          <p>{!loading ? advice.advice : "loading..."}</p>
          <div>
            <Image src={lines} alt="img" />
          </div>
        </section>
        <button id="btn" onClick={getAdvice}>
          <Image src={dice} alt="img" />
        </button>
      </article>
    </>
  );
}
