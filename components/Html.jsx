import parse from "html-react-parser";

const Html = ({ data }) => {
  return (
    <div>
      <h2>Contents</h2>
      <div id="content">{parse(data)}</div>
    </div>
  );
};

export default Html;
