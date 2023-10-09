function Header({ location, setLocation, setAllLocations }) {
  function handleInput(e) {
    setLocation(e.target.value);
  }

  function handleOnBlur() {
    if (location.charAt(0) !== location.charAt(0).toUpperCase()) {
      console.log("Veuillez mettre la première lettre en majuscule");
    }
  }
  function createCard(location) {
    setAllLocations(location);
  }
  return (
    <div>
      <h1>What is the weather ?</h1>
      <input
        type="text"
        value={location}
        onChange={handleInput}
        onBlur={handleOnBlur}
      ></input>
      <button onClick={() => createCard(location)}>Check</button>
      {location !== "" ? <h2>{location}</h2> : null}
    </div>
  );
}

export default Header;
