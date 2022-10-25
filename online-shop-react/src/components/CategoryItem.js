import "./CategoryItem.css";

function CategoryItem() {
  return (
    <div className="category-item">
      <a>
        <img
          className="category-item__photo"
          src={"photos/pakata-goh-RDolnHtjVCY-unsplash.jpg"}
        />
        <h2 className="category-item__name">CATEGORY</h2>
      </a>
    </div>
  );
}

export default CategoryItem;
