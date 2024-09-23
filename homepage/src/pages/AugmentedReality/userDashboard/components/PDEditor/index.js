/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the PDEditor
import PDEditorRoot from "./PDEditorRoot";

function PDEditor(props) {
  return (
    <PDEditorRoot>
      <ReactQuill theme="snow" {...props} />
    </PDEditorRoot>
  );
}

export default PDEditor;
