import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/SiteLayout.tsx");import { SiteHeader } from "/src/components/SiteHeader.tsx";
import { SiteFooter } from "/src/components/SiteFooter.tsx";
var _jsxFileName = "/dev-server/src/components/SiteLayout.tsx";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
export function SiteLayout({ children }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex min-h-screen flex-col bg-background",
		"data-tsd-source": "/src/components/SiteLayout.tsx:7:5",
		children: [
			/* @__PURE__ */ _jsxDEV(SiteHeader, { "data-tsd-source": "/src/components/SiteLayout.tsx:8:7" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1",
				"data-tsd-source": "/src/components/SiteLayout.tsx:9:7",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(SiteFooter, { "data-tsd-source": "/src/components/SiteLayout.tsx:10:7" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
_c = SiteLayout;
export function CtaBand() {
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "relative overflow-hidden bg-hero-gradient text-primary-foreground",
		"data-tsd-source": "/src/components/SiteLayout.tsx:17:5",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]",
			"data-tsd-source": "/src/components/SiteLayout.tsx:18:7"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "relative mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_auto] md:items-center md:py-16",
			"data-tsd-source": "/src/components/SiteLayout.tsx:19:7",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				"data-tsd-source": "/src/components/SiteLayout.tsx:20:9",
				children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "font-display text-3xl font-bold text-balance sm:text-4xl",
					"data-tsd-source": "/src/components/SiteLayout.tsx:21:11",
					children: "Ready for a sparkling clean pool?"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "mt-3 max-w-2xl text-white/85",
					"data-tsd-source": "/src/components/SiteLayout.tsx:24:11",
					children: "Call 24 hours for a free, no-obligation estimate. We show up the same day."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("a", {
				href: "tel:+15612031900",
				className: "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-display text-lg font-semibold text-primary-deep shadow-elegant transition hover:scale-[1.02]",
				"data-tsd-source": "/src/components/SiteLayout.tsx:28:9",
				children: "📞 (561) 203-1900"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
_c2 = CtaBand;
var _c, _c2;
$RefreshReg$(_c, "SiteLayout");
$RefreshReg$(_c2, "CtaBand");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/SiteLayout.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/SiteLayout.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/SiteLayout.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/components/SiteLayout.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQ0E7QUFDQTs7O0FBRUE7Q0FDQSxPQUNBO0VBQUE7RUFBQTtZQUFBO0dBQ0EsOEZBQWtCOzs7OztHQUNsQjtJQUFBO0lBQUE7SUFBOEI7R0FBQTs7Ozs7R0FDOUIsK0ZBQWtCOzs7OztFQUNsQjs7Ozs7O0FBRUE7O0FBRUE7Q0FDQSxPQUNBO0VBQUE7RUFBQTtZQUFBLENBQ0E7R0FBQTtHQUFBO0VBQXdMOzs7O1lBQ3hMO0dBQUE7R0FBQTthQUFBLENBQ0E7SUFBQTtjQUFBLENBQ0E7S0FBQTtLQUFBO2VBQWtGO0lBRWxGOzs7O2NBQ0E7S0FBQTtLQUFBO2VBQXFEO0lBRXJEOzs7O1lBQ0E7Ozs7O2FBQ0E7SUFDQTtJQUNBO0lBQ0E7Y0FBUTtHQUVSOzs7O1dBQ0E7Ozs7O1VBQ0E7Ozs7OztBQUVBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTaXRlTGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2l0ZUhlYWRlciB9IGZyb20gXCIuL1NpdGVIZWFkZXJcIjtcbmltcG9ydCB7IFNpdGVGb290ZXIgfSBmcm9tIFwiLi9TaXRlRm9vdGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaXRlTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGJnLWJhY2tncm91bmRcIj5cbiAgICAgIDxTaXRlSGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTFcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPFNpdGVGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEN0YUJhbmQoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLWhlcm8tZ3JhZGllbnQgdGV4dC1wcmltYXJ5LWZvcmVncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTIwIFtiYWNrZ3JvdW5kLWltYWdlOnJhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfMjAlXzIwJSx3aGl0ZSx0cmFuc3BhcmVudF80MCUpLHJhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfODAlXzYwJSx3aGl0ZSx0cmFuc3BhcmVudF80NSUpXVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gZ3JpZCBtYXgtdy03eGwgZ2FwLTYgcHgtNCBweS0xNCBzbTpweC02IG1kOmdyaWQtY29scy1bMS40ZnJfYXV0b10gbWQ6aXRlbXMtY2VudGVyIG1kOnB5LTE2XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1iYWxhbmNlIHNtOnRleHQtNHhsXCI+XG4gICAgICAgICAgICBSZWFkeSBmb3IgYSBzcGFya2xpbmcgY2xlYW4gcG9vbD9cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgbWF4LXctMnhsIHRleHQtd2hpdGUvODVcIj5cbiAgICAgICAgICAgIENhbGwgMjQgaG91cnMgZm9yIGEgZnJlZSwgbm8tb2JsaWdhdGlvbiBlc3RpbWF0ZS4gV2Ugc2hvdyB1cCB0aGUgc2FtZSBkYXkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwidGVsOisxNTYxMjAzMTkwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBweC02IHB5LTQgZm9udC1kaXNwbGF5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZGVlcCBzaGFkb3ctZWxlZ2FudCB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLVsxLjAyXVwiXG4gICAgICAgID5cbiAgICAgICAgICDwn5OeICg1NjEpIDIwMy0xOTAwXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2Rldi1zZXJ2ZXIvc3JjL2NvbXBvbmVudHMvU2l0ZUxheW91dC50c3gifQ==