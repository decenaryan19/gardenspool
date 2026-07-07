import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/author.tsx?tsr-split=component");import { Link } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7a96e4a1";
import { Phone, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=789d3dbd";
import { SiteLayout, CtaBand } from "/src/components/SiteLayout.tsx";
import { LEGACY_POSTS, CATEGORY_LABELS } from "/src/lib/legacy-posts.ts";
var _jsxFileName = "/dev-server/src/routes/author.tsx?tsr-split=component";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
function AuthorPage() {
	return /* @__PURE__ */ _jsxDEV(SiteLayout, {
		"data-tsd-source": "/src/routes/author.tsx:6:10",
		children: [
			/* @__PURE__ */ _jsxDEV("section", {
				className: "relative overflow-hidden bg-hero-gradient",
				"data-tsd-source": "/src/routes/author.tsx:7:7",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%),radial-gradient(circle_at_75%_70%,white,transparent_45%)]",
					"data-tsd-source": "/src/routes/author.tsx:8:9"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 8,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24",
					"data-tsd-source": "/src/routes/author.tsx:9:9",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur",
							"data-tsd-source": "/src/routes/author.tsx:10:11",
							children: "Author"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 10,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h1", {
							className: "mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl",
							"data-tsd-source": "/src/routes/author.tsx:13:11",
							children: "Gardens Pool Service Team"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 13,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-5 max-w-2xl text-lg text-white/85",
							"data-tsd-source": "/src/routes/author.tsx:16:11",
							children: "Articles, guides, and tips written by the Gardens Pool Service team — a family-owned pool service company serving Palm Beach Gardens, Jupiter, North Palm Beach, and Juno Beach since the 1990s."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 16,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-8",
							"data-tsd-source": "/src/routes/author.tsx:19:11",
							children: /* @__PURE__ */ _jsxDEV("a", {
								href: "tel:+15612031900",
								className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-deep shadow-elegant",
								"data-tsd-source": "/src/routes/author.tsx:20:13",
								children: [/* @__PURE__ */ _jsxDEV(Phone, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/routes/author.tsx:21:15"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 21,
									columnNumber: 15
								}, this), " Call (561) 203-1900"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 20,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
				"data-tsd-source": "/src/routes/author.tsx:27:7",
				children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "font-display text-2xl font-bold text-foreground",
					"data-tsd-source": "/src/routes/author.tsx:28:9",
					children: "All articles"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6 grid gap-5 md:grid-cols-2",
					"data-tsd-source": "/src/routes/author.tsx:29:9",
					children: LEGACY_POSTS.map((p) => /* @__PURE__ */ _jsxDEV(Link, {
						to: "/$category/$slug",
						params: {
							category: p.category,
							slug: p.slug
						},
						className: "group block rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant",
						"data-tsd-source": "/src/routes/author.tsx:30:34",
						children: [
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep",
								"data-tsd-source": "/src/routes/author.tsx:34:15",
								children: CATEGORY_LABELS[p.category]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "mt-3 font-display text-xl font-bold text-foreground",
								"data-tsd-source": "/src/routes/author.tsx:37:15",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/author.tsx:38:15",
								children: p.paragraphs[0]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep",
								"data-tsd-source": "/src/routes/author.tsx:39:15",
								children: ["Read article ", /* @__PURE__ */ _jsxDEV(ArrowRight, {
									className: "h-4 w-4 transition group-hover:translate-x-0.5",
									"data-tsd-source": "/src/routes/author.tsx:40:30"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 30
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 15
							}, this)
						]
					}, `${p.category}-${p.slug}`, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 34
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(CtaBand, { "data-tsd-source": "/src/routes/author.tsx:46:7" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 10
	}, this);
}
_c = AuthorPage;
export { AuthorPage as component };
var _c;
$RefreshReg$(_c, "AuthorPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/routes/author.tsx?tsr-split=component";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/routes/author.tsx?tsr-split=component", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/routes/author.tsx?tsr-split=component", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/routes/author.tsx?tsr-split=component" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQXFCQTs7OztHQUdBO0lBQUE7SUFBQTtjQUFBLENBQ0E7S0FBQTtLQUFBO0lBQXlMOzs7O2NBQ3pMO0tBQUE7S0FBQTtlQUFBO01BQ0E7T0FBQTtPQUFBO2lCQUE2TTtNQUU3TTs7Ozs7TUFDQTtPQUFBO09BQUE7aUJBQXdJO01BRXhJOzs7OztNQUNBO09BQUE7T0FBQTtpQkFBNkQ7TUFFN0Q7Ozs7O01BQ0E7T0FBQTtPQUFBO2lCQUNBO1FBQUE7UUFBQTtRQUFBO2tCQUFBLENBQ0E7U0FBQTtTQUFBO1FBQXdDOzs7O2tCQUFBLHNCQUN4Qzs7Ozs7O01BQ0E7Ozs7O0tBQ0E7Ozs7O1lBQ0E7Ozs7OztHQUVBO0lBQUE7SUFBQTtjQUFBLENBQ0E7S0FBQTtLQUFBO2VBQXVFO0lBQUE7Ozs7Y0FDdkU7S0FBQTtLQUFBO2VBQ0E7TUFBQTtNQUFBOzs7Ozs7Z0JBQUE7T0FPQTtRQUFBO1FBQUE7a0JBQ0E7T0FDQTs7Ozs7T0FDQTtRQUFBO1FBQUE7a0JBQWlGO09BQUE7Ozs7O09BQ2pGO1FBQUE7UUFBQTtrQkFBNEU7T0FBQTs7Ozs7T0FDNUU7UUFBQTtRQUFBO2tCQUFBLENBQTZHLGlCQUM3RztTQUFBO1NBQUE7UUFBbUc7Ozs7Z0JBQ25HOzs7Ozs7TUFDQTtRQWZBOzs7O1lBZUE7SUFFQTs7OztZQUNBOzs7Ozs7R0FFQSxvRkFBYzs7Ozs7RUFDZDs7Ozs7O0FBRUE7O0FBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImF1dGhvci50c3g/dHNyLXNwbGl0PWNvbXBvbmVudCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVGaWxlUm91dGUsIExpbmsgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgUGhvbmUsIEFycm93UmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBTaXRlTGF5b3V0LCBDdGFCYW5kIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TaXRlTGF5b3V0XCI7XG5pbXBvcnQgeyBMRUdBQ1lfUE9TVFMsIENBVEVHT1JZX0xBQkVMUyB9IGZyb20gXCJAL2xpYi9sZWdhY3ktcG9zdHNcIjtcblxuZXhwb3J0IGNvbnN0IFJvdXRlID0gY3JlYXRlRmlsZVJvdXRlKFwiL2F1dGhvclwiKSh7XG4gIGhlYWQ6ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IFwiQXV0aG9yIHwgR2FyZGVucyBQb29sIFNlcnZpY2VcIjtcbiAgICBjb25zdCBkZXNjID0gXCJBcnRpY2xlcyBieSB0aGUgR2FyZGVucyBQb29sIFNlcnZpY2UgdGVhbSBpbiBQYWxtIEJlYWNoIEdhcmRlbnMsIEZMLiBDYWxsICg1NjEpIDIwMy0xOTAwLlwiO1xuICAgIHJldHVybiB7XG4gICAgICBtZXRhOiBbXG4gICAgICAgIHsgdGl0bGUgfSxcbiAgICAgICAgeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2MgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0aXRsZVwiLCBjb250ZW50OiB0aXRsZSB9LFxuICAgICAgICB7IHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2MgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwid2Vic2l0ZVwiIH0sXG4gICAgICAgIHsgcHJvcGVydHk6IFwib2c6dXJsXCIsIGNvbnRlbnQ6IFwiL2F1dGhvci9cIiB9LFxuICAgICAgXSxcbiAgICAgIGxpbmtzOiBbeyByZWw6IFwiY2Fub25pY2FsXCIsIGhyZWY6IFwiL2F1dGhvci9cIiB9XSxcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnQ6IEF1dGhvclBhZ2UsXG59KTtcblxuZnVuY3Rpb24gQXV0aG9yUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8U2l0ZUxheW91dD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy1oZXJvLWdyYWRpZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTI1IFtiYWNrZ3JvdW5kLWltYWdlOnJhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfMzAlXzMwJSx3aGl0ZSx0cmFuc3BhcmVudF80NSUpLHJhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfNzUlXzcwJSx3aGl0ZSx0cmFuc3BhcmVudF80NSUpXVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYXgtdy03eGwgcHgtNCBweS0yMCBzbTpweC02IGxnOnB5LTI0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzMwIGJnLXdoaXRlLzEwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBiYWNrZHJvcC1ibHVyXCI+XG4gICAgICAgICAgICBBdXRob3JcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTUgbWF4LXctM3hsIGZvbnQtZGlzcGxheSB0ZXh0LTR4bCBmb250LWJvbGQgbGVhZGluZy1bMS4wNV0gdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgdGV4dC1iYWxhbmNlIHNtOnRleHQtNXhsXCI+XG4gICAgICAgICAgICBHYXJkZW5zIFBvb2wgU2VydmljZSBUZWFtXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IG1heC13LTJ4bCB0ZXh0LWxnIHRleHQtd2hpdGUvODVcIj5cbiAgICAgICAgICAgIEFydGljbGVzLCBndWlkZXMsIGFuZCB0aXBzIHdyaXR0ZW4gYnkgdGhlIEdhcmRlbnMgUG9vbCBTZXJ2aWNlIHRlYW0g4oCUIGEgZmFtaWx5LW93bmVkIHBvb2wgc2VydmljZSBjb21wYW55IHNlcnZpbmcgUGFsbSBCZWFjaCBHYXJkZW5zLCBKdXBpdGVyLCBOb3J0aCBQYWxtIEJlYWNoLCBhbmQgSnVubyBCZWFjaCBzaW5jZSB0aGUgMTk5MHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMTU2MTIwMzE5MDBcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHB4LTYgcHktMy41IGZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5LWRlZXAgc2hhZG93LWVsZWdhbnRcIj5cbiAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPiBDYWxsICg1NjEpIDIwMy0xOTAwXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTE2IHNtOnB4LTZcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+QWxsIGFydGljbGVzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ2FwLTUgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICB7TEVHQUNZX1BPU1RTLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtgJHtwLmNhdGVnb3J5fS0ke3Auc2x1Z31gfVxuICAgICAgICAgICAgICB0bz1cIi8kY2F0ZWdvcnkvJHNsdWdcIlxuICAgICAgICAgICAgICBwYXJhbXM9e3sgY2F0ZWdvcnk6IHAuY2F0ZWdvcnksIHNsdWc6IHAuc2x1ZyB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBibG9jayByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWJvcmRlciBiZy1jYXJkIHAtNyBzaGFkb3ctY2FyZCB0cmFuc2l0aW9uIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgaG92ZXI6c2hhZG93LWVsZWdhbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1wcmltYXJ5LWRlZXBcIj5cbiAgICAgICAgICAgICAgICB7Q0FURUdPUllfTEFCRUxTW3AuY2F0ZWdvcnldfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0zIGZvbnQtZGlzcGxheSB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj57cC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGxpbmUtY2xhbXAtMyB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntwLnBhcmFncmFwaHNbMF19PC9wPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC01IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZGVlcFwiPlxuICAgICAgICAgICAgICAgIFJlYWQgYXJ0aWNsZSA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTQgdy00IHRyYW5zaXRpb24gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMC41XCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEN0YUJhbmQgLz5cbiAgICA8L1NpdGVMYXlvdXQ+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9kZXYtc2VydmVyL3NyYy9yb3V0ZXMvYXV0aG9yLnRzeCJ9