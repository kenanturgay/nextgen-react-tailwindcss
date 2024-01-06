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
      <div className="yumurta-sepeti"></div>
      <div className="yumurta-form">
        <h3>Organik Yumurta Sepeti</h3>
        <hr />
        <div className="d-flex justify-content-between align-items-center py-3">
          <div>
            Yumurta Adedi: <strong className="fs-2">{counter}</strong>
          </div>
          <div>
            <button className="btn btn-secondary me-1" onClick={arti1}>
              +{artisMiktari}
            </button>
            <button className="btn btn-secondary me-1" onClick={eksi1}>
              -{artisMiktari}
            </button>
            <button className="btn btn-secondary me-1" onClick={yuz}>
              100
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center py-3">
          <div>
            Adet Artış Miktarı: <strong className="fs-2">{artisMiktari}</strong>
          </div>
          <div>
            <Button className="me-1" onClick={artisMiktariArttir}>
              +1
            </Button>
            <Button className="me-1" onClick={artisMiktariAzalt}>
              -1
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center py-3">
          <div>
            Tane Fiyat: <strong className="fs-2">{taneFiyat}</strong> TL
          </div>
          <div>
            <Button
              className="me-1"
              onClick={() => setTaneFiyat(taneFiyat + 1)}
            >
              +1
            </Button>
            <Button onClick={() => setTaneFiyat(taneFiyat - 1)}>-1</Button>
          </div>
        </div>

        <hr />
        <h4>
          Toplam Fiyat: <strong className="color-orange fs-1"> {fiyat}</strong>{" "}
          TL
        </h4>
      </div>
    </div>
  );
};

export default CounterCard;
