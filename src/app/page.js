export default async function Home() {
  try {
    const respostas = await fetch("https://back-end-ifms-rho.vercel.app/campi", {
      next: {
        revalidate: 1,
      },
    });

    if (!respostas.ok) {
      return (
        <main>
          <h1>Erro 505: O servidor está ocupado assistindo Netflix. Tente novamente depois do episódio!</h1>
        </main>
      );
    }

    const campi = await respostas.json();

    return (
      <main>
        <h1>Página Home</h1>
        {campi.map((campus) => (
          <div key={campus.id}>
            <p>{campus.nome_campus}</p>
            <img
              width={400}
              height={300}
              src="https://cdn.topmidianews.com.br/upload/dn_noticia/01102014150908.jpg"
              alt={`Imagem do campus ${campus.nome_campus}`}
            />
          </div>
        ))}
      </main>
    );
  } catch (error) {
   
    return (
      <main>
        <h1>Erro 505: O servidor está ocupado assistindo Netflix. Tente novamente depois do episódio!</h1>
      </main>
    );
  }
}
