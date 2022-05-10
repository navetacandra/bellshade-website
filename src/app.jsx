import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/index";

function App() {

  const JavascriptPage = {
    Welcome: lazy(() => import("./pages/javascript/000_index")),
    Basic_Pengenalan: lazy(() => import("./pages/javascript/basic/001_Pengenalan")),
    Basic_DataType: lazy(() => import("./pages/javascript/basic/002_TipeData")),
    Basic_Operator: lazy(() => import("./pages/javascript/basic/003_Operator")),
    Basic_String: lazy(() => import("./pages/javascript/basic/004_String_Manipulasi")),
    Basic_OperatorAritmatika: lazy(() => import("./pages/javascript/basic/005_Aritmatik")),
    Basic_Perulangan: lazy(() => import("./pages/javascript/basic/006_Perulangan")),
    Basic_Pengkondisian: lazy(() => import("./pages/javascript/basic/007_Pengkondisian")),
    Basic_Fungsi: lazy(() => import("./pages/javascript/basic/008_Fungsi")),
    Basic_KonsepArray: lazy(() => import("./pages/javascript/basic/009_KonsepArray")),
    Basic_ManipulasiArray: lazy(() => import("./pages/javascript/basic/010_ManipulasiArray")),
    Basic_KonsepObject: lazy(() => import("./pages/javascript/basic/011_KonsepObject")),
    Basic_ManipulasiObject: lazy(() => import("./pages/javascript/basic/012_ManipulasiObject"))
  };

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Welcome />} />

          {/* Javascript Route */}
          <Route path="/javascript" element={<JavascriptPage.Welcome />} />
          <Route path="/javascript/pengenalan" element={<JavascriptPage.Basic_Pengenalan />} />
          <Route path="/javascript/variabel-dan-tipe-data" element={<JavascriptPage.Basic_DataType />} />
          <Route path="/javascript/operator" element={<JavascriptPage.Basic_Operator />} />
          <Route path="/javascript/string-dan-manipulasi-string" element={<JavascriptPage.Basic_String />} />
          <Route path="/javascript/operator-aritmatik" element={<JavascriptPage.Basic_OperatorAritmatika />} />
          <Route path="/javascript/perulangan" element={<JavascriptPage.Basic_Perulangan />} />
          <Route path="/javascript/pengkondisian" element={<JavascriptPage.Basic_Pengkondisian />} />
          <Route path="/javascript/fungsi" element={<JavascriptPage.Basic_Fungsi />} />
          <Route path="/javascript/konsep-array" element={<JavascriptPage.Basic_KonsepArray />} />
          <Route path="/javascript/manipulasi-array" element={<JavascriptPage.Basic_ManipulasiArray />} />
          <Route path="/javascript/konsep-objek" element={<JavascriptPage.Basic_KonsepObject />} />
          <Route path="/javascript/manipulasi-objek" element={<JavascriptPage.Basic_ManipulasiObject />} />
          {/* End Javascript Route */}

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
