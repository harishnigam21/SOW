import { useNavigate } from "react-router-dom";
export default function Terms({ Contain, switchLanguage, screen }) {
  const navigate = useNavigate();
  return (
    <section className="terms">
      {screen.width < 420 ? (
        <>
          <h1>{Contain[switchLanguage].terms.name}</h1>
          <button onClick={() => navigate(-1)}>
            {Contain[switchLanguage].terms.btn}
          </button>
          <article
            className="noscrollbar"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {Contain[switchLanguage].terms.details.split("\\b").map((paradiv, index) => (
              <div key={`term/div/${index}`}>
                {paradiv.split("\\n").map((para, index) => (
                  <p key={`term/div/para/${index}`}>{para}</p>
                ))}
              </div>
            ))}
          </article>
          <button onClick={() => navigate(-1)}>
            {Contain[switchLanguage].terms.btn}
          </button>
        </>
      ) : (
        <strong style={{ color: "red" }}>
          {Contain[switchLanguage].terms.notAvailable}
        </strong>
      )}
    </section>
  );
}
