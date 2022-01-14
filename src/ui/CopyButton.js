import { useState } from "react";

export default function CopyButton() {
    const [copied, setCopied] = useState

    function copy() {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy"); // I know.
      document.body.removeChild(el);
      setCopied(true);
    }
  
}