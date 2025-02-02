export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>{year} cheongyak.com © All Right Reserved.</p>
    </footer>
  );
}