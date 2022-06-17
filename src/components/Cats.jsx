import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Cats = () => {
  const [catInfo, setCatInfo] = useState([]);
  const [error, setError] = useState(null);

  const catImages = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=12"
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      console.log(data);
      setCatInfo(data);
    } catch (error) {
      console.log(error);
      setError("Oops, something went wrong!");
    }
  };

  useEffect(() => {
    const catImages = async () => {
      let catInfo = await catImages();
      catInfo = catInfo.map((cats) => {
        cats.name = faker.name.firstName();
        cats.breed = faker.animal.cat();
        cats.price = faker.commerce.price(80, 300, 0, "£");
        return cats;
      });
      setCatInfo(catInfo);
    };
    catInfo();
  }, []);

  return (
    <div className="cat-cards">
      {Cats.map((cat) => {
        return (
          <div className="cat-content">
            <img className="catPhoto" src={catImages.url} alt="" />
            <h3>{cat.name}</h3>
            <p>{cat.catType}</p>
            <h4>{cat.price}</h4>
          </div>
        );
      })}
      {error && <p>{error}</p>}
    </div>
  );
};


export default Cats;

