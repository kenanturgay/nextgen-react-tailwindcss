import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../hooks/useInput";
import reactJSPng from "./../assets/react-js.png";
import { GlobalActions } from "../store/reducers/globalReducer";
import { setTitleActionCreator } from "../store/actions/globalActions";

const AnaSayfa = ({ color = "black" }) => {
  const [titleInput, titleInputChange] = useInput(
    "ReactJS Kütüphanesi",
    "title"
  );

  const title = useSelector((store) => store.global.title);
  const dispatch = useDispatch();

  const setTitle = () => {
    dispatch(setTitleActionCreator(titleInput));
  };

  return (
    <div className="page">
      <h1 className="page-title">
        <i className="fa-solid fa-house fa-xs me-2"></i>
        Ana Sayfa
      </h1>
      <h2 data-testid="anasayfa-title">{title}</h2>
      <div>
        <input value={titleInput} onChange={titleInputChange} />
        <button onClick={setTitle}>Başlığı Değiştir</button>
      </div>
      <p>
        React.js, Facebook tarafından geliştirilen ve kullanıcı arayüzleri
        oluşturmak için kullanılan bir JavaScript kütüphanesidir. Web
        uygulamalarının modern ve etkileşimli arayüzlerini geliştirmek amacıyla
        tasarlanan React, özellikle büyük ve dinamik veri setlerini yönetme
        konusunda etkileyici bir performans sergiler.
      </p>
      <img src={reactJSPng} className="p-3" />
      <p>
        React.js öğrenmeye başlamak için ilk adım, temel web teknolojilerine
        olan hakimiyetinizdir. HTML, CSS ve JavaScript bilgisi, React ile daha
        etkili bir şekilde çalışmanıza yardımcı olacaktır. React, bileşen
        tabanlı bir yapıya sahiptir, yani bir uygulamayı küçük ve bağımsız
        parçalara böler. Bu nedenle, her bir bileşenin nasıl çalıştığını anlamak
        önemlidir.
      </p>
      <p>
        React.js öğrenme sürecinde, resmi React belgeleri ve çeşitli çevrimiçi
        kaynaklar önemli bir rol oynar. Kapsamlı bir şekilde belgeleri okumak ve
        örnek uygulamaları çalıştırmak, React konusundaki becerilerinizi
        geliştirmenin en etkili yollarından biridir. Ayrıca, topluluk forumları
        ve online kurslar aracılığıyla diğer React geliştiricileriyle iletişim
        kurarak deneyimlerinizi paylaşabilir ve sorularınızı sorabilirsiniz.
      </p>
      <p>
        Sonuç olarak, React.js öğrenme süreci disiplin, pratik ve sürekli
        öğrenme gerektiren bir yolculuktur. Temel web teknolojilerine sağlam bir
        temel atmak, resmi belgeleri incelemek ve toplulukla etkileşimde
        bulunmak, React.js öğrenme sürecinizi daha verimli ve etkili hale
        getirecek önemli adımlardır.
      </p>
    </div>
  );
};

export default AnaSayfa;
