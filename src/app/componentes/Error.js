import React from 'react';

export default function InternalError() {
  return (
    <main>
      <h1>500 Internal Server Error</h1>
      <p>Oops, something went wrong! The page you requested could not be found. Please try again later or contact our support team for assistance.</p>
    </main>
  );
}

export default async function Home() {
  try {
    const respostas = await fetch("https://back-end-ifms-rho.vercel.app/campi", {
      next: {
        revalidate: 1
      }
    });

    if (!respostas.ok) {
      throw new Error(`HTTP error! status: ${respostas.status}`);
    }

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
  } catch (error) {
    console.error('Error fetching data:', error);
    return <InternalError />;
  }
}