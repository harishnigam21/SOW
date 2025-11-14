import { useNavigate } from "react-router-dom";
export default function Terms({ terms, switchLanguage, screen }) {
  const navigate = useNavigate();
  return (
    <section className="terms">
      {screen.width < 420 ? (
        <>
          <h1>{terms[switchLanguage].name}</h1>
          <button onClick={() => navigate(-1)}>
            {terms[switchLanguage].btn}
          </button>
          <article className="noscrollbar">
            <p>{terms[switchLanguage].details}</p>
          </article>
          <button onClick={() => navigate(-1)}>
            {terms[switchLanguage].btn}
          </button>
        </>
      ) : (
        <strong style={{ color: "red" }}>{terms[switchLanguage].notAvailable}</strong>
      )}
    </section>
  );
}
