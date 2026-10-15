"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

    fetch(`${apiUrl}/api/health/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setDados)
      .catch((err) => setErro(err.message));
  }, []);

  if (erro) return <main><p>Erro ao chamar a API: {erro}</p></main>;
  if (!dados) return <main><p>Carregando...</p></main>;

  return (
    <main>
      <h1>Status: {dados.status}</h1>
      <ul>
        {dados.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
