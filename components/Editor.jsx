import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import CKEditor from "@ckeditor/ckeditor5-react";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import React, { useEffect, useState } from "react";

const Editor = ({ data, setData }) => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);
  }, []);

  return (
    <div>
      {isLayoutReady ? (
        <CKEditor
          data={data}
          onInit={(editor) => {
            console.log("Editor is ready", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log("Editor data:", data);
            setData(data);
            // console.log("Change", { event, editor });
          }}
          onBlur={(event, editor) => {
            // console.log("Blur.", { event, editor });
          }}
          onFocus={(event, editor) => {
            // console.log("Focus.", { event, editor });
          }}
          config={{
            plugins: [
              Essentials,
              Paragraph,
              Bold,
              Italic,
              Heading,
              Indent,
              IndentBlock,
              Underline,
              Strikethrough,
              BlockQuote,
              Font,
              Alignment,
              List,
              Link,
              MediaEmbed,
              PasteFromOffice,
              Image,
              ImageStyle,
              ImageToolbar,
              ImageUpload,
              ImageResize,
              Base64UploadAdapter,
              Table,
              TableToolbar,
              TextTransformation,
            ],
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "fontSize",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "alignment",
              "outdent",
              "indent",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "|",
              "link",
              "insertTable",
              "imageUpload",
              "mediaEmbed",
              "|",
              "undo",
              "redo",
            ],
            heading: {
              options: [
                {
                  model: "heading2",
                  view: "h2",
                  title: "Heading 2 (Level 1 TOC)",
                  class: "ck-heading_heading2",
                },
                {
                  model: "heading3",
                  view: "h3",
                  title: "Heading 3 (Level 2 TOC)",
                  class: "ck-heading_heading3",
                },
                {
                  model: "paragraph",
                  view: "p",
                  title: "Paragraph",
                  class: "ck-heading_paragraph",
                },
              ],
            },
            fontSize: {
              options: [
                9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 27,
                29, 31, 33, 35,
              ],
            },
            alignment: {
              options: ["justify", "left", "center", "right"],
            },
            table: {
              contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
            image: {
              resizeUnit: "px",
              toolbar: [
                "imageStyle:alignLeft",
                "imageStyle:full",
                "imageStyle:alignRight",
                "|",
                "imageTextAlternative",
              ],
              styles: ["full", "alignLeft", "alignRight"],
            },
            typing: {
              transformations: {
                remove: [
                  "enDash",
                  "emDash",
                  "oneHalf",
                  "oneThird",
                  "twoThirds",
                  "oneForth",
                  "threeQuarters",
                ],
              },
            },
            placeholder: "Click here to start typing",
          }}
          editor={ClassicEditor}
        />
      ) : null}
    </div>
  );
};

export default Editor;
