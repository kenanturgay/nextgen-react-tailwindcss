import { useSelector } from "react-redux";

const Footer = () => {
  const title = useSelector((store) => store.global.title);
  const productLis = useSelector((store) => store.product.list);

  return (
    <footer className="p-5">
      <div className="container">
        <h2 className="mb-4">Web Geliştirme Kaynakları</h2>
        <h3>{title}</h3>
        <nav>
          <ul>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                Workintech
              </a>
              <br />
              Web yazılım eğitimi almak için mükemmel bir yer.
            </li>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                W3Schools
              </a>
              <br />
              Temel web teknolojileri öğrenmek için kapsamlı bir kaynak.
            </li>
            <li>
              <a href="https://developer.mozilla.org/" target="_blank">
                MDN Web Docs
              </a>
              <br />
              Web standartları ve geliştirme konularında detaylı bilgi sağlar.
            </li>
            <li>
              <a href="https://www.codecademy.com/" target="_blank">
                Codecademy
              </a>
              <br />
              Eğlenceli ve etkileşimli bir platformda kodlama pratiği yapma
              imkanı.
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.freecodecamp.org/" target="_blank">
                freeCodeCamp
              </a>
              <br />
              Gerçek projeler üzerinde pratik yaparak kodlama becerilerini
              geliştirme.
            </li>
            <li>
              <a href="https://reactjs.org/" target="_blank">
                React Documentation
              </a>
              <br />
              Facebook tarafından geliştirilen React kütüphanesinin resmi
              belgeleri.
            </li>
            <li>
              <a href="https://react-hook-form.com/" target="_blank">
                React Hook Form
              </a>
              <br />
              React Platformunda kolayca form üretebilmemizi sağlar.
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
