import { findFirst, findLast } from "./helpers_components";

export default function TextStyle({ Text = "" }) {
  const fontStyle = [
    {
      code: "mark_code",
      element: (text) => `<code class='mark-text'>${text}</code>`,
    },
    {
      code: "italic",
      element: (text) => `<i>${text}</i>`,
    },
  ];

  const ModifiedText = Text.split("#").map((val) => {
    const StyleCode = val.slice(0, findFirst(val, "["));
    const FilteredStyle = fontStyle.filter(
      (font) => font.code === StyleCode,
    )[0] || { code: "", element: (text) => text };
    const textTemp = val.slice(findFirst(val, "[") + 1);
    const endText = findLast(textTemp, "]") - textTemp.length;

    let ind = Math.floor(textTemp.length / Math.abs(endText + 1));
    ind = ind >= Infinity ? 0 : ind;
    ind = !Number.isNaN(ind) ? ind : 0;

    const Is =
      !!FilteredStyle.code && ind < 1 ? "" : textTemp.slice(endText + 1);

    return `${FilteredStyle.element(textTemp.slice(0, endText))}${Is}`;
  }).join``;

  return <span dangerouslySetInnerHTML={{ __html: ModifiedText }} />;
}
