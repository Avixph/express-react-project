function CatDisplay({ cats, handleDelete }) {
  // const catList = cats;
  // console.log(catList);
  console.log(cats);
  // if (catList === undefined) {
  //   return null;
  // }

  const catInfo = cats.map((cat, index) => {
    return (
      <div key={index} className="cat-info">
        <h3>Cat Name: {cat.name}</h3>
        <p className="chonkyness">{cat.chonkyness}</p>
        <p className="biography">{cat.biography}</p>
        <img src={cat.imagelink} alt="" className="cat-image" />
        <input
          type="text"
          className="button"
          defaultValue="Delete"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(cat._id);
          }}
        />
      </div>
    );
  });

  return <div id="cat-display">{catInfo}</div>;
}

export default CatDisplay;
