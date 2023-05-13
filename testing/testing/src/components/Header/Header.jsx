const Header = (props) => {
  return (
    <>
      <h1 className="h3 mt-3 text-primary mb-2 text-center">{props.text}</h1>
      {/* <h3 className="h3 mt-3 text-primary mb-2 text-center">{props.text}</h3> */}
      {/* <button style={{ opacity: 1 }}>Click</button> */}
    </>
  );
};

export default Header;
