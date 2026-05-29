const { useState } = React;

function Portfolio() {
  return (
    <main>
      <header className="header">
        <div className="header__dot" aria-hidden="true" />
        <h1 className="header__title">María Carrillo Carrasco</h1>
      </header>
      <section className="highlighted-titles">
        <article className="title-card title-card--education">
          <h2>EDUCACIÓN SOCIAL</h2>
        </article>
        <article className="title-card title-card--developer">
          <h2>SOCIAL DEVELOPER</h2>
        </article>
        <article className="title-card title-card--designer">
          <h2>DISEÑADORA WEB</h2>
        </article>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);
