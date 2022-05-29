/* eslint-disable no-nested-ternary */
import { Fragment, ReactElement } from "react";
import styles from "@/styles/linecode.module.css";
import { findFirst, findLast } from "../helpers_components";
import HighlightColor from "./highlight-color.json";

interface LineCodeProps {
  text: string;
  /* eslint-disable react/require-default-props */
  _break?: string;
}

function LineCode(props: LineCodeProps): ReactElement {
  const { text, _break } = props;
  const elem = text.split("] #").map((val, i) => {
    // eslint-disable-next-line no-param-reassign
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
      text: Text,
      err_wavy: isErrWavy,
      colorName: filteredColor.name,
    };
  });
  return (
    <>
      {elem.map((val, key) => (
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
      ))}
    </>
  );
}

export default LineCode;
