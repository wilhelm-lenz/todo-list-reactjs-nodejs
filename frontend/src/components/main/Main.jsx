import "./Main.scss";

const Main = ({ children }) => {
  return (
    <main className="main">
      <section className="section-todos container">{children}</section>
    </main>
  );
};

export default Main;
