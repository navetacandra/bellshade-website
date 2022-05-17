import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Welcome from "./pages/index";
import NotFound from "./pages/NotFound";

function App() {

  const JavascriptPage = {
    Welcome: lazy(() => import("./pages/javascript/000_index")),
    Basic: {
      Pengenalan: lazy(() => import("./pages/javascript/basic/001_Pengenalan")),
      TipeData: lazy(() => import("./pages/javascript/basic/002_TipeData")),
      Operator: lazy(() => import("./pages/javascript/basic/003_Operator")),
      String: lazy(() => import("./pages/javascript/basic/004_StringManipulasi")),
      OperatorAritmatika: lazy(() => import("./pages/javascript/basic/005_OperatorAritmatika")),
      Perulangan: lazy(() => import("./pages/javascript/basic/006_Perulangan")),
      Pengkondisian: lazy(() => import("./pages/javascript/basic/007_Pengkondisian")),
      Fungsi: lazy(() => import("./pages/javascript/basic/008_Fungsi")),
      KonsepArray: lazy(() => import("./pages/javascript/basic/009_KonsepArray")),
      ManipulasiArray: lazy(() => import("./pages/javascript/basic/010_ManipulasiArray")),
      KonsepObject: lazy(() => import("./pages/javascript/basic/011_KonsepObject")),
      ManipulasiObject: lazy(() => import("./pages/javascript/basic/012_ManipulasiObject")),
      StrictMode: lazy(() => import("./pages/javascript/basic/013_StrictMode"))
    }
  };

  const JavaPage = {
    Welcome: lazy(() => import("./pages/java/000_index")),
    Basic: {
      Pendahuluan: lazy(() => import("./pages/java/basic/001_Pendahuluan")),
      TipeData: lazy(() => import("./pages/java/basic/002_TipeData")),
      DataCasting: lazy(() => import("./pages/java/basic/003_DataCasting")),
      OperatorAritmatika: lazy(() => import("./pages/java/basic/004_OperatorAritmatika")),
      OperatorKomparasi: lazy(() => import("./pages/java/basic/005_OperatorKomparasi")),
      OperatorLogika: lazy(() => import("./pages/java/basic/006_OperatorLogika")),
      StrukturKontrolIfElse: lazy(() => import("./pages/java/basic/007_StrukturKontrolIfElse")),
    }
  }

  const [theme, setTheme] = useState(localStorage.getItem('color-theme') || 'light')

  return (
    <div className="bg-white dark:bg-slate-900 relative transition-all ease-out duration-200" theme={theme}>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Welcome />} />

            {/* Javascript Route */}
            <Route path="/javascript" element={<JavascriptPage.Welcome />} />
            <Route path="/javascript/basic/pengenalan" element={<JavascriptPage.Basic.Pengenalan />} />
            <Route path="/javascript/basic/variabel-dan-tipe-data" element={<JavascriptPage.Basic.TipeData />} />
            <Route path="/javascript/basic/operator" element={<JavascriptPage.Basic.Operator />} />
            <Route path="/javascript/basic/string-dan-manipulasi-string" element={<JavascriptPage.Basic.String />} />
            <Route path="/javascript/basic/operator-aritmatik" element={<JavascriptPage.Basic.OperatorAritmatika />} />
            <Route path="/javascript/basic/perulangan" element={<JavascriptPage.Basic.Perulangan />} />
            <Route path="/javascript/basic/pengkondisian" element={<JavascriptPage.Basic.Pengkondisian />} />
            <Route path="/javascript/basic/fungsi" element={<JavascriptPage.Basic.Fungsi />} />
            <Route path="/javascript/basic/konsep-array" element={<JavascriptPage.Basic.KonsepArray />} />
            <Route path="/javascript/basic/manipulasi-array" element={<JavascriptPage.Basic.ManipulasiArray />} />
            <Route path="/javascript/basic/konsep-objek" element={<JavascriptPage.Basic.KonsepObject />} />
            <Route path="/javascript/basic/manipulasi-objek" element={<JavascriptPage.Basic.ManipulasiObject />} />
            <Route path="/javascript/basic/strict-mode" element={<JavascriptPage.Basic.StrictMode />} />
            {/* End Javascript Route */}

            {/* Java Route */}
            <Route path="/java" element={<JavaPage.Welcome />} />
            <Route path="/java/basic/pendahuluan-pemrograman-dan-java" element={<JavaPage.Basic.Pendahuluan />} />
            <Route path="/java/basic/variabel-dan-tipe-data" element={<JavaPage.Basic.TipeData />} />
            <Route path="/java/basic/data-casting" element={<JavaPage.Basic.DataCasting />} />
            <Route path="/java/basic/operator-aritmatika" element={<JavaPage.Basic.OperatorAritmatika />} />
            <Route path="/java/basic/operator-komparasi" element={<JavaPage.Basic.OperatorKomparasi />} />
            <Route path="/java/basic/operator-logika" element={<JavaPage.Basic.OperatorLogika />} />
            <Route path="/java/basic/pengkondisian-if-else" element={<JavaPage.Basic.StrukturKontrolIfElse />} />
            {/* End Java Route */}


            {/* No Match Route */}
            <Route path="*" element={<NotFound />} />
            {/* End No Match Route */}

          </Routes>
        </Suspense>
        <ThemeSwitcher setTheme={setTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
