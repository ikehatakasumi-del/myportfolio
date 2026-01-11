import Header from "../components/Header";

export default function WorksLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
