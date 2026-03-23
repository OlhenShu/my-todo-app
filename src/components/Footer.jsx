export default function Footer({ activeCount }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__stats">Tasks left: {activeCount}</p>
        <small>© {year} My To-Do - demo application for practical tasks</small>
      </div>
    </footer>
  );
}
