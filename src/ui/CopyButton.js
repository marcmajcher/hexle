import { useState } from "react";
import ToolTip from "./ToolTip";

export default function CopyButton({ active }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy"); // I know.
    document.body.removeChild(el);
    setCopied(true);
  }

  return active ?
    <>
      <span onClick={copy} className="material-icons share-button">share</span>
      <ToolTip active={copied} remove={() => setCopied(false)}>Copied Shareable URL to Clipboard</ToolTip>
    </>
    :
    <span className="material-icons share-button dark">share</span>;
}