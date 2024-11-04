// pages/index.js

export default function Home() {
  return (
    <div className="container">
      <h1>Hi Kiefer</h1>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: black;
        }
        h1 {
          color: limegreen;
          font-family: 'Courier New', Courier, monospace;
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
}
