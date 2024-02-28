import Image from "next/image";
import style from "./CategoryCard.module.css";
import { Categories } from "./index";

const CategoryCard: React.FC<{ category: Categories }> = ({ category }) => {
  return (
    <>
      <div className={style.categorySection}>
        <div className={style.categoryContainer}>
          <h1 className={style.categoryName}>{category.categoryName}</h1>
          <div className={style.categoryImageContainer}>
            <Image
              className={style.categoryImage}
              src={category.categoryPicture}
              alt="Category Picture"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
