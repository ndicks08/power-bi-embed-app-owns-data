import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/powerbi-client/dist/powerbi.js
var require_powerbi = __commonJS({
  "node_modules/powerbi-client/dist/powerbi.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["powerbi-client"] = factory();
      else
        root["powerbi-client"] = factory();
    })(exports, () => {
      return (
        /******/
        (() => {
          var __webpack_modules__ = {
            /***/
            "./node_modules/http-post-message/dist/httpPostMessage.js": (
              /*!****************************************************************!*\
                !*** ./node_modules/http-post-message/dist/httpPostMessage.js ***!
                \****************************************************************/
              /***/
              function(module2) {
                (function webpackUniversalModuleDefinition(root, factory) {
                  if (true)
                    module2.exports = factory();
                  else {
                  }
                })(this, function() {
                  return (
                    /******/
                    function(modules) {
                      var installedModules = {};
                      function __nested_webpack_require_626__(moduleId) {
                        if (installedModules[moduleId])
                          return installedModules[moduleId].exports;
                        var module3 = installedModules[moduleId] = {
                          /******/
                          exports: {},
                          /******/
                          id: moduleId,
                          /******/
                          loaded: false
                          /******/
                        };
                        modules[moduleId].call(module3.exports, module3, module3.exports, __nested_webpack_require_626__);
                        module3.loaded = true;
                        return module3.exports;
                      }
                      __nested_webpack_require_626__.m = modules;
                      __nested_webpack_require_626__.c = installedModules;
                      __nested_webpack_require_626__.p = "";
                      return __nested_webpack_require_626__(0);
                    }([
                      /* 0 */
                      /***/
                      function(module3, exports2) {
                        "use strict";
                        var HttpPostMessage = function() {
                          function HttpPostMessage2(windowPostMessageProxy, defaultHeaders, defaultTargetWindow) {
                            if (defaultHeaders === void 0) {
                              defaultHeaders = {};
                            }
                            this.defaultHeaders = defaultHeaders;
                            this.defaultTargetWindow = defaultTargetWindow;
                            this.windowPostMessageProxy = windowPostMessageProxy;
                          }
                          HttpPostMessage2.addTrackingProperties = function(message, trackingProperties) {
                            message.headers = message.headers || {};
                            if (trackingProperties && trackingProperties.id) {
                              message.headers.id = trackingProperties.id;
                            }
                            return message;
                          };
                          HttpPostMessage2.getTrackingProperties = function(message) {
                            return {
                              id: message.headers && message.headers.id
                            };
                          };
                          HttpPostMessage2.isErrorMessage = function(message) {
                            if (typeof (message && message.statusCode) !== "number") {
                              return false;
                            }
                            return !(200 <= message.statusCode && message.statusCode < 300);
                          };
                          HttpPostMessage2.prototype.get = function(url, headers, targetWindow) {
                            if (headers === void 0) {
                              headers = {};
                            }
                            if (targetWindow === void 0) {
                              targetWindow = this.defaultTargetWindow;
                            }
                            return this.send({
                              method: "GET",
                              url,
                              headers
                            }, targetWindow);
                          };
                          HttpPostMessage2.prototype.post = function(url, body, headers, targetWindow) {
                            if (headers === void 0) {
                              headers = {};
                            }
                            if (targetWindow === void 0) {
                              targetWindow = this.defaultTargetWindow;
                            }
                            return this.send({
                              method: "POST",
                              url,
                              headers,
                              body
                            }, targetWindow);
                          };
                          HttpPostMessage2.prototype.put = function(url, body, headers, targetWindow) {
                            if (headers === void 0) {
                              headers = {};
                            }
                            if (targetWindow === void 0) {
                              targetWindow = this.defaultTargetWindow;
                            }
                            return this.send({
                              method: "PUT",
                              url,
                              headers,
                              body
                            }, targetWindow);
                          };
                          HttpPostMessage2.prototype.patch = function(url, body, headers, targetWindow) {
                            if (headers === void 0) {
                              headers = {};
                            }
                            if (targetWindow === void 0) {
                              targetWindow = this.defaultTargetWindow;
                            }
                            return this.send({
                              method: "PATCH",
                              url,
                              headers,
                              body
                            }, targetWindow);
                          };
                          HttpPostMessage2.prototype.delete = function(url, body, headers, targetWindow) {
                            if (body === void 0) {
                              body = null;
                            }
                            if (headers === void 0) {
                              headers = {};
                            }
                            if (targetWindow === void 0) {
                              targetWindow = this.defaultTargetWindow;
                            }
                            return this.send({
                              method: "DELETE",
                              url,
                              headers,
                              body
                            }, targetWindow);
                          };
                          HttpPostMessage2.prototype.send = function(request, targetWindow) {
                            if (targetWindow === void 0) {
                              targetWindow = this.defaultTargetWindow;
                            }
                            request.headers = this.assign({}, this.defaultHeaders, request.headers);
                            if (!targetWindow) {
                              throw new Error("target window is not provided.  You must either provide the target window explicitly as argument to request, or specify default target window when constructing instance of this class.");
                            }
                            return this.windowPostMessageProxy.postMessage(targetWindow, request);
                          };
                          HttpPostMessage2.prototype.assign = function(target) {
                            var sources = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                              sources[_i - 1] = arguments[_i];
                            }
                            if (target === void 0 || target === null) {
                              throw new TypeError("Cannot convert undefined or null to object");
                            }
                            var output = Object(target);
                            sources.forEach(function(source) {
                              if (source !== void 0 && source !== null) {
                                for (var nextKey in source) {
                                  if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
                                    output[nextKey] = source[nextKey];
                                  }
                                }
                              }
                            });
                            return output;
                          };
                          return HttpPostMessage2;
                        }();
                        exports2.HttpPostMessage = HttpPostMessage;
                      }
                      /******/
                    ])
                  );
                });
                ;
              }
            ),
            /***/
            "./node_modules/powerbi-models/dist/models.js": (
              /*!****************************************************!*\
                !*** ./node_modules/powerbi-models/dist/models.js ***!
                \****************************************************/
              /***/
              function(module2) {
                (function webpackUniversalModuleDefinition(root, factory) {
                  if (true)
                    module2.exports = factory();
                  else {
                  }
                })(this, () => {
                  return (
                    /******/
                    (() => {
                      var __webpack_modules__2 = [
                        /* 0 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_612__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.CommonErrorCodes = exports2.BookmarksPlayMode = exports2.ExportDataType = exports2.QnaMode = exports2.PageNavigationPosition = exports2.BrowserPrintAdjustmentsMode = exports2.AggregateFunction = exports2.DataCacheMode = exports2.CredentialType = exports2.isPercentOfGrandTotal = exports2.isColumnAggr = exports2.isHierarchyLevelAggr = exports2.isHierarchyLevel = exports2.isColumn = exports2.isMeasure = exports2.getFilterType = exports2.isBasicFilterWithKeys = exports2.isFilterKeyColumnsTarget = exports2.HierarchyIdentityFilter = exports2.HierarchyFilter = exports2.AdvancedFilter = exports2.TupleFilter = exports2.IdentityFilter = exports2.BasicFilterWithKeys = exports2.BasicFilter = exports2.RelativeTimeFilter = exports2.RelativeDateFilter = exports2.TopNFilter = exports2.IncludeExcludeFilter = exports2.NotSupportedFilter = exports2.Filter = exports2.RelativeDateOperators = exports2.RelativeDateFilterTimeUnit = exports2.FilterType = exports2.FiltersLevel = exports2.FiltersOperations = exports2.MenuLocation = exports2.ContrastMode = exports2.TokenType = exports2.ViewMode = exports2.Permissions = exports2.SectionVisibility = exports2.ReportAlignment = exports2.HyperlinkClickBehavior = exports2.LayoutType = exports2.VisualContainerDisplayMode = exports2.BackgroundType = exports2.DisplayOption = exports2.PageSizeType = exports2.TraceType = void 0;
                          exports2.validateExportDataRequest = exports2.validateQnaInterpretInputData = exports2.validateLoadQnaConfiguration = exports2.validateSaveAsParameters = exports2.validateUpdateFiltersRequest = exports2.validateFilter = exports2.validatePage = exports2.validateTileLoad = exports2.validateDashboardLoad = exports2.validateQuickCreate = exports2.validateCreateReport = exports2.validatePaginatedReportLoad = exports2.validateReportLoad = exports2.validateMenuGroupExtension = exports2.validateExtension = exports2.validateCustomPageSize = exports2.validateVisualizationsPane = exports2.validateSyncSlicersPane = exports2.validateSelectionPane = exports2.validatePageNavigationPane = exports2.validateFieldsPane = exports2.validateFiltersPane = exports2.validateBookmarksPane = exports2.validatePanes = exports2.validateSettings = exports2.validateCaptureBookmarkRequest = exports2.validateApplyBookmarkStateRequest = exports2.validateApplyBookmarkByNameRequest = exports2.validateAddBookmarkRequest = exports2.validatePlayBookmarkRequest = exports2.validateSlicerState = exports2.validateSlicer = exports2.validateVisualSelector = exports2.isIExtensionArray = exports2.isIExtensions = exports2.isGroupedMenuExtension = exports2.isFlatMenuExtension = exports2.isReportFiltersArray = exports2.isOnLoadFilters = exports2.VisualDataRoleKindPreference = exports2.VisualDataRoleKind = exports2.CommandDisplayOption = exports2.SlicerTargetSelector = exports2.VisualTypeSelector = exports2.VisualSelector = exports2.PageSelector = exports2.Selector = exports2.SortDirection = exports2.LegendPosition = exports2.TextAlignment = void 0;
                          exports2.validatePrintSettings = exports2.validateZoomLevel = exports2.validateCustomTheme = exports2.validateCommandsSettings = exports2.validateVisualSettings = exports2.validateVisualHeader = void 0;
                          var validator_1 = __nested_webpack_require_612__(1);
                          var TraceType;
                          (function(TraceType2) {
                            TraceType2[TraceType2["Information"] = 0] = "Information";
                            TraceType2[TraceType2["Verbose"] = 1] = "Verbose";
                            TraceType2[TraceType2["Warning"] = 2] = "Warning";
                            TraceType2[TraceType2["Error"] = 3] = "Error";
                            TraceType2[TraceType2["ExpectedError"] = 4] = "ExpectedError";
                            TraceType2[TraceType2["UnexpectedError"] = 5] = "UnexpectedError";
                            TraceType2[TraceType2["Fatal"] = 6] = "Fatal";
                          })(TraceType = exports2.TraceType || (exports2.TraceType = {}));
                          var PageSizeType;
                          (function(PageSizeType2) {
                            PageSizeType2[PageSizeType2["Widescreen"] = 0] = "Widescreen";
                            PageSizeType2[PageSizeType2["Standard"] = 1] = "Standard";
                            PageSizeType2[PageSizeType2["Cortana"] = 2] = "Cortana";
                            PageSizeType2[PageSizeType2["Letter"] = 3] = "Letter";
                            PageSizeType2[PageSizeType2["Custom"] = 4] = "Custom";
                            PageSizeType2[PageSizeType2["Mobile"] = 5] = "Mobile";
                          })(PageSizeType = exports2.PageSizeType || (exports2.PageSizeType = {}));
                          var DisplayOption;
                          (function(DisplayOption2) {
                            DisplayOption2[DisplayOption2["FitToPage"] = 0] = "FitToPage";
                            DisplayOption2[DisplayOption2["FitToWidth"] = 1] = "FitToWidth";
                            DisplayOption2[DisplayOption2["ActualSize"] = 2] = "ActualSize";
                          })(DisplayOption = exports2.DisplayOption || (exports2.DisplayOption = {}));
                          var BackgroundType;
                          (function(BackgroundType2) {
                            BackgroundType2[BackgroundType2["Default"] = 0] = "Default";
                            BackgroundType2[BackgroundType2["Transparent"] = 1] = "Transparent";
                          })(BackgroundType = exports2.BackgroundType || (exports2.BackgroundType = {}));
                          var VisualContainerDisplayMode;
                          (function(VisualContainerDisplayMode2) {
                            VisualContainerDisplayMode2[VisualContainerDisplayMode2["Visible"] = 0] = "Visible";
                            VisualContainerDisplayMode2[VisualContainerDisplayMode2["Hidden"] = 1] = "Hidden";
                          })(VisualContainerDisplayMode = exports2.VisualContainerDisplayMode || (exports2.VisualContainerDisplayMode = {}));
                          var LayoutType;
                          (function(LayoutType2) {
                            LayoutType2[LayoutType2["Master"] = 0] = "Master";
                            LayoutType2[LayoutType2["Custom"] = 1] = "Custom";
                            LayoutType2[LayoutType2["MobilePortrait"] = 2] = "MobilePortrait";
                            LayoutType2[LayoutType2["MobileLandscape"] = 3] = "MobileLandscape";
                          })(LayoutType = exports2.LayoutType || (exports2.LayoutType = {}));
                          var HyperlinkClickBehavior;
                          (function(HyperlinkClickBehavior2) {
                            HyperlinkClickBehavior2[HyperlinkClickBehavior2["Navigate"] = 0] = "Navigate";
                            HyperlinkClickBehavior2[HyperlinkClickBehavior2["NavigateAndRaiseEvent"] = 1] = "NavigateAndRaiseEvent";
                            HyperlinkClickBehavior2[HyperlinkClickBehavior2["RaiseEvent"] = 2] = "RaiseEvent";
                          })(HyperlinkClickBehavior = exports2.HyperlinkClickBehavior || (exports2.HyperlinkClickBehavior = {}));
                          var ReportAlignment;
                          (function(ReportAlignment2) {
                            ReportAlignment2[ReportAlignment2["Left"] = 0] = "Left";
                            ReportAlignment2[ReportAlignment2["Center"] = 1] = "Center";
                            ReportAlignment2[ReportAlignment2["Right"] = 2] = "Right";
                            ReportAlignment2[ReportAlignment2["None"] = 3] = "None";
                          })(ReportAlignment = exports2.ReportAlignment || (exports2.ReportAlignment = {}));
                          var SectionVisibility;
                          (function(SectionVisibility2) {
                            SectionVisibility2[SectionVisibility2["AlwaysVisible"] = 0] = "AlwaysVisible";
                            SectionVisibility2[SectionVisibility2["HiddenInViewMode"] = 1] = "HiddenInViewMode";
                          })(SectionVisibility = exports2.SectionVisibility || (exports2.SectionVisibility = {}));
                          var Permissions;
                          (function(Permissions2) {
                            Permissions2[Permissions2["Read"] = 0] = "Read";
                            Permissions2[Permissions2["ReadWrite"] = 1] = "ReadWrite";
                            Permissions2[Permissions2["Copy"] = 2] = "Copy";
                            Permissions2[Permissions2["Create"] = 4] = "Create";
                            Permissions2[Permissions2["All"] = 7] = "All";
                          })(Permissions = exports2.Permissions || (exports2.Permissions = {}));
                          var ViewMode;
                          (function(ViewMode2) {
                            ViewMode2[ViewMode2["View"] = 0] = "View";
                            ViewMode2[ViewMode2["Edit"] = 1] = "Edit";
                          })(ViewMode = exports2.ViewMode || (exports2.ViewMode = {}));
                          var TokenType;
                          (function(TokenType2) {
                            TokenType2[TokenType2["Aad"] = 0] = "Aad";
                            TokenType2[TokenType2["Embed"] = 1] = "Embed";
                          })(TokenType = exports2.TokenType || (exports2.TokenType = {}));
                          var ContrastMode;
                          (function(ContrastMode2) {
                            ContrastMode2[ContrastMode2["None"] = 0] = "None";
                            ContrastMode2[ContrastMode2["HighContrast1"] = 1] = "HighContrast1";
                            ContrastMode2[ContrastMode2["HighContrast2"] = 2] = "HighContrast2";
                            ContrastMode2[ContrastMode2["HighContrastBlack"] = 3] = "HighContrastBlack";
                            ContrastMode2[ContrastMode2["HighContrastWhite"] = 4] = "HighContrastWhite";
                          })(ContrastMode = exports2.ContrastMode || (exports2.ContrastMode = {}));
                          var MenuLocation;
                          (function(MenuLocation2) {
                            MenuLocation2[MenuLocation2["Bottom"] = 0] = "Bottom";
                            MenuLocation2[MenuLocation2["Top"] = 1] = "Top";
                          })(MenuLocation = exports2.MenuLocation || (exports2.MenuLocation = {}));
                          var FiltersOperations;
                          (function(FiltersOperations2) {
                            FiltersOperations2[FiltersOperations2["RemoveAll"] = 0] = "RemoveAll";
                            FiltersOperations2[FiltersOperations2["ReplaceAll"] = 1] = "ReplaceAll";
                            FiltersOperations2[FiltersOperations2["Add"] = 2] = "Add";
                            FiltersOperations2[FiltersOperations2["Replace"] = 3] = "Replace";
                          })(FiltersOperations = exports2.FiltersOperations || (exports2.FiltersOperations = {}));
                          var FiltersLevel;
                          (function(FiltersLevel2) {
                            FiltersLevel2[FiltersLevel2["Report"] = 0] = "Report";
                            FiltersLevel2[FiltersLevel2["Page"] = 1] = "Page";
                            FiltersLevel2[FiltersLevel2["Visual"] = 2] = "Visual";
                          })(FiltersLevel = exports2.FiltersLevel || (exports2.FiltersLevel = {}));
                          var FilterType;
                          (function(FilterType2) {
                            FilterType2[FilterType2["Advanced"] = 0] = "Advanced";
                            FilterType2[FilterType2["Basic"] = 1] = "Basic";
                            FilterType2[FilterType2["Unknown"] = 2] = "Unknown";
                            FilterType2[FilterType2["IncludeExclude"] = 3] = "IncludeExclude";
                            FilterType2[FilterType2["RelativeDate"] = 4] = "RelativeDate";
                            FilterType2[FilterType2["TopN"] = 5] = "TopN";
                            FilterType2[FilterType2["Tuple"] = 6] = "Tuple";
                            FilterType2[FilterType2["RelativeTime"] = 7] = "RelativeTime";
                            FilterType2[FilterType2["Identity"] = 8] = "Identity";
                            FilterType2[FilterType2["Hierarchy"] = 9] = "Hierarchy";
                            FilterType2[FilterType2["HierarchyIdentity"] = 10] = "HierarchyIdentity";
                          })(FilterType = exports2.FilterType || (exports2.FilterType = {}));
                          var RelativeDateFilterTimeUnit;
                          (function(RelativeDateFilterTimeUnit2) {
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["Days"] = 0] = "Days";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["Weeks"] = 1] = "Weeks";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["CalendarWeeks"] = 2] = "CalendarWeeks";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["Months"] = 3] = "Months";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["CalendarMonths"] = 4] = "CalendarMonths";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["Years"] = 5] = "Years";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["CalendarYears"] = 6] = "CalendarYears";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["Minutes"] = 7] = "Minutes";
                            RelativeDateFilterTimeUnit2[RelativeDateFilterTimeUnit2["Hours"] = 8] = "Hours";
                          })(RelativeDateFilterTimeUnit = exports2.RelativeDateFilterTimeUnit || (exports2.RelativeDateFilterTimeUnit = {}));
                          var RelativeDateOperators;
                          (function(RelativeDateOperators2) {
                            RelativeDateOperators2[RelativeDateOperators2["InLast"] = 0] = "InLast";
                            RelativeDateOperators2[RelativeDateOperators2["InThis"] = 1] = "InThis";
                            RelativeDateOperators2[RelativeDateOperators2["InNext"] = 2] = "InNext";
                          })(RelativeDateOperators = exports2.RelativeDateOperators || (exports2.RelativeDateOperators = {}));
                          var Filter = (
                            /** @class */
                            function() {
                              function Filter2(target, filterType) {
                                this.target = target;
                                this.filterType = filterType;
                              }
                              Filter2.prototype.toJSON = function() {
                                var filter = {
                                  $schema: this.schemaUrl,
                                  target: this.target,
                                  filterType: this.filterType
                                };
                                if (this.displaySettings !== void 0) {
                                  filter.displaySettings = this.displaySettings;
                                }
                                return filter;
                              };
                              return Filter2;
                            }()
                          );
                          exports2.Filter = Filter;
                          var NotSupportedFilter = (
                            /** @class */
                            function(_super) {
                              __extends(NotSupportedFilter2, _super);
                              function NotSupportedFilter2(target, message, notSupportedTypeName) {
                                var _this = _super.call(this, target, FilterType.Unknown) || this;
                                _this.message = message;
                                _this.notSupportedTypeName = notSupportedTypeName;
                                _this.schemaUrl = NotSupportedFilter2.schemaUrl;
                                return _this;
                              }
                              NotSupportedFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.message = this.message;
                                filter.notSupportedTypeName = this.notSupportedTypeName;
                                return filter;
                              };
                              NotSupportedFilter2.schemaUrl = "http://powerbi.com/product/schema#notSupported";
                              return NotSupportedFilter2;
                            }(Filter)
                          );
                          exports2.NotSupportedFilter = NotSupportedFilter;
                          var IncludeExcludeFilter = (
                            /** @class */
                            function(_super) {
                              __extends(IncludeExcludeFilter2, _super);
                              function IncludeExcludeFilter2(target, isExclude, values) {
                                var _this = _super.call(this, target, FilterType.IncludeExclude) || this;
                                _this.target = target;
                                _this.values = values;
                                _this.isExclude = isExclude;
                                _this.schemaUrl = IncludeExcludeFilter2.schemaUrl;
                                return _this;
                              }
                              IncludeExcludeFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.isExclude = this.isExclude;
                                filter.values = this.values;
                                return filter;
                              };
                              IncludeExcludeFilter2.schemaUrl = "http://powerbi.com/product/schema#includeExclude";
                              return IncludeExcludeFilter2;
                            }(Filter)
                          );
                          exports2.IncludeExcludeFilter = IncludeExcludeFilter;
                          var TopNFilter = (
                            /** @class */
                            function(_super) {
                              __extends(TopNFilter2, _super);
                              function TopNFilter2(target, operator, itemCount, orderBy) {
                                var _this = _super.call(this, target, FilterType.TopN) || this;
                                _this.operator = operator;
                                _this.itemCount = itemCount;
                                _this.schemaUrl = TopNFilter2.schemaUrl;
                                _this.orderBy = orderBy;
                                return _this;
                              }
                              TopNFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.operator = this.operator;
                                filter.itemCount = this.itemCount;
                                filter.orderBy = this.orderBy;
                                return filter;
                              };
                              TopNFilter2.schemaUrl = "http://powerbi.com/product/schema#topN";
                              return TopNFilter2;
                            }(Filter)
                          );
                          exports2.TopNFilter = TopNFilter;
                          var RelativeDateFilter = (
                            /** @class */
                            function(_super) {
                              __extends(RelativeDateFilter2, _super);
                              function RelativeDateFilter2(target, operator, timeUnitsCount, timeUnitType, includeToday) {
                                var _this = _super.call(this, target, FilterType.RelativeDate) || this;
                                _this.operator = operator;
                                _this.timeUnitsCount = timeUnitsCount;
                                _this.timeUnitType = timeUnitType;
                                _this.includeToday = includeToday;
                                _this.schemaUrl = RelativeDateFilter2.schemaUrl;
                                return _this;
                              }
                              RelativeDateFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.operator = this.operator;
                                filter.timeUnitsCount = this.timeUnitsCount;
                                filter.timeUnitType = this.timeUnitType;
                                filter.includeToday = this.includeToday;
                                return filter;
                              };
                              RelativeDateFilter2.schemaUrl = "http://powerbi.com/product/schema#relativeDate";
                              return RelativeDateFilter2;
                            }(Filter)
                          );
                          exports2.RelativeDateFilter = RelativeDateFilter;
                          var RelativeTimeFilter = (
                            /** @class */
                            function(_super) {
                              __extends(RelativeTimeFilter2, _super);
                              function RelativeTimeFilter2(target, operator, timeUnitsCount, timeUnitType) {
                                var _this = _super.call(this, target, FilterType.RelativeTime) || this;
                                _this.operator = operator;
                                _this.timeUnitsCount = timeUnitsCount;
                                _this.timeUnitType = timeUnitType;
                                _this.schemaUrl = RelativeTimeFilter2.schemaUrl;
                                return _this;
                              }
                              RelativeTimeFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.operator = this.operator;
                                filter.timeUnitsCount = this.timeUnitsCount;
                                filter.timeUnitType = this.timeUnitType;
                                return filter;
                              };
                              RelativeTimeFilter2.schemaUrl = "http://powerbi.com/product/schema#relativeTime";
                              return RelativeTimeFilter2;
                            }(Filter)
                          );
                          exports2.RelativeTimeFilter = RelativeTimeFilter;
                          var BasicFilter = (
                            /** @class */
                            function(_super) {
                              __extends(BasicFilter2, _super);
                              function BasicFilter2(target, operator) {
                                var values = [];
                                for (var _i = 2; _i < arguments.length; _i++) {
                                  values[_i - 2] = arguments[_i];
                                }
                                var _this = _super.call(this, target, FilterType.Basic) || this;
                                _this.operator = operator;
                                _this.schemaUrl = BasicFilter2.schemaUrl;
                                if (values.length === 0 && operator !== "All") {
                                  throw new Error('values must be a non-empty array unless your operator is "All".');
                                }
                                if (Array.isArray(values[0])) {
                                  _this.values = values[0];
                                } else {
                                  _this.values = values;
                                }
                                return _this;
                              }
                              BasicFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.operator = this.operator;
                                filter.values = this.values;
                                filter.requireSingleSelection = !!this.requireSingleSelection;
                                return filter;
                              };
                              BasicFilter2.schemaUrl = "http://powerbi.com/product/schema#basic";
                              return BasicFilter2;
                            }(Filter)
                          );
                          exports2.BasicFilter = BasicFilter;
                          var BasicFilterWithKeys = (
                            /** @class */
                            function(_super) {
                              __extends(BasicFilterWithKeys2, _super);
                              function BasicFilterWithKeys2(target, operator, values, keyValues) {
                                var _this = _super.call(this, target, operator, values) || this;
                                _this.keyValues = keyValues;
                                _this.target = target;
                                var numberOfKeys = target.keys ? target.keys.length : 0;
                                if (numberOfKeys > 0 && !keyValues) {
                                  throw new Error("You should pass the values to be filtered for each key. You passed: no values and ".concat(numberOfKeys, " keys"));
                                }
                                if (numberOfKeys === 0 && keyValues && keyValues.length > 0) {
                                  throw new Error("You passed key values but your target object doesn't contain the keys to be filtered");
                                }
                                for (var _i = 0, _a = _this.keyValues; _i < _a.length; _i++) {
                                  var keyValue = _a[_i];
                                  if (keyValue) {
                                    var lengthOfArray = keyValue.length;
                                    if (lengthOfArray !== numberOfKeys) {
                                      throw new Error("Each tuple of key values should contain a value for each of the keys. You passed: ".concat(lengthOfArray, " values and ").concat(numberOfKeys, " keys"));
                                    }
                                  }
                                }
                                return _this;
                              }
                              BasicFilterWithKeys2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.keyValues = this.keyValues;
                                return filter;
                              };
                              return BasicFilterWithKeys2;
                            }(BasicFilter)
                          );
                          exports2.BasicFilterWithKeys = BasicFilterWithKeys;
                          var IdentityFilter = (
                            /** @class */
                            function(_super) {
                              __extends(IdentityFilter2, _super);
                              function IdentityFilter2(target, operator) {
                                var _this = _super.call(this, target, FilterType.Identity) || this;
                                _this.operator = operator;
                                _this.schemaUrl = IdentityFilter2.schemaUrl;
                                return _this;
                              }
                              IdentityFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.operator = this.operator;
                                filter.target = this.target;
                                return filter;
                              };
                              IdentityFilter2.schemaUrl = "http://powerbi.com/product/schema#identity";
                              return IdentityFilter2;
                            }(Filter)
                          );
                          exports2.IdentityFilter = IdentityFilter;
                          var TupleFilter = (
                            /** @class */
                            function(_super) {
                              __extends(TupleFilter2, _super);
                              function TupleFilter2(target, operator, values) {
                                var _this = _super.call(this, target, FilterType.Tuple) || this;
                                _this.operator = operator;
                                _this.schemaUrl = TupleFilter2.schemaUrl;
                                _this.values = values;
                                return _this;
                              }
                              TupleFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.operator = this.operator;
                                filter.values = this.values;
                                filter.target = this.target;
                                return filter;
                              };
                              TupleFilter2.schemaUrl = "http://powerbi.com/product/schema#tuple";
                              return TupleFilter2;
                            }(Filter)
                          );
                          exports2.TupleFilter = TupleFilter;
                          var AdvancedFilter = (
                            /** @class */
                            function(_super) {
                              __extends(AdvancedFilter2, _super);
                              function AdvancedFilter2(target, logicalOperator) {
                                var conditions = [];
                                for (var _i = 2; _i < arguments.length; _i++) {
                                  conditions[_i - 2] = arguments[_i];
                                }
                                var _this = _super.call(this, target, FilterType.Advanced) || this;
                                _this.schemaUrl = AdvancedFilter2.schemaUrl;
                                if (typeof logicalOperator !== "string" || logicalOperator.length === 0) {
                                  throw new Error("logicalOperator must be a valid operator, You passed: ".concat(logicalOperator));
                                }
                                _this.logicalOperator = logicalOperator;
                                var extractedConditions;
                                if (Array.isArray(conditions[0])) {
                                  extractedConditions = conditions[0];
                                } else {
                                  extractedConditions = conditions;
                                }
                                if (extractedConditions.length > 2) {
                                  throw new Error("AdvancedFilters may not have more than two conditions. You passed: ".concat(conditions.length));
                                }
                                if (extractedConditions.length === 1 && logicalOperator !== "And") {
                                  throw new Error('Logical Operator must be "And" when there is only one condition provided');
                                }
                                _this.conditions = extractedConditions;
                                return _this;
                              }
                              AdvancedFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.logicalOperator = this.logicalOperator;
                                filter.conditions = this.conditions;
                                return filter;
                              };
                              AdvancedFilter2.schemaUrl = "http://powerbi.com/product/schema#advanced";
                              return AdvancedFilter2;
                            }(Filter)
                          );
                          exports2.AdvancedFilter = AdvancedFilter;
                          var HierarchyFilter = (
                            /** @class */
                            function(_super) {
                              __extends(HierarchyFilter2, _super);
                              function HierarchyFilter2(target, hierarchyData) {
                                var _this = _super.call(this, target, FilterType.Hierarchy) || this;
                                _this.schemaUrl = HierarchyFilter2.schemaUrl;
                                _this.hierarchyData = hierarchyData;
                                return _this;
                              }
                              HierarchyFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.hierarchyData = this.hierarchyData;
                                filter.target = this.target;
                                return filter;
                              };
                              HierarchyFilter2.schemaUrl = "http://powerbi.com/product/schema#hierarchy";
                              return HierarchyFilter2;
                            }(Filter)
                          );
                          exports2.HierarchyFilter = HierarchyFilter;
                          var HierarchyIdentityFilter = (
                            /** @class */
                            function(_super) {
                              __extends(HierarchyIdentityFilter2, _super);
                              function HierarchyIdentityFilter2(target, hierarchyData) {
                                var _this = _super.call(this, target, FilterType.HierarchyIdentity) || this;
                                _this.schemaUrl = HierarchyIdentityFilter2.schemaUrl;
                                _this.hierarchyData = hierarchyData;
                                return _this;
                              }
                              HierarchyIdentityFilter2.prototype.toJSON = function() {
                                var filter = _super.prototype.toJSON.call(this);
                                filter.hierarchyData = this.hierarchyData;
                                filter.target = this.target;
                                return filter;
                              };
                              HierarchyIdentityFilter2.schemaUrl = "http://powerbi.com/product/schema#hierarchyIdentity";
                              return HierarchyIdentityFilter2;
                            }(Filter)
                          );
                          exports2.HierarchyIdentityFilter = HierarchyIdentityFilter;
                          function isFilterKeyColumnsTarget(target) {
                            return isColumn(target) && !!target.keys;
                          }
                          exports2.isFilterKeyColumnsTarget = isFilterKeyColumnsTarget;
                          function isBasicFilterWithKeys(filter) {
                            return getFilterType(filter) === FilterType.Basic && !!filter.keyValues;
                          }
                          exports2.isBasicFilterWithKeys = isBasicFilterWithKeys;
                          function getFilterType(filter) {
                            if (filter.filterType) {
                              return filter.filterType;
                            }
                            var basicFilter = filter;
                            var advancedFilter = filter;
                            if (typeof basicFilter.operator === "string" && Array.isArray(basicFilter.values)) {
                              return FilterType.Basic;
                            } else if (typeof advancedFilter.logicalOperator === "string" && Array.isArray(advancedFilter.conditions)) {
                              return FilterType.Advanced;
                            } else {
                              return FilterType.Unknown;
                            }
                          }
                          exports2.getFilterType = getFilterType;
                          function isMeasure(arg) {
                            return arg.table !== void 0 && arg.measure !== void 0;
                          }
                          exports2.isMeasure = isMeasure;
                          function isColumn(arg) {
                            return !!(arg.table && arg.column && !arg.aggregationFunction);
                          }
                          exports2.isColumn = isColumn;
                          function isHierarchyLevel(arg) {
                            return !!(arg.table && arg.hierarchy && arg.hierarchyLevel && !arg.aggregationFunction);
                          }
                          exports2.isHierarchyLevel = isHierarchyLevel;
                          function isHierarchyLevelAggr(arg) {
                            return !!(arg.table && arg.hierarchy && arg.hierarchyLevel && arg.aggregationFunction);
                          }
                          exports2.isHierarchyLevelAggr = isHierarchyLevelAggr;
                          function isColumnAggr(arg) {
                            return !!(arg.table && arg.column && arg.aggregationFunction);
                          }
                          exports2.isColumnAggr = isColumnAggr;
                          function isPercentOfGrandTotal(arg) {
                            return !!arg.percentOfGrandTotal;
                          }
                          exports2.isPercentOfGrandTotal = isPercentOfGrandTotal;
                          var CredentialType;
                          (function(CredentialType2) {
                            CredentialType2[CredentialType2["NoConnection"] = 0] = "NoConnection";
                            CredentialType2[CredentialType2["OnBehalfOf"] = 1] = "OnBehalfOf";
                            CredentialType2[CredentialType2["Anonymous"] = 2] = "Anonymous";
                          })(CredentialType = exports2.CredentialType || (exports2.CredentialType = {}));
                          var DataCacheMode;
                          (function(DataCacheMode2) {
                            DataCacheMode2[DataCacheMode2["Import"] = 0] = "Import";
                            DataCacheMode2[DataCacheMode2["DirectQuery"] = 1] = "DirectQuery";
                          })(DataCacheMode = exports2.DataCacheMode || (exports2.DataCacheMode = {}));
                          var AggregateFunction;
                          (function(AggregateFunction2) {
                            AggregateFunction2[AggregateFunction2["Default"] = 1] = "Default";
                            AggregateFunction2[AggregateFunction2["None"] = 2] = "None";
                            AggregateFunction2[AggregateFunction2["Sum"] = 3] = "Sum";
                            AggregateFunction2[AggregateFunction2["Min"] = 4] = "Min";
                            AggregateFunction2[AggregateFunction2["Max"] = 5] = "Max";
                            AggregateFunction2[AggregateFunction2["Count"] = 6] = "Count";
                            AggregateFunction2[AggregateFunction2["Average"] = 7] = "Average";
                            AggregateFunction2[AggregateFunction2["DistinctCount"] = 8] = "DistinctCount";
                          })(AggregateFunction = exports2.AggregateFunction || (exports2.AggregateFunction = {}));
                          var BrowserPrintAdjustmentsMode;
                          (function(BrowserPrintAdjustmentsMode2) {
                            BrowserPrintAdjustmentsMode2[BrowserPrintAdjustmentsMode2["Default"] = 0] = "Default";
                            BrowserPrintAdjustmentsMode2[BrowserPrintAdjustmentsMode2["NoAdjustments"] = 1] = "NoAdjustments";
                          })(BrowserPrintAdjustmentsMode = exports2.BrowserPrintAdjustmentsMode || (exports2.BrowserPrintAdjustmentsMode = {}));
                          var PageNavigationPosition;
                          (function(PageNavigationPosition2) {
                            PageNavigationPosition2[PageNavigationPosition2["Bottom"] = 0] = "Bottom";
                            PageNavigationPosition2[PageNavigationPosition2["Left"] = 1] = "Left";
                          })(PageNavigationPosition = exports2.PageNavigationPosition || (exports2.PageNavigationPosition = {}));
                          var QnaMode;
                          (function(QnaMode2) {
                            QnaMode2[QnaMode2["Interactive"] = 0] = "Interactive";
                            QnaMode2[QnaMode2["ResultOnly"] = 1] = "ResultOnly";
                          })(QnaMode = exports2.QnaMode || (exports2.QnaMode = {}));
                          var ExportDataType;
                          (function(ExportDataType2) {
                            ExportDataType2[ExportDataType2["Summarized"] = 0] = "Summarized";
                            ExportDataType2[ExportDataType2["Underlying"] = 1] = "Underlying";
                          })(ExportDataType = exports2.ExportDataType || (exports2.ExportDataType = {}));
                          var BookmarksPlayMode;
                          (function(BookmarksPlayMode2) {
                            BookmarksPlayMode2[BookmarksPlayMode2["Off"] = 0] = "Off";
                            BookmarksPlayMode2[BookmarksPlayMode2["Presentation"] = 1] = "Presentation";
                          })(BookmarksPlayMode = exports2.BookmarksPlayMode || (exports2.BookmarksPlayMode = {}));
                          exports2.CommonErrorCodes = {
                            TokenExpired: "TokenExpired",
                            NotFound: "PowerBIEntityNotFound",
                            InvalidParameters: "Invalid parameters",
                            LoadReportFailed: "LoadReportFailed",
                            NotAuthorized: "PowerBINotAuthorizedException",
                            FailedToLoadModel: "ExplorationContainer_FailedToLoadModel_DefaultDetails"
                          };
                          exports2.TextAlignment = {
                            Left: "left",
                            Center: "center",
                            Right: "right"
                          };
                          exports2.LegendPosition = {
                            Top: "Top",
                            Bottom: "Bottom",
                            Right: "Right",
                            Left: "Left",
                            TopCenter: "TopCenter",
                            BottomCenter: "BottomCenter",
                            RightCenter: "RightCenter",
                            LeftCenter: "LeftCenter"
                          };
                          var SortDirection;
                          (function(SortDirection2) {
                            SortDirection2[SortDirection2["Ascending"] = 1] = "Ascending";
                            SortDirection2[SortDirection2["Descending"] = 2] = "Descending";
                          })(SortDirection = exports2.SortDirection || (exports2.SortDirection = {}));
                          var Selector = (
                            /** @class */
                            function() {
                              function Selector2(schema) {
                                this.$schema = schema;
                              }
                              Selector2.prototype.toJSON = function() {
                                return {
                                  $schema: this.$schema
                                };
                              };
                              return Selector2;
                            }()
                          );
                          exports2.Selector = Selector;
                          var PageSelector = (
                            /** @class */
                            function(_super) {
                              __extends(PageSelector2, _super);
                              function PageSelector2(pageName) {
                                var _this = _super.call(this, PageSelector2.schemaUrl) || this;
                                _this.pageName = pageName;
                                return _this;
                              }
                              PageSelector2.prototype.toJSON = function() {
                                var selector = _super.prototype.toJSON.call(this);
                                selector.pageName = this.pageName;
                                return selector;
                              };
                              PageSelector2.schemaUrl = "http://powerbi.com/product/schema#pageSelector";
                              return PageSelector2;
                            }(Selector)
                          );
                          exports2.PageSelector = PageSelector;
                          var VisualSelector = (
                            /** @class */
                            function(_super) {
                              __extends(VisualSelector2, _super);
                              function VisualSelector2(visualName) {
                                var _this = _super.call(this, VisualSelector2.schemaUrl) || this;
                                _this.visualName = visualName;
                                return _this;
                              }
                              VisualSelector2.prototype.toJSON = function() {
                                var selector = _super.prototype.toJSON.call(this);
                                selector.visualName = this.visualName;
                                return selector;
                              };
                              VisualSelector2.schemaUrl = "http://powerbi.com/product/schema#visualSelector";
                              return VisualSelector2;
                            }(Selector)
                          );
                          exports2.VisualSelector = VisualSelector;
                          var VisualTypeSelector = (
                            /** @class */
                            function(_super) {
                              __extends(VisualTypeSelector2, _super);
                              function VisualTypeSelector2(visualType) {
                                var _this = _super.call(this, VisualSelector.schemaUrl) || this;
                                _this.visualType = visualType;
                                return _this;
                              }
                              VisualTypeSelector2.prototype.toJSON = function() {
                                var selector = _super.prototype.toJSON.call(this);
                                selector.visualType = this.visualType;
                                return selector;
                              };
                              VisualTypeSelector2.schemaUrl = "http://powerbi.com/product/schema#visualTypeSelector";
                              return VisualTypeSelector2;
                            }(Selector)
                          );
                          exports2.VisualTypeSelector = VisualTypeSelector;
                          var SlicerTargetSelector = (
                            /** @class */
                            function(_super) {
                              __extends(SlicerTargetSelector2, _super);
                              function SlicerTargetSelector2(target) {
                                var _this = _super.call(this, VisualSelector.schemaUrl) || this;
                                _this.target = target;
                                return _this;
                              }
                              SlicerTargetSelector2.prototype.toJSON = function() {
                                var selector = _super.prototype.toJSON.call(this);
                                selector.target = this.target;
                                return selector;
                              };
                              SlicerTargetSelector2.schemaUrl = "http://powerbi.com/product/schema#slicerTargetSelector";
                              return SlicerTargetSelector2;
                            }(Selector)
                          );
                          exports2.SlicerTargetSelector = SlicerTargetSelector;
                          var CommandDisplayOption;
                          (function(CommandDisplayOption2) {
                            CommandDisplayOption2[CommandDisplayOption2["Enabled"] = 0] = "Enabled";
                            CommandDisplayOption2[CommandDisplayOption2["Disabled"] = 1] = "Disabled";
                            CommandDisplayOption2[CommandDisplayOption2["Hidden"] = 2] = "Hidden";
                          })(CommandDisplayOption = exports2.CommandDisplayOption || (exports2.CommandDisplayOption = {}));
                          var VisualDataRoleKind;
                          (function(VisualDataRoleKind2) {
                            VisualDataRoleKind2[VisualDataRoleKind2["Grouping"] = 0] = "Grouping";
                            VisualDataRoleKind2[VisualDataRoleKind2["Measure"] = 1] = "Measure";
                            VisualDataRoleKind2[VisualDataRoleKind2["GroupingOrMeasure"] = 2] = "GroupingOrMeasure";
                          })(VisualDataRoleKind = exports2.VisualDataRoleKind || (exports2.VisualDataRoleKind = {}));
                          var VisualDataRoleKindPreference;
                          (function(VisualDataRoleKindPreference2) {
                            VisualDataRoleKindPreference2[VisualDataRoleKindPreference2["Measure"] = 0] = "Measure";
                            VisualDataRoleKindPreference2[VisualDataRoleKindPreference2["Grouping"] = 1] = "Grouping";
                          })(VisualDataRoleKindPreference = exports2.VisualDataRoleKindPreference || (exports2.VisualDataRoleKindPreference = {}));
                          function isOnLoadFilters(filters) {
                            return filters && !isReportFiltersArray(filters);
                          }
                          exports2.isOnLoadFilters = isOnLoadFilters;
                          function isReportFiltersArray(filters) {
                            return Array.isArray(filters);
                          }
                          exports2.isReportFiltersArray = isReportFiltersArray;
                          function isFlatMenuExtension(menuExtension) {
                            return menuExtension && !isGroupedMenuExtension(menuExtension);
                          }
                          exports2.isFlatMenuExtension = isFlatMenuExtension;
                          function isGroupedMenuExtension(menuExtension) {
                            return menuExtension && !!menuExtension.groupName;
                          }
                          exports2.isGroupedMenuExtension = isGroupedMenuExtension;
                          function isIExtensions(extensions) {
                            return extensions && !isIExtensionArray(extensions);
                          }
                          exports2.isIExtensions = isIExtensions;
                          function isIExtensionArray(extensions) {
                            return Array.isArray(extensions);
                          }
                          exports2.isIExtensionArray = isIExtensionArray;
                          function normalizeError(error) {
                            var message = error.message;
                            if (!message) {
                              message = "".concat(error.path, " is invalid. Not meeting ").concat(error.keyword, " constraint");
                            }
                            return {
                              message
                            };
                          }
                          function validateVisualSelector(input) {
                            var errors = validator_1.Validators.visualSelectorValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateVisualSelector = validateVisualSelector;
                          function validateSlicer(input) {
                            var errors = validator_1.Validators.slicerValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateSlicer = validateSlicer;
                          function validateSlicerState(input) {
                            var errors = validator_1.Validators.slicerStateValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateSlicerState = validateSlicerState;
                          function validatePlayBookmarkRequest(input) {
                            var errors = validator_1.Validators.playBookmarkRequestValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validatePlayBookmarkRequest = validatePlayBookmarkRequest;
                          function validateAddBookmarkRequest(input) {
                            var errors = validator_1.Validators.addBookmarkRequestValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateAddBookmarkRequest = validateAddBookmarkRequest;
                          function validateApplyBookmarkByNameRequest(input) {
                            var errors = validator_1.Validators.applyBookmarkByNameRequestValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateApplyBookmarkByNameRequest = validateApplyBookmarkByNameRequest;
                          function validateApplyBookmarkStateRequest(input) {
                            var errors = validator_1.Validators.applyBookmarkStateRequestValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateApplyBookmarkStateRequest = validateApplyBookmarkStateRequest;
                          function validateCaptureBookmarkRequest(input) {
                            var errors = validator_1.Validators.captureBookmarkRequestValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateCaptureBookmarkRequest = validateCaptureBookmarkRequest;
                          function validateSettings(input) {
                            var errors = validator_1.Validators.settingsValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateSettings = validateSettings;
                          function validatePanes(input) {
                            var errors = validator_1.Validators.reportPanesValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validatePanes = validatePanes;
                          function validateBookmarksPane(input) {
                            var errors = validator_1.Validators.bookmarksPaneValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateBookmarksPane = validateBookmarksPane;
                          function validateFiltersPane(input) {
                            var errors = validator_1.Validators.filtersPaneValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateFiltersPane = validateFiltersPane;
                          function validateFieldsPane(input) {
                            var errors = validator_1.Validators.fieldsPaneValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateFieldsPane = validateFieldsPane;
                          function validatePageNavigationPane(input) {
                            var errors = validator_1.Validators.pageNavigationPaneValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validatePageNavigationPane = validatePageNavigationPane;
                          function validateSelectionPane(input) {
                            var errors = validator_1.Validators.selectionPaneValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateSelectionPane = validateSelectionPane;
                          function validateSyncSlicersPane(input) {
                            var errors = validator_1.Validators.syncSlicersPaneValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateSyncSlicersPane = validateSyncSlicersPane;
                          function validateVisualizationsPane(input) {
                            var errors = validator_1.Validators.visualizationsPaneValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateVisualizationsPane = validateVisualizationsPane;
                          function validateCustomPageSize(input) {
                            var errors = validator_1.Validators.customPageSizeValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateCustomPageSize = validateCustomPageSize;
                          function validateExtension(input) {
                            var errors = validator_1.Validators.extensionValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateExtension = validateExtension;
                          function validateMenuGroupExtension(input) {
                            var errors = validator_1.Validators.menuGroupExtensionValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateMenuGroupExtension = validateMenuGroupExtension;
                          function validateReportLoad(input) {
                            var errors = validator_1.Validators.reportLoadValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateReportLoad = validateReportLoad;
                          function validatePaginatedReportLoad(input) {
                            var errors = validator_1.Validators.paginatedReportLoadValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validatePaginatedReportLoad = validatePaginatedReportLoad;
                          function validateCreateReport(input) {
                            var errors = validator_1.Validators.reportCreateValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateCreateReport = validateCreateReport;
                          function validateQuickCreate(input) {
                            var errors = validator_1.Validators.quickCreateValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateQuickCreate = validateQuickCreate;
                          function validateDashboardLoad(input) {
                            var errors = validator_1.Validators.dashboardLoadValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateDashboardLoad = validateDashboardLoad;
                          function validateTileLoad(input) {
                            var errors = validator_1.Validators.tileLoadValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateTileLoad = validateTileLoad;
                          function validatePage(input) {
                            var errors = validator_1.Validators.pageValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validatePage = validatePage;
                          function validateFilter(input) {
                            var errors = validator_1.Validators.filterValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateFilter = validateFilter;
                          function validateUpdateFiltersRequest(input) {
                            var errors = validator_1.Validators.updateFiltersRequestValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateUpdateFiltersRequest = validateUpdateFiltersRequest;
                          function validateSaveAsParameters(input) {
                            var errors = validator_1.Validators.saveAsParametersValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateSaveAsParameters = validateSaveAsParameters;
                          function validateLoadQnaConfiguration(input) {
                            var errors = validator_1.Validators.loadQnaValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateLoadQnaConfiguration = validateLoadQnaConfiguration;
                          function validateQnaInterpretInputData(input) {
                            var errors = validator_1.Validators.qnaInterpretInputDataValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateQnaInterpretInputData = validateQnaInterpretInputData;
                          function validateExportDataRequest(input) {
                            var errors = validator_1.Validators.exportDataRequestValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateExportDataRequest = validateExportDataRequest;
                          function validateVisualHeader(input) {
                            var errors = validator_1.Validators.visualHeaderValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateVisualHeader = validateVisualHeader;
                          function validateVisualSettings(input) {
                            var errors = validator_1.Validators.visualSettingsValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateVisualSettings = validateVisualSettings;
                          function validateCommandsSettings(input) {
                            var errors = validator_1.Validators.commandsSettingsValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateCommandsSettings = validateCommandsSettings;
                          function validateCustomTheme(input) {
                            var errors = validator_1.Validators.customThemeValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateCustomTheme = validateCustomTheme;
                          function validateZoomLevel(input) {
                            var errors = validator_1.Validators.zoomLevelValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validateZoomLevel = validateZoomLevel;
                          function validatePrintSettings(input) {
                            var errors = validator_1.Validators.printSettingsValidator.validate(input);
                            return errors ? errors.map(normalizeError) : void 0;
                          }
                          exports2.validatePrintSettings = validatePrintSettings;
                        },
                        /* 1 */
                        /***/
                        (__unused_webpack_module, exports2, __nested_webpack_require_47160__) => {
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.Validators = void 0;
                          var barsValidator_1 = __nested_webpack_require_47160__(2);
                          var bookmarkValidator_1 = __nested_webpack_require_47160__(5);
                          var commandsSettingsValidator_1 = __nested_webpack_require_47160__(6);
                          var customThemeValidator_1 = __nested_webpack_require_47160__(7);
                          var dashboardLoadValidator_1 = __nested_webpack_require_47160__(8);
                          var datasetBindingValidator_1 = __nested_webpack_require_47160__(9);
                          var exportDataValidator_1 = __nested_webpack_require_47160__(10);
                          var extensionsValidator_1 = __nested_webpack_require_47160__(11);
                          var filtersValidator_1 = __nested_webpack_require_47160__(12);
                          var layoutValidator_1 = __nested_webpack_require_47160__(13);
                          var pageValidator_1 = __nested_webpack_require_47160__(14);
                          var panesValidator_1 = __nested_webpack_require_47160__(15);
                          var qnaValidator_1 = __nested_webpack_require_47160__(16);
                          var reportCreateValidator_1 = __nested_webpack_require_47160__(17);
                          var reportLoadValidator_1 = __nested_webpack_require_47160__(18);
                          var paginatedReportLoadValidator_1 = __nested_webpack_require_47160__(19);
                          var saveAsParametersValidator_1 = __nested_webpack_require_47160__(20);
                          var selectorsValidator_1 = __nested_webpack_require_47160__(21);
                          var settingsValidator_1 = __nested_webpack_require_47160__(22);
                          var slicersValidator_1 = __nested_webpack_require_47160__(23);
                          var tileLoadValidator_1 = __nested_webpack_require_47160__(24);
                          var visualSettingsValidator_1 = __nested_webpack_require_47160__(25);
                          var anyOfValidator_1 = __nested_webpack_require_47160__(26);
                          var fieldForbiddenValidator_1 = __nested_webpack_require_47160__(27);
                          var fieldRequiredValidator_1 = __nested_webpack_require_47160__(28);
                          var mapValidator_1 = __nested_webpack_require_47160__(29);
                          var typeValidator_1 = __nested_webpack_require_47160__(4);
                          var parameterPanelValidator_1 = __nested_webpack_require_47160__(30);
                          var datasetCreateConfigValidator_1 = __nested_webpack_require_47160__(31);
                          var quickCreateValidator_1 = __nested_webpack_require_47160__(32);
                          var printSettingsValidator_1 = __nested_webpack_require_47160__(33);
                          var paginatedReportDatasetBindingValidator_1 = __nested_webpack_require_47160__(34);
                          exports2.Validators = {
                            addBookmarkRequestValidator: new bookmarkValidator_1.AddBookmarkRequestValidator(),
                            advancedFilterTypeValidator: new typeValidator_1.EnumValidator([0]),
                            advancedFilterValidator: new filtersValidator_1.AdvancedFilterValidator(),
                            anyArrayValidator: new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()])]),
                            anyFilterValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.BasicFilterValidator(), new filtersValidator_1.AdvancedFilterValidator(), new filtersValidator_1.IncludeExcludeFilterValidator(), new filtersValidator_1.NotSupportedFilterValidator(), new filtersValidator_1.RelativeDateFilterValidator(), new filtersValidator_1.TopNFilterValidator(), new filtersValidator_1.RelativeTimeFilterValidator(), new filtersValidator_1.HierarchyFilterValidator()]),
                            anyValueValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()]),
                            actionBarValidator: new barsValidator_1.ActionBarValidator(),
                            statusBarValidator: new barsValidator_1.StatusBarValidator(),
                            applyBookmarkByNameRequestValidator: new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(),
                            applyBookmarkStateRequestValidator: new bookmarkValidator_1.ApplyBookmarkStateRequestValidator(),
                            applyBookmarkValidator: new anyOfValidator_1.AnyOfValidator([new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(), new bookmarkValidator_1.ApplyBookmarkStateRequestValidator()]),
                            backgroundValidator: new typeValidator_1.EnumValidator([0, 1]),
                            basicFilterTypeValidator: new typeValidator_1.EnumValidator([1]),
                            basicFilterValidator: new filtersValidator_1.BasicFilterValidator(),
                            booleanArrayValidator: new typeValidator_1.BooleanArrayValidator(),
                            booleanValidator: new typeValidator_1.BooleanValidator(),
                            bookmarksPaneValidator: new panesValidator_1.BookmarksPaneValidator(),
                            captureBookmarkOptionsValidator: new bookmarkValidator_1.CaptureBookmarkOptionsValidator(),
                            captureBookmarkRequestValidator: new bookmarkValidator_1.CaptureBookmarkRequestValidator(),
                            columnSchemaArrayValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.ColumnSchemaValidator()]),
                            commandDisplayOptionValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
                            commandExtensionSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
                            commandExtensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.CommandExtensionValidator()]),
                            commandExtensionValidator: new extensionsValidator_1.CommandExtensionValidator(),
                            commandsSettingsArrayValidator: new typeValidator_1.ArrayValidator([new commandsSettingsValidator_1.CommandsSettingsValidator()]),
                            commandsSettingsValidator: new commandsSettingsValidator_1.CommandsSettingsValidator(),
                            conditionItemValidator: new filtersValidator_1.ConditionItemValidator(),
                            contrastModeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4]),
                            credentialDetailsValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new typeValidator_1.StringValidator()]),
                            credentialsValidator: new datasetCreateConfigValidator_1.CredentialsValidator(),
                            credentialTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
                            customLayoutDisplayOptionValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
                            customLayoutValidator: new layoutValidator_1.CustomLayoutValidator(),
                            customPageSizeValidator: new pageValidator_1.CustomPageSizeValidator(),
                            customThemeValidator: new customThemeValidator_1.CustomThemeValidator(),
                            dashboardLoadValidator: new dashboardLoadValidator_1.DashboardLoadValidator(),
                            dataCacheModeValidator: new typeValidator_1.EnumValidator([0, 1]),
                            datasetBindingValidator: new datasetBindingValidator_1.DatasetBindingValidator(),
                            datasetCreateConfigValidator: new datasetCreateConfigValidator_1.DatasetCreateConfigValidator(),
                            datasourceConnectionConfigValidator: new datasetCreateConfigValidator_1.DatasourceConnectionConfigValidator(),
                            displayStateModeValidator: new typeValidator_1.EnumValidator([0, 1]),
                            displayStateValidator: new layoutValidator_1.DisplayStateValidator(),
                            exportDataRequestValidator: new exportDataValidator_1.ExportDataRequestValidator(),
                            extensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.ExtensionValidator()]),
                            extensionsValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.ArrayValidator([new extensionsValidator_1.ExtensionValidator()]), new extensionsValidator_1.ExtensionsValidator()]),
                            extensionPointsValidator: new extensionsValidator_1.ExtensionPointsValidator(),
                            extensionValidator: new extensionsValidator_1.ExtensionValidator(),
                            fieldForbiddenValidator: new fieldForbiddenValidator_1.FieldForbiddenValidator(),
                            fieldRequiredValidator: new fieldRequiredValidator_1.FieldRequiredValidator(),
                            fieldsPaneValidator: new panesValidator_1.FieldsPaneValidator(),
                            filterColumnTargetValidator: new filtersValidator_1.FilterColumnTargetValidator(),
                            filterDisplaySettingsValidator: new filtersValidator_1.FilterDisplaySettingsValidator(),
                            filterConditionsValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.ConditionItemValidator()]),
                            filterHierarchyTargetValidator: new filtersValidator_1.FilterHierarchyTargetValidator(),
                            filterMeasureTargetValidator: new filtersValidator_1.FilterMeasureTargetValidator(),
                            filterTargetValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new filtersValidator_1.FilterKeyColumnsTargetValidator(), new filtersValidator_1.FilterKeyHierarchyTargetValidator(), new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new filtersValidator_1.FilterKeyColumnsTargetValidator(), new filtersValidator_1.FilterKeyHierarchyTargetValidator()])])])])]),
                            filterValidator: new filtersValidator_1.FilterValidator(),
                            filterTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 9]),
                            filtersArrayValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.FilterValidator()]),
                            filtersOperationsUpdateValidator: new typeValidator_1.EnumValidator([1, 2, 3]),
                            filtersOperationsRemoveAllValidator: new typeValidator_1.EnumValidator([0]),
                            filtersPaneValidator: new panesValidator_1.FiltersPaneValidator(),
                            hyperlinkClickBehaviorValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
                            includeExcludeFilterValidator: new filtersValidator_1.IncludeExcludeFilterValidator(),
                            includeExludeFilterTypeValidator: new typeValidator_1.EnumValidator([3]),
                            includeExcludeFilterValuesValidator: new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator(), new typeValidator_1.ArrayValidator([new typeValidator_1.ArrayValidator([new filtersValidator_1.IncludeExcludePointValueValidator()])])])]),
                            hierarchyFilterTypeValidator: new typeValidator_1.EnumValidator([9]),
                            hierarchyFilterValuesValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.HierarchyFilterNodeValidator()]),
                            layoutTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3]),
                            loadQnaValidator: new qnaValidator_1.LoadQnaValidator(),
                            menuExtensionValidator: new anyOfValidator_1.AnyOfValidator([new extensionsValidator_1.FlatMenuExtensionValidator(), new extensionsValidator_1.GroupedMenuExtensionValidator()]),
                            menuGroupExtensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.MenuGroupExtensionValidator()]),
                            menuGroupExtensionValidator: new extensionsValidator_1.MenuGroupExtensionValidator(),
                            menuLocationValidator: new typeValidator_1.EnumValidator([0, 1]),
                            notSupportedFilterTypeValidator: new typeValidator_1.EnumValidator([2]),
                            notSupportedFilterValidator: new filtersValidator_1.NotSupportedFilterValidator(),
                            numberArrayValidator: new typeValidator_1.NumberArrayValidator(),
                            numberValidator: new typeValidator_1.NumberValidator(),
                            onLoadFiltersBaseValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.OnLoadFiltersBaseValidator(), new filtersValidator_1.OnLoadFiltersBaseRemoveOperationValidator()]),
                            pageLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.VisualLayoutValidator()]),
                            pageNavigationPaneValidator: new panesValidator_1.PageNavigationPaneValidator(),
                            pageNavigationPositionValidator: new typeValidator_1.EnumValidator([0, 1]),
                            pageSizeTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5]),
                            pageSizeValidator: new pageValidator_1.PageSizeValidator(),
                            pageValidator: new pageValidator_1.PageValidator(),
                            pageViewFieldValidator: new pageValidator_1.PageViewFieldValidator(),
                            pagesLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.PageLayoutValidator()]),
                            paginatedReportCommandsValidator: new commandsSettingsValidator_1.PaginatedReportCommandsValidator(),
                            paginatedReportDatasetBindingArrayValidator: new typeValidator_1.ArrayValidator([new paginatedReportDatasetBindingValidator_1.PaginatedReportDatasetBindingValidator()]),
                            paginatedReportLoadValidator: new paginatedReportLoadValidator_1.PaginatedReportLoadValidator(),
                            paginatedReportsettingsValidator: new settingsValidator_1.PaginatedReportSettingsValidator(),
                            parameterValuesArrayValidator: new typeValidator_1.ArrayValidator([new paginatedReportLoadValidator_1.ReportParameterFieldsValidator()]),
                            parametersPanelValidator: new parameterPanelValidator_1.ParametersPanelValidator(),
                            permissionsValidator: new typeValidator_1.EnumValidator([0, 1, 2, 4, 7]),
                            playBookmarkRequestValidator: new bookmarkValidator_1.PlayBookmarkRequestValidator(),
                            printSettingsValidator: new printSettingsValidator_1.PrintSettingsValidator(),
                            qnaInterpretInputDataValidator: new qnaValidator_1.QnaInterpretInputDataValidator(),
                            qnaPanesValidator: new panesValidator_1.QnaPanesValidator(),
                            qnaSettingValidator: new qnaValidator_1.QnaSettingsValidator(),
                            quickCreateValidator: new quickCreateValidator_1.QuickCreateValidator(),
                            rawDataValidator: new typeValidator_1.ArrayValidator([new typeValidator_1.ArrayValidator([new typeValidator_1.StringValidator()])]),
                            relativeDateFilterOperatorValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
                            relativeDateFilterTimeUnitTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6]),
                            relativeDateFilterTypeValidator: new typeValidator_1.EnumValidator([4]),
                            relativeDateFilterValidator: new filtersValidator_1.RelativeDateFilterValidator(),
                            relativeDateTimeFilterTypeValidator: new typeValidator_1.EnumValidator([4, 7]),
                            relativeDateTimeFilterUnitTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 8]),
                            relativeTimeFilterTimeUnitTypeValidator: new typeValidator_1.EnumValidator([7, 8]),
                            relativeTimeFilterTypeValidator: new typeValidator_1.EnumValidator([7]),
                            relativeTimeFilterValidator: new filtersValidator_1.RelativeTimeFilterValidator(),
                            reportBarsValidator: new barsValidator_1.ReportBarsValidator(),
                            reportCreateValidator: new reportCreateValidator_1.ReportCreateValidator(),
                            reportLoadFiltersValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.ArrayValidator([new filtersValidator_1.FilterValidator()]), new filtersValidator_1.OnLoadFiltersValidator()]),
                            reportLoadValidator: new reportLoadValidator_1.ReportLoadValidator(),
                            reportPanesValidator: new panesValidator_1.ReportPanesValidator(),
                            saveAsParametersValidator: new saveAsParametersValidator_1.SaveAsParametersValidator(),
                            selectionPaneValidator: new panesValidator_1.SelectionPaneValidator(),
                            settingsValidator: new settingsValidator_1.SettingsValidator(),
                            singleCommandSettingsValidator: new commandsSettingsValidator_1.SingleCommandSettingsValidator(),
                            slicerSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.SlicerTargetSelectorValidator()]),
                            slicerStateValidator: new slicersValidator_1.SlicerStateValidator(),
                            slicerTargetValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new filtersValidator_1.FilterKeyColumnsTargetValidator(), new filtersValidator_1.FilterKeyHierarchyTargetValidator()]),
                            slicerValidator: new slicersValidator_1.SlicerValidator(),
                            stringArrayValidator: new typeValidator_1.StringArrayValidator(),
                            stringValidator: new typeValidator_1.StringValidator(),
                            syncSlicersPaneValidator: new panesValidator_1.SyncSlicersPaneValidator(),
                            tableDataArrayValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.TableDataValidator()]),
                            tableSchemaListValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.TableSchemaValidator()]),
                            tileLoadValidator: new tileLoadValidator_1.TileLoadValidator(),
                            tokenTypeValidator: new typeValidator_1.EnumValidator([0, 1]),
                            topNFilterTypeValidator: new typeValidator_1.EnumValidator([5]),
                            topNFilterValidator: new filtersValidator_1.TopNFilterValidator(),
                            updateFiltersRequestValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.UpdateFiltersRequestValidator(), new filtersValidator_1.RemoveFiltersRequestValidator()]),
                            viewModeValidator: new typeValidator_1.EnumValidator([0, 1]),
                            visualCommandSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
                            visualHeaderSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
                            visualHeaderSettingsValidator: new visualSettingsValidator_1.VisualHeaderSettingsValidator(),
                            visualHeaderValidator: new visualSettingsValidator_1.VisualHeaderValidator(),
                            visualHeadersValidator: new typeValidator_1.ArrayValidator([new visualSettingsValidator_1.VisualHeaderValidator()]),
                            visualizationsPaneValidator: new panesValidator_1.VisualizationsPaneValidator(),
                            visualLayoutValidator: new layoutValidator_1.VisualLayoutValidator(),
                            visualSelectorValidator: new selectorsValidator_1.VisualSelectorValidator(),
                            visualSettingsValidator: new visualSettingsValidator_1.VisualSettingsValidator(),
                            visualTypeSelectorValidator: new selectorsValidator_1.VisualTypeSelectorValidator(),
                            zoomLevelValidator: new typeValidator_1.RangeValidator(0.25, 4)
                          };
                        },
                        /* 2 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_65027__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.StatusBarValidator = exports2.ActionBarValidator = exports2.ReportBarsValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_65027__(3);
                          var typeValidator_1 = __nested_webpack_require_65027__(4);
                          var validator_1 = __nested_webpack_require_65027__(1);
                          var ReportBarsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ReportBarsValidator2, _super);
                              function ReportBarsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ReportBarsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "actionBar",
                                    validators: [validator_1.Validators.actionBarValidator]
                                  },
                                  {
                                    field: "statusBar",
                                    validators: [validator_1.Validators.statusBarValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ReportBarsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ReportBarsValidator = ReportBarsValidator;
                          var ActionBarValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ActionBarValidator2, _super);
                              function ActionBarValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ActionBarValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ActionBarValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ActionBarValidator = ActionBarValidator;
                          var StatusBarValidator = (
                            /** @class */
                            function(_super) {
                              __extends(StatusBarValidator2, _super);
                              function StatusBarValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              StatusBarValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return StatusBarValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.StatusBarValidator = StatusBarValidator;
                        },
                        /* 3 */
                        /***/
                        (__unused_webpack_module, exports2) => {
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.MultipleFieldsValidator = void 0;
                          var MultipleFieldsValidator = (
                            /** @class */
                            function() {
                              function MultipleFieldsValidator2(fieldValidatorsPairs) {
                                this.fieldValidatorsPairs = fieldValidatorsPairs;
                              }
                              MultipleFieldsValidator2.prototype.validate = function(input, path, field) {
                                if (!this.fieldValidatorsPairs) {
                                  return null;
                                }
                                var fieldsPath = path ? path + "." + field : field;
                                for (var _i = 0, _a = this.fieldValidatorsPairs; _i < _a.length; _i++) {
                                  var fieldValidators = _a[_i];
                                  for (var _b = 0, _c = fieldValidators.validators; _b < _c.length; _b++) {
                                    var validator = _c[_b];
                                    var errors = validator.validate(input[fieldValidators.field], fieldsPath, fieldValidators.field);
                                    if (errors) {
                                      return errors;
                                    }
                                  }
                                }
                                return null;
                              };
                              return MultipleFieldsValidator2;
                            }()
                          );
                          exports2.MultipleFieldsValidator = MultipleFieldsValidator;
                        },
                        /* 4 */
                        /***/
                        function(__unused_webpack_module, exports2) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.RangeValidator = exports2.NumberArrayValidator = exports2.BooleanArrayValidator = exports2.StringArrayValidator = exports2.EnumValidator = exports2.SchemaValidator = exports2.ValueValidator = exports2.NumberValidator = exports2.BooleanValidator = exports2.StringValidator = exports2.TypeValidator = exports2.ArrayValidator = exports2.ObjectValidator = void 0;
                          var ObjectValidator = (
                            /** @class */
                            function() {
                              function ObjectValidator2() {
                              }
                              ObjectValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                if (typeof input !== "object" || Array.isArray(input)) {
                                  return [{
                                    message: field !== void 0 ? field + " must be an object" : "input must be an object",
                                    path,
                                    keyword: "type"
                                  }];
                                }
                                return null;
                              };
                              return ObjectValidator2;
                            }()
                          );
                          exports2.ObjectValidator = ObjectValidator;
                          var ArrayValidator = (
                            /** @class */
                            function() {
                              function ArrayValidator2(itemValidators) {
                                this.itemValidators = itemValidators;
                              }
                              ArrayValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                if (!Array.isArray(input)) {
                                  return [{
                                    message: field + " property is invalid",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "type"
                                  }];
                                }
                                for (var i = 0; i < input.length; i++) {
                                  var fieldsPath = (path ? path + "." : "") + field + "." + i.toString();
                                  for (var _i = 0, _a = this.itemValidators; _i < _a.length; _i++) {
                                    var validator = _a[_i];
                                    var errors = validator.validate(input[i], fieldsPath, field);
                                    if (errors) {
                                      return [{
                                        message: field + " property is invalid",
                                        path: (path ? path + "." : "") + field,
                                        keyword: "type"
                                      }];
                                    }
                                  }
                                }
                                return null;
                              };
                              return ArrayValidator2;
                            }()
                          );
                          exports2.ArrayValidator = ArrayValidator;
                          var TypeValidator = (
                            /** @class */
                            function() {
                              function TypeValidator2(expectedType) {
                                this.expectedType = expectedType;
                              }
                              TypeValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                if (!(typeof input === this.expectedType)) {
                                  return [{
                                    message: field + " must be a " + this.expectedType,
                                    path: (path ? path + "." : "") + field,
                                    keyword: "type"
                                  }];
                                }
                                return null;
                              };
                              return TypeValidator2;
                            }()
                          );
                          exports2.TypeValidator = TypeValidator;
                          var StringValidator = (
                            /** @class */
                            function(_super) {
                              __extends(StringValidator2, _super);
                              function StringValidator2() {
                                return _super.call(this, "string") || this;
                              }
                              return StringValidator2;
                            }(TypeValidator)
                          );
                          exports2.StringValidator = StringValidator;
                          var BooleanValidator = (
                            /** @class */
                            function(_super) {
                              __extends(BooleanValidator2, _super);
                              function BooleanValidator2() {
                                return _super.call(this, "boolean") || this;
                              }
                              return BooleanValidator2;
                            }(TypeValidator)
                          );
                          exports2.BooleanValidator = BooleanValidator;
                          var NumberValidator = (
                            /** @class */
                            function(_super) {
                              __extends(NumberValidator2, _super);
                              function NumberValidator2() {
                                return _super.call(this, "number") || this;
                              }
                              return NumberValidator2;
                            }(TypeValidator)
                          );
                          exports2.NumberValidator = NumberValidator;
                          var ValueValidator = (
                            /** @class */
                            function() {
                              function ValueValidator2(possibleValues) {
                                this.possibleValues = possibleValues;
                              }
                              ValueValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                if (this.possibleValues.indexOf(input) < 0) {
                                  return [{
                                    message: field + " property is invalid",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "invalid"
                                  }];
                                }
                                return null;
                              };
                              return ValueValidator2;
                            }()
                          );
                          exports2.ValueValidator = ValueValidator;
                          var SchemaValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SchemaValidator2, _super);
                              function SchemaValidator2(schemaValue) {
                                var _this = _super.call(this, [schemaValue]) || this;
                                _this.schemaValue = schemaValue;
                                return _this;
                              }
                              SchemaValidator2.prototype.validate = function(input, path, field) {
                                return _super.prototype.validate.call(this, input, path, field);
                              };
                              return SchemaValidator2;
                            }(ValueValidator)
                          );
                          exports2.SchemaValidator = SchemaValidator;
                          var EnumValidator = (
                            /** @class */
                            function(_super) {
                              __extends(EnumValidator2, _super);
                              function EnumValidator2(possibleValues) {
                                var _this = _super.call(this) || this;
                                _this.possibleValues = possibleValues;
                                return _this;
                              }
                              EnumValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var valueValidator = new ValueValidator(this.possibleValues);
                                return valueValidator.validate(input, path, field);
                              };
                              return EnumValidator2;
                            }(NumberValidator)
                          );
                          exports2.EnumValidator = EnumValidator;
                          var StringArrayValidator = (
                            /** @class */
                            function(_super) {
                              __extends(StringArrayValidator2, _super);
                              function StringArrayValidator2() {
                                return _super.call(this, [new StringValidator()]) || this;
                              }
                              StringArrayValidator2.prototype.validate = function(input, path, field) {
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return [{
                                    message: field + " must be an array of strings",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "type"
                                  }];
                                }
                                return null;
                              };
                              return StringArrayValidator2;
                            }(ArrayValidator)
                          );
                          exports2.StringArrayValidator = StringArrayValidator;
                          var BooleanArrayValidator = (
                            /** @class */
                            function(_super) {
                              __extends(BooleanArrayValidator2, _super);
                              function BooleanArrayValidator2() {
                                return _super.call(this, [new BooleanValidator()]) || this;
                              }
                              BooleanArrayValidator2.prototype.validate = function(input, path, field) {
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return [{
                                    message: field + " must be an array of booleans",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "type"
                                  }];
                                }
                                return null;
                              };
                              return BooleanArrayValidator2;
                            }(ArrayValidator)
                          );
                          exports2.BooleanArrayValidator = BooleanArrayValidator;
                          var NumberArrayValidator = (
                            /** @class */
                            function(_super) {
                              __extends(NumberArrayValidator2, _super);
                              function NumberArrayValidator2() {
                                return _super.call(this, [new NumberValidator()]) || this;
                              }
                              NumberArrayValidator2.prototype.validate = function(input, path, field) {
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return [{
                                    message: field + " must be an array of numbers",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "type"
                                  }];
                                }
                                return null;
                              };
                              return NumberArrayValidator2;
                            }(ArrayValidator)
                          );
                          exports2.NumberArrayValidator = NumberArrayValidator;
                          var RangeValidator = (
                            /** @class */
                            function(_super) {
                              __extends(RangeValidator2, _super);
                              function RangeValidator2(minValue, maxValue) {
                                var _this = _super.call(this) || this;
                                _this.minValue = minValue;
                                _this.maxValue = maxValue;
                                return _this;
                              }
                              RangeValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                if (input > this.maxValue || input < this.minValue) {
                                  return [{
                                    message: field + " must be a number between " + this.minValue.toString() + " and " + this.maxValue.toString(),
                                    path: (path ? path + "." : "") + field,
                                    keyword: "range"
                                  }];
                                }
                                return null;
                              };
                              return RangeValidator2;
                            }(NumberValidator)
                          );
                          exports2.RangeValidator = RangeValidator;
                        },
                        /* 5 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_80906__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.CaptureBookmarkRequestValidator = exports2.CaptureBookmarkOptionsValidator = exports2.ApplyBookmarkStateRequestValidator = exports2.ApplyBookmarkByNameRequestValidator = exports2.AddBookmarkRequestValidator = exports2.PlayBookmarkRequestValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_80906__(3);
                          var typeValidator_1 = __nested_webpack_require_80906__(4);
                          var validator_1 = __nested_webpack_require_80906__(1);
                          var PlayBookmarkRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PlayBookmarkRequestValidator2, _super);
                              function PlayBookmarkRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PlayBookmarkRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "playMode",
                                    validators: [validator_1.Validators.fieldRequiredValidator, new typeValidator_1.EnumValidator([0, 1])]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PlayBookmarkRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PlayBookmarkRequestValidator = PlayBookmarkRequestValidator;
                          var AddBookmarkRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(AddBookmarkRequestValidator2, _super);
                              function AddBookmarkRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              AddBookmarkRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "state",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "displayName",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "apply",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return AddBookmarkRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.AddBookmarkRequestValidator = AddBookmarkRequestValidator;
                          var ApplyBookmarkByNameRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ApplyBookmarkByNameRequestValidator2, _super);
                              function ApplyBookmarkByNameRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ApplyBookmarkByNameRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ApplyBookmarkByNameRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ApplyBookmarkByNameRequestValidator = ApplyBookmarkByNameRequestValidator;
                          var ApplyBookmarkStateRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ApplyBookmarkStateRequestValidator2, _super);
                              function ApplyBookmarkStateRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ApplyBookmarkStateRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "state",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ApplyBookmarkStateRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ApplyBookmarkStateRequestValidator = ApplyBookmarkStateRequestValidator;
                          var CaptureBookmarkOptionsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CaptureBookmarkOptionsValidator2, _super);
                              function CaptureBookmarkOptionsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CaptureBookmarkOptionsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "personalizeVisuals",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "allPages",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CaptureBookmarkOptionsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.CaptureBookmarkOptionsValidator = CaptureBookmarkOptionsValidator;
                          var CaptureBookmarkRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CaptureBookmarkRequestValidator2, _super);
                              function CaptureBookmarkRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CaptureBookmarkRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "options",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.captureBookmarkOptionsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CaptureBookmarkRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.CaptureBookmarkRequestValidator = CaptureBookmarkRequestValidator;
                        },
                        /* 6 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_89382__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.PaginatedReportCommandsValidator = exports2.SingleCommandSettingsValidator = exports2.CommandsSettingsValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_89382__(3);
                          var typeValidator_1 = __nested_webpack_require_89382__(4);
                          var validator_1 = __nested_webpack_require_89382__(1);
                          var CommandsSettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CommandsSettingsValidator2, _super);
                              function CommandsSettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CommandsSettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "copy",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "drill",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "drillthrough",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "expandCollapse",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "exportData",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "includeExclude",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "removeVisual",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "search",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "seeData",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "sort",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "spotlight",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "insightsAnalysis",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "addComment",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "groupVisualContainers",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "summarize",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  },
                                  {
                                    field: "clearSelection",
                                    validators: [validator_1.Validators.singleCommandSettingsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CommandsSettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.CommandsSettingsValidator = CommandsSettingsValidator;
                          var SingleCommandSettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SingleCommandSettingsValidator2, _super);
                              function SingleCommandSettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SingleCommandSettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "displayOption",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.commandDisplayOptionValidator]
                                  },
                                  {
                                    field: "selector",
                                    validators: [validator_1.Validators.visualCommandSelectorValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SingleCommandSettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SingleCommandSettingsValidator = SingleCommandSettingsValidator;
                          var PaginatedReportCommandsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PaginatedReportCommandsValidator2, _super);
                              function PaginatedReportCommandsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PaginatedReportCommandsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "parameterPanel",
                                    validators: [validator_1.Validators.parametersPanelValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PaginatedReportCommandsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PaginatedReportCommandsValidator = PaginatedReportCommandsValidator;
                        },
                        /* 7 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_96415__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.CustomThemeValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_96415__(3);
                          var typeValidator_1 = __nested_webpack_require_96415__(4);
                          var CustomThemeValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CustomThemeValidator2, _super);
                              function CustomThemeValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CustomThemeValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "themeJson",
                                    validators: [new typeValidator_1.ObjectValidator()]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CustomThemeValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.CustomThemeValidator = CustomThemeValidator;
                        },
                        /* 8 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_98569__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.DashboardLoadValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_98569__(3);
                          var typeValidator_1 = __nested_webpack_require_98569__(4);
                          var validator_1 = __nested_webpack_require_98569__(1);
                          var DashboardLoadValidator = (
                            /** @class */
                            function(_super) {
                              __extends(DashboardLoadValidator2, _super);
                              function DashboardLoadValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              DashboardLoadValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "accessToken",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "id",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "groupId",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "pageView",
                                    validators: [validator_1.Validators.pageViewFieldValidator]
                                  },
                                  {
                                    field: "tokenType",
                                    validators: [validator_1.Validators.tokenTypeValidator]
                                  },
                                  {
                                    field: "embedUrl",
                                    validators: [validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return DashboardLoadValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.DashboardLoadValidator = DashboardLoadValidator;
                        },
                        /* 9 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_101568__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.DatasetBindingValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_101568__(3);
                          var typeValidator_1 = __nested_webpack_require_101568__(4);
                          var validator_1 = __nested_webpack_require_101568__(1);
                          var DatasetBindingValidator = (
                            /** @class */
                            function(_super) {
                              __extends(DatasetBindingValidator2, _super);
                              function DatasetBindingValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              DatasetBindingValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                if (!input["datasetId"] && !input["paginatedReportBindings"]) {
                                  return [{
                                    message: "datasetBinding cannot be empty",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "invalid"
                                  }];
                                }
                                var fields = [
                                  {
                                    field: "datasetId",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "paginatedReportBindings",
                                    validators: [validator_1.Validators.paginatedReportDatasetBindingArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return DatasetBindingValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.DatasetBindingValidator = DatasetBindingValidator;
                        },
                        /* 10 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_104264__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.ExportDataRequestValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_104264__(3);
                          var typeValidator_1 = __nested_webpack_require_104264__(4);
                          var ExportDataRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ExportDataRequestValidator2, _super);
                              function ExportDataRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ExportDataRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "rows",
                                    validators: [new typeValidator_1.NumberValidator()]
                                  },
                                  {
                                    field: "exportDataType",
                                    validators: [new typeValidator_1.EnumValidator([0, 1])]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ExportDataRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ExportDataRequestValidator = ExportDataRequestValidator;
                        },
                        /* 11 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_106608__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.ExtensionsValidator = exports2.MenuGroupExtensionValidator = exports2.ExtensionValidator = exports2.CommandExtensionValidator = exports2.ExtensionItemValidator = exports2.ExtensionPointsValidator = exports2.GroupedMenuExtensionValidator = exports2.FlatMenuExtensionValidator = exports2.MenuExtensionBaseValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_106608__(3);
                          var typeValidator_1 = __nested_webpack_require_106608__(4);
                          var validator_1 = __nested_webpack_require_106608__(1);
                          var MenuExtensionBaseValidator = (
                            /** @class */
                            function(_super) {
                              __extends(MenuExtensionBaseValidator2, _super);
                              function MenuExtensionBaseValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              MenuExtensionBaseValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "title",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "icon",
                                    validators: [validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return MenuExtensionBaseValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.MenuExtensionBaseValidator = MenuExtensionBaseValidator;
                          var FlatMenuExtensionValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FlatMenuExtensionValidator2, _super);
                              function FlatMenuExtensionValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FlatMenuExtensionValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "menuLocation",
                                    validators: [validator_1.Validators.menuLocationValidator]
                                  },
                                  {
                                    field: "groupName",
                                    validators: [validator_1.Validators.fieldForbiddenValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FlatMenuExtensionValidator2;
                            }(MenuExtensionBaseValidator)
                          );
                          exports2.FlatMenuExtensionValidator = FlatMenuExtensionValidator;
                          var GroupedMenuExtensionValidator = (
                            /** @class */
                            function(_super) {
                              __extends(GroupedMenuExtensionValidator2, _super);
                              function GroupedMenuExtensionValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              GroupedMenuExtensionValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "groupName",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "menuLocation",
                                    validators: [validator_1.Validators.fieldForbiddenValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return GroupedMenuExtensionValidator2;
                            }(MenuExtensionBaseValidator)
                          );
                          exports2.GroupedMenuExtensionValidator = GroupedMenuExtensionValidator;
                          var ExtensionPointsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ExtensionPointsValidator2, _super);
                              function ExtensionPointsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ExtensionPointsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visualContextMenu",
                                    validators: [validator_1.Validators.menuExtensionValidator]
                                  },
                                  {
                                    field: "visualOptionsMenu",
                                    validators: [validator_1.Validators.menuExtensionValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ExtensionPointsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ExtensionPointsValidator = ExtensionPointsValidator;
                          var ExtensionItemValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ExtensionItemValidator2, _super);
                              function ExtensionItemValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ExtensionItemValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "extend",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.extensionPointsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ExtensionItemValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ExtensionItemValidator = ExtensionItemValidator;
                          var CommandExtensionValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CommandExtensionValidator2, _super);
                              function CommandExtensionValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CommandExtensionValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "title",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "icon",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "selector",
                                    validators: [validator_1.Validators.commandExtensionSelectorValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CommandExtensionValidator2;
                            }(ExtensionItemValidator)
                          );
                          exports2.CommandExtensionValidator = CommandExtensionValidator;
                          var ExtensionValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ExtensionValidator2, _super);
                              function ExtensionValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ExtensionValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "command",
                                    validators: [validator_1.Validators.commandExtensionValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ExtensionValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ExtensionValidator = ExtensionValidator;
                          var MenuGroupExtensionValidator = (
                            /** @class */
                            function(_super) {
                              __extends(MenuGroupExtensionValidator2, _super);
                              function MenuGroupExtensionValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              MenuGroupExtensionValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "title",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "menuLocation",
                                    validators: [validator_1.Validators.menuLocationValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return MenuGroupExtensionValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.MenuGroupExtensionValidator = MenuGroupExtensionValidator;
                          var ExtensionsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ExtensionsValidator2, _super);
                              function ExtensionsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ExtensionsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "commands",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.commandExtensionArrayValidator]
                                  },
                                  {
                                    field: "groups",
                                    validators: [validator_1.Validators.menuGroupExtensionArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ExtensionsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ExtensionsValidator = ExtensionsValidator;
                        },
                        /* 12 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_119099__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.OnLoadFiltersValidator = exports2.OnLoadFiltersBaseRemoveOperationValidator = exports2.OnLoadFiltersBaseValidator = exports2.ConditionItemValidator = exports2.RemoveFiltersRequestValidator = exports2.UpdateFiltersRequestValidator = exports2.FilterValidator = exports2.IncludeExcludePointValueValidator = exports2.HierarchyFilterNodeValidator = exports2.HierarchyFilterValidator = exports2.IncludeExcludeFilterValidator = exports2.NotSupportedFilterValidator = exports2.TopNFilterValidator = exports2.RelativeTimeFilterValidator = exports2.RelativeDateFilterValidator = exports2.RelativeDateTimeFilterValidator = exports2.AdvancedFilterValidator = exports2.BasicFilterValidator = exports2.FilterValidatorBase = exports2.FilterDisplaySettingsValidator = exports2.FilterMeasureTargetValidator = exports2.FilterKeyHierarchyTargetValidator = exports2.FilterHierarchyTargetValidator = exports2.FilterKeyColumnsTargetValidator = exports2.FilterColumnTargetValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_119099__(3);
                          var typeValidator_1 = __nested_webpack_require_119099__(4);
                          var validator_1 = __nested_webpack_require_119099__(1);
                          var FilterColumnTargetValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FilterColumnTargetValidator2, _super);
                              function FilterColumnTargetValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterColumnTargetValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "table",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "column",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FilterColumnTargetValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FilterColumnTargetValidator = FilterColumnTargetValidator;
                          var FilterKeyColumnsTargetValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FilterKeyColumnsTargetValidator2, _super);
                              function FilterKeyColumnsTargetValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterKeyColumnsTargetValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "keys",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FilterKeyColumnsTargetValidator2;
                            }(FilterColumnTargetValidator)
                          );
                          exports2.FilterKeyColumnsTargetValidator = FilterKeyColumnsTargetValidator;
                          var FilterHierarchyTargetValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FilterHierarchyTargetValidator2, _super);
                              function FilterHierarchyTargetValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterHierarchyTargetValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "table",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "hierarchy",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "hierarchyLevel",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FilterHierarchyTargetValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FilterHierarchyTargetValidator = FilterHierarchyTargetValidator;
                          var FilterKeyHierarchyTargetValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FilterKeyHierarchyTargetValidator2, _super);
                              function FilterKeyHierarchyTargetValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterKeyHierarchyTargetValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "keys",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FilterKeyHierarchyTargetValidator2;
                            }(FilterHierarchyTargetValidator)
                          );
                          exports2.FilterKeyHierarchyTargetValidator = FilterKeyHierarchyTargetValidator;
                          var FilterMeasureTargetValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FilterMeasureTargetValidator2, _super);
                              function FilterMeasureTargetValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterMeasureTargetValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "table",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "measure",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FilterMeasureTargetValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FilterMeasureTargetValidator = FilterMeasureTargetValidator;
                          var FilterDisplaySettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FilterDisplaySettingsValidator2, _super);
                              function FilterDisplaySettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterDisplaySettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "isLockedInViewMode",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "isHiddenInViewMode",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "displayName",
                                    validators: [validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FilterDisplaySettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FilterDisplaySettingsValidator = FilterDisplaySettingsValidator;
                          var FilterValidatorBase = (
                            /** @class */
                            function(_super) {
                              __extends(FilterValidatorBase2, _super);
                              function FilterValidatorBase2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterValidatorBase2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "target",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
                                  },
                                  {
                                    field: "$schema",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.filterTypeValidator]
                                  },
                                  {
                                    field: "displaySettings",
                                    validators: [validator_1.Validators.filterDisplaySettingsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FilterValidatorBase2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FilterValidatorBase = FilterValidatorBase;
                          var BasicFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(BasicFilterValidator2, _super);
                              function BasicFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              BasicFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "operator",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "values",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyArrayValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.basicFilterTypeValidator]
                                  },
                                  {
                                    field: "requireSingleSelection",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return BasicFilterValidator2;
                            }(FilterValidatorBase)
                          );
                          exports2.BasicFilterValidator = BasicFilterValidator;
                          var AdvancedFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(AdvancedFilterValidator2, _super);
                              function AdvancedFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              AdvancedFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "logicalOperator",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "conditions",
                                    validators: [validator_1.Validators.filterConditionsValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.advancedFilterTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return AdvancedFilterValidator2;
                            }(FilterValidatorBase)
                          );
                          exports2.AdvancedFilterValidator = AdvancedFilterValidator;
                          var RelativeDateTimeFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(RelativeDateTimeFilterValidator2, _super);
                              function RelativeDateTimeFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              RelativeDateTimeFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "operator",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterOperatorValidator]
                                  },
                                  {
                                    field: "timeUnitsCount",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "timeUnitType",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateTimeFilterUnitTypeValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.relativeDateTimeFilterTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return RelativeDateTimeFilterValidator2;
                            }(FilterValidatorBase)
                          );
                          exports2.RelativeDateTimeFilterValidator = RelativeDateTimeFilterValidator;
                          var RelativeDateFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(RelativeDateFilterValidator2, _super);
                              function RelativeDateFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              RelativeDateFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "includeToday",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "timeUnitType",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterTimeUnitTypeValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.relativeDateFilterTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return RelativeDateFilterValidator2;
                            }(RelativeDateTimeFilterValidator)
                          );
                          exports2.RelativeDateFilterValidator = RelativeDateFilterValidator;
                          var RelativeTimeFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(RelativeTimeFilterValidator2, _super);
                              function RelativeTimeFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              RelativeTimeFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "timeUnitType",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeTimeFilterTimeUnitTypeValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.relativeTimeFilterTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return RelativeTimeFilterValidator2;
                            }(RelativeDateTimeFilterValidator)
                          );
                          exports2.RelativeTimeFilterValidator = RelativeTimeFilterValidator;
                          var TopNFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(TopNFilterValidator2, _super);
                              function TopNFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              TopNFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "operator",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "itemCount",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.topNFilterTypeValidator]
                                  },
                                  {
                                    field: "orderBy",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return TopNFilterValidator2;
                            }(FilterValidatorBase)
                          );
                          exports2.TopNFilterValidator = TopNFilterValidator;
                          var NotSupportedFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(NotSupportedFilterValidator2, _super);
                              function NotSupportedFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              NotSupportedFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "message",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "notSupportedTypeName",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.notSupportedFilterTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return NotSupportedFilterValidator2;
                            }(FilterValidatorBase)
                          );
                          exports2.NotSupportedFilterValidator = NotSupportedFilterValidator;
                          var IncludeExcludeFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(IncludeExcludeFilterValidator2, _super);
                              function IncludeExcludeFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              IncludeExcludeFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "isExclude",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "values",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.includeExcludeFilterValuesValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.includeExludeFilterTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return IncludeExcludeFilterValidator2;
                            }(FilterValidatorBase)
                          );
                          exports2.IncludeExcludeFilterValidator = IncludeExcludeFilterValidator;
                          var HierarchyFilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(HierarchyFilterValidator2, _super);
                              function HierarchyFilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              HierarchyFilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "hierarchyData",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.hierarchyFilterValuesValidator]
                                  },
                                  {
                                    field: "filterType",
                                    validators: [validator_1.Validators.hierarchyFilterTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return HierarchyFilterValidator2;
                            }(FilterValidatorBase)
                          );
                          exports2.HierarchyFilterValidator = HierarchyFilterValidator;
                          var HierarchyFilterNodeValidator = (
                            /** @class */
                            function(_super) {
                              __extends(HierarchyFilterNodeValidator2, _super);
                              function HierarchyFilterNodeValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              HierarchyFilterNodeValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "value",
                                    validators: [validator_1.Validators.anyValueValidator]
                                  },
                                  {
                                    field: "keyValues",
                                    validators: [validator_1.Validators.anyArrayValidator]
                                  },
                                  {
                                    field: "children",
                                    validators: [validator_1.Validators.hierarchyFilterValuesValidator]
                                  },
                                  {
                                    field: "operator",
                                    validators: [validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return HierarchyFilterNodeValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.HierarchyFilterNodeValidator = HierarchyFilterNodeValidator;
                          var IncludeExcludePointValueValidator = (
                            /** @class */
                            function(_super) {
                              __extends(IncludeExcludePointValueValidator2, _super);
                              function IncludeExcludePointValueValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              IncludeExcludePointValueValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "value",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyValueValidator]
                                  },
                                  {
                                    field: "keyValues",
                                    validators: [validator_1.Validators.anyArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return IncludeExcludePointValueValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.IncludeExcludePointValueValidator = IncludeExcludePointValueValidator;
                          var FilterValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FilterValidator2, _super);
                              function FilterValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FilterValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                return validator_1.Validators.anyFilterValidator.validate(input, path, field);
                              };
                              return FilterValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FilterValidator = FilterValidator;
                          var UpdateFiltersRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(UpdateFiltersRequestValidator2, _super);
                              function UpdateFiltersRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              UpdateFiltersRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "filtersOperation",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsUpdateValidator]
                                  },
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return UpdateFiltersRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.UpdateFiltersRequestValidator = UpdateFiltersRequestValidator;
                          var RemoveFiltersRequestValidator = (
                            /** @class */
                            function(_super) {
                              __extends(RemoveFiltersRequestValidator2, _super);
                              function RemoveFiltersRequestValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              RemoveFiltersRequestValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "filtersOperation",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsRemoveAllValidator]
                                  },
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.fieldForbiddenValidator, validator_1.Validators.filtersArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return RemoveFiltersRequestValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.RemoveFiltersRequestValidator = RemoveFiltersRequestValidator;
                          var ConditionItemValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ConditionItemValidator2, _super);
                              function ConditionItemValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ConditionItemValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "value",
                                    validators: [validator_1.Validators.anyValueValidator]
                                  },
                                  {
                                    field: "operator",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ConditionItemValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ConditionItemValidator = ConditionItemValidator;
                          var OnLoadFiltersBaseValidator = (
                            /** @class */
                            function(_super) {
                              __extends(OnLoadFiltersBaseValidator2, _super);
                              function OnLoadFiltersBaseValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              OnLoadFiltersBaseValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "operation",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsUpdateValidator]
                                  },
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return OnLoadFiltersBaseValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.OnLoadFiltersBaseValidator = OnLoadFiltersBaseValidator;
                          var OnLoadFiltersBaseRemoveOperationValidator = (
                            /** @class */
                            function(_super) {
                              __extends(OnLoadFiltersBaseRemoveOperationValidator2, _super);
                              function OnLoadFiltersBaseRemoveOperationValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              OnLoadFiltersBaseRemoveOperationValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "operation",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsRemoveAllValidator]
                                  },
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.fieldForbiddenValidator, validator_1.Validators.filtersArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return OnLoadFiltersBaseRemoveOperationValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.OnLoadFiltersBaseRemoveOperationValidator = OnLoadFiltersBaseRemoveOperationValidator;
                          var OnLoadFiltersValidator = (
                            /** @class */
                            function(_super) {
                              __extends(OnLoadFiltersValidator2, _super);
                              function OnLoadFiltersValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              OnLoadFiltersValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "allPages",
                                    validators: [validator_1.Validators.onLoadFiltersBaseValidator]
                                  },
                                  {
                                    field: "currentPage",
                                    validators: [validator_1.Validators.onLoadFiltersBaseValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return OnLoadFiltersValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.OnLoadFiltersValidator = OnLoadFiltersValidator;
                        },
                        /* 13 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_154405__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.PageLayoutValidator = exports2.DisplayStateValidator = exports2.VisualLayoutValidator = exports2.CustomLayoutValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_154405__(3);
                          var typeValidator_1 = __nested_webpack_require_154405__(4);
                          var validator_1 = __nested_webpack_require_154405__(1);
                          var CustomLayoutValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CustomLayoutValidator2, _super);
                              function CustomLayoutValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CustomLayoutValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "pageSize",
                                    validators: [validator_1.Validators.pageSizeValidator]
                                  },
                                  {
                                    field: "displayOption",
                                    validators: [validator_1.Validators.customLayoutDisplayOptionValidator]
                                  },
                                  {
                                    field: "pagesLayout",
                                    validators: [validator_1.Validators.pagesLayoutValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CustomLayoutValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.CustomLayoutValidator = CustomLayoutValidator;
                          var VisualLayoutValidator = (
                            /** @class */
                            function(_super) {
                              __extends(VisualLayoutValidator2, _super);
                              function VisualLayoutValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              VisualLayoutValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "x",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "y",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "z",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "width",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "height",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "displayState",
                                    validators: [validator_1.Validators.displayStateValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return VisualLayoutValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.VisualLayoutValidator = VisualLayoutValidator;
                          var DisplayStateValidator = (
                            /** @class */
                            function(_super) {
                              __extends(DisplayStateValidator2, _super);
                              function DisplayStateValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              DisplayStateValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "mode",
                                    validators: [validator_1.Validators.displayStateModeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return DisplayStateValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.DisplayStateValidator = DisplayStateValidator;
                          var PageLayoutValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PageLayoutValidator2, _super);
                              function PageLayoutValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PageLayoutValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visualsLayout",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageLayoutValidator]
                                  },
                                  {
                                    field: "defaultLayout",
                                    validators: [validator_1.Validators.visualLayoutValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PageLayoutValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PageLayoutValidator = PageLayoutValidator;
                        },
                        /* 14 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_160884__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.PageViewFieldValidator = exports2.PageValidator = exports2.CustomPageSizeValidator = exports2.PageSizeValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_160884__(3);
                          var typeValidator_1 = __nested_webpack_require_160884__(4);
                          var validator_1 = __nested_webpack_require_160884__(1);
                          var PageSizeValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PageSizeValidator2, _super);
                              function PageSizeValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PageSizeValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "type",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageSizeTypeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PageSizeValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PageSizeValidator = PageSizeValidator;
                          var CustomPageSizeValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CustomPageSizeValidator2, _super);
                              function CustomPageSizeValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CustomPageSizeValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "width",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "height",
                                    validators: [validator_1.Validators.numberValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CustomPageSizeValidator2;
                            }(PageSizeValidator)
                          );
                          exports2.CustomPageSizeValidator = CustomPageSizeValidator;
                          var PageValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PageValidator2, _super);
                              function PageValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PageValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PageValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PageValidator = PageValidator;
                          var PageViewFieldValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PageViewFieldValidator2, _super);
                              function PageViewFieldValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PageViewFieldValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var possibleValues = ["actualSize", "fitToWidth", "oneColumn"];
                                if (possibleValues.indexOf(input) < 0) {
                                  return [{
                                    message: 'pageView must be a string with one of the following values: "actualSize", "fitToWidth", "oneColumn"'
                                  }];
                                }
                                return null;
                              };
                              return PageViewFieldValidator2;
                            }(typeValidator_1.StringValidator)
                          );
                          exports2.PageViewFieldValidator = PageViewFieldValidator;
                        },
                        /* 15 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_166324__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.VisualizationsPaneValidator = exports2.SyncSlicersPaneValidator = exports2.SelectionPaneValidator = exports2.PageNavigationPaneValidator = exports2.FiltersPaneValidator = exports2.FieldsPaneValidator = exports2.BookmarksPaneValidator = exports2.QnaPanesValidator = exports2.ReportPanesValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_166324__(3);
                          var typeValidator_1 = __nested_webpack_require_166324__(4);
                          var validator_1 = __nested_webpack_require_166324__(1);
                          var ReportPanesValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ReportPanesValidator2, _super);
                              function ReportPanesValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ReportPanesValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "bookmarks",
                                    validators: [validator_1.Validators.bookmarksPaneValidator]
                                  },
                                  {
                                    field: "fields",
                                    validators: [validator_1.Validators.fieldsPaneValidator]
                                  },
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.filtersPaneValidator]
                                  },
                                  {
                                    field: "pageNavigation",
                                    validators: [validator_1.Validators.pageNavigationPaneValidator]
                                  },
                                  {
                                    field: "selection",
                                    validators: [validator_1.Validators.selectionPaneValidator]
                                  },
                                  {
                                    field: "syncSlicers",
                                    validators: [validator_1.Validators.syncSlicersPaneValidator]
                                  },
                                  {
                                    field: "visualizations",
                                    validators: [validator_1.Validators.visualizationsPaneValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ReportPanesValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ReportPanesValidator = ReportPanesValidator;
                          var QnaPanesValidator = (
                            /** @class */
                            function(_super) {
                              __extends(QnaPanesValidator2, _super);
                              function QnaPanesValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              QnaPanesValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.filtersPaneValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return QnaPanesValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.QnaPanesValidator = QnaPanesValidator;
                          var BookmarksPaneValidator = (
                            /** @class */
                            function(_super) {
                              __extends(BookmarksPaneValidator2, _super);
                              function BookmarksPaneValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              BookmarksPaneValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return BookmarksPaneValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.BookmarksPaneValidator = BookmarksPaneValidator;
                          var FieldsPaneValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FieldsPaneValidator2, _super);
                              function FieldsPaneValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FieldsPaneValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "expanded",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FieldsPaneValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FieldsPaneValidator = FieldsPaneValidator;
                          var FiltersPaneValidator = (
                            /** @class */
                            function(_super) {
                              __extends(FiltersPaneValidator2, _super);
                              function FiltersPaneValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              FiltersPaneValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "expanded",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return FiltersPaneValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.FiltersPaneValidator = FiltersPaneValidator;
                          var PageNavigationPaneValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PageNavigationPaneValidator2, _super);
                              function PageNavigationPaneValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PageNavigationPaneValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "position",
                                    validators: [validator_1.Validators.pageNavigationPositionValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PageNavigationPaneValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PageNavigationPaneValidator = PageNavigationPaneValidator;
                          var SelectionPaneValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SelectionPaneValidator2, _super);
                              function SelectionPaneValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SelectionPaneValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SelectionPaneValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SelectionPaneValidator = SelectionPaneValidator;
                          var SyncSlicersPaneValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SyncSlicersPaneValidator2, _super);
                              function SyncSlicersPaneValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SyncSlicersPaneValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SyncSlicersPaneValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SyncSlicersPaneValidator = SyncSlicersPaneValidator;
                          var VisualizationsPaneValidator = (
                            /** @class */
                            function(_super) {
                              __extends(VisualizationsPaneValidator2, _super);
                              function VisualizationsPaneValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              VisualizationsPaneValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "expanded",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return VisualizationsPaneValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.VisualizationsPaneValidator = VisualizationsPaneValidator;
                        },
                        /* 16 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_178070__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.QnaInterpretInputDataValidator = exports2.QnaSettingsValidator = exports2.LoadQnaValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_178070__(3);
                          var typeValidator_1 = __nested_webpack_require_178070__(4);
                          var validator_1 = __nested_webpack_require_178070__(1);
                          var LoadQnaValidator = (
                            /** @class */
                            function(_super) {
                              __extends(LoadQnaValidator2, _super);
                              function LoadQnaValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              LoadQnaValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "accessToken",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "datasetIds",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
                                  },
                                  {
                                    field: "question",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "viewMode",
                                    validators: [validator_1.Validators.viewModeValidator]
                                  },
                                  {
                                    field: "settings",
                                    validators: [validator_1.Validators.qnaSettingValidator]
                                  },
                                  {
                                    field: "tokenType",
                                    validators: [validator_1.Validators.tokenTypeValidator]
                                  },
                                  {
                                    field: "groupId",
                                    validators: [validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return LoadQnaValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.LoadQnaValidator = LoadQnaValidator;
                          var QnaSettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(QnaSettingsValidator2, _super);
                              function QnaSettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              QnaSettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "filterPaneEnabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "hideErrors",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "panes",
                                    validators: [validator_1.Validators.qnaPanesValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return QnaSettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.QnaSettingsValidator = QnaSettingsValidator;
                          var QnaInterpretInputDataValidator = (
                            /** @class */
                            function(_super) {
                              __extends(QnaInterpretInputDataValidator2, _super);
                              function QnaInterpretInputDataValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              QnaInterpretInputDataValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "datasetIds",
                                    validators: [validator_1.Validators.stringArrayValidator]
                                  },
                                  {
                                    field: "question",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return QnaInterpretInputDataValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.QnaInterpretInputDataValidator = QnaInterpretInputDataValidator;
                        },
                        /* 17 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_183781__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.ReportCreateValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_183781__(3);
                          var typeValidator_1 = __nested_webpack_require_183781__(4);
                          var validator_1 = __nested_webpack_require_183781__(1);
                          var ReportCreateValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ReportCreateValidator2, _super);
                              function ReportCreateValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ReportCreateValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "accessToken",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "datasetId",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "groupId",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "tokenType",
                                    validators: [validator_1.Validators.tokenTypeValidator]
                                  },
                                  {
                                    field: "theme",
                                    validators: [validator_1.Validators.customThemeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ReportCreateValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ReportCreateValidator = ReportCreateValidator;
                        },
                        /* 18 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_186639__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.ReportLoadValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_186639__(3);
                          var typeValidator_1 = __nested_webpack_require_186639__(4);
                          var validator_1 = __nested_webpack_require_186639__(1);
                          var ReportLoadValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ReportLoadValidator2, _super);
                              function ReportLoadValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ReportLoadValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "accessToken",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "id",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "groupId",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "settings",
                                    validators: [validator_1.Validators.settingsValidator]
                                  },
                                  {
                                    field: "pageName",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.reportLoadFiltersValidator]
                                  },
                                  {
                                    field: "permissions",
                                    validators: [validator_1.Validators.permissionsValidator]
                                  },
                                  {
                                    field: "viewMode",
                                    validators: [validator_1.Validators.viewModeValidator]
                                  },
                                  {
                                    field: "tokenType",
                                    validators: [validator_1.Validators.tokenTypeValidator]
                                  },
                                  {
                                    field: "bookmark",
                                    validators: [validator_1.Validators.applyBookmarkValidator]
                                  },
                                  {
                                    field: "theme",
                                    validators: [validator_1.Validators.customThemeValidator]
                                  },
                                  {
                                    field: "embedUrl",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "datasetBinding",
                                    validators: [validator_1.Validators.datasetBindingValidator]
                                  },
                                  {
                                    field: "contrastMode",
                                    validators: [validator_1.Validators.contrastModeValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ReportLoadValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ReportLoadValidator = ReportLoadValidator;
                        },
                        /* 19 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_190760__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.ReportParameterFieldsValidator = exports2.PaginatedReportLoadValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_190760__(3);
                          var typeValidator_1 = __nested_webpack_require_190760__(4);
                          var validator_1 = __nested_webpack_require_190760__(1);
                          var PaginatedReportLoadValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PaginatedReportLoadValidator2, _super);
                              function PaginatedReportLoadValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PaginatedReportLoadValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "accessToken",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "id",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "groupId",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "settings",
                                    validators: [validator_1.Validators.paginatedReportsettingsValidator]
                                  },
                                  {
                                    field: "tokenType",
                                    validators: [validator_1.Validators.tokenTypeValidator]
                                  },
                                  {
                                    field: "embedUrl",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "type",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "parameterValues",
                                    validators: [validator_1.Validators.parameterValuesArrayValidator]
                                  },
                                  {
                                    field: "datasetBindings",
                                    validators: [validator_1.Validators.paginatedReportDatasetBindingArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PaginatedReportLoadValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PaginatedReportLoadValidator = PaginatedReportLoadValidator;
                          var ReportParameterFieldsValidator = (
                            /** @class */
                            function() {
                              function ReportParameterFieldsValidator2() {
                              }
                              ReportParameterFieldsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "value",
                                    validators: [validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ReportParameterFieldsValidator2;
                            }()
                          );
                          exports2.ReportParameterFieldsValidator = ReportParameterFieldsValidator;
                        },
                        /* 20 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_195256__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.SaveAsParametersValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_195256__(3);
                          var typeValidator_1 = __nested_webpack_require_195256__(4);
                          var validator_1 = __nested_webpack_require_195256__(1);
                          var SaveAsParametersValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SaveAsParametersValidator2, _super);
                              function SaveAsParametersValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SaveAsParametersValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SaveAsParametersValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SaveAsParametersValidator = SaveAsParametersValidator;
                        },
                        /* 21 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_197537__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.SlicerTargetSelectorValidator = exports2.VisualTypeSelectorValidator = exports2.VisualSelectorValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_197537__(3);
                          var typeValidator_1 = __nested_webpack_require_197537__(4);
                          var typeValidator_2 = __nested_webpack_require_197537__(4);
                          var validator_1 = __nested_webpack_require_197537__(1);
                          var VisualSelectorValidator = (
                            /** @class */
                            function(_super) {
                              __extends(VisualSelectorValidator2, _super);
                              function VisualSelectorValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              VisualSelectorValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    // Not required for this selector only - Backward compatibility
                                    field: "$schema",
                                    validators: [validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#visualSelector")]
                                  },
                                  {
                                    field: "visualName",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return VisualSelectorValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.VisualSelectorValidator = VisualSelectorValidator;
                          var VisualTypeSelectorValidator = (
                            /** @class */
                            function(_super) {
                              __extends(VisualTypeSelectorValidator2, _super);
                              function VisualTypeSelectorValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              VisualTypeSelectorValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "$schema",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#visualTypeSelector")]
                                  },
                                  {
                                    field: "visualType",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return VisualTypeSelectorValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.VisualTypeSelectorValidator = VisualTypeSelectorValidator;
                          var SlicerTargetSelectorValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SlicerTargetSelectorValidator2, _super);
                              function SlicerTargetSelectorValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SlicerTargetSelectorValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "$schema",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#slicerTargetSelector")]
                                  },
                                  {
                                    field: "target",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerTargetValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SlicerTargetSelectorValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SlicerTargetSelectorValidator = SlicerTargetSelectorValidator;
                        },
                        /* 22 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_202995__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.PaginatedReportSettingsValidator = exports2.SettingsValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_202995__(3);
                          var typeValidator_1 = __nested_webpack_require_202995__(4);
                          var validator_1 = __nested_webpack_require_202995__(1);
                          var SettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SettingsValidator2, _super);
                              function SettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "filterPaneEnabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "navContentPaneEnabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "bookmarksPaneEnabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "useCustomSaveAsDialog",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "extensions",
                                    validators: [validator_1.Validators.extensionsValidator]
                                  },
                                  {
                                    field: "layoutType",
                                    validators: [validator_1.Validators.layoutTypeValidator]
                                  },
                                  {
                                    field: "customLayout",
                                    validators: [validator_1.Validators.customLayoutValidator]
                                  },
                                  {
                                    field: "background",
                                    validators: [validator_1.Validators.backgroundValidator]
                                  },
                                  {
                                    field: "visualSettings",
                                    validators: [validator_1.Validators.visualSettingsValidator]
                                  },
                                  {
                                    field: "hideErrors",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "commands",
                                    validators: [validator_1.Validators.commandsSettingsArrayValidator]
                                  },
                                  {
                                    field: "hyperlinkClickBehavior",
                                    validators: [validator_1.Validators.hyperlinkClickBehaviorValidator]
                                  },
                                  {
                                    field: "bars",
                                    validators: [validator_1.Validators.reportBarsValidator]
                                  },
                                  {
                                    field: "panes",
                                    validators: [validator_1.Validators.reportPanesValidator]
                                  },
                                  {
                                    field: "personalBookmarksEnabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "persistentFiltersEnabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "visualRenderedEvents",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "authoringHintsEnabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "printSettings",
                                    validators: [validator_1.Validators.printSettingsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SettingsValidator = SettingsValidator;
                          var PaginatedReportSettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PaginatedReportSettingsValidator2, _super);
                              function PaginatedReportSettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PaginatedReportSettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "commands",
                                    validators: [validator_1.Validators.paginatedReportCommandsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PaginatedReportSettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PaginatedReportSettingsValidator = PaginatedReportSettingsValidator;
                        },
                        /* 23 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_208991__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.SlicerStateValidator = exports2.SlicerValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_208991__(3);
                          var typeValidator_1 = __nested_webpack_require_208991__(4);
                          var validator_1 = __nested_webpack_require_208991__(1);
                          var SlicerValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SlicerValidator2, _super);
                              function SlicerValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SlicerValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "selector",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerSelectorValidator]
                                  },
                                  {
                                    field: "state",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerStateValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SlicerValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SlicerValidator = SlicerValidator;
                          var SlicerStateValidator = (
                            /** @class */
                            function(_super) {
                              __extends(SlicerStateValidator2, _super);
                              function SlicerStateValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              SlicerStateValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "filters",
                                    validators: [validator_1.Validators.filtersArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return SlicerStateValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.SlicerStateValidator = SlicerStateValidator;
                        },
                        /* 24 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_212421__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.TileLoadValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_212421__(3);
                          var typeValidator_1 = __nested_webpack_require_212421__(4);
                          var validator_1 = __nested_webpack_require_212421__(1);
                          var TileLoadValidator = (
                            /** @class */
                            function(_super) {
                              __extends(TileLoadValidator2, _super);
                              function TileLoadValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              TileLoadValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "accessToken",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "id",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "dashboardId",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "groupId",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "pageView",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "tokenType",
                                    validators: [validator_1.Validators.tokenTypeValidator]
                                  },
                                  {
                                    field: "width",
                                    validators: [validator_1.Validators.numberValidator]
                                  },
                                  {
                                    field: "height",
                                    validators: [validator_1.Validators.numberValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return TileLoadValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.TileLoadValidator = TileLoadValidator;
                        },
                        /* 25 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_215693__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.VisualHeaderValidator = exports2.VisualHeaderSettingsValidator = exports2.VisualSettingsValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_215693__(3);
                          var typeValidator_1 = __nested_webpack_require_215693__(4);
                          var validator_1 = __nested_webpack_require_215693__(1);
                          var VisualSettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(VisualSettingsValidator2, _super);
                              function VisualSettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              VisualSettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visualHeaders",
                                    validators: [validator_1.Validators.visualHeadersValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return VisualSettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.VisualSettingsValidator = VisualSettingsValidator;
                          var VisualHeaderSettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(VisualHeaderSettingsValidator2, _super);
                              function VisualHeaderSettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              VisualHeaderSettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "visible",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return VisualHeaderSettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.VisualHeaderSettingsValidator = VisualHeaderSettingsValidator;
                          var VisualHeaderValidator = (
                            /** @class */
                            function(_super) {
                              __extends(VisualHeaderValidator2, _super);
                              function VisualHeaderValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              VisualHeaderValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "settings",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.visualHeaderSettingsValidator]
                                  },
                                  {
                                    field: "selector",
                                    validators: [validator_1.Validators.visualHeaderSelectorValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return VisualHeaderValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.VisualHeaderValidator = VisualHeaderValidator;
                        },
                        /* 26 */
                        /***/
                        (__unused_webpack_module, exports2) => {
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.AnyOfValidator = void 0;
                          var AnyOfValidator = (
                            /** @class */
                            function() {
                              function AnyOfValidator2(validators) {
                                this.validators = validators;
                              }
                              AnyOfValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var valid = false;
                                for (var _i = 0, _a = this.validators; _i < _a.length; _i++) {
                                  var validator = _a[_i];
                                  var errors = validator.validate(input, path, field);
                                  if (!errors) {
                                    valid = true;
                                    break;
                                  }
                                }
                                if (!valid) {
                                  return [{
                                    message: field + " property is invalid",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "invalid"
                                  }];
                                }
                                return null;
                              };
                              return AnyOfValidator2;
                            }()
                          );
                          exports2.AnyOfValidator = AnyOfValidator;
                        },
                        /* 27 */
                        /***/
                        (__unused_webpack_module, exports2) => {
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.FieldForbiddenValidator = void 0;
                          var FieldForbiddenValidator = (
                            /** @class */
                            function() {
                              function FieldForbiddenValidator2() {
                              }
                              FieldForbiddenValidator2.prototype.validate = function(input, path, field) {
                                if (input !== void 0) {
                                  return [{
                                    message: field + " is forbidden",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "forbidden"
                                  }];
                                }
                                return null;
                              };
                              return FieldForbiddenValidator2;
                            }()
                          );
                          exports2.FieldForbiddenValidator = FieldForbiddenValidator;
                        },
                        /* 28 */
                        /***/
                        (__unused_webpack_module, exports2) => {
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.FieldRequiredValidator = void 0;
                          var FieldRequiredValidator = (
                            /** @class */
                            function() {
                              function FieldRequiredValidator2() {
                              }
                              FieldRequiredValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return [{
                                    message: field + " is required",
                                    path: (path ? path + "." : "") + field,
                                    keyword: "required"
                                  }];
                                }
                                return null;
                              };
                              return FieldRequiredValidator2;
                            }()
                          );
                          exports2.FieldRequiredValidator = FieldRequiredValidator;
                        },
                        /* 29 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_223102__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.MapValidator = void 0;
                          var typeValidator_1 = __nested_webpack_require_223102__(4);
                          var MapValidator = (
                            /** @class */
                            function(_super) {
                              __extends(MapValidator2, _super);
                              function MapValidator2(keyValidators, valueValidators) {
                                var _this = _super.call(this) || this;
                                _this.keyValidators = keyValidators;
                                _this.valueValidators = valueValidators;
                                return _this;
                              }
                              MapValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                for (var key in input) {
                                  if (input.hasOwnProperty(key)) {
                                    var fieldsPath = (path ? path + "." : "") + field + "." + key;
                                    for (var _i = 0, _a = this.keyValidators; _i < _a.length; _i++) {
                                      var keyValidator = _a[_i];
                                      errors = keyValidator.validate(key, fieldsPath, field);
                                      if (errors) {
                                        return errors;
                                      }
                                    }
                                    for (var _b = 0, _c = this.valueValidators; _b < _c.length; _b++) {
                                      var valueValidator = _c[_b];
                                      errors = valueValidator.validate(input[key], fieldsPath, field);
                                      if (errors) {
                                        return errors;
                                      }
                                    }
                                  }
                                }
                                return null;
                              };
                              return MapValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.MapValidator = MapValidator;
                        },
                        /* 30 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_225786__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.ParametersPanelValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_225786__(3);
                          var typeValidator_1 = __nested_webpack_require_225786__(4);
                          var validator_1 = __nested_webpack_require_225786__(1);
                          var ParametersPanelValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ParametersPanelValidator2, _super);
                              function ParametersPanelValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ParametersPanelValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "expanded",
                                    validators: [validator_1.Validators.booleanValidator]
                                  },
                                  {
                                    field: "enabled",
                                    validators: [validator_1.Validators.booleanValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ParametersPanelValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ParametersPanelValidator = ParametersPanelValidator;
                        },
                        /* 31 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_228154__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.TableDataValidator = exports2.TableSchemaValidator = exports2.ColumnSchemaValidator = exports2.CredentialsValidator = exports2.DatasourceConnectionConfigValidator = exports2.DatasetCreateConfigValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_228154__(3);
                          var typeValidator_1 = __nested_webpack_require_228154__(4);
                          var validator_1 = __nested_webpack_require_228154__(1);
                          var DatasetCreateConfigValidator = (
                            /** @class */
                            function(_super) {
                              __extends(DatasetCreateConfigValidator2, _super);
                              function DatasetCreateConfigValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              DatasetCreateConfigValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "locale",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "mashupDocument",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "datasourceConnectionConfig",
                                    validators: [validator_1.Validators.datasourceConnectionConfigValidator]
                                  },
                                  {
                                    field: "tableSchemaList",
                                    validators: [validator_1.Validators.tableSchemaListValidator]
                                  },
                                  {
                                    field: "data",
                                    validators: [validator_1.Validators.tableDataArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                errors = multipleFieldsValidator.validate(input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                if (input["datasourceConnectionConfig"] && input["mashupDocument"] == null) {
                                  return [{
                                    message: "mashupDocument cannot be empty when datasourceConnectionConfig is presented"
                                  }];
                                }
                                if (input["data"] && input["tableSchemaList"] == null) {
                                  return [{
                                    message: "tableSchemaList cannot be empty when data is provided"
                                  }];
                                }
                                if (input["data"] == null && input["mashupDocument"] == null) {
                                  return [{
                                    message: "At least one of data or mashupDocument must be provided"
                                  }];
                                }
                              };
                              return DatasetCreateConfigValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.DatasetCreateConfigValidator = DatasetCreateConfigValidator;
                          var DatasourceConnectionConfigValidator = (
                            /** @class */
                            function(_super) {
                              __extends(DatasourceConnectionConfigValidator2, _super);
                              function DatasourceConnectionConfigValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              DatasourceConnectionConfigValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "dataCacheMode",
                                    validators: [validator_1.Validators.dataCacheModeValidator]
                                  },
                                  {
                                    field: "credentials",
                                    validators: [validator_1.Validators.credentialsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return DatasourceConnectionConfigValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.DatasourceConnectionConfigValidator = DatasourceConnectionConfigValidator;
                          var CredentialsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(CredentialsValidator2, _super);
                              function CredentialsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              CredentialsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "credentialType",
                                    validators: [validator_1.Validators.credentialTypeValidator]
                                  },
                                  {
                                    field: "credentialDetails",
                                    validators: [validator_1.Validators.credentialDetailsValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return CredentialsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.CredentialsValidator = CredentialsValidator;
                          var ColumnSchemaValidator = (
                            /** @class */
                            function(_super) {
                              __extends(ColumnSchemaValidator2, _super);
                              function ColumnSchemaValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              ColumnSchemaValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "displayName",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "dataType",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return ColumnSchemaValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.ColumnSchemaValidator = ColumnSchemaValidator;
                          var TableSchemaValidator = (
                            /** @class */
                            function(_super) {
                              __extends(TableSchemaValidator2, _super);
                              function TableSchemaValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              TableSchemaValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "columns",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.columnSchemaArrayValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return TableSchemaValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.TableSchemaValidator = TableSchemaValidator;
                          var TableDataValidator = (
                            /** @class */
                            function(_super) {
                              __extends(TableDataValidator2, _super);
                              function TableDataValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              TableDataValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "name",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "rows",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.rawDataValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return TableDataValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.TableDataValidator = TableDataValidator;
                        },
                        /* 32 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_238209__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.QuickCreateValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_238209__(3);
                          var typeValidator_1 = __nested_webpack_require_238209__(4);
                          var validator_1 = __nested_webpack_require_238209__(1);
                          var QuickCreateValidator = (
                            /** @class */
                            function(_super) {
                              __extends(QuickCreateValidator2, _super);
                              function QuickCreateValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              QuickCreateValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "accessToken",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "groupId",
                                    validators: [validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "tokenType",
                                    validators: [validator_1.Validators.tokenTypeValidator]
                                  },
                                  {
                                    field: "theme",
                                    validators: [validator_1.Validators.customThemeValidator]
                                  },
                                  {
                                    field: "datasetCreateConfig",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.datasetCreateConfigValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return QuickCreateValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.QuickCreateValidator = QuickCreateValidator;
                        },
                        /* 33 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_241082__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.PrintSettingsValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_241082__(3);
                          var typeValidator_1 = __nested_webpack_require_241082__(4);
                          var PrintSettingsValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PrintSettingsValidator2, _super);
                              function PrintSettingsValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PrintSettingsValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "browserPrintAdjustmentsMode",
                                    validators: [new typeValidator_1.EnumValidator([0, 1])]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PrintSettingsValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PrintSettingsValidator = PrintSettingsValidator;
                        },
                        /* 34 */
                        /***/
                        function(__unused_webpack_module, exports2, __nested_webpack_require_243275__) {
                          var __extends = this && this.__extends || /* @__PURE__ */ function() {
                            var extendStatics = function(d, b) {
                              extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                                d2.__proto__ = b2;
                              } || function(d2, b2) {
                                for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                              };
                              return extendStatics(d, b);
                            };
                            return function(d, b) {
                              if (typeof b !== "function" && b !== null)
                                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                              extendStatics(d, b);
                              function __() {
                                this.constructor = d;
                              }
                              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                          }();
                          Object.defineProperty(exports2, "__esModule", { value: true });
                          exports2.PaginatedReportDatasetBindingValidator = void 0;
                          var multipleFieldsValidator_1 = __nested_webpack_require_243275__(3);
                          var typeValidator_1 = __nested_webpack_require_243275__(4);
                          var validator_1 = __nested_webpack_require_243275__(1);
                          var PaginatedReportDatasetBindingValidator = (
                            /** @class */
                            function(_super) {
                              __extends(PaginatedReportDatasetBindingValidator2, _super);
                              function PaginatedReportDatasetBindingValidator2() {
                                return _super !== null && _super.apply(this, arguments) || this;
                              }
                              PaginatedReportDatasetBindingValidator2.prototype.validate = function(input, path, field) {
                                if (input == null) {
                                  return null;
                                }
                                var errors = _super.prototype.validate.call(this, input, path, field);
                                if (errors) {
                                  return errors;
                                }
                                var fields = [
                                  {
                                    field: "sourceDatasetId",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  },
                                  {
                                    field: "targetDatasetId",
                                    validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
                                  }
                                ];
                                var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
                                return multipleFieldsValidator.validate(input, path, field);
                              };
                              return PaginatedReportDatasetBindingValidator2;
                            }(typeValidator_1.ObjectValidator)
                          );
                          exports2.PaginatedReportDatasetBindingValidator = PaginatedReportDatasetBindingValidator;
                        }
                        /******/
                      ];
                      var __webpack_module_cache__2 = {};
                      function __nested_webpack_require_246021__(moduleId) {
                        var cachedModule = __webpack_module_cache__2[moduleId];
                        if (cachedModule !== void 0) {
                          return cachedModule.exports;
                        }
                        var module3 = __webpack_module_cache__2[moduleId] = {
                          /******/
                          // no module.id needed
                          /******/
                          // no module.loaded needed
                          /******/
                          exports: {}
                          /******/
                        };
                        __webpack_modules__2[moduleId].call(module3.exports, module3, module3.exports, __nested_webpack_require_246021__);
                        return module3.exports;
                      }
                      var __nested_webpack_exports__ = __nested_webpack_require_246021__(0);
                      return __nested_webpack_exports__;
                    })()
                  );
                });
              }
            ),
            /***/
            "./node_modules/powerbi-router/dist/router.js": (
              /*!****************************************************!*\
                !*** ./node_modules/powerbi-router/dist/router.js ***!
                \****************************************************/
              /***/
              function(module2) {
                (function webpackUniversalModuleDefinition(root, factory) {
                  if (true)
                    module2.exports = factory();
                  else {
                  }
                })(this, function() {
                  return (
                    /******/
                    function(modules) {
                      var installedModules = {};
                      function __nested_webpack_require_617__(moduleId) {
                        if (installedModules[moduleId])
                          return installedModules[moduleId].exports;
                        var module3 = installedModules[moduleId] = {
                          /******/
                          exports: {},
                          /******/
                          id: moduleId,
                          /******/
                          loaded: false
                          /******/
                        };
                        modules[moduleId].call(module3.exports, module3, module3.exports, __nested_webpack_require_617__);
                        module3.loaded = true;
                        return module3.exports;
                      }
                      __nested_webpack_require_617__.m = modules;
                      __nested_webpack_require_617__.c = installedModules;
                      __nested_webpack_require_617__.p = "";
                      return __nested_webpack_require_617__(0);
                    }([
                      /* 0 */
                      /***/
                      function(module3, exports2, __nested_webpack_require_1897__) {
                        "use strict";
                        var RouteRecognizer = __nested_webpack_require_1897__(1);
                        var Router = function() {
                          function Router2(handlers) {
                            this.handlers = handlers;
                            this.getRouteRecognizer = new RouteRecognizer();
                            this.patchRouteRecognizer = new RouteRecognizer();
                            this.postRouteRecognizer = new RouteRecognizer();
                            this.putRouteRecognizer = new RouteRecognizer();
                            this.deleteRouteRecognizer = new RouteRecognizer();
                          }
                          Router2.prototype.get = function(url, handler) {
                            this.registerHandler(this.getRouteRecognizer, "GET", url, handler);
                            return this;
                          };
                          Router2.prototype.patch = function(url, handler) {
                            this.registerHandler(this.patchRouteRecognizer, "PATCH", url, handler);
                            return this;
                          };
                          Router2.prototype.post = function(url, handler) {
                            this.registerHandler(this.postRouteRecognizer, "POST", url, handler);
                            return this;
                          };
                          Router2.prototype.put = function(url, handler) {
                            this.registerHandler(this.putRouteRecognizer, "PUT", url, handler);
                            return this;
                          };
                          Router2.prototype.delete = function(url, handler) {
                            this.registerHandler(this.deleteRouteRecognizer, "DELETE", url, handler);
                            return this;
                          };
                          Router2.prototype.registerHandler = function(routeRecognizer, method, url, handler) {
                            var routeRecognizerHandler = function(request) {
                              var response = new Response();
                              return Promise.resolve(handler(request, response)).then(function(x) {
                                return response;
                              });
                            };
                            routeRecognizer.add([
                              { path: url, handler: routeRecognizerHandler }
                            ]);
                            var internalHandler = {
                              test: function(request) {
                                if (request.method !== method) {
                                  return false;
                                }
                                var matchingRoutes = routeRecognizer.recognize(request.url);
                                if (matchingRoutes === void 0) {
                                  return false;
                                }
                                var route = matchingRoutes[0];
                                request.params = route.params;
                                request.queryParams = matchingRoutes.queryParams;
                                request.handler = route.handler;
                                return true;
                              },
                              handle: function(request) {
                                return request.handler(request);
                              }
                            };
                            this.handlers.addHandler(internalHandler);
                          };
                          return Router2;
                        }();
                        exports2.Router = Router;
                        var Response = function() {
                          function Response2() {
                            this.statusCode = 200;
                            this.headers = {};
                            this.body = null;
                          }
                          Response2.prototype.send = function(statusCode, body) {
                            this.statusCode = statusCode;
                            this.body = body;
                          };
                          return Response2;
                        }();
                        exports2.Response = Response;
                      },
                      /* 1 */
                      /***/
                      function(module3, exports2, __nested_webpack_require_6218__) {
                        var __WEBPACK_AMD_DEFINE_RESULT__;
                        (function(module4) {
                          (function() {
                            "use strict";
                            function $$route$recognizer$dsl$$Target(path, matcher, delegate) {
                              this.path = path;
                              this.matcher = matcher;
                              this.delegate = delegate;
                            }
                            $$route$recognizer$dsl$$Target.prototype = {
                              to: function(target, callback) {
                                var delegate = this.delegate;
                                if (delegate && delegate.willAddRoute) {
                                  target = delegate.willAddRoute(this.matcher.target, target);
                                }
                                this.matcher.add(this.path, target);
                                if (callback) {
                                  if (callback.length === 0) {
                                    throw new Error("You must have an argument in the function passed to `to`");
                                  }
                                  this.matcher.addChild(this.path, target, callback, this.delegate);
                                }
                                return this;
                              }
                            };
                            function $$route$recognizer$dsl$$Matcher(target) {
                              this.routes = {};
                              this.children = {};
                              this.target = target;
                            }
                            $$route$recognizer$dsl$$Matcher.prototype = {
                              add: function(path, handler) {
                                this.routes[path] = handler;
                              },
                              addChild: function(path, target, callback, delegate) {
                                var matcher = new $$route$recognizer$dsl$$Matcher(target);
                                this.children[path] = matcher;
                                var match = $$route$recognizer$dsl$$generateMatch(path, matcher, delegate);
                                if (delegate && delegate.contextEntered) {
                                  delegate.contextEntered(target, match);
                                }
                                callback(match);
                              }
                            };
                            function $$route$recognizer$dsl$$generateMatch(startingPath, matcher, delegate) {
                              return function(path, nestedCallback) {
                                var fullPath = startingPath + path;
                                if (nestedCallback) {
                                  nestedCallback($$route$recognizer$dsl$$generateMatch(fullPath, matcher, delegate));
                                } else {
                                  return new $$route$recognizer$dsl$$Target(startingPath + path, matcher, delegate);
                                }
                              };
                            }
                            function $$route$recognizer$dsl$$addRoute(routeArray, path, handler) {
                              var len = 0;
                              for (var i = 0; i < routeArray.length; i++) {
                                len += routeArray[i].path.length;
                              }
                              path = path.substr(len);
                              var route = { path, handler };
                              routeArray.push(route);
                            }
                            function $$route$recognizer$dsl$$eachRoute(baseRoute, matcher, callback, binding) {
                              var routes = matcher.routes;
                              for (var path in routes) {
                                if (routes.hasOwnProperty(path)) {
                                  var routeArray = baseRoute.slice();
                                  $$route$recognizer$dsl$$addRoute(routeArray, path, routes[path]);
                                  if (matcher.children[path]) {
                                    $$route$recognizer$dsl$$eachRoute(routeArray, matcher.children[path], callback, binding);
                                  } else {
                                    callback.call(binding, routeArray);
                                  }
                                }
                              }
                            }
                            var $$route$recognizer$dsl$$default = function(callback, addRouteCallback) {
                              var matcher = new $$route$recognizer$dsl$$Matcher();
                              callback($$route$recognizer$dsl$$generateMatch("", matcher, this.delegate));
                              $$route$recognizer$dsl$$eachRoute([], matcher, function(route) {
                                if (addRouteCallback) {
                                  addRouteCallback(this, route);
                                } else {
                                  this.add(route);
                                }
                              }, this);
                            };
                            var $$route$recognizer$$specials = [
                              "/",
                              ".",
                              "*",
                              "+",
                              "?",
                              "|",
                              "(",
                              ")",
                              "[",
                              "]",
                              "{",
                              "}",
                              "\\"
                            ];
                            var $$route$recognizer$$escapeRegex = new RegExp("(\\" + $$route$recognizer$$specials.join("|\\") + ")", "g");
                            function $$route$recognizer$$isArray(test) {
                              return Object.prototype.toString.call(test) === "[object Array]";
                            }
                            function $$route$recognizer$$StaticSegment(string) {
                              this.string = string;
                            }
                            $$route$recognizer$$StaticSegment.prototype = {
                              eachChar: function(currentState) {
                                var string = this.string, ch;
                                for (var i = 0; i < string.length; i++) {
                                  ch = string.charAt(i);
                                  currentState = currentState.put({ invalidChars: void 0, repeat: false, validChars: ch });
                                }
                                return currentState;
                              },
                              regex: function() {
                                return this.string.replace($$route$recognizer$$escapeRegex, "\\$1");
                              },
                              generate: function() {
                                return this.string;
                              }
                            };
                            function $$route$recognizer$$DynamicSegment(name) {
                              this.name = name;
                            }
                            $$route$recognizer$$DynamicSegment.prototype = {
                              eachChar: function(currentState) {
                                return currentState.put({ invalidChars: "/", repeat: true, validChars: void 0 });
                              },
                              regex: function() {
                                return "([^/]+)";
                              },
                              generate: function(params) {
                                return params[this.name];
                              }
                            };
                            function $$route$recognizer$$StarSegment(name) {
                              this.name = name;
                            }
                            $$route$recognizer$$StarSegment.prototype = {
                              eachChar: function(currentState) {
                                return currentState.put({ invalidChars: "", repeat: true, validChars: void 0 });
                              },
                              regex: function() {
                                return "(.+)";
                              },
                              generate: function(params) {
                                return params[this.name];
                              }
                            };
                            function $$route$recognizer$$EpsilonSegment() {
                            }
                            $$route$recognizer$$EpsilonSegment.prototype = {
                              eachChar: function(currentState) {
                                return currentState;
                              },
                              regex: function() {
                                return "";
                              },
                              generate: function() {
                                return "";
                              }
                            };
                            function $$route$recognizer$$parse(route, names, specificity) {
                              if (route.charAt(0) === "/") {
                                route = route.substr(1);
                              }
                              var segments = route.split("/");
                              var results = new Array(segments.length);
                              specificity.val = "";
                              for (var i = 0; i < segments.length; i++) {
                                var segment = segments[i], match;
                                if (match = segment.match(/^:([^\/]+)$/)) {
                                  results[i] = new $$route$recognizer$$DynamicSegment(match[1]);
                                  names.push(match[1]);
                                  specificity.val += "3";
                                } else if (match = segment.match(/^\*([^\/]+)$/)) {
                                  results[i] = new $$route$recognizer$$StarSegment(match[1]);
                                  specificity.val += "1";
                                  names.push(match[1]);
                                } else if (segment === "") {
                                  results[i] = new $$route$recognizer$$EpsilonSegment();
                                  specificity.val += "2";
                                } else {
                                  results[i] = new $$route$recognizer$$StaticSegment(segment);
                                  specificity.val += "4";
                                }
                              }
                              specificity.val = +specificity.val;
                              return results;
                            }
                            function $$route$recognizer$$State(charSpec) {
                              this.charSpec = charSpec;
                              this.nextStates = [];
                              this.charSpecs = {};
                              this.regex = void 0;
                              this.handlers = void 0;
                              this.specificity = void 0;
                            }
                            $$route$recognizer$$State.prototype = {
                              get: function(charSpec) {
                                if (this.charSpecs[charSpec.validChars]) {
                                  return this.charSpecs[charSpec.validChars];
                                }
                                var nextStates = this.nextStates;
                                for (var i = 0; i < nextStates.length; i++) {
                                  var child = nextStates[i];
                                  var isEqual = child.charSpec.validChars === charSpec.validChars;
                                  isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
                                  if (isEqual) {
                                    this.charSpecs[charSpec.validChars] = child;
                                    return child;
                                  }
                                }
                              },
                              put: function(charSpec) {
                                var state;
                                if (state = this.get(charSpec)) {
                                  return state;
                                }
                                state = new $$route$recognizer$$State(charSpec);
                                this.nextStates.push(state);
                                if (charSpec.repeat) {
                                  state.nextStates.push(state);
                                }
                                return state;
                              },
                              // Find a list of child states matching the next character
                              match: function(ch) {
                                var nextStates = this.nextStates, child, charSpec, chars;
                                var returned = [];
                                for (var i = 0; i < nextStates.length; i++) {
                                  child = nextStates[i];
                                  charSpec = child.charSpec;
                                  if (typeof (chars = charSpec.validChars) !== "undefined") {
                                    if (chars.indexOf(ch) !== -1) {
                                      returned.push(child);
                                    }
                                  } else if (typeof (chars = charSpec.invalidChars) !== "undefined") {
                                    if (chars.indexOf(ch) === -1) {
                                      returned.push(child);
                                    }
                                  }
                                }
                                return returned;
                              }
                            };
                            function $$route$recognizer$$sortSolutions(states) {
                              return states.sort(function(a, b) {
                                return b.specificity.val - a.specificity.val;
                              });
                            }
                            function $$route$recognizer$$recognizeChar(states, ch) {
                              var nextStates = [];
                              for (var i = 0, l = states.length; i < l; i++) {
                                var state = states[i];
                                nextStates = nextStates.concat(state.match(ch));
                              }
                              return nextStates;
                            }
                            var $$route$recognizer$$oCreate = Object.create || function(proto) {
                              function F() {
                              }
                              F.prototype = proto;
                              return new F();
                            };
                            function $$route$recognizer$$RecognizeResults(queryParams) {
                              this.queryParams = queryParams || {};
                            }
                            $$route$recognizer$$RecognizeResults.prototype = $$route$recognizer$$oCreate({
                              splice: Array.prototype.splice,
                              slice: Array.prototype.slice,
                              push: Array.prototype.push,
                              length: 0,
                              queryParams: null
                            });
                            function $$route$recognizer$$findHandler(state, path, queryParams) {
                              var handlers = state.handlers, regex = state.regex;
                              var captures = path.match(regex), currentCapture = 1;
                              var result = new $$route$recognizer$$RecognizeResults(queryParams);
                              result.length = handlers.length;
                              for (var i = 0; i < handlers.length; i++) {
                                var handler = handlers[i], names = handler.names, params = {};
                                for (var j = 0; j < names.length; j++) {
                                  params[names[j]] = captures[currentCapture++];
                                }
                                result[i] = { handler: handler.handler, params, isDynamic: !!names.length };
                              }
                              return result;
                            }
                            function $$route$recognizer$$decodeQueryParamPart(part) {
                              part = part.replace(/\+/gm, "%20");
                              var result;
                              try {
                                result = decodeURIComponent(part);
                              } catch (error) {
                                result = "";
                              }
                              return result;
                            }
                            var $$route$recognizer$$RouteRecognizer = function() {
                              this.rootState = new $$route$recognizer$$State();
                              this.names = {};
                            };
                            $$route$recognizer$$RouteRecognizer.prototype = {
                              add: function(routes, options) {
                                var currentState = this.rootState, regex = "^", specificity = {}, handlers = new Array(routes.length), allSegments = [], name;
                                var isEmpty = true;
                                for (var i = 0; i < routes.length; i++) {
                                  var route = routes[i], names = [];
                                  var segments = $$route$recognizer$$parse(route.path, names, specificity);
                                  allSegments = allSegments.concat(segments);
                                  for (var j = 0; j < segments.length; j++) {
                                    var segment = segments[j];
                                    if (segment instanceof $$route$recognizer$$EpsilonSegment) {
                                      continue;
                                    }
                                    isEmpty = false;
                                    currentState = currentState.put({ invalidChars: void 0, repeat: false, validChars: "/" });
                                    regex += "/";
                                    currentState = segment.eachChar(currentState);
                                    regex += segment.regex();
                                  }
                                  var handler = { handler: route.handler, names };
                                  handlers[i] = handler;
                                }
                                if (isEmpty) {
                                  currentState = currentState.put({ invalidChars: void 0, repeat: false, validChars: "/" });
                                  regex += "/";
                                }
                                currentState.handlers = handlers;
                                currentState.regex = new RegExp(regex + "$");
                                currentState.specificity = specificity;
                                if (name = options && options.as) {
                                  this.names[name] = {
                                    segments: allSegments,
                                    handlers
                                  };
                                }
                              },
                              handlersFor: function(name) {
                                var route = this.names[name];
                                if (!route) {
                                  throw new Error("There is no route named " + name);
                                }
                                var result = new Array(route.handlers.length);
                                for (var i = 0; i < route.handlers.length; i++) {
                                  result[i] = route.handlers[i];
                                }
                                return result;
                              },
                              hasRoute: function(name) {
                                return !!this.names[name];
                              },
                              generate: function(name, params) {
                                var route = this.names[name], output = "";
                                if (!route) {
                                  throw new Error("There is no route named " + name);
                                }
                                var segments = route.segments;
                                for (var i = 0; i < segments.length; i++) {
                                  var segment = segments[i];
                                  if (segment instanceof $$route$recognizer$$EpsilonSegment) {
                                    continue;
                                  }
                                  output += "/";
                                  output += segment.generate(params);
                                }
                                if (output.charAt(0) !== "/") {
                                  output = "/" + output;
                                }
                                if (params && params.queryParams) {
                                  output += this.generateQueryString(params.queryParams, route.handlers);
                                }
                                return output;
                              },
                              generateQueryString: function(params, handlers) {
                                var pairs = [];
                                var keys = [];
                                for (var key in params) {
                                  if (params.hasOwnProperty(key)) {
                                    keys.push(key);
                                  }
                                }
                                keys.sort();
                                for (var i = 0; i < keys.length; i++) {
                                  key = keys[i];
                                  var value = params[key];
                                  if (value == null) {
                                    continue;
                                  }
                                  var pair = encodeURIComponent(key);
                                  if ($$route$recognizer$$isArray(value)) {
                                    for (var j = 0; j < value.length; j++) {
                                      var arrayPair = key + "[]=" + encodeURIComponent(value[j]);
                                      pairs.push(arrayPair);
                                    }
                                  } else {
                                    pair += "=" + encodeURIComponent(value);
                                    pairs.push(pair);
                                  }
                                }
                                if (pairs.length === 0) {
                                  return "";
                                }
                                return "?" + pairs.join("&");
                              },
                              parseQueryString: function(queryString) {
                                var pairs = queryString.split("&"), queryParams = {};
                                for (var i = 0; i < pairs.length; i++) {
                                  var pair = pairs[i].split("="), key = $$route$recognizer$$decodeQueryParamPart(pair[0]), keyLength = key.length, isArray = false, value;
                                  if (pair.length === 1) {
                                    value = "true";
                                  } else {
                                    if (keyLength > 2 && key.slice(keyLength - 2) === "[]") {
                                      isArray = true;
                                      key = key.slice(0, keyLength - 2);
                                      if (!queryParams[key]) {
                                        queryParams[key] = [];
                                      }
                                    }
                                    value = pair[1] ? $$route$recognizer$$decodeQueryParamPart(pair[1]) : "";
                                  }
                                  if (isArray) {
                                    queryParams[key].push(value);
                                  } else {
                                    queryParams[key] = value;
                                  }
                                }
                                return queryParams;
                              },
                              recognize: function(path) {
                                var states = [this.rootState], pathLen, i, l, queryStart, queryParams = {}, isSlashDropped = false;
                                queryStart = path.indexOf("?");
                                if (queryStart !== -1) {
                                  var queryString = path.substr(queryStart + 1, path.length);
                                  path = path.substr(0, queryStart);
                                  queryParams = this.parseQueryString(queryString);
                                }
                                path = decodeURI(path);
                                if (path.charAt(0) !== "/") {
                                  path = "/" + path;
                                }
                                pathLen = path.length;
                                if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
                                  path = path.substr(0, pathLen - 1);
                                  isSlashDropped = true;
                                }
                                for (i = 0; i < path.length; i++) {
                                  states = $$route$recognizer$$recognizeChar(states, path.charAt(i));
                                  if (!states.length) {
                                    break;
                                  }
                                }
                                var solutions = [];
                                for (i = 0; i < states.length; i++) {
                                  if (states[i].handlers) {
                                    solutions.push(states[i]);
                                  }
                                }
                                states = $$route$recognizer$$sortSolutions(solutions);
                                var state = solutions[0];
                                if (state && state.handlers) {
                                  if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
                                    path = path + "/";
                                  }
                                  return $$route$recognizer$$findHandler(state, path, queryParams);
                                }
                              }
                            };
                            $$route$recognizer$$RouteRecognizer.prototype.map = $$route$recognizer$dsl$$default;
                            $$route$recognizer$$RouteRecognizer.VERSION = "0.1.11";
                            var $$route$recognizer$$default = $$route$recognizer$$RouteRecognizer;
                            if (__nested_webpack_require_6218__(3)["amd"]) {
                              !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                                return $$route$recognizer$$default;
                              }).call(exports2, __nested_webpack_require_6218__, exports2, module4), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module4.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                            } else if (typeof module4 !== "undefined" && module4["exports"]) {
                              module4["exports"] = $$route$recognizer$$default;
                            } else if (typeof this !== "undefined") {
                              this["RouteRecognizer"] = $$route$recognizer$$default;
                            }
                          }).call(this);
                        }).call(exports2, __nested_webpack_require_6218__(2)(module3));
                      },
                      /* 2 */
                      /***/
                      function(module3, exports2) {
                        module3.exports = function(module4) {
                          if (!module4.webpackPolyfill) {
                            module4.deprecate = function() {
                            };
                            module4.paths = [];
                            module4.children = [];
                            module4.webpackPolyfill = 1;
                          }
                          return module4;
                        };
                      },
                      /* 3 */
                      /***/
                      function(module3, exports2) {
                        module3.exports = function() {
                          throw new Error("define cannot be used indirect");
                        };
                      }
                      /******/
                    ])
                  );
                });
                ;
              }
            ),
            /***/
            "./src/FilterBuilders/advancedFilterBuilder.ts": (
              /*!*****************************************************!*\
                !*** ./src/FilterBuilders/advancedFilterBuilder.ts ***!
                \*****************************************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.AdvancedFilterBuilder = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var filterBuilder_1 = __webpack_require__2(
                  /*! ./filterBuilder */
                  "./src/FilterBuilders/filterBuilder.ts"
                );
                var AdvancedFilterBuilder = (
                  /** @class */
                  function(_super) {
                    __extends(AdvancedFilterBuilder2, _super);
                    function AdvancedFilterBuilder2() {
                      var _this = _super !== null && _super.apply(this, arguments) || this;
                      _this.conditions = [];
                      return _this;
                    }
                    AdvancedFilterBuilder2.prototype.and = function() {
                      this.logicalOperator = "And";
                      return this;
                    };
                    AdvancedFilterBuilder2.prototype.or = function() {
                      this.logicalOperator = "Or";
                      return this;
                    };
                    AdvancedFilterBuilder2.prototype.addCondition = function(operator, value) {
                      var condition = {
                        operator,
                        value
                      };
                      this.conditions.push(condition);
                      return this;
                    };
                    AdvancedFilterBuilder2.prototype.build = function() {
                      var advancedFilter = new powerbi_models_1.AdvancedFilter(this.target, this.logicalOperator, this.conditions);
                      return advancedFilter;
                    };
                    return AdvancedFilterBuilder2;
                  }(filterBuilder_1.FilterBuilder)
                );
                exports2.AdvancedFilterBuilder = AdvancedFilterBuilder;
              }
            ),
            /***/
            "./src/FilterBuilders/basicFilterBuilder.ts": (
              /*!**************************************************!*\
                !*** ./src/FilterBuilders/basicFilterBuilder.ts ***!
                \**************************************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.BasicFilterBuilder = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var filterBuilder_1 = __webpack_require__2(
                  /*! ./filterBuilder */
                  "./src/FilterBuilders/filterBuilder.ts"
                );
                var BasicFilterBuilder = (
                  /** @class */
                  function(_super) {
                    __extends(BasicFilterBuilder2, _super);
                    function BasicFilterBuilder2() {
                      var _this = _super !== null && _super.apply(this, arguments) || this;
                      _this.isRequireSingleSelection = false;
                      return _this;
                    }
                    BasicFilterBuilder2.prototype.in = function(values) {
                      this.operator = "In";
                      this.values = values;
                      return this;
                    };
                    BasicFilterBuilder2.prototype.notIn = function(values) {
                      this.operator = "NotIn";
                      this.values = values;
                      return this;
                    };
                    BasicFilterBuilder2.prototype.all = function() {
                      this.operator = "All";
                      this.values = [];
                      return this;
                    };
                    BasicFilterBuilder2.prototype.requireSingleSelection = function(isRequireSingleSelection) {
                      if (isRequireSingleSelection === void 0) {
                        isRequireSingleSelection = false;
                      }
                      this.isRequireSingleSelection = isRequireSingleSelection;
                      return this;
                    };
                    BasicFilterBuilder2.prototype.build = function() {
                      var basicFilter = new powerbi_models_1.BasicFilter(this.target, this.operator, this.values);
                      basicFilter.requireSingleSelection = this.isRequireSingleSelection;
                      return basicFilter;
                    };
                    return BasicFilterBuilder2;
                  }(filterBuilder_1.FilterBuilder)
                );
                exports2.BasicFilterBuilder = BasicFilterBuilder;
              }
            ),
            /***/
            "./src/FilterBuilders/filterBuilder.ts": (
              /*!*********************************************!*\
                !*** ./src/FilterBuilders/filterBuilder.ts ***!
                \*********************************************/
              /***/
              (__unused_webpack_module, exports2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.FilterBuilder = void 0;
                var FilterBuilder = (
                  /** @class */
                  function() {
                    function FilterBuilder2() {
                    }
                    FilterBuilder2.prototype.withTargetObject = function(target) {
                      this.target = target;
                      return this;
                    };
                    FilterBuilder2.prototype.withColumnTarget = function(tableName, columnName) {
                      this.target = { table: tableName, column: columnName };
                      return this;
                    };
                    FilterBuilder2.prototype.withMeasureTarget = function(tableName, measure) {
                      this.target = { table: tableName, measure };
                      return this;
                    };
                    FilterBuilder2.prototype.withHierarchyLevelTarget = function(tableName, hierarchy, hierarchyLevel) {
                      this.target = { table: tableName, hierarchy, hierarchyLevel };
                      return this;
                    };
                    FilterBuilder2.prototype.withColumnAggregation = function(tableName, columnName, aggregationFunction) {
                      this.target = { table: tableName, column: columnName, aggregationFunction };
                      return this;
                    };
                    FilterBuilder2.prototype.withHierarchyLevelAggregationTarget = function(tableName, hierarchy, hierarchyLevel, aggregationFunction) {
                      this.target = { table: tableName, hierarchy, hierarchyLevel, aggregationFunction };
                      return this;
                    };
                    return FilterBuilder2;
                  }()
                );
                exports2.FilterBuilder = FilterBuilder;
              }
            ),
            /***/
            "./src/FilterBuilders/index.ts": (
              /*!*************************************!*\
                !*** ./src/FilterBuilders/index.ts ***!
                \*************************************/
              /***/
              (__unused_webpack_module, exports2, __webpack_require__2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.RelativeTimeFilterBuilder = exports2.RelativeDateFilterBuilder = exports2.TopNFilterBuilder = exports2.AdvancedFilterBuilder = exports2.BasicFilterBuilder = void 0;
                var basicFilterBuilder_1 = __webpack_require__2(
                  /*! ./basicFilterBuilder */
                  "./src/FilterBuilders/basicFilterBuilder.ts"
                );
                Object.defineProperty(exports2, "BasicFilterBuilder", { enumerable: true, get: function() {
                  return basicFilterBuilder_1.BasicFilterBuilder;
                } });
                var advancedFilterBuilder_1 = __webpack_require__2(
                  /*! ./advancedFilterBuilder */
                  "./src/FilterBuilders/advancedFilterBuilder.ts"
                );
                Object.defineProperty(exports2, "AdvancedFilterBuilder", { enumerable: true, get: function() {
                  return advancedFilterBuilder_1.AdvancedFilterBuilder;
                } });
                var topNFilterBuilder_1 = __webpack_require__2(
                  /*! ./topNFilterBuilder */
                  "./src/FilterBuilders/topNFilterBuilder.ts"
                );
                Object.defineProperty(exports2, "TopNFilterBuilder", { enumerable: true, get: function() {
                  return topNFilterBuilder_1.TopNFilterBuilder;
                } });
                var relativeDateFilterBuilder_1 = __webpack_require__2(
                  /*! ./relativeDateFilterBuilder */
                  "./src/FilterBuilders/relativeDateFilterBuilder.ts"
                );
                Object.defineProperty(exports2, "RelativeDateFilterBuilder", { enumerable: true, get: function() {
                  return relativeDateFilterBuilder_1.RelativeDateFilterBuilder;
                } });
                var relativeTimeFilterBuilder_1 = __webpack_require__2(
                  /*! ./relativeTimeFilterBuilder */
                  "./src/FilterBuilders/relativeTimeFilterBuilder.ts"
                );
                Object.defineProperty(exports2, "RelativeTimeFilterBuilder", { enumerable: true, get: function() {
                  return relativeTimeFilterBuilder_1.RelativeTimeFilterBuilder;
                } });
              }
            ),
            /***/
            "./src/FilterBuilders/relativeDateFilterBuilder.ts": (
              /*!*********************************************************!*\
                !*** ./src/FilterBuilders/relativeDateFilterBuilder.ts ***!
                \*********************************************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.RelativeDateFilterBuilder = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var filterBuilder_1 = __webpack_require__2(
                  /*! ./filterBuilder */
                  "./src/FilterBuilders/filterBuilder.ts"
                );
                var RelativeDateFilterBuilder = (
                  /** @class */
                  function(_super) {
                    __extends(RelativeDateFilterBuilder2, _super);
                    function RelativeDateFilterBuilder2() {
                      var _this = _super !== null && _super.apply(this, arguments) || this;
                      _this.isTodayIncluded = true;
                      return _this;
                    }
                    RelativeDateFilterBuilder2.prototype.inLast = function(timeUnitsCount, timeUnitType) {
                      this.operator = powerbi_models_1.RelativeDateOperators.InLast;
                      this.timeUnitsCount = timeUnitsCount;
                      this.timeUnitType = timeUnitType;
                      return this;
                    };
                    RelativeDateFilterBuilder2.prototype.inThis = function(timeUnitsCount, timeUnitType) {
                      this.operator = powerbi_models_1.RelativeDateOperators.InThis;
                      this.timeUnitsCount = timeUnitsCount;
                      this.timeUnitType = timeUnitType;
                      return this;
                    };
                    RelativeDateFilterBuilder2.prototype.inNext = function(timeUnitsCount, timeUnitType) {
                      this.operator = powerbi_models_1.RelativeDateOperators.InNext;
                      this.timeUnitsCount = timeUnitsCount;
                      this.timeUnitType = timeUnitType;
                      return this;
                    };
                    RelativeDateFilterBuilder2.prototype.includeToday = function(includeToday) {
                      this.isTodayIncluded = includeToday;
                      return this;
                    };
                    RelativeDateFilterBuilder2.prototype.build = function() {
                      var relativeDateFilter = new powerbi_models_1.RelativeDateFilter(this.target, this.operator, this.timeUnitsCount, this.timeUnitType, this.isTodayIncluded);
                      return relativeDateFilter;
                    };
                    return RelativeDateFilterBuilder2;
                  }(filterBuilder_1.FilterBuilder)
                );
                exports2.RelativeDateFilterBuilder = RelativeDateFilterBuilder;
              }
            ),
            /***/
            "./src/FilterBuilders/relativeTimeFilterBuilder.ts": (
              /*!*********************************************************!*\
                !*** ./src/FilterBuilders/relativeTimeFilterBuilder.ts ***!
                \*********************************************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.RelativeTimeFilterBuilder = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var filterBuilder_1 = __webpack_require__2(
                  /*! ./filterBuilder */
                  "./src/FilterBuilders/filterBuilder.ts"
                );
                var RelativeTimeFilterBuilder = (
                  /** @class */
                  function(_super) {
                    __extends(RelativeTimeFilterBuilder2, _super);
                    function RelativeTimeFilterBuilder2() {
                      return _super !== null && _super.apply(this, arguments) || this;
                    }
                    RelativeTimeFilterBuilder2.prototype.inLast = function(timeUnitsCount, timeUnitType) {
                      this.operator = powerbi_models_1.RelativeDateOperators.InLast;
                      this.timeUnitsCount = timeUnitsCount;
                      this.timeUnitType = timeUnitType;
                      return this;
                    };
                    RelativeTimeFilterBuilder2.prototype.inThis = function(timeUnitsCount, timeUnitType) {
                      this.operator = powerbi_models_1.RelativeDateOperators.InThis;
                      this.timeUnitsCount = timeUnitsCount;
                      this.timeUnitType = timeUnitType;
                      return this;
                    };
                    RelativeTimeFilterBuilder2.prototype.inNext = function(timeUnitsCount, timeUnitType) {
                      this.operator = powerbi_models_1.RelativeDateOperators.InNext;
                      this.timeUnitsCount = timeUnitsCount;
                      this.timeUnitType = timeUnitType;
                      return this;
                    };
                    RelativeTimeFilterBuilder2.prototype.build = function() {
                      var relativeTimeFilter = new powerbi_models_1.RelativeTimeFilter(this.target, this.operator, this.timeUnitsCount, this.timeUnitType);
                      return relativeTimeFilter;
                    };
                    return RelativeTimeFilterBuilder2;
                  }(filterBuilder_1.FilterBuilder)
                );
                exports2.RelativeTimeFilterBuilder = RelativeTimeFilterBuilder;
              }
            ),
            /***/
            "./src/FilterBuilders/topNFilterBuilder.ts": (
              /*!*************************************************!*\
                !*** ./src/FilterBuilders/topNFilterBuilder.ts ***!
                \*************************************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.TopNFilterBuilder = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var filterBuilder_1 = __webpack_require__2(
                  /*! ./filterBuilder */
                  "./src/FilterBuilders/filterBuilder.ts"
                );
                var TopNFilterBuilder = (
                  /** @class */
                  function(_super) {
                    __extends(TopNFilterBuilder2, _super);
                    function TopNFilterBuilder2() {
                      return _super !== null && _super.apply(this, arguments) || this;
                    }
                    TopNFilterBuilder2.prototype.top = function(itemCount) {
                      this.operator = "Top";
                      this.itemCount = itemCount;
                      return this;
                    };
                    TopNFilterBuilder2.prototype.bottom = function(itemCount) {
                      this.operator = "Bottom";
                      this.itemCount = itemCount;
                      return this;
                    };
                    TopNFilterBuilder2.prototype.orderByTarget = function(target) {
                      this.orderByTargetValue = target;
                      return this;
                    };
                    TopNFilterBuilder2.prototype.build = function() {
                      var topNFilter = new powerbi_models_1.TopNFilter(this.target, this.operator, this.itemCount, this.orderByTargetValue);
                      return topNFilter;
                    };
                    return TopNFilterBuilder2;
                  }(filterBuilder_1.FilterBuilder)
                );
                exports2.TopNFilterBuilder = TopNFilterBuilder;
              }
            ),
            /***/
            "./src/bookmarksManager.ts": (
              /*!*********************************!*\
                !*** ./src/bookmarksManager.ts ***!
                \*********************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.BookmarksManager = void 0;
                var util_1 = __webpack_require__2(
                  /*! ./util */
                  "./src/util.ts"
                );
                var errors_1 = __webpack_require__2(
                  /*! ./errors */
                  "./src/errors.ts"
                );
                var BookmarksManager = (
                  /** @class */
                  function() {
                    function BookmarksManager2(service, config, iframe) {
                      this.service = service;
                      this.config = config;
                      this.iframe = iframe;
                    }
                    BookmarksManager2.prototype.getBookmarks = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get("/report/bookmarks", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_1 = _a.sent();
                              throw response_1.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    BookmarksManager2.prototype.apply = function(bookmarkName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var request, response_2;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              request = {
                                name: bookmarkName
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/bookmarks/applyByName", request, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_2 = _a.sent();
                              throw response_2.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    BookmarksManager2.prototype.play = function(playMode) {
                      return __awaiter(this, void 0, void 0, function() {
                        var playBookmarkRequest, response_3;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              playBookmarkRequest = {
                                playMode
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/bookmarks/play", playBookmarkRequest, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_3 = _a.sent();
                              throw response_3.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    BookmarksManager2.prototype.capture = function(options) {
                      return __awaiter(this, void 0, void 0, function() {
                        var request, response, response_4;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              request = {
                                options: options || {}
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/bookmarks/capture", request, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_4 = _a.sent();
                              throw response_4.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    BookmarksManager2.prototype.applyState = function(state) {
                      return __awaiter(this, void 0, void 0, function() {
                        var request, response_5;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              request = {
                                state
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/bookmarks/applyState", request, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_5 = _a.sent();
                              throw response_5.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    return BookmarksManager2;
                  }()
                );
                exports2.BookmarksManager = BookmarksManager;
              }
            ),
            /***/
            "./src/config.ts": (
              /*!***********************!*\
                !*** ./src/config.ts ***!
                \***********************/
              /***/
              (__unused_webpack_module, exports2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                var config = {
                  version: "2.23.1",
                  type: "js"
                };
                exports2["default"] = config;
              }
            ),
            /***/
            "./src/create.ts": (
              /*!***********************!*\
                !*** ./src/create.ts ***!
                \***********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Create = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var embed_1 = __webpack_require__2(
                  /*! ./embed */
                  "./src/embed.ts"
                );
                var utils = __webpack_require__2(
                  /*! ./util */
                  "./src/util.ts"
                );
                var Create = (
                  /** @class */
                  function(_super) {
                    __extends(Create2, _super);
                    function Create2(service, element, config, phasedRender, isBootstrap) {
                      return _super.call(
                        this,
                        service,
                        element,
                        config,
                        /* iframe */
                        void 0,
                        phasedRender,
                        isBootstrap
                      ) || this;
                    }
                    Create2.prototype.getId = function() {
                      var datasetId = this.createConfig && this.createConfig.datasetId ? this.createConfig.datasetId : Create2.findIdFromEmbedUrl(this.config.embedUrl);
                      if (typeof datasetId !== "string" || datasetId.length === 0) {
                        throw new Error("Dataset id is required, but it was not found. You must provide an id either as part of embed configuration.");
                      }
                      return datasetId;
                    };
                    Create2.prototype.validate = function(config) {
                      return (0, powerbi_models_1.validateCreateReport)(config);
                    };
                    Create2.prototype.configChanged = function(isBootstrap) {
                      if (isBootstrap) {
                        return;
                      }
                      var config = this.config;
                      this.createConfig = {
                        accessToken: config.accessToken,
                        datasetId: config.datasetId || this.getId(),
                        groupId: config.groupId,
                        settings: config.settings,
                        tokenType: config.tokenType,
                        theme: config.theme
                      };
                    };
                    Create2.prototype.getDefaultEmbedUrlEndpoint = function() {
                      return "reportEmbed";
                    };
                    Create2.prototype.isSaved = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, utils.isSavedInternal(this.service.hpm, this.config.uniqueId, this.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Create2.findIdFromEmbedUrl = function(url) {
                      var datasetIdRegEx = /datasetId="?([^&]+)"?/;
                      var datasetIdMatch = url.match(datasetIdRegEx);
                      var datasetId;
                      if (datasetIdMatch) {
                        datasetId = datasetIdMatch[1];
                      }
                      return datasetId;
                    };
                    Create2.prototype.create = function() {
                      var _a;
                      return __awaiter(this, void 0, void 0, function() {
                        var errors, headers, response, response_1;
                        return __generator(this, function(_b) {
                          switch (_b.label) {
                            case 0:
                              errors = (0, powerbi_models_1.validateCreateReport)(this.createConfig);
                              if (errors) {
                                throw errors;
                              }
                              _b.label = 1;
                            case 1:
                              _b.trys.push([1, 3, , 4]);
                              headers = {
                                uid: this.config.uniqueId,
                                sdkSessionId: this.service.getSdkSessionId()
                              };
                              if (!!((_a = this.eventHooks) === null || _a === void 0 ? void 0 : _a.accessTokenProvider)) {
                                headers.tokenProviderSupplied = true;
                              }
                              return [4, this.service.hpm.post("/report/create", this.createConfig, headers, this.iframe.contentWindow)];
                            case 2:
                              response = _b.sent();
                              return [2, response.body];
                            case 3:
                              response_1 = _b.sent();
                              throw response_1.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    return Create2;
                  }(embed_1.Embed)
                );
                exports2.Create = Create;
              }
            ),
            /***/
            "./src/dashboard.ts": (
              /*!**************************!*\
                !*** ./src/dashboard.ts ***!
                \**************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Dashboard = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var embed_1 = __webpack_require__2(
                  /*! ./embed */
                  "./src/embed.ts"
                );
                var Dashboard = (
                  /** @class */
                  function(_super) {
                    __extends(Dashboard2, _super);
                    function Dashboard2(service, element, config, phasedRender, isBootstrap) {
                      var _this = _super.call(
                        this,
                        service,
                        element,
                        config,
                        /* iframe */
                        void 0,
                        phasedRender,
                        isBootstrap
                      ) || this;
                      _this.loadPath = "/dashboard/load";
                      _this.phasedLoadPath = "/dashboard/prepare";
                      Array.prototype.push.apply(_this.allowedEvents, Dashboard2.allowedEvents);
                      return _this;
                    }
                    Dashboard2.findIdFromEmbedUrl = function(url) {
                      var dashboardIdRegEx = /dashboardId="?([^&]+)"?/;
                      var dashboardIdMatch = url.match(dashboardIdRegEx);
                      var dashboardId;
                      if (dashboardIdMatch) {
                        dashboardId = dashboardIdMatch[1];
                      }
                      return dashboardId;
                    };
                    Dashboard2.prototype.getId = function() {
                      var config = this.config;
                      var dashboardId = config.id || this.element.getAttribute(Dashboard2.dashboardIdAttribute) || Dashboard2.findIdFromEmbedUrl(config.embedUrl);
                      if (typeof dashboardId !== "string" || dashboardId.length === 0) {
                        throw new Error("Dashboard id is required, but it was not found. You must provide an id either as part of embed configuration or as attribute '".concat(Dashboard2.dashboardIdAttribute, "'."));
                      }
                      return dashboardId;
                    };
                    Dashboard2.prototype.validate = function(baseConfig) {
                      var config = baseConfig;
                      var error = (0, powerbi_models_1.validateDashboardLoad)(config);
                      return error ? error : this.validatePageView(config.pageView);
                    };
                    Dashboard2.prototype.configChanged = function(isBootstrap) {
                      if (isBootstrap) {
                        return;
                      }
                      this.config.id = this.getId();
                    };
                    Dashboard2.prototype.getDefaultEmbedUrlEndpoint = function() {
                      return "dashboardEmbed";
                    };
                    Dashboard2.prototype.validatePageView = function(pageView) {
                      if (pageView && pageView !== "fitToWidth" && pageView !== "oneColumn" && pageView !== "actualSize") {
                        return [{ message: "pageView must be one of the followings: fitToWidth, oneColumn, actualSize" }];
                      }
                    };
                    Dashboard2.allowedEvents = ["tileClicked", "error"];
                    Dashboard2.dashboardIdAttribute = "powerbi-dashboard-id";
                    Dashboard2.typeAttribute = "powerbi-type";
                    Dashboard2.type = "Dashboard";
                    return Dashboard2;
                  }(embed_1.Embed)
                );
                exports2.Dashboard = Dashboard;
              }
            ),
            /***/
            "./src/embed.ts": (
              /*!**********************!*\
                !*** ./src/embed.ts ***!
                \**********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Embed = void 0;
                var models = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var sdkConfig = __webpack_require__2(
                  /*! ./config */
                  "./src/config.ts"
                );
                var errors_1 = __webpack_require__2(
                  /*! ./errors */
                  "./src/errors.ts"
                );
                var util_1 = __webpack_require__2(
                  /*! ./util */
                  "./src/util.ts"
                );
                var Embed = (
                  /** @class */
                  function() {
                    function Embed2(service, element, config, iframe, phasedRender, isBootstrap) {
                      this.allowedEvents = [];
                      if ((0, util_1.autoAuthInEmbedUrl)(config.embedUrl)) {
                        throw new Error(errors_1.EmbedUrlNotSupported);
                      }
                      Array.prototype.push.apply(this.allowedEvents, Embed2.allowedEvents);
                      this.eventHandlers = [];
                      this.service = service;
                      this.element = element;
                      this.iframe = iframe;
                      this.iframeLoaded = false;
                      this.embedtype = config.type.toLowerCase();
                      this.commands = [];
                      this.groups = [];
                      this.populateConfig(config, isBootstrap);
                      if ((0, util_1.isCreate)(this.embedtype)) {
                        this.setIframe(false, phasedRender, isBootstrap);
                      } else {
                        this.setIframe(true, phasedRender, isBootstrap);
                      }
                    }
                    Embed2.prototype.create = function() {
                      throw new Error("no create support");
                    };
                    Embed2.prototype.save = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.post("/report/save", null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_1 = _a.sent();
                              throw response_1.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Embed2.prototype.saveAs = function(saveAsParameters) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_2;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.post("/report/saveAs", saveAsParameters, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_2 = _a.sent();
                              throw response_2.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Embed2.prototype.getCorrelationId = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_3;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.get("/getCorrelationId", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_3 = _a.sent();
                              throw response_3.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Embed2.prototype.load = function(phasedRender) {
                      var _a;
                      return __awaiter(this, void 0, void 0, function() {
                        var path, headers, timeNow, response, response_4;
                        return __generator(this, function(_b) {
                          switch (_b.label) {
                            case 0:
                              if (!this.config.accessToken) {
                                console.debug("Power BI SDK iframe is loaded but powerbi.embed is not called yet.");
                                return [
                                  2
                                  /*return*/
                                ];
                              }
                              if (!this.iframeLoaded) {
                                console.debug("Power BI SDK is trying to post /report/load before iframe is ready.");
                                return [
                                  2
                                  /*return*/
                                ];
                              }
                              path = phasedRender && this.config.type === "report" ? this.phasedLoadPath : this.loadPath;
                              headers = {
                                uid: this.config.uniqueId,
                                sdkSessionId: this.service.getSdkSessionId(),
                                bootstrapped: this.config.bootstrapped,
                                sdkVersion: sdkConfig.default.version
                              };
                              if (!!((_a = this.eventHooks) === null || _a === void 0 ? void 0 : _a.accessTokenProvider)) {
                                headers.tokenProviderSupplied = true;
                              }
                              timeNow = /* @__PURE__ */ new Date();
                              if (this.lastLoadRequest && (0, util_1.getTimeDiffInMilliseconds)(this.lastLoadRequest, timeNow) < 100) {
                                console.debug("Power BI SDK sent more than two /report/load requests in the last 100ms interval.");
                                return [
                                  2
                                  /*return*/
                                ];
                              }
                              this.lastLoadRequest = timeNow;
                              _b.label = 1;
                            case 1:
                              _b.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post(path, this.config, headers, this.iframe.contentWindow)];
                            case 2:
                              response = _b.sent();
                              return [2, response.body];
                            case 3:
                              response_4 = _b.sent();
                              throw response_4.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Embed2.prototype.off = function(eventName, handler) {
                      var _this = this;
                      var fakeEvent = { name: eventName, type: null, id: null, value: null };
                      if (handler) {
                        (0, util_1.remove)(function(eventHandler) {
                          return eventHandler.test(fakeEvent) && eventHandler.handle === handler;
                        }, this.eventHandlers);
                        this.element.removeEventListener(eventName, handler);
                      } else {
                        var eventHandlersToRemove = this.eventHandlers.filter(function(eventHandler) {
                          return eventHandler.test(fakeEvent);
                        });
                        eventHandlersToRemove.forEach(function(eventHandlerToRemove) {
                          (0, util_1.remove)(function(eventHandler) {
                            return eventHandler === eventHandlerToRemove;
                          }, _this.eventHandlers);
                          _this.element.removeEventListener(eventName, eventHandlerToRemove.handle);
                        });
                      }
                    };
                    Embed2.prototype.on = function(eventName, handler) {
                      if (this.allowedEvents.indexOf(eventName) === -1) {
                        throw new Error("eventName must be one of ".concat(this.allowedEvents, ". You passed: ").concat(eventName));
                      }
                      this.eventHandlers.push({
                        test: function(event) {
                          return event.name === eventName;
                        },
                        handle: handler
                      });
                      this.element.addEventListener(eventName, handler);
                    };
                    Embed2.prototype.reload = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.load()];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Embed2.prototype.setAccessToken = function(accessToken) {
                      return __awaiter(this, void 0, void 0, function() {
                        var embedType, response, response_5;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if (!accessToken) {
                                throw new Error("Access token cannot be empty");
                              }
                              embedType = this.config.type;
                              embedType = embedType === "create" || embedType === "visual" || embedType === "qna" || embedType === "quickCreate" ? "report" : embedType;
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/" + embedType + "/token", accessToken, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              this.config.accessToken = accessToken;
                              this.element.setAttribute(Embed2.accessTokenAttribute, accessToken);
                              this.service.accessToken = accessToken;
                              return [2, response.body];
                            case 3:
                              response_5 = _a.sent();
                              throw response_5.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Embed2.prototype.getAccessToken = function(globalAccessToken) {
                      var accessToken = this.config.accessToken || this.element.getAttribute(Embed2.accessTokenAttribute) || globalAccessToken;
                      if (!accessToken) {
                        throw new Error("No access token was found for element. You must specify an access token directly on the element using attribute '".concat(Embed2.accessTokenAttribute, "' or specify a global token at: powerbi.accessToken."));
                      }
                      return accessToken;
                    };
                    Embed2.prototype.populateConfig = function(config, isBootstrap) {
                      var _this = this;
                      var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                      if (this.bootstrapConfig) {
                        this.config = (0, util_1.assign)({}, this.bootstrapConfig, config);
                        this.bootstrapConfig = null;
                      } else {
                        this.config = (0, util_1.assign)({}, config);
                      }
                      this.config.embedUrl = this.getEmbedUrl(isBootstrap);
                      this.config.groupId = this.getGroupId();
                      this.addLocaleToEmbedUrl(config);
                      this.config.uniqueId = this.getUniqueId();
                      var extensions = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.extensions;
                      this.commands = (_c = extensions === null || extensions === void 0 ? void 0 : extensions.commands) !== null && _c !== void 0 ? _c : [];
                      this.groups = (_d = extensions === null || extensions === void 0 ? void 0 : extensions.groups) !== null && _d !== void 0 ? _d : [];
                      this.initialLayoutType = (_g = (_f = (_e = this.config) === null || _e === void 0 ? void 0 : _e.settings) === null || _f === void 0 ? void 0 : _f.layoutType) !== null && _g !== void 0 ? _g : models.LayoutType.Master;
                      var extensionsArray = (_j = (_h = this.config) === null || _h === void 0 ? void 0 : _h.settings) === null || _j === void 0 ? void 0 : _j.extensions;
                      if (Array.isArray(extensionsArray)) {
                        this.commands = [];
                        extensionsArray.map(function(extension) {
                          if (extension === null || extension === void 0 ? void 0 : extension.command) {
                            _this.commands.push(extension.command);
                          }
                        });
                      }
                      if (isBootstrap) {
                        this.bootstrapConfig = this.config;
                        this.bootstrapConfig.bootstrapped = true;
                      } else {
                        this.config.accessToken = this.getAccessToken(this.service.accessToken);
                      }
                      this.eventHooks = this.config.eventHooks;
                      this.validateEventHooks(this.eventHooks);
                      delete this.config.eventHooks;
                      this.configChanged(isBootstrap);
                    };
                    Embed2.prototype.validateEventHooks = function(eventHooks) {
                      if (!eventHooks) {
                        return;
                      }
                      for (var key in eventHooks) {
                        if (eventHooks.hasOwnProperty(key) && typeof eventHooks[key] !== "function") {
                          throw new Error(key + " must be a function");
                        }
                      }
                      var applicationContextProvider = eventHooks.applicationContextProvider;
                      if (!!applicationContextProvider) {
                        if (this.embedtype.toLowerCase() !== "report") {
                          throw new Error("applicationContextProvider is only supported in report embed");
                        }
                        this.config.embedUrl = (0, util_1.addParamToUrl)(this.config.embedUrl, "registerQueryCallback", "true");
                      }
                      var accessTokenProvider = eventHooks.accessTokenProvider;
                      if (!!accessTokenProvider) {
                        if (["create", "quickcreate", "report"].indexOf(this.embedtype.toLowerCase()) === -1 || this.config.tokenType !== models.TokenType.Aad) {
                          throw new Error("accessTokenProvider is only supported in report SaaS embed");
                        }
                      }
                    };
                    Embed2.prototype.addLocaleToEmbedUrl = function(config) {
                      if (!config.settings) {
                        return;
                      }
                      var localeSettings = config.settings.localeSettings;
                      if (localeSettings && localeSettings.language) {
                        this.config.embedUrl = (0, util_1.addParamToUrl)(this.config.embedUrl, "language", localeSettings.language);
                      }
                      if (localeSettings && localeSettings.formatLocale) {
                        this.config.embedUrl = (0, util_1.addParamToUrl)(this.config.embedUrl, "formatLocale", localeSettings.formatLocale);
                      }
                    };
                    Embed2.prototype.getEmbedUrl = function(isBootstrap) {
                      var embedUrl = this.config.embedUrl || this.element.getAttribute(Embed2.embedUrlAttribute);
                      if (isBootstrap && !embedUrl) {
                        embedUrl = this.getDefaultEmbedUrl(this.config.hostname);
                      }
                      if (typeof embedUrl !== "string" || embedUrl.length === 0) {
                        throw new Error("Embed Url is required, but it was not found. You must provide an embed url either as part of embed configuration or as attribute '".concat(Embed2.embedUrlAttribute, "'."));
                      }
                      return embedUrl;
                    };
                    Embed2.prototype.getDefaultEmbedUrl = function(hostname) {
                      if (!hostname) {
                        hostname = Embed2.defaultEmbedHostName;
                      }
                      var endpoint = this.getDefaultEmbedUrlEndpoint();
                      hostname = hostname.toLowerCase().trim();
                      if (hostname.indexOf("https://") === 0) {
                        return "".concat(hostname, "/").concat(endpoint);
                      }
                      return "https://".concat(hostname, "/").concat(endpoint);
                    };
                    Embed2.prototype.getUniqueId = function() {
                      return this.config.uniqueId || this.element.getAttribute(Embed2.nameAttribute) || (0, util_1.createRandomString)();
                    };
                    Embed2.prototype.getGroupId = function() {
                      return this.config.groupId || Embed2.findGroupIdFromEmbedUrl(this.config.embedUrl);
                    };
                    Embed2.prototype.fullscreen = function() {
                      var requestFullScreen = this.iframe.requestFullscreen || this.iframe.msRequestFullscreen || this.iframe.mozRequestFullScreen || this.iframe.webkitRequestFullscreen;
                      requestFullScreen.call(this.iframe);
                    };
                    Embed2.prototype.exitFullscreen = function() {
                      if (!this.isFullscreen(this.iframe)) {
                        return;
                      }
                      var exitFullscreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
                      exitFullscreen.call(document);
                    };
                    Embed2.prototype.isFullscreen = function(iframe) {
                      var options = ["fullscreenElement", "webkitFullscreenElement", "mozFullscreenScreenElement", "msFullscreenElement"];
                      return options.some(function(option) {
                        return document[option] === iframe;
                      });
                    };
                    Embed2.prototype.setIframe = function(isLoad, phasedRender, isBootstrap) {
                      var _this = this;
                      if (!this.iframe) {
                        var iframeContent = document.createElement("iframe");
                        var embedUrl = this.config.uniqueId ? (0, util_1.addParamToUrl)(this.config.embedUrl, "uid", this.config.uniqueId) : this.config.embedUrl;
                        if (!(0, util_1.validateEmbedUrl)(embedUrl)) {
                          throw new Error(errors_1.invalidEmbedUrlErrorMessage);
                        }
                        iframeContent.style.width = "100%";
                        iframeContent.style.height = "100%";
                        iframeContent.setAttribute("src", embedUrl);
                        iframeContent.setAttribute("scrolling", "no");
                        iframeContent.setAttribute("allowfullscreen", "true");
                        var node = this.element;
                        while (node.firstChild) {
                          node.removeChild(node.firstChild);
                        }
                        node.appendChild(iframeContent);
                        this.iframe = node.firstChild;
                      }
                      if (isLoad) {
                        if (!isBootstrap) {
                          var errors = this.validate(this.config);
                          if (errors) {
                            throw errors;
                          }
                        }
                        this.iframe.addEventListener("load", function() {
                          _this.iframeLoaded = true;
                          _this.load(phasedRender);
                        }, false);
                        if (this.service.getNumberOfComponents() <= Embed2.maxFrontLoadTimes) {
                          this.frontLoadHandler = function() {
                            _this.frontLoadSendConfig(_this.config);
                          };
                          this.element.addEventListener("ready", this.frontLoadHandler, false);
                        }
                      } else {
                        this.iframe.addEventListener("load", function() {
                          return _this.create();
                        }, false);
                      }
                    };
                    Embed2.prototype.setComponentTitle = function(title) {
                      if (!this.iframe) {
                        return;
                      }
                      if (title == null) {
                        this.iframe.removeAttribute("title");
                      } else {
                        this.iframe.setAttribute("title", title);
                      }
                    };
                    Embed2.prototype.setComponentTabIndex = function(tabIndex) {
                      if (!this.element) {
                        return;
                      }
                      this.element.setAttribute("tabindex", tabIndex == null ? "0" : tabIndex.toString());
                    };
                    Embed2.prototype.removeComponentTabIndex = function(_tabIndex) {
                      if (!this.element) {
                        return;
                      }
                      this.element.removeAttribute("tabindex");
                    };
                    Embed2.findGroupIdFromEmbedUrl = function(url) {
                      var groupIdRegEx = /groupId="?([^&]+)"?/;
                      var groupIdMatch = url.match(groupIdRegEx);
                      var groupId;
                      if (groupIdMatch) {
                        groupId = groupIdMatch[1];
                      }
                      return groupId;
                    };
                    Embed2.prototype.frontLoadSendConfig = function(config) {
                      return __awaiter(this, void 0, void 0, function() {
                        var errors, response, response_6;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if (!config.accessToken) {
                                return [
                                  2
                                  /*return*/
                                ];
                              }
                              errors = this.validate(config);
                              if (errors) {
                                throw errors;
                              }
                              if (this.iframe.contentWindow == null) {
                                return [
                                  2
                                  /*return*/
                                ];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/frontload/config", config, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_6 = _a.sent();
                              throw response_6.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Embed2.allowedEvents = ["loaded", "saved", "rendered", "saveAsTriggered", "error", "dataSelected", "buttonClicked", "info"];
                    Embed2.accessTokenAttribute = "powerbi-access-token";
                    Embed2.embedUrlAttribute = "powerbi-embed-url";
                    Embed2.nameAttribute = "powerbi-name";
                    Embed2.typeAttribute = "powerbi-type";
                    Embed2.defaultEmbedHostName = "https://app.powerbi.com";
                    Embed2.maxFrontLoadTimes = 2;
                    return Embed2;
                  }()
                );
                exports2.Embed = Embed;
              }
            ),
            /***/
            "./src/errors.ts": (
              /*!***********************!*\
                !*** ./src/errors.ts ***!
                \***********************/
              /***/
              (__unused_webpack_module, exports2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.invalidEmbedUrlErrorMessage = exports2.EmbedUrlNotSupported = exports2.APINotSupportedForRDLError = void 0;
                exports2.APINotSupportedForRDLError = "This API is currently not supported for RDL reports";
                exports2.EmbedUrlNotSupported = "Embed URL is invalid for this scenario. Please use Power BI REST APIs to get the valid URL";
                exports2.invalidEmbedUrlErrorMessage = "Invalid embed URL detected. Either URL hostname or protocol are invalid. Please use Power BI REST APIs to get the valid URL";
              }
            ),
            /***/
            "./src/factories.ts": (
              /*!**************************!*\
                !*** ./src/factories.ts ***!
                \**************************/
              /***/
              (__unused_webpack_module, exports2, __webpack_require__2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.routerFactory = exports2.wpmpFactory = exports2.hpmFactory = void 0;
                var window_post_message_proxy_1 = __webpack_require__2(
                  /*! window-post-message-proxy */
                  "./node_modules/window-post-message-proxy/dist/windowPostMessageProxy.js"
                );
                var http_post_message_1 = __webpack_require__2(
                  /*! http-post-message */
                  "./node_modules/http-post-message/dist/httpPostMessage.js"
                );
                var powerbi_router_1 = __webpack_require__2(
                  /*! powerbi-router */
                  "./node_modules/powerbi-router/dist/router.js"
                );
                var config_1 = __webpack_require__2(
                  /*! ./config */
                  "./src/config.ts"
                );
                var hpmFactory = function(wpmp, defaultTargetWindow, sdkVersion, sdkType, sdkWrapperVersion) {
                  if (sdkVersion === void 0) {
                    sdkVersion = config_1.default.version;
                  }
                  if (sdkType === void 0) {
                    sdkType = config_1.default.type;
                  }
                  return new http_post_message_1.HttpPostMessage(wpmp, {
                    "x-sdk-type": sdkType,
                    "x-sdk-version": sdkVersion,
                    "x-sdk-wrapper-version": sdkWrapperVersion
                  }, defaultTargetWindow);
                };
                exports2.hpmFactory = hpmFactory;
                var wpmpFactory = function(name, logMessages, eventSourceOverrideWindow) {
                  return new window_post_message_proxy_1.WindowPostMessageProxy({
                    processTrackingProperties: {
                      addTrackingProperties: http_post_message_1.HttpPostMessage.addTrackingProperties,
                      getTrackingProperties: http_post_message_1.HttpPostMessage.getTrackingProperties
                    },
                    isErrorMessage: http_post_message_1.HttpPostMessage.isErrorMessage,
                    suppressWarnings: true,
                    name,
                    logMessages,
                    eventSourceOverrideWindow
                  });
                };
                exports2.wpmpFactory = wpmpFactory;
                var routerFactory = function(wpmp) {
                  return new powerbi_router_1.Router(wpmp);
                };
                exports2.routerFactory = routerFactory;
              }
            ),
            /***/
            "./src/page.ts": (
              /*!*********************!*\
                !*** ./src/page.ts ***!
                \*********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Page = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var visualDescriptor_1 = __webpack_require__2(
                  /*! ./visualDescriptor */
                  "./src/visualDescriptor.ts"
                );
                var util_1 = __webpack_require__2(
                  /*! ./util */
                  "./src/util.ts"
                );
                var errors_1 = __webpack_require__2(
                  /*! ./errors */
                  "./src/errors.ts"
                );
                var Page = (
                  /** @class */
                  function() {
                    function Page2(report, name, displayName, isActivePage, visibility, defaultSize, defaultDisplayOption, mobileSize, background, wallpaper) {
                      this.report = report;
                      this.name = name;
                      this.displayName = displayName;
                      this.isActive = isActivePage;
                      this.visibility = visibility;
                      this.defaultSize = defaultSize;
                      this.mobileSize = mobileSize;
                      this.defaultDisplayOption = defaultDisplayOption;
                      this.background = background;
                      this.wallpaper = wallpaper;
                    }
                    Page2.prototype.getSmartNarrativeInsights = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.report.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.get("/report/pages/".concat(this.name, "/smartNarrativeInsights"), { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_1 = _a.sent();
                              throw response_1.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.getFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_2;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.report.service.hpm.get("/report/pages/".concat(this.name, "/filters"), { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_2 = _a.sent();
                              throw response_2.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.updateFilters = function(operation, filters) {
                      return __awaiter(this, void 0, void 0, function() {
                        var updateFiltersRequest, response_3;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              updateFiltersRequest = {
                                filtersOperation: operation,
                                filters
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.post("/report/pages/".concat(this.name, "/filters"), updateFiltersRequest, { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_3 = _a.sent();
                              throw response_3.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.removeFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.updateFilters(powerbi_models_1.FiltersOperations.RemoveAll)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Page2.prototype.setFilters = function(filters) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response_4;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.report.service.hpm.put("/report/pages/".concat(this.name, "/filters"), filters, { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                            case 2:
                              response_4 = _a.sent();
                              throw response_4.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.delete = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_5;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.report.service.hpm.delete("/report/pages/".concat(this.name), {}, { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_5 = _a.sent();
                              throw response_5.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.setActive = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var page, response_6;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              page = {
                                name: this.name,
                                displayName: null,
                                isActive: true
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.put("/report/pages/active", page, { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_6 = _a.sent();
                              throw response_6.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.setDisplayName = function(displayName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var page, response_7;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              page = {
                                name: this.name,
                                displayName
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.put("/report/pages/".concat(this.name, "/name"), page, { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_7 = _a.sent();
                              throw response_7.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.getVisuals = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_8;
                        var _this = this;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.report.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.get("/report/pages/".concat(this.name, "/visuals"), { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body.map(function(visual) {
                                return new visualDescriptor_1.VisualDescriptor(_this, visual.name, visual.title, visual.type, visual.layout);
                              })];
                            case 3:
                              response_8 = _a.sent();
                              throw response_8.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.getVisualByName = function(visualName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, visual, response_9;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.report.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.get("/report/pages/".concat(this.name, "/visuals"), { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              visual = response.body.find(function(v) {
                                return v.name === visualName;
                              });
                              if (!visual) {
                                return [2, Promise.reject(powerbi_models_1.CommonErrorCodes.NotFound)];
                              }
                              return [2, new visualDescriptor_1.VisualDescriptor(this, visual.name, visual.title, visual.type, visual.layout)];
                            case 3:
                              response_9 = _a.sent();
                              throw response_9.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.setVisualDisplayState = function(visualName, displayState) {
                      return __awaiter(this, void 0, void 0, function() {
                        var pageName, report;
                        return __generator(this, function(_a) {
                          pageName = this.name;
                          report = this.report;
                          return [2, report.setVisualDisplayState(pageName, visualName, displayState)];
                        });
                      });
                    };
                    Page2.prototype.moveVisual = function(visualName, x, y, z) {
                      return __awaiter(this, void 0, void 0, function() {
                        var pageName, report;
                        return __generator(this, function(_a) {
                          pageName = this.name;
                          report = this.report;
                          return [2, report.moveVisual(pageName, visualName, x, y, z)];
                        });
                      });
                    };
                    Page2.prototype.resizeVisual = function(visualName, width, height) {
                      return __awaiter(this, void 0, void 0, function() {
                        var pageName, report;
                        return __generator(this, function(_a) {
                          pageName = this.name;
                          report = this.report;
                          return [2, report.resizeVisual(pageName, visualName, width, height)];
                        });
                      });
                    };
                    Page2.prototype.resizePage = function(pageSizeType, width, height) {
                      return __awaiter(this, void 0, void 0, function() {
                        var report;
                        return __generator(this, function(_a) {
                          if (!this.isActive) {
                            return [2, Promise.reject("Cannot resize the page. Only the active page can be resized")];
                          }
                          report = this.report;
                          return [2, report.resizeActivePage(pageSizeType, width, height)];
                        });
                      });
                    };
                    Page2.prototype.getSlicers = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_10;
                        var _this = this;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.report.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.get("/report/pages/".concat(this.name, "/visuals"), { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body.filter(function(visual) {
                                return visual.type === "slicer";
                              }).map(function(visual) {
                                return new visualDescriptor_1.VisualDescriptor(_this, visual.name, visual.title, visual.type, visual.layout);
                              })];
                            case 3:
                              response_10 = _a.sent();
                              throw response_10.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Page2.prototype.hasLayout = function(layoutType) {
                      return __awaiter(this, void 0, void 0, function() {
                        var layoutTypeEnum, response, response_11;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.report.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              layoutTypeEnum = powerbi_models_1.LayoutType[layoutType];
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.report.service.hpm.get("/report/pages/".concat(this.name, "/layoutTypes/").concat(layoutTypeEnum), { uid: this.report.config.uniqueId }, this.report.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_11 = _a.sent();
                              throw response_11.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    return Page2;
                  }()
                );
                exports2.Page = Page;
              }
            ),
            /***/
            "./src/qna.ts": (
              /*!********************!*\
                !*** ./src/qna.ts ***!
                \********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Qna = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var embed_1 = __webpack_require__2(
                  /*! ./embed */
                  "./src/embed.ts"
                );
                var Qna = (
                  /** @class */
                  function(_super) {
                    __extends(Qna2, _super);
                    function Qna2(service, element, config, phasedRender, isBootstrap) {
                      var _this = _super.call(
                        this,
                        service,
                        element,
                        config,
                        /* iframe */
                        void 0,
                        phasedRender,
                        isBootstrap
                      ) || this;
                      _this.loadPath = "/qna/load";
                      _this.phasedLoadPath = "/qna/prepare";
                      Array.prototype.push.apply(_this.allowedEvents, Qna2.allowedEvents);
                      return _this;
                    }
                    Qna2.prototype.getId = function() {
                      return null;
                    };
                    Qna2.prototype.setQuestion = function(question) {
                      return __awaiter(this, void 0, void 0, function() {
                        var qnaData, response_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              qnaData = {
                                question
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/qna/interpret", qnaData, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_1 = _a.sent();
                              throw response_1.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Qna2.prototype.configChanged = function(_isBootstrap) {
                    };
                    Qna2.prototype.getDefaultEmbedUrlEndpoint = function() {
                      return "qnaEmbed";
                    };
                    Qna2.prototype.validate = function(config) {
                      return (0, powerbi_models_1.validateLoadQnaConfiguration)(config);
                    };
                    Qna2.type = "Qna";
                    Qna2.allowedEvents = ["loaded", "visualRendered"];
                    return Qna2;
                  }(embed_1.Embed)
                );
                exports2.Qna = Qna;
              }
            ),
            /***/
            "./src/quickCreate.ts": (
              /*!****************************!*\
                !*** ./src/quickCreate.ts ***!
                \****************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.QuickCreate = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var embed_1 = __webpack_require__2(
                  /*! ./embed */
                  "./src/embed.ts"
                );
                var QuickCreate = (
                  /** @class */
                  function(_super) {
                    __extends(QuickCreate2, _super);
                    function QuickCreate2(service, element, config, phasedRender, isBootstrap) {
                      var _this = _super.call(
                        this,
                        service,
                        element,
                        config,
                        /* iframe */
                        void 0,
                        phasedRender,
                        isBootstrap
                      ) || this;
                      service.router.post("/reports/".concat(_this.config.uniqueId, "/eventHooks/:eventName"), function(req, _res) {
                        return __awaiter(_this, void 0, void 0, function() {
                          var _a;
                          var _b;
                          return __generator(this, function(_c) {
                            switch (_c.label) {
                              case 0:
                                _a = req.params.eventName;
                                switch (_a) {
                                  case "newAccessToken":
                                    return [3, 1];
                                }
                                return [3, 3];
                              case 1:
                                req.body = req.body || {};
                                req.body.report = this;
                                return [4, service.invokeSDKHook((_b = this.eventHooks) === null || _b === void 0 ? void 0 : _b.accessTokenProvider, req, _res)];
                              case 2:
                                _c.sent();
                                return [3, 4];
                              case 3:
                                return [3, 4];
                              case 4:
                                return [
                                  2
                                  /*return*/
                                ];
                            }
                          });
                        });
                      });
                      return _this;
                    }
                    QuickCreate2.prototype.getId = function() {
                      return null;
                    };
                    QuickCreate2.prototype.validate = function(config) {
                      return (0, powerbi_models_1.validateQuickCreate)(config);
                    };
                    QuickCreate2.prototype.configChanged = function(isBootstrap) {
                      if (isBootstrap) {
                        return;
                      }
                      this.createConfig = this.config;
                    };
                    QuickCreate2.prototype.getDefaultEmbedUrlEndpoint = function() {
                      return "quickCreate";
                    };
                    QuickCreate2.prototype.create = function() {
                      var _a;
                      return __awaiter(this, void 0, void 0, function() {
                        var errors, headers, response, response_1;
                        return __generator(this, function(_b) {
                          switch (_b.label) {
                            case 0:
                              errors = (0, powerbi_models_1.validateQuickCreate)(this.createConfig);
                              if (errors) {
                                throw errors;
                              }
                              _b.label = 1;
                            case 1:
                              _b.trys.push([1, 3, , 4]);
                              headers = {
                                uid: this.config.uniqueId,
                                sdkSessionId: this.service.getSdkSessionId()
                              };
                              if (!!((_a = this.eventHooks) === null || _a === void 0 ? void 0 : _a.accessTokenProvider)) {
                                headers.tokenProviderSupplied = true;
                              }
                              return [4, this.service.hpm.post("/quickcreate", this.createConfig, headers, this.iframe.contentWindow)];
                            case 2:
                              response = _b.sent();
                              return [2, response.body];
                            case 3:
                              response_1 = _b.sent();
                              throw response_1.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    return QuickCreate2;
                  }(embed_1.Embed)
                );
                exports2.QuickCreate = QuickCreate;
              }
            ),
            /***/
            "./src/report.ts": (
              /*!***********************!*\
                !*** ./src/report.ts ***!
                \***********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                  return to.concat(ar || Array.prototype.slice.call(from));
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Report = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var embed_1 = __webpack_require__2(
                  /*! ./embed */
                  "./src/embed.ts"
                );
                var util_1 = __webpack_require__2(
                  /*! ./util */
                  "./src/util.ts"
                );
                var errors_1 = __webpack_require__2(
                  /*! ./errors */
                  "./src/errors.ts"
                );
                var page_1 = __webpack_require__2(
                  /*! ./page */
                  "./src/page.ts"
                );
                var bookmarksManager_1 = __webpack_require__2(
                  /*! ./bookmarksManager */
                  "./src/bookmarksManager.ts"
                );
                var Report = (
                  /** @class */
                  function(_super) {
                    __extends(Report2, _super);
                    function Report2(service, element, baseConfig, phasedRender, isBootstrap, iframe) {
                      var _this = this;
                      var config = baseConfig;
                      _this = _super.call(this, service, element, config, iframe, phasedRender, isBootstrap) || this;
                      _this.loadPath = "/report/load";
                      _this.phasedLoadPath = "/report/prepare";
                      Array.prototype.push.apply(_this.allowedEvents, Report2.allowedEvents);
                      _this.bookmarksManager = new bookmarksManager_1.BookmarksManager(service, config, _this.iframe);
                      service.router.post("/reports/".concat(_this.config.uniqueId, "/eventHooks/:eventName"), function(req, _res) {
                        return __awaiter(_this, void 0, void 0, function() {
                          var _a;
                          var _b, _c;
                          return __generator(this, function(_d) {
                            switch (_d.label) {
                              case 0:
                                _a = req.params.eventName;
                                switch (_a) {
                                  case "preQuery":
                                    return [3, 1];
                                  case "newAccessToken":
                                    return [3, 3];
                                }
                                return [3, 5];
                              case 1:
                                req.body = req.body || {};
                                req.body.report = this;
                                return [4, service.invokeSDKHook((_b = this.eventHooks) === null || _b === void 0 ? void 0 : _b.applicationContextProvider, req, _res)];
                              case 2:
                                _d.sent();
                                return [3, 6];
                              case 3:
                                req.body = req.body || {};
                                req.body.report = this;
                                return [4, service.invokeSDKHook((_c = this.eventHooks) === null || _c === void 0 ? void 0 : _c.accessTokenProvider, req, _res)];
                              case 4:
                                _d.sent();
                                return [3, 6];
                              case 5:
                                return [3, 6];
                              case 6:
                                return [
                                  2
                                  /*return*/
                                ];
                            }
                          });
                        });
                      });
                      return _this;
                    }
                    Report2.findIdFromEmbedUrl = function(url) {
                      var reportIdRegEx = /reportId="?([^&]+)"?/;
                      var reportIdMatch = url.match(reportIdRegEx);
                      var reportId;
                      if (reportIdMatch) {
                        reportId = reportIdMatch[1];
                      }
                      return reportId;
                    };
                    Report2.prototype.render = function(config) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.post("/report/render", config, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_1 = _a.sent();
                              throw response_1.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.addPage = function(displayName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var request, response, page, response_2;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              request = {
                                displayName
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/addPage", request, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              page = response.body;
                              return [2, new page_1.Page(this, page.name, page.displayName, page.isActive, page.visibility, page.defaultSize, page.defaultDisplayOption)];
                            case 3:
                              response_2 = _a.sent();
                              throw response_2.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.deletePage = function(pageName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_3;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.delete("/report/pages/".concat(pageName), {}, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_3 = _a.sent();
                              throw response_3.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.renamePage = function(pageName, displayName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var page, response, response_4;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              page = {
                                name: pageName,
                                displayName
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.put("/report/pages/".concat(pageName, "/name"), page, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_4 = _a.sent();
                              throw response_4.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.getFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_5;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get("/report/filters", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_5 = _a.sent();
                              throw response_5.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.updateFilters = function(operation, filters) {
                      return __awaiter(this, void 0, void 0, function() {
                        var updateFiltersRequest, response_6;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              updateFiltersRequest = {
                                filtersOperation: operation,
                                filters
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/filters", updateFiltersRequest, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_6 = _a.sent();
                              throw response_6.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.removeFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                            return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                          }
                          return [2, this.updateFilters(powerbi_models_1.FiltersOperations.RemoveAll)];
                        });
                      });
                    };
                    Report2.prototype.setFilters = function(filters) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response_7;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.put("/report/filters", filters, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_7 = _a.sent();
                              throw response_7.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.getId = function() {
                      var config = this.config;
                      var reportId = config.id || this.element.getAttribute(Report2.reportIdAttribute) || Report2.findIdFromEmbedUrl(config.embedUrl);
                      if (typeof reportId !== "string" || reportId.length === 0) {
                        throw new Error("Report id is required, but it was not found. You must provide an id either as part of embed configuration or as attribute '".concat(Report2.reportIdAttribute, "'."));
                      }
                      return reportId;
                    };
                    Report2.prototype.getPages = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_8;
                        var _this = this;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get("/report/pages", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body.map(function(page) {
                                return new page_1.Page(_this, page.name, page.displayName, page.isActive, page.visibility, page.defaultSize, page.defaultDisplayOption, page.mobileSize, page.background, page.wallpaper);
                              })];
                            case 3:
                              response_8 = _a.sent();
                              throw response_8.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.getPageByName = function(pageName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, page, response_9;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get("/report/pages", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              page = response.body.find(function(p) {
                                return p.name === pageName;
                              });
                              if (!page) {
                                return [2, Promise.reject(powerbi_models_1.CommonErrorCodes.NotFound)];
                              }
                              return [2, new page_1.Page(this, page.name, page.displayName, page.isActive, page.visibility, page.defaultSize, page.defaultDisplayOption, page.mobileSize, page.background, page.wallpaper)];
                            case 3:
                              response_9 = _a.sent();
                              throw response_9.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.getActivePage = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, activePage, response_10;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get("/report/pages", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              activePage = response.body.find(function(page) {
                                return page.isActive;
                              });
                              return [2, new page_1.Page(this, activePage.name, activePage.displayName, activePage.isActive, activePage.visibility, activePage.defaultSize, activePage.defaultDisplayOption, activePage.mobileSize, activePage.background, activePage.wallpaper)];
                            case 3:
                              response_10 = _a.sent();
                              throw response_10.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.page = function(name, displayName, isActive, visibility) {
                      return new page_1.Page(this, name, displayName, isActive, visibility);
                    };
                    Report2.prototype.print = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_11;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/print", null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_11 = _a.sent();
                              throw response_11.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.setPage = function(pageName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var page, response_12;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              page = {
                                name: pageName,
                                displayName: null,
                                isActive: true
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.put("/report/pages/active", page, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_12 = _a.sent();
                              throw response_12.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.updateSettings = function(settings) {
                      var _a, _b;
                      return __awaiter(this, void 0, void 0, function() {
                        var response, extension, extensionsArray, response_13;
                        var _this = this;
                        return __generator(this, function(_c) {
                          switch (_c.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl) && settings.customLayout != null) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _c.label = 1;
                            case 1:
                              _c.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.patch("/report/settings", settings, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _c.sent();
                              extension = settings === null || settings === void 0 ? void 0 : settings.extensions;
                              this.commands = (_a = extension === null || extension === void 0 ? void 0 : extension.commands) !== null && _a !== void 0 ? _a : this.commands;
                              this.groups = (_b = extension === null || extension === void 0 ? void 0 : extension.groups) !== null && _b !== void 0 ? _b : this.groups;
                              extensionsArray = settings === null || settings === void 0 ? void 0 : settings.extensions;
                              if (Array.isArray(extensionsArray)) {
                                this.commands = [];
                                extensionsArray.map(function(extensionElement) {
                                  if (extensionElement === null || extensionElement === void 0 ? void 0 : extensionElement.command) {
                                    _this.commands.push(extensionElement.command);
                                  }
                                });
                              }
                              return [2, response];
                            case 3:
                              response_13 = _c.sent();
                              throw response_13.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.validate = function(config) {
                      if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                        return (0, powerbi_models_1.validatePaginatedReportLoad)(config);
                      }
                      return (0, powerbi_models_1.validateReportLoad)(config);
                    };
                    Report2.prototype.configChanged = function(isBootstrap) {
                      var config = this.config;
                      if (this.isMobileSettings(config.settings)) {
                        config.embedUrl = (0, util_1.addParamToUrl)(config.embedUrl, "isMobile", "true");
                      }
                      var filterPaneEnabledAttribute = this.element.getAttribute(Report2.filterPaneEnabledAttribute);
                      var navContentPaneEnabledAttribute = this.element.getAttribute(Report2.navContentPaneEnabledAttribute);
                      var elementAttrSettings = {
                        filterPaneEnabled: filterPaneEnabledAttribute == null ? void 0 : filterPaneEnabledAttribute !== "false",
                        navContentPaneEnabled: navContentPaneEnabledAttribute == null ? void 0 : navContentPaneEnabledAttribute !== "false"
                      };
                      this.config.settings = (0, util_1.assign)({}, elementAttrSettings, config.settings);
                      if (isBootstrap) {
                        return;
                      }
                      config.id = this.getId();
                    };
                    Report2.prototype.getDefaultEmbedUrlEndpoint = function() {
                      return "reportEmbed";
                    };
                    Report2.prototype.switchMode = function(viewMode) {
                      return __awaiter(this, void 0, void 0, function() {
                        var newMode, url, response, response_14;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if (typeof viewMode === "string") {
                                newMode = viewMode;
                              } else {
                                newMode = this.viewModeToString(viewMode);
                              }
                              url = "/report/switchMode/" + newMode;
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post(url, null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_14 = _a.sent();
                              throw response_14.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.refresh = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_15;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/refresh", null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_15 = _a.sent();
                              throw response_15.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.isSaved = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              return [4, (0, util_1.isSavedInternal)(this.service.hpm, this.config.uniqueId, this.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.applyTheme = function(theme) {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              return [4, this.applyThemeInternal(theme)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.resetTheme = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              return [4, this.applyThemeInternal({})];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.getTheme = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_16;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get("/report/theme", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_16 = _a.sent();
                              throw response_16.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.resetPersistentFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response_17;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.delete("/report/userState", null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                            case 2:
                              response_17 = _a.sent();
                              throw response_17.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.savePersistentFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response_18;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.post("/report/userState", null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                            case 2:
                              response_18 = _a.sent();
                              throw response_18.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.arePersistentFiltersApplied = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_19;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.get("/report/isUserStateApplied", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_19 = _a.sent();
                              throw response_19.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.removeContextMenuCommand = function(commandName, contextMenuTitle) {
                      return __awaiter(this, void 0, void 0, function() {
                        var commandCopy, indexOfCommand, newSetting;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              commandCopy = JSON.parse(JSON.stringify(this.commands));
                              indexOfCommand = this.findCommandMenuIndex("visualContextMenu", commandCopy, commandName, contextMenuTitle);
                              if (indexOfCommand === -1) {
                                throw powerbi_models_1.CommonErrorCodes.NotFound;
                              }
                              delete commandCopy[indexOfCommand].extend.visualContextMenu;
                              newSetting = {
                                extensions: {
                                  commands: commandCopy,
                                  groups: this.groups
                                }
                              };
                              return [4, this.updateSettings(newSetting)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.addContextMenuCommand = function(commandName, commandTitle, contextMenuTitle, menuLocation, visualName, visualType, groupName) {
                      if (contextMenuTitle === void 0) {
                        contextMenuTitle = commandTitle;
                      }
                      if (menuLocation === void 0) {
                        menuLocation = powerbi_models_1.MenuLocation.Bottom;
                      }
                      if (visualName === void 0) {
                        visualName = void 0;
                      }
                      if (groupName === void 0) {
                        groupName = void 0;
                      }
                      return __awaiter(this, void 0, void 0, function() {
                        var newCommands, newSetting;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              newCommands = this.createMenuCommand("visualContextMenu", commandName, commandTitle, contextMenuTitle, menuLocation, visualName, visualType, groupName);
                              newSetting = {
                                extensions: {
                                  commands: newCommands,
                                  groups: this.groups
                                }
                              };
                              return [4, this.updateSettings(newSetting)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.removeOptionsMenuCommand = function(commandName, optionsMenuTitle) {
                      return __awaiter(this, void 0, void 0, function() {
                        var commandCopy, indexOfCommand, newSetting;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              commandCopy = JSON.parse(JSON.stringify(this.commands));
                              indexOfCommand = this.findCommandMenuIndex("visualOptionsMenu", commandCopy, commandName, optionsMenuTitle);
                              if (indexOfCommand === -1) {
                                throw powerbi_models_1.CommonErrorCodes.NotFound;
                              }
                              delete commandCopy[indexOfCommand].extend.visualOptionsMenu;
                              delete commandCopy[indexOfCommand].icon;
                              newSetting = {
                                extensions: {
                                  commands: commandCopy,
                                  groups: this.groups
                                }
                              };
                              return [4, this.updateSettings(newSetting)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.addOptionsMenuCommand = function(commandName, commandTitle, optionsMenuTitle, menuLocation, visualName, visualType, groupName, commandIcon) {
                      if (optionsMenuTitle === void 0) {
                        optionsMenuTitle = commandTitle;
                      }
                      if (menuLocation === void 0) {
                        menuLocation = powerbi_models_1.MenuLocation.Bottom;
                      }
                      if (visualName === void 0) {
                        visualName = void 0;
                      }
                      if (visualType === void 0) {
                        visualType = void 0;
                      }
                      if (groupName === void 0) {
                        groupName = void 0;
                      }
                      if (commandIcon === void 0) {
                        commandIcon = void 0;
                      }
                      return __awaiter(this, void 0, void 0, function() {
                        var newCommands, newSetting;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              newCommands = this.createMenuCommand("visualOptionsMenu", commandName, commandTitle, optionsMenuTitle, menuLocation, visualName, visualType, groupName, commandIcon);
                              newSetting = {
                                extensions: {
                                  commands: newCommands,
                                  groups: this.groups
                                }
                              };
                              return [4, this.updateSettings(newSetting)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.setVisualDisplayState = function(pageName, visualName, displayState) {
                      return __awaiter(this, void 0, void 0, function() {
                        var visualLayout, newSettings;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.validateVisual(pageName, visualName)];
                            case 1:
                              _a.sent();
                              visualLayout = {
                                displayState: {
                                  mode: displayState
                                }
                              };
                              newSettings = this.buildLayoutSettingsObject(pageName, visualName, visualLayout);
                              return [2, this.updateSettings(newSettings)];
                          }
                        });
                      });
                    };
                    Report2.prototype.resizeVisual = function(pageName, visualName, width, height) {
                      return __awaiter(this, void 0, void 0, function() {
                        var visualLayout, newSettings;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.validateVisual(pageName, visualName)];
                            case 1:
                              _a.sent();
                              visualLayout = {
                                width,
                                height
                              };
                              newSettings = this.buildLayoutSettingsObject(pageName, visualName, visualLayout);
                              return [2, this.updateSettings(newSettings)];
                          }
                        });
                      });
                    };
                    Report2.prototype.resizeActivePage = function(pageSizeType, width, height) {
                      return __awaiter(this, void 0, void 0, function() {
                        var pageSize, newSettings;
                        return __generator(this, function(_a) {
                          pageSize = {
                            type: pageSizeType,
                            width,
                            height
                          };
                          newSettings = {
                            layoutType: powerbi_models_1.LayoutType.Custom,
                            customLayout: {
                              pageSize
                            }
                          };
                          return [2, this.updateSettings(newSettings)];
                        });
                      });
                    };
                    Report2.prototype.moveVisual = function(pageName, visualName, x, y, z) {
                      return __awaiter(this, void 0, void 0, function() {
                        var visualLayout, newSettings;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.validateVisual(pageName, visualName)];
                            case 1:
                              _a.sent();
                              visualLayout = {
                                x,
                                y,
                                z
                              };
                              newSettings = this.buildLayoutSettingsObject(pageName, visualName, visualLayout);
                              return [2, this.updateSettings(newSettings)];
                          }
                        });
                      });
                    };
                    Report2.prototype.switchLayout = function(layoutType) {
                      return __awaiter(this, void 0, void 0, function() {
                        var isInitialMobileSettings, isPassedMobileSettings, newSetting, response;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              isInitialMobileSettings = this.isMobileSettings({ layoutType: this.initialLayoutType });
                              isPassedMobileSettings = this.isMobileSettings({ layoutType });
                              if (isInitialMobileSettings !== isPassedMobileSettings) {
                                throw "Switching between mobile and desktop layouts is not supported. Please reset the embed container and re-embed with required layout.";
                              }
                              newSetting = {
                                layoutType
                              };
                              return [4, this.updateSettings(newSetting)];
                            case 1:
                              response = _a.sent();
                              this.initialLayoutType = layoutType;
                              return [2, response];
                          }
                        });
                      });
                    };
                    Report2.prototype.createMenuCommand = function(type, commandName, commandTitle, menuTitle, menuLocation, visualName, visualType, groupName, icon) {
                      var newCommandObj = {
                        name: commandName,
                        title: commandTitle,
                        extend: {}
                      };
                      newCommandObj.extend[type] = {
                        title: menuTitle,
                        menuLocation
                      };
                      if (type === "visualOptionsMenu") {
                        newCommandObj.icon = icon;
                      }
                      if (groupName) {
                        var extend = newCommandObj.extend[type];
                        delete extend.menuLocation;
                        var groupExtend = newCommandObj.extend[type];
                        groupExtend.groupName = groupName;
                      }
                      if (visualName) {
                        newCommandObj.selector = {
                          $schema: "http://powerbi.com/product/schema#visualSelector",
                          visualName
                        };
                      }
                      if (visualType) {
                        newCommandObj.selector = {
                          $schema: "http://powerbi.com/product/schema#visualTypeSelector",
                          visualType
                        };
                      }
                      return __spreadArray(__spreadArray([], this.commands, true), [newCommandObj], false);
                    };
                    Report2.prototype.findCommandMenuIndex = function(type, commands, commandName, menuTitle) {
                      var indexOfCommand = -1;
                      commands.some(function(activeMenuCommand, index) {
                        return activeMenuCommand.name === commandName && activeMenuCommand.extend[type] && activeMenuCommand.extend[type].title === menuTitle ? (indexOfCommand = index, true) : false;
                      });
                      return indexOfCommand;
                    };
                    Report2.prototype.buildLayoutSettingsObject = function(pageName, visualName, visualLayout) {
                      var newSettings = {
                        layoutType: powerbi_models_1.LayoutType.Custom,
                        customLayout: {
                          pagesLayout: {}
                        }
                      };
                      newSettings.customLayout.pagesLayout[pageName] = {
                        visualsLayout: {}
                      };
                      newSettings.customLayout.pagesLayout[pageName].visualsLayout[visualName] = visualLayout;
                      return newSettings;
                    };
                    Report2.prototype.validateVisual = function(pageName, visualName) {
                      return __awaiter(this, void 0, void 0, function() {
                        var page;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.getPageByName(pageName)];
                            case 1:
                              page = _a.sent();
                              return [4, page.getVisualByName(visualName)];
                            case 2:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Report2.prototype.applyThemeInternal = function(theme) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_20;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.put("/report/theme", theme, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_20 = _a.sent();
                              throw response_20.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.viewModeToString = function(viewMode) {
                      var mode;
                      switch (viewMode) {
                        case powerbi_models_1.ViewMode.Edit:
                          mode = "edit";
                          break;
                        case powerbi_models_1.ViewMode.View:
                          mode = "view";
                          break;
                      }
                      return mode;
                    };
                    Report2.prototype.isMobileSettings = function(settings) {
                      return settings && (settings.layoutType === powerbi_models_1.LayoutType.MobileLandscape || settings.layoutType === powerbi_models_1.LayoutType.MobilePortrait);
                    };
                    Report2.prototype.getZoom = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_21;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.service.hpm.get("/report/zoom", { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_21 = _a.sent();
                              throw response_21.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.setZoom = function(zoomLevel) {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.updateSettings({ zoomLevel })];
                            case 1:
                              _a.sent();
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.closeAllOverlays = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, error_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/closeAllOverlays", null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              error_1 = _a.sent();
                              return [2, Promise.reject(error_1)];
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.prototype.clearSelectedVisuals = function(clearPopOutState) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, error_2;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              clearPopOutState = clearPopOutState === true;
                              if ((0, util_1.isRDLEmbed)(this.config.embedUrl)) {
                                return [2, Promise.reject(errors_1.APINotSupportedForRDLError)];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post("/report/clearSelectedVisuals/".concat(clearPopOutState.toString()), null, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              error_2 = _a.sent();
                              return [2, Promise.reject(error_2)];
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Report2.allowedEvents = ["filtersApplied", "pageChanged", "commandTriggered", "swipeStart", "swipeEnd", "bookmarkApplied", "dataHyperlinkClicked", "visualRendered", "visualClicked", "selectionChanged", "renderingStarted", "blur"];
                    Report2.reportIdAttribute = "powerbi-report-id";
                    Report2.filterPaneEnabledAttribute = "powerbi-settings-filter-pane-enabled";
                    Report2.navContentPaneEnabledAttribute = "powerbi-settings-nav-content-pane-enabled";
                    Report2.typeAttribute = "powerbi-type";
                    Report2.type = "Report";
                    return Report2;
                  }(embed_1.Embed)
                );
                exports2.Report = Report;
              }
            ),
            /***/
            "./src/service.ts": (
              /*!************************!*\
                !*** ./src/service.ts ***!
                \************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __assign = this && this.__assign || function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Service = void 0;
                var embed_1 = __webpack_require__2(
                  /*! ./embed */
                  "./src/embed.ts"
                );
                var report_1 = __webpack_require__2(
                  /*! ./report */
                  "./src/report.ts"
                );
                var create_1 = __webpack_require__2(
                  /*! ./create */
                  "./src/create.ts"
                );
                var dashboard_1 = __webpack_require__2(
                  /*! ./dashboard */
                  "./src/dashboard.ts"
                );
                var tile_1 = __webpack_require__2(
                  /*! ./tile */
                  "./src/tile.ts"
                );
                var page_1 = __webpack_require__2(
                  /*! ./page */
                  "./src/page.ts"
                );
                var qna_1 = __webpack_require__2(
                  /*! ./qna */
                  "./src/qna.ts"
                );
                var visual_1 = __webpack_require__2(
                  /*! ./visual */
                  "./src/visual.ts"
                );
                var utils = __webpack_require__2(
                  /*! ./util */
                  "./src/util.ts"
                );
                var quickCreate_1 = __webpack_require__2(
                  /*! ./quickCreate */
                  "./src/quickCreate.ts"
                );
                var sdkConfig = __webpack_require__2(
                  /*! ./config */
                  "./src/config.ts"
                );
                var errors_1 = __webpack_require__2(
                  /*! ./errors */
                  "./src/errors.ts"
                );
                var Service = (
                  /** @class */
                  function() {
                    function Service2(hpmFactory, wpmpFactory, routerFactory, config) {
                      if (config === void 0) {
                        config = {};
                      }
                      var _this = this;
                      this.registeredComponents = {};
                      this.wpmp = wpmpFactory(config.wpmpName, config.logMessages);
                      this.hpm = hpmFactory(this.wpmp, null, config.version, config.type, config.sdkWrapperVersion);
                      this.router = routerFactory(this.wpmp);
                      this.uniqueSessionId = utils.generateUUID();
                      this.router.post("/reports/:uniqueId/events/:eventName", function(req, _res) {
                        var event = {
                          type: "report",
                          id: req.params.uniqueId,
                          name: req.params.eventName,
                          value: req.body
                        };
                        _this.handleEvent(event);
                      });
                      this.router.post("/reports/:uniqueId/pages/:pageName/events/:eventName", function(req, _res) {
                        var event = {
                          type: "report",
                          id: req.params.uniqueId,
                          name: req.params.eventName,
                          value: req.body
                        };
                        _this.handleEvent(event);
                      });
                      this.router.post("/reports/:uniqueId/pages/:pageName/visuals/:visualName/events/:eventName", function(req, _res) {
                        var event = {
                          type: "report",
                          id: req.params.uniqueId,
                          name: req.params.eventName,
                          value: req.body
                        };
                        _this.handleEvent(event);
                      });
                      this.router.post("/dashboards/:uniqueId/events/:eventName", function(req, _res) {
                        var event = {
                          type: "dashboard",
                          id: req.params.uniqueId,
                          name: req.params.eventName,
                          value: req.body
                        };
                        _this.handleEvent(event);
                      });
                      this.router.post("/tile/:uniqueId/events/:eventName", function(req, _res) {
                        var event = {
                          type: "tile",
                          id: req.params.uniqueId,
                          name: req.params.eventName,
                          value: req.body
                        };
                        _this.handleEvent(event);
                      });
                      this.router.post("/qna/:uniqueId/events/:eventName", function(req, _res) {
                        var event = {
                          type: "qna",
                          id: req.params.uniqueId,
                          name: req.params.eventName,
                          value: req.body
                        };
                        _this.handleEvent(event);
                      });
                      this.router.post("/ready/:uniqueId", function(req, _res) {
                        var event = {
                          type: "report",
                          id: req.params.uniqueId,
                          name: "ready",
                          value: req.body
                        };
                        _this.handleEvent(event);
                      });
                      this.embeds = [];
                      this.config = utils.assign({}, Service2.defaultConfig, config);
                      if (this.config.autoEmbedOnContentLoaded) {
                        this.enableAutoEmbed();
                      }
                    }
                    Service2.prototype.createReport = function(element, config) {
                      config.type = "create";
                      var powerBiElement = element;
                      var component = new create_1.Create(this, powerBiElement, config);
                      powerBiElement.powerBiEmbed = component;
                      this.addOrOverwriteEmbed(component, element);
                      return component;
                    };
                    Service2.prototype.quickCreate = function(element, config) {
                      config.type = "quickCreate";
                      var powerBiElement = element;
                      var component = new quickCreate_1.QuickCreate(this, powerBiElement, config);
                      powerBiElement.powerBiEmbed = component;
                      this.addOrOverwriteEmbed(component, element);
                      return component;
                    };
                    Service2.prototype.init = function(container, config) {
                      var _this = this;
                      if (config === void 0) {
                        config = void 0;
                      }
                      container = container && container instanceof HTMLElement ? container : document.body;
                      var elements = Array.prototype.slice.call(container.querySelectorAll("[".concat(embed_1.Embed.embedUrlAttribute, "]")));
                      return elements.map(function(element) {
                        return _this.embed(element, config);
                      });
                    };
                    Service2.prototype.embed = function(element, config) {
                      if (config === void 0) {
                        config = {};
                      }
                      return this.embedInternal(element, config);
                    };
                    Service2.prototype.load = function(element, config) {
                      if (config === void 0) {
                        config = {};
                      }
                      return this.embedInternal(
                        element,
                        config,
                        /* phasedRender */
                        true,
                        /* isBootstrap */
                        false
                      );
                    };
                    Service2.prototype.bootstrap = function(element, config) {
                      return this.embedInternal(
                        element,
                        config,
                        /* phasedRender */
                        false,
                        /* isBootstrap */
                        true
                      );
                    };
                    Service2.prototype.embedInternal = function(element, config, phasedRender, isBootstrap) {
                      if (config === void 0) {
                        config = {};
                      }
                      var component;
                      var powerBiElement = element;
                      if (powerBiElement.powerBiEmbed) {
                        if (isBootstrap) {
                          throw new Error("Attempted to bootstrap element ".concat(element.outerHTML, ", but the element is already a powerbi element."));
                        }
                        component = this.embedExisting(powerBiElement, config, phasedRender);
                      } else {
                        component = this.embedNew(powerBiElement, config, phasedRender, isBootstrap);
                      }
                      return component;
                    };
                    Service2.prototype.getNumberOfComponents = function() {
                      if (!this.embeds) {
                        return 0;
                      }
                      return this.embeds.length;
                    };
                    Service2.prototype.getSdkSessionId = function() {
                      return this.uniqueSessionId;
                    };
                    Service2.prototype.getSDKVersion = function() {
                      return sdkConfig.default.version;
                    };
                    Service2.prototype.embedNew = function(element, config, phasedRender, isBootstrap) {
                      var componentType = config.type || element.getAttribute(embed_1.Embed.typeAttribute);
                      if (!componentType) {
                        var scrubbedConfig = __assign(__assign({}, config), { accessToken: "" });
                        throw new Error("Attempted to embed using config ".concat(JSON.stringify(scrubbedConfig), " on element ").concat(element.outerHTML, ", but could not determine what type of component to embed. You must specify a type in the configuration or as an attribute such as '").concat(embed_1.Embed.typeAttribute, '="').concat(report_1.Report.type.toLowerCase(), `"'.`));
                      }
                      config.type = componentType;
                      var component = this.createEmbedComponent(componentType, element, config, phasedRender, isBootstrap);
                      element.powerBiEmbed = component;
                      this.addOrOverwriteEmbed(component, element);
                      return component;
                    };
                    Service2.prototype.createEmbedComponent = function(componentType, element, config, phasedRender, isBootstrap) {
                      var Component = utils.find(function(embedComponent) {
                        return componentType === embedComponent.type.toLowerCase();
                      }, Service2.components);
                      if (Component) {
                        return new Component(this, element, config, phasedRender, isBootstrap);
                      }
                      var registeredComponent = utils.find(function(registeredComponentType) {
                        return componentType.toLowerCase() === registeredComponentType.toLowerCase();
                      }, Object.keys(this.registeredComponents));
                      if (!registeredComponent) {
                        throw new Error("Attempted to embed component of type: ".concat(componentType, " but did not find any matching component.  Please verify the type you specified is intended."));
                      }
                      return this.registeredComponents[registeredComponent](this, element, config, phasedRender, isBootstrap);
                    };
                    Service2.prototype.embedExisting = function(element, config, phasedRender) {
                      var component = utils.find(function(x) {
                        return x.element === element;
                      }, this.embeds);
                      if (!component) {
                        var scrubbedConfig = __assign(__assign({}, config), { accessToken: "" });
                        throw new Error("Attempted to embed using config ".concat(JSON.stringify(scrubbedConfig), " on element ").concat(element.outerHTML, " which already has embedded component associated, but could not find the existing component in the list of active components. This could indicate the embeds list is out of sync with the DOM, or the component is referencing the incorrect HTML element."));
                      }
                      if (config.type && config.type.toLowerCase() === "qna") {
                        return this.embedNew(element, config);
                      }
                      if (typeof config.type === "string" && config.type !== component.config.type) {
                        if (config.type === "report" && utils.isCreate(component.config.type)) {
                          var report = new report_1.Report(
                            this,
                            element,
                            config,
                            /* phasedRender */
                            false,
                            /* isBootstrap */
                            false,
                            element.powerBiEmbed.iframe
                          );
                          component.populateConfig(
                            config,
                            /* isBootstrap */
                            false
                          );
                          report.load();
                          element.powerBiEmbed = report;
                          this.addOrOverwriteEmbed(component, element);
                          return report;
                        }
                        var scrubbedConfig = __assign(__assign({}, config), { accessToken: "" });
                        throw new Error("Embedding on an existing element with a different type than the previous embed object is not supported.  Attempted to embed using config ".concat(JSON.stringify(scrubbedConfig), " on element ").concat(element.outerHTML, ", but the existing element contains an embed of type: ").concat(this.config.type, " which does not match the new type: ").concat(config.type));
                      }
                      component.populateConfig(
                        config,
                        /* isBootstrap */
                        false
                      );
                      component.load(phasedRender);
                      return component;
                    };
                    Service2.prototype.enableAutoEmbed = function() {
                      var _this = this;
                      window.addEventListener("DOMContentLoaded", function(_event) {
                        return _this.init(document.body);
                      }, false);
                    };
                    Service2.prototype.get = function(element) {
                      var powerBiElement = element;
                      if (!powerBiElement.powerBiEmbed) {
                        throw new Error("You attempted to get an instance of powerbi component associated with element: ".concat(element.outerHTML, " but there was no associated instance."));
                      }
                      return powerBiElement.powerBiEmbed;
                    };
                    Service2.prototype.find = function(uniqueId) {
                      return utils.find(function(x) {
                        return x.config.uniqueId === uniqueId;
                      }, this.embeds);
                    };
                    Service2.prototype.addOrOverwriteEmbed = function(component, element) {
                      this.embeds = this.embeds.filter(function(embed) {
                        return embed.element !== element;
                      });
                      this.embeds.push(component);
                    };
                    Service2.prototype.reset = function(element) {
                      var powerBiElement = element;
                      if (!powerBiElement.powerBiEmbed) {
                        return;
                      }
                      var embedElement = powerBiElement.powerBiEmbed;
                      if (embedElement.frontLoadHandler) {
                        embedElement.element.removeEventListener("ready", embedElement.frontLoadHandler, false);
                      }
                      embedElement.allowedEvents.forEach(function(eventName) {
                        embedElement.off(eventName);
                      });
                      utils.remove(function(x) {
                        return x === powerBiElement.powerBiEmbed;
                      }, this.embeds);
                      delete powerBiElement.powerBiEmbed;
                      var iframe = element.querySelector("iframe");
                      if (iframe) {
                        if (iframe.remove !== void 0) {
                          iframe.remove();
                        } else {
                          iframe.parentElement.removeChild(iframe);
                        }
                      }
                    };
                    Service2.prototype.handleTileEvents = function(event) {
                      if (event.type === "tile") {
                        this.handleEvent(event);
                      }
                    };
                    Service2.prototype.invokeSDKHook = function(hook, req, res) {
                      return __awaiter(this, void 0, void 0, function() {
                        var result, error_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              if (!hook) {
                                res.send(404, null);
                                return [
                                  2
                                  /*return*/
                                ];
                              }
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, hook(req.body)];
                            case 2:
                              result = _a.sent();
                              res.send(200, result);
                              return [3, 4];
                            case 3:
                              error_1 = _a.sent();
                              res.send(400, null);
                              console.error(error_1);
                              return [3, 4];
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Service2.prototype.handleEvent = function(event) {
                      var embed = utils.find(function(embed2) {
                        return embed2.config.uniqueId === event.id;
                      }, this.embeds);
                      if (embed) {
                        var value = event.value;
                        if (event.name === "pageChanged") {
                          var pageKey = "newPage";
                          var page = value[pageKey];
                          if (!page) {
                            throw new Error("Page model not found at 'event.value.".concat(pageKey, "'."));
                          }
                          value[pageKey] = new page_1.Page(
                            embed,
                            page.name,
                            page.displayName,
                            true
                            /* isActive */
                          );
                        }
                        utils.raiseCustomEvent(embed.element, event.name, value);
                      }
                    };
                    Service2.prototype.preload = function(config, element) {
                      if (!utils.validateEmbedUrl(config.embedUrl)) {
                        throw new Error(errors_1.invalidEmbedUrlErrorMessage);
                      }
                      var iframeContent = document.createElement("iframe");
                      iframeContent.setAttribute("style", "display:none;");
                      iframeContent.setAttribute("src", config.embedUrl);
                      iframeContent.setAttribute("scrolling", "no");
                      iframeContent.setAttribute("allowfullscreen", "false");
                      var node = element;
                      if (!node) {
                        node = document.getElementsByTagName("body")[0];
                      }
                      node.appendChild(iframeContent);
                      iframeContent.onload = function() {
                        utils.raiseCustomEvent(iframeContent, "preloaded", {});
                      };
                      return iframeContent;
                    };
                    Service2.prototype.setSdkInfo = function(type, version) {
                      this.hpm.defaultHeaders["x-sdk-type"] = type;
                      this.hpm.defaultHeaders["x-sdk-wrapper-version"] = version;
                    };
                    Service2.prototype.register = function(componentType, embedComponentFactory, routerEventUrls) {
                      var _this = this;
                      if (utils.find(function(embedComponent) {
                        return componentType.toLowerCase() === embedComponent.type.toLowerCase();
                      }, Service2.components)) {
                        throw new Error("The component name is reserved. Cannot register a component with this name.");
                      }
                      if (utils.find(function(registeredComponentType) {
                        return componentType.toLowerCase() === registeredComponentType.toLowerCase();
                      }, Object.keys(this.registeredComponents))) {
                        throw new Error("A component with this type is already registered.");
                      }
                      this.registeredComponents[componentType] = embedComponentFactory;
                      routerEventUrls.forEach(function(url) {
                        if (!url.includes(":uniqueId") || !url.includes(":eventName")) {
                          throw new Error("Invalid router event URL");
                        }
                        _this.router.post(url, function(req, _res) {
                          var event = {
                            type: componentType,
                            id: req.params.uniqueId,
                            name: req.params.eventName,
                            value: req.body
                          };
                          _this.handleEvent(event);
                        });
                      });
                    };
                    Service2.components = [
                      tile_1.Tile,
                      report_1.Report,
                      dashboard_1.Dashboard,
                      qna_1.Qna,
                      visual_1.Visual
                    ];
                    Service2.defaultConfig = {
                      autoEmbedOnContentLoaded: false,
                      onError: function() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                          args[_i] = arguments[_i];
                        }
                        return console.log(args[0], args.slice(1));
                      }
                    };
                    return Service2;
                  }()
                );
                exports2.Service = Service;
              }
            ),
            /***/
            "./src/tile.ts": (
              /*!*********************!*\
                !*** ./src/tile.ts ***!
                \*********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Tile = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var embed_1 = __webpack_require__2(
                  /*! ./embed */
                  "./src/embed.ts"
                );
                var Tile = (
                  /** @class */
                  function(_super) {
                    __extends(Tile2, _super);
                    function Tile2(service, element, baseConfig, phasedRender, isBootstrap) {
                      var _this = this;
                      var config = baseConfig;
                      _this = _super.call(
                        this,
                        service,
                        element,
                        config,
                        /* iframe */
                        void 0,
                        phasedRender,
                        isBootstrap
                      ) || this;
                      _this.loadPath = "/tile/load";
                      Array.prototype.push.apply(_this.allowedEvents, Tile2.allowedEvents);
                      return _this;
                    }
                    Tile2.prototype.getId = function() {
                      var config = this.config;
                      var tileId = config.id || Tile2.findIdFromEmbedUrl(this.config.embedUrl);
                      if (typeof tileId !== "string" || tileId.length === 0) {
                        throw new Error("Tile id is required, but it was not found. You must provide an id either as part of embed configuration.");
                      }
                      return tileId;
                    };
                    Tile2.prototype.validate = function(config) {
                      var embedConfig = config;
                      return (0, powerbi_models_1.validateTileLoad)(embedConfig);
                    };
                    Tile2.prototype.configChanged = function(isBootstrap) {
                      if (isBootstrap) {
                        return;
                      }
                      this.config.id = this.getId();
                    };
                    Tile2.prototype.getDefaultEmbedUrlEndpoint = function() {
                      return "tileEmbed";
                    };
                    Tile2.findIdFromEmbedUrl = function(url) {
                      var tileIdRegEx = /tileId="?([^&]+)"?/;
                      var tileIdMatch = url.match(tileIdRegEx);
                      var tileId;
                      if (tileIdMatch) {
                        tileId = tileIdMatch[1];
                      }
                      return tileId;
                    };
                    Tile2.type = "Tile";
                    Tile2.allowedEvents = ["tileClicked", "tileLoaded"];
                    return Tile2;
                  }(embed_1.Embed)
                );
                exports2.Tile = Tile;
              }
            ),
            /***/
            "./src/util.ts": (
              /*!*********************!*\
                !*** ./src/util.ts ***!
                \*********************/
              /***/
              function(__unused_webpack_module, exports2) {
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.validateEmbedUrl = exports2.isCreate = exports2.getTimeDiffInMilliseconds = exports2.getRandomValue = exports2.autoAuthInEmbedUrl = exports2.isRDLEmbed = exports2.isSavedInternal = exports2.addParamToUrl = exports2.generateUUID = exports2.createRandomString = exports2.assign = exports2.remove = exports2.find = exports2.findIndex = exports2.raiseCustomEvent = void 0;
                var allowedPowerBiHostsRegex = new RegExp(/(.+\.powerbi\.com$)|(.+\.fabric\.microsoft\.com$)|(.+\.analysis\.windows-int\.net$)|(.+\.analysis-df\.windows\.net$)/);
                var allowedPowerBiHostsSovRegex = new RegExp(/^app\.powerbi\.cn$|^app(\.mil\.|\.high\.|\.)powerbigov\.us$|^app\.powerbi\.eaglex\.ic\.gov$|^app\.powerbi\.microsoft\.scloud$/);
                var expectedEmbedUrlProtocol = "https:";
                function raiseCustomEvent(element, eventName, eventData) {
                  var customEvent;
                  if (typeof CustomEvent === "function") {
                    customEvent = new CustomEvent(eventName, {
                      detail: eventData,
                      bubbles: true,
                      cancelable: true
                    });
                  } else {
                    customEvent = document.createEvent("CustomEvent");
                    customEvent.initCustomEvent(eventName, true, true, eventData);
                  }
                  element.dispatchEvent(customEvent);
                }
                exports2.raiseCustomEvent = raiseCustomEvent;
                function findIndex(predicate, xs) {
                  if (!Array.isArray(xs)) {
                    throw new Error("You attempted to call find with second parameter that was not an array. You passed: ".concat(xs));
                  }
                  var index;
                  xs.some(function(x, i) {
                    if (predicate(x)) {
                      index = i;
                      return true;
                    }
                  });
                  return index;
                }
                exports2.findIndex = findIndex;
                function find(predicate, xs) {
                  var index = findIndex(predicate, xs);
                  return xs[index];
                }
                exports2.find = find;
                function remove(predicate, xs) {
                  var index = findIndex(predicate, xs);
                  xs.splice(index, 1);
                }
                exports2.remove = remove;
                function assign() {
                  var args = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }
                  var target = args[0];
                  "use strict";
                  if (target === void 0 || target === null) {
                    throw new TypeError("Cannot convert undefined or null to object");
                  }
                  var output = Object(target);
                  for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source !== void 0 && source !== null) {
                      for (var nextKey in source) {
                        if (source.hasOwnProperty(nextKey)) {
                          output[nextKey] = source[nextKey];
                        }
                      }
                    }
                  }
                  return output;
                }
                exports2.assign = assign;
                function createRandomString() {
                  return getRandomValue().toString(36).substring(1);
                }
                exports2.createRandomString = createRandomString;
                function generateUUID() {
                  var d = (/* @__PURE__ */ new Date()).getTime();
                  if (typeof performance !== "undefined" && typeof performance.now === "function") {
                    d += performance.now();
                  }
                  return "xxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(_c) {
                    var r = getRandomValue() % 16;
                    d >>= 4;
                    return r.toString(16);
                  });
                }
                exports2.generateUUID = generateUUID;
                function addParamToUrl(url, paramName, value) {
                  var parameterPrefix = url.indexOf("?") > 0 ? "&" : "?";
                  url += parameterPrefix + paramName + "=" + value;
                  return url;
                }
                exports2.addParamToUrl = addParamToUrl;
                function isSavedInternal(hpm, uid, contentWindow) {
                  return __awaiter(this, void 0, void 0, function() {
                    var response, response_1;
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                        case 0:
                          _a.trys.push([0, 2, , 3]);
                          return [4, hpm.get("/report/hasUnsavedChanges", { uid }, contentWindow)];
                        case 1:
                          response = _a.sent();
                          return [2, !response.body];
                        case 2:
                          response_1 = _a.sent();
                          throw response_1.body;
                        case 3:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                }
                exports2.isSavedInternal = isSavedInternal;
                function isRDLEmbed(embedUrl) {
                  return embedUrl && embedUrl.toLowerCase().indexOf("/rdlembed?") >= 0;
                }
                exports2.isRDLEmbed = isRDLEmbed;
                function autoAuthInEmbedUrl(embedUrl) {
                  return embedUrl && decodeURIComponent(embedUrl).toLowerCase().indexOf("autoauth=true") >= 0;
                }
                exports2.autoAuthInEmbedUrl = autoAuthInEmbedUrl;
                function getRandomValue() {
                  var cryptoObj = window.crypto || window.msCrypto;
                  var randomValueArray = new Uint32Array(1);
                  cryptoObj.getRandomValues(randomValueArray);
                  return randomValueArray[0];
                }
                exports2.getRandomValue = getRandomValue;
                function getTimeDiffInMilliseconds(start, end) {
                  return Math.abs(start.getTime() - end.getTime());
                }
                exports2.getTimeDiffInMilliseconds = getTimeDiffInMilliseconds;
                function isCreate(embedType) {
                  return embedType === "create" || embedType === "quickcreate";
                }
                exports2.isCreate = isCreate;
                function validateEmbedUrl(embedUrl) {
                  if (embedUrl) {
                    var url = void 0;
                    try {
                      url = new URL(embedUrl.toLowerCase());
                    } catch (e) {
                      return false;
                    }
                    return url.protocol === expectedEmbedUrlProtocol && (allowedPowerBiHostsRegex.test(url.hostname) || allowedPowerBiHostsSovRegex.test(url.hostname));
                  }
                }
                exports2.validateEmbedUrl = validateEmbedUrl;
              }
            ),
            /***/
            "./src/visual.ts": (
              /*!***********************!*\
                !*** ./src/visual.ts ***!
                \***********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __extends = this && this.__extends || /* @__PURE__ */ function() {
                  var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                      d2.__proto__ = b2;
                    } || function(d2, b2) {
                      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                    };
                    return extendStatics(d, b);
                  };
                  return function(d, b) {
                    if (typeof b !== "function" && b !== null)
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                      this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }();
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Visual = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var report_1 = __webpack_require__2(
                  /*! ./report */
                  "./src/report.ts"
                );
                var visualDescriptor_1 = __webpack_require__2(
                  /*! ./visualDescriptor */
                  "./src/visualDescriptor.ts"
                );
                var Visual = (
                  /** @class */
                  function(_super) {
                    __extends(Visual2, _super);
                    function Visual2(service, element, baseConfig, phasedRender, isBootstrap, iframe) {
                      return _super.call(this, service, element, baseConfig, phasedRender, isBootstrap, iframe) || this;
                    }
                    Visual2.prototype.load = function(phasedRender) {
                      var config = this.config;
                      if (!config.accessToken) {
                        return;
                      }
                      if (typeof config.pageName !== "string" || config.pageName.length === 0) {
                        throw new Error("Page name is required when embedding a visual.");
                      }
                      if (typeof config.visualName !== "string" || config.visualName.length === 0) {
                        throw new Error("Visual name is required, but it was not found. You must provide a visual name as part of embed configuration.");
                      }
                      var width = config.width ? config.width : this.iframe.offsetWidth;
                      var height = config.height ? config.height : this.iframe.offsetHeight;
                      var pageSize = {
                        type: powerbi_models_1.PageSizeType.Custom,
                        width,
                        height
                      };
                      var pagesLayout = {};
                      pagesLayout[config.pageName] = {
                        defaultLayout: {
                          displayState: {
                            mode: powerbi_models_1.VisualContainerDisplayMode.Hidden
                          }
                        },
                        visualsLayout: {}
                      };
                      pagesLayout[config.pageName].visualsLayout[config.visualName] = {
                        displayState: {
                          mode: powerbi_models_1.VisualContainerDisplayMode.Visible
                        },
                        x: 1,
                        y: 1,
                        z: 1,
                        width: pageSize.width,
                        height: pageSize.height
                      };
                      config.settings = config.settings || {};
                      config.settings.filterPaneEnabled = false;
                      config.settings.navContentPaneEnabled = false;
                      config.settings.layoutType = powerbi_models_1.LayoutType.Custom;
                      config.settings.customLayout = {
                        displayOption: powerbi_models_1.DisplayOption.FitToPage,
                        pageSize,
                        pagesLayout
                      };
                      this.config = config;
                      return _super.prototype.load.call(this, phasedRender);
                    };
                    Visual2.prototype.getPages = function() {
                      throw Visual2.GetPagesNotSupportedError;
                    };
                    Visual2.prototype.setPage = function(_pageName) {
                      throw Visual2.SetPageNotSupportedError;
                    };
                    Visual2.prototype.render = function(_config) {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          throw Visual2.RenderNotSupportedError;
                        });
                      });
                    };
                    Visual2.prototype.getVisualDescriptor = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var config, response, embeddedVisuals, visualNotFoundError, embeddedVisual, currentPage, response_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              config = this.config;
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get("/report/pages/".concat(config.pageName, "/visuals"), { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              embeddedVisuals = response.body.filter(function(pageVisual) {
                                return pageVisual.name === config.visualName;
                              });
                              if (embeddedVisuals.length === 0) {
                                visualNotFoundError = {
                                  message: "visualNotFound",
                                  detailedMessage: "Visual not found"
                                };
                                throw visualNotFoundError;
                              }
                              embeddedVisual = embeddedVisuals[0];
                              currentPage = this.page(config.pageName);
                              return [2, new visualDescriptor_1.VisualDescriptor(currentPage, embeddedVisual.name, embeddedVisual.title, embeddedVisual.type, embeddedVisual.layout)];
                            case 3:
                              response_1 = _a.sent();
                              throw response_1.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Visual2.prototype.getFilters = function(filtersLevel) {
                      return __awaiter(this, void 0, void 0, function() {
                        var url, response, response_2;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              url = this.getFiltersLevelUrl(filtersLevel);
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.get(url, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_2 = _a.sent();
                              throw response_2.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Visual2.prototype.updateFilters = function(operation, filters, filtersLevel) {
                      return __awaiter(this, void 0, void 0, function() {
                        var updateFiltersRequest, url, response_3;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              updateFiltersRequest = {
                                filtersOperation: operation,
                                filters
                              };
                              url = this.getFiltersLevelUrl(filtersLevel);
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.post(url, updateFiltersRequest, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_3 = _a.sent();
                              throw response_3.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Visual2.prototype.setFilters = function(filters, filtersLevel) {
                      return __awaiter(this, void 0, void 0, function() {
                        var url, response_4;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              url = this.getFiltersLevelUrl(filtersLevel);
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.service.hpm.put(url, filters, { uid: this.config.uniqueId }, this.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_4 = _a.sent();
                              throw response_4.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    Visual2.prototype.removeFilters = function(filtersLevel) {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.updateFilters(powerbi_models_1.FiltersOperations.RemoveAll, void 0, filtersLevel)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    Visual2.prototype.getFiltersLevelUrl = function(filtersLevel) {
                      var config = this.config;
                      switch (filtersLevel) {
                        case powerbi_models_1.FiltersLevel.Report:
                          return "/report/filters";
                        case powerbi_models_1.FiltersLevel.Page:
                          return "/report/pages/".concat(config.pageName, "/filters");
                        default:
                          return "/report/pages/".concat(config.pageName, "/visuals/").concat(config.visualName, "/filters");
                      }
                    };
                    Visual2.type = "visual";
                    Visual2.GetPagesNotSupportedError = "Get pages is not supported while embedding a visual.";
                    Visual2.SetPageNotSupportedError = "Set page is not supported while embedding a visual.";
                    Visual2.RenderNotSupportedError = "render is not supported while embedding a visual.";
                    return Visual2;
                  }(report_1.Report)
                );
                exports2.Visual = Visual;
              }
            ),
            /***/
            "./src/visualDescriptor.ts": (
              /*!*********************************!*\
                !*** ./src/visualDescriptor.ts ***!
                \*********************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                var __generator = this && this.__generator || function(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.VisualDescriptor = void 0;
                var powerbi_models_1 = __webpack_require__2(
                  /*! powerbi-models */
                  "./node_modules/powerbi-models/dist/models.js"
                );
                var VisualDescriptor = (
                  /** @class */
                  function() {
                    function VisualDescriptor2(page, name, title, type, layout) {
                      this.name = name;
                      this.title = title;
                      this.type = type;
                      this.layout = layout;
                      this.page = page;
                    }
                    VisualDescriptor2.prototype.getFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_1;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.page.report.service.hpm.get("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/filters"), { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_1 = _a.sent();
                              throw response_1.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.updateFilters = function(operation, filters) {
                      return __awaiter(this, void 0, void 0, function() {
                        var updateFiltersRequest, response_2;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              updateFiltersRequest = {
                                filtersOperation: operation,
                                filters
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.page.report.service.hpm.post("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/filters"), updateFiltersRequest, { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 2:
                              return [2, _a.sent()];
                            case 3:
                              response_2 = _a.sent();
                              throw response_2.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.removeFilters = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              return [4, this.updateFilters(powerbi_models_1.FiltersOperations.RemoveAll)];
                            case 1:
                              return [2, _a.sent()];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.setFilters = function(filters) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response_3;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.page.report.service.hpm.put("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/filters"), filters, { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                            case 2:
                              response_3 = _a.sent();
                              throw response_3.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.exportData = function(exportDataType, rows) {
                      return __awaiter(this, void 0, void 0, function() {
                        var exportDataRequestBody, response, response_4;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              exportDataRequestBody = {
                                rows,
                                exportDataType
                              };
                              _a.label = 1;
                            case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4, this.page.report.service.hpm.post("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/exportData"), exportDataRequestBody, { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 2:
                              response = _a.sent();
                              return [2, response.body];
                            case 3:
                              response_4 = _a.sent();
                              throw response_4.body;
                            case 4:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.setSlicerState = function(state) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response_5;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.page.report.service.hpm.put("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/slicer"), state, { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                            case 2:
                              response_5 = _a.sent();
                              throw response_5.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.getSlicerState = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_6;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.page.report.service.hpm.get("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/slicer"), { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_6 = _a.sent();
                              throw response_6.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.clone = function(request) {
                      if (request === void 0) {
                        request = {};
                      }
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_7;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.page.report.service.hpm.post("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/clone"), request, { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_7 = _a.sent();
                              throw response_7.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.sortBy = function(request) {
                      return __awaiter(this, void 0, void 0, function() {
                        var response_8;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.page.report.service.hpm.put("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/sortBy"), request, { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 1:
                              return [2, _a.sent()];
                            case 2:
                              response_8 = _a.sent();
                              throw response_8.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    VisualDescriptor2.prototype.moveVisual = function(x, y, z) {
                      return __awaiter(this, void 0, void 0, function() {
                        var pageName, visualName, report;
                        return __generator(this, function(_a) {
                          pageName = this.page.name;
                          visualName = this.name;
                          report = this.page.report;
                          return [2, report.moveVisual(pageName, visualName, x, y, z)];
                        });
                      });
                    };
                    VisualDescriptor2.prototype.setVisualDisplayState = function(displayState) {
                      return __awaiter(this, void 0, void 0, function() {
                        var pageName, visualName, report;
                        return __generator(this, function(_a) {
                          pageName = this.page.name;
                          visualName = this.name;
                          report = this.page.report;
                          return [2, report.setVisualDisplayState(pageName, visualName, displayState)];
                        });
                      });
                    };
                    VisualDescriptor2.prototype.resizeVisual = function(width, height) {
                      return __awaiter(this, void 0, void 0, function() {
                        var pageName, visualName, report;
                        return __generator(this, function(_a) {
                          pageName = this.page.name;
                          visualName = this.name;
                          report = this.page.report;
                          return [2, report.resizeVisual(pageName, visualName, width, height)];
                        });
                      });
                    };
                    VisualDescriptor2.prototype.getSmartNarrativeInsights = function() {
                      return __awaiter(this, void 0, void 0, function() {
                        var response, response_9;
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                            case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, this.page.report.service.hpm.get("/report/pages/".concat(this.page.name, "/visuals/").concat(this.name, "/smartNarrativeInsights"), { uid: this.page.report.config.uniqueId }, this.page.report.iframe.contentWindow)];
                            case 1:
                              response = _a.sent();
                              return [2, response.body];
                            case 2:
                              response_9 = _a.sent();
                              throw response_9.body;
                            case 3:
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      });
                    };
                    return VisualDescriptor2;
                  }()
                );
                exports2.VisualDescriptor = VisualDescriptor;
              }
            ),
            /***/
            "./node_modules/window-post-message-proxy/dist/windowPostMessageProxy.js": (
              /*!*******************************************************************************!*\
                !*** ./node_modules/window-post-message-proxy/dist/windowPostMessageProxy.js ***!
                \*******************************************************************************/
              /***/
              (module2) => {
                !function(e, r) {
                  true ? module2.exports = r() : 0;
                }(self, () => (() => {
                  "use strict";
                  var e = {};
                  return (() => {
                    var r = e;
                    Object.defineProperty(r, "__esModule", { value: true }), r.WindowPostMessageProxy = void 0;
                    var s = function() {
                      function e2(r2) {
                        void 0 === r2 && (r2 = { processTrackingProperties: { addTrackingProperties: e2.defaultAddTrackingProperties, getTrackingProperties: e2.defaultGetTrackingProperties }, isErrorMessage: e2.defaultIsErrorMessage, receiveWindow: window, name: e2.createRandomString() });
                        var s2 = this;
                        this.pendingRequestPromises = {}, this.addTrackingProperties = r2.processTrackingProperties && r2.processTrackingProperties.addTrackingProperties || e2.defaultAddTrackingProperties, this.getTrackingProperties = r2.processTrackingProperties && r2.processTrackingProperties.getTrackingProperties || e2.defaultGetTrackingProperties, this.isErrorMessage = r2.isErrorMessage || e2.defaultIsErrorMessage, this.receiveWindow = r2.receiveWindow || window, this.name = r2.name || e2.createRandomString(), this.logMessages = r2.logMessages || false, this.eventSourceOverrideWindow = r2.eventSourceOverrideWindow, this.suppressWarnings = r2.suppressWarnings || false, this.logMessages && console.log("new WindowPostMessageProxy created with name: ".concat(this.name, " receiving on window: ").concat(this.receiveWindow.document.title)), this.handlers = [], this.windowMessageHandler = function(e3) {
                          return s2.onMessageReceived(e3);
                        }, this.start();
                      }
                      return e2.defaultAddTrackingProperties = function(r2, s2) {
                        return r2[e2.messagePropertyName] = s2, r2;
                      }, e2.defaultGetTrackingProperties = function(r2) {
                        return r2[e2.messagePropertyName];
                      }, e2.defaultIsErrorMessage = function(e3) {
                        return !!e3.error;
                      }, e2.createDeferred = function() {
                        var e3 = { resolve: null, reject: null, promise: null }, r2 = new Promise(function(r3, s2) {
                          e3.resolve = r3, e3.reject = s2;
                        });
                        return e3.promise = r2, e3;
                      }, e2.createRandomString = function() {
                        var e3 = window.crypto || window.msCrypto, r2 = new Uint32Array(1);
                        return e3.getRandomValues(r2), r2[0].toString(36).substring(1);
                      }, e2.prototype.addHandler = function(e3) {
                        this.handlers.push(e3);
                      }, e2.prototype.removeHandler = function(e3) {
                        var r2 = this.handlers.indexOf(e3);
                        if (-1 === r2) throw new Error("You attempted to remove a handler but no matching handler was found.");
                        this.handlers.splice(r2, 1);
                      }, e2.prototype.start = function() {
                        this.receiveWindow.addEventListener("message", this.windowMessageHandler);
                      }, e2.prototype.stop = function() {
                        this.receiveWindow.removeEventListener("message", this.windowMessageHandler);
                      }, e2.prototype.postMessage = function(r2, s2) {
                        var n = { id: e2.createRandomString() };
                        this.addTrackingProperties(s2, n), this.logMessages && (console.log("".concat(this.name, " Posting message:")), console.log(JSON.stringify(s2, null, "  "))), r2.postMessage(s2, "*");
                        var o = e2.createDeferred();
                        return this.pendingRequestPromises[n.id] = o, o.promise;
                      }, e2.prototype.sendResponse = function(e3, r2, s2) {
                        this.addTrackingProperties(r2, s2), this.logMessages && (console.log("".concat(this.name, " Sending response:")), console.log(JSON.stringify(r2, null, "  "))), e3.postMessage(r2, "*");
                      }, e2.prototype.onMessageReceived = function(e3) {
                        var r2 = this;
                        this.logMessages && (console.log("".concat(this.name, " Received message:")), console.log("type: ".concat(e3.type)), console.log(JSON.stringify(e3.data, null, "  ")));
                        var s2 = this.eventSourceOverrideWindow || e3.source;
                        if (s2) {
                          var n = e3.data;
                          if ("object" == typeof n) {
                            var o, t;
                            try {
                              o = this.getTrackingProperties(n);
                            } catch (e4) {
                              this.suppressWarnings || console.warn("Proxy(".concat(this.name, "): Error occurred when attempting to get tracking properties from incoming message:"), JSON.stringify(n, null, "  "), "Error: ", e4);
                            }
                            if (o && (t = this.pendingRequestPromises[o.id]), t) {
                              var i = true;
                              try {
                                i = this.isErrorMessage(n);
                              } catch (e4) {
                                console.warn("Proxy(".concat(this.name, ") Error occurred when trying to determine if message is consider an error response. Message: "), JSON.stringify(n, null, ""), "Error: ", e4);
                              }
                              i ? t.reject(n) : t.resolve(n), delete this.pendingRequestPromises[o.id];
                            } else this.handlers.some(function(e4) {
                              var t2 = false;
                              try {
                                t2 = e4.test(n);
                              } catch (e5) {
                                r2.suppressWarnings || console.warn("Proxy(".concat(r2.name, "): Error occurred when handler was testing incoming message:"), JSON.stringify(n, null, "  "), "Error: ", e5);
                              }
                              if (t2) {
                                var i2 = void 0;
                                try {
                                  i2 = Promise.resolve(e4.handle(n));
                                } catch (e5) {
                                  r2.suppressWarnings || console.warn("Proxy(".concat(r2.name, "): Error occurred when handler was processing incoming message:"), JSON.stringify(n, null, "  "), "Error: ", e5), i2 = Promise.resolve();
                                }
                                return i2.then(function(e5) {
                                  if (!e5) {
                                    var t3 = "Handler for message: ".concat(JSON.stringify(n, null, "  "), " did not return a response message. The default response message will be returned instead.");
                                    r2.suppressWarnings || console.warn("Proxy(".concat(r2.name, "): ").concat(t3)), e5 = { warning: t3 };
                                  }
                                  r2.sendResponse(s2, e5, o);
                                }), true;
                              }
                            }) || this.suppressWarnings || console.warn("Proxy(".concat(this.name, ") did not handle message. Handlers: ").concat(this.handlers.length, "  Message: ").concat(JSON.stringify(n, null, ""), "."));
                          } else this.suppressWarnings || console.warn("Proxy(".concat(this.name, "): Received message that was not an object. Discarding message"));
                        }
                      }, e2.messagePropertyName = "windowPostMessageProxy", e2;
                    }();
                    r.WindowPostMessageProxy = s;
                  })(), e;
                })());
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          var __webpack_exports__ = {};
          (() => {
            var exports2 = __webpack_exports__;
            Object.defineProperty(exports2, "__esModule", { value: true });
            exports2.RelativeTimeFilterBuilder = exports2.RelativeDateFilterBuilder = exports2.TopNFilterBuilder = exports2.AdvancedFilterBuilder = exports2.BasicFilterBuilder = exports2.Create = exports2.QuickCreate = exports2.VisualDescriptor = exports2.Visual = exports2.Qna = exports2.Page = exports2.Embed = exports2.Tile = exports2.Dashboard = exports2.Report = exports2.models = exports2.factories = exports2.service = void 0;
            var models = __webpack_require__(
              /*! powerbi-models */
              "./node_modules/powerbi-models/dist/models.js"
            );
            exports2.models = models;
            var service = __webpack_require__(
              /*! ./service */
              "./src/service.ts"
            );
            exports2.service = service;
            var factories = __webpack_require__(
              /*! ./factories */
              "./src/factories.ts"
            );
            exports2.factories = factories;
            var report_1 = __webpack_require__(
              /*! ./report */
              "./src/report.ts"
            );
            Object.defineProperty(exports2, "Report", { enumerable: true, get: function() {
              return report_1.Report;
            } });
            var dashboard_1 = __webpack_require__(
              /*! ./dashboard */
              "./src/dashboard.ts"
            );
            Object.defineProperty(exports2, "Dashboard", { enumerable: true, get: function() {
              return dashboard_1.Dashboard;
            } });
            var tile_1 = __webpack_require__(
              /*! ./tile */
              "./src/tile.ts"
            );
            Object.defineProperty(exports2, "Tile", { enumerable: true, get: function() {
              return tile_1.Tile;
            } });
            var embed_1 = __webpack_require__(
              /*! ./embed */
              "./src/embed.ts"
            );
            Object.defineProperty(exports2, "Embed", { enumerable: true, get: function() {
              return embed_1.Embed;
            } });
            var page_1 = __webpack_require__(
              /*! ./page */
              "./src/page.ts"
            );
            Object.defineProperty(exports2, "Page", { enumerable: true, get: function() {
              return page_1.Page;
            } });
            var qna_1 = __webpack_require__(
              /*! ./qna */
              "./src/qna.ts"
            );
            Object.defineProperty(exports2, "Qna", { enumerable: true, get: function() {
              return qna_1.Qna;
            } });
            var visual_1 = __webpack_require__(
              /*! ./visual */
              "./src/visual.ts"
            );
            Object.defineProperty(exports2, "Visual", { enumerable: true, get: function() {
              return visual_1.Visual;
            } });
            var visualDescriptor_1 = __webpack_require__(
              /*! ./visualDescriptor */
              "./src/visualDescriptor.ts"
            );
            Object.defineProperty(exports2, "VisualDescriptor", { enumerable: true, get: function() {
              return visualDescriptor_1.VisualDescriptor;
            } });
            var quickCreate_1 = __webpack_require__(
              /*! ./quickCreate */
              "./src/quickCreate.ts"
            );
            Object.defineProperty(exports2, "QuickCreate", { enumerable: true, get: function() {
              return quickCreate_1.QuickCreate;
            } });
            var create_1 = __webpack_require__(
              /*! ./create */
              "./src/create.ts"
            );
            Object.defineProperty(exports2, "Create", { enumerable: true, get: function() {
              return create_1.Create;
            } });
            var FilterBuilders_1 = __webpack_require__(
              /*! ./FilterBuilders */
              "./src/FilterBuilders/index.ts"
            );
            Object.defineProperty(exports2, "BasicFilterBuilder", { enumerable: true, get: function() {
              return FilterBuilders_1.BasicFilterBuilder;
            } });
            Object.defineProperty(exports2, "AdvancedFilterBuilder", { enumerable: true, get: function() {
              return FilterBuilders_1.AdvancedFilterBuilder;
            } });
            Object.defineProperty(exports2, "TopNFilterBuilder", { enumerable: true, get: function() {
              return FilterBuilders_1.TopNFilterBuilder;
            } });
            Object.defineProperty(exports2, "RelativeDateFilterBuilder", { enumerable: true, get: function() {
              return FilterBuilders_1.RelativeDateFilterBuilder;
            } });
            Object.defineProperty(exports2, "RelativeTimeFilterBuilder", { enumerable: true, get: function() {
              return FilterBuilders_1.RelativeTimeFilterBuilder;
            } });
            var powerbi = new service.Service(factories.hpmFactory, factories.wpmpFactory, factories.routerFactory);
            if (window.powerbi && window.powerBISDKGlobalServiceInstanceName) {
              window[window.powerBISDKGlobalServiceInstanceName] = powerbi;
            } else {
              window.powerbi = powerbi;
            }
          })();
          return __webpack_exports__;
        })()
      );
    });
  }
});

export {
  require_powerbi
};
/*! Bundled license information:

powerbi-client/dist/powerbi.js:
  (*! http-post-message v0.2.3 | (c) 2016 Microsoft Corporation MIT *)
  (*! powerbi-router v0.1.5 | (c) 2016 Microsoft Corporation MIT *)
  (*! For license information please see windowPostMessageProxy.js.LICENSE.txt *)
  (*!*******************************!*\
    !*** ./src/powerbi-client.ts ***!
    \*******************************)
*/
//# sourceMappingURL=chunk-6I5OBDWM.js.map
