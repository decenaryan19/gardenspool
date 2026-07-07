import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/SiteHeader.tsx");const useState = __vite__cjsImport2_react["useState"];import { Link } from "/node_modules/@tanstack/react-router/dist/esm/index.dev.js?v=7a96e4a1";
import { Phone, Menu, X, Waves } from "/node_modules/.vite/deps/lucide-react.js?v=789d3dbd";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=fb6b258e";
var _jsxFileName = "/dev-server/src/components/SiteHeader.tsx";
import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
const NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Pool Service",
		to: "/pool-service-palm-beach-gardens"
	},
	{
		label: "About Us",
		to: "/about-gardens-pool-service"
	},
	{
		label: "Contact Us",
		to: "/contact-gardens-pool-service"
	}
];
export function SiteHeader() {
	_s();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ _jsxDEV("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg",
		"data-tsd-source": "/src/components/SiteHeader.tsx:16:5",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4",
			"data-tsd-source": "/src/components/SiteHeader.tsx:17:7",
			children: [/* @__PURE__ */ _jsxDEV(Link, {
				to: "/",
				className: "flex min-w-0 items-center gap-2.5",
				"data-tsd-source": "/src/components/SiteHeader.tsx:18:9",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-hero-gradient text-primary-foreground shadow-glow",
					"data-tsd-source": "/src/components/SiteHeader.tsx:19:11",
					children: /* @__PURE__ */ _jsxDEV(Waves, {
						className: "h-5 w-5",
						"data-tsd-source": "/src/components/SiteHeader.tsx:20:13"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					className: "min-w-0",
					"data-tsd-source": "/src/components/SiteHeader.tsx:22:11",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "block truncate font-display text-lg font-bold leading-tight text-foreground sm:text-xl",
						"data-tsd-source": "/src/components/SiteHeader.tsx:23:13",
						children: "Gardens Pool Service"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block",
						"data-tsd-source": "/src/components/SiteHeader.tsx:26:13",
						children: "Palm Beach Gardens, FL"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center gap-2 sm:gap-4",
				"data-tsd-source": "/src/components/SiteHeader.tsx:32:9",
				children: [
					/* @__PURE__ */ _jsxDEV("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"data-tsd-source": "/src/components/SiteHeader.tsx:33:11",
						children: NAV.map((item) => /* @__PURE__ */ _jsxDEV(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary-deep",
							"data-tsd-source": "/src/components/SiteHeader.tsx:35:15",
							children: item.label
						}, item.to, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("a", {
						href: "tel:+15612031900",
						className: "hidden items-center gap-2 rounded-full bg-primary-deep px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:opacity-95 md:inline-flex",
						"data-tsd-source": "/src/components/SiteHeader.tsx:45:11",
						children: [/* @__PURE__ */ _jsxDEV(Phone, {
							className: "h-4 w-4",
							"data-tsd-source": "/src/components/SiteHeader.tsx:49:13"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							"data-tsd-source": "/src/components/SiteHeader.tsx:50:13",
							children: "(561) 203-1900"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden",
						"data-tsd-source": "/src/components/SiteHeader.tsx:52:11",
						children: open ? /* @__PURE__ */ _jsxDEV(X, {
							className: "h-5 w-5",
							"data-tsd-source": "/src/components/SiteHeader.tsx:58:21"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 21
						}, this) : /* @__PURE__ */ _jsxDEV(Menu, {
							className: "h-5 w-5",
							"data-tsd-source": "/src/components/SiteHeader.tsx:58:49"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 104
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this), open && /* @__PURE__ */ _jsxDEV("nav", {
			className: "border-t border-border bg-background lg:hidden",
			"data-tsd-source": "/src/components/SiteHeader.tsx:63:9",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6",
				"data-tsd-source": "/src/components/SiteHeader.tsx:64:11",
				children: [NAV.map((item) => /* @__PURE__ */ _jsxDEV(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: item.to === "/" },
					className: "rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-secondary [&.active]:bg-secondary [&.active]:text-primary-deep",
					"data-tsd-source": "/src/components/SiteHeader.tsx:66:15",
					children: item.label
				}, item.to, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 15
				}, this)), /* @__PURE__ */ _jsxDEV("a", {
					href: "tel:+15612031900",
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-deep px-4 py-3 text-sm font-semibold text-primary-foreground",
					"data-tsd-source": "/src/components/SiteHeader.tsx:76:13",
					children: [/* @__PURE__ */ _jsxDEV(Phone, {
						className: "h-4 w-4",
						"data-tsd-source": "/src/components/SiteHeader.tsx:80:15"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 15
					}, this), "Call (561) 203-1900"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
_s(SiteHeader, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = SiteHeader;
var _c;
$RefreshReg$(_c, "SiteHeader");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/SiteHeader.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/SiteHeader.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/SiteHeader.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/dev-server/src/components/SiteHeader.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOzs7O0FBRUE7Q0FDQTtFQUFBO0VBQUE7Q0FBQTtDQUNBO0VBQUE7RUFBQTtDQUFBO0NBQ0E7RUFBQTtFQUFBO0NBQUE7Q0FDQTtFQUFBO0VBQUE7Q0FBQTtBQUNBO0FBRUE7O0NBQ0E7Q0FFQSxPQUNBO0VBQUE7RUFBQTtZQUFBLENBQ0E7R0FBQTtHQUFBO2FBQUEsQ0FDQTtJQUFBO0lBQUE7SUFBQTtjQUFBLENBQ0E7S0FBQTtLQUFBO2VBQ0E7TUFBQTtNQUFBO0tBQXVDOzs7OztJQUN2Qzs7OztjQUNBO0tBQUE7S0FBQTtlQUFBLENBQ0E7TUFBQTtNQUFBO2dCQUFvSDtLQUVwSDs7OztlQUNBO01BQUE7TUFBQTtnQkFBdUg7S0FFdkg7Ozs7YUFDQTs7Ozs7WUFDQTs7Ozs7YUFFQTtJQUFBO0lBQUE7Y0FBQTtLQUNBO01BQUE7TUFBQTtnQkFDQSxrQkFDQTtPQUVBO09BQ0E7T0FDQTtPQUNBO2lCQUNBO01BQ0EsR0FOQTs7OzthQU1BLENBQ0E7S0FDQTs7Ozs7S0FDQTtNQUNBO01BQ0E7TUFDQTtnQkFIQSxDQUlBO09BQUE7T0FBQTtNQUF1Qzs7OztnQkFDdkM7T0FBQTtpQkFBaUI7TUFBQTs7OztjQUNqQjs7Ozs7O0tBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO2dCQUNBO09BQUE7T0FBQTtNQUEyQzs7OztpQkFBQTtPQUFBO09BQUE7TUFBK0I7Ozs7O0tBQzFFOzs7OztJQUNBOzs7OztXQUNBOzs7OztZQUNBLFFBQ0E7R0FBQTtHQUFBO2FBQ0E7SUFBQTtJQUFBO2NBQUEsQ0FDQSxrQkFDQTtLQUVBO0tBQ0E7S0FDQTtLQUNBO0tBQ0E7ZUFDQTtJQUNBLEdBUEE7Ozs7V0FPQSxDQUNBLEdBQ0E7S0FDQTtLQUNBO0tBQ0E7ZUFIQSxDQUlBO01BQUE7TUFBQTtLQUF5Qzs7OztlQUFBLHFCQUV6Qzs7Ozs7WUFDQTs7Ozs7O0VBQ0E7Ozs7VUFFQTs7Ozs7O0FBRUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpdGVIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgUGhvbmUsIE1lbnUsIFgsIFdhdmVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTkFWID0gW1xuICB7IGxhYmVsOiBcIkhvbWVcIiwgdG86IFwiL1wiIH0sXG4gIHsgbGFiZWw6IFwiUG9vbCBTZXJ2aWNlXCIsIHRvOiBcIi9wb29sLXNlcnZpY2UtcGFsbS1iZWFjaC1nYXJkZW5zXCIgfSxcbiAgeyBsYWJlbDogXCJBYm91dCBVc1wiLCB0bzogXCIvYWJvdXQtZ2FyZGVucy1wb29sLXNlcnZpY2VcIiB9LFxuICB7IGxhYmVsOiBcIkNvbnRhY3QgVXNcIiwgdG86IFwiL2NvbnRhY3QtZ2FyZGVucy1wb29sLXNlcnZpY2VcIiB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpdGVIZWFkZXIoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgYm9yZGVyLWIgYm9yZGVyLWJvcmRlci82MCBiZy1iYWNrZ3JvdW5kLzg1IGJhY2tkcm9wLWJsdXItbGdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBncmlkIG1heC13LTd4bCBncmlkLWNvbHMtW21pbm1heCgwLDFmcilfYXV0b10gaXRlbXMtY2VudGVyIGdhcC00IHB4LTQgcHktMyBzbTpweC02IGxnOnB5LTRcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBtaW4tdy0wIGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZCBoLTEwIHctMTAgc2hyaW5rLTAgcGxhY2UtaXRlbXMtY2VudGVyIHJvdW5kZWQteGwgYmctaGVyby1ncmFkaWVudCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctZ2xvd1wiPlxuICAgICAgICAgICAgPFdhdmVzIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0cnVuY2F0ZSBmb250LWRpc3BsYXkgdGV4dC1sZyBmb250LWJvbGQgbGVhZGluZy10aWdodCB0ZXh0LWZvcmVncm91bmQgc206dGV4dC14bFwiPlxuICAgICAgICAgICAgICBHYXJkZW5zIFBvb2wgU2VydmljZVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtWzExcHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xOGVtXSB0ZXh0LW11dGVkLWZvcmVncm91bmQgc206YmxvY2tcIj5cbiAgICAgICAgICAgICAgUGFsbSBCZWFjaCBHYXJkZW5zLCBGTFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc206Z2FwLTRcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBpdGVtcy1jZW50ZXIgZ2FwLTEgbGc6ZmxleFwiPlxuICAgICAgICAgICAge05BVi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udG99XG4gICAgICAgICAgICAgICAgdG89e2l0ZW0udG99XG4gICAgICAgICAgICAgICAgYWN0aXZlT3B0aW9ucz17eyBleGFjdDogaXRlbS50byA9PT0gXCIvXCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kLzgwIHRyYW5zaXRpb24gaG92ZXI6Ymctc2Vjb25kYXJ5IGhvdmVyOnRleHQtZm9yZWdyb3VuZCBbJi5hY3RpdmVdOmJnLXNlY29uZGFyeSBbJi5hY3RpdmVdOnRleHQtcHJpbWFyeS1kZWVwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cInRlbDorMTU2MTIwMzE5MDBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS1kZWVwIHB4LTQgcHktMi41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctY2FyZCB0cmFuc2l0aW9uIGhvdmVyOm9wYWNpdHktOTUgbWQ6aW5saW5lLWZsZXhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPig1NjEpIDIwMy0xOTAwPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbWVudVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCh2KSA9PiAhdil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGgtMTAgdy0xMCBzaHJpbmstMCBwbGFjZS1pdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYm9yZGVyIGJnLWNhcmQgdGV4dC1mb3JlZ3JvdW5kIGxnOmhpZGRlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wZW4gPyA8WCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gOiA8TWVudSBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7b3BlbiAmJiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBiZy1iYWNrZ3JvdW5kIGxnOmhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IG1heC13LTd4bCBmbGV4LWNvbCBnYXAtMSBweC00IHB5LTMgc206cHgtNlwiPlxuICAgICAgICAgICAge05BVi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udG99XG4gICAgICAgICAgICAgICAgdG89e2l0ZW0udG99XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgYWN0aXZlT3B0aW9ucz17eyBleGFjdDogaXRlbS50byA9PT0gXCIvXCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHB4LTMgcHktMi41IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmQvOTAgaG92ZXI6Ymctc2Vjb25kYXJ5IFsmLmFjdGl2ZV06Ymctc2Vjb25kYXJ5IFsmLmFjdGl2ZV06dGV4dC1wcmltYXJ5LWRlZXBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cInRlbDorMTU2MTIwMzE5MDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS1kZWVwIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5LWZvcmVncm91bmRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgIENhbGwgKDU2MSkgMjAzLTE5MDBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICApfVxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sImZpbGUiOiIvZGV2LXNlcnZlci9zcmMvY29tcG9uZW50cy9TaXRlSGVhZGVyLnRzeCJ9