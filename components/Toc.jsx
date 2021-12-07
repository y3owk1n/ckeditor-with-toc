import { useEffect, useState } from "react";

const getSiblings = (elm, withTextNodes) => {
  if (!elm || !elm.parentNode) return;

  let siblings = [...elm.parentNode[withTextNodes ? "childNodes" : "children"]],
    idx = siblings.indexOf(elm);

  siblings.before = siblings.slice(0, idx);
  siblings.after = siblings.slice(idx + 1);

  return siblings;
};

const nextUntil = function (elem, selector) {
  let siblings = [];

  elem = elem.nextElementSibling;

  while (elem) {
    if (elem.matches(selector)) break;

    siblings.push(elem);

    elem = elem.nextElementSibling;
  }

  return siblings;
};

const Toc = ({ data }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.getElementById("content");

      const h2s = html.querySelectorAll("h2");

      let fullToc = [];

      h2s.forEach((h2, index) => {
        const h2Id = `h2-${index + 1}`;
        h2.setAttribute("id", h2Id);

        const toPushElm = document.getElementById(h2Id);

        const toPushElmObj = {
          id: toPushElm.id,
          content: toPushElm.textContent,
        };

        const siblingsElm = document.getElementById(h2Id);

        const siblings = nextUntil(siblingsElm, "h2");

        let level3 = [];
        siblings
          .filter((sibling) => sibling.tagName === "H3")
          .forEach((sibling, index) => {
            const h3Id = `h3-${index + 1}`;
            sibling.setAttribute("id", h3Id);

            const toPushElm = document.getElementById(h3Id);

            const toPushElmObj = {
              id: toPushElm.id,
              content: toPushElm.textContent,
            };

            level3.push(toPushElmObj);
          });

        fullToc.push({ level1: toPushElmObj, level2: level3 });
      });
      setContent(fullToc);
    }
  }, [data]);

  return (
    <div>
      <h2>Toc</h2>
      {content && content.length > 0 ? (
        <ul>
          {content.map((c, index) => (
            <>
              <li key={index}>
                <a href={`#${c.level1.id}`}>{c.level1.content}</a>
              </li>
              {c.level2 && c.level2.length > 0 ? (
                <ul key={"last"}>
                  {c.level2.map((c2) => (
                    <li key={c2.id}>
                      <a href={`#${c2.id}`}>{c2.content}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Toc;
