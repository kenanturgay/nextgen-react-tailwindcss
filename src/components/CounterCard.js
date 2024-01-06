import { useState } from "react";
import { Button } from "reactstrap";

const CounterCard = ({
  counter,
  arti1,
  artisMiktari,
  yuz,
  eksi1,
  artisMiktariArttir,
  artisMiktariAzalt,
  fiyat,
  taneFiyat,
  setTaneFiyat,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="counter-card">
      <h3>Organik Yumurta Sepeti</h3>
      <hr />
      <p>
        Counter: <strong>{counter}</strong>
      </p>
      <button className="btn btn-secondary me-1" onClick={arti1}>
        +{artisMiktari}
      </button>
      <button className="btn btn-secondary me-1" onClick={eksi1}>
        -{artisMiktari}
      </button>
      <button className="btn btn-secondary me-1" onClick={yuz}>
        100
      </button>

      <hr />
      <p>
        Artış Miktarı: <strong>{artisMiktari}</strong>
      </p>
      <Button className="me-1" onClick={artisMiktariArttir}>
        +1
      </Button>
      <Button className="me-1" onClick={artisMiktariAzalt}>
        -1
      </Button>

      <hr />
      <p>
        Tane Fiyat: <strong>{taneFiyat}</strong>
      </p>
      <Button onClick={() => setTaneFiyat(taneFiyat + 1)}>+1</Button>
      <Button onClick={() => setTaneFiyat(taneFiyat - 1)}>-1</Button>

      <hr />
      <h4>Toplam Fiyat: {fiyat} TL</h4>
    </div>
  );
};

export default CounterCard;
