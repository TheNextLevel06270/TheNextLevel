export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#ffffff",
      color: "#111111",
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px"
    }}>
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "42px",
          letterSpacing: "2px",
          marginBottom: "12px"
        }}>
          THE NEXT LEVEL
        </h1>

        <p style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "32px"
        }}>
          Coiffure masculine à Villeneuve-Loubet
        </p>

        <a href="/reservation" style={{
          display: "inline-block",
          background: "#111",
          color: "#fff",
          padding: "16px 28px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Prendre rendez-vous
        </a>
      </section>

      <section style={{
        maxWidth: "900px",
        margin: "60px auto 0",
        display: "grid",
        gap: "16px"
      }}>
        <h2>Prestations</h2>

        {[
          ["Coupe Homme", "25 €", "30 min"],
          ["Coupe + Barbe", "35 €", "45 min"],
          ["Coupe Enfant -10 ans", "20 €", "30 min"],
          ["Taille et traçage de barbe", "15 €", "15 min"],
          ["Teinture de barbe + Taille de barbe", "25 €", "30 min"]
        ].map(([name, price, duration]) => (
          <div key={name} style={{
            border: "1px solid #eee",
            borderRadius: "18px",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <h3 style={{ margin: 0 }}>{name}</h3>
              <p style={{ margin: "8px 0 0", color: "#666" }}>
                {price} · {duration}
              </p>
            </div>
            <a href="/reservation" style={{
              background: "#111",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: "14px",
              textDecoration: "none"
            }}>
              Choisir
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
