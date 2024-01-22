import { useEffect, useReducer, useState } from "react";
import CounterCard from "./CounterCard";

const yumurtaInitial = {
  adet: 0,
  artisMiktari: 1,
  adetFiyat: 5,
  fiyat: 0,
};

const yumurtaReducer = (state, action) => {
  switch (action.type) {
    case "arttır":
      const yeniAdet = state.adet + state.artisMiktari;
      return { ...state, adet: yeniAdet, fiyat: state.adetFiyat * yeniAdet };

    case "azalt":
      const yeniAdet2 = state.adet - state.artisMiktari;
      return { ...state, adet: yeniAdet2, fiyat: state.adetFiyat * yeniAdet2 };

    case "yuz":
      return { ...state, adet: 100, fiyat: state.adetFiyat * 100 };

    case "artışMiktarıArttır":
      return { ...state, artisMiktari: state.artisMiktari + 1 };

    case "artışMiktarıAzalt":
      return { ...state, artisMiktari: state.artisMiktari - 1 };

    case "taneFiyatAta":
      return {
        ...state,
        adetFiyat: action.payload,
        fiyat: state.adet * action.payload,
      };

    default:
      return state;
  }
};

const Counter = (props) => {
  const [yumurta, dispatchYumurta] = useReducer(yumurtaReducer, yumurtaInitial);

  const arti1 = () => {
    dispatchYumurta({ type: "arttır" });
  };

  const eksi1 = () => {
    dispatchYumurta({ type: "azalt" });
  };

  const yuz = () => {
    dispatchYumurta({ type: "yuz" });
  };

  const artisMiktariArttir = () => {
    dispatchYumurta({ type: "artışMiktarıArttır" });
  };

  const artisMiktariAzalt = () => {
    dispatchYumurta({ type: "artışMiktarıAzalt" });
  };

  const setTaneFiyat = (yeniTaneFiyat) => {
    dispatchYumurta({ type: "taneFiyatAta", payload: yeniTaneFiyat });
  };

  return (
    <CounterCard
      counter={yumurta.adet}
      arti1={arti1}
      artisMiktari={yumurta.artisMiktari}
      eksi1={eksi1}
      yuz={yuz}
      artisMiktariArttir={artisMiktariArttir}
      artisMiktariAzalt={artisMiktariAzalt}
      fiyat={yumurta.fiyat}
      taneFiyat={yumurta.adetFiyat}
      setTaneFiyat={setTaneFiyat}
    />
  );
};

export default Counter;
