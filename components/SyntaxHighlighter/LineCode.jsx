import { Fragment } from "react";
import { findFirst, findLast } from "../helpers_components";
import HighlightColor from "./highlight-color.json";
import styles from "@/styles/linecode.module.css";

function LineCode({ text, _break }) {
  const elem = text.split("] #").map((val, i) => {
    val =
      text.split("] #").length < 2
        ? val.slice(1)
        : i < 1
        ? `${val.slice(1)}]`
        : i === text.split("] #").length - 1
        ? val
        : `${val}]`;
    const colorName = val.slice(0, findFirst(val, "["));
    const isErrWavy = colorName.includes("err_wv_");
    const filteredColor = HighlightColor.filter(
      (color) =>
        color.code ===
        (isErrWavy ? colorName.replace("err_wv_", "") : colorName),
    )[0] || { code: "w", name: "white" };
    let Text = val.slice(findFirst(val, "["));
    const loc = findLast(Text, "]");
    Text = `${Text.slice(1, loc - Text.length)}${Text.slice(loc + 2)}`;
    return {
      color: filteredColor.color,
      text: Text,
      err_wavy: isErrWavy,
      colorName: filteredColor.name,
    };
  });
  return elem.map((val, key) => (
    <Fragment key={key}>
      <span
        style={
          val.err_wavy
            ? {
                textDecorationColor: "#dc2626",
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
              }
            : {}
        }
        className={styles[val.colorName]}
        dangerouslySetInnerHTML={{ __html: val.text }}
      />
      {_break !== "no" && key === elem.length - 1 ? <br /> : null}
    </Fragment>
  ));
}

export default LineCode;
