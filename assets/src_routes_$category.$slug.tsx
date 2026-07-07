import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/$category.$slug.tsx?tsr-split=component");import { Link } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7a96e4a1";
import { ArrowRight, Phone, Clock4 } from "/node_modules/.vite/deps/lucide-react.js?v=789d3dbd";
import { SiteLayout, CtaBand } from "/src/components/SiteLayout.tsx";
import { Route } from "/src/routes/$category.$slug.tsx";
var _jsxFileName = "/dev-server/src/routes/$category.$slug.tsx?tsr-split=component";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
function PostPage() {
	_s();
	const { post, label, related, category } = Route.useLoaderData();
	return /* @__PURE__ */ _jsxDEV(SiteLayout, {
		"data-tsd-source": "/src/routes/$category.$slug.tsx:12:10",
		children: [
			/* @__PURE__ */ _jsxDEV("section", {
				className: "relative overflow-hidden bg-hero-gradient",
				"data-tsd-source": "/src/routes/$category.$slug.tsx:13:7",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_25%_30%,white,transparent_45%),radial-gradient(circle_at_80%_70%,white,transparent_45%)]",
					"data-tsd-source": "/src/routes/$category.$slug.tsx:14:9"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24",
					"data-tsd-source": "/src/routes/$category.$slug.tsx:15:9",
					children: [
						/* @__PURE__ */ _jsxDEV(Link, {
							to: "/$category",
							params: { category },
							className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur",
							"data-tsd-source": "/src/routes/$category.$slug.tsx:16:11",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 16,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h1", {
							className: "mt-5 font-display text-3xl font-bold leading-[1.1] text-primary-foreground text-balance sm:text-4xl lg:text-5xl",
							"data-tsd-source": "/src/routes/$category.$slug.tsx:21:11",
							children: post.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-6 flex flex-wrap items-center gap-3",
							"data-tsd-source": "/src/routes/$category.$slug.tsx:24:11",
							children: [/* @__PURE__ */ _jsxDEV("a", {
								href: "tel:+15612031900",
								className: "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-primary-deep shadow-elegant",
								"data-tsd-source": "/src/routes/$category.$slug.tsx:25:13",
								children: [/* @__PURE__ */ _jsxDEV(Phone, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/routes/$category.$slug.tsx:26:15"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 26,
									columnNumber: 15
								}, this), " (561) 203-1900"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 25,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur",
								"data-tsd-source": "/src/routes/$category.$slug.tsx:28:13",
								children: [/* @__PURE__ */ _jsxDEV(Clock4, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/routes/$category.$slug.tsx:29:15"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 29,
									columnNumber: 15
								}, this), " Same-day service"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("article", {
				className: "mx-auto max-w-3xl px-4 py-16 sm:px-6",
				"data-tsd-source": "/src/routes/$category.$slug.tsx:35:7",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-5 text-lg leading-relaxed text-foreground/85",
					"data-tsd-source": "/src/routes/$category.$slug.tsx:36:9",
					children: post.paragraphs.map((p, i) => /* @__PURE__ */ _jsxDEV("p", {
						"data-tsd-source": "/src/routes/$category.$slug.tsx:37:58",
						children: p
					}, i, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 58
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "mt-12 flex flex-wrap gap-3",
					"data-tsd-source": "/src/routes/$category.$slug.tsx:40:9",
					children: [/* @__PURE__ */ _jsxDEV(Link, {
						to: "/pool-service-palm-beach-gardens",
						className: "inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-3 font-semibold text-primary-foreground shadow-card",
						"data-tsd-source": "/src/routes/$category.$slug.tsx:41:11",
						children: ["Our Pool Service ", /* @__PURE__ */ _jsxDEV(ArrowRight, {
							className: "h-4 w-4",
							"data-tsd-source": "/src/routes/$category.$slug.tsx:42:30"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 30
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV(Link, {
						to: "/contact-gardens-pool-service",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-foreground hover:bg-secondary",
						"data-tsd-source": "/src/routes/$category.$slug.tsx:44:11",
						children: ["Contact Us ", /* @__PURE__ */ _jsxDEV(ArrowRight, {
							className: "h-4 w-4",
							"data-tsd-source": "/src/routes/$category.$slug.tsx:45:24"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 24
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			related.length > 0 && /* @__PURE__ */ _jsxDEV("section", {
				className: "border-t border-border bg-secondary/40",
				"data-tsd-source": "/src/routes/$category.$slug.tsx:50:30",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
					"data-tsd-source": "/src/routes/$category.$slug.tsx:51:11",
					children: [/* @__PURE__ */ _jsxDEV("h2", {
						className: "font-display text-2xl font-bold text-foreground",
						"data-tsd-source": "/src/routes/$category.$slug.tsx:52:13",
						children: [
							"More ",
							label,
							" articles"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						"data-tsd-source": "/src/routes/$category.$slug.tsx:55:13",
						children: related.map((r) => /* @__PURE__ */ _jsxDEV(Link, {
							to: "/$category/$slug",
							params: {
								category,
								slug: r.slug
							},
							className: "group block rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5",
							"data-tsd-source": "/src/routes/$category.$slug.tsx:56:59",
							children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-display text-lg font-bold text-foreground",
								"data-tsd-source": "/src/routes/$category.$slug.tsx:60:19",
								children: r.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep",
								"data-tsd-source": "/src/routes/$category.$slug.tsx:63:19",
								children: [
									"Read: ",
									r.title,
									" ",
									/* @__PURE__ */ _jsxDEV(ArrowRight, {
										className: "h-4 w-4 transition group-hover:translate-x-0.5",
										"data-tsd-source": "/src/routes/$category.$slug.tsx:64:37"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 64,
										columnNumber: 37
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 19
							}, this)]
						}, r.slug, true, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 59
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 30
			}, this),
			/* @__PURE__ */ _jsxDEV(CtaBand, { "data-tsd-source": "/src/routes/$category.$slug.tsx:71:7" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
_s(PostPage, "oTN/qj5ycg5kNugnTkJui9u8Gx0=", false, function() {
	return [Route.useLoaderData];
});
_c = PostPage;
export { PostPage as component };
var _c;
$RefreshReg$(_c, "PostPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/routes/$category.$slug.tsx?tsr-split=component";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/routes/$category.$slug.tsx?tsr-split=component", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/routes/$category.$slug.tsx?tsr-split=component", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/routes/$category.$slug.tsx?tsr-split=component" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQThEOzs7O0FBc0Q5RDs7Ozs7O0dBSUE7SUFBQTtJQUFBO2NBQUEsQ0FDQTtLQUFBO0tBQUE7SUFBeUw7Ozs7Y0FDekw7S0FBQTtLQUFBO2VBQUE7TUFDQTtPQUFBO09BQUE7OztpQkFLQTtNQUNBOzs7OztNQUNBO09BQUE7T0FBQTtpQkFDQTtNQUNBOzs7OztNQUNBO09BQUE7T0FBQTtpQkFBQSxDQUNBO1FBQUE7UUFBQTtRQUFBO2tCQUFBLENBSUE7U0FBQTtTQUFBO1FBQXdDOzs7O2tCQUFBLGlCQUN4Qzs7Ozs7aUJBQ0E7UUFBQTtRQUFBO2tCQUFBLENBQ0E7U0FBQTtTQUFBO1FBQXlDOzs7O2tCQUFBLG1CQUN6Qzs7Ozs7ZUFDQTs7Ozs7O0tBQ0E7Ozs7O1lBQ0E7Ozs7OztHQUVBO0lBQUE7SUFBQTtjQUFBLENBQ0E7S0FBQTtLQUFBO2VBQ0E7TUFBQTtnQkFDc0I7S0FBQSxHQUR0Qjs7OztZQUNzQjtJQUV0Qjs7OztjQUVBO0tBQUE7S0FBQTtlQUFBLENBQ0E7TUFBQTtNQUFBO01BQUE7Z0JBQUEsQ0FFK0kscUJBRS9JO09BQUE7T0FBQTtNQUE0RDs7OztjQUM1RDs7Ozs7ZUFDQTtNQUFBO01BQUE7TUFBQTtnQkFBQSxDQUUySixlQUUzSjtPQUFBO09BQUE7TUFBc0Q7Ozs7Y0FDdEQ7Ozs7O2FBQ0E7Ozs7O1lBQ0E7Ozs7OztHQUVBO0lBQUE7SUFBQTtjQUVBO0tBQUE7S0FBQTtlQUFBLENBQ0E7TUFBQTtNQUFBO2dCQUFBO09BQTJFO09BQzNFO09BQUE7TUFDQTs7Ozs7ZUFDQTtNQUFBO01BQUE7Z0JBQ0E7T0FBQTtPQUFBOzs7Ozs7aUJBQUEsQ0FPQTtRQUFBO1FBQUE7a0JBQ0E7T0FDQTs7OztpQkFDQTtRQUFBO1FBQUE7a0JBQUE7U0FBaUg7U0FDakg7U0FBQTtTQUFBO1VBQUE7VUFBQTtTQUEwRzs7Ozs7UUFDMUc7Ozs7O2VBQ0E7U0FiQTs7OzthQWFBO0tBRUE7Ozs7YUFDQTs7Ozs7O0dBQ0E7Ozs7O0dBR0EsNkZBQWM7Ozs7O0VBQ2Q7Ozs7OztBQUVBOzs7OztBQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIkY2F0ZWdvcnkuJHNsdWcudHN4P3Rzci1zcGxpdD1jb21wb25lbnQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRmlsZVJvdXRlLCBMaW5rLCBub3RGb3VuZCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBQaG9uZSwgQ2xvY2s0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU2l0ZUxheW91dCwgQ3RhQmFuZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2l0ZUxheW91dFwiO1xuaW1wb3J0IHsgQ0FURUdPUllfTEFCRUxTLCBnZXRQb3N0LCBnZXRQb3N0c0J5Q2F0ZWdvcnkgfSBmcm9tIFwiQC9saWIvbGVnYWN5LXBvc3RzXCI7XG5cbmV4cG9ydCBjb25zdCBSb3V0ZSA9IGNyZWF0ZUZpbGVSb3V0ZShcIi8kY2F0ZWdvcnkvJHNsdWdcIikoe1xuICBsb2FkZXI6ICh7IHBhcmFtcyB9KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBDQVRFR09SWV9MQUJFTFNbcGFyYW1zLmNhdGVnb3J5XTtcbiAgICBjb25zdCBwb3N0ID0gbGFiZWwgPyBnZXRQb3N0KHBhcmFtcy5jYXRlZ29yeSwgcGFyYW1zLnNsdWcpIDogdW5kZWZpbmVkO1xuICAgIGlmICghbGFiZWwgfHwgIXBvc3QpIHRocm93IG5vdEZvdW5kKCk7XG4gICAgY29uc3QgcmVsYXRlZCA9IGdldFBvc3RzQnlDYXRlZ29yeShwYXJhbXMuY2F0ZWdvcnkpXG4gICAgICAuZmlsdGVyKChwKSA9PiBwLnNsdWcgIT09IHBhcmFtcy5zbHVnKVxuICAgICAgLnNsaWNlKDAsIDMpO1xuICAgIHJldHVybiB7IGxhYmVsLCBwb3N0LCByZWxhdGVkLCBjYXRlZ29yeTogcGFyYW1zLmNhdGVnb3J5IH07XG4gIH0sXG4gIGhlYWQ6ICh7IGxvYWRlckRhdGEgfSkgPT4ge1xuICAgIGlmICghbG9hZGVyRGF0YSkgcmV0dXJuIHt9O1xuICAgIGNvbnN0IHsgcG9zdCwgY2F0ZWdvcnkgfSA9IGxvYWRlckRhdGE7XG4gICAgY29uc3QgdGl0bGUgPSBgJHtwb3N0LnRpdGxlfSB8IEdhcmRlbnMgUG9vbCBTZXJ2aWNlYDtcbiAgICBjb25zdCBkZXNjID1cbiAgICAgIChwb3N0LnBhcmFncmFwaHNbMF0gPz8gXCJcIikuc2xpY2UoMCwgMTU1KSB8fFxuICAgICAgXCJQcm9mZXNzaW9uYWwgcG9vbCBzZXJ2aWNlIGluIFBhbG0gQmVhY2ggR2FyZGVucywgRkwuIENhbGwgKDU2MSkgMjAzLTE5MDAuXCI7XG4gICAgY29uc3QgdXJsID0gYC8ke2NhdGVnb3J5fS8ke3Bvc3Quc2x1Z30vYDtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0YTogW1xuICAgICAgICB7IHRpdGxlIH0sXG4gICAgICAgIHsgbmFtZTogXCJkZXNjcmlwdGlvblwiLCBjb250ZW50OiBkZXNjIH0sXG4gICAgICAgIHsgcHJvcGVydHk6IFwib2c6dGl0bGVcIiwgY29udGVudDogcG9zdC50aXRsZSB9LFxuICAgICAgICB7IHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2MgfSxcbiAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwiYXJ0aWNsZVwiIH0sXG4gICAgICAgIHsgcHJvcGVydHk6IFwib2c6dXJsXCIsIGNvbnRlbnQ6IHVybCB9LFxuICAgICAgXSxcbiAgICAgIGxpbmtzOiBbeyByZWw6IFwiY2Fub25pY2FsXCIsIGhyZWY6IHVybCB9XSxcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgICAgaGVhZGxpbmU6IHBvc3QudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGFydGljbGVTZWN0aW9uOiBsb2FkZXJEYXRhLmxhYmVsLFxuICAgICAgICAgICAgYXV0aG9yOiB7IFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIiwgbmFtZTogXCJHYXJkZW5zIFBvb2wgU2VydmljZVwiIH0sXG4gICAgICAgICAgICBwdWJsaXNoZXI6IHtcbiAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIkdhcmRlbnMgUG9vbCBTZXJ2aWNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkVudGl0eU9mUGFnZTogdXJsLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnQ6IFBvc3RQYWdlLFxufSk7XG5cbmZ1bmN0aW9uIFBvc3RQYWdlKCkge1xuICBjb25zdCB7IHBvc3QsIGxhYmVsLCByZWxhdGVkLCBjYXRlZ29yeSB9ID0gUm91dGUudXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxTaXRlTGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLWhlcm8tZ3JhZGllbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMjUgW2JhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF8yNSVfMzAlLHdoaXRlLHRyYW5zcGFyZW50XzQ1JSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF84MCVfNzAlLHdoaXRlLHRyYW5zcGFyZW50XzQ1JSldXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LTR4bCBweC00IHB5LTIwIHNtOnB4LTYgbGc6cHktMjRcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89XCIvJGNhdGVnb3J5XCJcbiAgICAgICAgICAgIHBhcmFtcz17eyBjYXRlZ29yeSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzMwIGJnLXdoaXRlLzEwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBiYWNrZHJvcC1ibHVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC01IGZvbnQtZGlzcGxheSB0ZXh0LTN4bCBmb250LWJvbGQgbGVhZGluZy1bMS4xXSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCB0ZXh0LWJhbGFuY2Ugc206dGV4dC00eGwgbGc6dGV4dC01eGxcIj5cbiAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cInRlbDorMTU2MTIwMzE5MDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHB4LTUgcHktMyBmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeS1kZWVwIHNoYWRvdy1lbGVnYW50XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPiAoNTYxKSAyMDMtMTkwMFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzMwIGJnLXdoaXRlLzEwIHB4LTQgcHktMi41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJhY2tkcm9wLWJsdXJcIj5cbiAgICAgICAgICAgICAgPENsb2NrNCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz4gU2FtZS1kYXkgc2VydmljZVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0zeGwgcHgtNCBweS0xNiBzbTpweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01IHRleHQtbGcgbGVhZGluZy1yZWxheGVkIHRleHQtZm9yZWdyb3VuZC84NVwiPlxuICAgICAgICAgIHtwb3N0LnBhcmFncmFwaHMubWFwKChwOiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtpfT57cH08L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgZmxleCBmbGV4LXdyYXAgZ2FwLTNcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89XCIvcG9vbC1zZXJ2aWNlLXBhbG0tYmVhY2gtZ2FyZGVuc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnktZGVlcCBweC01IHB5LTMgZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctY2FyZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3VyIFBvb2wgU2VydmljZSA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPVwiL2NvbnRhY3QtZ2FyZGVucy1wb29sLXNlcnZpY2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWJvcmRlciBiZy1jYXJkIHB4LTUgcHktMyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbnRhY3QgVXMgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAge3JlbGF0ZWQubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1ib3JkZXIgYmctc2Vjb25kYXJ5LzQwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTE2IHNtOnB4LTZcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICBNb3JlIHtsYWJlbH0gYXJ0aWNsZXNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBnYXAtNCBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgICB7cmVsYXRlZC5tYXAoKHI6IHR5cGVvZiByZWxhdGVkW251bWJlcl0pID0+IChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAga2V5PXtyLnNsdWd9XG4gICAgICAgICAgICAgICAgICB0bz1cIi8kY2F0ZWdvcnkvJHNsdWdcIlxuICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7IGNhdGVnb3J5LCBzbHVnOiByLnNsdWcgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGJsb2NrIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYm9yZGVyIGJnLWNhcmQgcC02IHNoYWRvdy1jYXJkIHRyYW5zaXRpb24gaG92ZXI6LXRyYW5zbGF0ZS15LTAuNVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAge3IudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5LWRlZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVhZDoge3IudGl0bGV9IDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cImgtNCB3LTQgdHJhbnNpdGlvbiBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKX1cblxuICAgICAgPEN0YUJhbmQgLz5cbiAgICA8L1NpdGVMYXlvdXQ+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9kZXYtc2VydmVyL3NyYy9yb3V0ZXMvJGNhdGVnb3J5LiRzbHVnLnRzeCJ9