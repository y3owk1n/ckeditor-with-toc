import dynamic from "next/dynamic";
import { useState } from "react";
import Html from "../components/Html";
import Toc from "../components/Toc";

const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});
const Index = () => {
  const [html, setHtml] = useState("");

  return (
    <div>
      <h3>CK Editor + Level 1 & 2 TOC</h3>
      <Editor data={html} setData={setHtml} />

      <div style={{ display: "flex" }}>
        <div style={{ flex: "50%" }}>
          <Html data={html} />
        </div>

        <div style={{ flex: "50%" }}>
          <Toc data={html} />
        </div>
      </div>
    </div>
  );
};

export default Index;
