import "./Categories.css";
import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <div className="categories">
      <h1 className="categories__header">Categories</h1>
      <div className="categories__elements">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}

export default Categories;
