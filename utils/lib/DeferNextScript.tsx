/* eslint-disable */
import { NextScript } from "next/document";
import Script from "next/script";

function dedupe(bundles: any) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}

export default class DeferNextScript extends NextScript {
  getDynamicChunks(files: any) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString,
    } = this.context;

    return dedupe(dynamicImports).map((bundle: any) => {
      if (!bundle.file.endsWith(".js") || files.allFiles.includes(bundle.file))
        return null;

      return (
        <Script
          strategy='lazyOnload'
          defer={!isDevelopment}
          key={bundle.file}
          src={`${assetPrefix}/_next/${encodeURI(
            bundle.file,
          )}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          crossOrigin={
            this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
          }
        />
      );
    });
  }

  getScripts(files: any) {
    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString,
    } = this.context;

    const normalScripts = files.allFiles.filter((file: any) =>
      file.endsWith(".js"),
    );
    const lowPriorityScripts = buildManifest.lowPriorityFiles?.filter(
      (file: any) => file.endsWith(".js"),
    );

    return [...normalScripts, ...lowPriorityScripts].map((file: any) => (
      <Script
        strategy='lazyOnload'
        key={file}
        src={`${assetPrefix}/_next/${encodeURI(
          file,
        )}${devOnlyCacheBusterQueryString}`}
        nonce={this.props.nonce}
        defer={!isDevelopment}
        crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
      />
    ));
  }
}
