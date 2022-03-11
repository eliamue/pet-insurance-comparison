import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <body>
          Home!!
        </body>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
