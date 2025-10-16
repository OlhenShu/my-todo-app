export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <small>© {year} My To-Do — demo application</small>
    </footer>
  );
}