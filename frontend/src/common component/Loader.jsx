export default function Loader() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <strong
        style={{
          display: "flex",
          width: "100px",
          height: "100px",
          position: "relative",
        }}
        className="loader"
      ></strong>
    </section>
  );
}
