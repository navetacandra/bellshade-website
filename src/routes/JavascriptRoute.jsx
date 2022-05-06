import React, { Fragment, lazy } from 'react'
import { Route } from 'react-router-dom'

function JavascriptRoute() {
    const JavascriptPage = {
        Welcome: lazy(() => import("../pages/javascript/000_index")),
        Pengenalan: lazy(() => import("../pages/javascript/001_Pengenalan")),
        DataType: lazy(() => import("../pages/javascript/002_TipeData")),
        Operator: lazy(() => import("../pages/javascript/003_Operator")),
        OperatorAritmatika: lazy(() => import("../pages/javascript/005_Aritmatik")),
        Perulangan: lazy(() => import("../pages/javascript/006_Perulangan")),
        Pengkondisian: lazy(() => import("../pages/javascript/007_Pengkondisian")),
        Fungsi: lazy(() => import("../pages/javascript/008_Fungsi")),
        KonsepArray: lazy(() => import("../pages/javascript/009_KonsepArray")),
        ManipulasiArray: lazy(() => import("../pages/javascript/010_ManipulasiArray")),
        KonsepObject: lazy(() => import("../pages/javascript/011_KonsepObject")),
        ManipulasiObject: lazy(() => import("../pages/javascript/012_ManipulasiObject"))
    };
    return (
        <Fragment>
            <Route path="/javascript" element={<JavascriptPage.Welcome />} />
            <Route path="/javascript/pengenalan" element={<JavascriptPage.Pengenalan />} />
            <Route path="/javascript/variabel-dan-tipe-data" element={<JavascriptPage.DataType />} />
            <Route path="/javascript/operator" element={<JavascriptPage.Operator />} />
            <Route path="/javascript/operator-aritmatik" element={<JavascriptPage.OperatorAritmatika />} />
            <Route path="/javascript/perulangan" element={<JavascriptPage.Perulangan />} />
            <Route path="/javascript/pengkondisian" element={<JavascriptPage.Pengkondisian />} />
            <Route path="/javascript/fungsi" element={<JavascriptPage.Fungsi />} />
            <Route path="/javascript/konsep-array" element={<JavascriptPage.KonsepArray />} />
            <Route path="/javascript/manipulasi-array" element={<JavascriptPage.ManipulasiArray />} />
            <Route path="/javascript/konsep-objek" element={<JavascriptPage.KonsepObject />} />
            <Route path="/javascript/manipulasi-objek" element={<JavascriptPage.ManipulasiObject />} />
        </Fragment>
    )
}

export default JavascriptRoute