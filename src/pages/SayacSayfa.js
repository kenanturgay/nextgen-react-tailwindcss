import Counter from "../components/Counter";

const SayacSayfa = () => {
  return (
    <div className="page">
      <h1 className="page-title">
        <i className="fa-solid fa-egg fa-xs me-2"></i>
        Yumurta Sepeti
      </h1>
      <Counter sayacBaslangic={0} />
    </div>
  );
};

export default SayacSayfa;
