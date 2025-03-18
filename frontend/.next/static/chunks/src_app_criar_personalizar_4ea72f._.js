(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_criar_personalizar_4ea72f._.js", {

"[project]/src/app/criar/personalizar/quebracabeca/Imagem.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const Imagem = ({ imageSrc, is15 = true, is25, is40 })=>{
    _s();
    const [pieces, setPieces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draggedPiece, setDraggedPiece] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imgDimensions, setImgDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rows: 5,
        cols: 5
    });
    const [containerSize, setContainerSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagem.useEffect": ()=>{
            if (imageSrc) {
                const url = URL.createObjectURL(imageSrc);
                setImageUrl(url);
                return ({
                    "Imagem.useEffect": ()=>URL.revokeObjectURL(url)
                })["Imagem.useEffect"];
            }
        }
    }["Imagem.useEffect"], [
        imageSrc
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagem.useEffect": ()=>{
            const newDimensions = is15 ? {
                rows: 5,
                cols: 5
            } : is25 ? {
                rows: 8,
                cols: 8
            } : is40 ? {
                rows: 10,
                cols: 10
            } : {
                rows: 5,
                cols: 5
            };
            setDimensions(newDimensions);
        }
    }["Imagem.useEffect"], [
        is15,
        is25,
        is40
    ]);
    const loadImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagem.useCallback[loadImage]": ()=>{
            if (!imageSrc) return;
            const img = new Image();
            img.src = imageUrl;
            img.onload = ({
                "Imagem.useCallback[loadImage]": ()=>{
                    const maxHeight = window.innerHeight * 0.3;
                    const scale = maxHeight / img.naturalHeight;
                    const scaledWidth = img.naturalWidth * scale;
                    setImgDimensions({
                        width: scaledWidth,
                        height: maxHeight
                    });
                    setContainerSize({
                        width: scaledWidth,
                        height: maxHeight
                    });
                    initializePuzzle(scaledWidth, maxHeight);
                }
            })["Imagem.useCallback[loadImage]"];
            img.onerror = ({
                "Imagem.useCallback[loadImage]": ()=>console.error("Erro ao carregar a imagem.")
            })["Imagem.useCallback[loadImage]"];
        }
    }["Imagem.useCallback[loadImage]"], [
        imageSrc,
        imageUrl
    ]);
    const initializePuzzle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagem.useCallback[initializePuzzle]": (imgWidth, imgHeight)=>{
            const pieceWidth = imgWidth / dimensions.cols;
            const pieceHeight = imgHeight / dimensions.rows;
            const initialPieces = Array.from({
                length: dimensions.rows * dimensions.cols
            }, {
                "Imagem.useCallback[initializePuzzle].initialPieces": (_, i)=>({
                        id: i,
                        row: Math.floor(i / dimensions.cols),
                        col: i % dimensions.cols,
                        top: Math.floor(i / dimensions.cols) * pieceHeight,
                        left: i % dimensions.cols * pieceWidth,
                        backgroundPosition: `-${i % dimensions.cols * pieceWidth}px -${Math.floor(i / dimensions.cols) * pieceHeight}px`
                    })
            }["Imagem.useCallback[initializePuzzle].initialPieces"]);
            setPieces(shufflePieces(initialPieces, imgWidth, imgHeight));
        }
    }["Imagem.useCallback[initializePuzzle]"], [
        dimensions
    ]);
    const shufflePieces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagem.useCallback[shufflePieces]": (pieces, imgWidth, imgHeight)=>{
            const pieceWidth = imgWidth / dimensions.cols;
            const pieceHeight = imgHeight / dimensions.rows;
            return [
                ...pieces
            ].sort({
                "Imagem.useCallback[shufflePieces]": ()=>Math.random() - 0.5
            }["Imagem.useCallback[shufflePieces]"]).map({
                "Imagem.useCallback[shufflePieces]": (piece, index)=>({
                        ...piece,
                        top: Math.floor(index / dimensions.cols) * pieceHeight,
                        left: index % dimensions.cols * pieceWidth
                    })
            }["Imagem.useCallback[shufflePieces]"]);
        }
    }["Imagem.useCallback[shufflePieces]"], [
        dimensions
    ]);
    const handleDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagem.useCallback[handleDragStart]": (piece)=>{
            setDraggedPiece(piece);
        }
    }["Imagem.useCallback[handleDragStart]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagem.useCallback[handleDrop]": (targetPiece)=>{
            if (!draggedPiece) return;
            setPieces({
                "Imagem.useCallback[handleDrop]": (prev)=>prev.map({
                        "Imagem.useCallback[handleDrop]": (piece)=>{
                            if (piece.id === draggedPiece.id) return {
                                ...piece,
                                top: targetPiece.top,
                                left: targetPiece.left
                            };
                            if (piece.id === targetPiece.id) return {
                                ...piece,
                                top: draggedPiece.top,
                                left: draggedPiece.left
                            };
                            return piece;
                        }
                    }["Imagem.useCallback[handleDrop]"])
            }["Imagem.useCallback[handleDrop]"]);
            setDraggedPiece(null);
        }
    }["Imagem.useCallback[handleDrop]"], [
        draggedPiece
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagem.useEffect": ()=>{
            if (imageSrc) loadImage();
        }
    }["Imagem.useEffect"], [
        imageSrc,
        loadImage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagem.useEffect": ()=>{
            if (imgDimensions.width > 0) initializePuzzle(imgDimensions.width, imgDimensions.height);
        }
    }["Imagem.useEffect"], [
        dimensions,
        imgDimensions,
        initializePuzzle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center bg-gray-100 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative border-2 border-gray-800 bg-gray-200",
            style: containerSize,
            children: imageUrl && pieces.map((piece)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute border border-gray-700 cursor-pointer transition-all duration-300",
                    style: {
                        width: `${imgDimensions.width / dimensions.cols}px`,
                        height: `${imgDimensions.height / dimensions.rows}px`,
                        top: `${piece.top}px`,
                        left: `${piece.left}px`,
                        backgroundImage: `url('${imageUrl}')`,
                        backgroundPosition: piece.backgroundPosition,
                        backgroundSize: `${imgDimensions.width}px ${imgDimensions.height}px`
                    },
                    draggable: true,
                    onDragStart: ()=>handleDragStart(piece),
                    onDragOver: (e)=>e.preventDefault(),
                    onDrop: ()=>handleDrop(piece)
                }, piece.id, false, {
                    fileName: "[project]/src/app/criar/personalizar/quebracabeca/Imagem.jsx",
                    lineNumber: 129,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/criar/personalizar/quebracabeca/Imagem.jsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/criar/personalizar/quebracabeca/Imagem.jsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
};
_s(Imagem, "vUMWysSE6BLPPi9B5x/zEx0Kae4=");
_c = Imagem;
const __TURBOPACK__default__export__ = Imagem;
var _c;
__turbopack_refresh__.register(_c, "Imagem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>QuebraCabeca)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$quebracabeca$2f$Imagem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/criar/personalizar/quebracabeca/Imagem.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function QuebraCabeca() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [is15, setIs15] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [is25, setIs25] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [is40, setIs40] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const maxIndex = 2;
    const minIndex = 0;
    function handleMove(i) {
        const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
        setStep(newStep);
    }
    function handleSelect(option) {
        if (option == 15) {
            setIs15(true);
            setIs25(false);
            setIs40(false);
        }
        if (option == 25) {
            setIs15(false);
            setIs25(true);
            setIs40(false);
        }
        if (option == 40) {
            setIs15(false);
            setIs25(false);
            setIs40(true);
        }
    }
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Estado para armazenar o arquivo selecionado
    const handleDrop = (e)=>{
        e.preventDefault();
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };
    const handleFileChange = (e)=>{
        const files = e.target.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };
    const handleFile = (file)=>{
        if (file.type.startsWith("image/")) {
            setFile(file); // Armazena o arquivo no estado
            console.log("Arquivo selecionado:", file);
        // Aqui você pode fazer o que quiser com o arquivo, como exibir a imagem ou enviá-lo para um servidor.
        } else {
            alert("Por favor, selecione um arquivo de imagem.");
        }
    };
    const handleClick = ()=>{
        fileInputRef.current.click();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col gap-4",
        children: [
            step == 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold",
                                        children: "1."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl",
                                        children: [
                                            "Escolha a imagem do ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                                lineNumber: 83,
                                                columnNumber: 37
                                            }, this),
                                            "seu Quebra-cabeça."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/funcionalidades/quebra-cabeca.png",
                                alt: "",
                                className: "w-auto h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grow h-full w-full rounded-[50px] border-4 border-gray-300 flex flex-col gap-2 items-center justify-center p-4 md:min-h-[40vh]",
                        onDragOver: (e)=>e.preventDefault(),
                        onDrop: handleDrop,
                        onClick: handleClick,
                        style: {
                            cursor: "pointer"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                style: {
                                    display: "none"
                                },
                                onChange: handleFileChange,
                                accept: "image/*"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl text-[#d2d2d2]",
                                        children: "Arquivo recebido:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-[#d2d2d2]",
                                        children: file.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: URL.createObjectURL(file),
                                        alt: "Preview",
                                        className: "mt-2 max-w-[100px] max-h-[100px] object-cover rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this) : // Se nenhum arquivo foi selecionado, exibe o ícone e o texto padrão
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "\\img\\drop.svg",
                                        alt: "",
                                        className: "min-w-[90px] w-[17%] h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl text-[#d2d2d2]",
                                        children: [
                                            "Arraste ou ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                                lineNumber: 128,
                                                columnNumber: 30
                                            }, this),
                                            " solte aqui"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            step == 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold",
                                        children: "2."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl",
                                        children: [
                                            "Escolha a quantidade",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            "de peças."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/funcionalidades/quebra-cabeca.png",
                                alt: "",
                                className: "w-auto h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 ps-12 min-h-[40vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-3 text-4xl items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `flex items-center justify-center w-10 h-10 rounded-full border-2 ${is15 ? "bg-accent" : "bg-white border-gray-300"}`,
                                        onClick: ()=>{
                                            handleSelect(15);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "15 peças"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-3 text-4xl items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `flex items-center justify-center w-10 h-10 rounded-full border-2 ${is25 ? "bg-accent" : "bg-white border-gray-300"}`,
                                        onClick: ()=>{
                                            handleSelect(25);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "25 peças"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-3 text-4xl items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `flex items-center justify-center w-10 h-10 rounded-full border-2 ${is40 ? "bg-accent" : "bg-white border-gray-300"}`,
                                        onClick: ()=>{
                                            handleSelect(40);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "40 peças"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            step == 2 && file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold",
                                        children: "3."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl",
                                        children: [
                                            "Avalie como ficou e",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this),
                                            "edite se precisar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/funcionalidades/quebra-cabeca.png",
                                alt: "",
                                className: "w-auto h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$quebracabeca$2f$Imagem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            imageSrc: file,
                            is15: is15,
                            is25: is25,
                            is40: is40
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row gap-6 items-center justify-between w-full h-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground",
                        onClick: ()=>{
                            handleMove(-1);
                        },
                        children: "< Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground",
                        onClick: ()=>{
                            handleMove(1);
                        },
                        children: "Próximo >"
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(QuebraCabeca, "bbNkImo0fXgtet1cf9Do1aX8DEs=");
_c = QuebraCabeca;
var _c;
__turbopack_refresh__.register(_c, "QuebraCabeca");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConjuntoBalao)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
function Balao({ balao, posicao = "direita" }) {
    _s();
    const [pop, setPop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Balao.useEffect": ()=>{
            console.log("iniciando");
            console.log(balao);
        }
    }["Balao.useEffect"], []);
    const handleClick = ()=>{
        setPop(!pop); // Alternar o estado de pop
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: pop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "w-auto h-[200px] z-10",
            viewBox: "0 0 512 512",
            "aria-hidden": "true",
            role: "img",
            preserveAspectRatio: "xMidYMid slice",
            children: [
                posicao === "direita" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#597B91",
                    d: "M 300.82 434.629 C 299.595 434.629 298.6 432.994 298.6 430.976 C 298.6 418.766 295.997 409.526 290.408 401.897 C 285.181 394.76 277.901 389.687 270.193 384.315 C 259.951 377.177 249.359 369.796 240.986 356.336 C 231.337 340.825 226.646 320.02 226.646 292.734 C 226.646 289.921 228.495 288.163 229.975 289.57 C 230.662 290.223 231.085 291.429 231.085 292.734 C 231.085 317.948 235.338 337.042 244.087 351.107 C 251.86 363.603 262.06 370.711 271.924 377.586 C 287.926 388.737 303.039 399.271 303.039 430.976 C 303.039 432.994 302.046 434.629 300.82 434.629 Z",
                    transform: "matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -5.684341886080802e-14, 0)"
                }, void 0, false, {
                    fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                    lineNumber: 28,
                    columnNumber: 13
                }, this),
                posicao === "esquerda" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#597B91",
                    d: "M93.261 509.346a5.25 5.25 0 0 1 5.25-5.25c0-17.544 6.158-30.82 19.38-41.783c12.365-10.254 29.586-17.544 47.818-25.262c24.229-10.257 49.284-20.863 69.091-40.203c22.826-22.288 33.921-52.182 33.921-91.389a5.25 5.25 0 0 1-10.5 0c0 36.23-10.061 63.666-30.757 83.875c-18.388 17.956-42.515 28.169-65.848 38.047c-37.853 16.023-73.604 31.159-73.604 76.715a5.249 5.249 0 0 1 5.249 5.25z"
                }, void 0, false, {
                    fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, this),
                posicao === "reto" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#597B91",
                    d: "M256 509.346a5.25 5.25 0 0 1-5.25-5.25c0-17.544 0-30.82 0-41.783c0-10.254 0-17.544 0-25.262c0-10.257 0-20.863 0-40.203c0-22.288 0-52.182 0-91.389a5.25 5.25 0 0 1 0 0c0 36.23 0 63.666 0 83.875c0 17.956 0 28.169 0 38.047c0 16.023 0 31.159 0 76.715a5.249 5.249 0 0 1 0 5.25z"
                }, void 0, false, {
                    fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                    lineNumber: 41,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: balao.cor,
                    className: "cursor-pointer",
                    onClick: handleClick,
                    d: "M 243.297 291.721 C 243.773 292.939 244.235 294.14 244.65 295.297 C 245.051 296.369 245.418 297.406 245.764 298.388 C 246.106 299.371 246.464 300.3 246.693 301.158 C 247.159 302.873 247.121 304.303 246.935 305.304 C 246.752 306.305 246.397 306.876 246.397 306.876 C 241.432 314.885 230.915 317.352 222.906 312.387 C 220.674 310.993 218.789 309.108 217.395 306.876 C 217.395 306.876 217.041 306.304 216.857 305.304 C 216.671 304.303 216.633 302.874 217.099 301.158 C 217.328 300.3 217.685 299.371 218.028 298.388 C 218.374 297.405 218.741 296.369 219.142 295.297 C 219.557 294.14 220.019 292.939 220.495 291.721 C 186.473 277.803 130.399 210.614 113.612 147.539 C 110.354 136.335 108.705 124.725 108.713 113.056 C 108.714 45.024 163.864 -10.125 231.896 -10.125 C 299.928 -10.125 355.078 45.024 355.078 113.055 C 355.086 124.724 353.436 136.334 350.179 147.538 C 333.392 210.613 277.319 277.803 243.297 291.721 Z",
                    transform: "matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -5.684341886080802e-14, 0)"
                }, void 0, false, {
                    fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
            lineNumber: 18,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[200px] h-[200px] z-0 flex items-start justify-center pt-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onClick: handleClick,
                className: "",
                children: balao.mensagem
            }, void 0, false, {
                fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                lineNumber: 56,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
            lineNumber: 55,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(Balao, "R8YSU2l9RjQqNZHGxkek5sBVza4=");
_c = Balao;
function ConjuntoBalao({ baloes }) {
    if (!baloes || baloes.length === 0) {
        return null; // Retorna null se não houver balões
    }
    if (baloes.length <= 2) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row gap-2",
            children: baloes.map((balao, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                    balao: balao,
                    posicao: "direita"
                }, index, false, {
                    fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    if (baloes.length === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center w-full h-fit",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                            balao: baloes[0],
                            posicao: "direita"
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                        balao: baloes[1],
                        posicao: "direita"
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                            balao: baloes[2],
                            posicao: "direita"
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    if (baloes.length === 4) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row gap-2 w-full h-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center w-full h-auto relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                        balao: baloes[0],
                        posicao: "direita"
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                                balao: baloes[1],
                                posicao: "direita"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                                balao: baloes[2],
                                posicao: "direita"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
            lineNumber: 98,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: baloes.map((balao, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Balao, {
                balao: balao,
                posicao: "direita"
            }, index, false, {
                fileName: "[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx",
                lineNumber: 113,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_c1 = ConjuntoBalao;
var _c, _c1;
__turbopack_refresh__.register(_c, "Balao");
__turbopack_refresh__.register(_c1, "ConjuntoBalao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/criar/personalizar/balao/balao.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Balao)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$balao$2f$conjuntoBalao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/criar/personalizar/balao/conjuntoBalao.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function Balao() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const maxIndex = 2;
    const minIndex = 0;
    const [idade, setIdade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [baloes, setBaloes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            mensagem: "",
            cor: "#FF0000"
        }
    ]);
    function handleMove(i) {
        const newStep = Math.min(Math.max(step + i, minIndex), maxIndex);
        setStep(newStep);
    }
    function handleAddBalao() {
        if (baloes.length === 8) {
            alert("Só é possível adicionar até 8 balões!");
            return;
        }
        const gerarCorAleatoria = ()=>{
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return "#" + n.slice(0, 6);
        };
        setBaloes((prevState)=>[
                ...prevState,
                {
                    mensagem: "",
                    cor: gerarCorAleatoria()
                }
            ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col gap-4",
        children: [
            step == 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold",
                                        children: "1."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl",
                                        children: [
                                            "Quantos anos ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                                lineNumber: 49,
                                                columnNumber: 30
                                            }, this),
                                            "o presenteado fará?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/funcionalidades/balao.png",
                                alt: "",
                                className: "w-auto h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            className: "px-2 py-1 rounded-standart text-4xl",
                            min: 1,
                            max: 120,
                            step: 1,
                            value: idade,
                            onChange: (e)=>setIdade(e.target.value),
                            name: "",
                            id: "",
                            placeholder: "Digite aqui a idade"
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            step == 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold",
                                        children: "2."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl",
                                        children: [
                                            "Escolha a quantidade",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            "e mensagens dos balões"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/funcionalidades/balao.png",
                                alt: "",
                                className: "w-auto h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:max-h-[30vh] overflow-y-auto flex flex-col gap-3",
                                children: baloes.map((balao, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Balão ",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "",
                                                        id: "",
                                                        className: "rounded-standart px-2 py-1 w-full",
                                                        placeholder: "Digite a mensagem aqui",
                                                        value: balao.mensagem,
                                                        onChange: (e)=>setBaloes((prevState)=>{
                                                                const newState = [
                                                                    ...prevState
                                                                ];
                                                                newState[index].mensagem = e.target.value;
                                                                return newState;
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "color",
                                                        name: "",
                                                        id: "",
                                                        className: "rounded-standart h-10",
                                                        value: balao.cor,
                                                        onChange: (e)=>setBaloes((prevState)=>{
                                                                const newState = [
                                                                    ...prevState
                                                                ];
                                                                newState[index].cor = e.target.value;
                                                                return newState;
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex flex-col my-4 items-center justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleAddBalao,
                                    className: "px-3 py-1 w-fit font-bold text-2xl text-background bg-foreground rounded-full",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            step == 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold",
                                        children: "3."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl",
                                        children: [
                                            "Avalie como ficou e",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            "edite se precisar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/funcionalidades/balao.png",
                                alt: "",
                                className: "w-auto h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grow h-full w-full flex flex-col gap-2 rounded-[20px] p-4 md:min-h-[40vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$balao$2f$conjuntoBalao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            baloes: baloes
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row gap-6 items-center justify-between w-full h-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground",
                        onClick: ()=>{
                            handleMove(-1);
                        },
                        children: "< Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "font-bold text-3xl py-2 px-4 rounded-standart text-background bg-foreground",
                        onClick: ()=>{
                            handleMove(1);
                        },
                        children: "Próximo >"
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/criar/personalizar/balao/balao.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Balao, "rS3YTBtubvNBiDu68TBvFiFAQoE=");
_c = Balao;
var _c;
__turbopack_refresh__.register(_c, "Balao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/criar/personalizar/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Personalizacao)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$quebracabeca$2f$quebracabeca$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/criar/personalizar/quebracabeca/quebracabeca.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$balao$2f$balao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/criar/personalizar/balao/balao.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/core/context/context.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function Personalizacao() {
    _s();
    // <QuebraCabeca/>
    const [funcionalidades, setFuncionalidades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { userData, updateUserData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyContext"])();
    const [filaFuncionalidades, setFilaFuncionalidades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [indice, setIndice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Personalizacao.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                console.log(userData);
                if (userData.funcionalidades) {
                    setFilaFuncionalidades(userData.funcionalidades);
                    setFuncionalidades({
                        "Personalizacao.useEffect": ()=>{
                            return Object.values(userData.funcionalidades).map({
                                "Personalizacao.useEffect": (funcionalidade)=>({
                                        id: funcionalidade.id,
                                        imagem: funcionalidade.imagem,
                                        titulo: funcionalidade.titulo,
                                        selecionado: false
                                    })
                            }["Personalizacao.useEffect"]);
                        }
                    }["Personalizacao.useEffect"]);
                    setFuncionalidades({
                        "Personalizacao.useEffect": (prevState)=>prevState.map({
                                "Personalizacao.useEffect": (item)=>item.id === 0 ? {
                                        ...item,
                                        selecionado: true
                                    } : {
                                        ...item,
                                        selecionado: false
                                    }
                            }["Personalizacao.useEffect"])
                    }["Personalizacao.useEffect"]);
                }
            }
        }
    }["Personalizacao.useEffect"], [
        userData
    ]);
    const componentesFuncionalidades = {
        "Quebra Cabeça": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$quebracabeca$2f$quebracabeca$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        "Balao": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$personalizar$2f$balao$2f$balao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        "Quiz": Qui
    };
    const ComponenteFuncionalidade = Object.values(filaFuncionalidades)[indice] ? componentesFuncionalidades[Object.values(filaFuncionalidades)[indice].titulo] : null;
    function handleCategoriaClick(id) {
        setIndice(id);
        setFuncionalidades((prevState)=>prevState.map((item)=>item.id === id ? {
                    ...item,
                    selecionado: true
                } : {
                    ...item,
                    selecionado: false
                }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-[93vh] h-full container mx-auto px-8 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center my-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold text-5xl",
                                    children: "Personalize seu site"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl",
                                    children: [
                                        "Personalize cada detalhe do seu ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                            lineNumber: 69,
                                            columnNumber: 47
                                        }, this),
                                        "presente, e torne-o",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "inesquecível!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/criar/personalizar/page.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "px-8 py-1 rounded-full text-black bg-[#d2d2d2] font-bold text-3xl",
                            href: "/criar/finalizar",
                            children: "Pronto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/personalizar/page.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/criar/personalizar/page.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col lg:flex-row justify-between items-start gap-[20%] h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold text-4xl",
                                    children: "Selecionados"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                Object.entries(funcionalidades).map(([key, funcionalidade])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "flex flex-row gap-2",
                                        onClick: ()=>{
                                            handleCategoriaClick(funcionalidade.id);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `${funcionalidade.imagem}`,
                                                alt: funcionalidade.titulo,
                                                className: "w-auto h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: funcionalidade.selecionado ? "font-bold" : "",
                                                children: funcionalidade.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/criar/personalizar/page.jsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full",
                            children: ComponenteFuncionalidade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComponenteFuncionalidade, {}, void 0, false, {
                                fileName: "[project]/src/app/criar/personalizar/page.jsx",
                                lineNumber: 112,
                                columnNumber: 42
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/personalizar/page.jsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/criar/personalizar/page.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/criar/personalizar/page.jsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Personalizacao, "JWcM+nxequ69vv3P2CfcvYHNnLQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyContext"]
    ];
});
_c = Personalizacao;
var _c;
__turbopack_refresh__.register(_c, "Personalizacao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/criar/personalizar/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_criar_personalizar_4ea72f._.js.map