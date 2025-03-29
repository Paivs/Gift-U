import Head from 'next/head';
import PuzzleBoard from '../components/PuzzleBoard';

export default function Home() {
  const numRows = 4; // Defina o número de linhas
  const numCols = 5; // Defina o número de colunas

  return (
    <div className={"container"}>
      <Head>
        <title>Quebra-cabeça</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <h1 className={"title"}>Quebra-cabeça</h1>
        <p className={"description"}>
          Monte o Quebra-cabeça no menor tempo possível!
        </p>

        <PuzzleBoard numRows={numRows} numCols={numCols} imageUrl="/foto.png"/>
      </main>
    </div>
  );
}