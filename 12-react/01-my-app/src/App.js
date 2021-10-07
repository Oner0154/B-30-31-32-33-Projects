import React from "react";
import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import Props from "./components/props/Props";
import ExternalStyle from "./components/style/ExternalStyle";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";

function App() {
  return (
    <div>
      {/*
       
     Merhaba Dünya (App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle />
 
      <Clock1 />

      

      <Props ad="Ziya" soyad="Sarı" />
      <Props ad="Ali" soyad="Kara" />
      <Props ad="Ayşe" soyad="Pembe" />
      <Props ad="Hakan" soyad="Mavi" />

      */}

      <Clock2 yaziRengi="#FFFFFF" zeminRengi="#000000" />
    </div>
  );
}

export default App;
