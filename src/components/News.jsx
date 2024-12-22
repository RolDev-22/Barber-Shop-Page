import data from "../../dataComentrios.json";
import { useEffect, useState } from "react";

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Obtén el comentario actual
  const currentComment = data[currentIndex];

  return (
    <>
      <div className="containerNews">
        <div className="contNew">
          <img src={currentComment.urlPicture} alt={currentComment.name} />
          <div className="info">
            <h2>{currentComment.name}</h2>
            <p>{`"${currentComment.comment}"`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
