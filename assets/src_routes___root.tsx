import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/__root.tsx");const useEffect = __vite__cjsImport2_react["useEffect"];import { QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=dff30551";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7a96e4a1";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=fb6b258e";
import appCss from "/src/styles.css?url";
import { reportLovableError } from "/src/lib/lovable-error-reporting.ts";
var _jsxFileName = "/dev-server/src/routes/__root.tsx";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
function NotFoundComponent() {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		"data-tsd-source": "/src/routes/__root.tsx:17:5",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:18:7",
			children: [
				/* @__PURE__ */ _jsxDEV("h1", {
					className: "text-7xl font-bold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:19:9",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:20:9",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:21:9",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6",
					"data-tsd-source": "/src/routes/__root.tsx:24:9",
					children: /* @__PURE__ */ _jsxDEV(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:25:11",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
_c = NotFoundComponent;
function ErrorComponent({ error, reset }) {
	_s();
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		"data-tsd-source": "/src/routes/__root.tsx:45:5",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:46:7",
			children: [
				/* @__PURE__ */ _jsxDEV("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:47:9",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:50:9",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					"data-tsd-source": "/src/routes/__root.tsx:53:9",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:54:11",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						"data-tsd-source": "/src/routes/__root.tsx:63:11",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
_s(ErrorComponent, "g4BU1bO32KZmjSq/EmV92VkGdF0=", false, function() {
	return [useRouter];
});
_c2 = ErrorComponent;
export const Route = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#0a3a5c"
			},
			{
				property: "og:site_name",
				content: "Gardens Pool Service"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: appCss
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Gardens Pool Service",
				url: "https://gardenspool.lovable.app",
				telephone: "+1-561-203-1900",
				address: {
					"@type": "PostalAddress",
					streetAddress: "4210 Randolph Way",
					addressLocality: "Palm Beach Gardens",
					addressRegion: "FL",
					postalCode: "33410",
					addressCountry: "US"
				}
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "Gardens Pool Service",
				url: "https://gardenspool.lovable.app"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
const FONTS_HREF = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap";
const FONTS_HTML = `<link rel="preload" as="style" href="${FONTS_HREF}" onload="this.onload=null;this.rel='stylesheet';this.media='all'"><link rel="stylesheet" href="${FONTS_HREF}" media="print"><noscript><link rel="stylesheet" href="${FONTS_HREF}"></noscript>`;
function RootShell({ children }) {
	return /* @__PURE__ */ _jsxDEV("html", {
		lang: "en",
		"data-tsd-source": "/src/routes/__root.tsx:134:5",
		children: [/* @__PURE__ */ _jsxDEV("head", {
			"data-tsd-source": "/src/routes/__root.tsx:135:7",
			children: [
				/* @__PURE__ */ _jsxDEV(HeadContent, { "data-tsd-source": "/src/routes/__root.tsx:136:9" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("script", {
					dangerouslySetInnerHTML: { __html: `document.head.insertAdjacentHTML('beforeend', ${JSON.stringify(FONTS_HTML)});` },
					"data-tsd-source": "/src/routes/__root.tsx:138:9"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 138,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("noscript", {
					"data-tsd-source": "/src/routes/__root.tsx:143:9",
					children: /* @__PURE__ */ _jsxDEV("link", {
						rel: "stylesheet",
						href: FONTS_HREF,
						"data-tsd-source": "/src/routes/__root.tsx:144:11"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 144,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 143,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("body", {
			"data-tsd-source": "/src/routes/__root.tsx:147:7",
			children: [children, /* @__PURE__ */ _jsxDEV(Scripts, { "data-tsd-source": "/src/routes/__root.tsx:149:9" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 147,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 134,
		columnNumber: 5
	}, this);
}
_c3 = RootShell;
function RootComponent() {
	_s2();
	const { queryClient } = Route.useRouteContext();
	return /* @__PURE__ */ _jsxDEV(QueryClientProvider, {
		client: queryClient,
		"data-tsd-source": "/src/routes/__root.tsx:159:5",
		children: /* @__PURE__ */ _jsxDEV(Outlet, { "data-tsd-source": "/src/routes/__root.tsx:161:7" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 161,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 159,
		columnNumber: 5
	}, this);
}
_s2(RootComponent, "Otf8sSrEkDIMrO/ohe5Mu6e+vNI=", false, function() {
	return [Route.useRouteContext];
});
_c4 = RootComponent;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "NotFoundComponent");
$RefreshReg$(_c2, "ErrorComponent");
$RefreshReg$(_c3, "RootShell");
$RefreshReg$(_c4, "RootComponent");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/routes/__root.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/routes/__root.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/routes/__root.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/routes/__root.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUNBLFFBQ0EsTUFDQSw0QkFDQSxXQUNBLGFBQ0EsZUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0NBQ0EsT0FDQTtFQUFBO0VBQUE7WUFDQTtHQUFBO0dBQUE7YUFBQTtJQUNBO0tBQUE7S0FBQTtlQUEwRDtJQUFBOzs7OztJQUMxRDtLQUFBO0tBQUE7ZUFBa0U7SUFBQTs7Ozs7SUFDbEU7S0FBQTtLQUFBO2VBQXlEO0lBRXpEOzs7OztJQUNBO0tBQUE7S0FBQTtlQUNBO01BQ0E7TUFDQTtNQUNBO2dCQUFVO0tBRVY7Ozs7O0lBQ0E7Ozs7O0dBQ0E7Ozs7OztDQUNBOzs7OztBQUVBOztBQUVBOztDQUNBO0NBQ0E7Q0FDQTtFQUNBO0NBQ0E7Q0FFQSxPQUNBO0VBQUE7RUFBQTtZQUNBO0dBQUE7R0FBQTthQUFBO0lBQ0E7S0FBQTtLQUFBO2VBQTRFO0lBRTVFOzs7OztJQUNBO0tBQUE7S0FBQTtlQUF5RDtJQUV6RDs7Ozs7SUFDQTtLQUFBO0tBQUE7ZUFBQSxDQUNBO01BQ0E7T0FDQTtPQUNBO01BQ0E7TUFDQTtNQUNBO2dCQUFVO0tBRVY7Ozs7ZUFDQTtNQUNBO01BQ0E7TUFDQTtnQkFBVTtLQUVWOzs7O2FBQ0E7Ozs7OztHQUNBOzs7Ozs7Q0FDQTs7Ozs7QUFFQTs7Ozs7QUFFQTtDQUNBO0VBQ0E7R0FDQTtHQUNBO0lBQUE7SUFBQTtHQUFBO0dBQ0E7SUFBQTtJQUFBO0dBQUE7R0FDQTtJQUFBO0lBQUE7R0FBQTtHQUNBO0lBQUE7SUFBQTtHQUFBO0dBQ0E7SUFBQTtJQUFBO0dBQUE7RUFDQTtFQUNBO0dBQ0E7SUFBQTtJQUFBO0lBQUE7R0FBQTtHQUNBO0lBQUE7SUFBQTtHQUFBO0dBQ0E7SUFBQTtJQUFBO0dBQUE7R0FDQTtJQUFBO0lBQUE7SUFBQTtHQUFBO0VBQ0E7RUFDQSxVQUNBO0dBQ0E7R0FDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtLQUNBO0tBQ0E7S0FDQTtLQUNBO0tBQ0E7S0FDQTtJQUNBO0dBQ0E7RUFDQSxHQUNBO0dBQ0E7R0FDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0dBQ0E7RUFDQSxDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBRUEsbUJBQ0E7QUFFQTtBQUVBO0NBQ0EsT0FDQTtFQUFBO0VBQUE7WUFBQSxDQUNBO0dBQUE7YUFBQTtJQUNBLHlGQUFxQjs7Ozs7SUFFckI7S0FDQSwyQkFDQSx3RkFDQTtLQUNBO0lBQVE7Ozs7O0lBQ1I7S0FBQTtlQUNBO01BQUE7TUFBQTtNQUFBO0tBQW1EOzs7OztJQUNuRDs7Ozs7R0FDQTs7Ozs7WUFDQTtHQUFBO2FBQUEsQ0FDQSxVQUNBLHFGQUFpQjs7OztXQUNqQjs7Ozs7VUFDQTs7Ozs7O0FBRUE7O0FBRUE7O0NBQ0E7Q0FFQSxPQUNBO0VBQUE7RUFBQTtZQUVBLG9GQUFjOzs7OztDQUNkOzs7OztBQUVBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJfX3Jvb3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHtcbiAgT3V0bGV0LFxuICBMaW5rLFxuICBjcmVhdGVSb290Um91dGVXaXRoQ29udGV4dCxcbiAgdXNlUm91dGVyLFxuICBIZWFkQ29udGVudCxcbiAgU2NyaXB0cyxcbn0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdHlwZSBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGFwcENzcyBmcm9tIFwiLi4vc3R5bGVzLmNzcz91cmxcIjtcbmltcG9ydCB7IHJlcG9ydExvdmFibGVFcnJvciB9IGZyb20gXCIuLi9saWIvbG92YWJsZS1lcnJvci1yZXBvcnRpbmdcIjtcblxuZnVuY3Rpb24gTm90Rm91bmRDb21wb25lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmFja2dyb3VuZCBweC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+NDA0PC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTQgdGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiPlBhZ2Ugbm90IGZvdW5kPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgIFRoZSBwYWdlIHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0IG9yIGhhcyBiZWVuIG1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctcHJpbWFyeSBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1wcmltYXJ5LzkwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBHbyBob21lXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBFcnJvckNvbXBvbmVudCh7IGVycm9yLCByZXNldCB9OiB7IGVycm9yOiBFcnJvcjsgcmVzZXQ6ICgpID0+IHZvaWQgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVwb3J0TG92YWJsZUVycm9yKGVycm9yLCB7IGJvdW5kYXJ5OiBcInRhbnN0YWNrX3Jvb3RfZXJyb3JfY29tcG9uZW50XCIgfSk7XG4gIH0sIFtlcnJvcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmFja2dyb3VuZCBweC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgVGhpcyBwYWdlIGRpZG4ndCBsb2FkXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICBTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgZW5kLiBZb3UgY2FuIHRyeSByZWZyZXNoaW5nIG9yIGhlYWQgYmFjayBob21lLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLmludmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1wcmltYXJ5IHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLXByaW1hcnkvOTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRyeSBhZ2FpblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLWFjY2VudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR28gaG9tZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdXRlID0gY3JlYXRlUm9vdFJvdXRlV2l0aENvbnRleHQ8eyBxdWVyeUNsaWVudDogUXVlcnlDbGllbnQgfT4oKSh7XG4gIGhlYWQ6ICgpID0+ICh7XG4gICAgbWV0YTogW1xuICAgICAgeyBjaGFyU2V0OiBcInV0Zi04XCIgfSxcbiAgICAgIHsgbmFtZTogXCJ2aWV3cG9ydFwiLCBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgfSxcbiAgICAgIHsgbmFtZTogXCJ0aGVtZS1jb2xvclwiLCBjb250ZW50OiBcIiMwYTNhNWNcIiB9LFxuICAgICAgeyBwcm9wZXJ0eTogXCJvZzpzaXRlX25hbWVcIiwgY29udGVudDogXCJHYXJkZW5zIFBvb2wgU2VydmljZVwiIH0sXG4gICAgICB7IHByb3BlcnR5OiBcIm9nOnR5cGVcIiwgY29udGVudDogXCJ3ZWJzaXRlXCIgfSxcbiAgICAgIHsgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIiwgY29udGVudDogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgfSxcbiAgICBdLFxuICAgIGxpbmtzOiBbXG4gICAgICB7IHJlbDogXCJpY29uXCIsIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiLCBocmVmOiBcIi9mYXZpY29uLnN2Z1wiIH0sXG4gICAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGFwcENzcyB9LFxuICAgICAgeyByZWw6IFwicHJlY29ubmVjdFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiB9LFxuICAgICAgeyByZWw6IFwicHJlY29ubmVjdFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiwgY3Jvc3NPcmlnaW46IFwiYW5vbnltb3VzXCIgfSxcbiAgICBdLFxuICAgIHNjcmlwdHM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgICAgIGNoaWxkcmVuOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICBuYW1lOiBcIkdhcmRlbnMgUG9vbCBTZXJ2aWNlXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2FyZGVuc3Bvb2wubG92YWJsZS5hcHBcIixcbiAgICAgICAgICB0ZWxlcGhvbmU6IFwiKzEtNTYxLTIwMy0xOTAwXCIsXG4gICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgICAgICAgIHN0cmVldEFkZHJlc3M6IFwiNDIxMCBSYW5kb2xwaCBXYXlcIixcbiAgICAgICAgICAgIGFkZHJlc3NMb2NhbGl0eTogXCJQYWxtIEJlYWNoIEdhcmRlbnNcIixcbiAgICAgICAgICAgIGFkZHJlc3NSZWdpb246IFwiRkxcIixcbiAgICAgICAgICAgIHBvc3RhbENvZGU6IFwiMzM0MTBcIixcbiAgICAgICAgICAgIGFkZHJlc3NDb3VudHJ5OiBcIlVTXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICAgICAgY2hpbGRyZW46IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgXCJAdHlwZVwiOiBcIldlYlNpdGVcIixcbiAgICAgICAgICBuYW1lOiBcIkdhcmRlbnMgUG9vbCBTZXJ2aWNlXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2FyZGVuc3Bvb2wubG92YWJsZS5hcHBcIixcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIF0sXG4gIH0pLFxuICBzaGVsbENvbXBvbmVudDogUm9vdFNoZWxsLFxuICBjb21wb25lbnQ6IFJvb3RDb21wb25lbnQsXG4gIG5vdEZvdW5kQ29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCxcbiAgZXJyb3JDb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxufSk7XG5cbmNvbnN0IEZPTlRTX0hSRUYgPVxuICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJpY29sYWdlK0dyb3Rlc3F1ZTp3Z2h0QDUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCI7XG5cbmNvbnN0IEZPTlRTX0hUTUwgPSBgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGFzPVwic3R5bGVcIiBocmVmPVwiJHtGT05UU19IUkVGfVwiIG9ubG9hZD1cInRoaXMub25sb2FkPW51bGw7dGhpcy5yZWw9J3N0eWxlc2hlZXQnO3RoaXMubWVkaWE9J2FsbCdcIj48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIiR7Rk9OVFNfSFJFRn1cIiBtZWRpYT1cInByaW50XCI+PG5vc2NyaXB0PjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJHtGT05UU19IUkVGfVwiPjwvbm9zY3JpcHQ+YDtcblxuZnVuY3Rpb24gUm9vdFNoZWxsKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8SGVhZENvbnRlbnQgLz5cbiAgICAgICAgey8qIE5vbi1yZW5kZXItYmxvY2tpbmcgd2ViIGZvbnRzOiBsb2FkIGFzIHByaW50LCBzd2FwIHRvIGFsbCBvbiBsb2FkLiAqL31cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHtKU09OLnN0cmluZ2lmeShGT05UU19IVE1MKX0pO2AsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtGT05UU19IUkVGfSAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJvb3RDb21wb25lbnQoKSB7XG4gIGNvbnN0IHsgcXVlcnlDbGllbnQgfSA9IFJvdXRlLnVzZVJvdXRlQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICB7LyogUmVxdWlyZWQ6IG5lc3RlZCByb3V0ZXMgcmVuZGVyIGhlcmUuIFJlbW92aW5nIDxPdXRsZXQgLz4gYnJlYWtzIGFsbCBjaGlsZCByb3V0ZXMuICovfVxuICAgICAgPE91dGxldCAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2Rldi1zZXJ2ZXIvc3JjL3JvdXRlcy9fX3Jvb3QudHN4In0=