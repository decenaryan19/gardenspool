import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/tag.$tag.tsx?tsr-split=component");import { Link } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7a96e4a1";
import { ArrowRight, Phone } from "/node_modules/.vite/deps/lucide-react.js?v=789d3dbd";
import { SiteLayout, CtaBand } from "/src/components/SiteLayout.tsx";
import { CATEGORY_LABELS } from "/src/lib/legacy-posts.ts";
import { Route } from "/src/routes/tag.$tag.tsx";
var _jsxFileName = "/dev-server/src/routes/tag.$tag.tsx?tsr-split=component";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
function TagPage() {
	_s();
	const { label, posts } = Route.useLoaderData();
	return /* @__PURE__ */ _jsxDEV(SiteLayout, {
		"data-tsd-source": "/src/routes/tag.$tag.tsx:11:10",
		children: [
			/* @__PURE__ */ _jsxDEV("section", {
				className: "relative overflow-hidden bg-hero-gradient",
				"data-tsd-source": "/src/routes/tag.$tag.tsx:12:7",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%),radial-gradient(circle_at_75%_70%,white,transparent_45%)]",
					"data-tsd-source": "/src/routes/tag.$tag.tsx:13:9"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24",
					"data-tsd-source": "/src/routes/tag.$tag.tsx:14:9",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur",
							"data-tsd-source": "/src/routes/tag.$tag.tsx:15:11",
							children: "Tag"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 15,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h1", {
							className: "mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl",
							"data-tsd-source": "/src/routes/tag.$tag.tsx:18:11",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-5 max-w-2xl text-lg text-white/85",
							"data-tsd-source": "/src/routes/tag.$tag.tsx:21:11",
							children: [
								"Browse pool service articles related to ",
								label,
								" from Gardens Pool Service."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-8",
							"data-tsd-source": "/src/routes/tag.$tag.tsx:24:11",
							children: /* @__PURE__ */ _jsxDEV("a", {
								href: "tel:+15612031900",
								className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-deep shadow-elegant",
								"data-tsd-source": "/src/routes/tag.$tag.tsx:25:13",
								children: [/* @__PURE__ */ _jsxDEV(Phone, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/routes/tag.$tag.tsx:26:15"
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
				"data-tsd-source": "/src/routes/tag.$tag.tsx:32:7",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "grid gap-5 md:grid-cols-2",
					"data-tsd-source": "/src/routes/tag.$tag.tsx:33:9",
					children: posts.map((p) => /* @__PURE__ */ _jsxDEV(Link, {
						to: "/$category/$slug",
						params: {
							category: p.category,
							slug: p.slug
						},
						className: "group block rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant",
						"data-tsd-source": "/src/routes/tag.$tag.tsx:34:51",
						children: [
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep",
								"data-tsd-source": "/src/routes/tag.$tag.tsx:38:15",
								children: CATEGORY_LABELS[p.category]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "mt-3 font-display text-xl font-bold text-foreground",
								"data-tsd-source": "/src/routes/tag.$tag.tsx:41:15",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/tag.$tag.tsx:42:15",
								children: p.paragraphs[0]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep",
								"data-tsd-source": "/src/routes/tag.$tag.tsx:43:15",
								children: ["Read article ", /* @__PURE__ */ _jsxDEV(ArrowRight, {
									className: "h-4 w-4 transition group-hover:translate-x-0.5",
									"data-tsd-source": "/src/routes/tag.$tag.tsx:44:30"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 44,
									columnNumber: 30
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 15
							}, this)
						]
					}, `${p.category}-${p.slug}`, true, {
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
			/* @__PURE__ */ _jsxDEV(CtaBand, { "data-tsd-source": "/src/routes/tag.$tag.tsx:50:7" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
_s(TagPage, "tHs7Er0Q4hQUORzKBLsUbzo0k9I=", false, function() {
	return [Route.useLoaderData];
});
_c = TagPage;
export { TagPage as component };
var _c;
$RefreshReg$(_c, "TagPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/routes/tag.$tag.tsx?tsr-split=component";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/routes/tag.$tag.tsx?tsr-split=component", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/routes/tag.$tag.tsx?tsr-split=component", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/routes/tag.$tag.tsx?tsr-split=component" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBbUU7Ozs7QUE2Qm5FOzs7Ozs7R0FJQTtJQUFBO0lBQUE7Y0FBQSxDQUNBO0tBQUE7S0FBQTtJQUF5TDs7OztjQUN6TDtLQUFBO0tBQUE7ZUFBQTtNQUNBO09BQUE7T0FBQTtpQkFBNk07TUFFN007Ozs7O01BQ0E7T0FBQTtPQUFBO2lCQUNBO01BQ0E7Ozs7O01BQ0E7T0FBQTtPQUFBO2lCQUFBO1FBQTZEO1FBQzdEO1FBQUE7T0FDQTs7Ozs7O01BQ0E7T0FBQTtPQUFBO2lCQUNBO1FBQUE7UUFBQTtRQUFBO2tCQUFBLENBQ0E7U0FBQTtTQUFBO1FBQXdDOzs7O2tCQUFBLHNCQUN4Qzs7Ozs7O01BQ0E7Ozs7O0tBQ0E7Ozs7O1lBQ0E7Ozs7OztHQUVBO0lBQUE7SUFBQTtjQUNBO0tBQUE7S0FBQTtlQUNBO01BQUE7TUFBQTs7Ozs7O2dCQUFBO09BT0E7UUFBQTtRQUFBO2tCQUNBO09BQ0E7Ozs7O09BQ0E7UUFBQTtRQUFBO2tCQUFpRjtPQUFBOzs7OztPQUNqRjtRQUFBO1FBQUE7a0JBQTRFO09BQUE7Ozs7O09BQzVFO1FBQUE7UUFBQTtrQkFBQSxDQUE2RyxpQkFDN0c7U0FBQTtTQUFBO1FBQW1HOzs7O2dCQUNuRzs7Ozs7O01BQ0E7UUFmQTs7OztZQWVBO0lBRUE7Ozs7O0dBQ0E7Ozs7O0dBRUEsc0ZBQWM7Ozs7O0VBQ2Q7Ozs7OztBQUVBOzs7OztBQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJ0YWcuJHRhZy50c3g/dHNyLXNwbGl0PWNvbXBvbmVudCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVGaWxlUm91dGUsIExpbmssIG5vdEZvdW5kIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IEFycm93UmlnaHQsIFBob25lIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU2l0ZUxheW91dCwgQ3RhQmFuZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2l0ZUxheW91dFwiO1xuaW1wb3J0IHsgTEVHQUNZX1BPU1RTLCBDQVRFR09SWV9MQUJFTFMgfSBmcm9tIFwiQC9saWIvbGVnYWN5LXBvc3RzXCI7XG5pbXBvcnQgeyBMRUdBQ1lfVEFHUyB9IGZyb20gXCJAL2xpYi9sZWdhY3ktdGFnc1wiO1xuXG5leHBvcnQgY29uc3QgUm91dGUgPSBjcmVhdGVGaWxlUm91dGUoXCIvdGFnLyR0YWdcIikoe1xuICBsb2FkZXI6ICh7IHBhcmFtcyB9KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBMRUdBQ1lfVEFHU1twYXJhbXMudGFnXTtcbiAgICBpZiAoIWxhYmVsKSB0aHJvdyBub3RGb3VuZCgpO1xuICAgIHJldHVybiB7IGxhYmVsLCB0YWc6IHBhcmFtcy50YWcsIHBvc3RzOiBMRUdBQ1lfUE9TVFMgfTtcbiAgfSxcbiAgaGVhZDogKHsgbG9hZGVyRGF0YSB9KSA9PiB7XG4gICAgaWYgKCFsb2FkZXJEYXRhKSByZXR1cm4ge307XG4gICAgY29uc3QgdGl0bGUgPSBgJHtsb2FkZXJEYXRhLmxhYmVsfSB8IEdhcmRlbnMgUG9vbCBTZXJ2aWNlYDtcbiAgICBjb25zdCBkZXNjID0gYEFydGljbGVzIHRhZ2dlZCAke2xvYWRlckRhdGEubGFiZWx9IGZyb20gR2FyZGVucyBQb29sIFNlcnZpY2UgaW4gUGFsbSBCZWFjaCBHYXJkZW5zLCBGTC4gQ2FsbCAoNTYxKSAyMDMtMTkwMC5gO1xuICAgIGNvbnN0IHVybCA9IGAvdGFnLyR7bG9hZGVyRGF0YS50YWd9L2A7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGE6IFtcbiAgICAgICAgeyB0aXRsZSB9LFxuICAgICAgICB7IG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgY29udGVudDogZGVzYyB9LFxuICAgICAgICB7IHByb3BlcnR5OiBcIm9nOnRpdGxlXCIsIGNvbnRlbnQ6IHRpdGxlIH0sXG4gICAgICAgIHsgcHJvcGVydHk6IFwib2c6ZGVzY3JpcHRpb25cIiwgY29udGVudDogZGVzYyB9LFxuICAgICAgICB7IHByb3BlcnR5OiBcIm9nOnR5cGVcIiwgY29udGVudDogXCJ3ZWJzaXRlXCIgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp1cmxcIiwgY29udGVudDogdXJsIH0sXG4gICAgICBdLFxuICAgICAgbGlua3M6IFt7IHJlbDogXCJjYW5vbmljYWxcIiwgaHJlZjogdXJsIH1dLFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudDogVGFnUGFnZSxcbn0pO1xuXG5mdW5jdGlvbiBUYWdQYWdlKCkge1xuICBjb25zdCB7IGxhYmVsLCBwb3N0cyB9ID0gUm91dGUudXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxTaXRlTGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLWhlcm8tZ3JhZGllbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMjUgW2JhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF8zMCVfMzAlLHdoaXRlLHRyYW5zcGFyZW50XzQ1JSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF83NSVfNzAlLHdoaXRlLHRyYW5zcGFyZW50XzQ1JSldXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTIwIHNtOnB4LTYgbGc6cHktMjRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMzAgYmctd2hpdGUvMTAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGJhY2tkcm9wLWJsdXJcIj5cbiAgICAgICAgICAgIFRhZ1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNSBtYXgtdy0zeGwgZm9udC1kaXNwbGF5IHRleHQtNHhsIGZvbnQtYm9sZCBsZWFkaW5nLVsxLjA1XSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCB0ZXh0LWJhbGFuY2Ugc206dGV4dC01eGxcIj5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgbWF4LXctMnhsIHRleHQtbGcgdGV4dC13aGl0ZS84NVwiPlxuICAgICAgICAgICAgQnJvd3NlIHBvb2wgc2VydmljZSBhcnRpY2xlcyByZWxhdGVkIHRvIHtsYWJlbH0gZnJvbSBHYXJkZW5zIFBvb2wgU2VydmljZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOisxNTYxMjAzMTkwMFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgcHgtNiBweS0zLjUgZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZGVlcCBzaGFkb3ctZWxlZ2FudFwiPlxuICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+IENhbGwgKDU2MSkgMjAzLTE5MDBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktMTYgc206cHgtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTUgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICB7cG9zdHMubWFwKChwOiB0eXBlb2YgcG9zdHNbbnVtYmVyXSkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtgJHtwLmNhdGVnb3J5fS0ke3Auc2x1Z31gfVxuICAgICAgICAgICAgICB0bz1cIi8kY2F0ZWdvcnkvJHNsdWdcIlxuICAgICAgICAgICAgICBwYXJhbXM9e3sgY2F0ZWdvcnk6IHAuY2F0ZWdvcnksIHNsdWc6IHAuc2x1ZyB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBibG9jayByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWJvcmRlciBiZy1jYXJkIHAtNyBzaGFkb3ctY2FyZCB0cmFuc2l0aW9uIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgaG92ZXI6c2hhZG93LWVsZWdhbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1wcmltYXJ5LWRlZXBcIj5cbiAgICAgICAgICAgICAgICB7Q0FURUdPUllfTEFCRUxTW3AuY2F0ZWdvcnldfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0zIGZvbnQtZGlzcGxheSB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj57cC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGxpbmUtY2xhbXAtMyB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntwLnBhcmFncmFwaHNbMF19PC9wPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC01IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZGVlcFwiPlxuICAgICAgICAgICAgICAgIFJlYWQgYXJ0aWNsZSA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTQgdy00IHRyYW5zaXRpb24gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMC41XCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEN0YUJhbmQgLz5cbiAgICA8L1NpdGVMYXlvdXQ+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9kZXYtc2VydmVyL3NyYy9yb3V0ZXMvdGFnLiR0YWcudHN4In0=