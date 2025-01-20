import { Link } from "react-router";
import styles from "./categoryStyle.module.css";
import { ICategory } from "@customTypes/index";
const { category, categoryImg, categoryTitle } = styles;


const Category = ({ img, prefix, title }: ICategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
