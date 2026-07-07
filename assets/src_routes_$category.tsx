import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/$category.tsx?tsr-split=component");import { Link } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7a96e4a1";
import { ArrowRight, Phone } from "/node_modules/.vite/deps/lucide-react.js?v=789d3dbd";
import { SiteLayout, CtaBand } from "/src/components/SiteLayout.tsx";
import { Route } from "/src/routes/$category.tsx";
var _jsxFileName = "/dev-server/src/routes/$category.tsx?tsr-split=component";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
function CategoryPage() {
	_s();
	const { label, posts, category } = Route.useLoaderData();
	return /* @__PURE__ */ _jsxDEV(SiteLayout, {
		"data-tsd-source": "/src/routes/$category.tsx:11:10",
		children: [
			/* @__PURE__ */ _jsxDEV("section", {
				className: "relative overflow-hidden bg-hero-gradient",
				"data-tsd-source": "/src/routes/$category.tsx:12:7",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%),radial-gradient(circle_at_75%_70%,white,transparent_45%)]",
					"data-tsd-source": "/src/routes/$category.tsx:13:9"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24",
					"data-tsd-source": "/src/routes/$category.tsx:14:9",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur",
							"data-tsd-source": "/src/routes/$category.tsx:15:11",
							children: "Articles"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 15,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h1", {
							className: "mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl",
							"data-tsd-source": "/src/routes/$category.tsx:18:11",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-5 max-w-2xl text-lg text-white/85",
							"data-tsd-source": "/src/routes/$category.tsx:21:11",
							children: "Guides and tips from the local pool experts at Gardens Pool Service in Palm Beach Gardens, FL."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-8",
							"data-tsd-source": "/src/routes/$category.tsx:24:11",
							children: /* @__PURE__ */ _jsxDEV("a", {
								href: "tel:+15612031900",
								className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-deep shadow-elegant",
								"data-tsd-source": "/src/routes/$category.tsx:25:13",
								children: [/* @__PURE__ */ _jsxDEV(Phone, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/routes/$category.tsx:26:15"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 26,
									columnNumber: 15
								}, this), " Call (561) 203-1900"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 25,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
				"data-tsd-source": "/src/routes/$category.tsx:32:7",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "grid gap-5 md:grid-cols-2",
					"data-tsd-source": "/src/routes/$category.tsx:33:9",
					children: posts.map((p) => /* @__PURE__ */ _jsxDEV(Link, {
						to: "/$category/$slug",
						params: {
							category,
							slug: p.slug
						},
						className: "group block rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant",
						"data-tsd-source": "/src/routes/$category.tsx:34:51",
						children: [
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep",
								"data-tsd-source": "/src/routes/$category.tsx:38:15",
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "mt-3 font-display text-xl font-bold text-foreground",
								"data-tsd-source": "/src/routes/$category.tsx:41:15",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/$category.tsx:44:15",
								children: p.paragraphs[0]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep",
								"data-tsd-source": "/src/routes/$category.tsx:47:15",
								children: ["Read article ", /* @__PURE__ */ _jsxDEV(ArrowRight, {
									className: "h-4 w-4 transition group-hover:translate-x-0.5",
									"data-tsd-source": "/src/routes/$category.tsx:48:30"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 30
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 15
							}, this)
						]
					}, p.slug, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 51
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(CtaBand, { "data-tsd-source": "/src/routes/$category.tsx:54:7" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
_s(CategoryPage, "yK1PtgGjGt1y2EFd6qdS1239764=", false, function() {
	return [Route.useLoaderData];
});
_c = CategoryPage;
export { CategoryPage as component };
var _c;
$RefreshReg$(_c, "CategoryPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/routes/$category.tsx?tsr-split=component";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/routes/$category.tsx?tsr-split=component", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/routes/$category.tsx?tsr-split=component", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/routes/$category.tsx?tsr-split=component" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQThEOzs7O0FBK0I5RDs7Ozs7O0dBSUE7SUFBQTtJQUFBO2NBQUEsQ0FDQTtLQUFBO0tBQUE7SUFBeUw7Ozs7Y0FDekw7S0FBQTtLQUFBO2VBQUE7TUFDQTtPQUFBO09BQUE7aUJBQTZNO01BRTdNOzs7OztNQUNBO09BQUE7T0FBQTtpQkFDQTtNQUNBOzs7OztNQUNBO09BQUE7T0FBQTtpQkFBNkQ7TUFFN0Q7Ozs7O01BQ0E7T0FBQTtPQUFBO2lCQUNBO1FBQUE7UUFBQTtRQUFBO2tCQUFBLENBSUE7U0FBQTtTQUFBO1FBQXdDOzs7O2tCQUFBLHNCQUN4Qzs7Ozs7O01BQ0E7Ozs7O0tBQ0E7Ozs7O1lBQ0E7Ozs7OztHQUVBO0lBQUE7SUFBQTtjQUNBO0tBQUE7S0FBQTtlQUNBO01BQUE7TUFBQTs7Ozs7O2dCQUFBO09BT0E7UUFBQTtRQUFBO2tCQUNBO09BQ0E7Ozs7O09BQ0E7UUFBQTtRQUFBO2tCQUNBO09BQ0E7Ozs7O09BQ0E7UUFBQTtRQUFBO2tCQUNBO09BQ0E7Ozs7O09BQ0E7UUFBQTtRQUFBO2tCQUFBLENBQTZHLGlCQUM3RztTQUFBO1NBQUE7UUFBbUc7Ozs7Z0JBQ25HOzs7Ozs7TUFDQTtRQW5CQTs7OztZQW1CQTtJQUVBOzs7OztHQUNBOzs7OztHQUVBLHVGQUFjOzs7OztFQUNkOzs7Ozs7QUFFQTs7Ozs7QUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiJGNhdGVnb3J5LnRzeD90c3Itc3BsaXQ9Y29tcG9uZW50Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUZpbGVSb3V0ZSwgTGluaywgbm90Rm91bmQgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgQXJyb3dSaWdodCwgUGhvbmUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBTaXRlTGF5b3V0LCBDdGFCYW5kIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TaXRlTGF5b3V0XCI7XG5pbXBvcnQgeyBDQVRFR09SWV9MQUJFTFMsIGdldFBvc3RzQnlDYXRlZ29yeSB9IGZyb20gXCJAL2xpYi9sZWdhY3ktcG9zdHNcIjtcblxuZXhwb3J0IGNvbnN0IFJvdXRlID0gY3JlYXRlRmlsZVJvdXRlKFwiLyRjYXRlZ29yeVwiKSh7XG4gIGxvYWRlcjogKHsgcGFyYW1zIH0pID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IENBVEVHT1JZX0xBQkVMU1twYXJhbXMuY2F0ZWdvcnldO1xuICAgIGlmICghbGFiZWwpIHRocm93IG5vdEZvdW5kKCk7XG4gICAgY29uc3QgcG9zdHMgPSBnZXRQb3N0c0J5Q2F0ZWdvcnkocGFyYW1zLmNhdGVnb3J5KTtcbiAgICBpZiAocG9zdHMubGVuZ3RoID09PSAwKSB0aHJvdyBub3RGb3VuZCgpO1xuICAgIHJldHVybiB7IGxhYmVsLCBwb3N0cywgY2F0ZWdvcnk6IHBhcmFtcy5jYXRlZ29yeSB9O1xuICB9LFxuICBoZWFkOiAoeyBsb2FkZXJEYXRhIH0pID0+IHtcbiAgICBpZiAoIWxvYWRlckRhdGEpIHJldHVybiB7fTtcbiAgICBjb25zdCB0aXRsZSA9IGAke2xvYWRlckRhdGEubGFiZWx9IEFydGljbGVzIHwgR2FyZGVucyBQb29sIFNlcnZpY2VgO1xuICAgIGNvbnN0IGRlc2MgPSBgJHtsb2FkZXJEYXRhLmxhYmVsfSBhcnRpY2xlcyBhbmQgZ3VpZGVzIGZyb20gR2FyZGVucyBQb29sIFNlcnZpY2UgaW4gUGFsbSBCZWFjaCBHYXJkZW5zLCBGTC4gQ2FsbCAoNTYxKSAyMDMtMTkwMC5gO1xuICAgIGNvbnN0IHVybCA9IGAvJHtsb2FkZXJEYXRhLmNhdGVnb3J5fS9gO1xuICAgIHJldHVybiB7XG4gICAgICBtZXRhOiBbXG4gICAgICAgIHsgdGl0bGUgfSxcbiAgICAgICAgeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2MgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0aXRsZVwiLCBjb250ZW50OiB0aXRsZSB9LFxuICAgICAgICB7IHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2MgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwid2Vic2l0ZVwiIH0sXG4gICAgICAgIHsgcHJvcGVydHk6IFwib2c6dXJsXCIsIGNvbnRlbnQ6IHVybCB9LFxuICAgICAgXSxcbiAgICAgIGxpbmtzOiBbeyByZWw6IFwiY2Fub25pY2FsXCIsIGhyZWY6IHVybCB9XSxcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnQ6IENhdGVnb3J5UGFnZSxcbn0pO1xuXG5mdW5jdGlvbiBDYXRlZ29yeVBhZ2UoKSB7XG4gIGNvbnN0IHsgbGFiZWwsIHBvc3RzLCBjYXRlZ29yeSB9ID0gUm91dGUudXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxTaXRlTGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLWhlcm8tZ3JhZGllbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMjUgW2JhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF8zMCVfMzAlLHdoaXRlLHRyYW5zcGFyZW50XzQ1JSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF83NSVfNzAlLHdoaXRlLHRyYW5zcGFyZW50XzQ1JSldXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTIwIHNtOnB4LTYgbGc6cHktMjRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMzAgYmctd2hpdGUvMTAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGJhY2tkcm9wLWJsdXJcIj5cbiAgICAgICAgICAgIEFydGljbGVzXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC01IG1heC13LTN4bCBmb250LWRpc3BsYXkgdGV4dC00eGwgZm9udC1ib2xkIGxlYWRpbmctWzEuMDVdIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHRleHQtYmFsYW5jZSBzbTp0ZXh0LTV4bFwiPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSBtYXgtdy0yeGwgdGV4dC1sZyB0ZXh0LXdoaXRlLzg1XCI+XG4gICAgICAgICAgICBHdWlkZXMgYW5kIHRpcHMgZnJvbSB0aGUgbG9jYWwgcG9vbCBleHBlcnRzIGF0IEdhcmRlbnMgUG9vbCBTZXJ2aWNlIGluIFBhbG0gQmVhY2ggR2FyZGVucywgRkwuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cInRlbDorMTU2MTIwMzE5MDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHB4LTYgcHktMy41IGZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5LWRlZXAgc2hhZG93LWVsZWdhbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+IENhbGwgKDU2MSkgMjAzLTE5MDBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktMTYgc206cHgtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTUgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICB7cG9zdHMubWFwKChwOiB0eXBlb2YgcG9zdHNbbnVtYmVyXSkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtwLnNsdWd9XG4gICAgICAgICAgICAgIHRvPVwiLyRjYXRlZ29yeS8kc2x1Z1wiXG4gICAgICAgICAgICAgIHBhcmFtcz17eyBjYXRlZ29yeSwgc2x1ZzogcC5zbHVnIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGJsb2NrIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYm9yZGVyIGJnLWNhcmQgcC03IHNoYWRvdy1jYXJkIHRyYW5zaXRpb24gaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSBob3ZlcjpzaGFkb3ctZWxlZ2FudFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXByaW1hcnktZGVlcFwiPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMyBmb250LWRpc3BsYXkgdGV4dC14bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAge3AudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgbGluZS1jbGFtcC0zIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAge3AucGFyYWdyYXBoc1swXX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC01IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZGVlcFwiPlxuICAgICAgICAgICAgICAgIFJlYWQgYXJ0aWNsZSA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTQgdy00IHRyYW5zaXRpb24gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMC41XCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEN0YUJhbmQgLz5cbiAgICA8L1NpdGVMYXlvdXQ+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9kZXYtc2VydmVyL3NyYy9yb3V0ZXMvJGNhdGVnb3J5LnRzeCJ9