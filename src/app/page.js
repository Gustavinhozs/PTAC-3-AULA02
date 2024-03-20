export default async function Home() {
  const respostas = await fetch("https://back-end-ifms-rho.vercel.app/campi",{
    next:{
      revalidate: 1
    }
  });
  const campi = await respostas.json();
  return (
    <main>
      <h1>Home, joia</h1>
      {campi.map((campus) => (
        <div>
          <p>{campus.nome_campus}</p>
          <img width={400} height={300} src="https://cdn.topmidianews.com.br/upload/dn_noticia/01102014150908.jpg"></img>
        </div>
      ))}
    </main>
  );
}
