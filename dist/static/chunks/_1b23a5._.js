(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_1b23a5._.js", {

"[project]/src/app/hooks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAppDispatch": (()=>useAppDispatch),
    "useAppSelector": (()=>useAppSelector),
    "useAppStore": (()=>useAppStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].withTypes();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$data$2f$dataSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/data/dataSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$lazy$2d$load$2d$image$2d$component$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-lazy-load-image-component/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const gitlinkbuild = (data)=>{
    if (!data) return null;
    if (Array.isArray(data) && data.length) {
        return data.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link,
                className: " flex flex-end text-text-info transition-colors duration-[250ms] hover:text-text-default",
                target: "_blank",
                rel: "nofollow noopener noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faDesktop"],
                    fixedWidth: true,
                    className: "text-[20px]"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, index, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this));
    }
    if (typeof data === "string") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: data,
            className: " flex flex-end text-text-info transition-colors duration-[250ms] hover:text-text-default ",
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faDesktop"],
                fixedWidth: true,
                className: "text-[20px]"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return null;
};
function Home() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { projects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Home.useAppSelector": (state)=>state.data
    }["Home.useAppSelector"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$data$2f$dataSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])());
        }
    }["Home.useEffect"], [
        dispatch
    ]);
    console.log(projects);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " flex flex-wrap w-full pr-[25px] md:pr-0  ",
        children: projects.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex flex-nowrap relative w-full ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " font-bigShoulders sticky top-0 flex flex-none items-center z-10 w-[45px] h-[185px] pt-[40px] pb-[20px] text-[24px] md:pt-[12px] md:pb-0 ",
                        children: item.years
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " flex flex-wrap flex-[1_1_auto] gap-[15px] md:gap-0 ",
                        children: item.protfolio_list.filter((card)=>!card.hidden).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " protfolio-card flex flex-wrap flex-none mb-[15px] md:mb-0  ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "protfolio-card-padding relative w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " relative w-full h-full flex flex-wrap flex-col ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "image-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$lazy$2d$load$2d$image$2d$component$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyLoadImage"], {
                                                    width: "720",
                                                    height: "480",
                                                    src: `https://neoyeh.github.io/neo-portfolio/dist/${card.image}`,
                                                    alt: card.project_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full flex flex-wrap p-[20px_15px_50px] items-start flex-[1_1_auto]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-text-dafault pb-[4px]",
                                                                children: card.project_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 29
                                                            }, this),
                                                            card.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-text-info",
                                                                dangerouslySetInnerHTML: {
                                                                    __html: card.text
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 27
                                                    }, this),
                                                    (card.link_live || card.link_github) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: " flex w-full pt-[15px] gap-[12px] ",
                                                        children: [
                                                            card.link_live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: card.link_live,
                                                                className: " flex flex-end text-text-info transition-colors duration-[250ms] hover:text-text-default ",
                                                                target: "_blank",
                                                                rel: "nofollow noopener noreferrer",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faDesktop"],
                                                                    fixedWidth: true,
                                                                    className: " text-[20px] "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 33
                                                            }, this),
                                                            gitlinkbuild(card.link_github)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 21
                                }, this)
                            }, card.project_name, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 79,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                ]
            }, item.years, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Home, "wshX5mwxpLMpo/zjImXAoo0JZwY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/react-lazy-load-image-component/build/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(()=>{
    var e = {
        296: (e, t, r)=>{
            var o = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt, s = "object" == typeof r.g && r.g && r.g.Object === Object && r.g, l = "object" == typeof self && self && self.Object === Object && self, a = s || l || Function("return this")(), f = Object.prototype.toString, p = Math.max, y = Math.min, b = function() {
                return a.Date.now();
            };
            function d(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function h(e) {
                if ("number" == typeof e) return e;
                if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e;
                    }(e) && "[object Symbol]" == f.call(e);
                }(e)) return NaN;
                if (d(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = d(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(o, "");
                var r = i.test(e);
                return r || c.test(e) ? u(e.slice(2), r ? 2 : 8) : n.test(e) ? NaN : +e;
            }
            e.exports = function(e, t, r) {
                var o, n, i, c, u, s, l = 0, a = !1, f = !1, v = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                function m(t) {
                    var r = o, i = n;
                    return o = n = void 0, l = t, c = e.apply(i, r);
                }
                function O(e) {
                    var r = e - s;
                    return void 0 === s || r >= t || r < 0 || f && e - l >= i;
                }
                function w() {
                    var e = b();
                    if (O(e)) return g(e);
                    u = setTimeout(w, function(e) {
                        var r = t - (e - s);
                        return f ? y(r, i - (e - l)) : r;
                    }(e));
                }
                function g(e) {
                    return u = void 0, v && o ? m(e) : (o = n = void 0, c);
                }
                function P() {
                    var e = b(), r = O(e);
                    if (o = arguments, n = this, s = e, r) {
                        if (void 0 === u) return function(e) {
                            return l = e, u = setTimeout(w, t), a ? m(e) : c;
                        }(s);
                        if (f) return u = setTimeout(w, t), m(s);
                    }
                    return void 0 === u && (u = setTimeout(w, t)), c;
                }
                return t = h(t) || 0, d(r) && (a = !!r.leading, i = (f = "maxWait" in r) ? p(h(r.maxWait) || 0, t) : i, v = "trailing" in r ? !!r.trailing : v), P.cancel = function() {
                    void 0 !== u && clearTimeout(u), l = 0, o = s = n = u = void 0;
                }, P.flush = function() {
                    return void 0 === u ? c : g(b());
                }, P;
            };
        },
        96: (e, t, r)=>{
            var o = "Expected a function", n = NaN, i = "[object Symbol]", c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, a = parseInt, f = "object" == typeof r.g && r.g && r.g.Object === Object && r.g, p = "object" == typeof self && self && self.Object === Object && self, y = f || p || Function("return this")(), b = Object.prototype.toString, d = Math.max, h = Math.min, v = function() {
                return y.Date.now();
            };
            function m(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function O(e) {
                if ("number" == typeof e) return e;
                if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e;
                    }(e) && b.call(e) == i;
                }(e)) return n;
                if (m(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = m(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(c, "");
                var r = s.test(e);
                return r || l.test(e) ? a(e.slice(2), r ? 2 : 8) : u.test(e) ? n : +e;
            }
            e.exports = function(e, t, r) {
                var n = !0, i = !0;
                if ("function" != typeof e) throw new TypeError(o);
                return m(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), function(e, t, r) {
                    var n, i, c, u, s, l, a = 0, f = !1, p = !1, y = !0;
                    if ("function" != typeof e) throw new TypeError(o);
                    function b(t) {
                        var r = n, o = i;
                        return n = i = void 0, a = t, u = e.apply(o, r);
                    }
                    function w(e) {
                        var r = e - l;
                        return void 0 === l || r >= t || r < 0 || p && e - a >= c;
                    }
                    function g() {
                        var e = v();
                        if (w(e)) return P(e);
                        s = setTimeout(g, function(e) {
                            var r = t - (e - l);
                            return p ? h(r, c - (e - a)) : r;
                        }(e));
                    }
                    function P(e) {
                        return s = void 0, y && n ? b(e) : (n = i = void 0, u);
                    }
                    function j() {
                        var e = v(), r = w(e);
                        if (n = arguments, i = this, l = e, r) {
                            if (void 0 === s) return function(e) {
                                return a = e, s = setTimeout(g, t), f ? b(e) : u;
                            }(l);
                            if (p) return s = setTimeout(g, t), b(l);
                        }
                        return void 0 === s && (s = setTimeout(g, t)), u;
                    }
                    return t = O(t) || 0, m(r) && (f = !!r.leading, c = (p = "maxWait" in r) ? d(O(r.maxWait) || 0, t) : c, y = "trailing" in r ? !!r.trailing : y), j.cancel = function() {
                        void 0 !== s && clearTimeout(s), a = 0, n = l = i = s = void 0;
                    }, j.flush = function() {
                        return void 0 === s ? u : P(v());
                    }, j;
                }(e, t, {
                    leading: n,
                    maxWait: t,
                    trailing: i
                });
            };
        },
        703: (e, t, r)=>{
            "use strict";
            var o = r(414);
            function n() {}
            function i() {}
            i.resetWarningCache = n, e.exports = function() {
                function e(e, t, r, n, i, c) {
                    if (c !== o) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u;
                    }
                }
                function t() {
                    return e;
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: n
                };
                return r.PropTypes = r, r;
            };
        },
        697: (e, t, r)=>{
            e.exports = r(703)();
        },
        414: (e)=>{
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        }
    }, t = {};
    function r(o) {
        var n = t[o];
        if (void 0 !== n) return n.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o](i, i.exports, r), i.exports;
    }
    r.n = (e)=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }), t;
    }, r.d = (e, t)=>{
        for(var o in t)r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        });
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), r.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), r.r = (e)=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    };
    var o = {};
    (()=>{
        "use strict";
        r.r(o), r.d(o, {
            LazyLoadComponent: ()=>Y,
            LazyLoadImage: ()=>ne,
            trackWindowScroll: ()=>D
        });
        const e = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var t = r.n(e), n = r(697);
        function i() {
            return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
        }
        function c(e) {
            return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, c(e);
        }
        function u(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), r.push.apply(r, o);
            }
            return r;
        }
        function s(e, t, r) {
            return (t = a(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        function l(e, t) {
            for(var r = 0; r < t.length; r++){
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, a(o.key), o);
            }
        }
        function a(e) {
            var t = function(e, t) {
                if ("object" !== c(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(e, "string");
                    if ("object" !== c(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
            }(e);
            return "symbol" === c(t) ? t : String(t);
        }
        function f(e, t) {
            return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, f(e, t);
        }
        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, p(e);
        }
        var y = function(e) {
            e.forEach(function(e) {
                e.isIntersecting && e.target.onVisible();
            });
        }, b = {}, d = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && f(e, t);
            }(h, e);
            var r, o, n, a, d = (n = h, a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                } catch (e) {
                    return !1;
                }
            }(), function() {
                var e, t = p(n);
                if (a) {
                    var r = p(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                } else e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === c(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }(this, e);
            });
            function h(e) {
                var t;
                if (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, h), (t = d.call(this, e)).supportsObserver = !e.scrollPosition && e.useIntersectionObserver && i(), t.supportsObserver) {
                    var r = e.threshold;
                    t.observer = function(e) {
                        return b[e] = b[e] || new IntersectionObserver(y, {
                            rootMargin: e + "px"
                        }), b[e];
                    }(r);
                }
                return t;
            }
            return r = h, o = [
                {
                    key: "componentDidMount",
                    value: function() {
                        this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
                    }
                },
                {
                    key: "componentWillUnmount",
                    value: function() {
                        this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
                    }
                },
                {
                    key: "componentDidUpdate",
                    value: function() {
                        this.supportsObserver || this.updateVisibility();
                    }
                },
                {
                    key: "getPlaceholderBoundingBox",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, t = this.placeholder.getBoundingClientRect(), r = this.placeholder.style, o = parseInt(r.getPropertyValue("margin-left"), 10) || 0, n = parseInt(r.getPropertyValue("margin-top"), 10) || 0;
                        return {
                            bottom: e.y + t.bottom + n,
                            left: e.x + t.left + o,
                            right: e.x + t.right + o,
                            top: e.y + t.top + n
                        };
                    }
                },
                {
                    key: "isPlaceholderInViewport",
                    value: function() {
                        if ("undefined" == typeof window || !this.placeholder) return !1;
                        var e = this.props, t = e.scrollPosition, r = e.threshold, o = this.getPlaceholderBoundingBox(t), n = t.y + window.innerHeight, i = t.x, c = t.x + window.innerWidth, u = t.y;
                        return Boolean(u - r <= o.bottom && n + r >= o.top && i - r <= o.right && c + r >= o.left);
                    }
                },
                {
                    key: "updateVisibility",
                    value: function() {
                        this.isPlaceholderInViewport() && this.props.onVisible();
                    }
                },
                {
                    key: "render",
                    value: function() {
                        var e = this, r = this.props, o = r.className, n = r.height, i = r.placeholder, c = r.style, l = r.width;
                        if (i && "function" != typeof i.type) return t().cloneElement(i, {
                            ref: function(t) {
                                return e.placeholder = t;
                            }
                        });
                        var a = function(e) {
                            for(var t = 1; t < arguments.length; t++){
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? u(Object(r), !0).forEach(function(t) {
                                    s(e, t, r[t]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                });
                            }
                            return e;
                        }({
                            display: "inline-block"
                        }, c);
                        return void 0 !== l && (a.width = l), void 0 !== n && (a.height = n), t().createElement("span", {
                            className: o,
                            ref: function(t) {
                                return e.placeholder = t;
                            },
                            style: a
                        }, i);
                    }
                }
            ], o && l(r.prototype, o), Object.defineProperty(r, "prototype", {
                writable: !1
            }), h;
        }(t().Component);
        d.propTypes = {
            onVisible: n.PropTypes.func.isRequired,
            className: n.PropTypes.string,
            height: n.PropTypes.oneOfType([
                n.PropTypes.number,
                n.PropTypes.string
            ]),
            placeholder: n.PropTypes.element,
            threshold: n.PropTypes.number,
            useIntersectionObserver: n.PropTypes.bool,
            scrollPosition: n.PropTypes.shape({
                x: n.PropTypes.number.isRequired,
                y: n.PropTypes.number.isRequired
            }),
            width: n.PropTypes.oneOfType([
                n.PropTypes.number,
                n.PropTypes.string
            ])
        }, d.defaultProps = {
            className: "",
            placeholder: null,
            threshold: 100,
            useIntersectionObserver: !0
        };
        const h = d;
        var v = r(296), m = r.n(v), O = r(96), w = r.n(O), g = function(e) {
            var t = getComputedStyle(e, null);
            return t.getPropertyValue("overflow") + t.getPropertyValue("overflow-y") + t.getPropertyValue("overflow-x");
        };
        const P = function(e) {
            if (!(e instanceof HTMLElement)) return window;
            for(var t = e; t && t instanceof HTMLElement;){
                if (/(scroll|auto)/.test(g(t))) return t;
                t = t.parentNode;
            }
            return window;
        };
        function j(e) {
            return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, j(e);
        }
        var T = [
            "delayMethod",
            "delayTime"
        ];
        function S() {
            return S = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), S.apply(this, arguments);
        }
        function E(e, t) {
            for(var r = 0; r < t.length; r++){
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (n = function(e, t) {
                    if ("object" !== j(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(e, "string");
                        if ("object" !== j(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(o.key), "symbol" === j(n) ? n : String(n)), o);
            }
            var n;
        }
        function L(e, t) {
            return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, L(e, t);
        }
        function _(e, t) {
            if (t && ("object" === j(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return I(e);
        }
        function I(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function x(e) {
            return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, x(e);
        }
        var R = function() {
            return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
        }, k = function() {
            return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
        };
        const D = function(e) {
            var r = function(r) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && L(e, t);
                }(l, r);
                var o, n, c, u, s = (c = l, u = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }(), function() {
                    var e, t = x(c);
                    if (u) {
                        var r = x(this).constructor;
                        e = Reflect.construct(t, arguments, r);
                    } else e = t.apply(this, arguments);
                    return _(this, e);
                });
                function l(e) {
                    var r;
                    if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, l), (r = s.call(this, e)).useIntersectionObserver = e.useIntersectionObserver && i(), r.useIntersectionObserver) return _(r);
                    var o = r.onChangeScroll.bind(I(r));
                    return "debounce" === e.delayMethod ? r.delayedScroll = m()(o, e.delayTime) : "throttle" === e.delayMethod && (r.delayedScroll = w()(o, e.delayTime)), r.state = {
                        scrollPosition: {
                            x: R(),
                            y: k()
                        }
                    }, r.baseComponentRef = t().createRef(), r;
                }
                return o = l, (n = [
                    {
                        key: "componentDidMount",
                        value: function() {
                            this.addListeners();
                        }
                    },
                    {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeListeners();
                        }
                    },
                    {
                        key: "componentDidUpdate",
                        value: function() {
                            "undefined" == typeof window || this.useIntersectionObserver || P(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners());
                        }
                    },
                    {
                        key: "addListeners",
                        value: function() {
                            "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = P(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, {
                                passive: !0
                            }), window.addEventListener("resize", this.delayedScroll, {
                                passive: !0
                            }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, {
                                passive: !0
                            }));
                        }
                    },
                    {
                        key: "removeListeners",
                        value: function() {
                            "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
                        }
                    },
                    {
                        key: "onChangeScroll",
                        value: function() {
                            this.useIntersectionObserver || this.setState({
                                scrollPosition: {
                                    x: R(),
                                    y: k()
                                }
                            });
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var r = this.props, o = (r.delayMethod, r.delayTime, function(e, t) {
                                if (null == e) return {};
                                var r, o, n = function(e, t) {
                                    if (null == e) return {};
                                    var r, o, n = {}, i = Object.keys(e);
                                    for(o = 0; o < i.length; o++)r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for(o = 0; o < i.length; o++)r = i[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                                }
                                return n;
                            }(r, T)), n = this.useIntersectionObserver ? null : this.state.scrollPosition;
                            return t().createElement(e, S({
                                forwardRef: this.baseComponentRef,
                                scrollPosition: n
                            }, o));
                        }
                    }
                ]) && E(o.prototype, n), Object.defineProperty(o, "prototype", {
                    writable: !1
                }), l;
            }(t().Component);
            return r.propTypes = {
                delayMethod: n.PropTypes.oneOf([
                    "debounce",
                    "throttle"
                ]),
                delayTime: n.PropTypes.number,
                useIntersectionObserver: n.PropTypes.bool
            }, r.defaultProps = {
                delayMethod: "throttle",
                delayTime: 300,
                useIntersectionObserver: !0
            }, r;
        };
        function C(e) {
            return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, C(e);
        }
        function B(e, t) {
            for(var r = 0; r < t.length; r++){
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (n = function(e, t) {
                    if ("object" !== C(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(e, "string");
                        if ("object" !== C(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(o.key), "symbol" === C(n) ? n : String(n)), o);
            }
            var n;
        }
        function M(e, t) {
            return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, M(e, t);
        }
        function N(e) {
            return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, N(e);
        }
        var V = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && M(e, t);
            }(u, e);
            var r, o, n, i, c = (n = u, i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                } catch (e) {
                    return !1;
                }
            }(), function() {
                var e, t = N(n);
                if (i) {
                    var r = N(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                } else e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === C(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }(this, e);
            });
            function u(e) {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, u), c.call(this, e);
            }
            return r = u, (o = [
                {
                    key: "render",
                    value: function() {
                        return t().createElement(h, this.props);
                    }
                }
            ]) && B(r.prototype, o), Object.defineProperty(r, "prototype", {
                writable: !1
            }), u;
        }(t().Component);
        const W = D(V);
        function z(e) {
            return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, z(e);
        }
        function $(e, t) {
            for(var r = 0; r < t.length; r++){
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (n = function(e, t) {
                    if ("object" !== z(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(e, "string");
                        if ("object" !== z(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(o.key), "symbol" === z(n) ? n : String(n)), o);
            }
            var n;
        }
        function U(e, t) {
            return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, U(e, t);
        }
        function F(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function q(e) {
            return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, q(e);
        }
        var H = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && U(e, t);
            }(s, e);
            var r, o, n, c, u = (n = s, c = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                } catch (e) {
                    return !1;
                }
            }(), function() {
                var e, t = q(n);
                if (c) {
                    var r = q(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                } else e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === z(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return F(e);
                }(this, e);
            });
            function s(e) {
                var t;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, s), t = u.call(this, e);
                var r = e.afterLoad, o = e.beforeLoad, n = e.scrollPosition, i = e.visibleByDefault;
                return t.state = {
                    visible: i
                }, i && (o(), r()), t.onVisible = t.onVisible.bind(F(t)), t.isScrollTracked = Boolean(n && Number.isFinite(n.x) && n.x >= 0 && Number.isFinite(n.y) && n.y >= 0), t;
            }
            return r = s, (o = [
                {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        t.visible !== this.state.visible && this.props.afterLoad();
                    }
                },
                {
                    key: "onVisible",
                    value: function() {
                        this.props.beforeLoad(), this.setState({
                            visible: !0
                        });
                    }
                },
                {
                    key: "render",
                    value: function() {
                        if (this.state.visible) return this.props.children;
                        var e = this.props, r = e.className, o = e.delayMethod, n = e.delayTime, c = e.height, u = e.placeholder, s = e.scrollPosition, l = e.style, a = e.threshold, f = e.useIntersectionObserver, p = e.width;
                        return this.isScrollTracked || f && i() ? t().createElement(h, {
                            className: r,
                            height: c,
                            onVisible: this.onVisible,
                            placeholder: u,
                            scrollPosition: s,
                            style: l,
                            threshold: a,
                            useIntersectionObserver: f,
                            width: p
                        }) : t().createElement(W, {
                            className: r,
                            delayMethod: o,
                            delayTime: n,
                            height: c,
                            onVisible: this.onVisible,
                            placeholder: u,
                            style: l,
                            threshold: a,
                            width: p
                        });
                    }
                }
            ]) && $(r.prototype, o), Object.defineProperty(r, "prototype", {
                writable: !1
            }), s;
        }(t().Component);
        H.propTypes = {
            afterLoad: n.PropTypes.func,
            beforeLoad: n.PropTypes.func,
            useIntersectionObserver: n.PropTypes.bool,
            visibleByDefault: n.PropTypes.bool
        }, H.defaultProps = {
            afterLoad: function() {
                return {};
            },
            beforeLoad: function() {
                return {};
            },
            useIntersectionObserver: !0,
            visibleByDefault: !1
        };
        const Y = H;
        function X(e) {
            return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, X(e);
        }
        var A = [
            "afterLoad",
            "beforeLoad",
            "delayMethod",
            "delayTime",
            "effect",
            "placeholder",
            "placeholderSrc",
            "scrollPosition",
            "threshold",
            "useIntersectionObserver",
            "visibleByDefault",
            "wrapperClassName",
            "wrapperProps"
        ];
        function G(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), r.push.apply(r, o);
            }
            return r;
        }
        function J(e) {
            for(var t = 1; t < arguments.length; t++){
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(r), !0).forEach(function(t) {
                    K(e, t, r[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
            }
            return e;
        }
        function K(e, t, r) {
            return (t = ee(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        function Q() {
            return Q = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), Q.apply(this, arguments);
        }
        function Z(e, t) {
            for(var r = 0; r < t.length; r++){
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ee(o.key), o);
            }
        }
        function ee(e) {
            var t = function(e, t) {
                if ("object" !== X(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(e, "string");
                    if ("object" !== X(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
            }(e);
            return "symbol" === X(t) ? t : String(t);
        }
        function te(e, t) {
            return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, te(e, t);
        }
        function re(e) {
            return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            }, re(e);
        }
        var oe = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && te(e, t);
            }(u, e);
            var r, o, n, i, c = (n = u, i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                } catch (e) {
                    return !1;
                }
            }(), function() {
                var e, t = re(n);
                if (i) {
                    var r = re(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                } else e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === X(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }(this, e);
            });
            function u(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, u), (t = c.call(this, e)).state = {
                    loaded: !1
                }, t;
            }
            return r = u, (o = [
                {
                    key: "onImageLoad",
                    value: function() {
                        var e = this;
                        return this.state.loaded ? null : function(t) {
                            e.props.onLoad(t), e.props.afterLoad(), e.setState({
                                loaded: !0
                            });
                        };
                    }
                },
                {
                    key: "getImg",
                    value: function() {
                        var e = this.props, r = (e.afterLoad, e.beforeLoad, e.delayMethod, e.delayTime, e.effect, e.placeholder, e.placeholderSrc, e.scrollPosition, e.threshold, e.useIntersectionObserver, e.visibleByDefault, e.wrapperClassName, e.wrapperProps, function(e, t) {
                            if (null == e) return {};
                            var r, o, n = function(e, t) {
                                if (null == e) return {};
                                var r, o, n = {}, i = Object.keys(e);
                                for(o = 0; o < i.length; o++)r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for(o = 0; o < i.length; o++)r = i[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                            }
                            return n;
                        }(e, A));
                        return t().createElement("img", Q({}, r, {
                            onLoad: this.onImageLoad()
                        }));
                    }
                },
                {
                    key: "getLazyLoadImage",
                    value: function() {
                        var e = this.props, r = e.beforeLoad, o = e.className, n = e.delayMethod, i = e.delayTime, c = e.height, u = e.placeholder, s = e.scrollPosition, l = e.style, a = e.threshold, f = e.useIntersectionObserver, p = e.visibleByDefault, y = e.width;
                        return t().createElement(Y, {
                            beforeLoad: r,
                            className: o,
                            delayMethod: n,
                            delayTime: i,
                            height: c,
                            placeholder: u,
                            scrollPosition: s,
                            style: l,
                            threshold: a,
                            useIntersectionObserver: f,
                            visibleByDefault: p,
                            width: y
                        }, this.getImg());
                    }
                },
                {
                    key: "getWrappedLazyLoadImage",
                    value: function(e) {
                        var r = this.props, o = r.effect, n = r.height, i = r.placeholderSrc, c = r.width, u = r.wrapperClassName, s = r.wrapperProps, l = this.state.loaded, a = l ? " lazy-load-image-loaded" : "", f = l || !i ? {} : {
                            backgroundImage: "url(".concat(i, ")"),
                            backgroundSize: "100% 100%"
                        };
                        return t().createElement("span", Q({
                            className: u + " lazy-load-image-background " + o + a,
                            style: J(J({}, f), {}, {
                                color: "transparent",
                                display: "inline-block",
                                height: n,
                                width: c
                            })
                        }, s), e);
                    }
                },
                {
                    key: "render",
                    value: function() {
                        var e = this.props, t = e.effect, r = e.placeholderSrc, o = e.visibleByDefault, n = e.wrapperClassName, i = e.wrapperProps, c = this.getLazyLoadImage();
                        return (t || r) && !o || n || i ? this.getWrappedLazyLoadImage(c) : c;
                    }
                }
            ]) && Z(r.prototype, o), Object.defineProperty(r, "prototype", {
                writable: !1
            }), u;
        }(t().Component);
        oe.propTypes = {
            onLoad: n.PropTypes.func,
            afterLoad: n.PropTypes.func,
            beforeLoad: n.PropTypes.func,
            delayMethod: n.PropTypes.string,
            delayTime: n.PropTypes.number,
            effect: n.PropTypes.string,
            placeholderSrc: n.PropTypes.string,
            threshold: n.PropTypes.number,
            useIntersectionObserver: n.PropTypes.bool,
            visibleByDefault: n.PropTypes.bool,
            wrapperClassName: n.PropTypes.string,
            wrapperProps: n.PropTypes.object
        }, oe.defaultProps = {
            onLoad: function() {},
            afterLoad: function() {
                return {};
            },
            beforeLoad: function() {
                return {};
            },
            delayMethod: "throttle",
            delayTime: 300,
            effect: "",
            placeholderSrc: null,
            threshold: 100,
            useIntersectionObserver: !0,
            visibleByDefault: !1,
            wrapperClassName: ""
        };
        const ne = oe;
    })(), module.exports = o;
})();
}}),
}]);

//# sourceMappingURL=_1b23a5._.js.map