import Nav from "./Nav";


//brukt kode fra github repo i faget 
export default function Layout({ children }) {
    return (
      <>
        <header>
          <nav>
          </nav>
        </header>
        {children}
        <footer>My-react-app 2025</footer>
      </>
    );
  }