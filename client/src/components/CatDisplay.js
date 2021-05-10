function CatDisplay({ cats, handleDelete }) {
  // const catList = cats;
  // console.log(catList);
  console.log(cats);
  // if (catList === undefined) {
  //   return null;
  // }

  const catInfo = cats.map((cat, index) => {
    return (
      <div key={index} class="cat-info">
        <h3>Cat Name: {cat.name}</h3>
        <p class="chonkyness">{cat.chonkyness}</p>
        <p class="biography">{cat.biography}</p>
        <img src={cat.imagelink} alt="" class="cat-image" />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(cat._id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  // console.log(caInfo);

  // console.log(catList);

  return <div id="cat-display">{catInfo}</div>;
}

export default CatDisplay;
