/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@sentry/browser/esm/backend.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/backend.js ***!
  \*****************************************************/
/*! exports provided: BrowserBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserBackend", function() { return BrowserBackend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/index.js");






/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var BrowserBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        return Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromException"])(this._options, exception, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Info; }
        return Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromMessage"])(this._options, message, level, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype._setupTransport = function () {
        if (!this._options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype._setupTransport.call(this);
        }
        var transportOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._options.transportOptions), { dsn: this._options.dsn });
        if (this._options.transport) {
            return new this._options.transport(transportOptions);
        }
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["supportsFetch"])()) {
            return new _transports__WEBPACK_IMPORTED_MODULE_5__["FetchTransport"](transportOptions);
        }
        return new _transports__WEBPACK_IMPORTED_MODULE_5__["XHRTransport"](transportOptions);
    };
    return BrowserBackend;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["BaseBackend"]));

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/client.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/client.js ***!
  \****************************************************/
/*! exports provided: BrowserClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return BrowserClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend */ "./node_modules/@sentry/browser/esm/backend.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version */ "./node_modules/@sentry/browser/esm/version.js");







/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, _backend__WEBPACK_IMPORTED_MODULE_3__["BrowserBackend"], options) || this;
    }
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])().document;
        if (!document) {
            return;
        }
        if (!this._isEnabled()) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Trying to call showReportDialog with Sentry Client disabled');
            return;
        }
        Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["injectReportDialog"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { dsn: options.dsn || this.getDsn() }));
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
        event.platform = event.platform || 'javascript';
        event.sdk = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.sdk), { name: _version__WEBPACK_IMPORTED_MODULE_6__["SDK_NAME"], packages: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(((event.sdk && event.sdk.packages) || []), [
                {
                    name: 'npm:@sentry/browser',
                    version: _version__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"],
                },
            ]), version: _version__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"] });
        return _super.prototype._prepareEvent.call(this, event, scope, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._sendEvent = function (event) {
        var integration = this.getIntegration(_integrations__WEBPACK_IMPORTED_MODULE_5__["Breadcrumbs"]);
        if (integration) {
            integration.addSentryBreadcrumb(event);
        }
        _super.prototype._sendEvent.call(this, event);
    };
    return BrowserClient;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["BaseClient"]));

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/eventbuilder.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/eventbuilder.js ***!
  \**********************************************************/
/*! exports provided: eventFromException, eventFromMessage, eventFromUnknownInput, eventFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return eventFromException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return eventFromMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromUnknownInput", function() { return eventFromUnknownInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromString", function() { return eventFromString; });
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers */ "./node_modules/@sentry/browser/esm/parsers.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");




/**
 * Builds and Event from a Exception
 * @hidden
 */
function eventFromException(options, exception, hint) {
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromUnknownInput(exception, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addExceptionMechanism"])(event, {
        handled: true,
        type: 'generic',
    });
    event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"].Error;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].resolve(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(options, message, level, hint) {
    if (level === void 0) { level = _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"].Info; }
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromString(message, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    event.level = level;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].resolve(event);
}
/**
 * @hidden
 */
function eventFromUnknownInput(exception, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event;
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isErrorEvent"])(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        // eslint-disable-next-line no-param-reassign
        exception = errorEvent.error;
        event = Object(_parsers__WEBPACK_IMPORTED_MODULE_2__["eventFromStacktrace"])(Object(_tracekit__WEBPACK_IMPORTED_MODULE_3__["computeStackTrace"])(exception));
        return event;
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isDOMError"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isDOMException"])(exception)) {
        // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
        // then we just extract the name and message, as they don't provide anything else
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
        var domException = exception;
        var name_1 = domException.name || (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isDOMError"])(domException) ? 'DOMError' : 'DOMException');
        var message = domException.message ? name_1 + ": " + domException.message : name_1;
        event = eventFromString(message, syntheticException, options);
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addExceptionTypeValue"])(event, message);
        return event;
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isError"])(exception)) {
        // we have a real Error object, do nothing
        event = Object(_parsers__WEBPACK_IMPORTED_MODULE_2__["eventFromStacktrace"])(Object(_tracekit__WEBPACK_IMPORTED_MODULE_3__["computeStackTrace"])(exception));
        return event;
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isEvent"])(exception)) {
        // If it is plain Object or Event, serialize it manually and extract options
        // This will allow us to group events based on top-level keys
        // which is much better than creating new group when any key/value change
        var objectException = exception;
        event = Object(_parsers__WEBPACK_IMPORTED_MODULE_2__["eventFromPlainObject"])(objectException, syntheticException, options.rejection);
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addExceptionMechanism"])(event, {
            synthetic: true,
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception, syntheticException, options);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addExceptionTypeValue"])(event, "" + exception, undefined);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addExceptionMechanism"])(event, {
        synthetic: true,
    });
    return event;
}
/**
 * @hidden
 */
function eventFromString(input, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event = {
        message: input,
    };
    if (options.attachStacktrace && syntheticException) {
        var stacktrace = Object(_tracekit__WEBPACK_IMPORTED_MODULE_3__["computeStackTrace"])(syntheticException);
        var frames_1 = Object(_parsers__WEBPACK_IMPORTED_MODULE_2__["prepareFramesForEvent"])(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
//# sourceMappingURL=eventbuilder.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/exports.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/exports.js ***!
  \*****************************************************/
/*! exports provided: Severity, Status, addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, makeMain, Scope, startTransaction, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, BrowserClient, injectReportDialog, eventFromException, eventFromMessage, defaultIntegrations, forceLoad, init, lastEventId, onLoad, showReportDialog, flush, close, wrap, SDK_NAME, SDK_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Status"]; });

/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["withScope"]; });

/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _client__WEBPACK_IMPORTED_MODULE_2__["BrowserClient"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return _helpers__WEBPACK_IMPORTED_MODULE_3__["injectReportDialog"]; });

/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return _eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return _eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromMessage"]; });

/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk */ "./node_modules/@sentry/browser/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["wrap"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version */ "./node_modules/@sentry/browser/esm/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return _version__WEBPACK_IMPORTED_MODULE_6__["SDK_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"]; });








//# sourceMappingURL=exports.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/helpers.js ***!
  \*****************************************************/
/*! exports provided: shouldIgnoreOnError, ignoreNextOnError, wrap, injectReportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldIgnoreOnError", function() { return shouldIgnoreOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreNextOnError", function() { return ignoreNextOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return injectReportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn, options, before) {
    if (options === void 0) { options = {}; }
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        // We don't wanna wrap it twice
        if (fn.__sentry__) {
            return fn;
        }
        // If this has already been wrapped in the past, return that wrapped function
        if (fn.__sentry_wrapped__) {
            return fn.__sentry_wrapped__;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    /* eslint-disable prefer-rest-params */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var sentryWrapped = function () {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === 'function') {
                before.apply(this, arguments);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            var wrappedArguments = args.map(function (arg) { return wrap(arg, options); });
            if (fn.handleEvent) {
                // Attempt to invoke user-land function
                // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
                //       means the sentry.javascript SDK caught an error invoking your application code. This
                //       is expected behavior and NOT indicative of a bug with sentry.javascript.
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                return fn.handleEvent.apply(this, wrappedArguments);
            }
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        }
        catch (ex) {
            ignoreNextOnError();
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["withScope"])(function (scope) {
                scope.addEventProcessor(function (event) {
                    var processedEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event);
                    if (options.mechanism) {
                        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(processedEvent, undefined, undefined);
                        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(processedEvent, options.mechanism);
                    }
                    processedEvent.extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, processedEvent.extra), { arguments: args });
                    return processedEvent;
                });
                Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureException"])(ex);
            });
            throw ex;
        }
    };
    /* eslint-enable prefer-rest-params */
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // eslint-disable-line no-empty
    fn.prototype = fn.prototype || {};
    sentryWrapped.prototype = fn.prototype;
    Object.defineProperty(fn, '__sentry_wrapped__', {
        enumerable: false,
        value: sentryWrapped,
    });
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    Object.defineProperties(sentryWrapped, {
        __sentry__: {
            enumerable: false,
            value: true,
        },
        __sentry_original__: {
            enumerable: false,
            value: fn,
        },
    });
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get: function () {
                    return fn.name;
                },
            });
        }
        // eslint-disable-next-line no-empty
    }
    catch (_oO) { }
    return sentryWrapped;
}
/**
 * Injects the Report Dialog script
 * @hidden
 */
function injectReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!options.eventId) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Missing eventId option in showReportDialog call");
        return;
    }
    if (!options.dsn) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Missing dsn option in showReportDialog call");
        return;
    }
    var script = document.createElement('script');
    script.async = true;
    script.src = new _sentry_core__WEBPACK_IMPORTED_MODULE_1__["API"](options.dsn).getReportDialogEndpoint(options);
    if (options.onLoad) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        script.onload = options.onLoad;
    }
    (document.head || document.body).appendChild(script);
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/index.js ***!
  \***************************************************/
/*! exports provided: Severity, Status, addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, makeMain, Scope, startTransaction, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, BrowserClient, injectReportDialog, eventFromException, eventFromMessage, defaultIntegrations, forceLoad, init, lastEventId, onLoad, showReportDialog, flush, close, wrap, SDK_NAME, SDK_VERSION, Integrations, Transports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return INTEGRATIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports */ "./node_modules/@sentry/browser/esm/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Severity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["withScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["BrowserClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["injectReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["eventFromException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["eventFromMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["SDK_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["SDK_VERSION"]; });

/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Transports", function() { return _transports__WEBPACK_IMPORTED_MODULE_5__; });






var windowIntegrations = {};
// This block is needed to add compatibility with the integrations packages when used with a CDN
var _window = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
if (_window.Sentry && _window.Sentry.Integrations) {
    windowIntegrations = _window.Sentry.Integrations;
}
var INTEGRATIONS = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, windowIntegrations), _sentry_core__WEBPACK_IMPORTED_MODULE_2__["Integrations"]), _integrations__WEBPACK_IMPORTED_MODULE_4__);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js ***!
  \**********************************************************************/
/*! exports provided: Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable max-lines */



/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
var Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /**
     * Create a breadcrumb of `sentry` from the events themselves
     */
    Breadcrumbs.prototype.addSentryBreadcrumb = function (event) {
        if (!this._options.sentry) {
            return;
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: "sentry." + (event.type === 'transaction' ? 'transaction' : 'event'),
            event_id: event.event_id,
            level: event.level,
            message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event),
        }, {
            event: event,
        });
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        var _this = this;
        if (this._options.console) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._consoleBreadcrumb.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
                },
                type: 'console',
            });
        }
        if (this._options.dom) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._domBreadcrumb.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
                },
                type: 'dom',
            });
        }
        if (this._options.xhr) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._xhrBreadcrumb.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
                },
                type: 'xhr',
            });
        }
        if (this._options.fetch) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._fetchBreadcrumb.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
                },
                type: 'fetch',
            });
        }
        if (this._options.history) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._historyBreadcrumb.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
                },
                type: 'history',
            });
        }
    };
    /**
     * Creates breadcrumbs from console API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._consoleBreadcrumb = function (handlerData) {
        var breadcrumb = {
            category: 'console',
            data: {
                arguments: handlerData.args,
                logger: 'console',
            },
            level: _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].fromString(handlerData.level),
            message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["safeJoin"])(handlerData.args, ' '),
        };
        if (handlerData.level === 'assert') {
            if (handlerData.args[0] === false) {
                breadcrumb.message = "Assertion failed: " + (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["safeJoin"])(handlerData.args.slice(1), ' ') || 'console.assert');
                breadcrumb.data.arguments = handlerData.args.slice(1);
            }
            else {
                // Don't capture a breadcrumb for passed assertions
                return;
            }
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb(breadcrumb, {
            input: handlerData.args,
            level: handlerData.level,
        });
    };
    /**
     * Creates breadcrumbs from DOM API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._domBreadcrumb = function (handlerData) {
        var target;
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target
                ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(handlerData.event.target)
                : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(handlerData.event);
        }
        catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: "ui." + handlerData.name,
            message: target,
        }, {
            event: handlerData.event,
            name: handlerData.name,
        });
    };
    /**
     * Creates breadcrumbs from XHR API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._xhrBreadcrumb = function (handlerData) {
        if (handlerData.endTimestamp) {
            // We only capture complete, non-sentry requests
            if (handlerData.xhr.__sentry_own_request__) {
                return;
            }
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
                category: 'xhr',
                data: handlerData.xhr.__sentry_xhr__,
                type: 'http',
            }, {
                xhr: handlerData.xhr,
            });
            return;
        }
    };
    /**
     * Creates breadcrumbs from fetch API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._fetchBreadcrumb = function (handlerData) {
        // We only capture complete fetch requests
        if (!handlerData.endTimestamp) {
            return;
        }
        if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
            // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
            return;
        }
        if (handlerData.error) {
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
                category: 'fetch',
                data: handlerData.fetchData,
                level: _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error,
                type: 'http',
            }, {
                data: handlerData.error,
                input: handlerData.args,
            });
        }
        else {
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
                category: 'fetch',
                data: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData.fetchData), { status_code: handlerData.response.status }),
                type: 'http',
            }, {
                input: handlerData.args,
                response: handlerData.response,
            });
        }
    };
    /**
     * Creates breadcrumbs from history API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._historyBreadcrumb = function (handlerData) {
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
        var from = handlerData.from;
        var to = handlerData.to;
        var parsedLoc = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(global.location.href);
        var parsedFrom = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(from);
        var parsedTo = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(to);
        // Initial pushState doesn't provide `from` information
        if (!parsedFrom.path) {
            parsedFrom = parsedLoc;
        }
        // Use only the path component of the URL if the URL matches the current
        // document (almost all the time when using pushState)
        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
            to = parsedTo.relative;
        }
        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
            from = parsedFrom.relative;
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: 'navigation',
            data: {
                from: from,
                to: to,
            },
        });
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());

//# sourceMappingURL=breadcrumbs.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/globalhandlers.js ***!
  \*************************************************************************/
/*! exports provided: GlobalHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return GlobalHandlers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");

/* eslint-disable @typescript-eslint/no-unsafe-member-access */





/** Global handlers */
var GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        /** JSDoc */
        this._onErrorHandlerInstalled = false;
        /** JSDoc */
        this._onUnhandledRejectionHandlerInstalled = false;
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        if (this._options.onerror) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log('Global Handler attached: onerror');
            this._installGlobalOnErrorHandler();
        }
        if (this._options.onunhandledrejection) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log('Global Handler attached: onunhandledrejection');
            this._installGlobalOnUnhandledRejectionHandler();
        }
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnErrorHandler = function () {
        var _this = this;
        if (this._onErrorHandlerInstalled) {
            return;
        }
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (data) {
                var error = data.error;
                var currentHub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["shouldIgnoreOnError"])() || isFailedOwnDelivery) {
                    return;
                }
                var client = currentHub.getClient();
                var event = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(error)
                    ? _this._eventFromIncompleteOnError(data.msg, data.url, data.line, data.column)
                    : _this._enhanceEventWithInitialFrame(Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromUnknownInput"])(error, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: false,
                    }), data.url, data.line, data.column);
                Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addExceptionMechanism"])(event, {
                    handled: false,
                    type: 'onerror',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
            },
            type: 'error',
        });
        this._onErrorHandlerInstalled = true;
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var _this = this;
        if (this._onUnhandledRejectionHandlerInstalled) {
            return;
        }
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (e) {
                var error = e;
                // dig the object of the rejection out of known event types
                try {
                    // PromiseRejectionEvents store the object of the rejection under 'reason'
                    // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
                    if ('reason' in e) {
                        error = e.reason;
                    }
                    // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
                    // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
                    // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
                    // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
                    // https://github.com/getsentry/sentry-javascript/issues/2380
                    else if ('detail' in e && 'reason' in e.detail) {
                        error = e.detail.reason;
                    }
                }
                catch (_oO) {
                    // no-empty
                }
                var currentHub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["shouldIgnoreOnError"])() || isFailedOwnDelivery) {
                    return true;
                }
                var client = currentHub.getClient();
                var event = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(error)
                    ? _this._eventFromIncompleteRejection(error)
                    : Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromUnknownInput"])(error, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: true,
                    });
                event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error;
                Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addExceptionMechanism"])(event, {
                    handled: false,
                    type: 'onunhandledrejection',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
                return;
            },
            type: 'unhandledrejection',
        });
        this._onUnhandledRejectionHandlerInstalled = true;
    };
    /**
     * This function creates a stack from an old, error-less onerror handler.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._eventFromIncompleteOnError = function (msg, url, line, column) {
        var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        // If 'message' is ErrorEvent, get real message from inside
        var message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isErrorEvent"])(msg) ? msg.message : msg;
        var name;
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(message)) {
            var groups = message.match(ERROR_TYPES_RE);
            if (groups) {
                name = groups[1];
                message = groups[2];
            }
        }
        var event = {
            exception: {
                values: [
                    {
                        type: name || 'Error',
                        value: message,
                    },
                ],
            },
        };
        return this._enhanceEventWithInitialFrame(event, url, line, column);
    };
    /**
     * This function creates an Event from an TraceKitStackTrace that has part of it missing.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._eventFromIncompleteRejection = function (error) {
        return {
            exception: {
                values: [
                    {
                        type: 'UnhandledRejection',
                        value: "Non-Error promise rejection captured with value: " + error,
                    },
                ],
            },
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._enhanceEventWithInitialFrame = function (event, url, line, column) {
        event.exception = event.exception || {};
        event.exception.values = event.exception.values || [];
        event.exception.values[0] = event.exception.values[0] || {};
        event.exception.values[0].stacktrace = event.exception.values[0].stacktrace || {};
        event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames || [];
        var colno = isNaN(parseInt(column, 10)) ? undefined : column;
        var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
        var filename = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(url) && url.length > 0 ? url : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getLocationHref"])();
        if (event.exception.values[0].stacktrace.frames.length === 0) {
            event.exception.values[0].stacktrace.frames.push({
                colno: colno,
                filename: filename,
                function: '?',
                in_app: true,
                lineno: lineno,
            });
        }
        return event;
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

//# sourceMappingURL=globalhandlers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/index.js ***!
  \****************************************************************/
/*! exports provided: GlobalHandlers, TryCatch, Breadcrumbs, LinkedErrors, UserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalhandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalhandlers */ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return _globalhandlers__WEBPACK_IMPORTED_MODULE_0__["GlobalHandlers"]; });

/* harmony import */ var _trycatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trycatch */ "./node_modules/@sentry/browser/esm/integrations/trycatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return _trycatch__WEBPACK_IMPORTED_MODULE_1__["TryCatch"]; });

/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["Breadcrumbs"]; });

/* harmony import */ var _linkederrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkederrors */ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return _linkederrors__WEBPACK_IMPORTED_MODULE_3__["LinkedErrors"]; });

/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useragent */ "./node_modules/@sentry/browser/esm/integrations/useragent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAgent", function() { return _useragent__WEBPACK_IMPORTED_MODULE_4__["UserAgent"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/linkederrors.js ***!
  \***********************************************************************/
/*! exports provided: LinkedErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return LinkedErrors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parsers */ "./node_modules/@sentry/browser/esm/parsers.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");





var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event, hint) {
            var self = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(LinkedErrors);
            if (self) {
                return self._handler(event, hint);
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._handler = function (event, hint) {
        if (!event.exception || !event.exception.values || !hint || !Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(hint.originalException, Error)) {
            return event;
        }
        var linkedErrors = this._walkErrorTree(hint.originalException, this._key);
        event.exception.values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(linkedErrors, event.exception.values);
        return event;
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._walkErrorTree = function (error, key, stack) {
        if (stack === void 0) { stack = []; }
        if (!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(error[key], Error) || stack.length + 1 >= this._limit) {
            return stack;
        }
        var stacktrace = Object(_tracekit__WEBPACK_IMPORTED_MODULE_4__["computeStackTrace"])(error[key]);
        var exception = Object(_parsers__WEBPACK_IMPORTED_MODULE_3__["exceptionFromStacktrace"])(stacktrace);
        return this._walkErrorTree(error[key], key, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([exception], stack));
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

//# sourceMappingURL=linkederrors.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/trycatch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/trycatch.js ***!
  \*******************************************************************/
/*! exports provided: TryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return TryCatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");



var DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function TryCatch(options) {
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true }, options);
    }
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
        if (this._options.setTimeout) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(global, 'setTimeout', this._wrapTimeFunction.bind(this));
        }
        if (this._options.setInterval) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(global, 'setInterval', this._wrapTimeFunction.bind(this));
        }
        if (this._options.requestAnimationFrame) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(global, 'requestAnimationFrame', this._wrapRAF.bind(this));
        }
        if (this._options.XMLHttpRequest && 'XMLHttpRequest' in global) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this));
        }
        if (this._options.eventTarget) {
            var eventTarget = Array.isArray(this._options.eventTarget) ? this._options.eventTarget : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(this._wrapEventTarget.bind(this));
        }
    };
    /** JSDoc */
    TryCatch.prototype._wrapTimeFunction = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var originalCallback = args[0];
            args[0] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(originalCallback, {
                mechanism: {
                    data: { function: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(original) },
                    handled: true,
                    type: 'instrument',
                },
            });
            return original.apply(this, args);
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TryCatch.prototype._wrapRAF = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function (callback) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return original.call(this, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(original),
                    },
                    handled: true,
                    type: 'instrument',
                },
            }));
        };
    };
    /** JSDoc */
    TryCatch.prototype._wrapEventTarget = function (target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                try {
                    if (typeof fn.handleEvent === 'function') {
                        fn.handleEvent = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(fn.handleEvent.bind(fn), {
                            mechanism: {
                                data: {
                                    function: 'handleEvent',
                                    handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(fn),
                                    target: target,
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        });
                    }
                }
                catch (err) {
                    // can sometimes get 'Permission denied to access property "handle Event'
                }
                return original.call(this, eventName, 
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(fn),
                            target: target,
                        },
                        handled: true,
                        type: 'instrument',
                    },
                }), options);
            };
        });
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(proto, 'removeEventListener', function (original) {
            return function (eventName, fn, options) {
                /**
                 * There are 2 possible scenarios here:
                 *
                 * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
                 * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
                 * as a pass-through, and call original `removeEventListener` with it.
                 *
                 * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
                 * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
                 * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
                 * in order for us to make a distinction between wrapped/non-wrapped functions possible.
                 * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
                 *
                 * When someone adds a handler prior to initialization, and then do it again, but after,
                 * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
                 * to get rid of the initial handler and it'd stick there forever.
                 */
                try {
                    original.call(this, eventName, fn.__sentry_wrapped__, options);
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return original.call(this, eventName, fn, options);
            };
        });
    };
    /** JSDoc */
    TryCatch.prototype._wrapXHR = function (originalSend) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
            xmlHttpRequestProps.forEach(function (prop) {
                if (prop in xhr && typeof xhr[prop] === 'function') {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(xhr, prop, function (original) {
                        var wrapOptions = {
                            mechanism: {
                                data: {
                                    function: prop,
                                    handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(original),
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        };
                        // If Instrument integration has been called before TryCatch, get the name of original function
                        if (original.__sentry_original__) {
                            wrapOptions.mechanism.data.handler = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(original.__sentry_original__);
                        }
                        // Otherwise wrap directly
                        return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(original, wrapOptions);
                    });
                }
            });
            return originalSend.apply(this, args);
        };
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());

//# sourceMappingURL=trycatch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/useragent.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/useragent.js ***!
  \********************************************************************/
/*! exports provided: UserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAgent", function() { return UserAgent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
/** UserAgent */
var UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event) {
            if (Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(UserAgent)) {
                if (!global.navigator || !global.location) {
                    return event;
                }
                var request = event.request || {};
                request.url = request.url || global.location.href;
                request.headers = request.headers || {};
                request.headers['User-Agent'] = global.navigator.userAgent;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { request: request });
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

//# sourceMappingURL=useragent.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/parsers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/parsers.js ***!
  \*****************************************************/
/*! exports provided: exceptionFromStacktrace, eventFromPlainObject, eventFromStacktrace, prepareFramesForEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exceptionFromStacktrace", function() { return exceptionFromStacktrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromPlainObject", function() { return eventFromPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromStacktrace", function() { return eventFromStacktrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareFramesForEvent", function() { return prepareFramesForEvent; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _tracekit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracekit */ "./node_modules/@sentry/browser/esm/tracekit.js");


var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, rejection) {
    var event = {
        exception: {
            values: [
                {
                    type: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isEvent"])(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (rejection ? 'promise rejection' : 'exception') + " captured with keys: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["extractExceptionKeysForMessage"])(exception),
                },
            ],
        },
        extra: {
            __serialized__: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeToSize"])(exception),
        },
    };
    if (syntheticException) {
        var stacktrace = Object(_tracekit__WEBPACK_IMPORTED_MODULE_1__["computeStackTrace"])(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .slice(0, STACKTRACE_LIMIT)
        .map(function (frame) { return ({
        colno: frame.column === null ? undefined : frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line === null ? undefined : frame.line,
    }); })
        .reverse();
}
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/sdk.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/sdk.js ***!
  \*************************************************/
/*! exports provided: defaultIntegrations, init, showReportDialog, lastEventId, forceLoad, onLoad, flush, close, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return defaultIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return showReportDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return lastEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return forceLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");





var defaultIntegrations = [
    new _sentry_core__WEBPACK_IMPORTED_MODULE_0__["Integrations"].InboundFilters(),
    new _sentry_core__WEBPACK_IMPORTED_MODULE_0__["Integrations"].FunctionToString(),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["TryCatch"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["Breadcrumbs"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["GlobalHandlers"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["LinkedErrors"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_4__["UserAgent"](),
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init(options) {
    if (options === void 0) { options = {}; }
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === undefined) {
        var window_1 = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
        // This supports the variable that sentry-webpack-plugin injects
        if (window_1.SENTRY_RELEASE && window_1.SENTRY_RELEASE.id) {
            options.release = window_1.SENTRY_RELEASE.id;
        }
    }
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["initAndBind"])(_client__WEBPACK_IMPORTED_MODULE_2__["BrowserClient"], options);
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!options.eventId) {
        options.eventId = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().lastEventId();
    }
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
    if (client) {
        client.showReportDialog(options);
    }
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
    return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
    // Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
    callback();
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function flush(timeout) {
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
    if (client) {
        return client.flush(timeout);
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject(false);
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function close(timeout) {
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
    if (client) {
        return client.close(timeout);
    }
    return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject(false);
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrap(fn) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["wrap"])(fn)();
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/tracekit.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/tracekit.js ***!
  \******************************************************/
/*! exports provided: computeStackTrace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStackTrace", function() { return computeStackTrace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * This was originally forked from https://github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 */

// global reference to slice
var UNKNOWN_FUNCTION = '?';
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function computeStackTrace(ex) {
    var stack = null;
    var popSize = 0;
    if (ex) {
        if (typeof ex.framesToPop === 'number') {
            popSize = ex.framesToPop;
        }
        else if (reactMinifiedRegexp.test(ex.message)) {
            popSize = 1;
        }
    }
    try {
        // This must be tried first because Opera 10 *destroys*
        // its stacktrace property if you try to access the stack
        // property first!!
        stack = computeStackTraceFromStacktraceProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    return {
        message: extractMessage(ex),
        name: ex && ex.name,
        stack: [],
        failed: true,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, complexity
function computeStackTraceFromStackProp(ex) {
    if (!ex || !ex.stack) {
        return null;
    }
    var stack = [];
    var lines = ex.stack.split('\n');
    var isEval;
    var submatch;
    var parts;
    var element;
    for (var i = 0; i < lines.length; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
            isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = submatch[1]; // url
                parts[3] = submatch[2]; // line
                parts[4] = submatch[3]; // column
            }
            element = {
                // working with the regexp above is super painful. it is quite a hack, but just stripping the `address at `
                // prefix here seems like the quickest solution for now.
                url: parts[2] && parts[2].indexOf('address at ') === 0 ? parts[2].substr('address at '.length) : parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = ''; // no column when eval
            }
            else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
                // FireFox uses this awesome columnNumber property for its top frame
                // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                // so adding 1
                // NOTE: this hack doesn't work if top-most frame is eval
                stack[0].column = ex.columnNumber + 1;
            }
            element = {
                url: parts[3],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null,
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function computeStackTraceFromStacktraceProp(ex) {
    if (!ex || !ex.stacktrace) {
        return null;
    }
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;
    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
    var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i;
    var lines = stacktrace.split('\n');
    var stack = [];
    var parts;
    for (var line = 0; line < lines.length; line += 2) {
        var element = null;
        if ((parts = opera10Regex.exec(lines[line]))) {
            element = {
                url: parts[2],
                func: parts[3],
                args: [],
                line: +parts[1],
                column: null,
            };
        }
        else if ((parts = opera11Regex.exec(lines[line]))) {
            element = {
                url: parts[6],
                func: parts[3] || parts[4],
                args: parts[5] ? parts[5].split(',') : [],
                line: +parts[1],
                column: +parts[2],
            };
        }
        if (element) {
            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }
            stack.push(element);
        }
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** Remove N number of frames from the stack */
function popFrames(stacktrace, popSize) {
    try {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, stacktrace), { stack: stacktrace.stack.slice(popSize) });
    }
    catch (e) {
        return stacktrace;
    }
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}
//# sourceMappingURL=tracekit.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/base.js ***!
  \*************************************************************/
/*! exports provided: BaseTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTransport", function() { return BaseTransport; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/** Base Transport class implementation */
var BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        this.options = options;
        /** A simple buffer holding all requests. */
        this._buffer = new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["PromiseBuffer"](30);
        this._api = new _sentry_core__WEBPACK_IMPORTED_MODULE_0__["API"](this.options.dsn);
        // eslint-disable-next-line deprecation/deprecation
        this.url = this._api.getStoreEndpointWithUrlEncodedAuth();
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (_) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SentryError"]('Transport Class has to implement `sendEvent` method');
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return this._buffer.drain(timeout);
    };
    return BaseTransport;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/fetch.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/fetch.js ***!
  \**************************************************************/
/*! exports provided: FetchTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTransport", function() { return FetchTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");





var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
/** `fetch` based transport */
var FetchTransport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FetchTransport, _super);
    function FetchTransport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Locks transport after receiving 429 response */
        _this._disabledUntil = new Date(Date.now());
        return _this;
    }
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendEvent = function (event) {
        var _this = this;
        if (new Date(Date.now()) < this._disabledUntil) {
            return Promise.reject({
                event: event,
                reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                status: 429,
            });
        }
        var sentryReq = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["eventToSentryRequest"])(event, this._api);
        var options = {
            body: sentryReq.body,
            method: 'POST',
            // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
            // https://caniuse.com/#feat=referrer-policy
            // It doesn't. And it throw exception instead of ignoring this parameter...
            // REF: https://github.com/getsentry/raven-js/issues/1233
            referrerPolicy: (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["supportsReferrerPolicy"])() ? 'origin' : ''),
        };
        if (this.options.fetchParameters !== undefined) {
            Object.assign(options, this.options.fetchParameters);
        }
        if (this.options.headers !== undefined) {
            options.headers = this.options.headers;
        }
        return this._buffer.add(new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["SyncPromise"](function (resolve, reject) {
            global
                .fetch(sentryReq.url, options)
                .then(function (response) {
                var status = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Status"].fromHttpCode(response.status);
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Status"].Success) {
                    resolve({ status: status });
                    return;
                }
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Status"].RateLimit) {
                    var now = Date.now();
                    /**
                     * "The name is case-insensitive."
                     * https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
                     */
                    var retryAfterHeader = response.headers.get('Retry-After');
                    _this._disabledUntil = new Date(now + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseRetryAfterHeader"])(now, retryAfterHeader));
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Too many requests, backing off till: " + _this._disabledUntil);
                }
                reject(response);
            })
                .catch(reject);
        }));
    };
    return FetchTransport;
}(_base__WEBPACK_IMPORTED_MODULE_4__["BaseTransport"]));

//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/index.js ***!
  \**************************************************************/
/*! exports provided: BaseTransport, FetchTransport, XHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTransport", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["BaseTransport"]; });

/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./node_modules/@sentry/browser/esm/transports/fetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchTransport", function() { return _fetch__WEBPACK_IMPORTED_MODULE_1__["FetchTransport"]; });

/* harmony import */ var _xhr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhr */ "./node_modules/@sentry/browser/esm/transports/xhr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHRTransport", function() { return _xhr__WEBPACK_IMPORTED_MODULE_2__["XHRTransport"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/xhr.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/xhr.js ***!
  \************************************************************/
/*! exports provided: XHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRTransport", function() { return XHRTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");





/** `XHR` based transport */
var XHRTransport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(XHRTransport, _super);
    function XHRTransport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Locks transport after receiving 429 response */
        _this._disabledUntil = new Date(Date.now());
        return _this;
    }
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendEvent = function (event) {
        var _this = this;
        if (new Date(Date.now()) < this._disabledUntil) {
            return Promise.reject({
                event: event,
                reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                status: 429,
            });
        }
        var sentryReq = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["eventToSentryRequest"])(event, this._api);
        return this._buffer.add(new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["SyncPromise"](function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState !== 4) {
                    return;
                }
                var status = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Status"].fromHttpCode(request.status);
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Status"].Success) {
                    resolve({ status: status });
                    return;
                }
                if (status === _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Status"].RateLimit) {
                    var now = Date.now();
                    /**
                     * "The search for the header name is case-insensitive."
                     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader
                     */
                    var retryAfterHeader = request.getResponseHeader('Retry-After');
                    _this._disabledUntil = new Date(now + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseRetryAfterHeader"])(now, retryAfterHeader));
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Too many requests, backing off till: " + _this._disabledUntil);
                }
                reject(request);
            };
            request.open('POST', sentryReq.url);
            for (var header in _this.options.headers) {
                if (_this.options.headers.hasOwnProperty(header)) {
                    request.setRequestHeader(header, _this.options.headers[header]);
                }
            }
            request.send(sentryReq.body);
        }));
    };
    return XHRTransport;
}(_base__WEBPACK_IMPORTED_MODULE_4__["BaseTransport"]));

//# sourceMappingURL=xhr.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/version.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/version.js ***!
  \*****************************************************/
/*! exports provided: SDK_NAME, SDK_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return SDK_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return SDK_VERSION; });
var SDK_NAME = 'sentry.javascript.browser';
var SDK_VERSION = '5.22.3';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/api.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/api.js ***!
  \**********************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

var SENTRY_API_VERSION = '7';
/** Helper class to provide urls to different Sentry endpoints. */
var API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn) {
        this.dsn = dsn;
        this._dsnObject = new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["Dsn"](dsn);
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this._dsnObject;
    };
    /** Returns the prefix to construct Sentry ingestion API endpoints. */
    API.prototype.getBaseApiEndpoint = function () {
        var dsn = this._dsnObject;
        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
        var port = dsn.port ? ":" + dsn.port : '';
        return protocol + "//" + dsn.host + port + (dsn.path ? "/" + dsn.path : '') + "/api/";
    };
    /** Returns the store endpoint URL. */
    API.prototype.getStoreEndpoint = function () {
        return this._getIngestEndpoint('store');
    };
    /**
     * Returns the store endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        return this.getStoreEndpoint() + "?" + this._encodedAuth();
    };
    /**
     * Returns the envelope endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
    };
    /** Returns only the path component for the store endpoint. */
    API.prototype.getStoreEndpointPath = function () {
        var dsn = this._dsnObject;
        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
    };
    /**
     * Returns an object that can be used in request headers.
     * This is needed for node and the old /store endpoint in sentry
     */
    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
        var dsn = this._dsnObject;
        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
        header.push("sentry_client=" + clientName + "/" + clientVersion);
        header.push("sentry_key=" + dsn.user);
        if (dsn.pass) {
            header.push("sentry_secret=" + dsn.pass);
        }
        return {
            'Content-Type': 'application/json',
            'X-Sentry-Auth': header.join(', '),
        };
    };
    /** Returns the url to the report dialog endpoint. */
    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
        if (dialogOptions === void 0) { dialogOptions = {}; }
        var dsn = this._dsnObject;
        var endpoint = this.getBaseApiEndpoint() + "embed/error-page/";
        var encodedOptions = [];
        encodedOptions.push("dsn=" + dsn.toString());
        for (var key in dialogOptions) {
            if (key === 'user') {
                if (!dialogOptions.user) {
                    continue;
                }
                if (dialogOptions.user.name) {
                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
                }
                if (dialogOptions.user.email) {
                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
                }
            }
            else {
                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
            }
        }
        if (encodedOptions.length) {
            return endpoint + "?" + encodedOptions.join('&');
        }
        return endpoint;
    };
    /** Returns the envelope endpoint URL. */
    API.prototype._getEnvelopeEndpoint = function () {
        return this._getIngestEndpoint('envelope');
    };
    /** Returns the ingest API endpoint for target. */
    API.prototype._getIngestEndpoint = function (target) {
        var base = this.getBaseApiEndpoint();
        var dsn = this._dsnObject;
        return "" + base + dsn.projectId + "/" + target + "/";
    };
    /** Returns a URL-encoded string with auth config suitable for a query string. */
    API.prototype._encodedAuth = function () {
        var dsn = this._dsnObject;
        var auth = {
            // We send only the minimum set of required information. See
            // https://github.com/getsentry/sentry-javascript/issues/2572.
            sentry_key: dsn.user,
            sentry_version: SENTRY_API_VERSION,
        };
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["urlEncode"])(auth);
    };
    return API;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/basebackend.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/basebackend.js ***!
  \******************************************************/
/*! exports provided: BaseBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseBackend", function() { return BaseBackend; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _transports_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transports/noop */ "./node_modules/@sentry/core/esm/transports/noop.js");


/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var BaseBackend = /** @class */ (function () {
    /** Creates a new backend instance. */
    function BaseBackend(options) {
        this._options = options;
        if (!this._options.dsn) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('No DSN provided, backend will not do anything.');
        }
        this._transport = this._setupTransport();
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Backend has to implement `eventFromException` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Backend has to implement `eventFromMessage` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        this._transport.sendEvent(event).then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].error("Error while sending event: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this._transport;
    };
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype._setupTransport = function () {
        return new _transports_noop__WEBPACK_IMPORTED_MODULE_1__["NoopTransport"]();
    };
    return BaseBackend;
}());

//# sourceMappingURL=basebackend.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/baseclient.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/core/esm/baseclient.js ***!
  \*****************************************************/
/*! exports provided: BaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return BaseClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integration */ "./node_modules/@sentry/core/esm/integration.js");

/* eslint-disable max-lines */



/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient.prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** Array of used integrations. */
        this._integrations = {};
        /** Is the client still processing a call? */
        this._processing = false;
        this._backend = new backendClass(options);
        this._options = options;
        if (options.dsn) {
            this._dsn = new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["Dsn"](options.dsn);
        }
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        this._processing = true;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._getBackend()
            .eventFromException(exception, hint)
            .then(function (event) {
            eventId = _this.captureEvent(event, hint, scope);
        });
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        this._processing = true;
        var promisedEvent = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"])(message)
            ? this._getBackend().eventFromMessage("" + message, level, hint)
            : this._getBackend().eventFromException(message, hint);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        promisedEvent.then(function (event) {
            eventId = _this.captureEvent(event, hint, scope);
        });
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        this._processing = true;
        this._processEvent(event, hint, scope)
            .then(function (finalEvent) {
            // We need to check for finalEvent in case beforeSend returned null
            eventId = finalEvent && finalEvent.event_id;
            _this._processing = false;
        })
            .then(null, function (reason) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error(reason);
            _this._processing = false;
        });
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this._dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        var _this = this;
        return this._isClientProcessing(timeout).then(function (status) {
            clearInterval(status.interval);
            return _this._getBackend()
                .getTransport()
                .close(timeout)
                .then(function (transportFlushed) { return status.ready && transportFlushed; });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        var _this = this;
        return this.flush(timeout).then(function (result) {
            _this.getOptions().enabled = false;
            return result;
        });
    };
    /**
     * Sets up the integrations
     */
    BaseClient.prototype.setupIntegrations = function () {
        if (this._isEnabled()) {
            this._integrations = Object(_integration__WEBPACK_IMPORTED_MODULE_3__["setupIntegrations"])(this._options);
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this._integrations[integration.id] || null;
        }
        catch (_oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    /** Waits for the client to be done with processing. */
    BaseClient.prototype._isClientProcessing = function (timeout) {
        var _this = this;
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"](function (resolve) {
            var ticked = 0;
            var tick = 1;
            var interval = 0;
            clearInterval(interval);
            interval = setInterval(function () {
                if (!_this._processing) {
                    resolve({
                        interval: interval,
                        ready: true,
                    });
                }
                else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        resolve({
                            interval: interval,
                            ready: false,
                        });
                    }
                }
            }, tick);
        });
    };
    /** Returns the current backend. */
    BaseClient.prototype._getBackend = function () {
        return this._backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype._isEnabled = function () {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype._prepareEvent = function (event, scope, hint) {
        var _this = this;
        var _a = this.getOptions().normalizeDepth, normalizeDepth = _a === void 0 ? 3 : _a;
        var prepared = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { event_id: event.event_id || (hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["uuid4"])()), timestamp: event.timestamp || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["timestampWithMs"])() });
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        var finalScope = scope;
        if (hint && hint.captureContext) {
            finalScope = _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Scope"].clone(finalScope).update(hint.captureContext);
        }
        // We prepare the result here with a resolved Event.
        var result = _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"].resolve(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then(function (evt) {
            if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
                return _this._normalizeEvent(evt, normalizeDepth);
            }
            return evt;
        });
    };
    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
    BaseClient.prototype._normalizeEvent = function (event, depth) {
        if (!event) {
            return null;
        }
        var normalized = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), (event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(function (b) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, b), (b.data && {
                data: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(b.data, depth),
            }))); }),
        })), (event.user && {
            user: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(event.user, depth),
        })), (event.contexts && {
            contexts: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(event.contexts, depth),
        })), (event.extra && {
            extra: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(event.extra, depth),
        }));
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            normalized.contexts.trace = event.contexts.trace;
        }
        return normalized;
    };
    /**
     *  Enhances event using the client configuration.
     *  It takes care of all "static" values like environment, release and `dist`,
     *  as well as truncating overly long values.
     * @param event event instance to be enhanced
     */
    BaseClient.prototype._applyClientOptions = function (event) {
        var _a = this.getOptions(), environment = _a.environment, release = _a.release, dist = _a.dist, _b = _a.maxValueLength, maxValueLength = _b === void 0 ? 250 : _b;
        if (event.environment === undefined && environment !== undefined) {
            event.environment = environment;
        }
        if (event.release === undefined && release !== undefined) {
            event.release = release;
        }
        if (event.dist === undefined && dist !== undefined) {
            event.dist = dist;
        }
        if (event.message) {
            event.message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["truncate"])(event.message, maxValueLength);
        }
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) {
            exception.value = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["truncate"])(exception.value, maxValueLength);
        }
        var request = event.request;
        if (request && request.url) {
            request.url = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["truncate"])(request.url, maxValueLength);
        }
    };
    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param sdkInfo The sdkInfo of the event that will be filled with all integrations.
     */
    BaseClient.prototype._applyIntegrationsMetadata = function (event) {
        var sdkInfo = event.sdk;
        var integrationsArray = Object.keys(this._integrations);
        if (sdkInfo && integrationsArray.length > 0) {
            sdkInfo.integrations = integrationsArray;
        }
    };
    /**
     * Tells the backend to send this event
     * @param event The Sentry event to send
     */
    BaseClient.prototype._sendEvent = function (event) {
        this._getBackend().sendEvent(event);
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    BaseClient.prototype._processEvent = function (event, hint, scope) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
        if (!this._isEnabled()) {
            return _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"].reject('SDK not enabled, will not send event.');
        }
        var isTransaction = event.type === 'transaction';
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === 'number' && Math.random() > sampleRate) {
            return _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"].reject('This event has been sampled, will not send event.');
        }
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"](function (resolve, reject) {
            _this._prepareEvent(event, scope, hint)
                .then(function (prepared) {
                if (prepared === null) {
                    reject('An event processor returned null, will not send event.');
                    return;
                }
                var finalEvent = prepared;
                var isInternalException = hint && hint.data && hint.data.__sentry__ === true;
                // We skip beforeSend in case of transactions
                if (isInternalException || !beforeSend || isTransaction) {
                    _this._sendEvent(finalEvent);
                    resolve(finalEvent);
                    return;
                }
                var beforeSendResult = beforeSend(prepared, hint);
                if (typeof beforeSendResult === 'undefined') {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('`beforeSend` method has to return `null` or a valid event.');
                }
                else if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isThenable"])(beforeSendResult)) {
                    _this._handleAsyncBeforeSend(beforeSendResult, resolve, reject);
                }
                else {
                    finalEvent = beforeSendResult;
                    if (finalEvent === null) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log('`beforeSend` returned `null`, will not send event.');
                        resolve(null);
                        return;
                    }
                    // From here on we are really async
                    _this._sendEvent(finalEvent);
                    resolve(finalEvent);
                }
            })
                .then(null, function (reason) {
                _this.captureException(reason, {
                    data: {
                        __sentry__: true,
                    },
                    originalException: reason,
                });
                reject("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
            });
        });
    };
    /**
     * Resolves before send Promise and calls resolve/reject on parent SyncPromise.
     */
    BaseClient.prototype._handleAsyncBeforeSend = function (beforeSend, resolve, reject) {
        var _this = this;
        beforeSend
            .then(function (processedEvent) {
            if (processedEvent === null) {
                reject('`beforeSend` returned `null`, will not send event.');
                return;
            }
            // From here on we are really async
            _this._sendEvent(processedEvent);
            resolve(processedEvent);
        })
            .then(null, function (e) {
            reject("beforeSend rejected with " + e);
        });
    };
    return BaseClient;
}());

//# sourceMappingURL=baseclient.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/core/esm/index.js ***!
  \************************************************/
/*! exports provided: addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, startTransaction, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, addGlobalEventProcessor, getCurrentHub, getHubFromCarrier, Hub, makeMain, Scope, API, BaseClient, BaseBackend, eventToSentryRequest, initAndBind, NoopTransport, Integrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/minimal */ "./node_modules/@sentry/minimal/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["withScope"]; });

/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/@sentry/core/esm/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["API"]; });

/* harmony import */ var _baseclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseclient */ "./node_modules/@sentry/core/esm/baseclient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return _baseclient__WEBPACK_IMPORTED_MODULE_3__["BaseClient"]; });

/* harmony import */ var _basebackend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basebackend */ "./node_modules/@sentry/core/esm/basebackend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseBackend", function() { return _basebackend__WEBPACK_IMPORTED_MODULE_4__["BaseBackend"]; });

/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request */ "./node_modules/@sentry/core/esm/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventToSentryRequest", function() { return _request__WEBPACK_IMPORTED_MODULE_5__["eventToSentryRequest"]; });

/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sdk */ "./node_modules/@sentry/core/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return _sdk__WEBPACK_IMPORTED_MODULE_6__["initAndBind"]; });

/* harmony import */ var _transports_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transports/noop */ "./node_modules/@sentry/core/esm/transports/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopTransport", function() { return _transports_noop__WEBPACK_IMPORTED_MODULE_7__["NoopTransport"]; });

/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/core/esm/integrations/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _integrations__WEBPACK_IMPORTED_MODULE_8__; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integration.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integration.js ***!
  \******************************************************/
/*! exports provided: installedIntegrations, getIntegrationsToSetup, setupIntegration, setupIntegrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedIntegrations", function() { return installedIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntegrationsToSetup", function() { return getIntegrationsToSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntegration", function() { return setupIntegration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntegrations", function() { return setupIntegrations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



var installedIntegrations = [];
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var defaultIntegrations = (options.defaultIntegrations && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = [];
    if (Array.isArray(userIntegrations)) {
        var userIntegrationsNames_1 = userIntegrations.map(function (i) { return i.name; });
        var pickedIntegrationsNames_1 = [];
        // Leave only unique default integrations, that were not overridden with provided user integrations
        defaultIntegrations.forEach(function (defaultIntegration) {
            if (userIntegrationsNames_1.indexOf(defaultIntegration.name) === -1 &&
                pickedIntegrationsNames_1.indexOf(defaultIntegration.name) === -1) {
                integrations.push(defaultIntegration);
                pickedIntegrationsNames_1.push(defaultIntegration.name);
            }
        });
        // Don't add same user integration twice
        userIntegrations.forEach(function (userIntegration) {
            if (pickedIntegrationsNames_1.indexOf(userIntegration.name) === -1) {
                integrations.push(userIntegration);
                pickedIntegrationsNames_1.push(userIntegration.name);
            }
        });
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(defaultIntegrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    else {
        integrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(defaultIntegrations);
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map(function (i) { return i.name; });
    var alwaysLastToRun = 'Debug';
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) {
        integrations.push.apply(integrations, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
    }
    return integrations;
}
/** Setup given integration */
function setupIntegration(integration) {
    if (installedIntegrations.indexOf(integration.name) !== -1) {
        return;
    }
    integration.setupOnce(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"], _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]);
    installedIntegrations.push(integration.name);
    _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[integration.name] = integration;
        setupIntegration(integration);
    });
    return integrations;
}
//# sourceMappingURL=integration.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/functiontostring.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/functiontostring.js ***!
  \************************************************************************/
/*! exports provided: FunctionToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return FunctionToString; });
var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        originalFunctionToString = Function.prototype.toString;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this.__sentry_original__ || this;
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());

//# sourceMappingURL=functiontostring.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/inboundfilters.js ***!
  \**********************************************************************/
/*! exports provided: InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return InboundFilters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var InboundFilters = /** @class */ (function () {
    function InboundFilters(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function () {
        Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event) {
            var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
            if (!hub) {
                return event;
            }
            var self = hub.getIntegration(InboundFilters);
            if (self) {
                var client = hub.getClient();
                var clientOptions = client ? client.getOptions() : {};
                var options = self._mergeOptions(clientOptions);
                if (self._shouldDropEvent(event, options)) {
                    return null;
                }
            }
            return event;
        });
    };
    /** JSDoc */
    InboundFilters.prototype._shouldDropEvent = function (event, options) {
        if (this._isSentryError(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
            return true;
        }
        if (this._isIgnoredError(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
            return true;
        }
        if (this._isDeniedUrl(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        if (!this._isAllowedUrl(event, options)) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype._isSentryError = function (event, options) {
        if (!options.ignoreInternal) {
            return false;
        }
        try {
            return ((event &&
                event.exception &&
                event.exception.values &&
                event.exception.values[0] &&
                event.exception.values[0].type === 'SentryError') ||
                false);
        }
        catch (_oO) {
            return false;
        }
    };
    /** JSDoc */
    InboundFilters.prototype._isIgnoredError = function (event, options) {
        if (!options.ignoreErrors || !options.ignoreErrors.length) {
            return false;
        }
        return this._getPossibleEventMessages(event).some(function (message) {
            // Not sure why TypeScript complains here...
            return options.ignoreErrors.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(message, pattern); });
        });
    };
    /** JSDoc */
    InboundFilters.prototype._isDeniedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.denyUrls || !options.denyUrls.length) {
            return false;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? false : options.denyUrls.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._isAllowedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.allowUrls || !options.allowUrls.length) {
            return true;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? true : options.allowUrls.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._mergeOptions = function (clientOptions) {
        if (clientOptions === void 0) { clientOptions = {}; }
        return {
            allowUrls: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((this._options.whitelistUrls || []), (this._options.allowUrls || []), (clientOptions.whitelistUrls || []), (clientOptions.allowUrls || [])),
            denyUrls: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((this._options.blacklistUrls || []), (this._options.denyUrls || []), (clientOptions.blacklistUrls || []), (clientOptions.denyUrls || [])),
            ignoreErrors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((this._options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
            ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
        };
    };
    /** JSDoc */
    InboundFilters.prototype._getPossibleEventMessages = function (event) {
        if (event.message) {
            return [event.message];
        }
        if (event.exception) {
            try {
                var _a = (event.exception.values && event.exception.values[0]) || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
                return ["" + value, type + ": " + value];
            }
            catch (oO) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Cannot extract message for event " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
                return [];
            }
        }
        return [];
    };
    /** JSDoc */
    InboundFilters.prototype._getEventFilterUrl = function (event) {
        try {
            if (event.stacktrace) {
                var frames_1 = event.stacktrace.frames;
                return (frames_1 && frames_1[frames_1.length - 1].filename) || null;
            }
            if (event.exception) {
                var frames_2 = event.exception.values && event.exception.values[0].stacktrace && event.exception.values[0].stacktrace.frames;
                return (frames_2 && frames_2[frames_2.length - 1].filename) || null;
            }
            return null;
        }
        catch (oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Cannot extract url for event " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getEventDescription"])(event));
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());

//# sourceMappingURL=inboundfilters.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/index.js ***!
  \*************************************************************/
/*! exports provided: FunctionToString, InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functiontostring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functiontostring */ "./node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _functiontostring__WEBPACK_IMPORTED_MODULE_0__["FunctionToString"]; });

/* harmony import */ var _inboundfilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboundfilters */ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _inboundfilters__WEBPACK_IMPORTED_MODULE_1__["InboundFilters"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/request.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/request.js ***!
  \**************************************************/
/*! exports provided: eventToSentryRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventToSentryRequest", function() { return eventToSentryRequest; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

/** Creates a SentryRequest from an event. */
function eventToSentryRequest(event, api) {
    var useEnvelope = event.type === 'transaction';
    var req = {
        body: JSON.stringify(event),
        url: useEnvelope ? api.getEnvelopeEndpointWithUrlEncodedAuth() : api.getStoreEndpointWithUrlEncodedAuth(),
    };
    // https://develop.sentry.dev/sdk/envelopes/
    // Since we don't need to manipulate envelopes nor store them, there is no
    // exported concept of an Envelope with operations including serialization and
    // deserialization. Instead, we only implement a minimal subset of the spec to
    // serialize events inline here.
    if (useEnvelope) {
        var envelopeHeaders = JSON.stringify({
            event_id: event.event_id,
            // We need to add * 1000 since we divide it by 1000 by default but JS works with ms precision
            // The reason we use timestampWithMs here is that all clocks across the SDK use the same clock
            sent_at: new Date(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["timestampWithMs"])() * 1000).toISOString(),
        });
        var itemHeaders = JSON.stringify({
            type: event.type,
        });
        // The trailing newline is optional. We intentionally don't send it to avoid
        // sending unnecessary bytes.
        //
        // const envelope = `${envelopeHeaders}\n${itemHeaders}\n${req.body}\n`;
        var envelope = envelopeHeaders + "\n" + itemHeaders + "\n" + req.body;
        req.body = envelope;
    }
    return req;
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/sdk.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/sdk.js ***!
  \**********************************************/
/*! exports provided: initAndBind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return initAndBind; });
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instanciate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
    if (options.debug === true) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].enable();
    }
    var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])();
    var client = new clientClass(options);
    hub.bindClient(client);
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/transports/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/core/esm/transports/noop.js ***!
  \**********************************************************/
/*! exports provided: NoopTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopTransport", function() { return NoopTransport; });
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/** Noop transport */
var NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Status"].Skipped,
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].resolve(true);
    };
    return NoopTransport;
}());

//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/hub.js":
/*!*********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/hub.js ***!
  \*********************************************/
/*! exports provided: API_VERSION, Hub, getMainCarrier, makeMain, getCurrentHub, getHubFromCarrier, setHubOnCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return Hub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return getMainCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return makeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return getCurrentHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return getHubFromCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return setHubOnCarrier; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope */ "./node_modules/@sentry/hub/esm/scope.js");



/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 3;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * Absolute maximum number of breadcrumbs added to an event. The
 * `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [];
        this._stack.push({ client: client, scope: scope });
        this.bindClient(client);
    }
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var stack = this.getStack();
        var parentScope = stack.length > 0 ? stack[stack.length - 1].scope : undefined;
        var scope = _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"].clone(parentScope);
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        return this.getStack().pop() !== undefined;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimick the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimick the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = (this._lastEventId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        this._invokeClient('captureEvent', event, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var top = this.getStackTop();
        if (!top.scope || !top.client) {
            return;
        }
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = (top.client.getOptions && top.client.getOptions()) || {}, _b = _a.beforeBreadcrumb, beforeBreadcrumb = _b === void 0 ? null : _b, _c = _a.maxBreadcrumbs, maxBreadcrumbs = _c === void 0 ? DEFAULT_BREADCRUMBS : _c;
        if (maxBreadcrumbs <= 0) {
            return;
        }
        var timestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])();
        var mergedBreadcrumb = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["consoleSandbox"])(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null) {
            return;
        }
        top.scope.addBreadcrumb(finalBreadcrumb, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS));
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype.setContext = function (name, context) {
        var top = this.getStackTop();
        if (!top.scope) {
            return;
        }
        top.scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var top = this.getStackTop();
        if (top.scope && top.client) {
            callback(top.scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client) {
            return null;
        }
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (context) {
        return this._callExtensionMethod('startSpan', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startTransaction = function (context) {
        return this._callExtensionMethod('startTransaction', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var top = this.getStackTop();
        if (top && top.client && top.client[method]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            (_a = top.client)[method].apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args, [top.scope]));
        }
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());

/** Returns the global shim registry. */
function getMainCarrier() {
    var carrier = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isNodeEnv"])()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    try {
        var property = 'domain';
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (!sentry || !sentry.extensions || !sentry.extensions[property]) {
            return getHubFromCarrier(registry);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var domain = sentry.extensions[property];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var activeDomain = domain.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"].clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
        return true;
    }
    return false;
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
        return carrier.__SENTRY__.hub;
    }
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = new Hub();
    return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier) {
        return false;
    }
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}
//# sourceMappingURL=hub.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/index.js ***!
  \***********************************************/
/*! exports provided: addGlobalEventProcessor, Scope, getCurrentHub, getHubFromCarrier, getMainCarrier, Hub, makeMain, setHubOnCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _scope__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"]; });

/* harmony import */ var _hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["getMainCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_1__["setHubOnCarrier"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/scope.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/scope.js ***!
  \***********************************************/
/*! exports provided: Scope, addGlobalEventProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return addGlobalEventProcessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifiying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._extra = {};
        /** Contexts */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._contexts = {};
    }
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(scope._breadcrumbs);
            newScope._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scope._tags);
            newScope._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scope._extra);
            newScope._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scope._contexts);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(scope._eventProcessors);
        }
        return newScope;
    };
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransactionName = function (name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Can be removed in major version.
     * @deprecated in favor of {@link this.setTransactionName}
     */
    Scope.prototype.setTransaction = function (name) {
        return this.setTransactionName(name);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Scope.prototype.setContext = function (key, context) {
        var _a;
        this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), (_a = {}, _a[key] = context, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getTransaction = function () {
        var span = this.getSpan();
        if (span && span.spanRecorder && span.spanRecorder.spans[0]) {
            return span.spanRecorder.spans[0];
        }
        return undefined;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.update = function (captureContext) {
        if (!captureContext) {
            return this;
        }
        if (typeof captureContext === 'function') {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), captureContext._tags);
            this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), captureContext._extra);
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), captureContext._contexts);
            if (captureContext._user) {
                this._user = captureContext._user;
            }
            if (captureContext._level) {
                this._level = captureContext._level;
            }
            if (captureContext._fingerprint) {
                this._fingerprint = captureContext._fingerprint;
            }
        }
        else if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(captureContext)) {
            // eslint-disable-next-line no-param-reassign
            captureContext = captureContext;
            this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), captureContext.tags);
            this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), captureContext.extra);
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), captureContext.contexts);
            if (captureContext.user) {
                this._user = captureContext.user;
            }
            if (captureContext.level) {
                this._level = captureContext.level;
            }
            if (captureContext.fingerprint) {
                this._fingerprint = captureContext.fingerprint;
            }
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._span = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var mergedBreadcrumb = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ timestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])() }, breadcrumb);
        this._breadcrumbs =
            maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
                ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._breadcrumbs, [mergedBreadcrumb]).slice(-maxBreadcrumbs)
                : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._breadcrumbs, [mergedBreadcrumb]);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional informartion about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._user), event.user);
        }
        if (this._contexts && Object.keys(this._contexts).length) {
            event.contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transactionName) {
            event.transaction = this._transactionName;
        }
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relys on that.
        if (this._span) {
            event.contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ trace: this._span.getTraceContext() }, event.contexts);
        }
        this._applyFingerprint(event);
        event.breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        return this._notifyEventProcessors(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
            var processor = processors[index];
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), hint);
                if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isThenable"])(result)) {
                    result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            setTimeout(function () {
                _this._scopeListeners.forEach(function (callback) {
                    callback(_this);
                });
                _this._notifyingListeners = false;
            });
        }
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    return Scope;
}());

/**
 * Retruns the global event processors.
 */
function getGlobalEventProcessors() {
    var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}
//# sourceMappingURL=scope.js.map

/***/ }),

/***/ "./node_modules/@sentry/minimal/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/minimal/esm/index.js ***!
  \***************************************************/
/*! exports provided: captureException, captureMessage, captureEvent, configureScope, addBreadcrumb, setContext, setExtras, setTags, setExtra, setTag, setUser, withScope, _callOnClient, startTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return captureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return captureMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return captureEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return configureScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return addBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return setExtras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return setTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return setExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return setTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return withScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_callOnClient", function() { return _callOnClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return startTransaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");


/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
    if (hub && hub[method]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return hub[method].apply(hub, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        captureContext: captureContext,
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, captureContext) {
    var syntheticException;
    try {
        throw new Error(message);
    }
    catch (exception) {
        syntheticException = exception;
    }
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arrity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === 'string' ? captureContext : undefined;
    var context = typeof captureContext !== 'string' ? { captureContext: captureContext } : undefined;
    return callOnHub('captureMessage', message, level, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ originalException: message, syntheticException: syntheticException }, context));
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
    return callOnHub('captureEvent', event);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
    callOnHub('configureScope', callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
    callOnHub('addBreadcrumb', breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
    callOnHub('setContext', name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
    callOnHub('setExtras', extras);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
    callOnHub('setTags', tags);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
    callOnHub('setExtra', key, extra);
}
/**
 * Set key:value that will be sent as tags data with the event.
 * @param key String key of tag
 * @param value String value of tag
 */
function setTag(key, value) {
    callOnHub('setTag', key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
    callOnHub('setUser', user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _callOnClient(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callOnHub.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['_invokeClient', method], args));
}
/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual
 * tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and
 * child spans to other spans. To start a new child span within the transaction
 * or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished,
 * otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at
 * which point the transaction with all its finished child spans will be sent to
 * Sentry.
 *
 * @param context Properties of the new `Transaction`.
 */
function startTransaction(context) {
    return callOnHub('startTransaction', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/backgroundtab.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/backgroundtab.js ***!
  \*******************************************************************/
/*! exports provided: registerBackgroundTabDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBackgroundTabDetection", function() { return registerBackgroundTabDetection; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/tracing/esm/browser/utils.js");



var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */
function registerBackgroundTabDetection() {
    if (global && global.document) {
        global.document.addEventListener('visibilitychange', function () {
            var activeTransaction = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getActiveTransaction"])();
            if (global.document.hidden && activeTransaction) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].log("[Tracing] Transaction: " + _spanstatus__WEBPACK_IMPORTED_MODULE_1__["SpanStatus"].Cancelled + " -> since tab moved to the background, op: " + activeTransaction.op);
                // We should not set status if it is already set, this prevent important statuses like
                // error or data loss from being overwritten on transaction.
                if (!activeTransaction.status) {
                    activeTransaction.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_1__["SpanStatus"].Cancelled);
                }
                activeTransaction.setTag('visibilitychange', 'document.hidden');
                activeTransaction.finish();
            }
        });
    }
    else {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('[Tracing] Could not set up background tab detection due to lack of global document');
    }
}
//# sourceMappingURL=backgroundtab.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/browsertracing.js ***!
  \********************************************************************/
/*! exports provided: DEFAULT_MAX_TRANSACTION_DURATION_SECONDS, BrowserTracing, getMetaContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_TRANSACTION_DURATION_SECONDS", function() { return DEFAULT_MAX_TRANSACTION_DURATION_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserTracing", function() { return BrowserTracing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaContent", function() { return getMetaContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hubextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hubextensions */ "./node_modules/@sentry/tracing/esm/hubextensions.js");
/* harmony import */ var _idletransaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../idletransaction */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../span */ "./node_modules/@sentry/tracing/esm/span.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _backgroundtab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backgroundtab */ "./node_modules/@sentry/tracing/esm/browser/backgroundtab.js");
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metrics */ "./node_modules/@sentry/tracing/esm/browser/metrics.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request */ "./node_modules/@sentry/tracing/esm/browser/request.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ "./node_modules/@sentry/tracing/esm/browser/router.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/tracing/esm/browser/utils.js");











var DEFAULT_MAX_TRANSACTION_DURATION_SECONDS = 600;
/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library. This integration uses {@see IdleTransaction} to create transactions.
 */
var BrowserTracing = /** @class */ (function () {
    function BrowserTracing(_options) {
        /** Browser Tracing integration options */
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ beforeNavigate: _router__WEBPACK_IMPORTED_MODULE_9__["defaultBeforeNavigate"], idleTimeout: _idletransaction__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_IDLE_TIMEOUT"], markBackgroundTransactions: true, maxTransactionDuration: DEFAULT_MAX_TRANSACTION_DURATION_SECONDS, routingInstrumentation: _router__WEBPACK_IMPORTED_MODULE_9__["defaultRoutingInstrumentation"], startTransactionOnLocationChange: true, startTransactionOnPageLoad: true }, _request__WEBPACK_IMPORTED_MODULE_8__["defaultRequestInstrumentionOptions"]);
        /**
         * @inheritDoc
         */
        this.name = BrowserTracing.id;
        this._metrics = new _metrics__WEBPACK_IMPORTED_MODULE_7__["MetricsInstrumentation"]();
        this._emitOptionsWarning = false;
        var tracingOrigins = _request__WEBPACK_IMPORTED_MODULE_8__["defaultRequestInstrumentionOptions"].tracingOrigins;
        // NOTE: Logger doesn't work in constructors, as it's initialized after integrations instances
        if (_options &&
            _options.tracingOrigins &&
            Array.isArray(_options.tracingOrigins) &&
            _options.tracingOrigins.length !== 0) {
            tracingOrigins = _options.tracingOrigins;
        }
        else {
            this._emitOptionsWarning = true;
        }
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), _options), { tracingOrigins: tracingOrigins });
    }
    /**
     * @inheritDoc
     */
    BrowserTracing.prototype.setupOnce = function (_, getCurrentHub) {
        var _this = this;
        this._getCurrentHub = getCurrentHub;
        if (this._emitOptionsWarning) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.');
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("[Tracing] We added a reasonable default for you: " + _request__WEBPACK_IMPORTED_MODULE_8__["defaultRequestInstrumentionOptions"].tracingOrigins);
        }
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.options, routingInstrumentation = _a.routingInstrumentation, startTransactionOnLocationChange = _a.startTransactionOnLocationChange, startTransactionOnPageLoad = _a.startTransactionOnPageLoad, markBackgroundTransactions = _a.markBackgroundTransactions, traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
        routingInstrumentation(function (context) { return _this._createRouteTransaction(context); }, startTransactionOnPageLoad, startTransactionOnLocationChange);
        if (markBackgroundTransactions) {
            Object(_backgroundtab__WEBPACK_IMPORTED_MODULE_6__["registerBackgroundTabDetection"])();
        }
        Object(_request__WEBPACK_IMPORTED_MODULE_8__["registerRequestInstrumentation"])({ traceFetch: traceFetch, traceXHR: traceXHR, tracingOrigins: tracingOrigins, shouldCreateSpanForRequest: shouldCreateSpanForRequest });
    };
    /** Create routing idle transaction. */
    BrowserTracing.prototype._createRouteTransaction = function (context) {
        var _this = this;
        if (!this._getCurrentHub) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("[Tracing] Did not create " + context.op + " idleTransaction due to invalid _getCurrentHub");
            return undefined;
        }
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.options, beforeNavigate = _a.beforeNavigate, idleTimeout = _a.idleTimeout, maxTransactionDuration = _a.maxTransactionDuration;
        // if beforeNavigate returns undefined, we should not start a transaction.
        var ctx = beforeNavigate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), getHeaderContext()), { trimEnd: true }));
        if (ctx === undefined) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log("[Tracing] Did not create " + context.op + " idleTransaction due to beforeNavigate");
            return undefined;
        }
        var hub = this._getCurrentHub();
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log("[Tracing] starting " + ctx.op + " idleTransaction on scope");
        var idleTransaction = Object(_hubextensions__WEBPACK_IMPORTED_MODULE_2__["startIdleTransaction"])(hub, ctx, idleTimeout, true);
        idleTransaction.registerBeforeFinishCallback(function (transaction, endTimestamp) {
            _this._metrics.addPerformanceEntries(transaction);
            adjustTransactionDuration(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["secToMs"])(maxTransactionDuration), transaction, endTimestamp);
        });
        return idleTransaction;
    };
    /**
     * @inheritDoc
     */
    BrowserTracing.id = 'BrowserTracing';
    return BrowserTracing;
}());

/**
 * Gets transaction context from a sentry-trace meta.
 */
function getHeaderContext() {
    var header = getMetaContent('sentry-trace');
    if (header) {
        var span = _span__WEBPACK_IMPORTED_MODULE_4__["Span"].fromTraceparent(header);
        if (span) {
            return {
                parentSpanId: span.parentSpanId,
                sampled: span.sampled,
                traceId: span.traceId,
            };
        }
    }
    return {};
}
/** Returns the value of a meta tag */
function getMetaContent(metaName) {
    var el = document.querySelector("meta[name=" + metaName + "]");
    return el ? el.getAttribute('content') : null;
}
/** Adjusts transaction value based on max transaction duration */
function adjustTransactionDuration(maxDuration, transaction, endTimestamp) {
    var diff = endTimestamp - transaction.startTimestamp;
    var isOutdatedTransaction = endTimestamp && (diff > maxDuration || diff < 0);
    if (isOutdatedTransaction) {
        transaction.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_5__["SpanStatus"].DeadlineExceeded);
        transaction.setTag('maxTransactionDurationExceeded', 'true');
    }
}
//# sourceMappingURL=browsertracing.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/index.js ***!
  \***********************************************************/
/*! exports provided: BrowserTracing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browsertracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browsertracing */ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserTracing", function() { return _browsertracing__WEBPACK_IMPORTED_MODULE_0__["BrowserTracing"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/metrics.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/metrics.js ***!
  \*************************************************************/
/*! exports provided: MetricsInstrumentation, addResourceSpans, _startChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsInstrumentation", function() { return MetricsInstrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResourceSpans", function() { return addResourceSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startChild", function() { return _startChild; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/tracing/esm/browser/utils.js");



var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
/** Class tracking metrics  */
var MetricsInstrumentation = /** @class */ (function () {
    function MetricsInstrumentation() {
        this._lcp = {};
        this._performanceCursor = 0;
        this._forceLCP = function () {
            /* No-op, replaced later if LCP API is available. */
            return;
        };
        if (global && global.performance) {
            if (global.performance.mark) {
                global.performance.mark('sentry-tracing-init');
            }
            this._trackLCP();
        }
    }
    /** Add performance related spans to a transaction */
    MetricsInstrumentation.prototype.addPerformanceEntries = function (transaction) {
        if (!global || !global.performance || !global.performance.getEntries) {
            // Gatekeeper if performance API not available
            return;
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] Adding & adjusting spans using Performance API');
        // TODO(fixme): depending on the 'op' directly is brittle.
        if (transaction.op === 'pageload') {
            // Force any pending records to be dispatched.
            this._forceLCP();
            if (this._lcp) {
                // Set the last observed LCP score.
                transaction.setData('_sentry_web_vitals', { LCP: this._lcp });
            }
        }
        var timeOrigin = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(performance.timeOrigin);
        var entryScriptSrc;
        if (global.document) {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (var i = 0; i < document.scripts.length; i++) {
                // We go through all scripts on the page and look for 'data-entry'
                // We remember the name and measure the time between this script finished loading and
                // our mark 'sentry-tracing-init'
                if (document.scripts[i].dataset.entry === 'true') {
                    entryScriptSrc = document.scripts[i].src;
                    break;
                }
            }
        }
        var entryScriptStartTimestamp;
        var tracingInitMarkStartTime;
        global.performance
            .getEntries()
            .slice(this._performanceCursor)
            .forEach(function (entry) {
            var startTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.startTime);
            var duration = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.duration);
            if (transaction.op === 'navigation' && timeOrigin + startTime < transaction.startTimestamp) {
                return;
            }
            switch (entry.entryType) {
                case 'navigation':
                    addNavigationSpans(transaction, entry, timeOrigin);
                    break;
                case 'mark':
                case 'paint':
                case 'measure': {
                    var startTimestamp = addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
                    if (tracingInitMarkStartTime === undefined && entry.name === 'sentry-tracing-init') {
                        tracingInitMarkStartTime = startTimestamp;
                    }
                    break;
                }
                case 'resource': {
                    var resourceName = entry.name.replace(window.location.origin, '');
                    var endTimestamp = addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
                    // We remember the entry script end time to calculate the difference to the first init mark
                    if (entryScriptStartTimestamp === undefined && (entryScriptSrc || '').indexOf(resourceName) > -1) {
                        entryScriptStartTimestamp = endTimestamp;
                    }
                    break;
                }
                default:
                // Ignore other entry types.
            }
        });
        if (entryScriptStartTimestamp !== undefined && tracingInitMarkStartTime !== undefined) {
            _startChild(transaction, {
                description: 'evaluation',
                endTimestamp: tracingInitMarkStartTime,
                op: 'script',
                startTimestamp: entryScriptStartTimestamp,
            });
        }
        this._performanceCursor = Math.max(performance.getEntries().length - 1, 0);
    };
    /** Starts tracking the Largest Contentful Paint on the current page. */
    MetricsInstrumentation.prototype._trackLCP = function () {
        var _this = this;
        // Based on reference implementation from https://web.dev/lcp/#measure-lcp-in-javascript.
        // Use a try/catch instead of feature detecting `largest-contentful-paint`
        // support, since some browsers throw when using the new `type` option.
        // https://bugs.webkit.org/show_bug.cgi?id=209216
        try {
            // Keep track of whether (and when) the page was first hidden, see:
            // https://github.com/w3c/page-visibility/issues/29
            // NOTE: ideally this check would be performed in the document <head>
            // to avoid cases where the visibility state changes before this code runs.
            var firstHiddenTime_1 = document.visibilityState === 'hidden' ? 0 : Infinity;
            document.addEventListener('visibilitychange', function (event) {
                firstHiddenTime_1 = Math.min(firstHiddenTime_1, event.timeStamp);
            }, { once: true });
            var updateLCP_1 = function (entry) {
                // Only include an LCP entry if the page wasn't hidden prior to
                // the entry being dispatched. This typically happens when a page is
                // loaded in a background tab.
                if (entry.startTime < firstHiddenTime_1) {
                    // NOTE: the `startTime` value is a getter that returns the entry's
                    // `renderTime` value, if available, or its `loadTime` value otherwise.
                    // The `renderTime` value may not be available if the element is an image
                    // that's loaded cross-origin without the `Timing-Allow-Origin` header.
                    _this._lcp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (entry.id && { elementId: entry.id })), (entry.size && { elementSize: entry.size })), { value: entry.startTime });
                }
            };
            // Create a PerformanceObserver that calls `updateLCP` for each entry.
            var po_1 = new PerformanceObserver(function (entryList) {
                entryList.getEntries().forEach(updateLCP_1);
            });
            // Observe entries of type `largest-contentful-paint`, including buffered entries,
            // i.e. entries that occurred before calling `observe()` below.
            po_1.observe({
                buffered: true,
                // @ts-ignore type does not exist on obj
                type: 'largest-contentful-paint',
            });
            this._forceLCP = function () {
                if (po_1.takeRecords) {
                    po_1.takeRecords().forEach(updateLCP_1);
                }
            };
        }
        catch (e) {
            // Do nothing if the browser doesn't support this API.
        }
    };
    return MetricsInstrumentation;
}());

/** Instrument navigation entries */
function addNavigationSpans(transaction, entry, timeOrigin) {
    addPerformanceNavigationTiming(transaction, entry, 'unloadEvent', timeOrigin);
    addPerformanceNavigationTiming(transaction, entry, 'domContentLoadedEvent', timeOrigin);
    addPerformanceNavigationTiming(transaction, entry, 'loadEvent', timeOrigin);
    addPerformanceNavigationTiming(transaction, entry, 'connect', timeOrigin);
    addPerformanceNavigationTiming(transaction, entry, 'domainLookup', timeOrigin);
    addRequest(transaction, entry, timeOrigin);
}
/** Create measure related spans */
function addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
    var measureStartTimestamp = timeOrigin + startTime;
    var measureEndTimestamp = measureStartTimestamp + duration;
    _startChild(transaction, {
        description: entry.name,
        endTimestamp: measureEndTimestamp,
        op: entry.entryType,
        startTimestamp: measureStartTimestamp,
    });
    return measureStartTimestamp;
}
/** Create resource related spans */
function addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
    // we already instrument based on fetch and xhr, so we don't need to
    // duplicate spans here.
    if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
        return undefined;
    }
    var data = {};
    if ('transferSize' in entry) {
        data['Transfer Size'] = entry.transferSize;
    }
    if ('encodedBodySize' in entry) {
        data['Encoded Body Size'] = entry.encodedBodySize;
    }
    if ('decodedBodySize' in entry) {
        data['Decoded Body Size'] = entry.decodedBodySize;
    }
    var startTimestamp = timeOrigin + startTime;
    var endTimestamp = startTimestamp + duration;
    _startChild(transaction, {
        description: resourceName,
        endTimestamp: endTimestamp,
        op: entry.initiatorType ? "resource." + entry.initiatorType : 'resource',
        startTimestamp: startTimestamp,
        data: data,
    });
    return endTimestamp;
}
/** Create performance navigation related spans */
function addPerformanceNavigationTiming(transaction, entry, event, timeOrigin) {
    var end = entry[event + "End"];
    var start = entry[event + "Start"];
    if (!start || !end) {
        return;
    }
    _startChild(transaction, {
        description: event,
        endTimestamp: timeOrigin + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(end),
        op: 'browser',
        startTimestamp: timeOrigin + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(start),
    });
}
/** Create request and response related spans */
function addRequest(transaction, entry, timeOrigin) {
    _startChild(transaction, {
        description: 'request',
        endTimestamp: timeOrigin + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.responseEnd),
        op: 'browser',
        startTimestamp: timeOrigin + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.requestStart),
    });
    _startChild(transaction, {
        description: 'response',
        endTimestamp: timeOrigin + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.responseEnd),
        op: 'browser',
        startTimestamp: timeOrigin + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.responseStart),
    });
}
/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */
function _startChild(transaction, _a) {
    var startTimestamp = _a.startTimestamp, ctx = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["startTimestamp"]);
    if (startTimestamp && transaction.startTimestamp > startTimestamp) {
        transaction.startTimestamp = startTimestamp;
    }
    return transaction.startChild(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ startTimestamp: startTimestamp }, ctx));
}
//# sourceMappingURL=metrics.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/request.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/request.js ***!
  \*************************************************************/
/*! exports provided: DEFAULT_TRACING_ORIGINS, defaultRequestInstrumentionOptions, registerRequestInstrumentation, _fetchCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRACING_ORIGINS", function() { return DEFAULT_TRACING_ORIGINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRequestInstrumentionOptions", function() { return defaultRequestInstrumentionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRequestInstrumentation", function() { return registerRequestInstrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fetchCallback", function() { return _fetchCallback; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/tracing/esm/browser/utils.js");



var DEFAULT_TRACING_ORIGINS = ['localhost', /^\//];
var defaultRequestInstrumentionOptions = {
    traceFetch: true,
    traceXHR: true,
    tracingOrigins: DEFAULT_TRACING_ORIGINS,
};
/** Registers span creators for xhr and fetch requests  */
function registerRequestInstrumentation(_options) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultRequestInstrumentionOptions), _options), traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
    // We should cache url -> decision so that we don't have to compute
    // regexp everytime we create a request.
    var urlMap = {};
    var defaultShouldCreateSpan = function (url) {
        if (urlMap[url]) {
            return urlMap[url];
        }
        var origins = tracingOrigins;
        urlMap[url] =
            origins.some(function (origin) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isMatchingPattern"])(url, origin); }) &&
                !Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isMatchingPattern"])(url, 'sentry_key');
        return urlMap[url];
    };
    var shouldCreateSpan = shouldCreateSpanForRequest || defaultShouldCreateSpan;
    var spans = {};
    if (traceFetch) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addInstrumentationHandler"])({
            callback: function (handlerData) {
                _fetchCallback(handlerData, shouldCreateSpan, spans);
            },
            type: 'fetch',
        });
    }
    if (traceXHR) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addInstrumentationHandler"])({
            callback: function (handlerData) {
                xhrCallback(handlerData, shouldCreateSpan, spans);
            },
            type: 'xhr',
        });
    }
}
/**
 * Create and track fetch request spans
 */
function _fetchCallback(handlerData, shouldCreateSpan, spans) {
    if (!handlerData.fetchData || !shouldCreateSpan(handlerData.fetchData.url)) {
        return;
    }
    if (handlerData.endTimestamp && handlerData.fetchData.__span) {
        var span = spans[handlerData.fetchData.__span];
        if (span) {
            var response = handlerData.response;
            if (response) {
                span.setHttpStatus(response.status);
            }
            span.finish();
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[handlerData.fetchData.__span];
        }
        return;
    }
    var activeTransaction = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getActiveTransaction"])();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData.fetchData), { type: 'fetch' }),
            description: handlerData.fetchData.method + " " + handlerData.fetchData.url,
            op: 'http',
        });
        handlerData.fetchData.__span = span.spanId;
        spans[span.spanId] = span;
        var request = (handlerData.args[0] = handlerData.args[0]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var options = (handlerData.args[1] = handlerData.args[1] || {});
        var headers = options.headers;
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(request, Request)) {
            headers = request.headers;
        }
        if (headers) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (typeof headers.append === 'function') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                headers.append('sentry-trace', span.toTraceparent());
            }
            else if (Array.isArray(headers)) {
                headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(headers, [['sentry-trace', span.toTraceparent()]]);
            }
            else {
                headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headers), { 'sentry-trace': span.toTraceparent() });
            }
        }
        else {
            headers = { 'sentry-trace': span.toTraceparent() };
        }
        options.headers = headers;
    }
}
/**
 * Create and track xhr request spans
 */
function xhrCallback(handlerData, shouldCreateSpan, spans) {
    if (!handlerData || !handlerData.xhr || !handlerData.xhr.__sentry_xhr__) {
        return;
    }
    var xhr = handlerData.xhr.__sentry_xhr__;
    if (!shouldCreateSpan(xhr.url)) {
        return;
    }
    // We only capture complete, non-sentry requests
    if (handlerData.xhr.__sentry_own_request__) {
        return;
    }
    if (handlerData.endTimestamp && handlerData.xhr.__sentry_xhr_span_id__) {
        var span = spans[handlerData.xhr.__sentry_xhr_span_id__];
        if (span) {
            span.setData('url', xhr.url);
            span.setData('method', xhr.method);
            span.setHttpStatus(xhr.status_code);
            span.finish();
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[handlerData.xhr.__sentry_xhr_span_id__];
        }
        return;
    }
    var activeTransaction = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getActiveTransaction"])();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, xhr.data), { type: 'xhr' }),
            description: xhr.method + " " + xhr.url,
            op: 'http',
        });
        handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
        spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
        if (handlerData.xhr.setRequestHeader) {
            try {
                handlerData.xhr.setRequestHeader('sentry-trace', span.toTraceparent());
            }
            catch (_) {
                // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
            }
        }
    }
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/router.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/router.js ***!
  \************************************************************/
/*! exports provided: defaultRoutingInstrumentation, defaultBeforeNavigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRoutingInstrumentation", function() { return defaultRoutingInstrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBeforeNavigate", function() { return defaultBeforeNavigate; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

// type StartTransaction
var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
/**
 * Creates a default router based on
 */
function defaultRoutingInstrumentation(startTransaction, startTransactionOnPageLoad, startTransactionOnLocationChange) {
    if (startTransactionOnPageLoad === void 0) { startTransactionOnPageLoad = true; }
    if (startTransactionOnLocationChange === void 0) { startTransactionOnLocationChange = true; }
    if (!global || !global.location) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not initialize routing instrumentation due to invalid location');
        return;
    }
    var startingUrl = global.location.href;
    var activeTransaction;
    if (startTransactionOnPageLoad) {
        activeTransaction = startTransaction({ name: global.location.pathname, op: 'pageload' });
    }
    if (startTransactionOnLocationChange) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addInstrumentationHandler"])({
            callback: function (_a) {
                var to = _a.to, from = _a.from;
                /**
                 * This early return is there to account for some cases where navigation transaction
                 * starts right after long running pageload. We make sure that if `from` is undefined
                 * and that a valid `startingURL` exists, we don't unnecessarily create a navigation transaction.
                 *
                 * This was hard to duplicate, but this behavior stopped as soon as this fix
                 * was applied. This issue might also only be caused in certain development environments
                 * where the usage of a hot module reloader is causing errors.
                 */
                if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
                    startingUrl = undefined;
                    return;
                }
                if (from !== to) {
                    startingUrl = undefined;
                    if (activeTransaction) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].log("[Tracing] finishing current idleTransaction with op: " + activeTransaction.op);
                        // We want to finish all current ongoing idle transactions as we
                        // are navigating to a new page.
                        activeTransaction.finish();
                    }
                    activeTransaction = startTransaction({ name: global.location.pathname, op: 'navigation' });
                }
            },
            type: 'history',
        });
    }
}
/** default implementation of Browser Tracing before navigate */
function defaultBeforeNavigate(context) {
    return context;
}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/utils.js ***!
  \***********************************************************/
/*! exports provided: getActiveTransaction, msToSec, secToMs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTransaction", function() { return getActiveTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToSec", function() { return msToSec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secToMs", function() { return secToMs; });
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");

/** Grabs active transaction off scope */
function getActiveTransaction(hub) {
    if (hub === void 0) { hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])(); }
    if (hub) {
        var scope = hub.getScope();
        if (scope) {
            return scope.getTransaction();
        }
    }
    return undefined;
}
/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */
function msToSec(time) {
    return time / 1000;
}
/**
 * Converts from seconds to milliseconds
 * @param time time in seconds
 */
function secToMs(time) {
    return time * 1000;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/errors.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/errors.js ***!
  \****************************************************/
/*! exports provided: registerErrorInstrumentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerErrorInstrumentation", function() { return registerErrorInstrumentation; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _browser_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser/utils */ "./node_modules/@sentry/tracing/esm/browser/utils.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");



/**
 * Configures global error listeners
 */
function registerErrorInstrumentation() {
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addInstrumentationHandler"])({
        callback: errorCallback,
        type: 'error',
    });
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addInstrumentationHandler"])({
        callback: errorCallback,
        type: 'unhandledrejection',
    });
}
/**
 * If an error or unhandled promise occurs, we mark the active transaction as failed
 */
function errorCallback() {
    var activeTransaction = Object(_browser_utils__WEBPACK_IMPORTED_MODULE_1__["getActiveTransaction"])();
    if (activeTransaction) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].log("[Tracing] Transaction: " + _spanstatus__WEBPACK_IMPORTED_MODULE_2__["SpanStatus"].InternalError + " -> Global error occured");
        activeTransaction.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_2__["SpanStatus"].InternalError);
    }
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/hubextensions.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/hubextensions.js ***!
  \***********************************************************/
/*! exports provided: startIdleTransaction, _addTracingExtensions, addExtensionMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startIdleTransaction", function() { return startIdleTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addTracingExtensions", function() { return _addTracingExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExtensionMethods", function() { return addExtensionMethods; });
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/@sentry/tracing/esm/errors.js");
/* harmony import */ var _idletransaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idletransaction */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/tracing/esm/transaction.js");




/** Returns all trace headers that are currently on the top scope. */
function traceHeaders() {
    var scope = this.getScope();
    if (scope) {
        var span = scope.getSpan();
        if (span) {
            return {
                'sentry-trace': span.toTraceparent(),
            };
        }
    }
    return {};
}
/**
 * Use RNG to generate sampling decision, which all child spans inherit.
 */
function sample(hub, transaction) {
    var client = hub.getClient();
    if (transaction.sampled === undefined) {
        var sampleRate = (client && client.getOptions().tracesSampleRate) || 0;
        // if true = we want to have the transaction
        // if false = we don't want to have it
        // Math.random (inclusive of 0, but not 1)
        transaction.sampled = Math.random() < sampleRate;
    }
    // We only want to create a span list if we sampled the transaction
    // If sampled == false, we will discard the span anyway, so we can save memory by not storing child spans
    if (transaction.sampled) {
        var experimentsOptions = (client && client.getOptions()._experiments) || {};
        transaction.initSpanRecorder(experimentsOptions.maxSpans);
    }
    return transaction;
}
/**
 * {@see Hub.startTransaction}
 */
function startTransaction(context) {
    var transaction = new _transaction__WEBPACK_IMPORTED_MODULE_3__["Transaction"](context, this);
    return sample(this, transaction);
}
/**
 * Create new idle transaction.
 */
function startIdleTransaction(hub, context, idleTimeout, onScope) {
    var transaction = new _idletransaction__WEBPACK_IMPORTED_MODULE_2__["IdleTransaction"](context, hub, idleTimeout, onScope);
    return sample(hub, transaction);
}
/**
 * @private
 */
function _addTracingExtensions() {
    var carrier = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_0__["getMainCarrier"])();
    if (carrier.__SENTRY__) {
        carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
        if (!carrier.__SENTRY__.extensions.startTransaction) {
            carrier.__SENTRY__.extensions.startTransaction = startTransaction;
        }
        if (!carrier.__SENTRY__.extensions.traceHeaders) {
            carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
        }
    }
}
/**
 * This patches the global object and injects the Tracing extensions methods
 */
function addExtensionMethods() {
    _addTracingExtensions();
    // If an error happens globally, we should make sure transaction status is set to error.
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["registerErrorInstrumentation"])();
}
//# sourceMappingURL=hubextensions.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/idletransaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/idletransaction.js ***!
  \*************************************************************/
/*! exports provided: DEFAULT_IDLE_TIMEOUT, IdleTransactionSpanRecorder, IdleTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_IDLE_TIMEOUT", function() { return DEFAULT_IDLE_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleTransactionSpanRecorder", function() { return IdleTransactionSpanRecorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleTransaction", function() { return IdleTransaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ "./node_modules/@sentry/tracing/esm/span.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/tracing/esm/transaction.js");





var DEFAULT_IDLE_TIMEOUT = 1000;
/**
 * @inheritDoc
 */
var IdleTransactionSpanRecorder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IdleTransactionSpanRecorder, _super);
    function IdleTransactionSpanRecorder(_pushActivity, _popActivity, transactionSpanId, maxlen) {
        if (transactionSpanId === void 0) { transactionSpanId = ''; }
        var _this = _super.call(this, maxlen) || this;
        _this._pushActivity = _pushActivity;
        _this._popActivity = _popActivity;
        _this.transactionSpanId = transactionSpanId;
        return _this;
    }
    /**
     * @inheritDoc
     */
    IdleTransactionSpanRecorder.prototype.add = function (span) {
        var _this = this;
        // We should make sure we do not push and pop activities for
        // the transaction that this span recorder belongs to.
        if (span.spanId !== this.transactionSpanId) {
            // We patch span.finish() to pop an activity after setting an endTimestamp.
            span.finish = function (endTimestamp) {
                span.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])();
                _this._popActivity(span.spanId);
            };
            // We should only push new activities if the span does not have an end timestamp.
            if (span.endTimestamp === undefined) {
                this._pushActivity(span.spanId);
            }
        }
        _super.prototype.add.call(this, span);
    };
    return IdleTransactionSpanRecorder;
}(_span__WEBPACK_IMPORTED_MODULE_2__["SpanRecorder"]));

/**
 * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
 * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
 * put itself on the scope on creation.
 */
var IdleTransaction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IdleTransaction, _super);
    function IdleTransaction(transactionContext, _idleHub, 
    // The time to wait in ms until the idle transaction will be finished. Default: 1000
    _idleTimeout, 
    // If an idle transaction should be put itself on and off the scope automatically.
    _onScope) {
        if (_idleTimeout === void 0) { _idleTimeout = DEFAULT_IDLE_TIMEOUT; }
        if (_onScope === void 0) { _onScope = false; }
        var _this = _super.call(this, transactionContext, _idleHub) || this;
        _this._idleHub = _idleHub;
        _this._idleTimeout = _idleTimeout;
        _this._onScope = _onScope;
        // Activities store a list of active spans
        _this.activities = {};
        // Stores reference to the timeout that calls _beat().
        _this._heartbeatTimer = 0;
        // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.
        _this._heartbeatCounter = 0;
        // We should not use heartbeat if we finished a transaction
        _this._finished = false;
        _this._beforeFinishCallbacks = [];
        if (_idleHub && _onScope) {
            // There should only be one active transaction on the scope
            clearActiveTransaction(_idleHub);
            // We set the transaction here on the scope so error events pick up the trace
            // context and attach it to the error.
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log("Setting idle transaction on scope. Span ID: " + _this.spanId);
            _idleHub.configureScope(function (scope) { return scope.setSpan(_this); });
        }
        return _this;
    }
    /** {@inheritDoc} */
    IdleTransaction.prototype.finish = function (endTimestamp) {
        var e_1, _a;
        var _this = this;
        if (endTimestamp === void 0) { endTimestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])(); }
        this._finished = true;
        this.activities = {};
        if (this.spanRecorder) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] finishing IdleTransaction', new Date(endTimestamp * 1000).toISOString(), this.op);
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this._beforeFinishCallbacks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var callback = _c.value;
                    callback(this, endTimestamp);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.spanRecorder.spans = this.spanRecorder.spans.filter(function (span) {
                // If we are dealing with the transaction itself, we just return it
                if (span.spanId === _this.spanId) {
                    return true;
                }
                // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
                if (!span.endTimestamp) {
                    span.endTimestamp = endTimestamp;
                    span.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_3__["SpanStatus"].Cancelled);
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] cancelling span since transaction ended early', JSON.stringify(span, undefined, 2));
                }
                var keepSpan = span.startTimestamp < endTimestamp;
                if (!keepSpan) {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] discarding Span since it happened after Transaction was finished', JSON.stringify(span, undefined, 2));
                }
                return keepSpan;
            });
            // this._onScope is true if the transaction was previously on the scope.
            if (this._onScope) {
                clearActiveTransaction(this._idleHub);
            }
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] flushing IdleTransaction');
        }
        else {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] No active IdleTransaction');
        }
        return _super.prototype.finish.call(this, endTimestamp);
    };
    /**
     * Register a callback function that gets excecuted before the transaction finishes.
     * Useful for cleanup or if you want to add any additional spans based on current context.
     *
     * This is exposed because users have no other way of running something before an idle transaction
     * finishes.
     */
    IdleTransaction.prototype.registerBeforeFinishCallback = function (callback) {
        this._beforeFinishCallbacks.push(callback);
    };
    /**
     * @inheritDoc
     */
    IdleTransaction.prototype.initSpanRecorder = function (maxlen) {
        var _this = this;
        if (!this.spanRecorder) {
            this._initTimeout = setTimeout(function () {
                if (!_this._finished) {
                    _this.finish();
                }
            }, this._idleTimeout);
            var pushActivity = function (id) {
                if (_this._finished) {
                    return;
                }
                _this._pushActivity(id);
            };
            var popActivity = function (id) {
                if (_this._finished) {
                    return;
                }
                _this._popActivity(id);
            };
            this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
            // Start heartbeat so that transactions do not run forever.
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('Starting heartbeat');
            this._pingHeartbeat();
        }
        this.spanRecorder.add(this);
    };
    /**
     * Start tracking a specific activity.
     * @param spanId The span id that represents the activity
     */
    IdleTransaction.prototype._pushActivity = function (spanId) {
        if (this._initTimeout) {
            clearTimeout(this._initTimeout);
            this._initTimeout = undefined;
        }
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log("[Tracing] pushActivity: " + spanId);
        this.activities[spanId] = true;
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] new activities count', Object.keys(this.activities).length);
    };
    /**
     * Remove an activity from usage
     * @param spanId The span id that represents the activity
     */
    IdleTransaction.prototype._popActivity = function (spanId) {
        var _this = this;
        if (this.activities[spanId]) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log("[Tracing] popActivity " + spanId);
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this.activities[spanId];
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] new activities count', Object.keys(this.activities).length);
        }
        if (Object.keys(this.activities).length === 0) {
            var timeout = this._idleTimeout;
            // We need to add the timeout here to have the real endtimestamp of the transaction
            // Remember timestampWithMs is in seconds, timeout is in ms
            var end_1 = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])() + timeout / 1000;
            setTimeout(function () {
                if (!_this._finished) {
                    _this.finish(end_1);
                }
            }, timeout);
        }
    };
    /**
     * Checks when entries of this.activities are not changing for 3 beats.
     * If this occurs we finish the transaction.
     */
    IdleTransaction.prototype._beat = function () {
        clearTimeout(this._heartbeatTimer);
        // We should not be running heartbeat if the idle transaction is finished.
        if (this._finished) {
            return;
        }
        var keys = Object.keys(this.activities);
        var heartbeatString = keys.length ? keys.reduce(function (prev, current) { return prev + current; }) : '';
        if (heartbeatString === this._prevHeartbeatString) {
            this._heartbeatCounter += 1;
        }
        else {
            this._heartbeatCounter = 1;
        }
        this._prevHeartbeatString = heartbeatString;
        if (this._heartbeatCounter >= 3) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log("[Tracing] Transaction finished because of no change for 3 heart beats");
            this.setStatus(_spanstatus__WEBPACK_IMPORTED_MODULE_3__["SpanStatus"].DeadlineExceeded);
            this.setTag('heartbeat', 'failed');
            this.finish();
        }
        else {
            this._pingHeartbeat();
        }
    };
    /**
     * Pings the heartbeat
     */
    IdleTransaction.prototype._pingHeartbeat = function () {
        var _this = this;
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log("pinging Heartbeat -> current counter: " + this._heartbeatCounter);
        this._heartbeatTimer = setTimeout(function () {
            _this._beat();
        }, 5000);
    };
    return IdleTransaction;
}(_transaction__WEBPACK_IMPORTED_MODULE_4__["Transaction"]));

/**
 * Reset active transaction on scope
 */
function clearActiveTransaction(hub) {
    if (hub) {
        var scope = hub.getScope();
        if (scope) {
            var transaction = scope.getTransaction();
            if (transaction) {
                scope.setSpan(undefined);
            }
        }
    }
}
//# sourceMappingURL=idletransaction.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/index.js ***!
  \***************************************************/
/*! exports provided: Integrations, Span, TRACEPARENT_REGEXP, Transaction, SpanStatus, addExtensionMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return Integrations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/tracing/esm/browser/index.js");
/* harmony import */ var _hubextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hubextensions */ "./node_modules/@sentry/tracing/esm/hubextensions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExtensionMethods", function() { return _hubextensions__WEBPACK_IMPORTED_MODULE_2__["addExtensionMethods"]; });

/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/tracing/esm/integrations/index.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./span */ "./node_modules/@sentry/tracing/esm/span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _span__WEBPACK_IMPORTED_MODULE_4__["Span"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return _span__WEBPACK_IMPORTED_MODULE_4__["TRACEPARENT_REGEXP"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/tracing/esm/transaction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _transaction__WEBPACK_IMPORTED_MODULE_5__["Transaction"]; });

/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanStatus", function() { return _spanstatus__WEBPACK_IMPORTED_MODULE_6__["SpanStatus"]; });





var Integrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _integrations__WEBPACK_IMPORTED_MODULE_3__), { BrowserTracing: _browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTracing"] });




// We are patching the global object with our hub extension methods
Object(_hubextensions__WEBPACK_IMPORTED_MODULE_2__["addExtensionMethods"])();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/express.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/express.js ***!
  \******************************************************************/
/*! exports provided: Express */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Express", function() { return Express; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

/**
 * Express integration
 *
 * Provides an request and error handler for Express framework
 * as well as tracing capabilities
 */
var Express = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Express(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Express.id;
        this._app = options.app;
    }
    /**
     * @inheritDoc
     */
    Express.prototype.setupOnce = function () {
        if (!this._app) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].error('ExpressIntegration is missing an Express instance');
            return;
        }
        instrumentMiddlewares(this._app);
    };
    /**
     * @inheritDoc
     */
    Express.id = 'Express';
    return Express;
}());

/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function wrap(fn) {
    var arrity = fn.length;
    switch (arrity) {
        case 2: {
            return function (_req, res) {
                var transaction = res.__sentry_transaction;
                if (transaction) {
                    var span_1 = transaction.startChild({
                        description: fn.name,
                        op: 'middleware',
                    });
                    res.once('finish', function () {
                        span_1.finish();
                    });
                }
                // eslint-disable-next-line prefer-rest-params
                return fn.apply(this, arguments);
            };
        }
        case 3: {
            return function (req, res, next) {
                var transaction = res.__sentry_transaction;
                var span = transaction &&
                    transaction.startChild({
                        description: fn.name,
                        op: 'middleware',
                    });
                fn.call(this, req, res, function () {
                    if (span) {
                        span.finish();
                    }
                    // eslint-disable-next-line prefer-rest-params
                    return next.apply(this, arguments);
                });
            };
        }
        case 4: {
            return function (err, req, res, next) {
                var transaction = res.__sentry_transaction;
                var span = transaction &&
                    transaction.startChild({
                        description: fn.name,
                        op: 'middleware',
                    });
                fn.call(this, err, req, res, function () {
                    if (span) {
                        span.finish();
                    }
                    // eslint-disable-next-line prefer-rest-params
                    return next.apply(this, arguments);
                });
            };
        }
        default: {
            throw new Error("Express middleware takes 2-4 arguments. Got: " + arrity);
        }
    }
}
/**
 * Takes all the function arguments passed to the original `app.use` call
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */
function wrapUseArgs(args) {
    return Array.from(args).map(function (arg) {
        if (typeof arg === 'function') {
            return wrap(arg);
        }
        if (Array.isArray(arg)) {
            return arg.map(function (a) {
                if (typeof a === 'function') {
                    return wrap(a);
                }
                return a;
            });
        }
        return arg;
    });
}
/**
 * Patches original app.use to utilize our tracing functionality
 */
function instrumentMiddlewares(app) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var originalAppUse = app.use;
    app.use = function () {
        // eslint-disable-next-line prefer-rest-params
        return originalAppUse.apply(this, wrapUseArgs(arguments));
    };
    return app;
}
//# sourceMappingURL=express.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/index.js ***!
  \****************************************************************/
/*! exports provided: Express */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ "./node_modules/@sentry/tracing/esm/integrations/express.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Express", function() { return _express__WEBPACK_IMPORTED_MODULE_0__["Express"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/span.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/span.js ***!
  \**************************************************/
/*! exports provided: TRACEPARENT_REGEXP, SpanRecorder, Span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return TRACEPARENT_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanRecorder", function() { return SpanRecorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _spanstatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spanstatus */ "./node_modules/@sentry/tracing/esm/spanstatus.js");



var TRACEPARENT_REGEXP = new RegExp('^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$');
/**
 * Keeps track of finished spans for a given transaction
 * @internal
 * @hideconstructor
 * @hidden
 */
var SpanRecorder = /** @class */ (function () {
    function SpanRecorder(maxlen) {
        if (maxlen === void 0) { maxlen = 1000; }
        this.spans = [];
        this._maxlen = maxlen;
    }
    /**
     * This is just so that we don't run out of memory while recording a lot
     * of spans. At some point we just stop and flush out the start of the
     * trace tree (i.e.the first n spans with the smallest
     * start_timestamp).
     */
    SpanRecorder.prototype.add = function (span) {
        if (this.spans.length > this._maxlen) {
            span.spanRecorder = undefined;
        }
        else {
            this.spans.push(span);
        }
    };
    return SpanRecorder;
}());

/**
 * Span contains all data about a span
 */
var Span = /** @class */ (function () {
    /**
     * You should never call the constructor manually, always use `hub.startSpan()`.
     * @internal
     * @hideconstructor
     * @hidden
     */
    function Span(spanContext) {
        /**
         * @inheritDoc
         */
        this.traceId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])();
        /**
         * @inheritDoc
         */
        this.spanId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])().substring(16);
        /**
         * Timestamp in seconds when the span was created.
         */
        this.startTimestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])();
        /**
         * @inheritDoc
         */
        this.tags = {};
        /**
         * @inheritDoc
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.data = {};
        if (!spanContext) {
            return this;
        }
        if (spanContext.traceId) {
            this.traceId = spanContext.traceId;
        }
        if (spanContext.spanId) {
            this.spanId = spanContext.spanId;
        }
        if (spanContext.parentSpanId) {
            this.parentSpanId = spanContext.parentSpanId;
        }
        // We want to include booleans as well here
        if ('sampled' in spanContext) {
            this.sampled = spanContext.sampled;
        }
        if (spanContext.op) {
            this.op = spanContext.op;
        }
        if (spanContext.description) {
            this.description = spanContext.description;
        }
        if (spanContext.data) {
            this.data = spanContext.data;
        }
        if (spanContext.tags) {
            this.tags = spanContext.tags;
        }
        if (spanContext.status) {
            this.status = spanContext.status;
        }
        if (spanContext.startTimestamp) {
            this.startTimestamp = spanContext.startTimestamp;
        }
        if (spanContext.endTimestamp) {
            this.endTimestamp = spanContext.endTimestamp;
        }
    }
    /**
     * Continues a trace from a string (usually the header).
     * @param traceparent Traceparent string
     */
    Span.fromTraceparent = function (traceparent, spanContext) {
        var matches = traceparent.match(TRACEPARENT_REGEXP);
        if (matches) {
            var sampled = void 0;
            if (matches[3] === '1') {
                sampled = true;
            }
            else if (matches[3] === '0') {
                sampled = false;
            }
            return new Span(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spanContext), { parentSpanId: matches[2], sampled: sampled, traceId: matches[1] }));
        }
        return undefined;
    };
    /**
     * @inheritDoc
     * @deprecated
     */
    Span.prototype.child = function (spanContext) {
        return this.startChild(spanContext);
    };
    /**
     * @inheritDoc
     */
    Span.prototype.startChild = function (spanContext) {
        var span = new Span(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spanContext), { parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId }));
        span.spanRecorder = this.spanRecorder;
        if (span.spanRecorder) {
            span.spanRecorder.add(span);
        }
        return span;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setTag = function (key, value) {
        var _a;
        this.tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.tags), (_a = {}, _a[key] = value, _a));
        return this;
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Span.prototype.setData = function (key, value) {
        var _a;
        this.data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data), (_a = {}, _a[key] = value, _a));
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setStatus = function (value) {
        this.status = value;
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setHttpStatus = function (httpStatus) {
        this.setTag('http.status_code', String(httpStatus));
        var spanStatus = _spanstatus__WEBPACK_IMPORTED_MODULE_2__["SpanStatus"].fromHttpCode(httpStatus);
        if (spanStatus !== _spanstatus__WEBPACK_IMPORTED_MODULE_2__["SpanStatus"].UnknownError) {
            this.setStatus(spanStatus);
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.isSuccess = function () {
        return this.status === _spanstatus__WEBPACK_IMPORTED_MODULE_2__["SpanStatus"].Ok;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.finish = function (endTimestamp) {
        this.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])();
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toTraceparent = function () {
        var sampledString = '';
        if (this.sampled !== undefined) {
            sampledString = this.sampled ? '-1' : '-0';
        }
        return this.traceId + "-" + this.spanId + sampledString;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.getTraceContext = function () {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dropUndefinedKeys"])({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            trace_id: this.traceId,
        });
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toJSON = function () {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dropUndefinedKeys"])({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            start_timestamp: this.startTimestamp,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            timestamp: this.endTimestamp,
            trace_id: this.traceId,
        });
    };
    return Span;
}());

//# sourceMappingURL=span.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/spanstatus.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/spanstatus.js ***!
  \********************************************************/
/*! exports provided: SpanStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanStatus", function() { return SpanStatus; });
/** The status of an Span. */
// eslint-disable-next-line import/export
var SpanStatus;
(function (SpanStatus) {
    /** The operation completed successfully. */
    SpanStatus["Ok"] = "ok";
    /** Deadline expired before operation could complete. */
    SpanStatus["DeadlineExceeded"] = "deadline_exceeded";
    /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
    SpanStatus["Unauthenticated"] = "unauthenticated";
    /** 403 Forbidden */
    SpanStatus["PermissionDenied"] = "permission_denied";
    /** 404 Not Found. Some requested entity (file or directory) was not found. */
    SpanStatus["NotFound"] = "not_found";
    /** 429 Too Many Requests */
    SpanStatus["ResourceExhausted"] = "resource_exhausted";
    /** Client specified an invalid argument. 4xx. */
    SpanStatus["InvalidArgument"] = "invalid_argument";
    /** 501 Not Implemented */
    SpanStatus["Unimplemented"] = "unimplemented";
    /** 503 Service Unavailable */
    SpanStatus["Unavailable"] = "unavailable";
    /** Other/generic 5xx. */
    SpanStatus["InternalError"] = "internal_error";
    /** Unknown. Any non-standard HTTP status code. */
    SpanStatus["UnknownError"] = "unknown_error";
    /** The operation was cancelled (typically by the user). */
    SpanStatus["Cancelled"] = "cancelled";
    /** Already exists (409) */
    SpanStatus["AlreadyExists"] = "already_exists";
    /** Operation was rejected because the system is not in a state required for the operation's */
    SpanStatus["FailedPrecondition"] = "failed_precondition";
    /** The operation was aborted, typically due to a concurrency issue. */
    SpanStatus["Aborted"] = "aborted";
    /** Operation was attempted past the valid range. */
    SpanStatus["OutOfRange"] = "out_of_range";
    /** Unrecoverable data loss or corruption */
    SpanStatus["DataLoss"] = "data_loss";
})(SpanStatus || (SpanStatus = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (SpanStatus) {
    /**
     * Converts a HTTP status code into a {@link SpanStatus}.
     *
     * @param httpStatus The HTTP response status code.
     * @returns The span status or {@link SpanStatus.UnknownError}.
     */
    function fromHttpCode(httpStatus) {
        if (httpStatus < 400) {
            return SpanStatus.Ok;
        }
        if (httpStatus >= 400 && httpStatus < 500) {
            switch (httpStatus) {
                case 401:
                    return SpanStatus.Unauthenticated;
                case 403:
                    return SpanStatus.PermissionDenied;
                case 404:
                    return SpanStatus.NotFound;
                case 409:
                    return SpanStatus.AlreadyExists;
                case 413:
                    return SpanStatus.FailedPrecondition;
                case 429:
                    return SpanStatus.ResourceExhausted;
                default:
                    return SpanStatus.InvalidArgument;
            }
        }
        if (httpStatus >= 500 && httpStatus < 600) {
            switch (httpStatus) {
                case 501:
                    return SpanStatus.Unimplemented;
                case 503:
                    return SpanStatus.Unavailable;
                case 504:
                    return SpanStatus.DeadlineExceeded;
                default:
                    return SpanStatus.InternalError;
            }
        }
        return SpanStatus.UnknownError;
    }
    SpanStatus.fromHttpCode = fromHttpCode;
})(SpanStatus || (SpanStatus = {}));
//# sourceMappingURL=spanstatus.js.map

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/transaction.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/transaction.js ***!
  \*********************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./span */ "./node_modules/@sentry/tracing/esm/span.js");




/** JSDoc */
var Transaction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Transaction, _super);
    /**
     * This constructor should never be called manually. Those instrumenting tracing should use
     * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
     * @internal
     * @hideconstructor
     * @hidden
     */
    function Transaction(transactionContext, hub) {
        var _this = _super.call(this, transactionContext) || this;
        /**
         * The reference to the current hub.
         */
        _this._hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(hub, _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Hub"])) {
            _this._hub = hub;
        }
        if (transactionContext.name) {
            _this.name = transactionContext.name;
        }
        _this._trimEnd = transactionContext.trimEnd;
        return _this;
    }
    /**
     * JSDoc
     */
    Transaction.prototype.setName = function (name) {
        this.name = name;
    };
    /**
     * Attaches SpanRecorder to the span itself
     * @param maxlen maximum number of spans that can be recorded
     */
    Transaction.prototype.initSpanRecorder = function (maxlen) {
        if (maxlen === void 0) { maxlen = 1000; }
        if (!this.spanRecorder) {
            this.spanRecorder = new _span__WEBPACK_IMPORTED_MODULE_3__["SpanRecorder"](maxlen);
        }
        this.spanRecorder.add(this);
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.finish = function (endTimestamp) {
        var _this = this;
        // This transaction is already finished, so we should not flush it again.
        if (this.endTimestamp !== undefined) {
            return undefined;
        }
        if (!this.name) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
            this.name = '<unlabeled transaction>';
        }
        _super.prototype.finish.call(this, endTimestamp);
        if (this.sampled !== true) {
            // At this point if `sampled !== true` we want to discard the transaction.
            _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');
            return undefined;
        }
        var finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter(function (s) { return s !== _this && s.endTimestamp; }) : [];
        if (this._trimEnd && finishedSpans.length > 0) {
            this.endTimestamp = finishedSpans.reduce(function (prev, current) {
                if (prev.endTimestamp && current.endTimestamp) {
                    return prev.endTimestamp > current.endTimestamp ? prev : current;
                }
                return prev;
            }).endTimestamp;
        }
        return this._hub.captureEvent({
            contexts: {
                trace: this.getTraceContext(),
            },
            spans: finishedSpans,
            start_timestamp: this.startTimestamp,
            tags: this.tags,
            timestamp: this.endTimestamp,
            transaction: this.name,
            type: 'transaction',
        });
    };
    return Transaction;
}(_span__WEBPACK_IMPORTED_MODULE_3__["Span"]));

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/types/esm/index.js ***!
  \*************************************************/
/*! exports provided: LogLevel, Severity, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loglevel */ "./node_modules/@sentry/types/esm/loglevel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _loglevel__WEBPACK_IMPORTED_MODULE_0__["LogLevel"]; });

/* harmony import */ var _severity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./severity */ "./node_modules/@sentry/types/esm/severity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _severity__WEBPACK_IMPORTED_MODULE_1__["Severity"]; });

/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ "./node_modules/@sentry/types/esm/status.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _status__WEBPACK_IMPORTED_MODULE_2__["Status"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/loglevel.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/types/esm/loglevel.js ***!
  \****************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/** Console logging verbosity for the SDK. */
var LogLevel;
(function (LogLevel) {
    /** No logs will be generated. */
    LogLevel[LogLevel["None"] = 0] = "None";
    /** Only SDK internal errors will be logged. */
    LogLevel[LogLevel["Error"] = 1] = "Error";
    /** Information useful for debugging the SDK will be logged. */
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    /** All SDK actions will be logged. */
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=loglevel.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/severity.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/types/esm/severity.js ***!
  \****************************************************/
/*! exports provided: Severity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return Severity; });
/** JSDoc */
// eslint-disable-next-line import/export
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));
//# sourceMappingURL=severity.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/status.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/types/esm/status.js ***!
  \**************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/** The status of an event. */
// eslint-disable-next-line import/export
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    Status["Failed"] = "failed";
})(Status || (Status = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status || (Status = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/async.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/async.js ***!
  \*************************************************/
/*! exports provided: forget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return forget; });
/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forget(promise) {
    promise.then(null, function (e) {
        // TODO: Use a better logging mechanism
        // eslint-disable-next-line no-console
        console.error(e);
    });
}
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/dsn.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/dsn.js ***!
  \***********************************************/
/*! exports provided: Dsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dsn", function() { return Dsn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");


/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
/** Error message */
var ERROR_MESSAGE = 'Invalid Dsn';
/** The Sentry Dsn, identifying a Sentry instance and project. */
var Dsn = /** @class */ (function () {
    /** Creates a new Dsn component */
    function Dsn(from) {
        if (typeof from === 'string') {
            this._fromString(from);
        }
        else {
            this._fromComponents(from);
        }
        this._validate();
    }
    /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
    Dsn.prototype.toString = function (withPassword) {
        if (withPassword === void 0) { withPassword = false; }
        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, user = _a.user;
        return (protocol + "://" + user + (withPassword && pass ? ":" + pass : '') +
            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
    };
    /** Parses a string into this Dsn. */
    Dsn.prototype._fromString = function (str) {
        var match = DSN_REGEX.exec(str);
        if (!match) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE);
        }
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(match.slice(1), 6), protocol = _a[0], user = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
        var path = '';
        var projectId = lastPath;
        var split = projectId.split('/');
        if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
        }
        if (projectId) {
            var projectMatch = projectId.match(/^\d+/);
            if (projectMatch) {
                projectId = projectMatch[0];
            }
        }
        this._fromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, user: user });
    };
    /** Maps Dsn components into this instance. */
    Dsn.prototype._fromComponents = function (components) {
        this.protocol = components.protocol;
        this.user = components.user;
        this.pass = components.pass || '';
        this.host = components.host;
        this.port = components.port || '';
        this.path = components.path || '';
        this.projectId = components.projectId;
    };
    /** Validates this Dsn and throws on error. */
    Dsn.prototype._validate = function () {
        var _this = this;
        ['protocol', 'user', 'host', 'projectId'].forEach(function (component) {
            if (!_this[component]) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": " + component + " missing");
            }
        });
        if (!this.projectId.match(/^\d+$/)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": Invalid projectId " + this.projectId);
        }
        if (this.protocol !== 'http' && this.protocol !== 'https') {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": Invalid protocol " + this.protocol);
        }
        if (this.port && isNaN(parseInt(this.port, 10))) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": Invalid port " + this.port);
        }
    };
    return Dsn;
}());

//# sourceMappingURL=dsn.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/error.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/error.js ***!
  \*************************************************/
/*! exports provided: SentryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return SentryError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill */ "./node_modules/@sentry/utils/esm/polyfill.js");


/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _newTarget.prototype.constructor.name;
        Object(_polyfill__WEBPACK_IMPORTED_MODULE_1__["setPrototypeOf"])(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/index.js ***!
  \*************************************************/
/*! exports provided: forget, SentryError, isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isInstanceOf, logger, Memo, dynamicRequire, isNodeEnv, getGlobalObject, uuid4, parseUrl, getEventDescription, consoleSandbox, addExceptionTypeValue, addExceptionMechanism, getLocationHref, htmlTreeAsString, crossPlatformPerformance, timestampWithMs, parseSemver, parseRetryAfterHeader, getFunctionName, addContextToFrame, fill, urlEncode, normalizeToSize, walk, normalize, extractExceptionKeysForMessage, dropUndefinedKeys, resolve, relative, normalizePath, isAbsolute, join, dirname, basename, PromiseBuffer, truncate, snipLine, safeJoin, isMatchingPattern, supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory, SyncPromise, addInstrumentationHandler, Dsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ "./node_modules/@sentry/utils/esm/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return _async__WEBPACK_IMPORTED_MODULE_0__["forget"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"]; });

/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isThenable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isSyntheticEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return _is__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_3__["logger"]; });

/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return _memo__WEBPACK_IMPORTED_MODULE_4__["Memo"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["dynamicRequire"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["isNodeEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getGlobalObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["uuid4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getEventDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["consoleSandbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["addExceptionTypeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["addExceptionMechanism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getLocationHref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["htmlTreeAsString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crossPlatformPerformance", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["crossPlatformPerformance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["timestampWithMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["parseSemver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["parseRetryAfterHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["getFunctionName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["addContextToFrame"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["fill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["urlEncode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["normalizeToSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["walk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["extractExceptionKeysForMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return _object__WEBPACK_IMPORTED_MODULE_6__["dropUndefinedKeys"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./path */ "./node_modules/@sentry/utils/esm/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["resolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["normalizePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["isAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["dirname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return _path__WEBPACK_IMPORTED_MODULE_7__["basename"]; });

/* harmony import */ var _promisebuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./promisebuffer */ "./node_modules/@sentry/utils/esm/promisebuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseBuffer", function() { return _promisebuffer__WEBPACK_IMPORTED_MODULE_8__["PromiseBuffer"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["truncate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["snipLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["safeJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["isMatchingPattern"]; });

/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/utils/esm/supports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsReportingObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsReferrerPolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return _supports__WEBPACK_IMPORTED_MODULE_10__["supportsHistory"]; });

/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return _syncpromise__WEBPACK_IMPORTED_MODULE_11__["SyncPromise"]; });

/* harmony import */ var _instrument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./instrument */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return _instrument__WEBPACK_IMPORTED_MODULE_12__["addInstrumentationHandler"]; });

/* harmony import */ var _dsn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dsn */ "./node_modules/@sentry/utils/esm/dsn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dsn", function() { return _dsn__WEBPACK_IMPORTED_MODULE_13__["Dsn"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/instrument.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/instrument.js ***!
  \******************************************************/
/*! exports provided: addInstrumentationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return addInstrumentationHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/utils/esm/supports.js");






var global = Object(_misc__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            _logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('unknown instrumentation type:', type);
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(handler) {
    if (!handler || typeof handler.type !== 'string' || typeof handler.callback !== 'function') {
        return;
    }
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.callback);
    instrument(handler.type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                _logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + Object(_misc__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(handler) + "\nError: " + e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in global)) {
        return;
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
        if (!(level in global.console)) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.console, level, function (originalConsoleLevel) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_5__["supportsNativeFetch"])()) {
        return;
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var commonHandlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, commonHandlerData));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(global, args).then(function (response) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, commonHandlerData), { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, commonHandlerData), { endTimestamp: Date.now(), error: error }));
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global)) {
        return;
    }
    var xhrproto = XMLHttpRequest.prototype;
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var url = args[1];
            xhr.__sentry_xhr__ = {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                method: Object(_is__WEBPACK_IMPORTED_MODULE_1__["isString"])(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            };
            // if Sentry key appears in URL, don't capture it as a request
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isString"])(url) && xhr.__sentry_xhr__.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }
            var onreadystatechangeHandler = function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        if (xhr.__sentry_xhr__) {
                            xhr.__sentry_xhr__.status_code = xhr.status;
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', {
                        args: args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: xhr,
                    });
                }
            };
            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhr, 'onreadystatechange', function (original) {
                    return function () {
                        var readyStateArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            readyStateArgs[_i] = arguments[_i];
                        }
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            }
            else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            return originalOpen.apply(xhr, args);
        };
    });
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            triggerHandlers('xhr', {
                args: args,
                startTimestamp: Date.now(),
                xhr: this,
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_5__["supportsHistory"])()) {
        return;
    }
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            return oldOnPopState.apply(this, args);
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.history, 'pushState', historyReplacementFunction);
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.history, 'replaceState', historyReplacementFunction);
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in global)) {
        return;
    }
    // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
    // to the document. Do this before we instrument addEventListener.
    global.document.addEventListener('click', domEventHandler('click', triggerHandlers.bind(null, 'dom')), false);
    global.document.addEventListener('keypress', keypressEventHandler(triggerHandlers.bind(null, 'dom')), false);
    // After hooking into document bubbled up click and keypresses events, we also hook into user handled click & keypresses.
    ['EventTarget', 'Node'].forEach(function (target) {
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        /* eslint-enable @typescript-eslint/no-unsafe-member-access */
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                if (fn && fn.handleEvent) {
                    if (eventName === 'click') {
                        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(fn, 'handleEvent', function (innerOriginal) {
                            return function (event) {
                                domEventHandler('click', triggerHandlers.bind(null, 'dom'))(event);
                                return innerOriginal.call(this, event);
                            };
                        });
                    }
                    if (eventName === 'keypress') {
                        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(fn, 'handleEvent', function (innerOriginal) {
                            return function (event) {
                                keypressEventHandler(triggerHandlers.bind(null, 'dom'))(event);
                                return innerOriginal.call(this, event);
                            };
                        });
                    }
                }
                else {
                    if (eventName === 'click') {
                        domEventHandler('click', triggerHandlers.bind(null, 'dom'), true)(this);
                    }
                    if (eventName === 'keypress') {
                        keypressEventHandler(triggerHandlers.bind(null, 'dom'))(this);
                    }
                }
                return original.call(this, eventName, fn, options);
            };
        });
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'removeEventListener', function (original) {
            return function (eventName, fn, options) {
                try {
                    original.call(this, eventName, fn.__sentry_wrapped__, options);
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return original.call(this, eventName, fn, options);
            };
        });
    });
}
var debounceDuration = 1000;
var debounceTimer = 0;
var keypressTimeout;
var lastCapturedEvent;
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param name the event name (e.g. "click")
 * @param handler function that will be triggered
 * @param debounce decides whether it should wait till another event loop
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function domEventHandler(name, handler, debounce) {
    if (debounce === void 0) { debounce = false; }
    return function (event) {
        // reset keypress timeout; e.g. triggering a 'click' after
        // a 'keypress' will reset the keypress debounce so that a new
        // set of keypresses can be recorded
        keypressTimeout = undefined;
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors). Ignore if we've
        // already captured the event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        lastCapturedEvent = event;
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }
        if (debounce) {
            debounceTimer = setTimeout(function () {
                handler({ event: event, name: name });
            });
        }
        else {
            handler({ event: event, name: name });
        }
    };
}
/**
 * Wraps addEventListener to capture keypress UI events
 * @param handler function that will be triggered
 * @returns wrapped keypress events handler
 * @hidden
 */
function keypressEventHandler(handler) {
    // TODO: if somehow user switches keypress target before
    //       debounce timeout is triggered, we will only capture
    //       a single breadcrumb from the FIRST target (acceptable?)
    return function (event) {
        var target;
        try {
            target = event.target;
        }
        catch (e) {
            // just accessing event properties can throw an exception in some rare circumstances
            // see: https://github.com/getsentry/raven-js/issues/838
            return;
        }
        var tagName = target && target.tagName;
        // only consider keypress events on actual input elements
        // this will disregard keypresses targeting body (e.g. tabbing
        // through elements, hotkeys, etc)
        if (!tagName || (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)) {
            return;
        }
        // record first keypress in a series, but ignore subsequent
        // keypresses until debounce clears
        if (!keypressTimeout) {
            domEventHandler('input', handler)(event);
        }
        clearTimeout(keypressTimeout);
        keypressTimeout = setTimeout(function () {
            keypressTimeout = undefined;
        }, debounceDuration);
    };
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}
//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/is.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/is.js ***!
  \**********************************************/
/*! exports provided: isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return isErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return isDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return isDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return isEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return isThenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return isSyntheticEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return isInstanceOf; });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/logger.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/logger.js ***!
  \**************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

// TODO: Implement different loggers for different environments
var global = Object(_misc__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.log(PREFIX + "[Log]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.warn(PREFIX + "[Warn]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.error(PREFIX + "[Error]: " + args.join(' '));
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global.__SENTRY__ = global.__SENTRY__ || {};
var logger = global.__SENTRY__.logger || (global.__SENTRY__.logger = new Logger());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/memo.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/memo.js ***!
  \************************************************/
/*! exports provided: Memo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return Memo; });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        this._hasWeakSet = typeof WeakSet === 'function';
        this._inner = this._hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this._hasWeakSet) {
            if (this._inner.has(obj)) {
                return true;
            }
            this._inner.add(obj);
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < this._inner.length; i++) {
            var value = this._inner[i];
            if (value === obj) {
                return true;
            }
        }
        this._inner.push(obj);
        return false;
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this._hasWeakSet) {
            this._inner.delete(obj);
        }
        else {
            for (var i = 0; i < this._inner.length; i++) {
                if (this._inner[i] === obj) {
                    this._inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());

//# sourceMappingURL=memo.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/misc.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/misc.js ***!
  \************************************************/
/*! exports provided: dynamicRequire, isNodeEnv, getGlobalObject, uuid4, parseUrl, getEventDescription, consoleSandbox, addExceptionTypeValue, addExceptionMechanism, getLocationHref, htmlTreeAsString, crossPlatformPerformance, timestampWithMs, parseSemver, parseRetryAfterHeader, getFunctionName, addContextToFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return dynamicRequire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return getGlobalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return getEventDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return consoleSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return addExceptionTypeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return addExceptionMechanism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return getLocationHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return htmlTreeAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossPlatformPerformance", function() { return crossPlatformPerformance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return timestampWithMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return parseSemver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return parseRetryAfterHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return addContextToFrame; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");


/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return (isNodeEnv()
        ? global
        : typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        return exception.type || exception.value || event.event_id || '<unknown>';
    }
    return event.event_id || '<unknown>';
}
/** JSDoc */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].value = event.exception.values[0].value || value || '';
    event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
}
/**
 * Adds exception mechanism to a given event.
 * @param event The event to modify.
 * @param mechanism Mechanism of the mechanism.
 * @hidden
 */
function addExceptionMechanism(event, mechanism) {
    if (mechanism === void 0) { mechanism = {}; }
    // TODO: Use real type with `keyof Mechanism` thingy and maybe make it better?
    try {
        // @ts-ignore Type 'Mechanism | {}' is not assignable to type 'Mechanism | undefined'
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        event.exception.values[0].mechanism = event.exception.values[0].mechanism || {};
        Object.keys(mechanism).forEach(function (key) {
            // @ts-ignore Mechanism has no index signature
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            event.exception.values[0].mechanism[key] = mechanism[key];
        });
    }
    catch (_oO) {
        // no-empty
    }
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    try {
        return document.location.href;
    }
    catch (oO) {
        return '';
    }
}
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        // eslint-disable-next-line no-plusplus
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el) {
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    if (elem.id) {
        out.push("#" + elem.id);
    }
    // eslint-disable-next-line prefer-const
    className = elem.className;
    if (className && Object(_is__WEBPACK_IMPORTED_MODULE_0__["isString"])(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
            out.push("." + classes[i]);
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
var INITIAL_TIME = Date.now();
var prevNow = 0;
var performanceFallback = {
    now: function () {
        var now = Date.now() - INITIAL_TIME;
        if (now < prevNow) {
            now = prevNow;
        }
        prevNow = now;
        return now;
    },
    timeOrigin: INITIAL_TIME,
};
var crossPlatformPerformance = (function () {
    if (isNodeEnv()) {
        try {
            var perfHooks = dynamicRequire(module, 'perf_hooks');
            return perfHooks.performance;
        }
        catch (_) {
            return performanceFallback;
        }
    }
    var performance = getGlobalObject().performance;
    if (!performance || !performance.now) {
        return performanceFallback;
    }
    // Polyfill for performance.timeOrigin.
    //
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    if (performance.timeOrigin === undefined) {
        // As of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always a
        // valid fallback. In the absence of a initial time provided by the browser, fallback to INITIAL_TIME.
        // @ts-ignore ignored because timeOrigin is a readonly property but we want to override
        // eslint-disable-next-line deprecation/deprecation
        performance.timeOrigin = (performance.timing && performance.timing.navigationStart) || INITIAL_TIME;
    }
    return performance;
})();
/**
 * Returns a timestamp in seconds with milliseconds precision since the UNIX epoch calculated with the monotonic clock.
 */
function timestampWithMs() {
    return (crossPlatformPerformance.timeOrigin + crossPlatformPerformance.now()) / 1000;
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4],
    };
}
var defaultRetryAfter = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param now current unix timestamp
 * @param header string representation of 'Retry-After' header
 */
function parseRetryAfterHeader(now, header) {
    if (!header) {
        return defaultRetryAfter;
    }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return defaultRetryAfter;
}
var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext) {
    if (linesOfContext === void 0) { linesOfContext = 5; }
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines
        .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(line, 0); });
    frame.context_line = Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines
        .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(line, 0); });
}
//# sourceMappingURL=misc.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/object.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/object.js ***!
  \**************************************************/
/*! exports provided: fill, urlEncode, normalizeToSize, walk, normalize, extractExceptionKeysForMessage, dropUndefinedKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return urlEncode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return normalizeToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return extractExceptionKeysForMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return dropUndefinedKeys; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");





/**
 * Wrap a given object method with a higher-order function
 *
 * @param source An object that contains a method to be wrapped.
 * @param name A name of method to be wrapped.
 * @param replacement A function that should be used to wrap a given method.
 * @returns void
 */
function fill(source, name, replacement) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacement(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        try {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __sentry_original__: {
                    enumerable: false,
                    value: original,
                },
            });
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all it's attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order to be usable by the serializer
 */
function getWalkSource(value) {
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isError"])(value)) {
        var error = value;
        var err = {
            message: error.message,
            name: error.name,
            stack: error.stack,
        };
        for (var i in error) {
            if (Object.prototype.hasOwnProperty.call(error, i)) {
                err[i] = error[i];
            }
        }
        return err;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isEvent"])(value)) {
        var event_1 = value;
        var source = {};
        source.type = event_1.type;
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            source.target = Object(_is__WEBPACK_IMPORTED_MODULE_1__["isElement"])(event_1.target)
                ? Object(_misc__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(event_1.target)
                : Object.prototype.toString.call(event_1.target);
        }
        catch (_oO) {
            source.target = '<unknown>';
        }
        try {
            source.currentTarget = Object(_is__WEBPACK_IMPORTED_MODULE_1__["isElement"])(event_1.currentTarget)
                ? Object(_misc__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(event_1.currentTarget)
                : Object.prototype.toString.call(event_1.currentTarget);
        }
        catch (_oO) {
            source.currentTarget = '<unknown>';
        }
        if (typeof CustomEvent !== 'undefined' && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(value, CustomEvent)) {
            source.detail = event_1.detail;
        }
        for (var i in event_1) {
            if (Object.prototype.hasOwnProperty.call(event_1, i)) {
                source[i] = event_1;
            }
        }
        return source;
    }
    return value;
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var serialized = normalize(object, depth);
    if (jsonSize(serialized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return serialized;
}
/** Transforms any input value into a string form, either primitive value or a type of the input */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return value;
    }
    if (type === '[object Object]') {
        return '[Object]';
    }
    if (type === '[object Array]') {
        return '[Array]';
    }
    var normalized = normalizeValue(value);
    return Object(_is__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof global !== 'undefined' && value === global) {
        return '[Global]';
    }
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // React's SyntheticEvent thingy
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isSyntheticEvent"])(value)) {
        return '[SyntheticEvent]';
    }
    if (typeof value === 'number' && value !== value) {
        return '[NaN]';
    }
    if (value === void 0) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + Object(_misc__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(value) + "]";
    }
    return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function walk(key, value, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = new _memo__WEBPACK_IMPORTED_MODULE_2__["Memo"](); }
    // If we reach the maximum depth, serialize whatever has left
    if (depth === 0) {
        return serializeValue(value);
    }
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // If value implements `toJSON` method, call it and return early
    if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further
    var normalized = normalizeValue(value, key);
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(normalized)) {
        return normalized;
    }
    // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself
    var source = getWalkSource(value);
    // Create an accumulator that will act as a parent for all future itterations of that branch
    var acc = Array.isArray(value) ? [] : {};
    // If we already walked that branch, bail out, as it's circular reference
    if (memo.memoize(value)) {
        return '[Circular ~]';
    }
    // Walk all keys of the source
    for (var innerKey in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
            continue;
        }
        // Recursively walk through all the child nodes
        acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
    }
    // Once walked through all the branches, remove the parent from memo storage
    memo.unmemoize(value);
    // Return accumulated values
    return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function normalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth); }));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    var keys = Object.keys(getWalkSource(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return Object(_string__WEBPACK_IMPORTED_MODULE_4__["truncate"])(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return Object(_string__WEBPACK_IMPORTED_MODULE_4__["truncate"])(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}
//# sourceMappingURL=object.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/path.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/path.js ***!
  \************************************************/
/*! exports provided: resolve, relative, normalizePath, isAbsolute, join, dirname, basename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return isAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        }
        else if (last === '..') {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up++;
        }
        else if (up) {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        // eslint-disable-next-line no-plusplus
        for (; up--; up) {
            parts.unshift('..');
        }
    }
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
/** JSDoc */
function splitPath(filename) {
    var parts = splitPathRe.exec(filename);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resolvedPath = '';
    var resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? args[i] : '/';
        // Skip empty entries
        if (!path) {
            continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
/** JSDoc */
function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
        if (arr[start] !== '') {
            break;
        }
    }
    var end = arr.length - 1;
    for (; end >= 0; end--) {
        if (arr[end] !== '') {
            break;
        }
    }
    if (start > end) {
        return [];
    }
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
    /* eslint-disable no-param-reassign */
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    /* eslint-enable no-param-reassign */
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
// path.normalize(path)
// posix version
/** JSDoc */
function normalizePath(path) {
    var isPathAbsolute = isAbsolute(path);
    var trailingSlash = path.substr(-1) === '/';
    // Normalize the path
    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
    if (!normalizedPath && !isPathAbsolute) {
        normalizedPath = '.';
    }
    if (normalizedPath && trailingSlash) {
        normalizedPath += '/';
    }
    return (isPathAbsolute ? '/' : '') + normalizedPath;
}
// posix version
/** JSDoc */
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
// posix version
/** JSDoc */
function join() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return normalizePath(args.join('/'));
}
/** JSDoc */
function dirname(path) {
    var result = splitPath(path);
    var root = result[0];
    var dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
/** JSDoc */
function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(ext.length * -1) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
}
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/polyfill.js ***!
  \****************************************************/
/*! exports provided: setPrototypeOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrototypeOf", function() { return setPrototypeOf; });
var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * setPrototypeOf polyfill using __proto__
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function setProtoOf(obj, proto) {
    // @ts-ignore __proto__ does not exist on obj
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        // eslint-disable-next-line no-prototype-builtins
        if (!obj.hasOwnProperty(prop)) {
            // @ts-ignore typescript complains about indexing so we remove
            obj[prop] = proto[prop];
        }
    }
    return obj;
}
//# sourceMappingURL=polyfill.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/promisebuffer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/promisebuffer.js ***!
  \*********************************************************/
/*! exports provided: PromiseBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseBuffer", function() { return PromiseBuffer; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/utils/esm/syncpromise.js");


/** A simple queue that holds promises. */
var PromiseBuffer = /** @class */ (function () {
    function PromiseBuffer(_limit) {
        this._limit = _limit;
        /** Internal set of queued Promises */
        this._buffer = [];
    }
    /**
     * Says if the buffer is ready to take more requests
     */
    PromiseBuffer.prototype.isReady = function () {
        return this._limit === undefined || this.length() < this._limit;
    };
    /**
     * Add a promise to the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns The original promise.
     */
    PromiseBuffer.prototype.add = function (task) {
        var _this = this;
        if (!this.isReady()) {
            return _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject(new _error__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Not adding Promise due to buffer limit reached.'));
        }
        if (this._buffer.indexOf(task) === -1) {
            this._buffer.push(task);
        }
        task
            .then(function () { return _this.remove(task); })
            .then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add this catch here otherwise we have an unhandledPromiseRejection
                // because it's a new Promise chain.
            });
        });
        return task;
    };
    /**
     * Remove a promise to the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    PromiseBuffer.prototype.remove = function (task) {
        var removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0];
        return removedTask;
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    PromiseBuffer.prototype.length = function () {
        return this._buffer.length;
    };
    /**
     * This will drain the whole queue, returns true if queue is empty or drained.
     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
     *
     * @param timeout Number in ms to wait until it resolves with false.
     */
    PromiseBuffer.prototype.drain = function (timeout) {
        var _this = this;
        return new _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve) {
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].all(_this._buffer)
                .then(function () {
                clearTimeout(capturedSetTimeout);
                resolve(true);
            })
                .then(null, function () {
                resolve(true);
            });
        });
    };
    return PromiseBuffer;
}());

//# sourceMappingURL=promisebuffer.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/string.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/string.js ***!
  \**************************************************/
/*! exports provided: truncate, snipLine, safeJoin, isMatchingPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return snipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return safeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return isMatchingPattern; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var ll = newLine.length;
    if (ll <= 150) {
        return newLine;
    }
    if (colno > ll) {
        // eslint-disable-next-line no-param-reassign
        colno = ll;
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, ll);
    if (end > ll - 5) {
        end = ll;
    }
    if (end === ll) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < ll) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (!Object(_is__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
        return false;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/supports.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/supports.js ***!
  \****************************************************/
/*! exports provided: supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return supportsErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return supportsDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return supportsDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return supportsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return supportsNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return supportsReportingObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return supportsReferrerPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");


/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])())) {
        return false;
    }
    try {
        new Headers();
        new Request('');
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === "function") {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            _logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    return 'ReportingObserver' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
//# sourceMappingURL=supports.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/syncpromise.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/syncpromise.js ***!
  \*******************************************************/
/*! exports provided: SyncPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return SyncPromise; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/** SyncPromise internal states */
var States;
(function (States) {
    /** Pending */
    States["PENDING"] = "PENDING";
    /** Resolved / OK */
    States["RESOLVED"] = "RESOLVED";
    /** Rejected / Error */
    States["REJECTED"] = "REJECTED";
})(States || (States = {}));
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = States.PENDING;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(States.RESOLVED, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(States.REJECTED, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== States.PENDING) {
                return;
            }
            if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isThenable"])(value)) {
                value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        // TODO: FIXME
        /** JSDoc */
        this._attachHandler = function (handler) {
            _this._handlers = _this._handlers.concat(handler);
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === States.PENDING) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler.done) {
                    return;
                }
                if (_this._state === States.RESOLVED) {
                    if (handler.onfulfilled) {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        handler.onfulfilled(_this._value);
                    }
                }
                if (_this._state === States.REJECTED) {
                    if (handler.onrejected) {
                        handler.onrejected(_this._value);
                    }
                }
                handler.done = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.resolve = function (value) {
        return new SyncPromise(function (resolve) {
            resolve(value);
        });
    };
    /** JSDoc */
    SyncPromise.reject = function (reason) {
        return new SyncPromise(function (_, reject) {
            reject(reason);
        });
    };
    /** JSDoc */
    SyncPromise.all = function (collection) {
        return new SyncPromise(function (resolve, reject) {
            if (!Array.isArray(collection)) {
                reject(new TypeError("Promise.all requires an array as input."));
                return;
            }
            if (collection.length === 0) {
                resolve([]);
                return;
            }
            var counter = collection.length;
            var resolvedCollection = [];
            collection.forEach(function (item, index) {
                SyncPromise.resolve(item)
                    .then(function (value) {
                    resolvedCollection[index] = value;
                    counter -= 1;
                    if (counter !== 0) {
                        return;
                    }
                    resolve(resolvedCollection);
                })
                    .then(null, reject);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._attachHandler({
                done: false,
                onfulfilled: function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                        return;
                    }
                    try {
                        resolve(onfulfilled(result));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
                onrejected: function (reason) {
                    if (!onrejected) {
                        reject(reason);
                        return;
                    }
                    try {
                        resolve(onrejected(reason));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.toString = function () {
        return '[object SyncPromise]';
    };
    return SyncPromise;
}());

//# sourceMappingURL=syncpromise.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/mobile-nav */ "./resources/js/modules/mobile-nav/index.js");
/* harmony import */ var _modules_cookie_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/cookie-notice */ "./resources/js/modules/cookie-notice/index.js");
/* harmony import */ var _modules_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/notice */ "./resources/js/modules/notice/index.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/forms */ "./resources/js/modules/forms/index.js");
/* harmony import */ var _modules_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/reviews */ "./resources/js/modules/reviews/index.js");
/* harmony import */ var _modules_sentry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/sentry */ "./resources/js/modules/sentry/index.js");
/* harmony import */ var _modules_browser_supported__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/browser-supported */ "./resources/js/modules/browser-supported/index.js");
// Import local modules








/***/ }),

/***/ "./resources/js/modules/browser-supported/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/browser-supported/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var browserSupported = function () {
  "use strict";

  if (!("function" == typeof Blob && "undefined" != typeof Intl && "undefined" != typeof MutationObserver && "undefined" != typeof URLSearchParams && "undefined" != typeof WebSocket && "undefined" != typeof IntersectionObserver && "entries" in FormData.prototype && "append" in Element.prototype)) {
    var e = document.getElementById("unsupported-browser");
    e && e.removeAttribute("hidden");
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (browserSupported);

/***/ }),

/***/ "./resources/js/modules/cookie-notice/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/cookie-notice/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cookieNotice = function cookieNotice() {
  // When in client browser, run getCookie to look for "cookiesAccepted"
  function checkCookie() {
    var name = "cookiesAccepted";
    var localCookie = getCookie(name);
    localCookie ? hideCookieNotice() : "";
  }

  checkCookie(); // Initializing function to set a cookie

  function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  } // Initializing function to get a cookie


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  } // On click, set cookiesAccepted to true and run setCookie


  function acceptCookies() {
    var cookieName = "cookiesAccepted";
    var cookieValue = true;
    var daysValid = 365;
    setCookie(cookieName, cookieValue, daysValid);
    hideCookieNotice();
  }

  function hideCookieNotice() {
    // Get cookieNotice element from dom
    var cookieNotice = document.querySelector("[data-cookie-notice]"); // Check if cookieNotice is defined

    if (cookieNotice) {
      // Add hidden class
      cookieNotice.classList.add("hidden"); // remove display:flex class

      cookieNotice.classList.remove("md:flex");
    }
  }

  document.addEventListener("click", function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("[data-accept-cookies]")) return; // Run acceptCookies function

    acceptCookies(); // Don't follow the link
    // event.preventDefault();
    // Log the clicked element in the console
    // console.log(event.target);
  }, false);
}();

/* harmony default export */ __webpack_exports__["default"] = (cookieNotice);

/***/ }),

/***/ "./resources/js/modules/forms/index.js":
/*!*********************************************!*\
  !*** ./resources/js/modules/forms/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = function forms() {
  if (document.querySelector("#schaden-form") || document.querySelector("#anfrage-form")) {
    // let reviewForm = document.querySelector("#review-form");
    // Add instrument
    var addInstrument = function addInstrument() {
      // Increment instrument count
      incrementInstrumentCount(); // Single instrument html to add more instruments

      var singleInstrument = "<div class=\"single-instrument flex flex-wrap md:flex-no-wrap items-end mb-x1p5 md:mb-x0p5\">\n  <label class=\"flex md:flex-grow flex-col items-start flex-none md:flex-auto w-full md:w-1/2 md:mr-x0p5\">\n    Instrument / Zubeh\xF6r ".concat(instrumentCount, "\n    <input\n      name=\"instrument").concat(instrumentCount, "\"\n      type=\"text\"\n      class=\"w-full \"\n      autofocus \n      ").concat(instrumentCount === 1 ? "required" : "", "/>\n  </label>\n  <label\n    class=\"flex flex-col flex-grow-0 flex-1 order-1 mr-x0p5 w-2/6 md:w-auto\n    md:w-1/6\">\n    Wert in \u20AC\n    <input\n      type=\"number\"\n      name=").concat("value" + instrumentCount, "\n      pattern=\"d*\"\n      ").concat(instrumentCount === 1 ? "required" : "", "/>\n  </label>\n  <div class=\"toggle flex order-2 md:order-2\">\n    <input\n      type=\"radio\"\n      name=").concat("valueType" + instrumentCount, "\n      value=\"Neuwert\"\n      id=").concat("neuwert" + instrumentCount, " required />\n    <label\n      class=\"option overlap flex-1 small\"\n      for=").concat("neuwert" + instrumentCount, ">\n      <p>Neuwert</p>\n    </label>\n    <!-- <label for=\"Zeitwert\"> -->\n    <input\n      type=\"radio\"\n      name=").concat("valueType" + instrumentCount, "\n      value=\"Zeitwert\"\n      id=").concat("zeitwert" + instrumentCount, "  />\n    <label\n      class=\"option flex-1 small\"\n      for=").concat("zeitwert" + instrumentCount, ">\n      <p>Zeitwert</p>\n    </label>\n  </div>\n</div>"); // Add to DOM after class singleInstrument

      if (storageID === "anfrage-form") {
        document.querySelector(".instrument-list").insertAdjacentHTML("beforeend", singleInstrument);
      }
    };

    var showTab = function showTab(n) {
      // This function will display the specified tab of the form...
      var tabs = document.getElementsByClassName("tab");
      if (n === tabs.length) return;
      tabs[n].style.display = "block"; //... and fix the Previous/Next buttons:

      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }

      if (n == tabs.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Absenden";
      } else {
        document.getElementById("nextBtn").innerHTML = "Weiter";
      } //... and run a function that will display the correct step indicator:


      {
        {
          /*  fixStepIndicator(n);  */
        }
      }
    }; // function toggleErrorMessage() {
    //   errorMessage.classList.toggle("hidden");
    // }


    var nextPrev = function nextPrev(n) {
      // This function will figure out which tab to display
      var tabs = document.getElementsByClassName("tab"); // Exit the function if any field in the current tab is invalid:

      if (n == 1 && !validateForm()) {
        // If errorMessage is hidden, show it
        if (errorMessage.classList.contains("hidden")) errorMessage.classList.toggle("hidden");
        return false;
      } // If errorMessage is shown, hide it


      if (errorMessage && !errorMessage.classList.contains("hidden")) errorMessage.classList.toggle("hidden"); // Hide the current tab if its not the last:

      if (n !== tabs.length) {
        tabs[currentTab].style.display = "none";
      } // Increase or decrease the current tab by 1:


      currentTab = currentTab + n; // if you have reached the end of the form...

      if (currentTab >= tabs.length) {
        // ... the form gets submitted:
        //   document.getElementById("form").submit();
        document.querySelector("form").dispatchEvent(new Event("submit", {
          bubbles: true,
          cancelable: true
        }));
        return false;
      } // Otherwise, display the correct tab:


      showTab(currentTab);
      window.scrollTo({
        top: 0
      });
    };

    var validateForm = function validateForm() {
      // Helper function to test if an element or parent is hidden
      function isHidden(el) {
        return el.offsetParent === null;
      } // This function deals with validation of the form fields


      var tabs,
          requiredInputsInTab,
          i,
          valid = true;
      tabs = document.getElementsByClassName("tab"); // Set required inputs in tab

      requiredInputsInTab = tabs[currentTab].querySelectorAll("input[required], textarea[required], select[required] "); // A loop that checks every input field in the current tab:

      for (i = 0; i < requiredInputsInTab.length; i++) {
        // If a field is empty...
        if (requiredInputsInTab[i].value == "" && !isHidden(requiredInputsInTab[i])) {
          // console.log(requiredInputsInTab[i]);
          // if field doesnt have invalid class
          if (!requiredInputsInTab[i].classList.contains("invalid")) {
            // add an "invalid" class to the field:
            requiredInputsInTab[i].classList.add("invalid");
          } // console.log(requiredInputsInTab[i]);
          // and set the current valid status to false


          valid = false;
        }

        if ( // if field is checkbox and not checked
        requiredInputsInTab[i].type == "checkbox" && !requiredInputsInTab[i].checked) {
          // if field doesnt have invalid class
          if (!requiredInputsInTab[i].classList.contains("invalid")) {
            // add an "invalid" class to the field:
            requiredInputsInTab[i].classList.add("invalid");
          } // and set the current valid status to false


          valid = false;
        }

        if ( // if field is radio button
        requiredInputsInTab[i].type == "radio" && !isHidden(requiredInputsInTab[i])) {
          // Get all elements (so siblings + the input)
          var allElements = Array.from(requiredInputsInTab[i].parentNode.children); // Get the inputs in the toggle

          var inputs = allElements.filter(function (el) {
            return el.localName === "input";
          }); // Get the labels in the toggle

          var labels = allElements.filter(function (el) {
            return el.localName === "label";
          }); // If neither input is checked

          if (!inputs[0].checked && !inputs[1].checked) {
            // ADd invalid class to both labels
            labels.forEach(function (label) {
              return label.classList.add("invalid");
            }); // and set the current valid status to false

            valid = false; // console.log(valid);
          } else {
            // Otherwise remove invalid class from both labels
            labels.forEach(function (label) {
              return label.classList.remove("invalid");
            });
          }
        }

        if ( // if field is not empty and has invalid class
        !requiredInputsInTab[i].value == "" && requiredInputsInTab[i].type != "checkbox" && requiredInputsInTab[i].classList.contains("invalid")) {
          // remove the invalid class
          requiredInputsInTab[i].classList.remove("invalid");
        } else if ( // if field is a checkbox, checked and has invalid class
        requiredInputsInTab[i].type == "checkbox" && requiredInputsInTab[i].checked && requiredInputsInTab[i].classList.contains("invalid")) {
          requiredInputsInTab[i].classList.remove("invalid");
        }
      }

      return valid; // return the valid status
    }; // Catch all clicks on form


    var showElement = function showElement(element, requiredElement) {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");

        if (requiredElement) {
          requiredElement.setAttribute("required", "required");
        }
      }
    };

    var hideElement = function hideElement(element, nonRequiredElement) {
      if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");

        if (nonRequiredElement) {
          nonRequiredElement.removeAttribute("required", "required");
        }
      }
    }; // Automatically saving form
    // Variables


    var restoreState = function restoreState(saved) {
      // console.log(saved);
      if (saved.versicherungstyp === "SINFONIMA") sinfonimaState();
      if (saved.versicherungstyp === "IAMSOUND") iamsoundState();
      if (saved.wohnsitz === "anderes Land") showElement(customCountryLabel, customCountryInput);
    };

    var sinfonimaState = function sinfonimaState() {
      // Hide imsound input, show organization in tab 2 and sinfonima section
      hideElement(totalValueLabel, totalValueInput);
      showElement(organizationLabel, organizationSelect);
      hideElement(imSoundSection);
      showElement(sinfonimasection);
      if (organizationSelect.value === "Sonstige") showElement(customOrganizationLabel);
    };

    var iamsoundState = function iamsoundState() {
      // Reveal the hidden totalValue field for IM SOUND, hide sinfonima seciton
      showElement(totalValueLabel, totalValueInput);
      hideElement(organizationLabel, organizationSelect);
      showElement(imSoundSection);
      hideElement(sinfonimasection);
      hideElement(customOrganizationLabel, customOrganizationInput);
    };
    /**
     * Handle input events
     * @param  {Event} event The event object
     */


    /**
     * Handle submit events
     * @param  {Event} event The event object
     */
    // var reviewSubmitHandler = function(event) {
    //   console.log(event);
    //   // Add form .submitting state class for styling
    //   // event.target.classList.add("submitting");
    // };
    var createInstrumentsArray = function createInstrumentsArray() {
      // let list = document.querySelector(".instrument-list");
      var singleInstruments = document.querySelectorAll(".single-instrument"); // let inputs = list.querySelectorAll("input");
      // console.log(inputs);
      // let instrumentsList = [];

      singleInstruments.forEach(function (item) {
        var inputs = Array.from(item.querySelectorAll("input"));
        var instrumentObject = {
          name: "",
          valueType: "",
          value: ""
        };
        inputs.forEach(function (input, index) {
          if (input.type === "radio" && input.checked === true) {
            instrumentObject.valueType = input.value;
          } else if (input.type !== "radio" && input.name.includes("instrument")) {
            instrumentObject.name = input.value;
          } else if (input.type !== "radio" && input.name.includes("value")) {
            instrumentObject.value = input.value;
          } // Every 4th element start overwriting the instrument object
          // if (index % 4 === 3) {
          // }

        }); // console.log(instrumentObject);

        instruments.push(instrumentObject);
      });
    };

    // This script handles form pages called tabs, adding instruments to the list and saves the form's state to localstorage and loads it
    // Set variables
    // Current tab is set to be the first tab (0)
    var currentTab = 0; // Display the current tab

    showTab(currentTab); // Instrument counter starts with 0 instrument

    var instrumentCount = 0;
    var instruments = []; // Increment instrument count

    var incrementInstrumentCount = function incrementInstrumentCount() {
      return instrumentCount++;
    }; // DOM-Elements as variables


    var errorMessage = document.querySelector(".error-message");
    var totalValueLabel = document.querySelector("[data-totalValue]");
    var totalValueInput = document.querySelector('input[name="gesamtWert"]');
    var organizationLabel = document.querySelector("label[data-organization]");
    var organizationSelect = document.querySelector("select[data-organization]");
    var customOrganizationLabel = document.querySelector("label[data-customorganization]");
    var customOrganizationInput = document.querySelector("input[data-customorganization]");
    var imSoundSection = document.querySelector("div[data-imsoundsection]");
    var sinfonimasection = document.querySelector("div[data-sinfonimasection]");
    var customCountryLabel = document.querySelector("label[data-customCountry]");
    var customCountryInput = document.querySelector("input[data-customCountry]");
    var musikerhaftpflichtLabel = document.querySelector("div[data-musikerhaftpflicht]");
    var probeRaumOrtLabel = document.querySelector("div[data-proberaumort]");
    var probeRaumBeschreibungLabel = document.querySelector("label[data-proberaumbeschreibung]");
    document.addEventListener("click", function (event) {
      // If user clicks "add instrument"-buttton
      if (event.target.matches('button[data-name="addInstrument"]')) {
        // Disable "add instrument" button at 10 slots
        if (instrumentCount < 10) {
          // Add instrument
          addInstrument(); // Set focus to newly created instrument field

          document.querySelector(".single-instrument:last-of-type input").focus();
        } else {
          document.querySelector('button[data-name="addInstrument"]').setAttribute("disabled", "disabled");
        } // Get existing data from localStorage


        var saved = localStorage.getItem(storageID);
        saved = saved ? JSON.parse(saved) : {}; // Save the insrumentCounter to it

        saved.instrumentCount = instrumentCount; // Save the object back to localStorage

        localStorage.setItem(storageID, JSON.stringify(saved));
      }
    }); // Conditional fields based on drop downs

    document.addEventListener("change", function (event) {
      // Reveal Sinfonima fields and section
      if (event.target.matches("#SINFONIMA")) {
        // Hide totalValue field
        sinfonimaState();
        return;
      }

      if (event.target.matches("#IAMSOUND")) {
        // Reveal IMSOUND fields and section
        iamsoundState();
        return;
      } // If residency is in other country show custom country input


      if (event.target.matches("select[data-residency]")) {
        if (event.target.value === "anderes Land") showElement(customCountryLabel, customCountryInput); // if it is not another country hide custom country input

        if (event.target.value !== "anderes Land") hideElement(customCountryLabel, customCountryInput);
      } // If organization is set to sonstige show custom input


      if (event.target.matches("select[data-organization]")) {
        if (event.target.value === "Sonstige") showElement(customOrganizationLabel, customOrganizationInput); // If organization is not set to sonstige hide custom input

        if (event.target.value !== "Sonstige") hideElement(customOrganizationLabel, customOrganizationInput);
      } // If proberaum vorhanden show it


      if (event.target.matches("input[name='proberaum']")) {
        if (event.target.value === "ja") showElement(probeRaumOrtLabel); // If proberaum is not used hide further proberaum inputs

        if (event.target.value !== "ja") hideElement(probeRaumOrtLabel) & hideElement(probeRaumBeschreibungLabel);
      } // If proberaum is not in an inhabitat building show description input


      if (event.target.matches("input[name='bewohnt']")) {
        if (event.target.value !== "ja") showElement(probeRaumBeschreibungLabel); // If proberaum is in a inhabitat building hide description input

        if (event.target.value === "ja") hideElement(probeRaumBeschreibungLabel);
      } // If verdient Geld changes


      if (event.target.matches("input[name='verdient-geld']")) {
        if (event.target.value === "ja") showElement(musikerhaftpflichtLabel); // If organization is not set to sonstige hide custom input

        if (event.target.value !== "ja") hideElement(musikerhaftpflichtLabel);
      }
    });

    if (document.querySelector("[data-auto-save]")) {
      var storageID = document.querySelector("[data-auto-save]").id;
    } // Methods

    /**
     * Get an ID for a field
     * @param  {Node}   field The field
     * @return {String}       The ID
     */


    var getName = function getName(field) {
      if (field.name.length > 0) {
        return field.name;
      }

      if (field.id.length > 0) {
        return field.id;
      }

      return null;
    }; // Load saved form data from localStorage


    var loadData = function loadData() {
      addInstrument(); // Get localStorage data

      var saved = localStorage.getItem(storageID);
      if (!saved) return;
      saved = JSON.parse(saved); // Check if instruments had been added previously

      if (saved.instrumentCount != instrumentCount) {
        // Add instruments until the count is equal
        while (instrumentCount <= saved.instrumentCount) {
          // Add instrument
          addInstrument();
        }
      }

      if (saved.proberaum === "ja") showElement(probeRaumOrtLabel); // Get all of the form fields

      var fields = document.querySelectorAll("[data-auto-save] input, [data-auto-save] textarea, [data-auto-save] select"); // Loop through each field and load any saved data in localStorage

      Array.prototype.slice.call(fields).forEach(function (field) {
        // If the field has no usable ID, skip it
        var name = getName(field);
        if (!name) return; // Skip the files input as the File object cannot be stored in localstorage

        if (name == "files") return; // If there's no saved data in localStorage, skip it

        if (!saved[name]) return; // Set the field value to the saved data in localStorage
        // If it's a checkbox, set it's checked state
        // If it's a radio button and its value matches, set its checked state
        // Otherwise, set the value

        if (field.type === "checkbox") {
          field.checked = saved[name] === "on" ? true : false;
        } else if (field.type === "radio") {
          field.checked = saved[name] === field.value ? true : false;
        } else {
          field.value = saved[name];
        }
      });
      restoreState(saved);
    };

    var inputHandler = function inputHandler(event) {
      // Only run for fields in the [data-auto-save] form
      if (!event.target.closest("[data-auto-save]")) return; // Get an ID for the field

      var name = getName(event.target);
      if (!name) return; // Get existing data from localStorage

      var saved = localStorage.getItem(storageID);
      saved = saved ? JSON.parse(saved) : {}; // Add the field to the localStorage object
      // If it's a checkbox, use on/off values
      // Otherwise, save the value

      if (event.target.type === "checkbox") {
        saved[name] = event.target.checked ? "on" : "off";
      } else {
        saved[name] = event.target.value;
      } // Save the object back to localStorage


      localStorage.setItem(storageID, JSON.stringify(saved));
    };

    var submitHandler = function submitHandler(e) {
      // Prevent default form submit
      e.preventDefault(); // console.log(e);
      // Turn instrument fields into an array

      if (storageID === "anfrage-form") createInstrumentsArray(); // Ignore forms that are actively being submitted

      if (e.target.classList.contains("submitting")) return; // Show submitting message

      var status = e.target.querySelector("[data-submit]");
      status.innerHTML = "Sendet...";
      status.disabled = true; // Add form .submitting state class for styling

      e.target.classList.add("submitting"); // Turn FormData to object

      var formDataObject = {};
      new FormData(e.target).forEach(function (value, key) {
        formDataObject[key] = value;
      }); // Add instruments to it

      formDataObject.instruments = instruments;
      var requestOptions; // Confige either fetch with json or with FormData

      storageID === "anfrage-form" ? requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObject),
        redirect: "follow"
      } : requestOptions = {
        method: "POST",
        body: new FormData(e.target),
        redirect: "follow"
      };
      var requestUrl = "";
      var redirectUrl = ""; // Set request url

      storageID === "anfrage-form" ? requestUrl = "https://hook.integromat.com/x7swibee0rqqfyquedknnxg2my0wfd1d" : requestUrl = "https://hook.integromat.com/18q6cjkcxpcl121zortxbnn506xv3hr4"; // Set redirect url

      storageID === "anfrage-form" ? redirectUrl = "/danke/" : redirectUrl = "/schaden-gemeldet/"; // Post to formbackend

      fetch(requestUrl, requestOptions).then(function (response) {
        // If response is ok
        if (response.ok) {
          // console.log("fetch response ok");
          // console.log(requestOptions.body);
          // redirect to schaden-gemeldet page
          window.location.href = redirectUrl; // Clear saved formdata from localstorage

          localStorage.removeItem(storageID);
        }
      }) // If there is an error log it to console and reidrect to fehler page
      ["catch"](function (error) {
        console.error("Error: ", error);
        window.location.href = "/fehler/";
      });
    }; // Inits & Event Listeners
    // Load saved data from storage


    loadData(); // Listen for input events

    document.addEventListener("input", inputHandler, false); // Listen for submit events
    // reviewForm.addEventListener("submit", console.log(e), false);
    //   document.addEventListener("submit", submitHandler, false);

    document.addEventListener("submit", submitHandler, false); // Listen for tab navigation button clicks

    document.addEventListener("click", function (event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches("#nextBtn") && !event.target.matches("#prevBtn")) return; // If the clicked element has the right selector run function

      if (event.target.matches("#nextBtn")) {
        nextPrev(1);
      } else if (event.target.matches("#prevBtn")) {
        nextPrev(-1);
      }
    }, false);
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./resources/js/modules/mobile-nav/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/mobile-nav/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MobileNav = function MobileNav() {
  var mobileMenuButton = document.querySelector(".mobile-icon");
  var mobileMenu = document.querySelector(".mobile-menu");
  var mobileMenuContainer = document.querySelector(".mobile-menu-container");
  var main = document.querySelector("#main");
  var body = document.querySelector("body");
  mobileMenuButton.addEventListener("click", function () {
    mobileMenuContainer.classList.toggle("invisible");
    mobileMenuButton.classList.toggle("active");
    mobileMenu.classList.toggle("expanded");
    body.classList.toggle("fixed");
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

/***/ "./resources/js/modules/notice/index.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/notice/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var notice = function notice() {
  // When in client browser, run getCookie to look for "cookiesAccepted"
  function checkCookie() {
    var name = "hideNotice";
    var localCookie = getCookie(name);
    localCookie ? hideNotice() : "";
  }

  checkCookie(); // Initializing function to set a cookie

  function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  } // Initializing function to get a cookie


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  } // On click, set hidenotice cookie


  function acceptNotice() {
    var cookieName = "hideNotice";
    var cookieValue = true;
    var daysValid = 10;
    setCookie(cookieName, cookieValue, daysValid);
    hideNotice();
  }

  function hideNotice() {
    // Get notice element from dom
    var notice = document.querySelector("[data-notice]"); // Add hidden class

    notice.classList.add("hidden"); // remove display:flex class

    notice.classList.remove("md:flex");
  }

  document.addEventListener("click", function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("[data-hide-notice]")) return; // Run hideNotice function

    acceptNotice();
  }, false);
}();

/* harmony default export */ __webpack_exports__["default"] = (notice);

/***/ }),

/***/ "./resources/js/modules/reviews/index.js":
/*!***********************************************!*\
  !*** ./resources/js/modules/reviews/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reviews = function forms() {
  if (document.querySelector("#review-form")) {
    // Set variable
    var reviewSubmitHandler = function reviewSubmitHandler(event) {
      // Prevent default form submit
      // event.preventDefault();
      // console.log(event);
      // Ignore forms that are actively being submitted
      if (event.target.classList.contains("submitting")) return; // Show submitting message

      var status = event.target.querySelector("[data-submit]");
      status.innerHTML = "Sendet...";
      status.disabled = true; // Add form .submitting state class for styling
      // event.target.classList.add("submitting");
    }; // var submitHandler = function(event) {
    //   if (storageID === "schaden-form" || storageID === "anfrage-form") {
    //     console.log(event);
    //     // Prevent default form submit
    //     event.preventDefault();
    //     // Ignore forms that are actively being submitted
    //     if (event.target.classList.contains("submitting")) return;
    //     // Show submitting message
    //     var status = event.target.querySelector("[data-submit]");
    //     status.innerHTML = "Sendet...";
    //     // Add form .submitting state class for styling
    //     event.target.classList.add("submitting");
    //     // Confige fetch request options
    //     var requestOptions = {
    //       method: "POST",
    //       body: new FormData(event.target),
    //       redirect: "follow",
    //     };
    //     let requestUrl = "";
    //     let redirectUrl = "";
    //     storageID === "anfrage-form" ??
    //       (requestUrl = "https://www.formbackend.com/f/1cf344532f65848f");
    //     storageID === "schaden-form" ??
    //       (requestUrl = "https://www.formbackend.com/f/706ac99a74b44def");
    //     storageID === "anfrage-form"
    //       ? (redirectUrl = "/danke/")
    //       : (redirectUrl = "/schaden-gemeldet/");
    // Post to formbackend
    // fetch(requestUrl, requestOptions)
    //   // fetch("https://1454459a-1de0-4477-9d83-6534dee946eb.mock.pstmn.io/v1", requestOptions)
    //   .then((response) => {
    //     // If response is ok
    //     if (response.ok) {
    //       // redirect to schaden-gemeldet page and remove
    //       window.location.href = "/bewertung-erfolgreich/";
    //     }
    //   })
    // If there is an error log it to console and reidrect to fehler page
    //     .catch((error) => {
    //       console.error("Error: ", error);
    //       window.location.href = "/fehler/";
    //     });
    // }
    // };
    // Listen for submit events


    document.addEventListener("submit", reviewSubmitHandler, false);
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (reviews);

/***/ }),

/***/ "./resources/js/modules/sentry/index.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/sentry/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/tracing */ "./node_modules/@sentry/tracing/esm/index.js");


var SentryInit = _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["init"]({
  dsn: "https://27c370b98b1a47f2ae0333f5aac649ad@o441663.ingest.sentry.io/5412156",
  integrations: [new _sentry_tracing__WEBPACK_IMPORTED_MODULE_1__["Integrations"].BrowserTracing()],
  tracesSampleRate: 1.0
});
/* harmony default export */ __webpack_exports__["default"] = (SentryInit);

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jay/projects/musikversicherung-eleventy/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /Users/jay/projects/musikversicherung-eleventy/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });