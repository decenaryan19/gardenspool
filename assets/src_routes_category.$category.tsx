import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/category.$category.tsx?tsr-split=component");import { Link } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7a96e4a1";
import { ArrowRight, Phone } from "/node_modules/.vite/deps/lucide-react.js?v=789d3dbd";
import { SiteLayout, CtaBand } from "/src/components/SiteLayout.tsx";
import { Route } from "/src/routes/category.$category.tsx";
var _jsxFileName = "/dev-server/src/routes/category.$category.tsx?tsr-split=component";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
function CategoryArchive() {
	_s();
	const { label, posts, category } = Route.useLoaderData();
	return /* @__PURE__ */ _jsxDEV(SiteLayout, {
		"data-tsd-source": "/src/routes/category.$category.tsx:11:10",
		children: [
			/* @__PURE__ */ _jsxDEV("section", {
				className: "relative overflow-hidden bg-hero-gradient",
				"data-tsd-source": "/src/routes/category.$category.tsx:12:7",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%),radial-gradient(circle_at_75%_70%,white,transparent_45%)]",
					"data-tsd-source": "/src/routes/category.$category.tsx:13:9"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24",
					"data-tsd-source": "/src/routes/category.$category.tsx:14:9",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur",
							"data-tsd-source": "/src/routes/category.$category.tsx:15:11",
							children: "Category"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 15,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h1", {
							className: "mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl",
							"data-tsd-source": "/src/routes/category.$category.tsx:18:11",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-5 max-w-2xl text-lg text-white/85",
							"data-tsd-source": "/src/routes/category.$category.tsx:21:11",
							children: [
								"Articles in the ",
								label,
								" category from Gardens Pool Service in Palm Beach Gardens, FL."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-8",
							"data-tsd-source": "/src/routes/category.$category.tsx:24:11",
							children: /* @__PURE__ */ _jsxDEV("a", {
								href: "tel:+15612031900",
								className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-deep shadow-elegant",
								"data-tsd-source": "/src/routes/category.$category.tsx:25:13",
								children: [/* @__PURE__ */ _jsxDEV(Phone, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/routes/category.$category.tsx:26:15"
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
				"data-tsd-source": "/src/routes/category.$category.tsx:32:7",
				children: posts.length === 0 ? /* @__PURE__ */ _jsxDEV("p", {
					className: "text-muted-foreground",
					"data-tsd-source": "/src/routes/category.$category.tsx:33:31",
					children: "No articles in this category yet."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 31
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: "grid gap-5 md:grid-cols-2",
					"data-tsd-source": "/src/routes/category.$category.tsx:33:108",
					children: posts.map((p) => /* @__PURE__ */ _jsxDEV(Link, {
						to: "/$category/$slug",
						params: {
							category,
							slug: p.slug
						},
						className: "group block rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant",
						"data-tsd-source": "/src/routes/category.$category.tsx:34:53",
						children: [
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep",
								"data-tsd-source": "/src/routes/category.$category.tsx:38:17",
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "mt-3 font-display text-xl font-bold text-foreground",
								"data-tsd-source": "/src/routes/category.$category.tsx:39:17",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/category.$category.tsx:40:17",
								children: p.paragraphs[0]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep",
								"data-tsd-source": "/src/routes/category.$category.tsx:41:17",
								children: ["Read article ", /* @__PURE__ */ _jsxDEV(ArrowRight, {
									className: "h-4 w-4 transition group-hover:translate-x-0.5",
									"data-tsd-source": "/src/routes/category.$category.tsx:42:32"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 42,
									columnNumber: 32
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 17
							}, this)
						]
					}, p.slug, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 53
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 167
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(CtaBand, { "data-tsd-source": "/src/routes/category.$category.tsx:48:7" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
_s(CategoryArchive, "yK1PtgGjGt1y2EFd6qdS1239764=", false, function() {
	return [Route.useLoaderData];
});
_c = CategoryArchive;
export { CategoryArchive as component };
var _c;
$RefreshReg$(_c, "CategoryArchive");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/routes/category.$category.tsx?tsr-split=component";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/routes/category.$category.tsx?tsr-split=component", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/routes/category.$category.tsx?tsr-split=component", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/routes/category.$category.tsx?tsr-split=component" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQThEOzs7O0FBOEI5RDs7Ozs7O0dBSUE7SUFBQTtJQUFBO2NBQUEsQ0FDQTtLQUFBO0tBQUE7SUFBeUw7Ozs7Y0FDekw7S0FBQTtLQUFBO2VBQUE7TUFDQTtPQUFBO09BQUE7aUJBQTZNO01BRTdNOzs7OztNQUNBO09BQUE7T0FBQTtpQkFDQTtNQUNBOzs7OztNQUNBO09BQUE7T0FBQTtpQkFBQTtRQUE2RDtRQUM3RDtRQUFBO09BQ0E7Ozs7OztNQUNBO09BQUE7T0FBQTtpQkFDQTtRQUFBO1FBQUE7UUFBQTtrQkFBQSxDQUNBO1NBQUE7U0FBQTtRQUF3Qzs7OztrQkFBQSxzQkFDeEM7Ozs7OztNQUNBOzs7OztLQUNBOzs7OztZQUNBOzs7Ozs7R0FFQTtJQUFBO0lBQUE7Y0FDQTtLQUFBO0tBQUE7ZUFDOEM7SUFBQTs7OztlQUFBO0tBQUE7S0FBQTtlQUc5QztNQUFBO01BQUE7Ozs7OztnQkFBQTtPQU9BO1FBQUE7UUFBQTtrQkFBaUc7T0FBQTs7Ozs7T0FDakc7UUFBQTtRQUFBO2tCQUFtRjtPQUFBOzs7OztPQUNuRjtRQUFBO1FBQUE7a0JBQThFO09BQUE7Ozs7O09BQzlFO1FBQUE7UUFBQTtrQkFBQSxDQUErRyxpQkFDL0c7U0FBQTtTQUFBO1FBQXFHOzs7O2dCQUNyRzs7Ozs7O01BQ0E7UUFiQTs7OztZQWFBO0lBRUE7Ozs7O0dBRUE7Ozs7O0dBRUEsZ0dBQWM7Ozs7O0VBQ2Q7Ozs7OztBQUVBOzs7OztBQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJjYXRlZ29yeS4kY2F0ZWdvcnkudHN4P3Rzci1zcGxpdD1jb21wb25lbnQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRmlsZVJvdXRlLCBMaW5rLCBub3RGb3VuZCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBQaG9uZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IFNpdGVMYXlvdXQsIEN0YUJhbmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL1NpdGVMYXlvdXRcIjtcbmltcG9ydCB7IENBVEVHT1JZX0xBQkVMUywgZ2V0UG9zdHNCeUNhdGVnb3J5IH0gZnJvbSBcIkAvbGliL2xlZ2FjeS1wb3N0c1wiO1xuXG5leHBvcnQgY29uc3QgUm91dGUgPSBjcmVhdGVGaWxlUm91dGUoXCIvY2F0ZWdvcnkvJGNhdGVnb3J5XCIpKHtcbiAgbG9hZGVyOiAoeyBwYXJhbXMgfSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gQ0FURUdPUllfTEFCRUxTW3BhcmFtcy5jYXRlZ29yeV07XG4gICAgaWYgKCFsYWJlbCkgdGhyb3cgbm90Rm91bmQoKTtcbiAgICBjb25zdCBwb3N0cyA9IGdldFBvc3RzQnlDYXRlZ29yeShwYXJhbXMuY2F0ZWdvcnkpO1xuICAgIHJldHVybiB7IGxhYmVsLCBwb3N0cywgY2F0ZWdvcnk6IHBhcmFtcy5jYXRlZ29yeSB9O1xuICB9LFxuICBoZWFkOiAoeyBsb2FkZXJEYXRhIH0pID0+IHtcbiAgICBpZiAoIWxvYWRlckRhdGEpIHJldHVybiB7fTtcbiAgICBjb25zdCB0aXRsZSA9IGAke2xvYWRlckRhdGEubGFiZWx9IEFydGljbGVzIHwgR2FyZGVucyBQb29sIFNlcnZpY2VgO1xuICAgIGNvbnN0IGRlc2MgPSBgJHtsb2FkZXJEYXRhLmxhYmVsfSBhcnRpY2xlcyBhbmQgZ3VpZGVzIGZyb20gR2FyZGVucyBQb29sIFNlcnZpY2UgaW4gUGFsbSBCZWFjaCBHYXJkZW5zLCBGTC4gQ2FsbCAoNTYxKSAyMDMtMTkwMC5gO1xuICAgIGNvbnN0IHVybCA9IGAvY2F0ZWdvcnkvJHtsb2FkZXJEYXRhLmNhdGVnb3J5fS9gO1xuICAgIHJldHVybiB7XG4gICAgICBtZXRhOiBbXG4gICAgICAgIHsgdGl0bGUgfSxcbiAgICAgICAgeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2MgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0aXRsZVwiLCBjb250ZW50OiB0aXRsZSB9LFxuICAgICAgICB7IHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2MgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwid2Vic2l0ZVwiIH0sXG4gICAgICAgIHsgcHJvcGVydHk6IFwib2c6dXJsXCIsIGNvbnRlbnQ6IHVybCB9LFxuICAgICAgXSxcbiAgICAgIGxpbmtzOiBbeyByZWw6IFwiY2Fub25pY2FsXCIsIGhyZWY6IGAvJHtsb2FkZXJEYXRhLmNhdGVnb3J5fS9gIH1dLFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudDogQ2F0ZWdvcnlBcmNoaXZlLFxufSk7XG5cbmZ1bmN0aW9uIENhdGVnb3J5QXJjaGl2ZSgpIHtcbiAgY29uc3QgeyBsYWJlbCwgcG9zdHMsIGNhdGVnb3J5IH0gPSBSb3V0ZS51c2VMb2FkZXJEYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPFNpdGVMYXlvdXQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gYmctaGVyby1ncmFkaWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS0yNSBbYmFja2dyb3VuZC1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2F0XzMwJV8zMCUsd2hpdGUsdHJhbnNwYXJlbnRfNDUlKSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2F0Xzc1JV83MCUsd2hpdGUsdHJhbnNwYXJlbnRfNDUlKV1cIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktMjAgc206cHgtNiBsZzpweS0yNFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZS8zMCBiZy13aGl0ZS8xMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgYmFja2Ryb3AtYmx1clwiPlxuICAgICAgICAgICAgQ2F0ZWdvcnlcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTUgbWF4LXctM3hsIGZvbnQtZGlzcGxheSB0ZXh0LTR4bCBmb250LWJvbGQgbGVhZGluZy1bMS4wNV0gdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgdGV4dC1iYWxhbmNlIHNtOnRleHQtNXhsXCI+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IG1heC13LTJ4bCB0ZXh0LWxnIHRleHQtd2hpdGUvODVcIj5cbiAgICAgICAgICAgIEFydGljbGVzIGluIHRoZSB7bGFiZWx9IGNhdGVnb3J5IGZyb20gR2FyZGVucyBQb29sIFNlcnZpY2UgaW4gUGFsbSBCZWFjaCBHYXJkZW5zLCBGTC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOisxNTYxMjAzMTkwMFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgcHgtNiBweS0zLjUgZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZGVlcCBzaGFkb3ctZWxlZ2FudFwiPlxuICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+IENhbGwgKDU2MSkgMjAzLTE5MDBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktMTYgc206cHgtNlwiPlxuICAgICAgICB7cG9zdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPk5vIGFydGljbGVzIGluIHRoaXMgY2F0ZWdvcnkgeWV0LjwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTUgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHA6IHR5cGVvZiBwb3N0c1tudW1iZXJdKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtwLnNsdWd9XG4gICAgICAgICAgICAgICAgdG89XCIvJGNhdGVnb3J5LyRzbHVnXCJcbiAgICAgICAgICAgICAgICBwYXJhbXM9e3sgY2F0ZWdvcnksIHNsdWc6IHAuc2x1ZyB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGJsb2NrIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYm9yZGVyIGJnLWNhcmQgcC03IHNoYWRvdy1jYXJkIHRyYW5zaXRpb24gaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSBob3ZlcjpzaGFkb3ctZWxlZ2FudFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1wcmltYXJ5LWRlZXBcIj57bGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0zIGZvbnQtZGlzcGxheSB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj57cC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgbGluZS1jbGFtcC0zIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3AucGFyYWdyYXBoc1swXX08L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5LWRlZXBcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgYXJ0aWNsZSA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTQgdy00IHRyYW5zaXRpb24gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMC41XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8Q3RhQmFuZCAvPlxuICAgIDwvU2l0ZUxheW91dD5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2Rldi1zZXJ2ZXIvc3JjL3JvdXRlcy9jYXRlZ29yeS4kY2F0ZWdvcnkudHN4In0=