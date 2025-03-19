(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a44836._.js", {

"[project]/public/dados/funcionalidades.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"id\":0,\"titulo\":\"Quebra Cabeça\",\"descricao\":\"Encontre todos os itens escondidos na casa do seu amigo(a) e ganhe pontos\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/quebra-cabeca.png\",\"cor\":\"#ffa5a5\",\"tags\":[\"jogos\"]},{\"id\":1,\"titulo\":\"Balao\",\"descricao\":\"Estoure o balão e veja as mensagens!\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/balao.png\",\"cor\":\"#9062ff\",\"tags\":[\"aniversario\"]},{\"id\":2,\"titulo\":\"Quiz\",\"descricao\":\"Responda as perguntas corretamente e ganhe pontos\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/quiz.png\",\"cor\":\"#9062ff\",\"tags\":[\"jogo\"]},{\"id\":3,\"titulo\":\"Jogue o dado\",\"descricao\":\"Jogue o dado e mova sua peça no tabuleiro, ganhe pontos e complete o desafio\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/dado.png\",\"cor\":\"#81a88d\",\"tags\":[\"jogo\"]},{\"id\":4,\"titulo\":\"Jogo da memória\",\"descricao\":\"Encontre os pares de cartas e ganhe pontos\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/memoria.png\",\"cor\":\"#909d79\",\"tags\":[\"jogo\"]},{\"id\":5,\"titulo\":\"Clique\",\"descricao\":\"Clique nas imagens para ganhar pontos\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/clique.png\",\"cor\":\"#d46b6b\",\"tags\":[\"jogo\"]},{\"id\":6,\"titulo\":\"Complete a frase\",\"descricao\":\"Complete as frases corretamente e ganhe pontos\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/frase.png\",\"cor\":\"#2e1b5b\",\"tags\":[\"jogo\"]},{\"id\":7,\"titulo\":\"Caça ao Tesouro\",\"descricao\":\"Encontre todos os itens escondidos na casa do seu amigo(a) e ganhe pontos\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/quebra-cabeca.png\",\"cor\":\"#ffa5a5\",\"tags\":[\"jogo\"]},{\"id\":8,\"titulo\":\"Quiz\",\"descricao\":\"Responda as perguntas corretamente e ganhe pontos\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/quiz.png\",\"cor\":\"#9062ff\",\"tags\":[\"jogo\"]},{\"id\":9,\"titulo\":\"Jogue o dado\",\"descricao\":\"Jogue o dado e mova sua peça no tabuleiro, ganhe pontos e complete o desafio\",\"selecionado\":false,\"imagem\":\"/img/funcionalidades/dado.png\",\"cor\":\"#81a88d\",\"tags\":[\"jogo\"]}]"));}}),
"[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModalFuncao)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ModalFuncao({ funcionalidade, isModalOpen, setIsModalOpen }) {
    const handleClickOutside = (event)=>{
        if (event.target.id === `modalFuncao${funcionalidade.titulo}`) {
            handleClose();
        }
    };
    function handleClose() {
        setIsModalOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: `modalFuncao${funcionalidade.titulo}`,
            className: `fixed inset-0 flex items-center justify-center z-50 ${isModalOpen ? "block" : "hidden"}`,
            onClick: handleClickOutside,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 flex flex-col md:flex-row gap-3 rounded-xl shadow-xl max-w-xl transform transition duration-300 hover:scale-105 m-3",
                    style: {
                        backgroundColor: funcionalidade.cor
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "absolute top-0 right-0 p-3 py-2 text-xl hover:text-red-600 ",
                            onClick: handleClose,
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: funcionalidade.titulo
                                }, void 0, false, {
                                    fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg",
                                    children: funcionalidade.descricao
                                }, void 0, false, {
                                    fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-full h-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: funcionalidade.imagem,
                                alt: funcionalidade.titulo,
                                className: "rounded-lg max-w-[200px] w-full h-auto aspect-square"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = ModalFuncao;
var _c;
__turbopack_refresh__.register(_c, "ModalFuncao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/notification/Notification.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NotificationProvider": (()=>NotificationProvider),
    "useNotification": (()=>useNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
// Cria o contexto
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const NotificationProvider = ({ children })=>{
    _s();
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Fila de notificações
    const [currentNotification, setCurrentNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Notificação atual
    // Função para adicionar uma notificação à fila
    const showNotification = (message, type = "danger", duration = 3000)=>{
        const id = Date.now(); // ID único para a notificação
        setQueue((prevQueue)=>[
                ...prevQueue,
                {
                    id,
                    message,
                    type,
                    duration
                }
            ]);
    };
    // Função para remover a notificação atual e exibir a próxima
    const removeNotification = (id)=>{
        setQueue((prevQueue)=>prevQueue.filter((notification)=>notification.id !== id));
        setCurrentNotification(null); // Limpa a notificação atual
    };
    // Efeito para gerenciar a fila de notificações
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            if (queue.length > 0 && !currentNotification) {
                // Exibe a primeira notificação da fila
                setCurrentNotification(queue[0]);
                // Remove a notificação após o tempo especificado
                const timer = setTimeout({
                    "NotificationProvider.useEffect.timer": ()=>{
                        removeNotification(queue[0].id);
                    }
                }["NotificationProvider.useEffect.timer"], queue[0].duration);
                return ({
                    "NotificationProvider.useEffect": ()=>clearTimeout(timer)
                })["NotificationProvider.useEffect"];
            }
        }
    }["NotificationProvider.useEffect"], [
        queue,
        currentNotification
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            showNotification
        },
        children: [
            children,
            currentNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Notification, {
                message: currentNotification.message,
                type: currentNotification.type,
                onClose: ()=>removeNotification(currentNotification.id)
            }, void 0, false, {
                fileName: "[project]/src/components/notification/Notification.jsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notification/Notification.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_s(NotificationProvider, "d8Eh+cOFsMsXOPWvjPSTgccQ438=");
_c = NotificationProvider;
const useNotification = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
};
_s1(useNotification, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
// Componente de Notificação
const Notification = ({ message, type, onClose })=>{
    const styles = {
        error: "#FF3737",
        warning: "#F7DC6F",
        success: "#8BC34A"
    }[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-standart fixed left-1/2 transform -translate-x-1/2 h-auto w-fit px-2 py-4 flex gap-2",
        style: {
            backgroundColor: styles,
            zIndex: 9999
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl text-white font-semibold",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/notification/Notification.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "rounded-full bg-white bg-opacity-50 text-white font-bold p-1 px-2",
                onClick: onClose,
                children: "X"
            }, void 0, false, {
                fileName: "[project]/src/components/notification/Notification.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notification/Notification.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_c1 = Notification;
var _c, _c1;
__turbopack_refresh__.register(_c, "NotificationProvider");
__turbopack_refresh__.register(_c1, "Notification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/criar/funcionalidades/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Funcionalidades)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$dados$2f$funcionalidades$2e$json__$28$json$29$__ = __turbopack_import__("[project]/public/dados/funcionalidades.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$funcionalidades$2f$modalFuncao$2f$modalFuncao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/criar/funcionalidades/modalFuncao/modalFuncao.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/core/context/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notification$2f$Notification$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/notification/Notification.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$NotificationContext$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/core/NotificationContext/NotificationContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Funcionalidades() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$NotificationContext$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const { userData, updateUserData, addFuncionalidade, removeFuncionalidade } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyContext"])();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        message: "",
        type: ""
    });
    const [filteredFuncionalidades, setFilteredFuncionalidades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [funcionalidadesSelecionadas, setFuncionalidadesSelecionadas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categorias, setCategorias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 0,
            titulo: "geral",
            descricao: "Todos",
            valor: "geral",
            selecionado: true
        },
        {
            id: 1,
            titulo: "amor",
            descricao: "Aos apaixonados",
            valor: "amor",
            selecionado: false
        },
        {
            id: 2,
            titulo: "jogos",
            descricao: "Jogos",
            valor: "jogo",
            selecionado: false
        },
        {
            id: 3,
            titulo: "aniversario",
            descricao: "Aniversário",
            valor: "aniversario",
            selecionado: false
        }
    ]);
    const [selecionado, setSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Carrega as funcionalidades e marca as selecionadas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Funcionalidades.useEffect": ()=>{
            const dados = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$dados$2f$funcionalidades$2e$json__$28$json$29$__["default"]).map({
                "Funcionalidades.useEffect.dados": (dado)=>{
                    if (userData.funcionalidades) {
                        const funcionalidadeEncontrada = userData.funcionalidades.find({
                            "Funcionalidades.useEffect.dados.funcionalidadeEncontrada": (funcionalidade)=>funcionalidade.id === dado.id
                        }["Funcionalidades.useEffect.dados.funcionalidadeEncontrada"]);
                        if (funcionalidadeEncontrada) {
                            dado.selecionado = funcionalidadeEncontrada.selecionado;
                        }
                    }
                    return dado;
                }
            }["Funcionalidades.useEffect.dados"]);
            setFuncionalidadesSelecionadas(dados);
            setFilteredFuncionalidades(dados); // Inicialmente, todas as funcionalidades são exibidas
        }
    }["Funcionalidades.useEffect"], []);
    // Filtra as funcionalidades com base na categoria selecionada
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Funcionalidades.useEffect": ()=>{
            // Verifica se "geral" está selecionado
            const geralSelecionado = categorias.some({
                "Funcionalidades.useEffect.geralSelecionado": (cat)=>cat.valor === "geral" && cat.selecionado
            }["Funcionalidades.useEffect.geralSelecionado"]);
            if (geralSelecionado) {
                // Se "geral" estiver selecionado, exibe todas as funcionalidades
                setFilteredFuncionalidades(funcionalidadesSelecionadas);
            } else {
                // Filtra as funcionalidades com base nas categorias selecionadas
                const categoriasSelecionadas = categorias.filter({
                    "Funcionalidades.useEffect.categoriasSelecionadas": (cat)=>cat.selecionado
                }["Funcionalidades.useEffect.categoriasSelecionadas"]).map({
                    "Funcionalidades.useEffect.categoriasSelecionadas": (cat)=>cat.valor
                }["Funcionalidades.useEffect.categoriasSelecionadas"]);
                const filtradas = funcionalidadesSelecionadas.filter({
                    "Funcionalidades.useEffect.filtradas": (func)=>categoriasSelecionadas.some({
                            "Funcionalidades.useEffect.filtradas": (cat)=>func.tags.includes(cat)
                        }["Funcionalidades.useEffect.filtradas"])
                }["Funcionalidades.useEffect.filtradas"]);
                setFilteredFuncionalidades(filtradas);
            }
        }
    }["Funcionalidades.useEffect"], [
        categorias,
        funcionalidadesSelecionadas
    ]);
    // Abre o modal com as informações da funcionalidade
    function handleInfo(id) {
        setSelecionado(funcionalidadesSelecionadas[id]);
        setIsModalOpen(true);
    }
    // Marca/desmarca uma funcionalidade como selecionada
    function handleSelection(id, selecionar) {
        setFuncionalidadesSelecionadas((prevState)=>prevState.map((item)=>item.id === id ? {
                    ...item,
                    selecionado: selecionar
                } : item));
    }
    // Adiciona/remove uma funcionalidade da lista de selecionadas
    function handleFunctionSelection(id) {
        handleSelection(id, !funcionalidadesSelecionadas[id].selecionado); // Inverte o estado de seleção
        if (funcionalidadesSelecionadas[id].selecionado) {
            removeFuncionalidade(id);
        } else {
            addFuncionalidade(funcionalidadesSelecionadas[id]);
        }
    }
    // Remove uma funcionalidade da lista de selecionadas
    function handleItemRemove(id) {
        // Marca a funcionalidade como não selecionada no estado local
        setFuncionalidadesSelecionadas((prevState)=>prevState.map((item)=>item.id === id ? {
                    ...item,
                    selecionado: false
                } : item));
        // Remove a funcionalidade do contexto (userData)
        removeFuncionalidade(id);
    }
    // Seleciona/deseleciona uma categoria
    function handleCategoriaClick(id) {
        setCategorias((prevState)=>{
            // Cria um novo estado com as categorias atualizadas
            const novasCategorias = prevState.map((cat)=>{
                if (id === 0) {
                    // Se for o "geral", marca apenas ele e desmarca os outros
                    return {
                        ...cat,
                        selecionado: cat.id === 0
                    };
                } else {
                    // Se for outra categoria, desmarca o "geral" e inverte o estado da categoria clicada
                    if (cat.id === 0) {
                        return {
                            ...cat,
                            selecionado: false
                        }; // Desmarca o "geral"
                    }
                    if (cat.id === id) {
                        return {
                            ...cat,
                            selecionado: !cat.selecionado
                        }; // Inverte o estado da categoria clicada
                    }
                    return cat; // Mantém o estado das outras categorias
                }
            });
            // Verifica se todas as categorias estão desmarcadas
            const todasDesmarcadas = novasCategorias.every((cat)=>!cat.selecionado);
            // Se todas estiverem desmarcadas, seleciona o "geral" (categorias[0])
            if (todasDesmarcadas) {
                return novasCategorias.map((cat)=>cat.id === 0 ? {
                        ...cat,
                        selecionado: true
                    } : cat);
            }
            return novasCategorias;
        });
    }
    // Avança para a próxima etapa se pelo menos uma funcionalidade estiver selecionada
    function handleNextStep() {
        if (funcionalidadesSelecionadas.filter((funcionalidade)=>funcionalidade.selecionado).length <= 0) {
            showNotification("Selecione pelo menos uma funcionalidade", "error");
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            router.push("/criar/personalizar");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$criar$2f$funcionalidades$2f$modalFuncao$2f$modalFuncao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setIsModalOpen: setIsModalOpen,
                isModalOpen: isModalOpen,
                funcionalidade: selecionado
            }, void 0, false, {
                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-8 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center my-8 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-5xl",
                                        children: "Crie seu presente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl",
                                        children: [
                                            "Selecione as funções que você vai querer ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden md:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                lineNumber: 198,
                                                columnNumber: 56
                                            }, this),
                                            " no seu site.",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "Hora de soltar a criatividade!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `px-8 py-1 rounded-full text-black bg-[#d2d2d2] font-bold text-3xl`,
                                type: "button",
                                onClick: handleNextStep,
                                children: "Pronto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-col lg:flex-row justify-between items-start gap-[10%] lg:gap-[5%] grow lg:overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 lg:sticky top-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-4xl",
                                        children: "Categorias"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    categorias.map((categoria)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "flex flex-row gap-2",
                                                onClick: ()=>handleCategoriaClick(categoria.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `/emojis/${categoria.titulo}.png`,
                                                        alt: categoria.titulo,
                                                        className: "w-auto h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: categoria.selecionado ? "font-bold" : "",
                                                        children: categoria.descricao
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        }, categoria.id, false, {
                                            fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full",
                                children: filteredFuncionalidades.length > 0 && filteredFuncionalidades.map((funcionalidade)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[40px] flex flex-col gap-2 p-6 aspect-square justify-between w-full min-h-[250px] h-full transition-transform transform hover:scale-105",
                                        style: {
                                            backgroundColor: funcionalidade.cor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleInfo(funcionalidade.id),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "text-white w-auto h-6",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 32 32",
                                                            fill: "currentColor",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "16",
                                                                    cy: "16",
                                                                    r: "15",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "16",
                                                                    y1: "12",
                                                                    x2: "16",
                                                                    y2: "24",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "16",
                                                                    cy: "8",
                                                                    r: "1.5",
                                                                    fill: "currentColor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                            lineNumber: 251,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        style: {
                                                            color: funcionalidade.cor
                                                        },
                                                        onClick: ()=>handleFunctionSelection(funcionalidade.id),
                                                        className: `rounded-full border text-white w-6 h-6 ${funcionalidade.selecionado ? "bg-white" : "border-white"}`,
                                                        children: funcionalidade.selecionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: " ✓ "
                                                        }, void 0, false)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-full items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: funcionalidade.imagem,
                                                    alt: funcionalidade.titulo,
                                                    className: "w-[7rem] h-auto object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-2xl text-white text-center",
                                                children: funcionalidade.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, funcionalidade.id, true, {
                                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto flex flex-col items-center justify-center my-8",
                        style: {
                            zIndex: 9999
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center justify-start w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "me-4 font-bold text-3xl py-4",
                                    children: "Selecionados:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-4 flex-wrap",
                                    children: funcionalidadesSelecionadas.length > 0 && funcionalidadesSelecionadas.filter((item)=>item.selecionado).map((funcionalidadeUsuario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-full flex flex-row gap-4 px-2 py-1 items-center",
                                            style: {
                                                backgroundColor: funcionalidadeUsuario.cor
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: funcionalidadeUsuario.imagem,
                                                    alt: "Quebra-cabeça",
                                                    className: "w-auto h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-white text-nowrap",
                                                    children: funcionalidadeUsuario.titulo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                    lineNumber: 329,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "bg-background rounded-full px-2",
                                                    style: {
                                                        color: funcionalidadeUsuario.cor
                                                    },
                                                    onClick: ()=>{
                                                        handleItemRemove(funcionalidadeUsuario.id);
                                                    },
                                                    children: "X"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, funcionalidadeUsuario.id, true, {
                                            fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                            lineNumber: 318,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/criar/funcionalidades/page.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Funcionalidades, "BaLkn++vLQ2+0/BLujff8SPuAYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$NotificationContext$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$context$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyContext"]
    ];
});
_c = Funcionalidades;
var _c;
__turbopack_refresh__.register(_c, "Funcionalidades");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/criar/funcionalidades/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_a44836._.js.map