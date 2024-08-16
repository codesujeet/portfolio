"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-intersection-observer";
exports.ids = ["vendor-chunks/react-intersection-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-intersection-observer/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/react-intersection-observer/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InView: () => (/* binding */ InView),\n/* harmony export */   defaultFallbackInView: () => (/* binding */ defaultFallbackInView),\n/* harmony export */   observe: () => (/* binding */ observe),\n/* harmony export */   useInView: () => (/* binding */ useInView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ InView,defaultFallbackInView,observe,useInView auto */ var __defProp = Object.defineProperty;\nvar __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {\n        enumerable: true,\n        configurable: true,\n        writable: true,\n        value\n    }) : obj[key] = value;\nvar __publicField = (obj, key, value)=>{\n    __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n    return value;\n};\n// src/InView.tsx\n\n// src/observe.ts\nvar observerMap = /* @__PURE__ */ new Map();\nvar RootIds = /* @__PURE__ */ new WeakMap();\nvar rootId = 0;\nvar unsupportedValue = void 0;\nfunction defaultFallbackInView(inView) {\n    unsupportedValue = inView;\n}\nfunction getRootId(root) {\n    if (!root) return \"0\";\n    if (RootIds.has(root)) return RootIds.get(root);\n    rootId += 1;\n    RootIds.set(root, rootId.toString());\n    return RootIds.get(root);\n}\nfunction optionsToId(options) {\n    return Object.keys(options).sort().filter((key)=>options[key] !== void 0).map((key)=>{\n        return `${key}_${key === \"root\" ? getRootId(options.root) : options[key]}`;\n    }).toString();\n}\nfunction createObserver(options) {\n    let id = optionsToId(options);\n    let instance = observerMap.get(id);\n    if (!instance) {\n        const elements = /* @__PURE__ */ new Map();\n        let thresholds;\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach((entry)=>{\n                var _a;\n                const inView = entry.isIntersecting && thresholds.some((threshold)=>entry.intersectionRatio >= threshold);\n                if (options.trackVisibility && typeof entry.isVisible === \"undefined\") {\n                    entry.isVisible = inView;\n                }\n                (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback)=>{\n                    callback(inView, entry);\n                });\n            });\n        }, options);\n        thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [\n            options.threshold || 0\n        ]);\n        instance = {\n            id,\n            observer,\n            elements\n        };\n        observerMap.set(id, instance);\n    }\n    return instance;\n}\nfunction observe(element, callback, options = {}, fallbackInView = unsupportedValue) {\n    if (typeof window.IntersectionObserver === \"undefined\" && fallbackInView !== void 0) {\n        const bounds = element.getBoundingClientRect();\n        callback(fallbackInView, {\n            isIntersecting: fallbackInView,\n            target: element,\n            intersectionRatio: typeof options.threshold === \"number\" ? options.threshold : 0,\n            time: 0,\n            boundingClientRect: bounds,\n            intersectionRect: bounds,\n            rootBounds: bounds\n        });\n        return ()=>{};\n    }\n    const { id, observer, elements } = createObserver(options);\n    let callbacks = elements.get(element) || [];\n    if (!elements.has(element)) {\n        elements.set(element, callbacks);\n    }\n    callbacks.push(callback);\n    observer.observe(element);\n    return function unobserve() {\n        callbacks.splice(callbacks.indexOf(callback), 1);\n        if (callbacks.length === 0) {\n            elements.delete(element);\n            observer.unobserve(element);\n        }\n        if (elements.size === 0) {\n            observer.disconnect();\n            observerMap.delete(id);\n        }\n    };\n}\n// src/InView.tsx\nfunction isPlainChildren(props) {\n    return typeof props.children !== \"function\";\n}\nvar InView = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(props){\n        super(props);\n        __publicField(this, \"node\", null);\n        __publicField(this, \"_unobserveCb\", null);\n        __publicField(this, \"handleNode\", (node)=>{\n            if (this.node) {\n                this.unobserve();\n                if (!node && !this.props.triggerOnce && !this.props.skip) {\n                    this.setState({\n                        inView: !!this.props.initialInView,\n                        entry: void 0\n                    });\n                }\n            }\n            this.node = node ? node : null;\n            this.observeNode();\n        });\n        __publicField(this, \"handleChange\", (inView, entry)=>{\n            if (inView && this.props.triggerOnce) {\n                this.unobserve();\n            }\n            if (!isPlainChildren(this.props)) {\n                this.setState({\n                    inView,\n                    entry\n                });\n            }\n            if (this.props.onChange) {\n                this.props.onChange(inView, entry);\n            }\n        });\n        this.state = {\n            inView: !!props.initialInView,\n            entry: void 0\n        };\n    }\n    componentDidUpdate(prevProps) {\n        if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {\n            this.unobserve();\n            this.observeNode();\n        }\n    }\n    componentWillUnmount() {\n        this.unobserve();\n        this.node = null;\n    }\n    observeNode() {\n        if (!this.node || this.props.skip) return;\n        const { threshold, root, rootMargin, trackVisibility, delay, fallbackInView } = this.props;\n        this._unobserveCb = observe(this.node, this.handleChange, {\n            threshold,\n            root,\n            rootMargin,\n            // @ts-ignore\n            trackVisibility,\n            // @ts-ignore\n            delay\n        }, fallbackInView);\n    }\n    unobserve() {\n        if (this._unobserveCb) {\n            this._unobserveCb();\n            this._unobserveCb = null;\n        }\n    }\n    render() {\n        const { children } = this.props;\n        if (typeof children === \"function\") {\n            const { inView, entry } = this.state;\n            return children({\n                inView,\n                entry,\n                ref: this.handleNode\n            });\n        }\n        const { as, triggerOnce, threshold, root, rootMargin, onChange, skip, trackVisibility, delay, initialInView, fallbackInView, ...props } = this.props;\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(as || \"div\", {\n            ref: this.handleNode,\n            ...props\n        }, children);\n    }\n};\n// src/useInView.tsx\n\nfunction useInView({ threshold, delay, trackVisibility, rootMargin, root, triggerOnce, skip, initialInView, fallbackInView, onChange } = {}) {\n    var _a;\n    const [ref, setRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n        inView: !!initialInView,\n        entry: void 0\n    });\n    callback.current = onChange;\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        if (skip || !ref) return;\n        let unobserve;\n        unobserve = observe(ref, (inView, entry)=>{\n            setState({\n                inView,\n                entry\n            });\n            if (callback.current) callback.current(inView, entry);\n            if (entry.isIntersecting && triggerOnce && unobserve) {\n                unobserve();\n                unobserve = void 0;\n            }\n        }, {\n            root,\n            rootMargin,\n            threshold,\n            // @ts-ignore\n            trackVisibility,\n            // @ts-ignore\n            delay\n        }, fallbackInView);\n        return ()=>{\n            if (unobserve) {\n                unobserve();\n            }\n        };\n    }, // We break the rule here, because we aren't including the actual `threshold` variable\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n        // If the threshold is an array, convert it to a string, so it won't change between renders.\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n        Array.isArray(threshold) ? threshold.toString() : threshold,\n        ref,\n        root,\n        rootMargin,\n        triggerOnce,\n        skip,\n        trackVisibility,\n        fallbackInView,\n        delay\n    ]);\n    const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;\n    const previousEntryTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n    if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {\n        previousEntryTarget.current = entryTarget;\n        setState({\n            inView: !!initialInView,\n            entry: void 0\n        });\n    }\n    const result = [\n        setRef,\n        state.inView,\n        state.entry\n    ];\n    result.ref = result[0];\n    result.inView = result[1];\n    result.entry = result[2];\n    return result;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztvR0FDQSxJQUFJQSxZQUFZQyxPQUFPQyxjQUFjO0FBQ3JDLElBQUlDLGtCQUFrQixDQUFDQyxLQUFLQyxLQUFLQyxRQUFVRCxPQUFPRCxNQUFNSixVQUFVSSxLQUFLQyxLQUFLO1FBQUVFLFlBQVk7UUFBTUMsY0FBYztRQUFNQyxVQUFVO1FBQU1IO0lBQU0sS0FBS0YsR0FBRyxDQUFDQyxJQUFJLEdBQUdDO0FBQzFKLElBQUlJLGdCQUFnQixDQUFDTixLQUFLQyxLQUFLQztJQUM3QkgsZ0JBQWdCQyxLQUFLLE9BQU9DLFFBQVEsV0FBV0EsTUFBTSxLQUFLQSxLQUFLQztJQUMvRCxPQUFPQTtBQUNUO0FBRUEsaUJBQWlCO0FBQ2M7QUFFL0IsaUJBQWlCO0FBQ2pCLElBQUlNLGNBQWMsYUFBYSxHQUFHLElBQUlDO0FBQ3RDLElBQUlDLFVBQVUsYUFBYSxHQUFHLElBQUlDO0FBQ2xDLElBQUlDLFNBQVM7QUFDYixJQUFJQyxtQkFBbUIsS0FBSztBQUM1QixTQUFTQyxzQkFBc0JDLE1BQU07SUFDbkNGLG1CQUFtQkU7QUFDckI7QUFDQSxTQUFTQyxVQUFVQyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0EsTUFDSCxPQUFPO0lBQ1QsSUFBSVAsUUFBUVEsR0FBRyxDQUFDRCxPQUNkLE9BQU9QLFFBQVFTLEdBQUcsQ0FBQ0Y7SUFDckJMLFVBQVU7SUFDVkYsUUFBUVUsR0FBRyxDQUFDSCxNQUFNTCxPQUFPUyxRQUFRO0lBQ2pDLE9BQU9YLFFBQVFTLEdBQUcsQ0FBQ0Y7QUFDckI7QUFDQSxTQUFTSyxZQUFZQyxPQUFPO0lBQzFCLE9BQU8xQixPQUFPMkIsSUFBSSxDQUFDRCxTQUFTRSxJQUFJLEdBQUdDLE1BQU0sQ0FDdkMsQ0FBQ3pCLE1BQVFzQixPQUFPLENBQUN0QixJQUFJLEtBQUssS0FBSyxHQUMvQjBCLEdBQUcsQ0FBQyxDQUFD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RTtJQUN0QkEsT0FBT3hGLE1BQU0sR0FBR3dGLE1BQU0sQ0FBQyxFQUFFO0lBQ3pCQSxPQUFPbEUsS0FBSyxHQUFHa0UsTUFBTSxDQUFDLEVBQUU7SUFDeEIsT0FBT0E7QUFDVDtBQU1FLENBQ0Ysa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlci9pbmRleC5tanM/YmUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gc3JjL0luVmlldy50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBzcmMvb2JzZXJ2ZS50c1xudmFyIG9ic2VydmVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBSb290SWRzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcm9vdElkID0gMDtcbnZhciB1bnN1cHBvcnRlZFZhbHVlID0gdm9pZCAwO1xuZnVuY3Rpb24gZGVmYXVsdEZhbGxiYWNrSW5WaWV3KGluVmlldykge1xuICB1bnN1cHBvcnRlZFZhbHVlID0gaW5WaWV3O1xufVxuZnVuY3Rpb24gZ2V0Um9vdElkKHJvb3QpIHtcbiAgaWYgKCFyb290KVxuICAgIHJldHVybiBcIjBcIjtcbiAgaWYgKFJvb3RJZHMuaGFzKHJvb3QpKVxuICAgIHJldHVybiBSb290SWRzLmdldChyb290KTtcbiAgcm9vdElkICs9IDE7XG4gIFJvb3RJZHMuc2V0KHJvb3QsIHJvb3RJZC50b1N0cmluZygpKTtcbiAgcmV0dXJuIFJvb3RJZHMuZ2V0KHJvb3QpO1xufVxuZnVuY3Rpb24gb3B0aW9uc1RvSWQob3B0aW9ucykge1xuICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLmZpbHRlcihcbiAgICAoa2V5KSA9PiBvcHRpb25zW2tleV0gIT09IHZvaWQgMFxuICApLm1hcCgoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGAke2tleX1fJHtrZXkgPT09IFwicm9vdFwiID8gZ2V0Um9vdElkKG9wdGlvbnMucm9vdCkgOiBvcHRpb25zW2tleV19YDtcbiAgfSkudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgbGV0IGlkID0gb3B0aW9uc1RvSWQob3B0aW9ucyk7XG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVyTWFwLmdldChpZCk7XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgbGV0IHRocmVzaG9sZHM7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBpblZpZXcgPSBlbnRyeS5pc0ludGVyc2VjdGluZyAmJiB0aHJlc2hvbGRzLnNvbWUoKHRocmVzaG9sZCkgPT4gZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gdGhyZXNob2xkKTtcbiAgICAgICAgaWYgKG9wdGlvbnMudHJhY2tWaXNpYmlsaXR5ICYmIHR5cGVvZiBlbnRyeS5pc1Zpc2libGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBlbnRyeS5pc1Zpc2libGUgPSBpblZpZXc7XG4gICAgICAgIH1cbiAgICAgICAgKF9hID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCkpID09IG51bGwgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKGluVmlldywgZW50cnkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIHRocmVzaG9sZHMgPSBvYnNlcnZlci50aHJlc2hvbGRzIHx8IChBcnJheS5pc0FycmF5KG9wdGlvbnMudGhyZXNob2xkKSA/IG9wdGlvbnMudGhyZXNob2xkIDogW29wdGlvbnMudGhyZXNob2xkIHx8IDBdKTtcbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50c1xuICAgIH07XG4gICAgb2JzZXJ2ZXJNYXAuc2V0KGlkLCBpbnN0YW5jZSk7XG4gIH1cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9LCBmYWxsYmFja0luVmlldyA9IHVuc3VwcG9ydGVkVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09IFwidW5kZWZpbmVkXCIgJiYgZmFsbGJhY2tJblZpZXcgIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY2FsbGJhY2soZmFsbGJhY2tJblZpZXcsIHtcbiAgICAgIGlzSW50ZXJzZWN0aW5nOiBmYWxsYmFja0luVmlldyxcbiAgICAgIHRhcmdldDogZWxlbWVudCxcbiAgICAgIGludGVyc2VjdGlvblJhdGlvOiB0eXBlb2Ygb3B0aW9ucy50aHJlc2hvbGQgPT09IFwibnVtYmVyXCIgPyBvcHRpb25zLnRocmVzaG9sZCA6IDAsXG4gICAgICB0aW1lOiAwLFxuICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiBib3VuZHMsXG4gICAgICBpbnRlcnNlY3Rpb25SZWN0OiBib3VuZHMsXG4gICAgICByb290Qm91bmRzOiBib3VuZHNcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH07XG4gIH1cbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgbGV0IGNhbGxiYWNrcyA9IGVsZW1lbnRzLmdldChlbGVtZW50KSB8fCBbXTtcbiAgaWYgKCFlbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcbiAgfVxuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgY2FsbGJhY2tzLnNwbGljZShjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayksIDEpO1xuICAgIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBvYnNlcnZlck1hcC5kZWxldGUoaWQpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gc3JjL0luVmlldy50c3hcbmZ1bmN0aW9uIGlzUGxhaW5DaGlsZHJlbihwcm9wcykge1xuICByZXR1cm4gdHlwZW9mIHByb3BzLmNoaWxkcmVuICE9PSBcImZ1bmN0aW9uXCI7XG59XG52YXIgSW5WaWV3ID0gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibm9kZVwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiX3Vub2JzZXJ2ZUNiXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVOb2RlXCIsIChub2RlKSA9PiB7XG4gICAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gICAgICAgIGlmICghbm9kZSAmJiAhdGhpcy5wcm9wcy50cmlnZ2VyT25jZSAmJiAhdGhpcy5wcm9wcy5za2lwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluVmlldzogISF0aGlzLnByb3BzLmluaXRpYWxJblZpZXcsIGVudHJ5OiB2b2lkIDAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubm9kZSA9IG5vZGUgPyBub2RlIDogbnVsbDtcbiAgICAgIHRoaXMub2JzZXJ2ZU5vZGUoKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlQ2hhbmdlXCIsIChpblZpZXcsIGVudHJ5KSA9PiB7XG4gICAgICBpZiAoaW5WaWV3ICYmIHRoaXMucHJvcHMudHJpZ2dlck9uY2UpIHtcbiAgICAgICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNQbGFpbkNoaWxkcmVuKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpblZpZXcsIGVudHJ5IH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpblZpZXcsIGVudHJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5WaWV3OiAhIXByb3BzLmluaXRpYWxJblZpZXcsXG4gICAgICBlbnRyeTogdm9pZCAwXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5yb290TWFyZ2luICE9PSB0aGlzLnByb3BzLnJvb3RNYXJnaW4gfHwgcHJldlByb3BzLnJvb3QgIT09IHRoaXMucHJvcHMucm9vdCB8fCBwcmV2UHJvcHMudGhyZXNob2xkICE9PSB0aGlzLnByb3BzLnRocmVzaG9sZCB8fCBwcmV2UHJvcHMuc2tpcCAhPT0gdGhpcy5wcm9wcy5za2lwIHx8IHByZXZQcm9wcy50cmFja1Zpc2liaWxpdHkgIT09IHRoaXMucHJvcHMudHJhY2tWaXNpYmlsaXR5IHx8IHByZXZQcm9wcy5kZWxheSAhPT0gdGhpcy5wcm9wcy5kZWxheSkge1xuICAgICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZU5vZGUoKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICB0aGlzLm5vZGUgPSBudWxsO1xuICB9XG4gIG9ic2VydmVOb2RlKCkge1xuICAgIGlmICghdGhpcy5ub2RlIHx8IHRoaXMucHJvcHMuc2tpcClcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICB0aHJlc2hvbGQsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGRlbGF5LFxuICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl91bm9ic2VydmVDYiA9IG9ic2VydmUoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICByb290LFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZWxheVxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrSW5WaWV3XG4gICAgKTtcbiAgfVxuICB1bm9ic2VydmUoKSB7XG4gICAgaWYgKHRoaXMuX3Vub2JzZXJ2ZUNiKSB7XG4gICAgICB0aGlzLl91bm9ic2VydmVDYigpO1xuICAgICAgdGhpcy5fdW5vYnNlcnZlQ2IgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IHsgaW5WaWV3LCBlbnRyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGluVmlldywgZW50cnksIHJlZjogdGhpcy5oYW5kbGVOb2RlIH0pO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBhcyxcbiAgICAgIHRyaWdnZXJPbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgcm9vdCxcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHNraXAsXG4gICAgICB0cmFja1Zpc2liaWxpdHksXG4gICAgICBkZWxheSxcbiAgICAgIGluaXRpYWxJblZpZXcsXG4gICAgICBmYWxsYmFja0luVmlldyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBhcyB8fCBcImRpdlwiLFxuICAgICAgeyByZWY6IHRoaXMuaGFuZGxlTm9kZSwgLi4ucHJvcHMgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufTtcblxuLy8gc3JjL3VzZUluVmlldy50c3hcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHVzZUluVmlldyh7XG4gIHRocmVzaG9sZCxcbiAgZGVsYXksXG4gIHRyYWNrVmlzaWJpbGl0eSxcbiAgcm9vdE1hcmdpbixcbiAgcm9vdCxcbiAgdHJpZ2dlck9uY2UsXG4gIHNraXAsXG4gIGluaXRpYWxJblZpZXcsXG4gIGZhbGxiYWNrSW5WaWV3LFxuICBvbkNoYW5nZVxufSA9IHt9KSB7XG4gIHZhciBfYTtcbiAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IFJlYWN0Mi51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY2FsbGJhY2sgPSBSZWFjdDIudXNlUmVmKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QyLnVzZVN0YXRlKHtcbiAgICBpblZpZXc6ICEhaW5pdGlhbEluVmlldyxcbiAgICBlbnRyeTogdm9pZCAwXG4gIH0pO1xuICBjYWxsYmFjay5jdXJyZW50ID0gb25DaGFuZ2U7XG4gIFJlYWN0Mi51c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHNraXAgfHwgIXJlZilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHVub2JzZXJ2ZTtcbiAgICAgIHVub2JzZXJ2ZSA9IG9ic2VydmUoXG4gICAgICAgIHJlZixcbiAgICAgICAgKGluVmlldywgZW50cnkpID0+IHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBpblZpZXcsXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChjYWxsYmFjay5jdXJyZW50KVxuICAgICAgICAgICAgY2FsbGJhY2suY3VycmVudChpblZpZXcsIGVudHJ5KTtcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgdHJpZ2dlck9uY2UgJiYgdW5vYnNlcnZlKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZSA9IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByb290LFxuICAgICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0cmFja1Zpc2liaWxpdHksXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGRlbGF5XG4gICAgICAgIH0sXG4gICAgICAgIGZhbGxiYWNrSW5WaWV3XG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKHVub2JzZXJ2ZSkge1xuICAgICAgICAgIHVub2JzZXJ2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgLy8gV2UgYnJlYWsgdGhlIHJ1bGUgaGVyZSwgYmVjYXVzZSB3ZSBhcmVuJ3QgaW5jbHVkaW5nIHRoZSBhY3R1YWwgYHRocmVzaG9sZGAgdmFyaWFibGVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW1xuICAgICAgLy8gSWYgdGhlIHRocmVzaG9sZCBpcyBhbiBhcnJheSwgY29udmVydCBpdCB0byBhIHN0cmluZywgc28gaXQgd29uJ3QgY2hhbmdlIGJldHdlZW4gcmVuZGVycy5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAgIEFycmF5LmlzQXJyYXkodGhyZXNob2xkKSA/IHRocmVzaG9sZC50b1N0cmluZygpIDogdGhyZXNob2xkLFxuICAgICAgcmVmLFxuICAgICAgcm9vdCxcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICB0cmlnZ2VyT25jZSxcbiAgICAgIHNraXAsXG4gICAgICB0cmFja1Zpc2liaWxpdHksXG4gICAgICBmYWxsYmFja0luVmlldyxcbiAgICAgIGRlbGF5XG4gICAgXVxuICApO1xuICBjb25zdCBlbnRyeVRhcmdldCA9IChfYSA9IHN0YXRlLmVudHJ5KSA9PSBudWxsID8gdm9pZCAwIDogX2EudGFyZ2V0O1xuICBjb25zdCBwcmV2aW91c0VudHJ5VGFyZ2V0ID0gUmVhY3QyLnVzZVJlZigpO1xuICBpZiAoIXJlZiAmJiBlbnRyeVRhcmdldCAmJiAhdHJpZ2dlck9uY2UgJiYgIXNraXAgJiYgcHJldmlvdXNFbnRyeVRhcmdldC5jdXJyZW50ICE9PSBlbnRyeVRhcmdldCkge1xuICAgIHByZXZpb3VzRW50cnlUYXJnZXQuY3VycmVudCA9IGVudHJ5VGFyZ2V0O1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGluVmlldzogISFpbml0aWFsSW5WaWV3LFxuICAgICAgZW50cnk6IHZvaWQgMFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IFtzZXRSZWYsIHN0YXRlLmluVmlldywgc3RhdGUuZW50cnldO1xuICByZXN1bHQucmVmID0gcmVzdWx0WzBdO1xuICByZXN1bHQuaW5WaWV3ID0gcmVzdWx0WzFdO1xuICByZXN1bHQuZW50cnkgPSByZXN1bHRbMl07XG4gIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQge1xuICBJblZpZXcsXG4gIGRlZmF1bHRGYWxsYmFja0luVmlldyxcbiAgb2JzZXJ2ZSxcbiAgdXNlSW5WaWV3XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6WyJfX2RlZlByb3AiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fZGVmTm9ybWFsUHJvcCIsIm9iaiIsImtleSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19wdWJsaWNGaWVsZCIsIlJlYWN0Iiwib2JzZXJ2ZXJNYXAiLCJNYXAiLCJSb290SWRzIiwiV2Vha01hcCIsInJvb3RJZCIsInVuc3VwcG9ydGVkVmFsdWUiLCJkZWZhdWx0RmFsbGJhY2tJblZpZXciLCJpblZpZXciLCJnZXRSb290SWQiLCJyb290IiwiaGFzIiwiZ2V0Iiwic2V0IiwidG9TdHJpbmciLCJvcHRpb25zVG9JZCIsIm9wdGlvbnMiLCJrZXlzIiwic29ydCIsImZpbHRlciIsIm1hcCIsImNyZWF0ZU9ic2VydmVyIiwiaWQiLCJpbnN0YW5jZSIsImVsZW1lbnRzIiwidGhyZXNob2xkcyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiX2EiLCJpc0ludGVyc2VjdGluZyIsInNvbWUiLCJ0aHJlc2hvbGQiLCJpbnRlcnNlY3Rpb25SYXRpbyIsInRyYWNrVmlzaWJpbGl0eSIsImlzVmlzaWJsZSIsInRhcmdldCIsImNhbGxiYWNrIiwiQXJyYXkiLCJpc0FycmF5Iiwib2JzZXJ2ZSIsImVsZW1lbnQiLCJmYWxsYmFja0luVmlldyIsIndpbmRvdyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRpbWUiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJpbnRlcnNlY3Rpb25SZWN0Iiwicm9vdEJvdW5kcyIsImNhbGxiYWNrcyIsInB1c2giLCJ1bm9ic2VydmUiLCJzcGxpY2UiLCJpbmRleE9mIiwibGVuZ3RoIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJpc1BsYWluQ2hpbGRyZW4iLCJwcm9wcyIsImNoaWxkcmVuIiwiSW5WaWV3IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJub2RlIiwidHJpZ2dlck9uY2UiLCJza2lwIiwic2V0U3RhdGUiLCJpbml0aWFsSW5WaWV3Iiwib2JzZXJ2ZU5vZGUiLCJvbkNoYW5nZSIsInN0YXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicm9vdE1hcmdpbiIsImRlbGF5IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJfdW5vYnNlcnZlQ2IiLCJoYW5kbGVDaGFuZ2UiLCJyZW5kZXIiLCJyZWYiLCJoYW5kbGVOb2RlIiwiYXMiLCJjcmVhdGVFbGVtZW50IiwiUmVhY3QyIiwidXNlSW5WaWV3Iiwic2V0UmVmIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiZW50cnlUYXJnZXQiLCJwcmV2aW91c0VudHJ5VGFyZ2V0IiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-intersection-observer/index.mjs\n");

/***/ })

};
;