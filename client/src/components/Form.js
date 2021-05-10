function Form(props) {
  const { name, chonkyness, imagelink, biography } = props.formData;

  return (
    <div id="form-area">
      <form onSubmit={props.handleSubmit}>
        <h2>Add a Chonky Cat</h2>
        <input
          onChange={props.handleChange}
          name="name"
          type="text"
          placeholder="name"
          value={name}
        />
        <select
          onChange={props.handleChange}
          name="chonkyness"
          type="text"
          value={chonkyness}
          placeholder="chonkyness"
        >
          <option disabled>Chonkyness Level</option>
          <option>A Fine Boi</option>
          <option>He Chomnk</option>
          <option>A Heckin' Chonker</option>
          <option>Hefty Chonk</option>
          <option>Mega Chonker</option>
          <option>Oh Lawd He Comin'</option>
        </select>
        <input
          onChange={props.handleChange}
          name="imagelink"
          type="text"
          placeholder="image link"
          value={imagelink}
        />
        <textarea
          onChange={props.handleChange}
          name="biography"
          type="text"
          placeholder="biography"
          value={biography}
        ></textarea>
        <input type="submit" className="button" autoFocus />
      </form>
    </div>
  );
}

export default Form;
