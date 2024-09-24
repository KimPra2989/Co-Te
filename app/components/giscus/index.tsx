import Script from "next/script";

export default function Giscus() {
  return (
    <div>
      <h1>My Static Page</h1>
      <div className="giscus-comments" />
      <Script
        src="https://giscus.app/client.js"
        strategy="lazyOnload"
        data-repo="KimPra2989/Co-Te"
        data-repo-id="R_kgDOM2Llvw"
        data-category="Ideas"
        data-category-id="DIC_kwDOM2Llv84CiuzZ"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        crossOrigin="anonymous"
        async
      />
    </div>
  )
}
