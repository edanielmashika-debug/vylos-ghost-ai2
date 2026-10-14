import {
  require_auth_errors,
  require_token_error,
  require_token_util
} from "./chunk-SDASLXV4.mjs";
import {
  EventSourceParserStream,
  SpanStatusCode,
  ZodFirstPartyTypeKind,
  context,
  external_exports,
  init_esm as init_esm2,
  safeParseAsync,
  toJSONSchema,
  trace
} from "./chunk-5GGKFMXW.mjs";
import {
  __commonJS,
  __name,
  __toESM,
  init_esm
} from "./chunk-4DNCWKMJ.mjs";

// node_modules/@ai-sdk/gateway/node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = __commonJS({
  "node_modules/@ai-sdk/gateway/node_modules/@vercel/oidc/dist/get-context.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name24 in all)
        __defProp2(target, name24, { get: all[name24], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var get_context_exports = {};
    __export2(get_context_exports, {
      SYMBOL_FOR_REQ_CONTEXT: /* @__PURE__ */ __name(() => SYMBOL_FOR_REQ_CONTEXT, "SYMBOL_FOR_REQ_CONTEXT"),
      getContext: /* @__PURE__ */ __name(() => getContext3, "getContext")
    });
    module.exports = __toCommonJS(get_context_exports);
    var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
    function getContext3() {
      const fromSymbol = globalThis;
      return fromSymbol[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
    }
    __name(getContext3, "getContext");
  }
});

// node_modules/@ai-sdk/gateway/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js
var require_get_vercel_oidc_token = __commonJS({
  "node_modules/@ai-sdk/gateway/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name24 in all)
        __defProp2(target, name24, { get: all[name24], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var get_vercel_oidc_token_exports = {};
    __export2(get_vercel_oidc_token_exports, {
      getVercelOidcToken: /* @__PURE__ */ __name(() => getVercelOidcToken3, "getVercelOidcToken"),
      getVercelOidcTokenSync: /* @__PURE__ */ __name(() => getVercelOidcTokenSync2, "getVercelOidcTokenSync")
    });
    module.exports = __toCommonJS(get_vercel_oidc_token_exports);
    var import_get_context = require_get_context();
    var import_token_error = require_token_error();
    async function getVercelOidcToken3(options) {
      let token = "";
      let err;
      try {
        token = getVercelOidcTokenSync2();
      } catch (error) {
        err = error;
      }
      try {
        const [{ getTokenPayload, isExpired }, { refreshToken }] = await Promise.all([
          await import("./token-util-DUCCZTTQ.mjs"),
          await import("./token-G2APSGEB.mjs")
        ]);
        if (!token || isExpired(getTokenPayload(token), options?.expirationBufferMs)) {
          await refreshToken(options);
          token = getVercelOidcTokenSync2();
        }
      } catch (error) {
        let message = err instanceof Error ? err.message : "";
        if (error instanceof Error) {
          message = `${message}
${error.message}`;
        }
        if (message) {
          throw new import_token_error.VercelOidcTokenError(message);
        }
        throw error;
      }
      return token;
    }
    __name(getVercelOidcToken3, "getVercelOidcToken");
    function getVercelOidcTokenSync2() {
      const token = (0, import_get_context.getContext)().headers?.["x-vercel-oidc-token"] ?? process.env.VERCEL_OIDC_TOKEN;
      if (!token) {
        throw new Error(
          `The 'x-vercel-oidc-token' header is missing from the request. Do you have the OIDC option enabled in the Vercel project settings?`
        );
      }
      return token;
    }
    __name(getVercelOidcTokenSync2, "getVercelOidcTokenSync");
  }
});

// node_modules/@ai-sdk/gateway/node_modules/@vercel/oidc/dist/index.js
var require_dist = __commonJS({
  "node_modules/@ai-sdk/gateway/node_modules/@vercel/oidc/dist/index.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name24 in all)
        __defProp2(target, name24, { get: all[name24], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      AccessTokenMissingError: /* @__PURE__ */ __name(() => import_auth_errors.AccessTokenMissingError, "AccessTokenMissingError"),
      RefreshAccessTokenFailedError: /* @__PURE__ */ __name(() => import_auth_errors.RefreshAccessTokenFailedError, "RefreshAccessTokenFailedError"),
      getContext: /* @__PURE__ */ __name(() => import_get_context.getContext, "getContext"),
      getVercelOidcToken: /* @__PURE__ */ __name(() => import_get_vercel_oidc_token.getVercelOidcToken, "getVercelOidcToken"),
      getVercelOidcTokenSync: /* @__PURE__ */ __name(() => import_get_vercel_oidc_token.getVercelOidcTokenSync, "getVercelOidcTokenSync"),
      getVercelToken: /* @__PURE__ */ __name(() => import_token_util.getVercelToken, "getVercelToken")
    });
    module.exports = __toCommonJS(src_exports);
    var import_get_vercel_oidc_token = require_get_vercel_oidc_token();
    var import_get_context = require_get_context();
    var import_auth_errors = require_auth_errors();
    var import_token_util = require_token_util();
  }
});

// node_modules/@ai-sdk/provider-utils/dist/index.mjs
init_esm();

// node_modules/@ai-sdk/provider/dist/index.mjs
init_esm();
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _b;
var AISDKError = class _AISDKError extends (_b = Error, _a = symbol, _b) {
  static {
    __name(this, "_AISDKError");
  }
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: name143,
    message,
    cause
  }) {
    super(message);
    this[_a] = true;
    this.name = name143;
    this.cause = cause;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(error) {
    return _AISDKError.hasMarker(error, marker);
  }
  static hasMarker(error, marker153) {
    const markerSymbol = Symbol.for(marker153);
    return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
  }
};
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var _b2;
var APICallError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
  static {
    __name(this, "APICallError");
  }
  constructor({
    message,
    url,
    requestBodyValues,
    statusCode,
    responseHeaders,
    responseBody,
    cause,
    isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500),
    // server error
    data
  }) {
    super({ name, message, cause });
    this[_a2] = true;
    this.url = url;
    this.requestBodyValues = requestBodyValues;
    this.statusCode = statusCode;
    this.responseHeaders = responseHeaders;
    this.responseBody = responseBody;
    this.isRetryable = isRetryable;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker2);
  }
};
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
  static {
    __name(this, "EmptyResponseBodyError");
  }
  // used in isInstance
  constructor({ message = "Empty response body" } = {}) {
    super({ name: name2, message });
    this[_a3] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker3);
  }
};
function getErrorMessage(error) {
  if (error == null) {
    return "unknown error";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}
__name(getErrorMessage, "getErrorMessage");
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var _b4;
var InvalidArgumentError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
  static {
    __name(this, "InvalidArgumentError");
  }
  constructor({
    message,
    cause,
    argument
  }) {
    super({ name: name3, message, cause });
    this[_a4] = true;
    this.argument = argument;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker4);
  }
};
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var _b5;
var InvalidPromptError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
  static {
    __name(this, "InvalidPromptError");
  }
  constructor({
    prompt,
    message,
    cause
  }) {
    super({ name: name4, message: `Invalid prompt: ${message}`, cause });
    this[_a5] = true;
    this.prompt = prompt;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker5);
  }
};
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var _b6;
var InvalidResponseDataError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
  static {
    __name(this, "InvalidResponseDataError");
  }
  constructor({
    data,
    message = `Invalid response data: ${JSON.stringify(data)}.`
  }) {
    super({ name: name5, message });
    this[_a6] = true;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker6);
  }
};
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var _b7;
var JSONParseError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
  static {
    __name(this, "JSONParseError");
  }
  constructor({ text: text2, cause }) {
    super({
      name: name6,
      message: `JSON parsing failed: Text: ${text2}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a7] = true;
    this.text = text2;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker7);
  }
};
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var _b8;
var LoadAPIKeyError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
  static {
    __name(this, "LoadAPIKeyError");
  }
  // used in isInstance
  constructor({ message }) {
    super({ name: name7, message });
    this[_a8] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker8);
  }
};
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var _b9;
var LoadSettingError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
  static {
    __name(this, "LoadSettingError");
  }
  // used in isInstance
  constructor({ message }) {
    super({ name: name8, message });
    this[_a9] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker9);
  }
};
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var _b10;
var NoContentGeneratedError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
  static {
    __name(this, "NoContentGeneratedError");
  }
  // used in isInstance
  constructor({
    message = "No content generated."
  } = {}) {
    super({ name: name9, message });
    this[_a10] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker10);
  }
};
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var _b11;
var NoSuchModelError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
  static {
    __name(this, "NoSuchModelError");
  }
  constructor({
    errorName = name10,
    modelId,
    modelType,
    message = `No such ${modelType}: ${modelId}`
  }) {
    super({ name: errorName, message });
    this[_a11] = true;
    this.modelId = modelId;
    this.modelType = modelType;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker11);
  }
};
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var _b12;
var TooManyEmbeddingValuesForCallError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
  static {
    __name(this, "TooManyEmbeddingValuesForCallError");
  }
  constructor(options) {
    super({
      name: name11,
      message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
    });
    this[_a12] = true;
    this.provider = options.provider;
    this.modelId = options.modelId;
    this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
    this.values = options.values;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker12);
  }
};
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
  static {
    __name(this, "_TypeValidationError");
  }
  constructor({
    value,
    cause,
    context: context2
  }) {
    let contextPrefix = "Type validation failed";
    if (context2 == null ? void 0 : context2.field) {
      contextPrefix += ` for ${context2.field}`;
    }
    if ((context2 == null ? void 0 : context2.entityName) || (context2 == null ? void 0 : context2.entityId)) {
      contextPrefix += " (";
      const parts = [];
      if (context2.entityName) {
        parts.push(context2.entityName);
      }
      if (context2.entityId) {
        parts.push(`id: "${context2.entityId}"`);
      }
      contextPrefix += parts.join(", ");
      contextPrefix += ")";
    }
    super({
      name: name12,
      message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a13] = true;
    this.value = value;
    this.context = context2;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker13);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value and context, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @param {TypeValidationContext} params.context - Optional context about what is being validated.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value,
    cause,
    context: context2
  }) {
    var _a153, _b152, _c;
    if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a153 = cause.context) == null ? void 0 : _a153.field) === (context2 == null ? void 0 : context2.field) && ((_b152 = cause.context) == null ? void 0 : _b152.entityName) === (context2 == null ? void 0 : context2.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context2 == null ? void 0 : context2.entityId)) {
      return cause;
    }
    return new _TypeValidationError({ value, cause, context: context2 });
  }
};
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var _b14;
var UnsupportedFunctionalityError = class extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
  static {
    __name(this, "UnsupportedFunctionalityError");
  }
  constructor({
    functionality,
    message = `'${functionality}' functionality not supported.`
  }) {
    super({ name: name13, message });
    this[_a14] = true;
    this.functionality = functionality;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker14);
  }
};

// node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
  return headers.reduce(
    (combinedHeaders, currentHeaders) => ({
      ...combinedHeaders,
      ...currentHeaders
    }),
    {}
  );
}
__name(combineHeaders, "combineHeaders");
async function delay(delayInMs, options) {
  if (delayInMs == null) {
    return;
  }
  const signal = options == null ? void 0 : options.abortSignal;
  return new Promise((resolve2, reject) => {
    if (signal == null ? void 0 : signal.aborted) {
      reject(createAbortError());
      return;
    }
    const timeoutId = setTimeout(() => {
      cleanup();
      resolve2();
    }, delayInMs);
    const cleanup = /* @__PURE__ */ __name(() => {
      clearTimeout(timeoutId);
      signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
    }, "cleanup");
    const onAbort = /* @__PURE__ */ __name(() => {
      cleanup();
      reject(createAbortError());
    }, "onAbort");
    signal == null ? void 0 : signal.addEventListener("abort", onAbort);
  });
}
__name(delay, "delay");
function createAbortError() {
  return new DOMException("Delay was aborted", "AbortError");
}
__name(createAbortError, "createAbortError");
function extractResponseHeaders(response) {
  return Object.fromEntries([...response.headers]);
}
__name(extractResponseHeaders, "extractResponseHeaders");
var { btoa, atob } = globalThis;
function convertBase64ToUint8Array(base64String) {
  const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
  const latin1string = atob(base64Url);
  return Uint8Array.from(latin1string, (byte) => byte.codePointAt(0));
}
__name(convertBase64ToUint8Array, "convertBase64ToUint8Array");
function convertUint8ArrayToBase64(array2) {
  const chunks = [];
  const chunkSize = 4096;
  for (let i = 0; i < array2.length; i += chunkSize) {
    chunks.push(String.fromCodePoint(...array2.subarray(i, i + chunkSize)));
  }
  return btoa(chunks.join(""));
}
__name(convertUint8ArrayToBase64, "convertUint8ArrayToBase64");
function convertToBase64(value) {
  return value instanceof Uint8Array ? convertUint8ArrayToBase64(value) : value;
}
__name(convertToBase64, "convertToBase64");
async function cancelResponseBody(response) {
  var _a24;
  try {
    await ((_a24 = response.body) == null ? void 0 : _a24.cancel());
  } catch (e) {
  }
}
__name(cancelResponseBody, "cancelResponseBody");
var name14 = "AI_DownloadError";
var marker15 = `vercel.ai.error.${name14}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var _b15;
var DownloadError = class extends (_b15 = AISDKError, _a15 = symbol15, _b15) {
  static {
    __name(this, "DownloadError");
  }
  constructor({
    url,
    statusCode,
    statusText,
    cause,
    message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}`
  }) {
    super({ name: name14, message, cause });
    this[_a15] = true;
    this.url = url;
    this.statusCode = statusCode;
    this.statusText = statusText;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker15);
  }
};
function isBrowserRuntime(globalThisAny = globalThis) {
  return globalThisAny.window != null;
}
__name(isBrowserRuntime, "isBrowserRuntime");
function isSameOrigin(url, baseUrl) {
  try {
    return new URL(url).origin === new URL(baseUrl).origin;
  } catch (e) {
    return false;
  }
}
__name(isSameOrigin, "isSameOrigin");
function validateDownloadUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch (e) {
    throw new DownloadError({
      url,
      message: `Invalid URL: ${url}`
    });
  }
  if (parsed.protocol === "data:") {
    return;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new DownloadError({
      url,
      message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
    });
  }
  const hostname = parsed.hostname.toLowerCase().replace(/\.+$/, "");
  if (!hostname) {
    throw new DownloadError({
      url,
      message: `URL must have a hostname`
    });
  }
  if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".localhost")) {
    throw new DownloadError({
      url,
      message: `URL with hostname ${hostname} is not allowed`
    });
  }
  if (hostname.startsWith("[") && hostname.endsWith("]")) {
    const ipv6 = hostname.slice(1, -1);
    if (isPrivateIPv6(ipv6)) {
      throw new DownloadError({
        url,
        message: `URL with IPv6 address ${hostname} is not allowed`
      });
    }
    return;
  }
  if (isIPv4(hostname)) {
    if (isPrivateIPv4(hostname)) {
      throw new DownloadError({
        url,
        message: `URL with IP address ${hostname} is not allowed`
      });
    }
  }
}
__name(validateDownloadUrl, "validateDownloadUrl");
function validateDownloadAddress({
  address,
  family,
  hostname
}) {
  const isUnsafe = family === 4 ? !isIPv4(address) || isPrivateIPv4(address) : family === 6 ? isPrivateIPv6(address) : true;
  if (isUnsafe) {
    throw new DownloadError({
      url: hostname,
      message: `Hostname ${hostname} resolved to disallowed IP address ${address}`
    });
  }
}
__name(validateDownloadAddress, "validateDownloadAddress");
function isIPv4(hostname) {
  const parts = hostname.split(".");
  if (parts.length !== 4) return false;
  return parts.every((part) => {
    const num = Number(part);
    return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
  });
}
__name(isIPv4, "isIPv4");
function isPrivateIPv4(ip) {
  const parts = ip.split(".").map(Number);
  const [a, b, c] = parts;
  if (a === 0) return true;
  if (a === 10) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 0 && c === 0) return true;
  if (a === 192 && b === 168) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a >= 240) return true;
  return false;
}
__name(isPrivateIPv4, "isPrivateIPv4");
function parseIPv6(ip) {
  let address = ip.toLowerCase();
  const zoneIndex = address.indexOf("%");
  if (zoneIndex !== -1) {
    address = address.slice(0, zoneIndex);
  }
  const halves = address.split("::");
  if (halves.length > 2) return null;
  const toGroups = /* @__PURE__ */ __name((segment) => {
    if (segment === "") return [];
    const groups = [];
    const parts = segment.split(":");
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part.includes(".")) {
        if (i !== parts.length - 1 || !isIPv4(part)) return null;
        const [a, b, c, d] = part.split(".").map(Number);
        groups.push(a << 8 | b, c << 8 | d);
        continue;
      }
      if (!/^[0-9a-f]{1,4}$/.test(part)) return null;
      groups.push(parseInt(part, 16));
    }
    return groups;
  }, "toGroups");
  const head = toGroups(halves[0]);
  if (head === null) return null;
  if (halves.length === 2) {
    const tail = toGroups(halves[1]);
    if (tail === null) return null;
    const fill = 8 - head.length - tail.length;
    if (fill < 0) return null;
    return [...head, ...new Array(fill).fill(0), ...tail];
  }
  return head.length === 8 ? head : null;
}
__name(parseIPv6, "parseIPv6");
function isPrivateIPv6(ip) {
  const groups = parseIPv6(ip);
  if (groups === null) return true;
  const topZero = /* @__PURE__ */ __name((count) => groups.slice(0, count).every((group) => group === 0), "topZero");
  if (topZero(7) && (groups[7] === 0 || groups[7] === 1)) return true;
  if ((groups[0] & 65024) === 64512) return true;
  if ((groups[0] & 65472) === 65152) return true;
  if ((groups[0] & 65472) === 65216) return true;
  if ((groups[0] & 65280) === 65280) return true;
  const embedsIPv4 = (
    // ::/96 — IPv4-compatible (deprecated)
    topZero(6) || // ::ffff:0:0/96 — IPv4-mapped (ffff in group 5)
    topZero(5) && groups[5] === 65535 || // ::ffff:0:0/96 — IPv4-translated form (ffff in group 4, group 5 zero)
    topZero(4) && groups[4] === 65535 && groups[5] === 0 || // 64:ff9b::/96 — NAT64 well-known prefix
    groups[0] === 100 && groups[1] === 65435 && groups[2] === 0 && groups[3] === 0 && groups[4] === 0 && groups[5] === 0 || // 64:ff9b:1::/48 — NAT64 local-use prefix
    groups[0] === 100 && groups[1] === 65435 && groups[2] === 1
  );
  if (embedsIPv4) {
    const a = groups[6] >> 8 & 255;
    const b = groups[6] & 255;
    const c = groups[7] >> 8 & 255;
    const d = groups[7] & 255;
    return isPrivateIPv4(`${a}.${b}.${c}.${d}`);
  }
  return false;
}
__name(isPrivateIPv6, "isPrivateIPv6");
function createSafeLookup(lookup) {
  return (hostname, options, callback) => {
    lookup(hostname, { ...options, all: true }, (error, addresses) => {
      if (error) {
        callback(error);
        return;
      }
      try {
        const [firstAddress] = addresses;
        if (firstAddress == null) {
          throw new Error(`Hostname ${hostname} did not resolve to an address`);
        }
        for (const { address, family } of addresses) {
          validateDownloadAddress({ address, family, hostname });
        }
        if (options.all === true) {
          callback(null, addresses);
        } else {
          callback(
            null,
            firstAddress.address,
            firstAddress.family
          );
        }
      } catch (error2) {
        callback(
          error2 instanceof Error ? error2 : new Error(String(error2))
        );
      }
    });
  };
}
__name(createSafeLookup, "createSafeLookup");
var safeNodeFetchPromise;
function isNodeRuntime() {
  var _a24, _b23, _c;
  const runtimeProcess = globalThis.process;
  return ((_a24 = runtimeProcess == null ? void 0 : runtimeProcess.release) == null ? void 0 : _a24.name) === "node" && ((_b23 = runtimeProcess.versions) == null ? void 0 : _b23.bun) == null && ((_c = runtimeProcess.versions) == null ? void 0 : _c.deno) == null && runtimeProcess.title !== "workerd" && globalThis.EdgeRuntime == null;
}
__name(isNodeRuntime, "isNodeRuntime");
async function getDefaultDownloadFetch() {
  if (!isNodeRuntime()) {
    return globalThis.fetch;
  }
  return safeNodeFetchPromise != null ? safeNodeFetchPromise : safeNodeFetchPromise = createSafeNodeFetch();
}
__name(getDefaultDownloadFetch, "getDefaultDownloadFetch");
async function createSafeNodeFetch() {
  const [module, { lookup }] = await Promise.all([
    loadNodeModule("node:module"),
    loadNodeModule("node:dns")
  ]);
  const nodeRequire = module.createRequire(getCurrentModulePath());
  const { Agent, fetch: fetch2 } = nodeRequire("undici");
  const dispatcher = new Agent({
    connect: {
      lookup: createSafeLookup(lookup)
    }
  });
  return (input, init) => fetch2(
    input,
    {
      ...init,
      dispatcher
    }
  );
}
__name(createSafeNodeFetch, "createSafeNodeFetch");
async function loadNodeModule(id) {
  var _a24;
  const processWithBuiltins = globalThis.process;
  const builtinModule = (_a24 = processWithBuiltins == null ? void 0 : processWithBuiltins.getBuiltinModule) == null ? void 0 : _a24.call(processWithBuiltins, id);
  if (builtinModule == null) {
    throw new Error(`Node.js built-in module ${id} is unavailable`);
  }
  return builtinModule;
}
__name(loadNodeModule, "loadNodeModule");
function getCurrentModulePath() {
  const originalPrepareStackTrace = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = (_error, callSites) => callSites;
    const error = new Error("Capture current module path");
    Error.captureStackTrace(error, getCurrentModulePath);
    const [caller] = error.stack;
    const fileName = caller == null ? void 0 : caller.getFileName();
    if (fileName == null) {
      throw new Error("Unable to determine the current module path");
    }
    return fileName;
  } finally {
    Error.prepareStackTrace = originalPrepareStackTrace;
  }
}
__name(getCurrentModulePath, "getCurrentModulePath");
var MAX_DOWNLOAD_REDIRECTS = 10;
async function getValidatedFetch(customFetch) {
  return customFetch == null || customFetch === globalThis.fetch ? await getDefaultDownloadFetch() : customFetch;
}
__name(getValidatedFetch, "getValidatedFetch");
async function fetchWithValidatedRedirects({
  url,
  headers,
  abortSignal,
  maxRedirects = MAX_DOWNLOAD_REDIRECTS,
  fetch: customFetch,
  trustedOrigin
}) {
  var _a24;
  const baseInit = { signal: abortSignal };
  if (headers !== void 0) {
    baseInit.headers = headers;
  }
  let currentUrl = url;
  for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount++) {
    const isTrustedHop = trustedOrigin !== void 0 && isSameOrigin(currentUrl, trustedOrigin);
    if (!isTrustedHop) {
      validateDownloadUrl(currentUrl);
    }
    const fetch2 = isTrustedHop && customFetch != null ? customFetch : isTrustedHop ? globalThis.fetch : await getValidatedFetch(customFetch);
    const response = await fetch2(currentUrl, {
      ...baseInit,
      redirect: "manual"
    });
    if (response.type === "opaqueredirect") {
      if (!isBrowserRuntime()) {
        throw new DownloadError({
          url,
          message: `Redirect from ${currentUrl} could not be validated and was blocked`
        });
      }
      return await fetch2(currentUrl, { ...baseInit, redirect: "follow" });
    }
    const location = (_a24 = response.headers) == null ? void 0 : _a24.get("location");
    if (response.status >= 300 && response.status < 400 && location) {
      await cancelResponseBody(response);
      currentUrl = new URL(location, currentUrl).toString();
      continue;
    }
    return response;
  }
  throw new DownloadError({
    url,
    message: `Too many redirects (max ${maxRedirects})`
  });
}
__name(fetchWithValidatedRedirects, "fetchWithValidatedRedirects");
var DEFAULT_MAX_DOWNLOAD_SIZE = 2 * 1024 * 1024 * 1024;
async function readResponseWithSizeLimit({
  response,
  url,
  maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE
}) {
  const contentLength = response.headers.get("content-length");
  if (contentLength != null) {
    const length = parseInt(contentLength, 10);
    if (!isNaN(length) && length > maxBytes) {
      await cancelResponseBody(response);
      throw new DownloadError({
        url,
        message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
      });
    }
  }
  const body = response.body;
  if (body == null) {
    return new Uint8Array(0);
  }
  const reader = body.getReader();
  const chunks = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      totalBytes += value.length;
      if (totalBytes > maxBytes) {
        throw new DownloadError({
          url,
          message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes.`
        });
      }
      chunks.push(value);
    }
  } finally {
    try {
      await reader.cancel();
    } catch (e) {
    } finally {
      reader.releaseLock();
    }
  }
  const result = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}
__name(readResponseWithSizeLimit, "readResponseWithSizeLimit");
async function downloadBlob(url, options) {
  var _a24, _b23;
  try {
    const response = await fetchWithValidatedRedirects({
      url,
      abortSignal: options == null ? void 0 : options.abortSignal
    });
    if (!response.ok) {
      await cancelResponseBody(response);
      throw new DownloadError({
        url,
        statusCode: response.status,
        statusText: response.statusText
      });
    }
    const data = await readResponseWithSizeLimit({
      response,
      url,
      maxBytes: (_a24 = options == null ? void 0 : options.maxBytes) != null ? _a24 : DEFAULT_MAX_DOWNLOAD_SIZE
    });
    const contentType = (_b23 = response.headers.get("content-type")) != null ? _b23 : void 0;
    return new Blob([data], contentType ? { type: contentType } : void 0);
  } catch (error) {
    if (DownloadError.isInstance(error)) {
      throw error;
    }
    throw new DownloadError({ url, cause: error });
  }
}
__name(downloadBlob, "downloadBlob");
var EMBEDDING_MODEL_PROVIDER_OPTIONS_TRANSFORMER = /* @__PURE__ */ Symbol.for(
  "vercel.ai.embeddingModel.providerOptionsTransformer"
);
var createIdGenerator = /* @__PURE__ */ __name(({
  prefix,
  size = 16,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator = "-"
} = {}) => {
  const generator = /* @__PURE__ */ __name(() => {
    const alphabetLength = alphabet.length;
    const chars = new Array(size);
    for (let i = 0; i < size; i++) {
      chars[i] = alphabet[Math.random() * alphabetLength | 0];
    }
    return chars.join("");
  }, "generator");
  if (prefix == null) {
    return generator;
  }
  if (alphabet.includes(separator)) {
    throw new InvalidArgumentError({
      argument: "separator",
      message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
    });
  }
  return () => `${prefix}${separator}${generator()}`;
}, "createIdGenerator");
var generateId = createIdGenerator();
function getErrorMessage2(error) {
  if (error == null) {
    return "unknown error";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}
__name(getErrorMessage2, "getErrorMessage");
function isAbortError(error) {
  return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || // Next.js
  error.name === "TimeoutError");
}
__name(isAbortError, "isAbortError");
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
var RETRYABLE_NETWORK_ERROR_CODES = /* @__PURE__ */ new Set([
  "ConnectionRefused",
  "ConnectionClosed",
  "FailedToOpenSocket",
  "ECONNRESET",
  "ECONNREFUSED",
  "ETIMEDOUT",
  "EPIPE",
  "UND_ERR_SOCKET",
  "UND_ERR_HEADERS_TIMEOUT",
  "UND_ERR_BODY_TIMEOUT",
  "UND_ERR_CONNECT_TIMEOUT"
]);
function findNetworkError(error) {
  const visited = /* @__PURE__ */ new Set();
  let current = error;
  while (current instanceof Error && !visited.has(current)) {
    visited.add(current);
    const errorWithCode = current;
    if (typeof errorWithCode.code === "string" && RETRYABLE_NETWORK_ERROR_CODES.has(errorWithCode.code)) {
      return errorWithCode;
    }
    current = current.cause;
  }
  return void 0;
}
__name(findNetworkError, "findNetworkError");
function handleFetchError({
  error,
  url,
  requestBodyValues
}) {
  if (isAbortError(error)) {
    return error;
  }
  if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
    const cause = error.cause;
    if (cause != null) {
      return new APICallError({
        message: `Cannot connect to API: ${cause.message}`,
        cause,
        url,
        requestBodyValues,
        isRetryable: true
        // retry when network error
      });
    }
  }
  const networkError = findNetworkError(error);
  if (networkError != null) {
    if (APICallError.isInstance(error)) {
      return new APICallError({
        message: error.message,
        cause: error.cause,
        url: error.url,
        requestBodyValues: error.requestBodyValues,
        statusCode: error.statusCode,
        responseHeaders: error.responseHeaders,
        responseBody: error.responseBody,
        data: error.data,
        isRetryable: true
      });
    }
    return new APICallError({
      message: `Cannot connect to API: ${error instanceof Error ? error.message : networkError.message}`,
      cause: error,
      url,
      requestBodyValues,
      isRetryable: true
    });
  }
  return error;
}
__name(handleFetchError, "handleFetchError");
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
  var _a24, _b23, _c;
  if (globalThisAny.window) {
    return `runtime/browser`;
  }
  if ((_a24 = globalThisAny.navigator) == null ? void 0 : _a24.userAgent) {
    return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
  }
  if ((_c = (_b23 = globalThisAny.process) == null ? void 0 : _b23.versions) == null ? void 0 : _c.node) {
    return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
  }
  if (globalThisAny.EdgeRuntime) {
    return `runtime/vercel-edge`;
  }
  return "runtime/unknown";
}
__name(getRuntimeEnvironmentUserAgent, "getRuntimeEnvironmentUserAgent");
function normalizeHeaders(headers) {
  if (headers == null) {
    return {};
  }
  const normalized = {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      normalized[key.toLowerCase()] = value;
    });
  } else {
    if (!Array.isArray(headers)) {
      headers = Object.entries(headers);
    }
    for (const [key, value] of headers) {
      if (value != null) {
        normalized[key.toLowerCase()] = value;
      }
    }
  }
  return normalized;
}
__name(normalizeHeaders, "normalizeHeaders");
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
  const normalizedHeaders = new Headers(normalizeHeaders(headers));
  const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
  normalizedHeaders.set(
    "user-agent",
    [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" ")
  );
  return Object.fromEntries(normalizedHeaders.entries());
}
__name(withUserAgentSuffix, "withUserAgentSuffix");
var VERSION = true ? "4.0.57" : "0.0.0-test";
var getOriginalFetch = /* @__PURE__ */ __name(() => globalThis.fetch, "getOriginalFetch");
var getFromApi = /* @__PURE__ */ __name(async ({
  url,
  headers = {},
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch()
}) => {
  try {
    const response = await fetch2(url, {
      method: "GET",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: {}
        });
      } catch (error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: {}
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: {}
      });
    } catch (error) {
      if (error instanceof Error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: {}
      });
    }
  } catch (error) {
    throw handleFetchError({ error, url, requestBodyValues: {} });
  }
}, "getFromApi");
function isUrlSupported({
  mediaType,
  url,
  supportedUrls
}) {
  url = url.toLowerCase();
  mediaType = mediaType.toLowerCase();
  return Object.entries(supportedUrls).map(([key, value]) => {
    const mediaType2 = key.toLowerCase();
    return mediaType2 === "*" || mediaType2 === "*/*" ? { mediaTypePrefix: "", regexes: value } : { mediaTypePrefix: mediaType2.replace(/\*/, ""), regexes: value };
  }).filter(
    ({ mediaTypePrefix }) => mediaTypePrefix === "" || mediaTypePrefix.endsWith("/") ? mediaType.startsWith(mediaTypePrefix) : mediaType === mediaTypePrefix
  ).flatMap(({ regexes }) => regexes).some((pattern) => pattern.test(url));
}
__name(isUrlSupported, "isUrlSupported");
function loadApiKey({
  apiKey,
  environmentVariableName,
  apiKeyParameterName = "apiKey",
  description
}) {
  if (typeof apiKey === "string") {
    return apiKey;
  }
  if (apiKey != null) {
    throw new LoadAPIKeyError({
      message: `${description} API key must be a string.`
    });
  }
  if (typeof process === "undefined") {
    throw new LoadAPIKeyError({
      message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.`
    });
  }
  apiKey = process.env[environmentVariableName];
  if (apiKey == null) {
    throw new LoadAPIKeyError({
      message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
    });
  }
  if (typeof apiKey !== "string") {
    throw new LoadAPIKeyError({
      message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
    });
  }
  return apiKey;
}
__name(loadApiKey, "loadApiKey");
function loadOptionalSetting({
  settingValue,
  environmentVariableName
}) {
  if (typeof settingValue === "string") {
    return settingValue;
  }
  if (settingValue != null || typeof process === "undefined") {
    return void 0;
  }
  settingValue = process.env[environmentVariableName];
  if (settingValue == null || typeof settingValue !== "string") {
    return void 0;
  }
  return settingValue;
}
__name(loadOptionalSetting, "loadOptionalSetting");
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text2) {
  const obj = JSON.parse(text2);
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (suspectProtoRx.test(text2) === false && suspectConstructorRx.test(text2) === false) {
    return obj;
  }
  return filter(obj);
}
__name(_parse, "_parse");
function filter(obj) {
  let next = [obj];
  while (next.length) {
    const nodes = next;
    next = [];
    for (const node of nodes) {
      if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      for (const key in node) {
        const value = node[key];
        if (value && typeof value === "object") {
          next.push(value);
        }
      }
    }
  }
  return obj;
}
__name(filter, "filter");
function secureJsonParse(text2) {
  const { stackTraceLimit } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch (e) {
    return _parse(text2);
  }
  try {
    return _parse(text2);
  } finally {
    Error.stackTraceLimit = stackTraceLimit;
  }
}
__name(secureJsonParse, "secureJsonParse");
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
  if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
    const { additionalProperties } = jsonSchema2;
    jsonSchema2.additionalProperties = additionalProperties != null && typeof additionalProperties !== "boolean" ? visit(additionalProperties) : false;
    const { properties } = jsonSchema2;
    if (properties != null) {
      for (const key of Object.keys(properties)) {
        properties[key] = visit(properties[key]);
      }
    }
  }
  if (jsonSchema2.items != null) {
    jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
  }
  if (jsonSchema2.anyOf != null) {
    jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
  }
  if (jsonSchema2.allOf != null) {
    jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
  }
  if (jsonSchema2.oneOf != null) {
    jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
  }
  const { definitions } = jsonSchema2;
  if (definitions != null) {
    for (const key of Object.keys(definitions)) {
      definitions[key] = visit(definitions[key]);
    }
  }
  return jsonSchema2;
}
__name(addAdditionalPropertiesToJsonSchema, "addAdditionalPropertiesToJsonSchema");
function visit(def) {
  if (typeof def === "boolean") return def;
  return addAdditionalPropertiesToJsonSchema(def);
}
__name(visit, "visit");
var ignoreOverride = /* @__PURE__ */ Symbol(
  "Let zodToJsonSchema decide on which parser to use"
);
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
};
var getDefaultOptions = /* @__PURE__ */ __name((options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
}, "getDefaultOptions");
function parseAnyDef() {
  return {};
}
__name(parseAnyDef, "parseAnyDef");
function parseArrayDef(def, refs) {
  var _a24, _b23, _c;
  const res = {
    type: "array"
  };
  if (((_a24 = def.type) == null ? void 0 : _a24._def) && ((_c = (_b23 = def.type) == null ? void 0 : _b23._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    res.minItems = def.minLength.value;
  }
  if (def.maxLength) {
    res.maxItems = def.maxLength.value;
  }
  if (def.exactLength) {
    res.minItems = def.exactLength.value;
    res.maxItems = def.exactLength.value;
  }
  return res;
}
__name(parseArrayDef, "parseArrayDef");
function parseBigintDef(def) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks) return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
__name(parseBigintDef, "parseBigintDef");
function parseBooleanDef() {
  return { type: "boolean" };
}
__name(parseBooleanDef, "parseBooleanDef");
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
__name(parseBrandedDef, "parseBrandedDef");
var parseCatchDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseCatchDef");
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def);
  }
}
__name(parseDateDef, "parseDateDef");
var integerDateParser = /* @__PURE__ */ __name((def) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        res.minimum = check.value;
        break;
      case "max":
        res.maximum = check.value;
        break;
    }
  }
  return res;
}, "integerDateParser");
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
__name(parseDefaultDef, "parseDefaultDef");
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
__name(parseEffectsDef, "parseEffectsDef");
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
__name(parseEnumDef, "parseEnumDef");
var isJsonSchema7AllOfType = /* @__PURE__ */ __name((type) => {
  if ("type" in type && type.type === "string") return false;
  return "allOf" in type;
}, "isJsonSchema7AllOfType");
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x);
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
__name(parseIntersectionDef, "parseIntersectionDef");
function parseLiteralDef(def) {
  const parsedType = typeof def.value;
  if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  return {
    type: parsedType === "bigint" ? "integer" : parsedType,
    const: def.value
  };
}
__name(parseLiteralDef, "parseLiteralDef");
var emojiRegex = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: /* @__PURE__ */ __name(() => {
    if (emojiRegex === void 0) {
      emojiRegex = RegExp(
        "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "u"
      );
    }
    return emojiRegex;
  }, "emoji"),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
          break;
        case "max":
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern(
            res,
            RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`),
            check.message,
            refs
          );
          break;
        case "endsWith":
          addPattern(
            res,
            RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`),
            check.message,
            refs
          );
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
          break;
        case "includes": {
          addPattern(
            res,
            RegExp(escapeLiteralCheckValue(check.value, refs)),
            check.message,
            refs
          );
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              res.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ ((_) => {
          })(check);
      }
    }
  }
  return res;
}
__name(parseStringDef, "parseStringDef");
function escapeLiteralCheckValue(literal, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
__name(escapeLiteralCheckValue, "escapeLiteralCheckValue");
var ALPHA_NUMERIC = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0; i < source.length; i++) {
    if (!ALPHA_NUMERIC.has(source[i])) {
      result += "\\";
    }
    result += source[i];
  }
  return result;
}
__name(escapeNonAlphaNumeric, "escapeNonAlphaNumeric");
function addFormat(schema, value, message, refs) {
  var _a24;
  if (schema.format || ((_a24 = schema.anyOf) == null ? void 0 : _a24.some((x) => x.format))) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format
      });
      delete schema.format;
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    schema.format = value;
  }
}
__name(addFormat, "addFormat");
function addPattern(schema, regex, message, refs) {
  var _a24;
  if (schema.pattern || ((_a24 = schema.allOf) == null ? void 0 : _a24.some((x) => x.pattern))) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern
      });
      delete schema.pattern;
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    schema.pattern = stringifyRegExpWithFlags(regex, refs);
  }
}
__name(addPattern, "addPattern");
function stringifyRegExpWithFlags(regex, refs) {
  var _a24;
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    // Case-insensitive
    m: regex.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i = 0; i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i];
            pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i + 1] === "-" && ((_a24 = source[i + 2]) == null ? void 0 : _a24.match(/[a-z]/))) {
            pattern += source[i];
            inCharRange = true;
          } else {
            pattern += `${source[i]}${source[i].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i];
    if (source[i] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch (e) {
    console.warn(
      `Could not convert regex pattern at ${refs.currentPath.join(
        "/"
      )} to a flag-independent form! Falling back to the flag-ignorant source`
    );
    return regex.source;
  }
  return pattern;
}
__name(stringifyRegExpWithFlags, "stringifyRegExpWithFlags");
function parseRecordDef(def, refs) {
  var _a24, _b23, _c, _d, _e, _f;
  const schema = {
    type: "object",
    additionalProperties: (_a24 = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    })) != null ? _a24 : refs.allowedAdditionalProperties
  };
  if (((_b23 = def.keyType) == null ? void 0 : _b23._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
    const { type, ...keyType } = parseBrandedDef(
      def.keyType._def,
      refs
    );
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
__name(parseRecordDef, "parseRecordDef");
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef();
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
__name(parseMapDef, "parseMapDef");
function parseNativeEnumDef(def) {
  const object2 = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object2[object2[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object2[key]);
  const parsedTypes = Array.from(
    new Set(actualValues.map((values) => typeof values))
  );
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}
__name(parseNativeEnumDef, "parseNativeEnumDef");
function parseNeverDef() {
  return { not: parseAnyDef() };
}
__name(parseNeverDef, "parseNeverDef");
function parseNullDef() {
  return {
    type: "null"
  };
}
__name(parseNullDef, "parseNullDef");
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every(
    (x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length)
  )) {
    const types = options.reduce((types2, x) => {
      const type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
    const types = options.reduce(
      (acc, x) => {
        const type = typeof x._def.value;
        switch (type) {
          case "string":
          case "number":
          case "boolean":
            return [...acc, type];
          case "bigint":
            return [...acc, "integer"];
          case "object":
            if (x._def.value === null) return [...acc, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return acc;
        }
      },
      []
    );
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce(
          (acc, x) => {
            return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
          },
          []
        )
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce(
        (acc, x) => [
          ...acc,
          ...x._def.values.filter((x2) => !acc.includes(x2))
        ],
        []
      )
    };
  }
  return asAnyOf(def, refs);
}
__name(parseUnionDef, "parseUnionDef");
var asAnyOf = /* @__PURE__ */ __name((def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map(
    (x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", `${i}`]
    })
  ).filter(
    (x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0)
  );
  return anyOf.length ? { anyOf } : void 0;
}, "asAnyOf");
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    def.innerType._def.typeName
  ) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
__name(parseNullableDef, "parseNullableDef");
function parseNumberDef(def) {
  const res = {
    type: "number"
  };
  if (!def.checks) return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        break;
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
__name(parseNumberDef, "parseNumberDef");
function parseObjectDef(def, refs) {
  const result = {
    type: "object",
    properties: {}
  };
  const required = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    const propOptional = safeIsOptional(propDef);
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required.push(propName);
    }
  }
  if (required.length) {
    result.required = required;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
__name(parseObjectDef, "parseObjectDef");
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
__name(decideAdditionalProperties, "decideAdditionalProperties");
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch (e) {
    return true;
  }
}
__name(safeIsOptional, "safeIsOptional");
var parseOptionalDef = /* @__PURE__ */ __name((def, refs) => {
  var _a24;
  if (refs.currentPath.toString() === ((_a24 = refs.propertyPath) == null ? void 0 : _a24.toString())) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
}, "parseOptionalDef");
var parsePipelineDef = /* @__PURE__ */ __name((def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
  });
  return {
    allOf: [a, b].filter((x) => x !== void 0)
  };
}, "parsePipelineDef");
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
__name(parsePromiseDef, "parsePromiseDef");
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    schema.minItems = def.minSize.value;
  }
  if (def.maxSize) {
    schema.maxItems = def.maxSize.value;
  }
  return schema;
}
__name(parseSetDef, "parseSetDef");
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map(
        (x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })
      ).reduce(
        (acc, x) => x === void 0 ? acc : [...acc, x],
        []
      ),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map(
        (x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })
      ).reduce(
        (acc, x) => x === void 0 ? acc : [...acc, x],
        []
      )
    };
  }
}
__name(parseTupleDef, "parseTupleDef");
function parseUndefinedDef() {
  return {
    not: parseAnyDef()
  };
}
__name(parseUndefinedDef, "parseUndefinedDef");
function parseUnknownDef() {
  return parseAnyDef();
}
__name(parseUnknownDef, "parseUnknownDef");
var parseReadonlyDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseReadonlyDef");
var selectParser = /* @__PURE__ */ __name((def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef();
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef();
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef();
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef();
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef();
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return /* @__PURE__ */ ((_) => void 0)(typeName);
  }
}, "selectParser");
var getRelativePath = /* @__PURE__ */ __name((pathA, pathB) => {
  let i = 0;
  for (; i < pathA.length && i < pathB.length; i++) {
    if (pathA[i] !== pathB[i]) break;
  }
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
}, "getRelativePath");
function parseDef(def, refs, forceResolution = false) {
  var _a24;
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = (_a24 = refs.override) == null ? void 0 : _a24.call(
      refs,
      def,
      refs,
      seenItem,
      forceResolution
    );
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema2) {
    addMeta(def, refs, jsonSchema2);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
    newItem.jsonSchema = jsonSchema2;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema2;
  return jsonSchema2;
}
__name(parseDef, "parseDef");
var get$ref = /* @__PURE__ */ __name((item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(
          `Recursive reference detected at ${refs.currentPath.join(
            "/"
          )}! Defaulting to any`
        );
        return parseAnyDef();
      }
      return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
    }
  }
}, "get$ref");
var addMeta = /* @__PURE__ */ __name((def, refs, jsonSchema2) => {
  if (def.description) {
    jsonSchema2.description = def.description;
  }
  return jsonSchema2;
}, "addMeta");
var getRefs = /* @__PURE__ */ __name((options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    currentPath,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(_options.definitions).map(([name24, def]) => [
        def._def,
        {
          def: def._def,
          path: [..._options.basePath, _options.definitionPath, name24],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
}, "getRefs");
var zod3ToJsonSchema = /* @__PURE__ */ __name((schema, options) => {
  var _a24;
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce(
    (acc, [name34, schema2]) => {
      var _a34;
      return {
        ...acc,
        [name34]: (_a34 = parseDef(
          schema2._def,
          {
            ...refs,
            currentPath: [...refs.basePath, refs.definitionPath, name34]
          },
          true
        )) != null ? _a34 : parseAnyDef()
      };
    },
    {}
  ) : void 0;
  const name24 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
  const main = (_a24 = parseDef(
    schema._def,
    name24 === void 0 ? refs : {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name24]
    },
    false
  )) != null ? _a24 : parseAnyDef();
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  const combined = name24 === void 0 ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name24
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name24]: main
    }
  };
  combined.$schema = "http://json-schema.org/draft-07/schema#";
  return combined;
}, "zod3ToJsonSchema");
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
  let schema;
  return () => {
    if (schema == null) {
      schema = createSchema();
    }
    return schema;
  };
}
__name(lazySchema, "lazySchema");
function jsonSchema(jsonSchema2, {
  validate
} = {}) {
  return {
    [schemaSymbol]: true,
    _type: void 0,
    // should never be used directly
    get jsonSchema() {
      if (typeof jsonSchema2 === "function") {
        jsonSchema2 = jsonSchema2();
      }
      return jsonSchema2;
    },
    validate
  };
}
__name(jsonSchema, "jsonSchema");
function isSchema(value) {
  return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
__name(isSchema, "isSchema");
function asSchema(schema) {
  return schema == null ? jsonSchema({
    type: "object",
    properties: {},
    additionalProperties: false
  }) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
__name(asSchema, "asSchema");
function standardSchema(standardSchema2) {
  return jsonSchema(
    () => {
      if (!hasStandardJsonSchema(standardSchema2)) {
        throw new Error(
          `Standard schema vendor '${standardSchema2["~standard"].vendor}' does not support JSON Schema conversion.`
        );
      }
      return addAdditionalPropertiesToJsonSchema(
        standardSchema2["~standard"].jsonSchema.input({
          target: "draft-07"
        })
      );
    },
    {
      validate: /* @__PURE__ */ __name(async (value) => {
        const result = await standardSchema2["~standard"].validate(value);
        return "value" in result ? { success: true, value: result.value } : {
          success: false,
          error: new TypeValidationError({
            value,
            cause: result.issues
          })
        };
      }, "validate")
    }
  );
}
__name(standardSchema, "standardSchema");
function hasStandardJsonSchema(schema) {
  return schema["~standard"].jsonSchema != null;
}
__name(hasStandardJsonSchema, "hasStandardJsonSchema");
function zod3Schema(zodSchema2, options) {
  var _a24;
  const useReferences = (_a24 = options == null ? void 0 : options.useReferences) != null ? _a24 : false;
  return jsonSchema(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => zod3ToJsonSchema(zodSchema2, {
      $refStrategy: useReferences ? "root" : "none"
    }),
    {
      validate: /* @__PURE__ */ __name(async (value) => {
        const result = await zodSchema2.safeParseAsync(value);
        return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
      }, "validate")
    }
  );
}
__name(zod3Schema, "zod3Schema");
function zod4Schema(zodSchema2, options) {
  var _a24;
  const useReferences = (_a24 = options == null ? void 0 : options.useReferences) != null ? _a24 : false;
  return jsonSchema(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => addAdditionalPropertiesToJsonSchema(
      toJSONSchema(zodSchema2, {
        target: "draft-7",
        io: "input",
        reused: useReferences ? "ref" : "inline"
      })
    ),
    {
      validate: /* @__PURE__ */ __name(async (value) => {
        const result = await safeParseAsync(zodSchema2, value);
        return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
      }, "validate")
    }
  );
}
__name(zod4Schema, "zod4Schema");
function isZod4Schema(zodSchema2) {
  return "_zod" in zodSchema2;
}
__name(isZod4Schema, "isZod4Schema");
function zodSchema(zodSchema2, options) {
  if (isZod4Schema(zodSchema2)) {
    return zod4Schema(zodSchema2, options);
  } else {
    return zod3Schema(zodSchema2, options);
  }
}
__name(zodSchema, "zodSchema");
async function validateTypes({
  value,
  schema,
  context: context2
}) {
  const result = await safeValidateTypes({ value, schema, context: context2 });
  if (!result.success) {
    throw TypeValidationError.wrap({ value, cause: result.error, context: context2 });
  }
  return result.value;
}
__name(validateTypes, "validateTypes");
async function safeValidateTypes({
  value,
  schema,
  context: context2
}) {
  const actualSchema = asSchema(schema);
  try {
    if (actualSchema.validate == null) {
      return { success: true, value, rawValue: value };
    }
    const result = await actualSchema.validate(value);
    if (result.success) {
      return { success: true, value: result.value, rawValue: value };
    }
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: result.error, context: context2 }),
      rawValue: value
    };
  } catch (error) {
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: error, context: context2 }),
      rawValue: value
    };
  }
}
__name(safeValidateTypes, "safeValidateTypes");
async function parseJSON({
  text: text2,
  schema
}) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return value;
    }
    return validateTypes({ value, schema });
  } catch (error) {
    if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) {
      throw error;
    }
    throw new JSONParseError({ text: text2, cause: error });
  }
}
__name(parseJSON, "parseJSON");
async function safeParseJSON({
  text: text2,
  schema
}) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return { success: true, value, rawValue: value };
    }
    return await safeValidateTypes({ value, schema });
  } catch (error) {
    return {
      success: false,
      error: JSONParseError.isInstance(error) ? error : new JSONParseError({ text: text2, cause: error }),
      rawValue: void 0
    };
  }
}
__name(safeParseJSON, "safeParseJSON");
function parseJsonEventStream({
  stream,
  schema
}) {
  return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(
    new TransformStream({
      async transform({ data }, controller) {
        if (data === "[DONE]") {
          return;
        }
        controller.enqueue(await safeParseJSON({ text: data, schema }));
      }
    })
  );
}
__name(parseJsonEventStream, "parseJsonEventStream");
async function parseProviderOptions({
  provider,
  providerOptions,
  schema
}) {
  if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) {
    return void 0;
  }
  const parsedProviderOptions = await safeValidateTypes({
    value: providerOptions[provider],
    schema
  });
  if (!parsedProviderOptions.success) {
    throw new InvalidArgumentError({
      argument: "providerOptions",
      message: `invalid ${provider} provider options`,
      cause: parsedProviderOptions.error
    });
  }
  return parsedProviderOptions.value;
}
__name(parseProviderOptions, "parseProviderOptions");
var getOriginalFetch2 = /* @__PURE__ */ __name(() => globalThis.fetch, "getOriginalFetch2");
var postJsonToApi = /* @__PURE__ */ __name(async ({
  url,
  headers,
  body,
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
}) => postToApi({
  url,
  headers: {
    "Content-Type": "application/json",
    ...headers
  },
  body: {
    content: JSON.stringify(body),
    values: body
  },
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
}), "postJsonToApi");
var postToApi = /* @__PURE__ */ __name(async ({
  url,
  headers = {},
  body,
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch2()
}) => {
  try {
    const response = await fetch2(url, {
      method: "POST",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      body: body.content,
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: body.values
        });
      } catch (error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: body.values
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: body.values
      });
    } catch (error) {
      if (error instanceof Error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: body.values
      });
    }
  } catch (error) {
    throw handleFetchError({ error, url, requestBodyValues: body.values });
  }
}, "postToApi");
function tool(tool2) {
  return tool2;
}
__name(tool, "tool");
function createProviderToolFactory({
  id,
  inputSchema
}) {
  return ({
    execute,
    outputSchema: outputSchema2,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    ...args
  }) => tool({
    type: "provider",
    id,
    args,
    inputSchema,
    outputSchema: outputSchema2,
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable
  });
}
__name(createProviderToolFactory, "createProviderToolFactory");
function createProviderToolFactoryWithOutputSchema({
  id,
  inputSchema,
  outputSchema: outputSchema2,
  supportsDeferredResults
}) {
  return ({
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    ...args
  }) => tool({
    type: "provider",
    id,
    args,
    inputSchema,
    outputSchema: outputSchema2,
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    supportsDeferredResults
  });
}
__name(createProviderToolFactoryWithOutputSchema, "createProviderToolFactoryWithOutputSchema");
async function resolve(value) {
  if (typeof value === "function") {
    value = value();
  }
  return value;
}
__name(resolve, "resolve");
var retryWithExponentialBackoff = /* @__PURE__ */ __name(({
  maxRetries = 2,
  initialDelayInMs = 2e3,
  backoffFactor = 2,
  abortSignal,
  shouldRetry,
  getDelayInMs = /* @__PURE__ */ __name(({ exponentialBackoffDelay }) => exponentialBackoffDelay, "getDelayInMs"),
  createRetryError = /* @__PURE__ */ __name(({ message }) => new Error(message), "createRetryError")
}) => async (f) => retryWithExponentialBackoffInternal(f, {
  maxRetries,
  delayInMs: initialDelayInMs,
  backoffFactor,
  abortSignal,
  shouldRetry,
  getDelayInMs,
  createRetryError
}), "retryWithExponentialBackoff");
async function retryWithExponentialBackoffInternal(f, {
  maxRetries,
  delayInMs,
  backoffFactor,
  abortSignal,
  shouldRetry,
  getDelayInMs,
  createRetryError
}, errors = []) {
  try {
    return await f();
  } catch (error) {
    if (isAbortError(error)) {
      throw error;
    }
    if (maxRetries === 0) {
      throw error;
    }
    const errorMessage = getErrorMessage2(error);
    const newErrors = [...errors, error];
    const tryNumber = newErrors.length;
    if (tryNumber > maxRetries) {
      throw createRetryError({
        message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
        reason: "maxRetriesExceeded",
        errors: newErrors
      });
    }
    if (await shouldRetry(error) && tryNumber <= maxRetries) {
      await delay(
        getDelayInMs({
          error,
          exponentialBackoffDelay: delayInMs
        }),
        { abortSignal }
      );
      return retryWithExponentialBackoffInternal(
        f,
        {
          maxRetries,
          delayInMs: backoffFactor * delayInMs,
          backoffFactor,
          abortSignal,
          shouldRetry,
          getDelayInMs,
          createRetryError
        },
        newErrors
      );
    }
    if (tryNumber === 1) {
      throw error;
    }
    throw createRetryError({
      message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
      reason: "errorNotRetryable",
      errors: newErrors
    });
  }
}
__name(retryWithExponentialBackoffInternal, "retryWithExponentialBackoffInternal");
var textDecoder = new TextDecoder();
function wrapResponseBodyStream({
  stream,
  url,
  requestBodyValues,
  statusCode,
  responseHeaders
}) {
  const reader = stream.getReader();
  let readerReleased = false;
  const releaseReader = /* @__PURE__ */ __name(() => {
    if (!readerReleased) {
      reader.releaseLock();
      readerReleased = true;
    }
  }, "releaseReader");
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          releaseReader();
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error) {
        releaseReader();
        if (isAbortError(error)) {
          controller.error(error);
          return;
        }
        controller.error(
          handleFetchError({
            error: new APICallError({
              message: "Failed to process successful response",
              cause: error,
              statusCode,
              url,
              responseHeaders,
              requestBodyValues
            }),
            url,
            requestBodyValues
          })
        );
      }
    },
    async cancel(reason) {
      try {
        await reader.cancel(reason);
      } finally {
        releaseReader();
      }
    }
  });
}
__name(wrapResponseBodyStream, "wrapResponseBodyStream");
async function readResponseBodyAsText({
  response,
  url
}) {
  return textDecoder.decode(
    await readResponseWithSizeLimit({
      response,
      url
    })
  );
}
__name(readResponseBodyAsText, "readResponseBodyAsText");
var createJsonErrorResponseHandler = /* @__PURE__ */ __name(({
  errorSchema,
  errorToMessage,
  isRetryable
}) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await readResponseBodyAsText({ response, url });
  const responseHeaders = extractResponseHeaders(response);
  if (responseBody.trim() === "") {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
  try {
    const parsedError = await parseJSON({
      text: responseBody,
      schema: errorSchema
    });
    return {
      responseHeaders,
      value: new APICallError({
        message: errorToMessage(parsedError),
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        data: parsedError,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
      })
    };
  } catch (parseError) {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
}, "createJsonErrorResponseHandler");
var createEventSourceResponseHandler = /* @__PURE__ */ __name((chunkSchema2) => async ({ response, url, requestBodyValues }) => {
  const responseHeaders = extractResponseHeaders(response);
  if (response.body == null) {
    throw new EmptyResponseBodyError({});
  }
  return {
    responseHeaders,
    value: parseJsonEventStream({
      stream: wrapResponseBodyStream({
        stream: response.body,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders
      }),
      schema: chunkSchema2
    })
  };
}, "createEventSourceResponseHandler");
var createJsonResponseHandler = /* @__PURE__ */ __name((responseSchema2) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await readResponseBodyAsText({ response, url });
  const parsedResult = await safeParseJSON({
    text: responseBody,
    schema: responseSchema2
  });
  const responseHeaders = extractResponseHeaders(response);
  if (!parsedResult.success) {
    throw new APICallError({
      message: "Invalid JSON response",
      cause: parsedResult.error,
      statusCode: response.status,
      responseHeaders,
      responseBody,
      url,
      requestBodyValues
    });
  }
  return {
    responseHeaders,
    value: parsedResult.value,
    rawValue: parsedResult.rawValue
  };
}, "createJsonResponseHandler");
function withoutTrailingSlash(url) {
  return url == null ? void 0 : url.replace(/\/$/, "");
}
__name(withoutTrailingSlash, "withoutTrailingSlash");
function isAsyncIterable(obj) {
  return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
__name(isAsyncIterable, "isAsyncIterable");
async function* executeTool({
  execute,
  input,
  options
}) {
  const result = execute(input, options);
  if (isAsyncIterable(result)) {
    let lastOutput;
    for await (const output of result) {
      lastOutput = output;
      yield { type: "preliminary", output };
    }
    yield { type: "final", output: lastOutput };
  } else {
    yield { type: "final", output: await result };
  }
}
__name(executeTool, "executeTool");

// node_modules/@ai-sdk/google/dist/index.mjs
init_esm();
var googleErrorDataSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      error: external_exports.object({
        code: external_exports.number().nullable(),
        message: external_exports.string(),
        status: external_exports.string(),
        details: external_exports.array(external_exports.unknown()).nullish()
      })
    })
  )
);
var googleFailedResponseHandler = createJsonErrorResponseHandler({
  errorSchema: googleErrorDataSchema,
  errorToMessage: /* @__PURE__ */ __name((data) => data.error.message, "errorToMessage")
});
var googleTranscriptionModelOptions = external_exports.object({
  /**
   * BCP-47 language codes providing hints about the languages present in the
   * audio. If omitted or empty, defaults to automatic language detection.
   */
  languageCodes: external_exports.array(external_exports.string()).optional(),
  /**
   * Custom vocabulary phrases, which bias the speech recognition model
   * toward recognizing specific terms.
   */
  customVocabulary: external_exports.array(external_exports.string()).optional(),
  /**
   * Enables word-level timestamp generation.
   */
  wordTimestamp: external_exports.boolean().optional(),
  /**
   * Enables speaker diarization.
   */
  diarization: external_exports.boolean().optional(),
  /**
   * Transcription output formatting mode.
   *
   * - `VERBATIM` (default): exact literal transcript preserving filler
   *   words, repetitions, and false starts.
   * - `SMART`: cleans up and structures the transcript in real time —
   *   disfluency removal, inline self-corrections, structured formatting
   *   (lists, numbers, dates, paragraph breaks), and grammar/casing polish.
   */
  mode: external_exports.enum(["SMART", "VERBATIM"]).optional()
});
function isLiveTranscriptionModelId(modelId) {
  return modelId.includes("-live");
}
__name(isLiveTranscriptionModelId, "isLiveTranscriptionModelId");
var GoogleTranscriptionModel = class {
  static {
    __name(this, "GoogleTranscriptionModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  async parseOptions(providerOptions) {
    return parseProviderOptions({
      provider: "google",
      providerOptions,
      schema: googleTranscriptionModelOptions
    });
  }
  async doGenerate(options) {
    var _a24, _b17, _c, _d, _e, _f;
    if (isLiveTranscriptionModelId(this.modelId)) {
      throw new InvalidArgumentError({
        argument: "modelId",
        message: `Model '${this.modelId}' only supports streaming transcription, which requires AI SDK v7. Use a unary model such as 'gemini-3.5-transcribe'.`
      });
    }
    const currentDate = (_c = (_b17 = (_a24 = this.config._internal) == null ? void 0 : _a24.currentDate) == null ? void 0 : _b17.call(_a24)) != null ? _c : /* @__PURE__ */ new Date();
    const warnings = [];
    const googleOptions = await this.parseOptions(options.providerOptions);
    const transcriptionConfig = buildTranscriptionConfig(googleOptions);
    const requestBody = {
      model: this.modelId,
      input: [
        {
          type: "audio",
          data: convertToBase64(options.audio),
          mime_type: options.mediaType
        }
      ],
      ...transcriptionConfig != null ? { generation_config: { transcription_config: transcriptionConfig } } : {}
    };
    const {
      value: response,
      responseHeaders,
      rawValue: rawResponse
    } = await postJsonToApi({
      url: `${this.config.baseURL}/interactions`,
      headers: combineHeaders(
        this.config.headers ? await resolve(this.config.headers) : void 0,
        options.headers
      ),
      body: requestBody,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        googleInteractionsTranscriptionResponseSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    let text2 = "";
    const segments = [];
    for (const step of (_d = response.steps) != null ? _d : []) {
      for (const content of (_e = step.content) != null ? _e : []) {
        if (content.type !== "text" || content.text == null) continue;
        text2 += content.text;
        for (const annotation of (_f = content.annotations) != null ? _f : []) {
          if (annotation.type !== "word_info") continue;
          const startSecond = parseOffsetSeconds(annotation.start_offset);
          const endSecond = parseOffsetSeconds(annotation.end_offset);
          if (annotation.text == null || startSecond == null || endSecond == null) {
            continue;
          }
          segments.push({ text: annotation.text, startSecond, endSecond });
        }
      }
    }
    return {
      text: text2,
      segments,
      language: void 0,
      durationInSeconds: void 0,
      warnings,
      response: {
        timestamp: currentDate,
        modelId: this.modelId,
        headers: responseHeaders,
        body: rawResponse
      },
      ...response.usage != null ? {
        providerMetadata: {
          google: { usage: response.usage }
        }
      } : {}
    };
  }
};
function buildTranscriptionConfig(options) {
  var _a24;
  if (options == null) return void 0;
  const config = {};
  if (options.languageCodes != null) {
    config.language_codes = options.languageCodes;
  }
  if (options.customVocabulary != null) {
    config.custom_vocabulary = options.customVocabulary;
  }
  if (options.mode != null || options.diarization === true || options.wordTimestamp === true) {
    config.mode = {
      type: ((_a24 = options.mode) != null ? _a24 : "VERBATIM").toLowerCase(),
      ...options.diarization === true ? { diarization_mode: "speaker" } : {},
      ...options.wordTimestamp === true ? { timestamp_granularities: ["word"] } : {}
    };
  }
  return Object.keys(config).length > 0 ? config : void 0;
}
__name(buildTranscriptionConfig, "buildTranscriptionConfig");
function parseOffsetSeconds(offset) {
  if (offset == null) return void 0;
  const parsed = Number.parseFloat(offset);
  return Number.isFinite(parsed) ? parsed : void 0;
}
__name(parseOffsetSeconds, "parseOffsetSeconds");
var googleInteractionsWordAnnotationSchema = external_exports.object({
  type: external_exports.string().nullish(),
  text: external_exports.string().nullish(),
  speaker: external_exports.string().nullish(),
  start_offset: external_exports.string().nullish(),
  end_offset: external_exports.string().nullish()
});
var googleInteractionsTranscriptionResponseSchema = external_exports.object({
  status: external_exports.string().nullish(),
  steps: external_exports.array(
    external_exports.object({
      type: external_exports.string().nullish(),
      content: external_exports.array(
        external_exports.object({
          type: external_exports.string().nullish(),
          text: external_exports.string().nullish(),
          annotations: external_exports.array(googleInteractionsWordAnnotationSchema).nullish()
        })
      ).nullish()
    })
  ).nullish(),
  usage: external_exports.record(external_exports.string(), external_exports.unknown()).nullish()
});
var VERSION2 = true ? "3.0.131" : "0.0.0-test";
var googleEmbeddingContentPartSchema = external_exports.union([
  external_exports.object({ text: external_exports.string() }),
  external_exports.object({
    inlineData: external_exports.object({
      mimeType: external_exports.string(),
      data: external_exports.string()
    })
  }),
  external_exports.object({
    fileData: external_exports.object({
      fileUri: external_exports.string(),
      mimeType: external_exports.string()
    })
  })
]);
var googleEmbeddingModelOptions = lazySchema(
  () => zodSchema(
    external_exports.object({
      /**
       * Optional. Optional reduced dimension for the output embedding.
       * If set, excessive values in the output embedding are truncated from the end.
       */
      outputDimensionality: external_exports.number().optional(),
      /**
       * Optional. Specifies the task type for generating embeddings.
       * Supported task types:
       * - SEMANTIC_SIMILARITY: Optimized for text similarity.
       * - CLASSIFICATION: Optimized for text classification.
       * - CLUSTERING: Optimized for clustering texts based on similarity.
       * - RETRIEVAL_DOCUMENT: Optimized for document retrieval.
       * - RETRIEVAL_QUERY: Optimized for query-based retrieval.
       * - QUESTION_ANSWERING: Optimized for answering questions.
       * - FACT_VERIFICATION: Optimized for verifying factual information.
       * - CODE_RETRIEVAL_QUERY: Optimized for retrieving code blocks based on natural language queries.
       */
      taskType: external_exports.enum([
        "SEMANTIC_SIMILARITY",
        "CLASSIFICATION",
        "CLUSTERING",
        "RETRIEVAL_DOCUMENT",
        "RETRIEVAL_QUERY",
        "QUESTION_ANSWERING",
        "FACT_VERIFICATION",
        "CODE_RETRIEVAL_QUERY"
      ]).optional(),
      /**
       * Optional. Per-value multimodal content parts for embedding non-text
       * content (images, video, PDF, audio). Each entry corresponds to the
       * embedding value at the same index and its parts are merged with the
       * text value in the request. Use `null` for entries that are text-only.
       *
       * The array length must match the number of values being embedded. In
       * the case of a single embedding, the array length must be 1.
       */
      content: external_exports.array(external_exports.array(googleEmbeddingContentPartSchema).min(1).nullable()).optional()
    })
  )
);
var _a16;
_a16 = EMBEDDING_MODEL_PROVIDER_OPTIONS_TRANSFORMER;
var GoogleGenerativeAIEmbeddingModel = class {
  static {
    __name(this, "GoogleGenerativeAIEmbeddingModel");
  }
  constructor(modelId, config) {
    this.specificationVersion = "v3";
    this.maxEmbeddingsPerCall = 100;
    this.supportsParallelCalls = true;
    this[_a16] = ({ providerOptions, values, startIndex, endIndex }) => {
      var _a24;
      const multimodalContent = (_a24 = providerOptions == null ? void 0 : providerOptions.google) == null ? void 0 : _a24.content;
      if (!Array.isArray(multimodalContent)) {
        return providerOptions;
      }
      validateMultimodalContentLength({
        multimodalContent,
        values
      });
      return {
        ...providerOptions,
        google: {
          ...providerOptions == null ? void 0 : providerOptions.google,
          content: multimodalContent.slice(startIndex, endIndex)
        }
      };
    };
    this.modelId = modelId;
    this.config = config;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values,
    headers,
    abortSignal,
    providerOptions
  }) {
    const googleOptions = await parseProviderOptions({
      provider: "google",
      providerOptions,
      schema: googleEmbeddingModelOptions
    });
    if (values.length > this.maxEmbeddingsPerCall) {
      throw new TooManyEmbeddingValuesForCallError({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values
      });
    }
    const mergedHeaders = combineHeaders(
      await resolve(this.config.headers),
      headers
    );
    const multimodalContent = googleOptions == null ? void 0 : googleOptions.content;
    validateMultimodalContentLength({ multimodalContent, values });
    if (values.length === 1) {
      const valueParts = multimodalContent == null ? void 0 : multimodalContent[0];
      const textPart = values[0] ? [{ text: values[0] }] : [];
      const parts = valueParts != null ? [...textPart, ...valueParts] : [{ text: values[0] }];
      const {
        responseHeaders: responseHeaders2,
        value: response2,
        rawValue: rawValue2
      } = await postJsonToApi({
        url: `${this.config.baseURL}/models/${this.modelId}:embedContent`,
        headers: mergedHeaders,
        body: {
          model: `models/${this.modelId}`,
          content: {
            parts
          },
          outputDimensionality: googleOptions == null ? void 0 : googleOptions.outputDimensionality,
          taskType: googleOptions == null ? void 0 : googleOptions.taskType
        },
        failedResponseHandler: googleFailedResponseHandler,
        successfulResponseHandler: createJsonResponseHandler(
          googleGenerativeAISingleEmbeddingResponseSchema
        ),
        abortSignal,
        fetch: this.config.fetch
      });
      return {
        warnings: [],
        embeddings: [response2.embedding.values],
        usage: void 0,
        response: { headers: responseHeaders2, body: rawValue2 }
      };
    }
    const {
      responseHeaders,
      value: response,
      rawValue
    } = await postJsonToApi({
      url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
      headers: mergedHeaders,
      body: {
        requests: values.map((value, index) => {
          const valueParts = multimodalContent == null ? void 0 : multimodalContent[index];
          const textPart = value ? [{ text: value }] : [];
          return {
            model: `models/${this.modelId}`,
            content: {
              role: "user",
              parts: valueParts != null ? [...textPart, ...valueParts] : [{ text: value }]
            },
            outputDimensionality: googleOptions == null ? void 0 : googleOptions.outputDimensionality,
            taskType: googleOptions == null ? void 0 : googleOptions.taskType
          };
        })
      },
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        googleGenerativeAITextEmbeddingResponseSchema
      ),
      abortSignal,
      fetch: this.config.fetch
    });
    return {
      warnings: [],
      embeddings: response.embeddings.map((item) => item.values),
      usage: void 0,
      response: { headers: responseHeaders, body: rawValue }
    };
  }
};
var googleGenerativeAITextEmbeddingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      embeddings: external_exports.array(external_exports.object({ values: external_exports.array(external_exports.number()) }))
    })
  )
);
var googleGenerativeAISingleEmbeddingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      embedding: external_exports.object({ values: external_exports.array(external_exports.number()) })
    })
  )
);
function validateMultimodalContentLength({
  multimodalContent,
  values
}) {
  if (multimodalContent != null && multimodalContent.length !== values.length) {
    throw new Error(
      `The number of multimodal content entries (${multimodalContent.length}) must match the number of values (${values.length}).`
    );
  }
}
__name(validateMultimodalContentLength, "validateMultimodalContentLength");
function convertGoogleGenerativeAIUsage(usage) {
  var _a24, _b17, _c, _d;
  if (usage == null) {
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  }
  const promptTokens = (_a24 = usage.promptTokenCount) != null ? _a24 : 0;
  const candidatesTokens = (_b17 = usage.candidatesTokenCount) != null ? _b17 : 0;
  const cachedContentTokens = (_c = usage.cachedContentTokenCount) != null ? _c : 0;
  const thoughtsTokens = (_d = usage.thoughtsTokenCount) != null ? _d : 0;
  return {
    inputTokens: {
      total: promptTokens,
      noCache: promptTokens - cachedContentTokens,
      cacheRead: cachedContentTokens,
      cacheWrite: void 0
    },
    outputTokens: {
      total: candidatesTokens + thoughtsTokens,
      text: candidatesTokens,
      reasoning: thoughtsTokens
    },
    raw: usage
  };
}
__name(convertGoogleGenerativeAIUsage, "convertGoogleGenerativeAIUsage");
var recursiveReferenceFunctionalityPrefix = "recursive JSON Schema reference:";
function isRecursiveJSONSchemaReferenceError(error) {
  return UnsupportedFunctionalityError.isInstance(error) && error.functionality.startsWith(recursiveReferenceFunctionalityPrefix);
}
__name(isRecursiveJSONSchemaReferenceError, "isRecursiveJSONSchemaReferenceError");
function convertJSONSchemaToOpenAPISchema(jsonSchema2, isRoot = true) {
  const rootSchema = typeof jsonSchema2 === "object" ? jsonSchema2 : void 0;
  return convertJSONSchemaDefinition(jsonSchema2, isRoot, {
    definitions: rootSchema == null ? void 0 : rootSchema.definitions,
    dollarDefinitions: rootSchema == null ? void 0 : rootSchema.$defs,
    resolvingReferences: /* @__PURE__ */ new Set()
  });
}
__name(convertJSONSchemaToOpenAPISchema, "convertJSONSchemaToOpenAPISchema");
function convertJSONSchemaDefinition(jsonSchema2, isRoot, referenceContext) {
  if (jsonSchema2 == null) {
    return void 0;
  }
  if (typeof jsonSchema2 === "boolean") {
    return { type: "boolean", properties: {} };
  }
  if (jsonSchema2.$ref != null) {
    return convertJSONSchemaReference({
      jsonSchema: jsonSchema2,
      reference: jsonSchema2.$ref,
      isRoot,
      referenceContext
    });
  }
  if (isEmptyObjectSchema(jsonSchema2)) {
    if (isRoot) {
      return void 0;
    }
    if (jsonSchema2.description) {
      return { type: "object", description: jsonSchema2.description };
    }
    return { type: "object" };
  }
  const {
    type,
    description,
    required,
    properties,
    items,
    allOf,
    anyOf,
    oneOf,
    format,
    const: constValue,
    minLength,
    enum: enumValues
  } = jsonSchema2;
  const result = {};
  if (description) result.description = description;
  if (required) result.required = required;
  if (format) result.format = format;
  if (type) {
    if (Array.isArray(type)) {
      const hasNull = type.includes("null");
      const nonNullTypes = type.filter((t) => t !== "null");
      if (nonNullTypes.length === 0) {
        result.type = "null";
      } else {
        result.anyOf = nonNullTypes.map((t) => ({ type: t }));
        if (hasNull) {
          result.nullable = true;
        }
      }
    } else {
      result.type = type;
    }
  }
  const values = enumValues != null ? enumValues : constValue !== void 0 ? [constValue] : void 0;
  if (values !== void 0) {
    addEnumToSchema({ values, type, result });
  }
  if (properties != null) {
    result.properties = Object.entries(properties).reduce(
      (acc, [key, value]) => {
        acc[key] = convertJSONSchemaDefinition(value, false, referenceContext);
        return acc;
      },
      {}
    );
  }
  if (items) {
    result.items = Array.isArray(items) ? items.map(
      (item) => convertJSONSchemaDefinition(item, false, referenceContext)
    ) : convertJSONSchemaDefinition(items, false, referenceContext);
  }
  if (allOf) {
    result.allOf = allOf.map(
      (item) => convertJSONSchemaDefinition(item, false, referenceContext)
    );
  }
  if (anyOf) {
    if (anyOf.some(
      (schema) => typeof schema === "object" && (schema == null ? void 0 : schema.type) === "null"
    )) {
      const nonNullSchemas = anyOf.filter(
        (schema) => !(typeof schema === "object" && (schema == null ? void 0 : schema.type) === "null")
      );
      if (nonNullSchemas.length === 1) {
        const converted = convertJSONSchemaDefinition(
          nonNullSchemas[0],
          false,
          referenceContext
        );
        if (typeof converted === "object") {
          result.nullable = true;
          Object.assign(result, converted);
        }
      } else {
        result.anyOf = nonNullSchemas.map(
          (item) => convertJSONSchemaDefinition(item, false, referenceContext)
        );
        result.nullable = true;
      }
    } else {
      result.anyOf = anyOf.map(
        (item) => convertJSONSchemaDefinition(item, false, referenceContext)
      );
    }
  }
  if (oneOf) {
    result.oneOf = oneOf.map(
      (item) => convertJSONSchemaDefinition(item, false, referenceContext)
    );
  }
  if (minLength !== void 0) {
    result.minLength = minLength;
  }
  return result;
}
__name(convertJSONSchemaDefinition, "convertJSONSchemaDefinition");
function addEnumToSchema({
  values,
  type,
  result
}) {
  const nullable = Array.isArray(type) && type.includes("null") || type === void 0 && values.includes(null);
  const enumValues = nullable ? values.filter((value) => value !== null) : values;
  if (values.length > 0 && values.every((value) => value === null)) {
    const typeAllowsNull = type === void 0 || type === "null" || Array.isArray(type) && type.includes("null");
    if (typeAllowsNull) {
      result.type = "null";
      if (Array.isArray(type)) {
        delete result.anyOf;
      }
      return;
    }
  }
  const enumType = getEnumType({ values: enumValues, type });
  if (enumType === void 0) {
    throw new UnsupportedFunctionalityError({
      functionality: "JSON Schema enum with mixed or unsupported values",
      message: "Google does not support this JSON Schema enum. Enum values must share one supported primitive type and match the schema type."
    });
  }
  result.type = enumType;
  if (Array.isArray(type)) {
    delete result.anyOf;
  }
  if (nullable) {
    result.nullable = true;
  }
  if (enumType === "string") {
    result.enum = enumValues;
  } else {
    result.format = "enum";
    result.enum = enumValues.map(String);
  }
}
__name(addEnumToSchema, "addEnumToSchema");
function getEnumType({
  values,
  type
}) {
  if (values.length === 0) {
    return void 0;
  }
  const typeAllows = /* @__PURE__ */ __name((enumType) => type === void 0 || type === enumType || Array.isArray(type) && type.includes(enumType), "typeAllows");
  if (typeAllows("string") && values.every((value) => typeof value === "string")) {
    return "string";
  }
  if ((typeAllows("number") || typeAllows("integer")) && values.every((value) => typeof value === "number" && Number.isFinite(value))) {
    if (typeAllows("number")) {
      return "number";
    }
    if (values.every((value) => Number.isInteger(value))) {
      return "integer";
    }
  }
  if (typeAllows("boolean") && values.every((value) => typeof value === "boolean")) {
    return "boolean";
  }
  return void 0;
}
__name(getEnumType, "getEnumType");
function convertJSONSchemaReference({
  jsonSchema: jsonSchema2,
  reference,
  isRoot,
  referenceContext
}) {
  const { definition, referenceKey } = getReferencedDefinition(
    reference,
    referenceContext
  );
  if (referenceContext.resolvingReferences.has(referenceKey)) {
    throw new UnsupportedFunctionalityError({
      functionality: `${recursiveReferenceFunctionalityPrefix} ${reference}`,
      message: "Google schema conversion does not support recursive JSON Schema references."
    });
  }
  const resolvingReferences = new Set(referenceContext.resolvingReferences);
  resolvingReferences.add(referenceKey);
  const { $ref: _reference, ...siblingSchema } = jsonSchema2;
  const resolvedSchema = typeof definition === "boolean" ? definition ? siblingSchema : false : { ...definition, ...siblingSchema };
  return convertJSONSchemaDefinition(resolvedSchema, isRoot, {
    ...referenceContext,
    resolvingReferences
  });
}
__name(convertJSONSchemaReference, "convertJSONSchemaReference");
function getReferencedDefinition(reference, referenceContext) {
  const definitionSources = [
    {
      prefix: "#/$defs/",
      definitions: referenceContext.dollarDefinitions
    },
    {
      prefix: "#/definitions/",
      definitions: referenceContext.definitions
    }
  ];
  const source = definitionSources.find(
    ({ prefix }) => reference.startsWith(prefix)
  );
  const encodedDefinitionName = source ? reference.slice(source.prefix.length) : void 0;
  if (source == null || encodedDefinitionName == null || encodedDefinitionName.length === 0 || encodedDefinitionName.includes("/")) {
    throwUnsupportedReference(reference);
  }
  let decodedDefinitionName;
  try {
    decodedDefinitionName = decodeURIComponent(encodedDefinitionName);
  } catch (e) {
    throwUnsupportedReference(reference);
  }
  if (decodedDefinitionName.includes("/") || /~(?![01])/u.test(decodedDefinitionName) || source.definitions == null) {
    throwUnsupportedReference(reference);
  }
  const definitionName = decodedDefinitionName.replace(
    /~[01]/g,
    (match) => match === "~1" ? "/" : "~"
  );
  if (!Object.prototype.hasOwnProperty.call(source.definitions, definitionName)) {
    throwUnsupportedReference(reference);
  }
  return {
    definition: source.definitions[definitionName],
    referenceKey: `${source.prefix}${definitionName}`
  };
}
__name(getReferencedDefinition, "getReferencedDefinition");
function throwUnsupportedReference(reference) {
  throw new UnsupportedFunctionalityError({
    functionality: `JSON Schema reference: ${reference}`,
    message: "Google schema conversion only supports references to direct children of root-level $defs or definitions."
  });
}
__name(throwUnsupportedReference, "throwUnsupportedReference");
function isEmptyObjectSchema(jsonSchema2) {
  return jsonSchema2 != null && typeof jsonSchema2 === "object" && jsonSchema2.type === "object" && (jsonSchema2.properties == null || Object.keys(jsonSchema2.properties).length === 0) && !jsonSchema2.additionalProperties;
}
__name(isEmptyObjectSchema, "isEmptyObjectSchema");
var SKIP_THOUGHT_SIGNATURE_VALIDATOR = "skip_thought_signature_validator";
function getGoogleProviderOptions(providerOptions, providerOptionsName) {
  const namespaces = [
    providerOptionsName,
    "google",
    "googleVertex",
    "vertex"
  ].filter((namespace, index, allNamespaces) => {
    return allNamespaces.indexOf(namespace) === index;
  });
  for (const namespace of namespaces) {
    const options = providerOptions == null ? void 0 : providerOptions[namespace];
    if (options != null) {
      return options;
    }
  }
}
__name(getGoogleProviderOptions, "getGoogleProviderOptions");
var dataUrlRegex = /^data:([^;,]+);base64,(.+)$/s;
function parseBase64DataUrl(value) {
  const match = dataUrlRegex.exec(value);
  if (match == null) {
    return void 0;
  }
  return {
    mediaType: match[1],
    data: match[2]
  };
}
__name(parseBase64DataUrl, "parseBase64DataUrl");
function convertUrlToolResultPart(url, mediaType, supportedFunctionResponseUrls) {
  const parsedDataUrl = parseBase64DataUrl(url);
  if (parsedDataUrl != null) {
    return {
      inlineData: {
        mimeType: parsedDataUrl.mediaType,
        data: parsedDataUrl.data
      }
    };
  }
  return mediaType != null && isUrlSupported({
    url,
    mediaType,
    supportedUrls: supportedFunctionResponseUrls
  }) ? {
    fileData: {
      mimeType: mediaType,
      fileUri: url
    }
  } : void 0;
}
__name(convertUrlToolResultPart, "convertUrlToolResultPart");
function appendToolResultParts(parts, toolName, outputValue, toolCallId, includeFunctionCallIds = true, supportedFunctionResponseUrls = {}) {
  const functionResponseParts = [];
  const responseTextParts = [];
  for (const contentPart of outputValue) {
    switch (contentPart.type) {
      case "text": {
        responseTextParts.push(contentPart.text);
        break;
      }
      case "image-data":
      case "file-data": {
        functionResponseParts.push({
          inlineData: {
            mimeType: contentPart.mediaType,
            data: contentPart.data
          }
        });
        break;
      }
      case "image-url":
      case "file-url": {
        const functionResponsePart = convertUrlToolResultPart(
          contentPart.url,
          contentPart.mediaType,
          supportedFunctionResponseUrls
        );
        if (functionResponsePart != null) {
          functionResponseParts.push(functionResponsePart);
        } else {
          responseTextParts.push(JSON.stringify(contentPart));
        }
        break;
      }
      default: {
        responseTextParts.push(JSON.stringify(contentPart));
        break;
      }
    }
  }
  parts.push({
    functionResponse: {
      ...includeFunctionCallIds && toolCallId != null ? { id: toolCallId } : {},
      name: toolName,
      response: {
        name: toolName,
        content: responseTextParts.length > 0 ? responseTextParts.join("\n") : "Tool executed successfully."
      },
      ...functionResponseParts.length > 0 ? { parts: functionResponseParts } : {}
    }
  });
}
__name(appendToolResultParts, "appendToolResultParts");
function appendLegacyToolResultParts(parts, toolName, outputValue, toolCallId, includeFunctionCallIds = true) {
  for (const contentPart of outputValue) {
    switch (contentPart.type) {
      case "text":
        parts.push({
          functionResponse: {
            ...includeFunctionCallIds && toolCallId != null ? { id: toolCallId } : {},
            name: toolName,
            response: {
              name: toolName,
              content: contentPart.text
            }
          }
        });
        break;
      case "image-data":
      case "file-data": {
        const topLevelMediaType = String(contentPart.mediaType).split("/")[0];
        parts.push(
          {
            inlineData: {
              mimeType: String(contentPart.mediaType),
              data: String(contentPart.data)
            }
          },
          {
            text: `Tool executed successfully and returned this ${topLevelMediaType === "image" ? "image" : "file"} as a response`
          }
        );
        break;
      }
      default:
        parts.push({ text: JSON.stringify(contentPart) });
        break;
    }
  }
}
__name(appendLegacyToolResultParts, "appendLegacyToolResultParts");
function convertToGoogleGenerativeAIMessages(prompt, options) {
  var _a24, _b17, _c, _d, _e, _f, _g;
  const systemInstructionParts = [];
  const contents = [];
  let systemMessagesAllowed = true;
  const isGemmaModel = (_a24 = options == null ? void 0 : options.isGemmaModel) != null ? _a24 : false;
  const isGemini3Model = (_b17 = options == null ? void 0 : options.isGemini3Model) != null ? _b17 : false;
  const providerOptionsName = (_c = options == null ? void 0 : options.providerOptionsName) != null ? _c : "google";
  const supportsFunctionResponseParts = (_d = options == null ? void 0 : options.supportsFunctionResponseParts) != null ? _d : true;
  const onWarning = options == null ? void 0 : options.onWarning;
  const includeFunctionCallIds = (_e = options == null ? void 0 : options.includeFunctionCallIds) != null ? _e : true;
  const supportedFunctionResponseUrls = (_f = options == null ? void 0 : options.supportedFunctionResponseUrls) != null ? _f : {};
  let sentinelInjected = false;
  const missingSignatureToolNames = [];
  const injectSkipSignature = /* @__PURE__ */ __name((toolName) => {
    missingSignatureToolNames.push(toolName);
    sentinelInjected = true;
    return SKIP_THOUGHT_SIGNATURE_VALIDATOR;
  }, "injectSkipSignature");
  for (const { role, content } of prompt) {
    switch (role) {
      case "system": {
        if (!systemMessagesAllowed) {
          throw new UnsupportedFunctionalityError({
            functionality: "system messages are only supported at the beginning of the conversation"
          });
        }
        systemInstructionParts.push({ text: content });
        break;
      }
      case "user": {
        systemMessagesAllowed = false;
        const parts = [];
        for (const part of content) {
          switch (part.type) {
            case "text": {
              parts.push({ text: part.text });
              break;
            }
            case "file": {
              const mediaType = part.mediaType === "image/*" ? "image/jpeg" : part.mediaType;
              parts.push(
                part.data instanceof URL ? {
                  fileData: {
                    mimeType: mediaType,
                    fileUri: part.data.protocol === "gs:" && part.originalUrl != null ? part.originalUrl : part.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: mediaType,
                    data: convertToBase64(part.data)
                  }
                }
              );
              break;
            }
          }
        }
        contents.push({ role: "user", parts });
        break;
      }
      case "assistant": {
        systemMessagesAllowed = false;
        let modelResponseHasSignedFunctionCall = false;
        contents.push({
          role: "model",
          parts: content.map((part) => {
            const providerOpts = getGoogleProviderOptions(
              part.providerOptions,
              providerOptionsName
            );
            const thoughtSignature = (providerOpts == null ? void 0 : providerOpts.thoughtSignature) != null ? String(providerOpts.thoughtSignature) : void 0;
            switch (part.type) {
              case "text": {
                return part.text.length === 0 ? void 0 : {
                  text: part.text,
                  thoughtSignature
                };
              }
              case "reasoning": {
                return part.text.length === 0 ? void 0 : {
                  text: part.text,
                  thought: true,
                  thoughtSignature
                };
              }
              case "file": {
                if (part.data instanceof URL) {
                  throw new UnsupportedFunctionalityError({
                    functionality: "File data URLs in assistant messages are not supported"
                  });
                }
                return {
                  inlineData: {
                    mimeType: part.mediaType,
                    data: convertToBase64(part.data)
                  },
                  ...(providerOpts == null ? void 0 : providerOpts.thought) === true ? { thought: true } : {},
                  thoughtSignature
                };
              }
              case "tool-call": {
                const serverToolCallId = (providerOpts == null ? void 0 : providerOpts.serverToolCallId) != null ? String(providerOpts.serverToolCallId) : void 0;
                const serverToolType = (providerOpts == null ? void 0 : providerOpts.serverToolType) != null ? String(providerOpts.serverToolType) : void 0;
                const isServerToolCall = serverToolCallId != null && serverToolType != null;
                const shouldSkipMissingSignatureMitigation = (
                  // Gemini 3 returns a single signature for a parallel
                  // function-call response on the first standard function
                  // call. Subsequent standard function calls in the same
                  // model response legitimately have no signature.
                  !isServerToolCall && thoughtSignature == null && modelResponseHasSignedFunctionCall
                );
                const effectiveThoughtSignature = thoughtSignature != null ? thoughtSignature : isGemini3Model && !shouldSkipMissingSignatureMitigation ? injectSkipSignature(part.toolName) : void 0;
                if (!isServerToolCall && thoughtSignature != null) {
                  modelResponseHasSignedFunctionCall = true;
                }
                if (isServerToolCall) {
                  return {
                    toolCall: {
                      toolType: serverToolType,
                      args: typeof part.input === "string" ? secureJsonParse(part.input) : part.input,
                      id: serverToolCallId
                    },
                    thoughtSignature: effectiveThoughtSignature
                  };
                }
                return {
                  functionCall: {
                    ...includeFunctionCallIds && part.toolCallId != null ? { id: part.toolCallId } : {},
                    name: part.toolName,
                    args: part.input
                  },
                  thoughtSignature: effectiveThoughtSignature
                };
              }
              case "tool-result": {
                const serverToolCallId = (providerOpts == null ? void 0 : providerOpts.serverToolCallId) != null ? String(providerOpts.serverToolCallId) : void 0;
                const serverToolType = (providerOpts == null ? void 0 : providerOpts.serverToolType) != null ? String(providerOpts.serverToolType) : void 0;
                if (serverToolCallId && serverToolType) {
                  return {
                    toolResponse: {
                      toolType: serverToolType,
                      response: part.output.type === "json" ? part.output.value : {},
                      id: serverToolCallId
                    },
                    thoughtSignature
                  };
                }
                return void 0;
              }
            }
          }).filter((part) => part !== void 0)
        });
        break;
      }
      case "tool": {
        systemMessagesAllowed = false;
        const parts = [];
        for (const part of content) {
          if (part.type === "tool-approval-response") {
            continue;
          }
          const partProviderOpts = getGoogleProviderOptions(
            part.providerOptions,
            providerOptionsName
          );
          const serverToolCallId = (partProviderOpts == null ? void 0 : partProviderOpts.serverToolCallId) != null ? String(partProviderOpts.serverToolCallId) : void 0;
          const serverToolType = (partProviderOpts == null ? void 0 : partProviderOpts.serverToolType) != null ? String(partProviderOpts.serverToolType) : void 0;
          if (serverToolCallId && serverToolType) {
            const serverThoughtSignature = (partProviderOpts == null ? void 0 : partProviderOpts.thoughtSignature) != null ? String(partProviderOpts.thoughtSignature) : void 0;
            if (contents.length > 0) {
              const lastContent = contents[contents.length - 1];
              if (lastContent.role === "model") {
                lastContent.parts.push({
                  toolResponse: {
                    toolType: serverToolType,
                    response: part.output.type === "json" ? part.output.value : {},
                    id: serverToolCallId
                  },
                  thoughtSignature: serverThoughtSignature
                });
                continue;
              }
            }
          }
          const output = part.output;
          if (output.type === "content") {
            if (supportsFunctionResponseParts) {
              appendToolResultParts(
                parts,
                part.toolName,
                output.value,
                part.toolCallId,
                includeFunctionCallIds,
                supportedFunctionResponseUrls
              );
            } else {
              appendLegacyToolResultParts(
                parts,
                part.toolName,
                output.value,
                part.toolCallId,
                includeFunctionCallIds
              );
            }
          } else {
            parts.push({
              functionResponse: {
                ...includeFunctionCallIds && part.toolCallId != null ? { id: part.toolCallId } : {},
                name: part.toolName,
                response: {
                  name: part.toolName,
                  content: output.type === "execution-denied" ? (_g = output.reason) != null ? _g : "Tool call execution denied." : output.value
                }
              }
            });
          }
        }
        contents.push({
          role: "user",
          parts
        });
        break;
      }
    }
  }
  if (isGemmaModel && systemInstructionParts.length > 0 && contents.length > 0 && contents[0].role === "user") {
    const systemText = systemInstructionParts.map((part) => part.text).join("\n\n");
    contents[0].parts.unshift({ text: systemText + "\n\n" });
  }
  if (sentinelInjected && onWarning != null) {
    const uniqueToolNames = Array.from(new Set(missingSignatureToolNames));
    onWarning({
      type: "other",
      message: `Replayed ${missingSignatureToolNames.length} \`functionCall\` part(s) for a Gemini 3 model without a \`thoughtSignature\` (tools: ${uniqueToolNames.map((name24) => `\`${name24}\``).join(", ")}). Injected the documented \`skip_thought_signature_validator\` sentinel to keep the request from failing with HTTP 400. The likely cause is application code that drops \`providerOptions.google.thoughtSignature\` when persisting or serializing assistant tool-call messages. See https://ai.google.dev/gemini-api/docs/thought-signatures.`
    });
  }
  return {
    systemInstruction: systemInstructionParts.length > 0 && !isGemmaModel ? { parts: systemInstructionParts } : void 0,
    contents
  };
}
__name(convertToGoogleGenerativeAIMessages, "convertToGoogleGenerativeAIMessages");
async function downloadToolResultFiles(prompt, {
  abortSignal,
  supportedUrls = {}
}) {
  async function downloadOutput(output) {
    if (output.type !== "content") {
      return output;
    }
    return {
      ...output,
      value: await Promise.all(
        output.value.map(async (part) => {
          var _a24;
          if (part.type !== "file-url" && part.type !== "image-url") {
            return part;
          }
          if (part.type === "file-url" && part.mediaType != null && isUrlSupported({
            url: part.url,
            mediaType: part.mediaType,
            supportedUrls
          })) {
            return part;
          }
          const blob = await downloadBlob(part.url, { abortSignal });
          return {
            type: part.type === "file-url" ? "file-data" : "image-data",
            data: convertUint8ArrayToBase64(
              new Uint8Array(await blob.arrayBuffer())
            ),
            mediaType: blob.type || (part.type === "file-url" ? (_a24 = part.mediaType) != null ? _a24 : "application/octet-stream" : "image/*"),
            providerOptions: part.providerOptions
          };
        })
      )
    };
  }
  __name(downloadOutput, "downloadOutput");
  return Promise.all(
    prompt.map(async (message) => {
      switch (message.role) {
        case "assistant":
          return {
            ...message,
            content: await Promise.all(
              message.content.map(
                async (part) => part.type === "tool-result" ? { ...part, output: await downloadOutput(part.output) } : part
              )
            )
          };
        case "tool":
          return {
            ...message,
            content: await Promise.all(
              message.content.map(
                async (part) => part.type === "tool-result" ? { ...part, output: await downloadOutput(part.output) } : part
              )
            )
          };
        default:
          return message;
      }
    })
  );
}
__name(downloadToolResultFiles, "downloadToolResultFiles");
function getModelPath(modelId) {
  return modelId.includes("/") ? modelId : `models/${modelId}`;
}
__name(getModelPath, "getModelPath");
var googleLanguageModelOptions = lazySchema(
  () => zodSchema(
    external_exports.object({
      responseModalities: external_exports.array(external_exports.enum(["TEXT", "IMAGE"])).optional(),
      thinkingConfig: external_exports.object({
        thinkingBudget: external_exports.number().optional(),
        includeThoughts: external_exports.boolean().optional(),
        // https://ai.google.dev/gemini-api/docs/gemini-3?thinking=high#thinking_level
        thinkingLevel: external_exports.enum(["minimal", "low", "medium", "high"]).optional()
      }).optional(),
      /**
       * Optional.
       * The name of the cached content used as context to serve the prediction.
       * Format: cachedContents/{cachedContent}
       */
      cachedContent: external_exports.string().optional(),
      /**
       * Optional. Enable structured output. Default is true.
       *
       * This is useful when the JSON Schema contains elements that are
       * not supported by the OpenAPI schema version that
       * Google Generative AI uses. You can use this to disable
       * structured outputs if you need to.
       */
      structuredOutputs: external_exports.boolean().optional(),
      /**
       * Optional. A list of unique safety settings for blocking unsafe content.
       */
      safetySettings: external_exports.array(
        external_exports.object({
          category: external_exports.enum([
            "HARM_CATEGORY_UNSPECIFIED",
            "HARM_CATEGORY_HATE_SPEECH",
            "HARM_CATEGORY_DANGEROUS_CONTENT",
            "HARM_CATEGORY_HARASSMENT",
            "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "HARM_CATEGORY_CIVIC_INTEGRITY"
          ]),
          threshold: external_exports.enum([
            "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
            "BLOCK_LOW_AND_ABOVE",
            "BLOCK_MEDIUM_AND_ABOVE",
            "BLOCK_ONLY_HIGH",
            "BLOCK_NONE",
            "OFF"
          ])
        })
      ).optional(),
      threshold: external_exports.enum([
        "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
        "BLOCK_LOW_AND_ABOVE",
        "BLOCK_MEDIUM_AND_ABOVE",
        "BLOCK_ONLY_HIGH",
        "BLOCK_NONE",
        "OFF"
      ]).optional(),
      /**
       * Optional. Enables timestamp understanding for audio-only files.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/audio-understanding
       */
      audioTimestamp: external_exports.boolean().optional(),
      /**
       * Optional. Defines labels used in billing reports. Available on Vertex AI only.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls
       */
      labels: external_exports.record(external_exports.string(), external_exports.string()).optional(),
      /**
       * Optional. If specified, the media resolution specified will be used.
       *
       * https://ai.google.dev/api/generate-content#MediaResolution
       */
      mediaResolution: external_exports.enum([
        "MEDIA_RESOLUTION_UNSPECIFIED",
        "MEDIA_RESOLUTION_LOW",
        "MEDIA_RESOLUTION_MEDIUM",
        "MEDIA_RESOLUTION_HIGH"
      ]).optional(),
      /**
       * Optional. Configures the image generation aspect ratio for Gemini models.
       *
       * https://ai.google.dev/gemini-api/docs/image-generation#aspect_ratios
       */
      imageConfig: external_exports.object({
        aspectRatio: external_exports.enum([
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9",
          "1:8",
          "8:1",
          "1:4",
          "4:1"
        ]).optional(),
        imageSize: external_exports.enum(["1K", "2K", "4K", "512"]).optional(),
        /**
         * Optional. Controls the generation of people in images.
         * Vertex AI only.
         */
        personGeneration: external_exports.enum([
          "PERSON_GENERATION_UNSPECIFIED",
          "ALLOW_ALL",
          "ALLOW_ADULT",
          "ALLOW_NONE"
        ]).optional(),
        /**
         * Optional. Controls whether generation of prominent people
         * (celebrities) is allowed. When set together with
         * `personGeneration`, `personGeneration` takes precedence.
         * Vertex AI only.
         *
         * https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/GenerationConfig
         */
        prominentPeople: external_exports.enum([
          "PROMINENT_PEOPLE_UNSPECIFIED",
          "ALLOW_PROMINENT_PEOPLE",
          "BLOCK_PROMINENT_PEOPLE"
        ]).optional(),
        /**
         * Optional. The image output format for generated images.
         * Vertex AI only.
         */
        imageOutputOptions: external_exports.object({
          mimeType: external_exports.enum(["image/jpeg", "image/png"]).optional(),
          compressionQuality: external_exports.number().optional()
        }).optional()
      }).optional(),
      /**
       * Optional. Configuration for grounding retrieval.
       * Used to provide location context for Google Maps and Google Search grounding.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
       */
      retrievalConfig: external_exports.object({
        latLng: external_exports.object({
          latitude: external_exports.number(),
          longitude: external_exports.number()
        }).optional()
      }).optional(),
      /**
       * Optional. When set to true, function call arguments will be streamed
       * incrementally via partialArgs in streaming responses. Only supported
       * on the Vertex AI API (not the Gemini API) and only for Gemini 3+
       * models.
       *
       * @default false
       *
       * https://docs.cloud.google.com/vertex-ai/generative-ai/docs/multimodal/function-calling#streaming-fc
       */
      streamFunctionCallArguments: external_exports.boolean().optional(),
      /**
       * Optional. The service tier to use for the request. Sent as the
       * `serviceTier` body field. Gemini API only.
       */
      serviceTier: external_exports.enum(["standard", "flex", "priority"]).optional(),
      /**
       * Optional. Vertex AI only. Sent as the
       * `X-Vertex-AI-LLM-Shared-Request-Type` request header to select a
       * shared (PayGo) tier. With Provisioned Throughput allocated and
       * `requestType` unset, the request falls back to this tier only if
       * PT capacity is exhausted.
       *
       * https://docs.cloud.google.com/vertex-ai/generative-ai/docs/priority-paygo
       * https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo
       */
      sharedRequestType: external_exports.enum(["priority", "flex", "standard"]).optional(),
      /**
       * Optional. Vertex AI only. Sent as the `X-Vertex-AI-LLM-Request-Type`
       * request header. Set to `'shared'` together with `sharedRequestType`
       * to bypass Provisioned Throughput entirely.
       *
       * https://docs.cloud.google.com/vertex-ai/generative-ai/docs/priority-paygo
       */
      requestType: external_exports.enum(["shared"]).optional()
    })
  )
);
var gemini1ModelPattern = /(^|\/)gemini-1(?:[.-]|$)/i;
var gemini2ModelPattern = /(^|\/)gemini-2(?:[.-]|$)/i;
var gemini25ModelPattern = /(^|\/)gemini-2\.5(?:[.-]|$)/i;
var geminiModelPattern = /(^|\/)gemini-/i;
function isKnownPreGemini2Model(modelId) {
  return gemini1ModelPattern.test(modelId) || /(^|\/)gemini-pro(?:-vision)?$/i.test(modelId) || /(^|\/)gemini-robotics-er-1\.5(?:[.-]|$)/i.test(modelId);
}
__name(isKnownPreGemini2Model, "isKnownPreGemini2Model");
function getGoogleModelCapabilities(modelId) {
  const isGeminiModel2 = geminiModelPattern.test(modelId);
  const isGemini2Model = gemini2ModelPattern.test(modelId);
  const isKnownPreGemini2 = isKnownPreGemini2Model(modelId);
  const isKnownOlderModel = isKnownPreGemini2 || isGemini2Model;
  const usesGemini3Features = isGeminiModel2 && !isKnownOlderModel;
  return {
    supportsGemini2Tools: isGeminiModel2 && !isKnownPreGemini2 || modelId.toLowerCase().includes("nano-banana"),
    supportsFileSearch: gemini25ModelPattern.test(modelId) || usesGemini3Features,
    usesGemini3Features
  };
}
__name(getGoogleModelCapabilities, "getGoogleModelCapabilities");
function prepareTools({
  tools,
  toolChoice,
  modelId,
  isVertexProvider = false
}) {
  tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
  const toolWarnings = [];
  const { supportsGemini2Tools, supportsFileSearch, usesGemini3Features } = getGoogleModelCapabilities(modelId);
  if (tools == null) {
    return { tools: void 0, toolConfig: void 0, toolWarnings };
  }
  const hasFunctionTools = tools.some((tool2) => tool2.type === "function");
  const hasProviderTools = tools.some((tool2) => tool2.type === "provider");
  if (hasFunctionTools && hasProviderTools && !usesGemini3Features) {
    toolWarnings.push({
      type: "unsupported",
      feature: `combination of function and provider-defined tools`
    });
  }
  if (hasProviderTools) {
    const googleTools2 = [];
    const ProviderTools = tools.filter((tool2) => tool2.type === "provider");
    ProviderTools.forEach((tool2) => {
      switch (tool2.id) {
        case "google.google_search":
          if (supportsGemini2Tools) {
            googleTools2.push({ googleSearch: { ...tool2.args } });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "Google Search requires Gemini 2.0 or newer."
            });
          }
          break;
        case "google.enterprise_web_search":
          if (supportsGemini2Tools) {
            googleTools2.push({ enterpriseWebSearch: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "Enterprise Web Search requires Gemini 2.0 or newer."
            });
          }
          break;
        case "google.url_context":
          if (supportsGemini2Tools) {
            googleTools2.push({ urlContext: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The URL context tool is not supported with other Gemini models than Gemini 2."
            });
          }
          break;
        case "google.code_execution":
          if (supportsGemini2Tools) {
            googleTools2.push({ codeExecution: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The code execution tool is not supported with other Gemini models than Gemini 2."
            });
          }
          break;
        case "google.file_search":
          if (supportsFileSearch) {
            googleTools2.push({ fileSearch: { ...tool2.args } });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The file search tool is only supported with Gemini 2.5 models and Gemini 3 models."
            });
          }
          break;
        case "google.vertex_rag_store":
          if (supportsGemini2Tools) {
            googleTools2.push({
              retrieval: {
                vertex_rag_store: {
                  rag_resources: {
                    rag_corpus: tool2.args.ragCorpus
                  },
                  similarity_top_k: tool2.args.topK
                }
              }
            });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The RAG store tool is not supported with other Gemini models than Gemini 2."
            });
          }
          break;
        case "google.google_maps":
          if (supportsGemini2Tools) {
            googleTools2.push({ googleMaps: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The Google Maps grounding tool is not supported with Gemini models other than Gemini 2 or newer."
            });
          }
          break;
        default:
          toolWarnings.push({
            type: "unsupported",
            feature: `provider-defined tool ${tool2.id}`
          });
          break;
      }
    });
    if (hasFunctionTools && usesGemini3Features && googleTools2.length > 0) {
      const functionDeclarations2 = [];
      for (const tool2 of tools) {
        if (tool2.type === "function") {
          functionDeclarations2.push(prepareFunctionDeclaration(tool2));
        }
      }
      const combinedToolConfig = {
        functionCallingConfig: { mode: "VALIDATED" },
        ...!isVertexProvider && {
          includeServerSideToolInvocations: true
        }
      };
      if (toolChoice != null) {
        switch (toolChoice.type) {
          case "auto":
            break;
          case "none":
            combinedToolConfig.functionCallingConfig = { mode: "NONE" };
            break;
          case "required":
            combinedToolConfig.functionCallingConfig = { mode: "ANY" };
            break;
          case "tool":
            combinedToolConfig.functionCallingConfig = {
              mode: "ANY",
              allowedFunctionNames: [toolChoice.toolName]
            };
            break;
        }
      }
      return {
        tools: [...googleTools2, { functionDeclarations: functionDeclarations2 }],
        toolConfig: combinedToolConfig,
        toolWarnings
      };
    }
    return {
      tools: googleTools2.length > 0 ? googleTools2 : void 0,
      toolConfig: void 0,
      toolWarnings
    };
  }
  const functionDeclarations = [];
  let hasStrictTools = false;
  for (const tool2 of tools) {
    switch (tool2.type) {
      case "function":
        functionDeclarations.push(prepareFunctionDeclaration(tool2));
        if (tool2.strict === true) {
          hasStrictTools = true;
        }
        break;
      default:
        toolWarnings.push({
          type: "unsupported",
          feature: `function tool ${tool2.name}`
        });
        break;
    }
  }
  if (toolChoice == null) {
    return {
      tools: [{ functionDeclarations }],
      toolConfig: hasStrictTools ? { functionCallingConfig: { mode: "VALIDATED" } } : void 0,
      toolWarnings
    };
  }
  const type = toolChoice.type;
  switch (type) {
    case "auto":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: {
          functionCallingConfig: {
            mode: hasStrictTools ? "VALIDATED" : "AUTO"
          }
        },
        toolWarnings
      };
    case "none":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: { functionCallingConfig: { mode: "NONE" } },
        toolWarnings
      };
    case "required":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: {
          functionCallingConfig: {
            mode: "ANY"
          }
        },
        toolWarnings
      };
    case "tool":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: {
          functionCallingConfig: {
            mode: "ANY",
            allowedFunctionNames: [toolChoice.toolName]
          }
        },
        toolWarnings
      };
    default: {
      const _exhaustiveCheck = type;
      throw new UnsupportedFunctionalityError({
        functionality: `tool choice type: ${_exhaustiveCheck}`
      });
    }
  }
}
__name(prepareTools, "prepareTools");
function prepareFunctionDeclaration(tool2) {
  var _a24;
  const declaration = {
    name: tool2.name,
    description: (_a24 = tool2.description) != null ? _a24 : ""
  };
  try {
    return {
      ...declaration,
      parameters: convertJSONSchemaToOpenAPISchema(tool2.inputSchema)
    };
  } catch (error) {
    if (!isRecursiveJSONSchemaReferenceError(error)) {
      throw error;
    }
    return {
      ...declaration,
      parametersJsonSchema: tool2.inputSchema
    };
  }
}
__name(prepareFunctionDeclaration, "prepareFunctionDeclaration");
var GoogleJSONAccumulator = class {
  static {
    __name(this, "GoogleJSONAccumulator");
  }
  constructor() {
    this.accumulatedArgs = {};
    this.jsonText = "";
    this.pathStack = [];
    this.stringOpen = false;
  }
  /**
   * Input: [{jsonPath:"$.brightness",numberValue:50}]
   * Output: { currentJSON:{brightness:50}, textDelta:'{"brightness":50' }
   */
  processPartialArgs(partialArgs) {
    let delta = "";
    for (const arg of partialArgs) {
      const rawPath = arg.jsonPath.replace(/^\$\./, "");
      if (!rawPath) continue;
      const segments = parsePath(rawPath);
      const existingValue = getNestedValue(this.accumulatedArgs, segments);
      const isStringContinuation = arg.stringValue != null && existingValue !== void 0;
      if (isStringContinuation) {
        const escaped = JSON.stringify(arg.stringValue).slice(1, -1);
        setNestedValue(
          this.accumulatedArgs,
          segments,
          existingValue + arg.stringValue
        );
        delta += escaped;
        continue;
      }
      const resolved = resolvePartialArgValue(arg);
      if (resolved == null) continue;
      setNestedValue(this.accumulatedArgs, segments, resolved.value);
      delta += this.emitNavigationTo(segments, arg, resolved.json);
    }
    this.jsonText += delta;
    return {
      currentJSON: this.accumulatedArgs,
      textDelta: delta
    };
  }
  /**
   * Input: jsonText='{"brightness":50', accumulatedArgs={brightness:50}
   * Output: { finalJSON:'{"brightness":50}', closingDelta:'}' }
   */
  finalize() {
    const finalArgs = JSON.stringify(this.accumulatedArgs);
    const closingDelta = finalArgs.slice(this.jsonText.length);
    return { finalJSON: finalArgs, closingDelta };
  }
  /**
   * Input: pathStack=[] (first call) or pathStack=[root,...] (subsequent calls)
   * Output: '{' (first call) or '' (subsequent calls)
   */
  ensureRoot() {
    if (this.pathStack.length === 0) {
      this.pathStack.push({ segment: "", isArray: false, childCount: 0 });
      return "{";
    }
    return "";
  }
  /**
   * Emits the JSON text fragment needed to navigate from the current open
   * path to the new leaf at `targetSegments`, then writes the value.
   *
   * Input: targetSegments=["recipe","name"], arg={jsonPath:"$.recipe.name",stringValue:"Lasagna"}, valueJson='"Lasagna"'
   * Output: '{"recipe":{"name":"Lasagna"'
   */
  emitNavigationTo(targetSegments, arg, valueJson) {
    let fragment = "";
    if (this.stringOpen) {
      fragment += '"';
      this.stringOpen = false;
    }
    fragment += this.ensureRoot();
    const targetContainerSegments = targetSegments.slice(0, -1);
    const leafSegment = targetSegments[targetSegments.length - 1];
    const commonDepth = this.findCommonStackDepth(targetContainerSegments);
    fragment += this.closeDownTo(commonDepth);
    fragment += this.openDownTo(targetContainerSegments, leafSegment);
    fragment += this.emitLeaf(leafSegment, arg, valueJson);
    return fragment;
  }
  /**
   * Returns the stack depth to preserve when navigating to a new target
   * container path. Always >= 1 (the root is never popped).
   *
   * Input: stack=[root,"recipe","ingredients",0], target=["recipe","ingredients",1]
   * Output: 3 (keep root+"recipe"+"ingredients")
   */
  findCommonStackDepth(targetContainer) {
    const maxDepth = Math.min(
      this.pathStack.length - 1,
      targetContainer.length
    );
    let common = 0;
    for (let i = 0; i < maxDepth; i++) {
      if (this.pathStack[i + 1].segment === targetContainer[i]) {
        common++;
      } else {
        break;
      }
    }
    return common + 1;
  }
  /**
   * Closes containers from the current stack depth back down to `targetDepth`.
   *
   * Input: this.pathStack=[root,"recipe","ingredients",0], targetDepth=3
   * Output: '}'
   */
  closeDownTo(targetDepth) {
    let fragment = "";
    while (this.pathStack.length > targetDepth) {
      const entry = this.pathStack.pop();
      fragment += entry.isArray ? "]" : "}";
    }
    return fragment;
  }
  /**
   * Opens containers from the current stack depth down to the full target
   * container path, emitting opening `{`, `[`, keys, and commas as needed.
   * `leafSegment` is used to determine if the innermost container is an array.
   *
   * Input: this.pathStack=[root], targetContainer=["recipe","ingredients"], leafSegment=0
   * Output: '"recipe":{"ingredients":['
   */
  openDownTo(targetContainer, leafSegment) {
    let fragment = "";
    const startIdx = this.pathStack.length - 1;
    for (let i = startIdx; i < targetContainer.length; i++) {
      const seg = targetContainer[i];
      const parentEntry = this.pathStack[this.pathStack.length - 1];
      if (parentEntry.childCount > 0) {
        fragment += ",";
      }
      parentEntry.childCount++;
      if (typeof seg === "string") {
        fragment += `${JSON.stringify(seg)}:`;
      }
      const childSeg = i + 1 < targetContainer.length ? targetContainer[i + 1] : leafSegment;
      const isArray = typeof childSeg === "number";
      fragment += isArray ? "[" : "{";
      this.pathStack.push({ segment: seg, isArray, childCount: 0 });
    }
    return fragment;
  }
  /**
   * Emits the comma, key, and value for a leaf entry in the current container.
   *
   * Input: leafSegment="name", arg={stringValue:"Lasagna"}, valueJson='"Lasagna"'
   * Output: '"name":"Lasagna"' (or ',"name":"Lasagna"' if container.childCount > 0)
   */
  emitLeaf(leafSegment, arg, valueJson) {
    let fragment = "";
    const container = this.pathStack[this.pathStack.length - 1];
    if (container.childCount > 0) {
      fragment += ",";
    }
    container.childCount++;
    if (typeof leafSegment === "string") {
      fragment += `${JSON.stringify(leafSegment)}:`;
    }
    if (arg.stringValue != null && arg.willContinue) {
      fragment += valueJson.slice(0, -1);
      this.stringOpen = true;
    } else {
      fragment += valueJson;
    }
    return fragment;
  }
};
function parsePath(rawPath) {
  const segments = [];
  for (const part of rawPath.split(".")) {
    const bracketIdx = part.indexOf("[");
    if (bracketIdx === -1) {
      segments.push(part);
    } else {
      if (bracketIdx > 0) segments.push(part.slice(0, bracketIdx));
      for (const m of part.matchAll(/\[(\d+)\]/g)) {
        segments.push(parseInt(m[1], 10));
      }
    }
  }
  return segments;
}
__name(parsePath, "parsePath");
var hasOwn = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
  return hasOwn.call(obj, key);
}
__name(hasOwnProperty, "hasOwnProperty");
function defineOwnProperty(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    enumerable: true,
    configurable: true,
    writable: true
  });
}
__name(defineOwnProperty, "defineOwnProperty");
function getNestedValue(obj, segments) {
  let current = obj;
  for (const seg of segments) {
    if (current == null || typeof current !== "object") return void 0;
    const currentRecord = current;
    if (!hasOwnProperty(currentRecord, seg)) return void 0;
    current = currentRecord[seg];
  }
  return current;
}
__name(getNestedValue, "getNestedValue");
function setNestedValue(obj, segments, value) {
  let current = obj;
  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i];
    const nextSeg = segments[i + 1];
    if (!hasOwnProperty(current, seg) || current[seg] == null) {
      defineOwnProperty(current, seg, typeof nextSeg === "number" ? [] : {});
    }
    current = current[seg];
  }
  defineOwnProperty(current, segments[segments.length - 1], value);
}
__name(setNestedValue, "setNestedValue");
function resolvePartialArgValue(arg) {
  var _a24, _b17;
  const value = (_b17 = (_a24 = arg.stringValue) != null ? _a24 : arg.numberValue) != null ? _b17 : arg.boolValue;
  if (value != null) return { value, json: JSON.stringify(value) };
  if ("nullValue" in arg) return { value: null, json: "null" };
  return void 0;
}
__name(resolvePartialArgValue, "resolvePartialArgValue");
function mapGoogleGenerativeAIFinishReason({
  finishReason,
  hasToolCalls
}) {
  switch (finishReason) {
    case "STOP":
      return hasToolCalls ? "tool-calls" : "stop";
    case "MAX_TOKENS":
      return "length";
    case "IMAGE_SAFETY":
    case "RECITATION":
    case "SAFETY":
    case "BLOCKLIST":
    case "PROHIBITED_CONTENT":
    case "SPII":
      return "content-filter";
    case "MALFORMED_FUNCTION_CALL":
      return "error";
    case "FINISH_REASON_UNSPECIFIED":
    case "OTHER":
    default:
      return "other";
  }
}
__name(mapGoogleGenerativeAIFinishReason, "mapGoogleGenerativeAIFinishReason");
var configurableSafetySettingCategories = [
  "HARM_CATEGORY_HATE_SPEECH",
  "HARM_CATEGORY_DANGEROUS_CONTENT",
  "HARM_CATEGORY_HARASSMENT",
  "HARM_CATEGORY_SEXUALLY_EXPLICIT"
];
var gemini25ModelPattern2 = /(^|\/)gemini-2\.5(?:[.-]|$)/i;
var googleCloudStorageFunctionResponseUrls = {
  "image/png": [/^gs:\/\/.*$/],
  "image/jpeg": [/^gs:\/\/.*$/],
  "image/webp": [/^gs:\/\/.*$/],
  "application/pdf": [/^gs:\/\/.*$/],
  "text/plain": [/^gs:\/\/.*$/]
};
var GoogleGenerativeAILanguageModel = class {
  static {
    __name(this, "GoogleGenerativeAILanguageModel");
  }
  constructor(modelId, config) {
    this.specificationVersion = "v3";
    var _a24;
    this.modelId = modelId;
    this.config = config;
    this.generateId = (_a24 = config.generateId) != null ? _a24 : generateId;
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var _a24, _b17, _c;
    return (_c = (_b17 = (_a24 = this.config).supportedUrls) == null ? void 0 : _b17.call(_a24)) != null ? _c : {};
  }
  async getArgs({
    prompt,
    maxOutputTokens,
    temperature,
    topP,
    topK,
    frequencyPenalty,
    presencePenalty,
    stopSequences,
    responseFormat,
    seed,
    tools,
    toolChoice,
    providerOptions,
    abortSignal
  }, { isStreaming = false } = {}) {
    var _a24, _b17, _c;
    const warnings = [];
    const providerOptionsName = this.config.provider.includes("vertex") ? "vertex" : "google";
    let googleOptions = await parseProviderOptions({
      provider: providerOptionsName,
      providerOptions,
      schema: googleLanguageModelOptions
    });
    if (googleOptions == null && providerOptionsName !== "google") {
      googleOptions = await parseProviderOptions({
        provider: "google",
        providerOptions,
        schema: googleLanguageModelOptions
      });
    }
    const isVertexProvider = this.config.provider.startsWith("google.vertex.");
    if ((tools == null ? void 0 : tools.some(
      (tool2) => tool2.type === "provider" && tool2.id === "google.vertex_rag_store"
    )) && !isVertexProvider) {
      warnings.push({
        type: "other",
        message: `The 'vertex_rag_store' tool is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
      });
    }
    if ((googleOptions == null ? void 0 : googleOptions.streamFunctionCallArguments) && !isVertexProvider) {
      warnings.push({
        type: "other",
        message: `'streamFunctionCallArguments' is only supported on the Vertex AI API and will be ignored with the current Google provider (${this.config.provider}). See https://docs.cloud.google.com/vertex-ai/generative-ai/docs/multimodal/function-calling#streaming-fc`
      });
    }
    if ((googleOptions == null ? void 0 : googleOptions.serviceTier) && isVertexProvider) {
      warnings.push({
        type: "other",
        message: "'serviceTier' is a Gemini API option and is not supported on Vertex AI. Use 'sharedRequestType' (and optionally 'requestType') instead. See https://docs.cloud.google.com/vertex-ai/generative-ai/docs/priority-paygo"
      });
    }
    if (((googleOptions == null ? void 0 : googleOptions.sharedRequestType) || (googleOptions == null ? void 0 : googleOptions.requestType)) && !isVertexProvider) {
      warnings.push({
        type: "other",
        message: `'sharedRequestType' and 'requestType' are Vertex AI options and are ignored with the current Google provider (${this.config.provider}).`
      });
    }
    const vertexPaygoHeaders = isVertexProvider && ((googleOptions == null ? void 0 : googleOptions.sharedRequestType) || (googleOptions == null ? void 0 : googleOptions.requestType)) ? {
      ...googleOptions.sharedRequestType && {
        "X-Vertex-AI-LLM-Shared-Request-Type": googleOptions.sharedRequestType
      },
      ...googleOptions.requestType && {
        "X-Vertex-AI-LLM-Request-Type": googleOptions.requestType
      }
    } : void 0;
    const bodyServiceTier = isVertexProvider ? void 0 : googleOptions == null ? void 0 : googleOptions.serviceTier;
    let imageConfig = googleOptions == null ? void 0 : googleOptions.imageConfig;
    if (imageConfig != null && !isVertexProvider) {
      const {
        personGeneration,
        prominentPeople,
        imageOutputOptions,
        ...geminiApiImageConfig
      } = imageConfig;
      const droppedImageConfigFields = Object.entries({
        personGeneration,
        prominentPeople,
        imageOutputOptions
      }).filter(([, value]) => value != null).map(([key]) => `'imageConfig.${key}'`);
      if (droppedImageConfigFields.length > 0) {
        warnings.push({
          type: "other",
          message: `${droppedImageConfigFields.join(", ")} ${droppedImageConfigFields.length === 1 ? "is a Vertex AI option and is" : "are Vertex AI options and are"} ignored with the current Google provider (${this.config.provider}).`
        });
        imageConfig = geminiApiImageConfig;
      }
    }
    const isGemmaModel = this.modelId.toLowerCase().startsWith("gemma-");
    const isGemini25DeveloperApiModel = !isVertexProvider && gemini25ModelPattern2.test(this.modelId);
    if (isGemini25DeveloperApiModel && frequencyPenalty != null) {
      warnings.push({
        type: "unsupported",
        feature: "frequencyPenalty"
      });
    }
    if (isGemini25DeveloperApiModel && presencePenalty != null) {
      warnings.push({
        type: "unsupported",
        feature: "presencePenalty"
      });
    }
    const { usesGemini3Features } = getGoogleModelCapabilities(this.modelId);
    const supportedFunctionResponseUrls = usesGemini3Features && isVertexProvider ? googleCloudStorageFunctionResponseUrls : void 0;
    const promptWithDownloadedToolResultFiles = isVertexProvider ? await downloadToolResultFiles(prompt, {
      abortSignal,
      supportedUrls: supportedFunctionResponseUrls
    }) : prompt;
    const { contents, systemInstruction } = convertToGoogleGenerativeAIMessages(
      promptWithDownloadedToolResultFiles,
      {
        isGemmaModel,
        isGemini3Model: usesGemini3Features,
        providerOptionsName,
        supportsFunctionResponseParts: usesGemini3Features,
        onWarning: /* @__PURE__ */ __name((warning) => warnings.push(warning), "onWarning"),
        includeFunctionCallIds: !isVertexProvider,
        supportedFunctionResponseUrls
      }
    );
    const {
      tools: googleTools2,
      toolConfig: googleToolConfig,
      toolWarnings
    } = prepareTools({
      tools,
      toolChoice,
      modelId: this.modelId,
      isVertexProvider
    });
    const streamFunctionCallArguments = isStreaming && isVertexProvider ? (_a24 = googleOptions == null ? void 0 : googleOptions.streamFunctionCallArguments) != null ? _a24 : false : void 0;
    const safetyThreshold = googleOptions == null ? void 0 : googleOptions.threshold;
    const safetySettings = (_b17 = googleOptions == null ? void 0 : googleOptions.safetySettings) != null ? _b17 : safetyThreshold != null ? configurableSafetySettingCategories.map((category) => ({
      category,
      threshold: safetyThreshold
    })) : void 0;
    const toolConfig = googleToolConfig || streamFunctionCallArguments || (googleOptions == null ? void 0 : googleOptions.retrievalConfig) ? {
      ...googleToolConfig,
      ...streamFunctionCallArguments && {
        functionCallingConfig: {
          ...googleToolConfig == null ? void 0 : googleToolConfig.functionCallingConfig,
          streamFunctionCallArguments: true
        }
      },
      ...(googleOptions == null ? void 0 : googleOptions.retrievalConfig) && {
        retrievalConfig: googleOptions.retrievalConfig
      }
    } : void 0;
    return {
      args: {
        generationConfig: {
          // standardized settings:
          maxOutputTokens,
          temperature,
          topK,
          topP,
          frequencyPenalty: isGemini25DeveloperApiModel ? void 0 : frequencyPenalty,
          presencePenalty: isGemini25DeveloperApiModel ? void 0 : presencePenalty,
          stopSequences,
          seed,
          // response format:
          responseMimeType: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? "application/json" : void 0,
          responseSchema: (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && // Google GenAI does not support all OpenAPI Schema features,
          // so this is needed as an escape hatch:
          // TODO convert into provider option
          ((_c = googleOptions == null ? void 0 : googleOptions.structuredOutputs) != null ? _c : true) ? convertJSONSchemaToOpenAPISchema(responseFormat.schema) : void 0,
          ...(googleOptions == null ? void 0 : googleOptions.audioTimestamp) && {
            audioTimestamp: googleOptions.audioTimestamp
          },
          // provider options:
          responseModalities: googleOptions == null ? void 0 : googleOptions.responseModalities,
          thinkingConfig: googleOptions == null ? void 0 : googleOptions.thinkingConfig,
          ...(googleOptions == null ? void 0 : googleOptions.mediaResolution) && {
            mediaResolution: googleOptions.mediaResolution
          },
          ...imageConfig && { imageConfig }
        },
        contents,
        systemInstruction: isGemmaModel ? void 0 : systemInstruction,
        safetySettings,
        tools: googleTools2,
        toolConfig,
        cachedContent: googleOptions == null ? void 0 : googleOptions.cachedContent,
        labels: googleOptions == null ? void 0 : googleOptions.labels,
        serviceTier: bodyServiceTier
      },
      warnings: [...warnings, ...toolWarnings],
      providerOptionsName,
      extraHeaders: vertexPaygoHeaders
    };
  }
  async doGenerate(options) {
    var _a24, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    const { args, warnings, providerOptionsName, extraHeaders } = await this.getArgs(options);
    const mergedHeaders = combineHeaders(
      await resolve(this.config.headers),
      options.headers,
      extraHeaders
    );
    const {
      responseHeaders,
      value: response,
      rawValue: rawResponse
    } = await postJsonToApi({
      url: `${this.config.baseURL}/${getModelPath(
        this.modelId
      )}:generateContent`,
      headers: mergedHeaders,
      body: args,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(responseSchema),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const candidate = (_a24 = response.candidates) == null ? void 0 : _a24[0];
    const promptBlockReason = (_b17 = response.promptFeedback) == null ? void 0 : _b17.blockReason;
    const confirmedPromptBlockReason = isConfirmedPromptBlockReason(
      promptBlockReason
    ) ? promptBlockReason : void 0;
    const isPromptBlocked = (candidate == null ? void 0 : candidate.finishReason) == null && confirmedPromptBlockReason != null;
    const rawFinishReason = (_c = candidate == null ? void 0 : candidate.finishReason) != null ? _c : confirmedPromptBlockReason;
    const content = [];
    const parts = (_e = (_d = candidate == null ? void 0 : candidate.content) == null ? void 0 : _d.parts) != null ? _e : [];
    const usageMetadata = response.usageMetadata;
    let lastCodeExecutionToolCallId;
    let lastServerToolCallId;
    for (const part of parts) {
      if ("executableCode" in part && ((_f = part.executableCode) == null ? void 0 : _f.code)) {
        const toolCallId = this.config.generateId();
        lastCodeExecutionToolCallId = toolCallId;
        content.push({
          type: "tool-call",
          toolCallId,
          toolName: "code_execution",
          input: JSON.stringify(part.executableCode),
          providerExecuted: true
        });
      } else if ("codeExecutionResult" in part && part.codeExecutionResult) {
        content.push({
          type: "tool-result",
          // Results correspond to the most recent executable code part.
          toolCallId: lastCodeExecutionToolCallId,
          toolName: "code_execution",
          result: {
            outcome: part.codeExecutionResult.outcome,
            output: (_g = part.codeExecutionResult.output) != null ? _g : ""
          }
        });
      } else if ("text" in part && part.text != null) {
        const thoughtSignatureMetadata = part.thoughtSignature ? {
          [providerOptionsName]: {
            thoughtSignature: part.thoughtSignature
          }
        } : void 0;
        if (part.text.length === 0) {
          if (thoughtSignatureMetadata != null && content.length > 0) {
            const lastContent = content[content.length - 1];
            lastContent.providerMetadata = thoughtSignatureMetadata;
          }
        } else {
          content.push({
            type: part.thought === true ? "reasoning" : "text",
            text: part.text,
            providerMetadata: thoughtSignatureMetadata
          });
        }
      } else if ("functionCall" in part && part.functionCall.name != null) {
        content.push({
          type: "tool-call",
          toolCallId: (_h = part.functionCall.id) != null ? _h : this.config.generateId(),
          toolName: part.functionCall.name,
          input: JSON.stringify((_i = part.functionCall.args) != null ? _i : {}),
          providerMetadata: part.thoughtSignature ? {
            [providerOptionsName]: {
              thoughtSignature: part.thoughtSignature
            }
          } : void 0
        });
      } else if ("inlineData" in part) {
        const hasThought = part.thought === true;
        const hasThoughtSignature = !!part.thoughtSignature;
        content.push({
          type: "file",
          data: part.inlineData.data,
          mediaType: part.inlineData.mimeType,
          providerMetadata: hasThought || hasThoughtSignature ? {
            [providerOptionsName]: {
              ...hasThought ? { thought: true } : {},
              ...hasThoughtSignature ? { thoughtSignature: part.thoughtSignature } : {}
            }
          } : void 0
        });
      } else if ("toolCall" in part && part.toolCall) {
        const toolCallId = (_j = part.toolCall.id) != null ? _j : this.config.generateId();
        lastServerToolCallId = toolCallId;
        content.push({
          type: "tool-call",
          toolCallId,
          toolName: `server:${part.toolCall.toolType}`,
          input: JSON.stringify((_k = part.toolCall.args) != null ? _k : {}),
          providerExecuted: true,
          dynamic: true,
          providerMetadata: part.thoughtSignature ? {
            [providerOptionsName]: {
              thoughtSignature: part.thoughtSignature,
              serverToolCallId: toolCallId,
              serverToolType: part.toolCall.toolType
            }
          } : {
            [providerOptionsName]: {
              serverToolCallId: toolCallId,
              serverToolType: part.toolCall.toolType
            }
          }
        });
      } else if ("toolResponse" in part && part.toolResponse) {
        const responseToolCallId = (_l = lastServerToolCallId != null ? lastServerToolCallId : part.toolResponse.id) != null ? _l : this.config.generateId();
        content.push({
          type: "tool-result",
          toolCallId: responseToolCallId,
          toolName: `server:${part.toolResponse.toolType}`,
          result: (_m = part.toolResponse.response) != null ? _m : {},
          providerMetadata: part.thoughtSignature ? {
            [providerOptionsName]: {
              thoughtSignature: part.thoughtSignature,
              serverToolCallId: responseToolCallId,
              serverToolType: part.toolResponse.toolType
            }
          } : {
            [providerOptionsName]: {
              serverToolCallId: responseToolCallId,
              serverToolType: part.toolResponse.toolType
            }
          }
        });
        lastServerToolCallId = void 0;
      }
    }
    const sources = (_n = extractSources({
      groundingMetadata: candidate == null ? void 0 : candidate.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? _n : [];
    for (const source of sources) {
      content.push(source);
    }
    return {
      content,
      finishReason: {
        unified: isPromptBlocked ? "content-filter" : mapGoogleGenerativeAIFinishReason({
          finishReason: rawFinishReason,
          // Only count client-executed tool calls for finish reason determination.
          hasToolCalls: content.some(
            (part) => part.type === "tool-call" && !part.providerExecuted
          )
        }),
        raw: rawFinishReason
      },
      usage: convertGoogleGenerativeAIUsage(usageMetadata),
      warnings,
      providerMetadata: {
        [providerOptionsName]: {
          promptFeedback: (_o = response.promptFeedback) != null ? _o : null,
          groundingMetadata: (_p = candidate == null ? void 0 : candidate.groundingMetadata) != null ? _p : null,
          urlContextMetadata: (_q = candidate == null ? void 0 : candidate.urlContextMetadata) != null ? _q : null,
          safetyRatings: (_r = candidate == null ? void 0 : candidate.safetyRatings) != null ? _r : null,
          usageMetadata: usageMetadata != null ? usageMetadata : null,
          finishMessage: (_s = candidate == null ? void 0 : candidate.finishMessage) != null ? _s : null,
          serviceTier: (_t = usageMetadata == null ? void 0 : usageMetadata.serviceTier) != null ? _t : null
        }
      },
      request: { body: args },
      response: {
        // TODO timestamp, model id
        id: (_u = response.responseId) != null ? _u : void 0,
        headers: responseHeaders,
        body: rawResponse
      }
    };
  }
  async doStream(options) {
    const { args, warnings, providerOptionsName, extraHeaders } = await this.getArgs(options, { isStreaming: true });
    const headers = combineHeaders(
      await resolve(this.config.headers),
      options.headers,
      extraHeaders
    );
    const { responseHeaders, value: response } = await postJsonToApi({
      url: `${this.config.baseURL}/${getModelPath(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers,
      body: args,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createEventSourceResponseHandler(chunkSchema),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    let finishReason = {
      unified: "other",
      raw: void 0
    };
    let usage = void 0;
    let promptFeedback = null;
    let lastGroundingMetadata = null;
    let lastUrlContextMetadata = null;
    let lastSafetyRatings = null;
    let lastFinishMessage = null;
    let confirmedPromptBlockReason;
    const generateId3 = this.config.generateId;
    let hasToolCalls = false;
    let hasEmittedResponseMetadata = false;
    let currentTextBlockId = null;
    let currentReasoningBlockId = null;
    let blockCounter = 0;
    const emittedSourceUrls = /* @__PURE__ */ new Set();
    let lastCodeExecutionToolCallId;
    let lastServerToolCallId;
    const activeStreamingToolCalls = [];
    const finishActiveStreamingToolCall = /* @__PURE__ */ __name((controller) => {
      const active = activeStreamingToolCalls.pop();
      if (active == null) {
        return;
      }
      const { finalJSON, closingDelta } = active.accumulator.finalize();
      if (closingDelta.length > 0) {
        controller.enqueue({
          type: "tool-input-delta",
          id: active.toolCallId,
          delta: closingDelta,
          providerMetadata: active.providerMetadata
        });
      }
      controller.enqueue({
        type: "tool-input-end",
        id: active.toolCallId,
        providerMetadata: active.providerMetadata
      });
      controller.enqueue({
        type: "tool-call",
        toolCallId: active.toolCallId,
        toolName: active.toolName,
        input: finalJSON,
        providerMetadata: active.providerMetadata
      });
      hasToolCalls = true;
    }, "finishActiveStreamingToolCall");
    return {
      stream: response.pipeThrough(
        new TransformStream({
          start(controller) {
            controller.enqueue({ type: "stream-start", warnings });
          },
          transform(chunk, controller) {
            var _a24, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
            if (options.includeRawChunks) {
              controller.enqueue({ type: "raw", rawValue: chunk.rawValue });
            }
            if (!chunk.success) {
              controller.enqueue({ type: "error", error: chunk.error });
              return;
            }
            const value = chunk.value;
            if (!hasEmittedResponseMetadata && value.responseId != null) {
              hasEmittedResponseMetadata = true;
              controller.enqueue({
                type: "response-metadata",
                id: value.responseId
              });
            }
            const usageMetadata = value.usageMetadata;
            if (usageMetadata != null) {
              usage = usageMetadata;
            }
            if (value.promptFeedback != null && confirmedPromptBlockReason == null) {
              promptFeedback = value.promptFeedback;
              if (isConfirmedPromptBlockReason(value.promptFeedback.blockReason)) {
                confirmedPromptBlockReason = value.promptFeedback.blockReason;
                finishReason = {
                  unified: "content-filter",
                  raw: confirmedPromptBlockReason
                };
              }
            }
            const candidate = (_a24 = value.candidates) == null ? void 0 : _a24[0];
            if (candidate != null) {
              if (candidate.groundingMetadata != null) {
                lastGroundingMetadata = candidate.groundingMetadata;
              }
              if (candidate.urlContextMetadata != null) {
                lastUrlContextMetadata = candidate.urlContextMetadata;
              }
              if (candidate.safetyRatings != null) {
                lastSafetyRatings = candidate.safetyRatings;
              }
              if (candidate.finishMessage != null) {
                lastFinishMessage = candidate.finishMessage;
              }
            }
            if (confirmedPromptBlockReason != null || candidate == null) {
              return;
            }
            const content = candidate.content;
            const sources = extractSources({
              groundingMetadata: candidate.groundingMetadata,
              generateId: generateId3
            });
            if (sources != null) {
              for (const source of sources) {
                if (source.sourceType === "url" && !emittedSourceUrls.has(source.url)) {
                  emittedSourceUrls.add(source.url);
                  controller.enqueue(source);
                }
              }
            }
            if (content != null) {
              const parts = (_b17 = content.parts) != null ? _b17 : [];
              for (const part of parts) {
                if ("executableCode" in part && ((_c = part.executableCode) == null ? void 0 : _c.code)) {
                  const toolCallId = generateId3();
                  lastCodeExecutionToolCallId = toolCallId;
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId,
                    toolName: "code_execution",
                    input: JSON.stringify(part.executableCode),
                    providerExecuted: true
                  });
                } else if ("codeExecutionResult" in part && part.codeExecutionResult) {
                  const toolCallId = lastCodeExecutionToolCallId;
                  if (toolCallId) {
                    controller.enqueue({
                      type: "tool-result",
                      toolCallId,
                      toolName: "code_execution",
                      result: {
                        outcome: part.codeExecutionResult.outcome,
                        output: (_d = part.codeExecutionResult.output) != null ? _d : ""
                      }
                    });
                  }
                } else if ("text" in part && part.text != null) {
                  const thoughtSignatureMetadata = part.thoughtSignature ? {
                    [providerOptionsName]: {
                      thoughtSignature: part.thoughtSignature
                    }
                  } : void 0;
                  if (part.text.length === 0) {
                    if (thoughtSignatureMetadata != null && currentTextBlockId !== null) {
                      controller.enqueue({
                        type: "text-delta",
                        id: currentTextBlockId,
                        delta: "",
                        providerMetadata: thoughtSignatureMetadata
                      });
                    }
                  } else if (part.thought === true) {
                    if (currentTextBlockId !== null) {
                      controller.enqueue({
                        type: "text-end",
                        id: currentTextBlockId
                      });
                      currentTextBlockId = null;
                    }
                    if (currentReasoningBlockId === null) {
                      currentReasoningBlockId = String(blockCounter++);
                      controller.enqueue({
                        type: "reasoning-start",
                        id: currentReasoningBlockId,
                        providerMetadata: thoughtSignatureMetadata
                      });
                    }
                    controller.enqueue({
                      type: "reasoning-delta",
                      id: currentReasoningBlockId,
                      delta: part.text,
                      providerMetadata: thoughtSignatureMetadata
                    });
                  } else {
                    if (currentReasoningBlockId !== null) {
                      controller.enqueue({
                        type: "reasoning-end",
                        id: currentReasoningBlockId
                      });
                      currentReasoningBlockId = null;
                    }
                    if (currentTextBlockId === null) {
                      currentTextBlockId = String(blockCounter++);
                      controller.enqueue({
                        type: "text-start",
                        id: currentTextBlockId,
                        providerMetadata: thoughtSignatureMetadata
                      });
                    }
                    controller.enqueue({
                      type: "text-delta",
                      id: currentTextBlockId,
                      delta: part.text,
                      providerMetadata: thoughtSignatureMetadata
                    });
                  }
                } else if ("inlineData" in part) {
                  if (currentTextBlockId !== null) {
                    controller.enqueue({
                      type: "text-end",
                      id: currentTextBlockId
                    });
                    currentTextBlockId = null;
                  }
                  if (currentReasoningBlockId !== null) {
                    controller.enqueue({
                      type: "reasoning-end",
                      id: currentReasoningBlockId
                    });
                    currentReasoningBlockId = null;
                  }
                  const hasThought = part.thought === true;
                  const hasThoughtSignature = !!part.thoughtSignature;
                  const fileMeta = hasThought || hasThoughtSignature ? {
                    [providerOptionsName]: {
                      ...hasThought ? { thought: true } : {},
                      ...hasThoughtSignature ? { thoughtSignature: part.thoughtSignature } : {}
                    }
                  } : void 0;
                  controller.enqueue({
                    type: "file",
                    mediaType: part.inlineData.mimeType,
                    data: part.inlineData.data,
                    providerMetadata: fileMeta
                  });
                } else if ("toolCall" in part && part.toolCall) {
                  const toolCallId = (_e = part.toolCall.id) != null ? _e : generateId3();
                  lastServerToolCallId = toolCallId;
                  const serverMeta = {
                    [providerOptionsName]: {
                      ...part.thoughtSignature ? { thoughtSignature: part.thoughtSignature } : {},
                      serverToolCallId: toolCallId,
                      serverToolType: part.toolCall.toolType
                    }
                  };
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId,
                    toolName: `server:${part.toolCall.toolType}`,
                    input: JSON.stringify((_f = part.toolCall.args) != null ? _f : {}),
                    providerExecuted: true,
                    dynamic: true,
                    providerMetadata: serverMeta
                  });
                } else if ("toolResponse" in part && part.toolResponse) {
                  const responseToolCallId = (_g = lastServerToolCallId != null ? lastServerToolCallId : part.toolResponse.id) != null ? _g : generateId3();
                  const serverMeta = {
                    [providerOptionsName]: {
                      ...part.thoughtSignature ? { thoughtSignature: part.thoughtSignature } : {},
                      serverToolCallId: responseToolCallId,
                      serverToolType: part.toolResponse.toolType
                    }
                  };
                  controller.enqueue({
                    type: "tool-result",
                    toolCallId: responseToolCallId,
                    toolName: `server:${part.toolResponse.toolType}`,
                    result: (_h = part.toolResponse.response) != null ? _h : {},
                    providerMetadata: serverMeta
                  });
                  lastServerToolCallId = void 0;
                }
              }
              for (const part of parts) {
                if (!("functionCall" in part)) continue;
                const providerMeta = part.thoughtSignature ? {
                  [providerOptionsName]: {
                    thoughtSignature: part.thoughtSignature
                  }
                } : void 0;
                const isStreamingChunk = part.functionCall.partialArgs != null || part.functionCall.name != null && part.functionCall.willContinue === true;
                const isTerminalChunk = part.functionCall.name == null && part.functionCall.args == null && part.functionCall.partialArgs == null && part.functionCall.willContinue == null;
                const isCompleteCall = part.functionCall.name != null && part.functionCall.args != null && part.functionCall.partialArgs == null;
                const isNoArgsCompleteCall = part.functionCall.name != null && part.functionCall.args == null && part.functionCall.partialArgs == null && part.functionCall.willContinue !== true;
                if (isStreamingChunk) {
                  if (part.functionCall.name != null) {
                    const toolCallId = (_i = part.functionCall.id) != null ? _i : generateId3();
                    const accumulator = new GoogleJSONAccumulator();
                    activeStreamingToolCalls.push({
                      toolCallId,
                      toolName: part.functionCall.name,
                      accumulator,
                      providerMetadata: providerMeta
                    });
                    controller.enqueue({
                      type: "tool-input-start",
                      id: toolCallId,
                      toolName: part.functionCall.name,
                      providerMetadata: providerMeta
                    });
                    if (part.functionCall.partialArgs != null) {
                      const partialArgs = part.functionCall.partialArgs;
                      const { textDelta } = accumulator.processPartialArgs(partialArgs);
                      if (textDelta.length > 0) {
                        controller.enqueue({
                          type: "tool-input-delta",
                          id: toolCallId,
                          delta: textDelta,
                          providerMetadata: providerMeta
                        });
                      }
                      if (part.functionCall.willContinue !== true && partialArgs.every((arg) => arg.willContinue !== true)) {
                        finishActiveStreamingToolCall(controller);
                      }
                    }
                  } else if (part.functionCall.partialArgs != null && activeStreamingToolCalls.length > 0) {
                    const active = activeStreamingToolCalls[activeStreamingToolCalls.length - 1];
                    const partialArgs = part.functionCall.partialArgs;
                    const { textDelta } = active.accumulator.processPartialArgs(partialArgs);
                    if (textDelta.length > 0) {
                      controller.enqueue({
                        type: "tool-input-delta",
                        id: active.toolCallId,
                        delta: textDelta,
                        providerMetadata: providerMeta
                      });
                    }
                    if (part.functionCall.willContinue !== true && partialArgs.every((arg) => arg.willContinue !== true)) {
                      finishActiveStreamingToolCall(controller);
                    }
                  }
                } else if (isTerminalChunk && activeStreamingToolCalls.length > 0) {
                  finishActiveStreamingToolCall(controller);
                } else if (isCompleteCall) {
                  const toolCallId = (_j = part.functionCall.id) != null ? _j : generateId3();
                  const toolName = part.functionCall.name;
                  const args2 = typeof part.functionCall.args === "string" ? part.functionCall.args : JSON.stringify((_k = part.functionCall.args) != null ? _k : {});
                  controller.enqueue({
                    type: "tool-input-start",
                    id: toolCallId,
                    toolName,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-input-delta",
                    id: toolCallId,
                    delta: args2,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-input-end",
                    id: toolCallId,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId,
                    toolName,
                    input: args2,
                    providerMetadata: providerMeta
                  });
                  hasToolCalls = true;
                } else if (isNoArgsCompleteCall) {
                  const toolCallId = (_l = part.functionCall.id) != null ? _l : generateId3();
                  const toolName = part.functionCall.name;
                  controller.enqueue({
                    type: "tool-input-start",
                    id: toolCallId,
                    toolName,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-input-end",
                    id: toolCallId,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId,
                    toolName,
                    input: "{}",
                    providerMetadata: providerMeta
                  });
                  hasToolCalls = true;
                }
              }
            }
            if (candidate.finishReason != null) {
              finishReason = {
                unified: mapGoogleGenerativeAIFinishReason({
                  finishReason: candidate.finishReason,
                  hasToolCalls
                }),
                raw: candidate.finishReason
              };
            }
          },
          flush(controller) {
            var _a24;
            if (currentTextBlockId !== null) {
              controller.enqueue({
                type: "text-end",
                id: currentTextBlockId
              });
            }
            if (currentReasoningBlockId !== null) {
              controller.enqueue({
                type: "reasoning-end",
                id: currentReasoningBlockId
              });
            }
            controller.enqueue({
              type: "finish",
              finishReason,
              usage: convertGoogleGenerativeAIUsage(usage),
              providerMetadata: {
                [providerOptionsName]: {
                  promptFeedback,
                  groundingMetadata: lastGroundingMetadata,
                  urlContextMetadata: lastUrlContextMetadata,
                  safetyRatings: lastSafetyRatings,
                  usageMetadata: usage != null ? usage : null,
                  finishMessage: lastFinishMessage,
                  serviceTier: (_a24 = usage == null ? void 0 : usage.serviceTier) != null ? _a24 : null
                }
              }
            });
          }
        })
      ),
      response: { headers: responseHeaders },
      request: { body: args }
    };
  }
};
function extractSources({
  groundingMetadata,
  generateId: generateId3
}) {
  var _a24, _b17, _c, _d, _e, _f;
  if (!(groundingMetadata == null ? void 0 : groundingMetadata.groundingChunks)) {
    return void 0;
  }
  const sources = [];
  for (const chunk of groundingMetadata.groundingChunks) {
    if (chunk.web != null) {
      sources.push({
        type: "source",
        sourceType: "url",
        id: generateId3(),
        url: chunk.web.uri,
        title: (_a24 = chunk.web.title) != null ? _a24 : void 0
      });
    } else if (chunk.image != null) {
      sources.push({
        type: "source",
        sourceType: "url",
        id: generateId3(),
        // Google requires attribution to the source URI, not the actual image URI.
        // TODO: add another type in v7 to allow both the image and source URL to be included separately
        url: chunk.image.sourceUri,
        title: (_b17 = chunk.image.title) != null ? _b17 : void 0
      });
    } else if (chunk.retrievedContext != null) {
      const uri = chunk.retrievedContext.uri;
      const fileSearchStore = chunk.retrievedContext.fileSearchStore;
      if (uri && (uri.startsWith("http://") || uri.startsWith("https://"))) {
        sources.push({
          type: "source",
          sourceType: "url",
          id: generateId3(),
          url: uri,
          title: (_c = chunk.retrievedContext.title) != null ? _c : void 0
        });
      } else if (uri) {
        const title = (_d = chunk.retrievedContext.title) != null ? _d : "Unknown Document";
        let mediaType = "application/octet-stream";
        let filename = void 0;
        if (uri.endsWith(".pdf")) {
          mediaType = "application/pdf";
          filename = uri.split("/").pop();
        } else if (uri.endsWith(".txt")) {
          mediaType = "text/plain";
          filename = uri.split("/").pop();
        } else if (uri.endsWith(".docx")) {
          mediaType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
          filename = uri.split("/").pop();
        } else if (uri.endsWith(".doc")) {
          mediaType = "application/msword";
          filename = uri.split("/").pop();
        } else if (uri.match(/\.(md|markdown)$/)) {
          mediaType = "text/markdown";
          filename = uri.split("/").pop();
        } else {
          filename = uri.split("/").pop();
        }
        sources.push({
          type: "source",
          sourceType: "document",
          id: generateId3(),
          mediaType,
          title,
          filename
        });
      } else if (fileSearchStore) {
        const title = (_e = chunk.retrievedContext.title) != null ? _e : "Unknown Document";
        sources.push({
          type: "source",
          sourceType: "document",
          id: generateId3(),
          mediaType: "application/octet-stream",
          title,
          filename: fileSearchStore.split("/").pop()
        });
      }
    } else if (chunk.maps != null) {
      if (chunk.maps.uri) {
        sources.push({
          type: "source",
          sourceType: "url",
          id: generateId3(),
          url: chunk.maps.uri,
          title: (_f = chunk.maps.title) != null ? _f : void 0
        });
      }
    }
  }
  return sources.length > 0 ? sources : void 0;
}
__name(extractSources, "extractSources");
var getGroundingMetadataSchema = /* @__PURE__ */ __name(() => external_exports.object({
  webSearchQueries: external_exports.array(external_exports.string()).nullish(),
  imageSearchQueries: external_exports.array(external_exports.string()).nullish(),
  retrievalQueries: external_exports.array(external_exports.string()).nullish(),
  searchEntryPoint: external_exports.object({ renderedContent: external_exports.string() }).nullish(),
  groundingChunks: external_exports.array(
    external_exports.object({
      web: external_exports.object({ uri: external_exports.string(), title: external_exports.string().nullish() }).nullish(),
      image: external_exports.object({
        sourceUri: external_exports.string(),
        imageUri: external_exports.string(),
        title: external_exports.string().nullish(),
        domain: external_exports.string().nullish()
      }).nullish(),
      retrievedContext: external_exports.object({
        uri: external_exports.string().nullish(),
        title: external_exports.string().nullish(),
        text: external_exports.string().nullish(),
        fileSearchStore: external_exports.string().nullish(),
        customMetadata: external_exports.array(
          external_exports.object({
            key: external_exports.string(),
            stringValue: external_exports.string().nullish(),
            numericValue: external_exports.number().nullish(),
            stringListValue: external_exports.object({ values: external_exports.array(external_exports.string()).nullish() }).nullish()
          })
        ).nullish()
      }).nullish(),
      maps: external_exports.object({
        uri: external_exports.string().nullish(),
        title: external_exports.string().nullish(),
        text: external_exports.string().nullish(),
        placeId: external_exports.string().nullish()
      }).nullish()
    })
  ).nullish(),
  groundingSupports: external_exports.array(
    external_exports.object({
      segment: external_exports.object({
        startIndex: external_exports.number().nullish(),
        endIndex: external_exports.number().nullish(),
        text: external_exports.string().nullish()
      }).nullish(),
      segment_text: external_exports.string().nullish(),
      groundingChunkIndices: external_exports.array(external_exports.number()).nullish(),
      supportChunkIndices: external_exports.array(external_exports.number()).nullish(),
      confidenceScores: external_exports.array(external_exports.number()).nullish(),
      confidenceScore: external_exports.array(external_exports.number()).nullish()
    })
  ).nullish(),
  retrievalMetadata: external_exports.union([
    external_exports.object({
      webDynamicRetrievalScore: external_exports.number()
    }),
    external_exports.object({})
  ]).nullish()
}), "getGroundingMetadataSchema");
var partialArgSchema = external_exports.object({
  jsonPath: external_exports.string(),
  stringValue: external_exports.string().nullish(),
  numberValue: external_exports.number().nullish(),
  boolValue: external_exports.boolean().nullish(),
  nullValue: external_exports.unknown().nullish(),
  willContinue: external_exports.boolean().nullish()
});
var getContentSchema = /* @__PURE__ */ __name(() => external_exports.object({
  parts: external_exports.array(
    external_exports.union([
      // note: order matters since text can be fully empty
      external_exports.object({
        functionCall: external_exports.object({
          id: external_exports.string().nullish(),
          name: external_exports.string().nullish(),
          args: external_exports.unknown().nullish(),
          partialArgs: external_exports.array(partialArgSchema).nullish(),
          willContinue: external_exports.boolean().nullish()
        }),
        thoughtSignature: external_exports.string().nullish()
      }),
      external_exports.object({
        inlineData: external_exports.object({
          mimeType: external_exports.string(),
          data: external_exports.string()
        }),
        thought: external_exports.boolean().nullish(),
        thoughtSignature: external_exports.string().nullish()
      }),
      external_exports.object({
        toolCall: external_exports.object({
          toolType: external_exports.string(),
          args: external_exports.unknown().nullish(),
          id: external_exports.string()
        }),
        thoughtSignature: external_exports.string().nullish()
      }),
      external_exports.object({
        toolResponse: external_exports.object({
          toolType: external_exports.string(),
          response: external_exports.unknown().nullish(),
          id: external_exports.string()
        }),
        thoughtSignature: external_exports.string().nullish()
      }),
      external_exports.object({
        executableCode: external_exports.object({
          language: external_exports.string(),
          code: external_exports.string()
        }).nullish(),
        codeExecutionResult: external_exports.object({
          outcome: external_exports.string(),
          output: external_exports.string().nullish()
        }).nullish(),
        text: external_exports.string().nullish(),
        thought: external_exports.boolean().nullish(),
        thoughtSignature: external_exports.string().nullish()
      })
    ])
  ).nullish()
}), "getContentSchema");
var getSafetyRatingSchema = /* @__PURE__ */ __name(() => external_exports.object({
  category: external_exports.string().nullish(),
  probability: external_exports.string().nullish(),
  probabilityScore: external_exports.number().nullish(),
  severity: external_exports.string().nullish(),
  severityScore: external_exports.number().nullish(),
  blocked: external_exports.boolean().nullish()
}), "getSafetyRatingSchema");
var tokenDetailsSchema = external_exports.array(
  external_exports.object({
    modality: external_exports.string(),
    tokenCount: external_exports.number()
  }).catchall(external_exports.json())
).nullish();
var usageSchema = external_exports.object({
  cachedContentTokenCount: external_exports.number().nullish(),
  thoughtsTokenCount: external_exports.number().nullish(),
  promptTokenCount: external_exports.number().nullish(),
  candidatesTokenCount: external_exports.number().nullish(),
  toolUsePromptTokenCount: external_exports.number().nullish(),
  totalTokenCount: external_exports.number().nullish(),
  // https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/GenerateContentResponse#TrafficType
  trafficType: external_exports.string().nullish(),
  serviceTier: external_exports.string().nullish(),
  // https://ai.google.dev/api/generate-content#Modality
  promptTokensDetails: tokenDetailsSchema,
  cacheTokensDetails: tokenDetailsSchema,
  candidatesTokensDetails: tokenDetailsSchema,
  toolUsePromptTokensDetails: tokenDetailsSchema
}).catchall(external_exports.json());
var getUrlContextMetadataSchema = /* @__PURE__ */ __name(() => external_exports.object({
  urlMetadata: external_exports.array(
    external_exports.object({
      retrievedUrl: external_exports.string(),
      urlRetrievalStatus: external_exports.string()
    })
  ).nullish()
}), "getUrlContextMetadataSchema");
var responseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      responseId: external_exports.string().nullish(),
      candidates: external_exports.array(
        external_exports.object({
          content: getContentSchema().nullish().or(external_exports.object({}).strict()),
          finishReason: external_exports.string().nullish(),
          finishMessage: external_exports.string().nullish(),
          safetyRatings: external_exports.array(getSafetyRatingSchema()).nullish(),
          groundingMetadata: getGroundingMetadataSchema().nullish(),
          urlContextMetadata: getUrlContextMetadataSchema().nullish()
        })
      ).nullish(),
      usageMetadata: usageSchema.nullish(),
      promptFeedback: external_exports.object({
        blockReason: external_exports.string().nullish(),
        safetyRatings: external_exports.array(getSafetyRatingSchema()).nullish()
      }).nullish()
    })
  )
);
var chunkSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      responseId: external_exports.string().nullish(),
      candidates: external_exports.array(
        external_exports.object({
          content: getContentSchema().nullish(),
          finishReason: external_exports.string().nullish(),
          finishMessage: external_exports.string().nullish(),
          safetyRatings: external_exports.array(getSafetyRatingSchema()).nullish(),
          groundingMetadata: getGroundingMetadataSchema().nullish(),
          urlContextMetadata: getUrlContextMetadataSchema().nullish()
        })
      ).nullish(),
      usageMetadata: usageSchema.nullish(),
      promptFeedback: external_exports.object({
        blockReason: external_exports.string().nullish(),
        safetyRatings: external_exports.array(getSafetyRatingSchema()).nullish()
      }).nullish()
    })
  )
);
function isConfirmedPromptBlockReason(blockReason) {
  return blockReason != null && blockReason !== "" && blockReason !== "BLOCK_REASON_UNSPECIFIED" && blockReason !== "BLOCKED_REASON_UNSPECIFIED";
}
__name(isConfirmedPromptBlockReason, "isConfirmedPromptBlockReason");
var codeExecution = createProviderToolFactoryWithOutputSchema({
  id: "google.code_execution",
  inputSchema: external_exports.object({
    language: external_exports.string().describe("The programming language of the code."),
    code: external_exports.string().describe("The code to be executed.")
  }),
  outputSchema: external_exports.object({
    outcome: external_exports.string().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
    output: external_exports.string().describe("The output from the code execution.")
  })
});
var enterpriseWebSearch = createProviderToolFactory({
  id: "google.enterprise_web_search",
  inputSchema: lazySchema(() => zodSchema(external_exports.object({})))
});
var fileSearchArgsBaseSchema = external_exports.object({
  /** The names of the file_search_stores to retrieve from.
   *  Example: `fileSearchStores/my-file-search-store-123`
   */
  fileSearchStoreNames: external_exports.array(external_exports.string()).describe(
    "The names of the file_search_stores to retrieve from. Example: `fileSearchStores/my-file-search-store-123`"
  ),
  /** The number of file search retrieval chunks to retrieve. */
  topK: external_exports.number().int().positive().describe("The number of file search retrieval chunks to retrieve.").optional(),
  /** Metadata filter to apply to the file search retrieval documents.
   *  See https://google.aip.dev/160 for the syntax of the filter expression.
   */
  metadataFilter: external_exports.string().describe(
    "Metadata filter to apply to the file search retrieval documents. See https://google.aip.dev/160 for the syntax of the filter expression."
  ).optional()
}).passthrough();
var fileSearchArgsSchema = lazySchema(
  () => zodSchema(fileSearchArgsBaseSchema)
);
var fileSearch = createProviderToolFactory({
  id: "google.file_search",
  inputSchema: fileSearchArgsSchema
});
var googleMaps = createProviderToolFactory({
  id: "google.google_maps",
  inputSchema: lazySchema(() => zodSchema(external_exports.object({})))
});
var googleSearchToolArgsBaseSchema = external_exports.object({
  searchTypes: external_exports.object({
    webSearch: external_exports.object({}).optional(),
    imageSearch: external_exports.object({}).optional()
  }).optional(),
  timeRangeFilter: external_exports.object({
    startTime: external_exports.string(),
    endTime: external_exports.string()
  }).optional()
}).passthrough();
var googleSearchToolArgsSchema = lazySchema(
  () => zodSchema(googleSearchToolArgsBaseSchema)
);
var googleSearch = createProviderToolFactory(
  {
    id: "google.google_search",
    inputSchema: googleSearchToolArgsSchema
  }
);
var urlContext = createProviderToolFactory({
  id: "google.url_context",
  inputSchema: lazySchema(() => zodSchema(external_exports.object({})))
});
var vertexRagStore = createProviderToolFactory({
  id: "google.vertex_rag_store",
  inputSchema: external_exports.object({
    ragCorpus: external_exports.string(),
    topK: external_exports.number().optional()
  })
});
var googleTools = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch,
  /**
   * Creates an Enterprise Web Search tool for grounding responses using a compliance-focused web index.
   * Designed for highly-regulated industries (finance, healthcare, public sector).
   * Does not log customer data and supports VPC service controls.
   * Must have name "enterprise_web_search".
   *
   * @note Only available on Vertex AI. Requires Gemini 2.0 or newer.
   *
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise
   */
  enterpriseWebSearch,
  /**
   * Creates a Google Maps grounding tool that gives the model access to Google Maps data.
   * Must have name "google_maps".
   *
   * @see https://ai.google.dev/gemini-api/docs/maps-grounding
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
   */
  googleMaps,
  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext,
  /**
   * Enables Retrieval Augmented Generation (RAG) via the Gemini File Search tool.
   * Must have name "file_search".
   *
   * @param fileSearchStoreNames - Fully-qualified File Search store resource names.
   * @param metadataFilter - Optional filter expression to restrict the files that can be retrieved.
   * @param topK - Optional result limit for the number of chunks returned from File Search.
   *
   * @see https://ai.google.dev/gemini-api/docs/file-search
   */
  fileSearch,
  /**
   * A tool that enables the model to generate and run Python code.
   * Must have name "code_execution".
   *
   * @note Ensure the selected model supports Code Execution.
   * Multi-tool usage with the code execution tool is typically compatible with Gemini >=2 models.
   *
   * @see https://ai.google.dev/gemini-api/docs/code-execution (Google AI)
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/code-execution-api (Vertex AI)
   */
  codeExecution,
  /**
   * Creates a Vertex RAG Store tool that enables the model to perform RAG searches against a Vertex RAG Store.
   * Must have name "vertex_rag_store".
   */
  vertexRagStore
};
var GoogleGenerativeAIImageModel = class {
  static {
    __name(this, "GoogleGenerativeAIImageModel");
  }
  constructor(modelId, settings, config) {
    this.modelId = modelId;
    this.settings = settings;
    this.config = config;
    this.specificationVersion = "v3";
  }
  get maxImagesPerCall() {
    if (this.settings.maxImagesPerCall != null) {
      return this.settings.maxImagesPerCall;
    }
    if (isGeminiModel(this.modelId)) {
      return 10;
    }
    return 4;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate(options) {
    if (isGeminiModel(this.modelId)) {
      return this.doGenerateGemini(options);
    }
    return this.doGenerateImagen(options);
  }
  async doGenerateImagen(options) {
    var _a24, _b17, _c;
    const {
      prompt,
      n = 1,
      size,
      aspectRatio = "1:1",
      seed,
      providerOptions,
      headers,
      abortSignal,
      files,
      mask
    } = options;
    const warnings = [];
    if (files != null && files.length > 0) {
      throw new Error(
        "Google Generative AI does not support image editing with Imagen models. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities."
      );
    }
    if (mask != null) {
      throw new Error(
        "Google Generative AI does not support image editing with masks. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities."
      );
    }
    if (size != null) {
      warnings.push({
        type: "unsupported",
        feature: "size",
        details: "This model does not support the `size` option. Use `aspectRatio` instead."
      });
    }
    if (seed != null) {
      warnings.push({
        type: "unsupported",
        feature: "seed",
        details: "This model does not support the `seed` option through this provider."
      });
    }
    const googleOptions = await parseProviderOptions({
      provider: "google",
      providerOptions,
      schema: googleImageModelOptionsSchema
    });
    const currentDate = (_c = (_b17 = (_a24 = this.config._internal) == null ? void 0 : _a24.currentDate) == null ? void 0 : _b17.call(_a24)) != null ? _c : /* @__PURE__ */ new Date();
    const parameters = {
      sampleCount: n
    };
    if (aspectRatio != null) {
      parameters.aspectRatio = aspectRatio;
    }
    if (googleOptions) {
      const { googleSearch: imagenGoogleSearch, ...imagenOptions } = googleOptions;
      if (imagenGoogleSearch != null) {
        warnings.push({
          type: "unsupported",
          feature: "googleSearch",
          details: "Google Search grounding is only supported on Gemini image models."
        });
      }
      Object.assign(parameters, imagenOptions);
    }
    const body = {
      instances: [{ prompt }],
      parameters
    };
    const { responseHeaders, value: response } = await postJsonToApi({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: combineHeaders(await resolve(this.config.headers), headers),
      body,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        googleImageResponseSchema
      ),
      abortSignal,
      fetch: this.config.fetch
    });
    const imagePredictions = response.predictions.filter(
      (prediction) => "bytesBase64Encoded" in prediction
    );
    return {
      images: imagePredictions.map(
        ({ bytesBase64Encoded }) => bytesBase64Encoded
      ),
      ...response.predictions.some(
        (prediction) => "raiFilteredReason" in prediction
      ) && { isRetryable: false },
      warnings,
      providerMetadata: {
        google: {
          images: imagePredictions.map(() => ({
            // Add any prediction-specific metadata here
          }))
        }
      },
      response: {
        timestamp: currentDate,
        modelId: this.modelId,
        headers: responseHeaders
      }
    };
  }
  async doGenerateGemini(options) {
    var _a24, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const {
      prompt,
      n,
      size,
      aspectRatio,
      seed,
      providerOptions,
      headers,
      abortSignal,
      files,
      mask
    } = options;
    const warnings = [];
    if (mask != null) {
      throw new Error(
        "Gemini image models do not support mask-based image editing."
      );
    }
    if (n != null && n > 1) {
      throw new Error(
        "Gemini image models do not support generating a set number of images per call. Use n=1 or omit the n parameter."
      );
    }
    if (size != null) {
      warnings.push({
        type: "unsupported",
        feature: "size",
        details: "This model does not support the `size` option. Use `aspectRatio` instead."
      });
    }
    const userContent = [];
    if (prompt != null) {
      userContent.push({ type: "text", text: prompt });
    }
    if (files != null && files.length > 0) {
      for (const file of files) {
        if (file.type === "url") {
          userContent.push({
            type: "file",
            data: new URL(file.url),
            mediaType: "image/*"
          });
        } else {
          userContent.push({
            type: "file",
            data: typeof file.data === "string" ? file.data : new Uint8Array(file.data),
            mediaType: file.mediaType
          });
        }
      }
    }
    const languageModelPrompt = [
      { role: "user", content: userContent }
    ];
    const googleImageOptions = await parseProviderOptions({
      provider: "google",
      providerOptions,
      schema: googleImageModelOptionsSchema
    });
    const { googleSearch: _strippedGoogleSearch, ...passthroughGoogleOptions } = (_a24 = providerOptions == null ? void 0 : providerOptions.google) != null ? _a24 : {};
    const languageModel = new GoogleGenerativeAILanguageModel(this.modelId, {
      provider: this.config.provider,
      baseURL: this.config.baseURL,
      headers: (_b17 = this.config.headers) != null ? _b17 : {},
      fetch: this.config.fetch,
      generateId: (_c = this.config.generateId) != null ? _c : generateId
    });
    const result = await languageModel.doGenerate({
      prompt: languageModelPrompt,
      seed,
      providerOptions: {
        google: {
          responseModalities: ["IMAGE"],
          imageConfig: aspectRatio ? {
            aspectRatio
          } : void 0,
          ...passthroughGoogleOptions
        }
      },
      tools: (googleImageOptions == null ? void 0 : googleImageOptions.googleSearch) != null ? [
        {
          type: "provider",
          id: "google.google_search",
          name: "google_search",
          args: googleImageOptions.googleSearch
        }
      ] : void 0,
      headers,
      abortSignal
    });
    const currentDate = (_f = (_e = (_d = this.config._internal) == null ? void 0 : _d.currentDate) == null ? void 0 : _e.call(_d)) != null ? _f : /* @__PURE__ */ new Date();
    const images = [];
    for (const part of result.content) {
      if (part.type === "file" && part.mediaType.startsWith("image/")) {
        images.push(convertToBase64(part.data));
      }
    }
    const languageModelGoogleMetadata = (_h = (_g = result.providerMetadata) == null ? void 0 : _g.google) != null ? _h : {};
    return {
      images,
      ...result.finishReason.unified === "content-filter" ? { isRetryable: false } : {},
      warnings,
      providerMetadata: {
        google: {
          ...languageModelGoogleMetadata,
          images: images.map(() => ({}))
        }
      },
      response: {
        timestamp: currentDate,
        modelId: this.modelId,
        headers: (_i = result.response) == null ? void 0 : _i.headers
      },
      usage: result.usage ? {
        inputTokens: result.usage.inputTokens.total,
        outputTokens: result.usage.outputTokens.total,
        totalTokens: ((_j = result.usage.inputTokens.total) != null ? _j : 0) + ((_k = result.usage.outputTokens.total) != null ? _k : 0)
      } : void 0
    };
  }
};
function isGeminiModel(modelId) {
  return modelId.startsWith("gemini-");
}
__name(isGeminiModel, "isGeminiModel");
var googleImageResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      predictions: external_exports.array(
        external_exports.union([
          external_exports.object({ bytesBase64Encoded: external_exports.string() }),
          external_exports.object({ raiFilteredReason: external_exports.string() })
        ])
      ).default([])
    })
  )
);
var googleImageModelOptionsSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      personGeneration: external_exports.enum(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      aspectRatio: external_exports.enum(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish(),
      /**
       * Enable Google Search grounding for Gemini image models. The value is
       * forwarded as the args of the `google.tools.googleSearch` provider
       * tool on the underlying language-model call. Pass `{}` for defaults.
       *
       * `generateImage` does not accept a `tools` parameter, so this is the
       * dedicated escape hatch for grounding image generation the same way
       * `generateText` does.
       */
      googleSearch: googleSearchToolArgsBaseSchema.optional()
    })
  )
);
function getFirstFrameImage(options) {
  var _a24, _b17;
  return (_b17 = (_a24 = options.frameImages) == null ? void 0 : _a24.find((frame) => frame.frameType === "first_frame")) == null ? void 0 : _b17.image;
}
__name(getFirstFrameImage, "getFirstFrameImage");
function resolveStartImage(options) {
  var _a24;
  return (_a24 = getFirstFrameImage(options)) != null ? _a24 : options.image;
}
__name(resolveStartImage, "resolveStartImage");
function getLastFrameImage(options) {
  var _a24, _b17;
  return (_b17 = (_a24 = options.frameImages) == null ? void 0 : _a24.find((frame) => frame.frameType === "last_frame")) == null ? void 0 : _b17.image;
}
__name(getLastFrameImage, "getLastFrameImage");
function getInputReferences(options) {
  if (options.frameImages != null && options.frameImages.length > 0) {
    return void 0;
  }
  return options.inputReferences != null && options.inputReferences.length > 0 ? options.inputReferences : void 0;
}
__name(getInputReferences, "getInputReferences");
function convertFileToGoogleImage(file, warnings) {
  if (file.type === "url") {
    if (file.url.startsWith("gs://")) {
      return {
        gcsUri: file.url,
        mimeType: "image/png"
      };
    }
    warnings.push({
      type: "unsupported",
      feature: "URL-based image input",
      details: "Google Generative AI video models require base64-encoded images or GCS URIs. URL will be ignored."
    });
    return void 0;
  }
  const base64Data = typeof file.data === "string" ? file.data : convertUint8ArrayToBase64(file.data);
  return {
    bytesBase64Encoded: base64Data,
    mimeType: file.mediaType || "image/png"
  };
}
__name(convertFileToGoogleImage, "convertFileToGoogleImage");
function convertProviderReferenceImage(refImg) {
  if (refImg.bytesBase64Encoded) {
    return {
      image: {
        bytesBase64Encoded: refImg.bytesBase64Encoded,
        mimeType: "image/png"
      }
    };
  }
  if (refImg.gcsUri) {
    return {
      image: {
        gcsUri: refImg.gcsUri,
        mimeType: "image/png"
      }
    };
  }
  return refImg;
}
__name(convertProviderReferenceImage, "convertProviderReferenceImage");
function convertInputReferenceImage(file, warnings) {
  const image = convertFileToGoogleImage(file, warnings);
  return image != null ? { image } : void 0;
}
__name(convertInputReferenceImage, "convertInputReferenceImage");
var GoogleGenerativeAIVideoModel = class {
  static {
    __name(this, "GoogleGenerativeAIVideoModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  get maxVideosPerCall() {
    return 4;
  }
  async doGenerate(options) {
    var _a24, _b17, _c, _d, _e, _f, _g, _h;
    const currentDate = (_c = (_b17 = (_a24 = this.config._internal) == null ? void 0 : _a24.currentDate) == null ? void 0 : _b17.call(_a24)) != null ? _c : /* @__PURE__ */ new Date();
    const warnings = [];
    const googleOptions = await parseProviderOptions({
      provider: "google",
      providerOptions: options.providerOptions,
      schema: googleVideoModelOptionsSchema
    });
    const instances = [{}];
    const instance = instances[0];
    if (options.prompt != null) {
      instance.prompt = options.prompt;
    }
    const startImage = resolveStartImage(options);
    if (startImage != null) {
      const image = convertFileToGoogleImage(startImage, warnings);
      if (image != null) {
        instance.image = image;
      }
    }
    const lastFrameImage = getLastFrameImage(options);
    if (lastFrameImage != null) {
      const lastFrame = convertFileToGoogleImage(lastFrameImage, warnings);
      if (lastFrame != null) {
        instance.lastFrame = lastFrame;
      }
    }
    const inputReferences = getInputReferences(options);
    if (inputReferences != null) {
      instance.referenceImages = inputReferences.flatMap((reference) => {
        const converted = convertInputReferenceImage(reference, warnings);
        return converted != null ? [converted] : [];
      });
    } else if ((googleOptions == null ? void 0 : googleOptions.referenceImages) != null) {
      instance.referenceImages = googleOptions.referenceImages.map(
        (refImg) => convertProviderReferenceImage(refImg)
      );
    }
    const parameters = {
      sampleCount: options.n
    };
    if (options.aspectRatio) {
      parameters.aspectRatio = options.aspectRatio;
    }
    if (options.resolution) {
      const resolutionMap = {
        "1280x720": "720p",
        "1920x1080": "1080p",
        "3840x2160": "4k"
      };
      parameters.resolution = resolutionMap[options.resolution] || options.resolution;
    }
    if (options.duration) {
      parameters.durationSeconds = options.duration;
    }
    if (options.seed) {
      parameters.seed = options.seed;
    }
    if (googleOptions != null) {
      const opts = googleOptions;
      if (opts.personGeneration !== void 0 && opts.personGeneration !== null) {
        parameters.personGeneration = opts.personGeneration;
      }
      if (opts.negativePrompt !== void 0 && opts.negativePrompt !== null) {
        parameters.negativePrompt = opts.negativePrompt;
      }
      for (const [key, value] of Object.entries(opts)) {
        if (![
          "pollIntervalMs",
          "pollTimeoutMs",
          "personGeneration",
          "negativePrompt",
          "referenceImages"
        ].includes(key)) {
          parameters[key] = value;
        }
      }
    }
    const { value: operation } = await postJsonToApi({
      url: `${this.config.baseURL}/models/${this.modelId}:predictLongRunning`,
      headers: combineHeaders(
        await resolve(this.config.headers),
        options.headers
      ),
      body: {
        instances,
        parameters
      },
      successfulResponseHandler: createJsonResponseHandler(
        googleOperationSchema
      ),
      failedResponseHandler: googleFailedResponseHandler,
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const operationName = operation.name;
    if (!operationName) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_ERROR",
        message: "No operation name returned from API"
      });
    }
    const pollIntervalMs = (_d = googleOptions == null ? void 0 : googleOptions.pollIntervalMs) != null ? _d : 1e4;
    const pollTimeoutMs = (_e = googleOptions == null ? void 0 : googleOptions.pollTimeoutMs) != null ? _e : 6e5;
    const startTime = Date.now();
    let finalOperation = operation;
    let responseHeaders;
    while (!finalOperation.done) {
      if (Date.now() - startTime > pollTimeoutMs) {
        throw new AISDKError({
          name: "GOOGLE_VIDEO_GENERATION_TIMEOUT",
          message: `Video generation timed out after ${pollTimeoutMs}ms`
        });
      }
      await delay(pollIntervalMs);
      if ((_f = options.abortSignal) == null ? void 0 : _f.aborted) {
        throw new AISDKError({
          name: "GOOGLE_VIDEO_GENERATION_ABORTED",
          message: "Video generation request was aborted"
        });
      }
      const { value: statusOperation, responseHeaders: pollHeaders } = await getFromApi({
        url: `${this.config.baseURL}/${operationName}`,
        headers: combineHeaders(
          await resolve(this.config.headers),
          options.headers
        ),
        successfulResponseHandler: createJsonResponseHandler(
          googleOperationSchema
        ),
        failedResponseHandler: googleFailedResponseHandler,
        abortSignal: options.abortSignal,
        fetch: this.config.fetch
      });
      finalOperation = statusOperation;
      responseHeaders = pollHeaders;
    }
    if (finalOperation.error) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_FAILED",
        message: `Video generation failed: ${finalOperation.error.message}`
      });
    }
    const response = finalOperation.response;
    if (!((_g = response == null ? void 0 : response.generateVideoResponse) == null ? void 0 : _g.generatedSamples) || response.generateVideoResponse.generatedSamples.length === 0) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_ERROR",
        message: `No videos in response. Response: ${JSON.stringify(finalOperation)}`
      });
    }
    const videos = [];
    const videoMetadata = [];
    const resolvedHeaders = await resolve(this.config.headers);
    const apiKey = resolvedHeaders == null ? void 0 : resolvedHeaders["x-goog-api-key"];
    for (const generatedSample of response.generateVideoResponse.generatedSamples) {
      if ((_h = generatedSample.video) == null ? void 0 : _h.uri) {
        const urlWithAuth = apiKey && isSameOrigin(generatedSample.video.uri, this.config.baseURL) ? `${generatedSample.video.uri}${generatedSample.video.uri.includes("?") ? "&" : "?"}key=${apiKey}` : generatedSample.video.uri;
        videos.push({
          type: "url",
          url: urlWithAuth,
          mediaType: "video/mp4"
        });
        videoMetadata.push({
          uri: generatedSample.video.uri
        });
      }
    }
    if (videos.length === 0) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_ERROR",
        message: "No valid videos in response"
      });
    }
    return {
      videos,
      warnings,
      response: {
        timestamp: currentDate,
        modelId: this.modelId,
        headers: responseHeaders
      },
      providerMetadata: {
        google: {
          videos: videoMetadata
        }
      }
    };
  }
};
var googleOperationSchema = external_exports.object({
  name: external_exports.string().nullish(),
  done: external_exports.boolean().nullish(),
  error: external_exports.object({
    code: external_exports.number().nullish(),
    message: external_exports.string(),
    status: external_exports.string().nullish()
  }).nullish(),
  response: external_exports.object({
    generateVideoResponse: external_exports.object({
      generatedSamples: external_exports.array(
        external_exports.object({
          video: external_exports.object({
            uri: external_exports.string().nullish()
          }).nullish()
        })
      ).nullish()
    }).nullish()
  }).nullish()
});
var googleVideoModelOptionsSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      pollIntervalMs: external_exports.number().positive().nullish(),
      pollTimeoutMs: external_exports.number().positive().nullish(),
      personGeneration: external_exports.enum(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      negativePrompt: external_exports.string().nullish(),
      referenceImages: external_exports.array(
        external_exports.object({
          bytesBase64Encoded: external_exports.string().nullish(),
          gcsUri: external_exports.string().nullish()
        })
      ).nullish()
    }).passthrough()
  )
);
function convertGoogleInteractionsUsage(usage) {
  var _a24, _b17, _c, _d, _e, _f, _g, _h;
  if (usage == null) {
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  }
  const totalInput = (_a24 = usage.total_input_tokens) != null ? _a24 : 0;
  const totalOutput = (_b17 = usage.total_output_tokens) != null ? _b17 : 0;
  const totalThought = (_c = usage.total_thought_tokens) != null ? _c : 0;
  const totalCached = (_d = usage.total_cached_tokens) != null ? _d : 0;
  return {
    inputTokens: {
      total: (_e = usage.total_input_tokens) != null ? _e : void 0,
      noCache: usage.total_input_tokens == null ? void 0 : totalInput - totalCached,
      cacheRead: (_f = usage.total_cached_tokens) != null ? _f : void 0,
      cacheWrite: void 0
    },
    outputTokens: {
      total: usage.total_output_tokens == null && usage.total_thought_tokens == null ? void 0 : totalOutput + totalThought,
      text: (_g = usage.total_output_tokens) != null ? _g : void 0,
      reasoning: (_h = usage.total_thought_tokens) != null ? _h : void 0
    },
    raw: usage
  };
}
__name(convertGoogleInteractionsUsage, "convertGoogleInteractionsUsage");
function getGoogleInteractionsOutputTokensByModality(usage) {
  const byModality = usage == null ? void 0 : usage.output_tokens_by_modality;
  if (byModality == null) {
    return void 0;
  }
  const result = {};
  for (const entry of byModality) {
    if ((entry == null ? void 0 : entry.modality) != null && entry.tokens != null) {
      result[entry.modality] = entry.tokens;
    }
  }
  return Object.keys(result).length > 0 ? result : void 0;
}
__name(getGoogleInteractionsOutputTokensByModality, "getGoogleInteractionsOutputTokensByModality");
var KNOWN_DOC_EXTENSIONS = {
  pdf: "application/pdf",
  txt: "text/plain",
  md: "text/markdown",
  markdown: "text/markdown",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};
function inferDocMediaType(uriOrName) {
  const lower = uriOrName.toLowerCase();
  for (const [ext, media] of Object.entries(KNOWN_DOC_EXTENSIONS)) {
    if (lower.endsWith(`.${ext}`)) return media;
  }
  return "application/octet-stream";
}
__name(inferDocMediaType, "inferDocMediaType");
function basename(uriOrName) {
  const parts = uriOrName.split("/");
  const last = parts[parts.length - 1];
  return last && last.length > 0 ? last : void 0;
}
__name(basename, "basename");
function annotationToSource({
  annotation,
  generateId: generateId3
}) {
  var _a24, _b17, _c, _d, _e;
  switch (annotation.type) {
    case "url_citation": {
      const a = annotation;
      if (a.url == null || a.url.length === 0) return void 0;
      return {
        type: "source",
        sourceType: "url",
        id: generateId3(),
        url: a.url,
        ...a.title != null ? { title: a.title } : {}
      };
    }
    case "file_citation": {
      const a = annotation;
      const uri = (_b17 = (_a24 = a.url) != null ? _a24 : a.document_uri) != null ? _b17 : a.file_name;
      if (uri == null || uri.length === 0) return void 0;
      if (uri.startsWith("http://") || uri.startsWith("https://")) {
        return {
          type: "source",
          sourceType: "url",
          id: generateId3(),
          url: uri,
          ...a.file_name != null ? { title: a.file_name } : {}
        };
      }
      const filename = (_c = a.file_name) != null ? _c : basename(uri);
      const mediaType = inferDocMediaType(uri);
      return {
        type: "source",
        sourceType: "document",
        id: generateId3(),
        mediaType,
        title: (_e = (_d = a.file_name) != null ? _d : filename) != null ? _e : uri,
        ...filename != null ? { filename } : {}
      };
    }
    case "place_citation": {
      const a = annotation;
      if (a.url == null || a.url.length === 0) return void 0;
      return {
        type: "source",
        sourceType: "url",
        id: generateId3(),
        url: a.url,
        ...a.name != null ? { title: a.name } : {}
      };
    }
    default:
      return void 0;
  }
}
__name(annotationToSource, "annotationToSource");
function builtinToolResultToSources({
  block,
  generateId: generateId3
}) {
  var _a24, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const sources = [];
  switch (block.type) {
    case "url_context_result": {
      const result = (_a24 = block.result) != null ? _a24 : [];
      for (const entry of result) {
        if ((entry == null ? void 0 : entry.url) == null || entry.url.length === 0) continue;
        if (entry.status != null && entry.status !== "success") continue;
        sources.push({
          type: "source",
          sourceType: "url",
          id: generateId3(),
          url: entry.url
        });
      }
      break;
    }
    case "google_search_result": {
      const result = (_b17 = block.result) != null ? _b17 : [];
      for (const entry of result) {
        const url = entry == null ? void 0 : entry.url;
        if (url == null || url.length === 0) continue;
        sources.push({
          type: "source",
          sourceType: "url",
          id: generateId3(),
          url,
          ...entry.title != null ? { title: entry.title } : {}
        });
      }
      break;
    }
    case "google_maps_result": {
      const result = (_c = block.result) != null ? _c : [];
      for (const entry of result) {
        for (const place of (_d = entry.places) != null ? _d : []) {
          if (place.url == null || place.url.length === 0) continue;
          sources.push({
            type: "source",
            sourceType: "url",
            id: generateId3(),
            url: place.url,
            ...place.name != null ? { title: place.name } : {}
          });
        }
      }
      break;
    }
    case "file_search_result": {
      const result = (_e = block.result) != null ? _e : [];
      for (const raw of result) {
        if (raw == null || typeof raw !== "object") continue;
        const entry = raw;
        const uri = (_g = (_f = entry.url) != null ? _f : entry.document_uri) != null ? _g : entry.file_name;
        if (uri == null || uri.length === 0) continue;
        if (uri.startsWith("http://") || uri.startsWith("https://")) {
          sources.push({
            type: "source",
            sourceType: "url",
            id: generateId3(),
            url: uri,
            ...entry.title != null ? { title: entry.title } : {}
          });
          continue;
        }
        const filename = (_h = entry.file_name) != null ? _h : basename(uri);
        const mediaType = inferDocMediaType(uri);
        sources.push({
          type: "source",
          sourceType: "document",
          id: generateId3(),
          mediaType,
          title: (_k = (_j = (_i = entry.title) != null ? _i : entry.file_name) != null ? _j : filename) != null ? _k : uri,
          ...filename != null ? { filename } : {}
        });
      }
      break;
    }
    default:
      break;
  }
  return sources;
}
__name(builtinToolResultToSources, "builtinToolResultToSources");
function annotationsToSources({
  annotations,
  generateId: generateId3
}) {
  var _a24;
  if (annotations == null) return [];
  const seen = /* @__PURE__ */ new Set();
  const sources = [];
  for (const annotation of annotations) {
    const source = annotationToSource({ annotation, generateId: generateId3 });
    if (source == null) continue;
    const key = source.sourceType === "url" ? `url:${source.url}` : `doc:${(_a24 = source.filename) != null ? _a24 : source.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    sources.push(source);
  }
  return sources;
}
__name(annotationsToSources, "annotationsToSources");
function mapGoogleInteractionsFinishReason({
  status,
  hasFunctionCall
}) {
  switch (status) {
    case "completed":
      return hasFunctionCall ? "tool-calls" : "stop";
    case "requires_action":
      return "tool-calls";
    case "failed":
      return "error";
    case "incomplete":
      return "length";
    case "cancelled":
      return "other";
    case "in_progress":
    default:
      return "other";
  }
}
__name(mapGoogleInteractionsFinishReason, "mapGoogleInteractionsFinishReason");
var BUILTIN_TOOL_CALL_TYPES = /* @__PURE__ */ new Set([
  "google_search_call",
  "code_execution_call",
  "url_context_call",
  "file_search_call",
  "google_maps_call",
  "mcp_server_tool_call"
]);
var BUILTIN_TOOL_RESULT_TYPES = /* @__PURE__ */ new Set([
  "google_search_result",
  "code_execution_result",
  "url_context_result",
  "file_search_result",
  "google_maps_result",
  "mcp_server_tool_result"
]);
function builtinToolNameFromCallType(type) {
  return type.replace(/_call$/, "");
}
__name(builtinToolNameFromCallType, "builtinToolNameFromCallType");
function builtinToolNameFromResultType(type) {
  return type.replace(/_result$/, "");
}
__name(builtinToolNameFromResultType, "builtinToolNameFromResultType");
function buildGoogleInteractionsStreamTransform({
  warnings,
  generateId: generateId3,
  includeRawChunks,
  serviceTier: headerServiceTier
}) {
  let interactionId;
  let usage;
  let serviceTier = headerServiceTier;
  let finishStatus;
  let hasFunctionCall = false;
  const openBlocks = /* @__PURE__ */ new Map();
  const emittedSourceKeys = /* @__PURE__ */ new Set();
  function sourceKey(source) {
    var _a24;
    return source.sourceType === "url" ? `url:${source.url}` : `doc:${(_a24 = source.filename) != null ? _a24 : source.title}`;
  }
  __name(sourceKey, "sourceKey");
  return new TransformStream({
    start(controller) {
      controller.enqueue({ type: "stream-start", warnings });
    },
    transform(chunk, controller) {
      var _a24, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
      if (includeRawChunks) {
        controller.enqueue({ type: "raw", rawValue: chunk.rawValue });
      }
      if (!chunk.success) {
        finishStatus = "failed";
        controller.enqueue({ type: "error", error: chunk.error });
        return;
      }
      const value = chunk.value;
      const eventType = value.event_type;
      switch (eventType) {
        case "interaction.created": {
          const event = value;
          const interaction = event.interaction;
          interactionId = (interaction == null ? void 0 : interaction.id) != null && interaction.id.length > 0 ? interaction.id : void 0;
          const created = interaction == null ? void 0 : interaction.created;
          let timestamp;
          if (typeof created === "string") {
            const parsed = new Date(created);
            if (!Number.isNaN(parsed.getTime())) {
              timestamp = parsed;
            }
          }
          controller.enqueue({
            type: "response-metadata",
            ...interactionId != null ? { id: interactionId } : {},
            modelId: interaction == null ? void 0 : interaction.model,
            ...timestamp ? { timestamp } : {}
          });
          break;
        }
        case "step.start": {
          const event = value;
          const step = event.step;
          const index = event.index;
          const blockId = `${interactionId != null ? interactionId : "interaction"}:${index}`;
          const stepType = step == null ? void 0 : step.type;
          if (stepType === "model_output") {
            const initial = (_a24 = step == null ? void 0 : step.content) == null ? void 0 : _a24[0];
            if ((initial == null ? void 0 : initial.type) === "text") {
              openBlocks.set(index, {
                kind: "text",
                id: blockId,
                emittedSourceKeys: /* @__PURE__ */ new Set()
              });
              controller.enqueue({ type: "text-start", id: blockId });
              const initialSources = annotationsToSources({
                annotations: initial.annotations,
                generateId: generateId3
              });
              for (const source of initialSources) {
                const key = sourceKey(source);
                if (emittedSourceKeys.has(key)) continue;
                emittedSourceKeys.add(key);
                controller.enqueue(source);
              }
            } else if ((initial == null ? void 0 : initial.type) === "image") {
              openBlocks.set(index, {
                kind: "image",
                id: blockId,
                ...initial.data != null ? { data: initial.data } : {},
                ...initial.mime_type != null ? { mimeType: initial.mime_type } : {},
                ...initial.uri != null ? { uri: initial.uri } : {}
              });
            } else {
              openBlocks.set(index, {
                kind: "pending_model_output",
                id: blockId
              });
            }
          } else if (stepType === "thought") {
            const signature = step == null ? void 0 : step.signature;
            openBlocks.set(index, {
              kind: "reasoning",
              id: blockId,
              ...signature != null ? { signature } : {}
            });
            controller.enqueue({ type: "reasoning-start", id: blockId });
            if (Array.isArray(step == null ? void 0 : step.summary)) {
              for (const item of step.summary) {
                if ((item == null ? void 0 : item.type) === "text" && typeof item.text === "string") {
                  controller.enqueue({
                    type: "reasoning-delta",
                    id: blockId,
                    delta: item.text
                  });
                }
              }
            }
          } else if (stepType === "function_call") {
            const toolCallId = (_b17 = step == null ? void 0 : step.id) != null ? _b17 : blockId;
            const toolName = (_c = step == null ? void 0 : step.name) != null ? _c : "unknown";
            hasFunctionCall = true;
            const state = {
              kind: "function_call",
              id: blockId,
              toolCallId,
              toolName,
              argumentsAccum: "",
              ...(step == null ? void 0 : step.signature) != null ? { signature: step.signature } : {}
            };
            openBlocks.set(index, state);
            controller.enqueue({
              type: "tool-input-start",
              id: toolCallId,
              toolName
            });
          } else if (stepType != null && BUILTIN_TOOL_CALL_TYPES.has(stepType)) {
            const toolName = stepType === "mcp_server_tool_call" ? (_d = step == null ? void 0 : step.name) != null ? _d : "mcp_server_tool" : builtinToolNameFromCallType(stepType);
            const toolCallId = (_e = step == null ? void 0 : step.id) != null ? _e : blockId;
            const state = {
              kind: "builtin_tool_call",
              id: blockId,
              blockType: stepType,
              toolCallId,
              toolName,
              arguments: (_f = step == null ? void 0 : step.arguments) != null ? _f : {},
              callEmitted: false
            };
            openBlocks.set(index, state);
          } else if (stepType != null && BUILTIN_TOOL_RESULT_TYPES.has(stepType)) {
            const toolName = stepType === "mcp_server_tool_result" ? (_g = step == null ? void 0 : step.name) != null ? _g : "mcp_server_tool" : builtinToolNameFromResultType(stepType);
            const callId = (_h = step == null ? void 0 : step.call_id) != null ? _h : blockId;
            const state = {
              kind: "builtin_tool_result",
              id: blockId,
              blockType: stepType,
              callId,
              toolName,
              result: (_i = step == null ? void 0 : step.result) != null ? _i : null,
              ...(step == null ? void 0 : step.is_error) != null ? { isError: step.is_error } : {},
              resultEmitted: false
            };
            openBlocks.set(index, state);
          } else {
            openBlocks.set(index, { kind: "unknown", id: blockId });
          }
          break;
        }
        case "step.delta": {
          const event = value;
          let open = openBlocks.get(event.index);
          if (open == null) break;
          const dtype = (_j = event.delta) == null ? void 0 : _j.type;
          if (open.kind === "pending_model_output") {
            if (dtype === "text" || dtype === "text_annotation" || dtype === "text_annotation_delta") {
              const promoted = {
                kind: "text",
                id: open.id,
                emittedSourceKeys: /* @__PURE__ */ new Set()
              };
              openBlocks.set(event.index, promoted);
              open = promoted;
              controller.enqueue({ type: "text-start", id: promoted.id });
            }
          }
          if (dtype === "image" && (open.kind === "pending_model_output" || open.kind === "text" || open.kind === "image")) {
            const img = event.delta;
            const google2 = {};
            if (interactionId != null) google2.interactionId = interactionId;
            const providerMetadata = Object.keys(google2).length > 0 ? { google: google2 } : void 0;
            if ((img == null ? void 0 : img.data) != null && img.data.length > 0) {
              controller.enqueue({
                type: "file",
                mediaType: (_k = img.mime_type) != null ? _k : "image/png",
                data: img.data,
                ...providerMetadata ? { providerMetadata } : {}
              });
            } else if ((img == null ? void 0 : img.uri) != null && img.uri.length > 0) {
              const uriProviderMetadata = {
                google: {
                  ...interactionId != null ? { interactionId } : {},
                  imageUri: img.uri
                }
              };
              controller.enqueue({
                type: "file",
                mediaType: (_l = img.mime_type) != null ? _l : "image/png",
                data: "",
                providerMetadata: uriProviderMetadata
              });
            }
            if (open.kind === "image") {
              open.data = void 0;
              open.uri = void 0;
            }
            break;
          }
          if (dtype === "video" && (open.kind === "pending_model_output" || open.kind === "text")) {
            const videoDelta = event.delta;
            const google2 = {};
            if (interactionId != null) google2.interactionId = interactionId;
            const providerMetadata = Object.keys(google2).length > 0 ? { google: google2 } : void 0;
            if ((videoDelta == null ? void 0 : videoDelta.data) != null && videoDelta.data.length > 0) {
              controller.enqueue({
                type: "file",
                mediaType: (_m = videoDelta.mime_type) != null ? _m : "video/mp4",
                data: videoDelta.data,
                ...providerMetadata ? { providerMetadata } : {}
              });
            } else if ((videoDelta == null ? void 0 : videoDelta.uri) != null && videoDelta.uri.length > 0) {
              const uriProviderMetadata = {
                google: {
                  ...interactionId != null ? { interactionId } : {},
                  videoUri: videoDelta.uri
                }
              };
              controller.enqueue({
                type: "file",
                mediaType: (_n = videoDelta.mime_type) != null ? _n : "video/mp4",
                data: "",
                providerMetadata: uriProviderMetadata
              });
            }
            break;
          }
          const delta = event.delta;
          if (open.kind === "text" && (delta == null ? void 0 : delta.type) === "text") {
            const text2 = (_o = delta.text) != null ? _o : "";
            if (text2.length > 0) {
              controller.enqueue({
                type: "text-delta",
                id: open.id,
                delta: text2
              });
            }
          } else if (open.kind === "text" && ((delta == null ? void 0 : delta.type) === "text_annotation" || (delta == null ? void 0 : delta.type) === "text_annotation_delta")) {
            const sources = annotationsToSources({
              annotations: delta.annotations,
              generateId: generateId3
            });
            for (const source of sources) {
              const key = sourceKey(source);
              if (emittedSourceKeys.has(key)) continue;
              emittedSourceKeys.add(key);
              open.emittedSourceKeys.add(key);
              controller.enqueue(source);
            }
          } else if (open.kind === "image" && (delta == null ? void 0 : delta.type) === "image") {
            if (delta.data != null) open.data = delta.data;
            if (delta.mime_type != null) open.mimeType = delta.mime_type;
            if (delta.uri != null) open.uri = delta.uri;
          } else if (open.kind === "reasoning") {
            if ((delta == null ? void 0 : delta.type) === "thought_summary") {
              const item = delta.content;
              if ((item == null ? void 0 : item.type) === "text" && typeof item.text === "string") {
                controller.enqueue({
                  type: "reasoning-delta",
                  id: open.id,
                  delta: item.text
                });
              }
            } else if ((delta == null ? void 0 : delta.type) === "thought_signature") {
              const signature = delta.signature;
              if (signature != null) {
                open.signature = signature;
              }
            }
          } else if (open.kind === "function_call" && (delta == null ? void 0 : delta.type) === "arguments_delta") {
            const slice = typeof delta.arguments === "string" ? delta.arguments : "";
            if (slice.length > 0) {
              open.argumentsAccum += slice;
              controller.enqueue({
                type: "tool-input-delta",
                id: open.toolCallId,
                delta: slice
              });
            }
            if (delta.id != null) {
              open.toolCallId = delta.id;
            }
            if (delta.signature != null) {
              open.signature = delta.signature;
            }
            hasFunctionCall = true;
          } else if (open.kind === "builtin_tool_call" && (delta == null ? void 0 : delta.type) === open.blockType) {
            if (delta.id != null) open.toolCallId = delta.id;
            if (delta.arguments != null && typeof delta.arguments === "object") {
              open.arguments = delta.arguments;
            }
            if (delta.name != null && open.blockType === "mcp_server_tool_call") {
              open.toolName = delta.name;
            }
          } else if (open.kind === "builtin_tool_result" && (delta == null ? void 0 : delta.type) === open.blockType) {
            if (delta.call_id != null) open.callId = delta.call_id;
            if (delta.result !== void 0) open.result = delta.result;
            if (delta.is_error != null) open.isError = delta.is_error;
            if (delta.name != null && open.blockType === "mcp_server_tool_result") {
              open.toolName = delta.name;
            }
          }
          break;
        }
        case "step.stop": {
          const event = value;
          const open = openBlocks.get(event.index);
          if (open == null) break;
          if (open.kind === "text") {
            const textProviderMetadata = interactionId != null ? { google: { interactionId } } : void 0;
            controller.enqueue({
              type: "text-end",
              id: open.id,
              ...textProviderMetadata ? { providerMetadata: textProviderMetadata } : {}
            });
          } else if (open.kind === "reasoning") {
            const google2 = {};
            if (open.signature != null) google2.signature = open.signature;
            if (interactionId != null) google2.interactionId = interactionId;
            const providerMetadata = Object.keys(google2).length > 0 ? { google: google2 } : void 0;
            controller.enqueue({
              type: "reasoning-end",
              id: open.id,
              ...providerMetadata ? { providerMetadata } : {}
            });
          } else if (open.kind === "image") {
            const google2 = {};
            if (interactionId != null) google2.interactionId = interactionId;
            const providerMetadata = Object.keys(google2).length > 0 ? { google: google2 } : void 0;
            if (open.data != null && open.data.length > 0) {
              controller.enqueue({
                type: "file",
                mediaType: (_p = open.mimeType) != null ? _p : "image/png",
                data: open.data,
                ...providerMetadata ? { providerMetadata } : {}
              });
            } else if (open.uri != null && open.uri.length > 0) {
              const uriProviderMetadata = {
                google: {
                  ...interactionId != null ? { interactionId } : {},
                  imageUri: open.uri
                }
              };
              controller.enqueue({
                type: "file",
                mediaType: (_q = open.mimeType) != null ? _q : "image/png",
                data: "",
                providerMetadata: uriProviderMetadata
              });
            }
          } else if (open.kind === "function_call") {
            const accumulated = open.argumentsAccum.length > 0 ? open.argumentsAccum : "{}";
            controller.enqueue({
              type: "tool-input-end",
              id: open.toolCallId
            });
            const google2 = {};
            if (open.signature != null) google2.signature = open.signature;
            if (interactionId != null) google2.interactionId = interactionId;
            const providerMetadata = Object.keys(google2).length > 0 ? { google: google2 } : void 0;
            controller.enqueue({
              type: "tool-call",
              toolCallId: open.toolCallId,
              toolName: open.toolName,
              input: accumulated,
              ...providerMetadata ? { providerMetadata } : {}
            });
          } else if (open.kind === "builtin_tool_call" && !open.callEmitted) {
            controller.enqueue({
              type: "tool-call",
              toolCallId: open.toolCallId,
              toolName: open.toolName,
              input: JSON.stringify((_r = open.arguments) != null ? _r : {}),
              providerExecuted: true
            });
            open.callEmitted = true;
          } else if (open.kind === "builtin_tool_result" && !open.resultEmitted) {
            controller.enqueue({
              type: "tool-result",
              toolCallId: open.callId,
              toolName: open.toolName,
              result: (_s = open.result) != null ? _s : null
            });
            open.resultEmitted = true;
            const sources = builtinToolResultToSources({
              block: {
                type: open.blockType,
                call_id: open.callId,
                result: open.result
              },
              generateId: generateId3
            });
            for (const source of sources) {
              const key = sourceKey(source);
              if (emittedSourceKeys.has(key)) continue;
              emittedSourceKeys.add(key);
              controller.enqueue(source);
            }
          }
          openBlocks.delete(event.index);
          break;
        }
        case "interaction.status_update":
        case "interaction.in_progress":
        case "interaction.requires_action": {
          const event = value;
          if (event.status != null) {
            finishStatus = event.status;
          } else if (eventType === "interaction.requires_action") {
            finishStatus = "requires_action";
          } else {
            finishStatus = "in_progress";
          }
          break;
        }
        case "interaction.completed": {
          const event = value;
          const interaction = event.interaction;
          if ((interaction == null ? void 0 : interaction.id) != null && interaction.id.length > 0) {
            interactionId = interaction.id;
          }
          if ((interaction == null ? void 0 : interaction.status) != null) {
            finishStatus = interaction.status;
          }
          if ((interaction == null ? void 0 : interaction.usage) != null) {
            usage = interaction.usage;
          }
          if ((interaction == null ? void 0 : interaction.service_tier) != null) {
            serviceTier = interaction.service_tier;
          }
          break;
        }
        case "error": {
          const event = value;
          finishStatus = "failed";
          const errorPayload = (_t = event.error) != null ? _t : {
            message: "Unknown interaction error"
          };
          controller.enqueue({ type: "error", error: errorPayload });
          break;
        }
        default:
          break;
      }
    },
    flush(controller) {
      const finishReason = {
        unified: mapGoogleInteractionsFinishReason({
          status: finishStatus,
          hasFunctionCall
        }),
        raw: finishStatus
      };
      const outputTokensByModality = getGoogleInteractionsOutputTokensByModality(usage);
      const providerMetadata = {
        google: {
          ...interactionId != null ? { interactionId } : {},
          ...serviceTier != null ? { serviceTier } : {},
          ...outputTokensByModality != null ? { outputTokensByModality } : {}
        }
      };
      controller.enqueue({
        type: "finish",
        finishReason,
        usage: convertGoogleInteractionsUsage(usage),
        providerMetadata
      });
    }
  });
}
__name(buildGoogleInteractionsStreamTransform, "buildGoogleInteractionsStreamTransform");
function getTopLevelMediaType(mediaType) {
  const slashIndex = mediaType.indexOf("/");
  return slashIndex === -1 ? mediaType : mediaType.substring(0, slashIndex);
}
__name(getTopLevelMediaType, "getTopLevelMediaType");
function isFullMediaType(mediaType) {
  const slashIndex = mediaType.indexOf("/");
  if (slashIndex === -1) {
    return false;
  }
  const subtype = mediaType.substring(slashIndex + 1);
  return subtype.length > 0 && subtype !== "*";
}
__name(isFullMediaType, "isFullMediaType");
function convertToGoogleInteractionsInput({
  prompt,
  previousInteractionId,
  store,
  mediaResolution
}) {
  var _a24, _b17, _c, _d, _e, _f, _g;
  const warnings = [];
  const incoherentCombo = previousInteractionId != null && store === false;
  const shouldCompact = previousInteractionId != null && store !== false;
  if (incoherentCombo) {
    warnings.push({
      type: "other",
      message: "google.interactions: providerOptions.google.previousInteractionId was set together with store: false. These are incoherent (the prior interaction cannot be referenced when nothing was stored on the server); the full history will be sent and previous_interaction_id will still be emitted."
    });
  }
  const compactedPrompt = shouldCompact ? compactPromptForPreviousInteraction({
    prompt,
    previousInteractionId
  }) : prompt;
  const systemTexts = [];
  const steps = [];
  for (const message of compactedPrompt) {
    switch (message.role) {
      case "system": {
        systemTexts.push(message.content);
        break;
      }
      case "user": {
        const content = [];
        for (const part of message.content) {
          if (part.type === "text") {
            content.push({ type: "text", text: part.text });
          } else if (part.type === "file") {
            const fileBlock = convertFilePartToContent({
              part,
              warnings,
              mediaResolution
            });
            if (fileBlock != null) {
              content.push(fileBlock);
            }
          }
        }
        const merged = mergeAdjacentTextContent(content);
        if (merged.length > 0) {
          steps.push({ type: "user_input", content: merged });
        }
        break;
      }
      case "assistant": {
        let pendingModelOutput = [];
        const flushModelOutput = /* @__PURE__ */ __name(() => {
          if (pendingModelOutput.length > 0) {
            steps.push({ type: "model_output", content: pendingModelOutput });
            pendingModelOutput = [];
          }
        }, "flushModelOutput");
        for (const part of message.content) {
          if (part.type === "text") {
            pendingModelOutput.push({ type: "text", text: part.text });
          } else if (part.type === "reasoning") {
            flushModelOutput();
            const signature = (_b17 = (_a24 = part.providerOptions) == null ? void 0 : _a24.google) == null ? void 0 : _b17.signature;
            steps.push({
              type: "thought",
              ...signature != null ? { signature } : {},
              summary: part.text.length > 0 ? [{ type: "text", text: part.text }] : void 0
            });
          } else if (part.type === "file") {
            const fileBlock = convertFilePartToContent({
              part,
              warnings,
              mediaResolution
            });
            if (fileBlock != null) {
              pendingModelOutput.push(fileBlock);
            }
          } else if (part.type === "tool-call") {
            flushModelOutput();
            const signature = (_d = (_c = part.providerOptions) == null ? void 0 : _c.google) == null ? void 0 : _d.signature;
            const args = typeof part.input === "string" ? safeParseToolArgs(part.input) : (_e = part.input) != null ? _e : {};
            steps.push({
              type: "function_call",
              id: part.toolCallId,
              name: part.toolName,
              arguments: args,
              ...signature != null ? { signature } : {}
            });
          } else {
            warnings.push({
              type: "other",
              message: `google.interactions: unsupported assistant content part type "${part.type}"; part dropped.`
            });
          }
        }
        flushModelOutput();
        break;
      }
      case "tool": {
        const content = [];
        for (const part of message.content) {
          if (part.type !== "tool-result") {
            warnings.push({
              type: "other",
              message: `google.interactions: unsupported tool message part type "${part.type}"; part dropped.`
            });
            continue;
          }
          const block = convertToolResultPart({
            toolCallId: part.toolCallId,
            toolName: part.toolName,
            output: part.output,
            signature: (_g = (_f = part.providerOptions) == null ? void 0 : _f.google) == null ? void 0 : _g.signature,
            warnings
          });
          content.push(block);
        }
        if (content.length > 0) {
          steps.push({ type: "user_input", content });
        }
        break;
      }
    }
  }
  const systemInstruction = systemTexts.length > 0 ? systemTexts.join("\n\n") : void 0;
  return { input: steps, systemInstruction, warnings };
}
__name(convertToGoogleInteractionsInput, "convertToGoogleInteractionsInput");
function convertFilePartToContent({
  part,
  warnings,
  mediaResolution
}) {
  const topLevel = getTopLevelMediaType(part.mediaType);
  let kind;
  switch (topLevel) {
    case "image":
      kind = "image";
      break;
    case "audio":
      kind = "audio";
      break;
    case "video":
      kind = "video";
      break;
    case "application":
      kind = "document";
      break;
    default:
      kind = void 0;
  }
  if (kind == null) {
    warnings.push({
      type: "other",
      message: `google.interactions: unsupported file media type "${part.mediaType}"; part dropped.`
    });
    return void 0;
  }
  const resolutionField = mediaResolution != null && (kind === "image" || kind === "video") ? { resolution: mediaResolution } : {};
  if (part.data instanceof URL) {
    return {
      type: kind,
      uri: part.data.toString(),
      ...isFullMediaType(part.mediaType) ? { mime_type: part.mediaType } : {},
      ...resolutionField
    };
  }
  if (!isFullMediaType(part.mediaType)) {
    warnings.push({
      type: "other",
      message: `google.interactions: inline file data requires a full IANA media type (e.g. "image/png"), got "${part.mediaType}"; part dropped.`
    });
    return void 0;
  }
  return {
    type: kind,
    data: convertToBase64(part.data),
    mime_type: part.mediaType,
    ...resolutionField
  };
}
__name(convertFilePartToContent, "convertFilePartToContent");
function compactPromptForPreviousInteraction({
  prompt,
  previousInteractionId
}) {
  const out = [];
  const droppedToolCallIds = /* @__PURE__ */ new Set();
  for (const message of prompt) {
    if (message.role === "assistant") {
      const matchesLinkedInteraction = message.content.some((part) => {
        var _a24, _b17;
        const partInteractionId = (_b17 = (_a24 = part.providerOptions) == null ? void 0 : _a24.google) == null ? void 0 : _b17.interactionId;
        return partInteractionId === previousInteractionId;
      });
      if (matchesLinkedInteraction) {
        for (const part of message.content) {
          if (part.type === "tool-call") {
            droppedToolCallIds.add(part.toolCallId);
          }
        }
        continue;
      }
      out.push(message);
      continue;
    }
    if (message.role === "tool") {
      const remaining = message.content.filter((part) => {
        if (part.type !== "tool-result") {
          return true;
        }
        return !droppedToolCallIds.has(part.toolCallId);
      });
      if (remaining.length === 0) {
        continue;
      }
      out.push({
        ...message,
        content: remaining
      });
      continue;
    }
    out.push(message);
  }
  return out;
}
__name(compactPromptForPreviousInteraction, "compactPromptForPreviousInteraction");
function safeParseToolArgs(input) {
  try {
    const parsed = secureJsonParse(input);
    if (parsed != null && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
    return { value: parsed };
  } catch (e) {
    return { value: input };
  }
}
__name(safeParseToolArgs, "safeParseToolArgs");
function convertToolResultPart({
  toolCallId,
  toolName,
  output,
  signature,
  warnings
}) {
  var _a24;
  const base = {
    type: "function_result",
    call_id: toolCallId,
    name: toolName,
    ...signature != null ? { signature } : {}
  };
  switch (output.type) {
    case "text":
      return { ...base, result: output.value };
    case "json":
      return { ...base, result: JSON.stringify(output.value) };
    case "error-text":
      return { ...base, is_error: true, result: output.value };
    case "error-json":
      return { ...base, is_error: true, result: JSON.stringify(output.value) };
    case "execution-denied":
      return {
        ...base,
        is_error: true,
        result: (_a24 = output.reason) != null ? _a24 : "Tool execution denied by user."
      };
    case "content": {
      const blocks = [];
      for (const item of output.value) {
        if (item.type === "text") {
          blocks.push({ type: "text", text: item.text });
        } else if (item.type === "image-data") {
          const imageBlock = filePartToImageBlock({
            part: {
              type: "file",
              mediaType: item.mediaType,
              data: item.data
            },
            warnings
          });
          if (imageBlock != null) {
            blocks.push(imageBlock);
          }
        } else if (item.type === "image-url") {
          const imageBlock = filePartToImageBlock({
            part: {
              type: "file",
              mediaType: "image/*",
              data: new URL(item.url)
            },
            warnings
          });
          if (imageBlock != null) {
            blocks.push(imageBlock);
          }
        } else if (item.type === "file-data" || item.type === "file-url") {
          const mediaType = item.type === "file-data" ? item.mediaType : "application/*";
          const topLevel = getTopLevelMediaType(mediaType);
          if (topLevel !== "image") {
            warnings.push({
              type: "other",
              message: `google.interactions: tool-result file with mediaType "${mediaType}" is not supported (Interactions \`function_result.result\` accepts only text and image content); part dropped.`
            });
            continue;
          }
          const imageBlock = filePartToImageBlock({
            part: item.type === "file-data" ? {
              type: "file",
              mediaType: item.mediaType,
              data: item.data
            } : {
              type: "file",
              mediaType,
              data: new URL(item.url)
            },
            warnings
          });
          if (imageBlock != null) {
            blocks.push(imageBlock);
          }
        } else {
          warnings.push({
            type: "other",
            message: `google.interactions: tool-result content part type "${item.type}" is not supported; part dropped.`
          });
        }
      }
      return { ...base, result: blocks };
    }
  }
}
__name(convertToolResultPart, "convertToolResultPart");
function filePartToImageBlock({
  part,
  warnings
}) {
  if (part.data instanceof URL) {
    return {
      type: "image",
      uri: part.data.toString(),
      ...isFullMediaType(part.mediaType) ? { mime_type: part.mediaType } : {}
    };
  }
  if (!isFullMediaType(part.mediaType)) {
    warnings.push({
      type: "other",
      message: `google.interactions: tool-result image part requires a full IANA media type (e.g. "image/png"), got "${part.mediaType}"; part dropped.`
    });
    return void 0;
  }
  return {
    type: "image",
    data: convertToBase64(part.data),
    mime_type: part.mediaType
  };
}
__name(filePartToImageBlock, "filePartToImageBlock");
function mergeAdjacentTextContent(content) {
  if (content.length < 2) {
    return content;
  }
  const result = [];
  for (const block of content) {
    const last = result[result.length - 1];
    if (block.type === "text" && last != null && last.type === "text" && last.annotations == null && block.annotations == null) {
      const merged = {
        type: "text",
        text: `${last.text}

${block.text}`
      };
      result[result.length - 1] = merged;
      continue;
    }
    result.push(block);
  }
  return result;
}
__name(mergeAdjacentTextContent, "mergeAdjacentTextContent");
var tokenByModalitySchema = /* @__PURE__ */ __name(() => external_exports.object({
  modality: external_exports.string().nullish(),
  tokens: external_exports.number().nullish()
}).loose(), "tokenByModalitySchema");
var usageSchema2 = /* @__PURE__ */ __name(() => external_exports.object({
  total_input_tokens: external_exports.number().nullish(),
  total_output_tokens: external_exports.number().nullish(),
  total_thought_tokens: external_exports.number().nullish(),
  total_cached_tokens: external_exports.number().nullish(),
  total_tool_use_tokens: external_exports.number().nullish(),
  total_tokens: external_exports.number().nullish(),
  input_tokens_by_modality: external_exports.array(tokenByModalitySchema()).nullish(),
  output_tokens_by_modality: external_exports.array(tokenByModalitySchema()).nullish(),
  cached_tokens_by_modality: external_exports.array(tokenByModalitySchema()).nullish(),
  tool_use_tokens_by_modality: external_exports.array(tokenByModalitySchema()).nullish(),
  grounding_tool_count: external_exports.array(
    external_exports.object({
      type: external_exports.string().nullish(),
      count: external_exports.number().nullish()
    }).loose()
  ).nullish()
}).loose(), "usageSchema2");
var interactionStatusSchema = /* @__PURE__ */ __name(() => external_exports.enum([
  "in_progress",
  "requires_action",
  "completed",
  "failed",
  "cancelled",
  "incomplete"
]), "interactionStatusSchema");
var annotationSchema = /* @__PURE__ */ __name(() => {
  const urlCitation = external_exports.object({
    type: external_exports.literal("url_citation"),
    url: external_exports.string().nullish(),
    title: external_exports.string().nullish(),
    start_index: external_exports.number().nullish(),
    end_index: external_exports.number().nullish()
  }).loose();
  const fileCitation = external_exports.object({
    type: external_exports.literal("file_citation"),
    file_name: external_exports.string().nullish(),
    document_uri: external_exports.string().nullish(),
    url: external_exports.string().nullish(),
    page_number: external_exports.number().nullish(),
    media_id: external_exports.string().nullish(),
    start_index: external_exports.number().nullish(),
    end_index: external_exports.number().nullish(),
    custom_metadata: external_exports.record(external_exports.string(), external_exports.unknown()).nullish()
  }).loose();
  const placeCitation = external_exports.object({
    type: external_exports.literal("place_citation"),
    name: external_exports.string().nullish(),
    url: external_exports.string().nullish(),
    place_id: external_exports.string().nullish(),
    start_index: external_exports.number().nullish(),
    end_index: external_exports.number().nullish()
  }).loose();
  return external_exports.union([
    urlCitation,
    fileCitation,
    placeCitation,
    external_exports.object({ type: external_exports.string() }).loose()
  ]);
}, "annotationSchema");
var thoughtSummaryItemSchema = /* @__PURE__ */ __name(() => external_exports.object({
  type: external_exports.string(),
  text: external_exports.string().nullish(),
  data: external_exports.string().nullish(),
  mime_type: external_exports.string().nullish()
}).loose(), "thoughtSummaryItemSchema");
var contentBlockSchema = /* @__PURE__ */ __name(() => {
  const textContent = external_exports.object({
    type: external_exports.literal("text"),
    text: external_exports.string(),
    annotations: external_exports.array(annotationSchema()).nullish()
  }).loose();
  const imageContent = external_exports.object({
    type: external_exports.literal("image"),
    data: external_exports.string().nullish(),
    mime_type: external_exports.string().nullish(),
    resolution: external_exports.enum(["low", "medium", "high", "ultra_high"]).nullish(),
    uri: external_exports.string().nullish()
  }).loose();
  const videoContent = external_exports.object({
    type: external_exports.literal("video"),
    data: external_exports.string().nullish(),
    mime_type: external_exports.string().nullish(),
    uri: external_exports.string().nullish()
  }).loose();
  return external_exports.union([
    textContent,
    imageContent,
    videoContent,
    external_exports.object({ type: external_exports.string() }).loose()
  ]);
}, "contentBlockSchema");
var BUILTIN_TOOL_CALL_STEP_TYPES = [
  "google_search_call",
  "code_execution_call",
  "url_context_call",
  "file_search_call",
  "google_maps_call",
  "mcp_server_tool_call"
];
var BUILTIN_TOOL_RESULT_STEP_TYPES = [
  "google_search_result",
  "code_execution_result",
  "url_context_result",
  "file_search_result",
  "google_maps_result",
  "mcp_server_tool_result"
];
var stepSchema = /* @__PURE__ */ __name(() => {
  const userInputStep = external_exports.object({
    type: external_exports.literal("user_input"),
    content: external_exports.array(contentBlockSchema()).nullish()
  }).loose();
  const modelOutputStep = external_exports.object({
    type: external_exports.literal("model_output"),
    content: external_exports.array(contentBlockSchema()).nullish()
  }).loose();
  const functionCallStep = external_exports.object({
    type: external_exports.literal("function_call"),
    id: external_exports.string(),
    name: external_exports.string(),
    arguments: external_exports.record(external_exports.string(), external_exports.unknown()).nullish(),
    signature: external_exports.string().nullish()
  }).loose();
  const thoughtStep = external_exports.object({
    type: external_exports.literal("thought"),
    signature: external_exports.string().nullish(),
    summary: external_exports.array(thoughtSummaryItemSchema()).nullish()
  }).loose();
  const builtinToolCallStep = external_exports.object({
    type: external_exports.enum(BUILTIN_TOOL_CALL_STEP_TYPES),
    id: external_exports.string(),
    arguments: external_exports.record(external_exports.string(), external_exports.unknown()).nullish(),
    name: external_exports.string().nullish(),
    server_name: external_exports.string().nullish(),
    search_type: external_exports.string().nullish(),
    signature: external_exports.string().nullish()
  }).loose();
  const builtinToolResultStep = external_exports.object({
    type: external_exports.enum(BUILTIN_TOOL_RESULT_STEP_TYPES),
    call_id: external_exports.string(),
    result: external_exports.unknown().nullish(),
    is_error: external_exports.boolean().nullish(),
    name: external_exports.string().nullish(),
    server_name: external_exports.string().nullish(),
    signature: external_exports.string().nullish()
  }).loose();
  return external_exports.union([
    userInputStep,
    modelOutputStep,
    functionCallStep,
    thoughtStep,
    builtinToolCallStep,
    builtinToolResultStep,
    external_exports.object({ type: external_exports.string() }).loose()
  ]);
}, "stepSchema");
var googleInteractionsResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      /*
       * `id` is omitted from the response body when `store: false` (fully
       * stateless mode) — there is no server-side interaction record for the
       * client to reference. `nullish` lets the schema accept that shape.
       */
      id: external_exports.string().nullish(),
      created: external_exports.string().nullish(),
      updated: external_exports.string().nullish(),
      status: interactionStatusSchema(),
      model: external_exports.string().nullish(),
      agent: external_exports.string().nullish(),
      steps: external_exports.array(stepSchema()).nullish(),
      usage: usageSchema2().nullish(),
      service_tier: external_exports.string().nullish(),
      previous_interaction_id: external_exports.string().nullish(),
      response_modalities: external_exports.array(external_exports.string()).nullish()
    }).loose()
  )
);
var googleInteractionsEventSchema = lazySchema(
  () => zodSchema(
    (() => {
      const status = interactionStatusSchema();
      const annotation = annotationSchema();
      const thoughtSummaryItem = thoughtSummaryItemSchema();
      const interactionCreatedEvent = external_exports.object({
        event_type: external_exports.literal("interaction.created"),
        event_id: external_exports.string().nullish(),
        interaction: external_exports.object({
          /*
           * `id` is omitted when `store: false` (fully stateless mode);
           * see the matching note on `googleInteractionsResponseSchema.id`.
           */
          id: external_exports.string().nullish(),
          created: external_exports.string().nullish(),
          model: external_exports.string().nullish(),
          agent: external_exports.string().nullish(),
          status: status.nullish()
        }).loose()
      }).loose();
      const stepStartEvent = external_exports.object({
        event_type: external_exports.literal("step.start"),
        event_id: external_exports.string().nullish(),
        index: external_exports.number(),
        step: stepSchema()
      }).loose();
      const stepDeltaText = external_exports.object({
        type: external_exports.literal("text"),
        text: external_exports.string()
      }).loose();
      const stepDeltaThoughtSummary = external_exports.object({
        type: external_exports.literal("thought_summary"),
        content: thoughtSummaryItem.nullish()
      }).loose();
      const stepDeltaThoughtSignature = external_exports.object({
        type: external_exports.literal("thought_signature"),
        signature: external_exports.string().nullish()
      }).loose();
      const stepDeltaArgumentsDelta = external_exports.object({
        type: external_exports.literal("arguments_delta"),
        arguments: external_exports.string().nullish(),
        id: external_exports.string().nullish(),
        signature: external_exports.string().nullish()
      }).loose();
      const stepDeltaTextAnnotation = external_exports.object({
        type: external_exports.enum(["text_annotation_delta", "text_annotation"]),
        annotations: external_exports.array(annotation).nullish()
      }).loose();
      const stepDeltaImage = external_exports.object({
        type: external_exports.literal("image"),
        data: external_exports.string().nullish(),
        mime_type: external_exports.string().nullish(),
        resolution: external_exports.enum(["low", "medium", "high", "ultra_high"]).nullish(),
        uri: external_exports.string().nullish()
      }).loose();
      const stepDeltaVideo = external_exports.object({
        type: external_exports.literal("video"),
        data: external_exports.string().nullish(),
        mime_type: external_exports.string().nullish(),
        uri: external_exports.string().nullish()
      }).loose();
      const stepDeltaBuiltinToolCall = external_exports.object({
        type: external_exports.enum(BUILTIN_TOOL_CALL_STEP_TYPES),
        id: external_exports.string().nullish(),
        arguments: external_exports.record(external_exports.string(), external_exports.unknown()).nullish(),
        name: external_exports.string().nullish(),
        server_name: external_exports.string().nullish(),
        search_type: external_exports.string().nullish(),
        signature: external_exports.string().nullish()
      }).loose();
      const stepDeltaBuiltinToolResult = external_exports.object({
        type: external_exports.enum(BUILTIN_TOOL_RESULT_STEP_TYPES),
        call_id: external_exports.string().nullish(),
        result: external_exports.unknown().nullish(),
        is_error: external_exports.boolean().nullish(),
        name: external_exports.string().nullish(),
        server_name: external_exports.string().nullish(),
        signature: external_exports.string().nullish()
      }).loose();
      const stepDeltaUnknown = external_exports.object({ type: external_exports.string() }).loose();
      const stepDeltaUnion = external_exports.union([
        stepDeltaText,
        stepDeltaImage,
        stepDeltaVideo,
        stepDeltaThoughtSummary,
        stepDeltaThoughtSignature,
        stepDeltaArgumentsDelta,
        stepDeltaTextAnnotation,
        stepDeltaBuiltinToolCall,
        stepDeltaBuiltinToolResult,
        stepDeltaUnknown
      ]);
      const stepDeltaEvent = external_exports.object({
        event_type: external_exports.literal("step.delta"),
        event_id: external_exports.string().nullish(),
        index: external_exports.number(),
        delta: stepDeltaUnion
      }).loose();
      const stepStopEvent = external_exports.object({
        event_type: external_exports.literal("step.stop"),
        event_id: external_exports.string().nullish(),
        index: external_exports.number()
      }).loose();
      const interactionStatusUpdateEvent = external_exports.object({
        event_type: external_exports.literal("interaction.status_update"),
        event_id: external_exports.string().nullish(),
        interaction_id: external_exports.string().nullish(),
        status: status.nullish()
      }).loose();
      const interactionInProgressEvent = external_exports.object({
        event_type: external_exports.literal("interaction.in_progress"),
        event_id: external_exports.string().nullish(),
        interaction_id: external_exports.string().nullish(),
        status: status.nullish()
      }).loose();
      const interactionRequiresActionEvent = external_exports.object({
        event_type: external_exports.literal("interaction.requires_action"),
        event_id: external_exports.string().nullish(),
        interaction_id: external_exports.string().nullish(),
        status: status.nullish()
      }).loose();
      const interactionCompletedEvent = external_exports.object({
        event_type: external_exports.literal("interaction.completed"),
        event_id: external_exports.string().nullish(),
        interaction: external_exports.object({
          id: external_exports.string().nullish(),
          status: status.nullish(),
          usage: usageSchema2().nullish(),
          service_tier: external_exports.string().nullish()
        }).loose()
      }).loose();
      const errorEvent = external_exports.object({
        event_type: external_exports.literal("error"),
        event_id: external_exports.string().nullish(),
        error: external_exports.object({
          code: external_exports.string().nullish(),
          message: external_exports.string().nullish()
        }).loose().nullish()
      }).loose();
      const unknownEvent = external_exports.object({ event_type: external_exports.string() }).loose();
      return external_exports.union([
        interactionCreatedEvent,
        stepStartEvent,
        stepDeltaEvent,
        stepStopEvent,
        interactionStatusUpdateEvent,
        interactionInProgressEvent,
        interactionRequiresActionEvent,
        interactionCompletedEvent,
        errorEvent,
        unknownEvent
      ]);
    })()
  )
);
var googleInteractionsLanguageModelOptions = lazySchema(
  () => zodSchema(
    external_exports.object({
      previousInteractionId: external_exports.string().nullish(),
      store: external_exports.boolean().nullish(),
      agent: external_exports.string().nullish(),
      agentConfig: external_exports.union([
        external_exports.object({
          type: external_exports.literal("dynamic")
        }).loose(),
        external_exports.object({
          type: external_exports.literal("deep-research"),
          thinkingSummaries: external_exports.enum(["auto", "none"]).nullish(),
          visualization: external_exports.enum(["off", "auto"]).nullish(),
          collaborativePlanning: external_exports.boolean().nullish()
        })
      ]).nullish(),
      thinkingLevel: external_exports.enum(["minimal", "low", "medium", "high"]).nullish(),
      thinkingSummaries: external_exports.enum(["auto", "none"]).nullish(),
      /**
       * Output-format entries that map directly to the API's `response_format`
       * array. Use this to request image, audio, video, or non-JSON text
       * outputs with modality-specific controls.
       *
       * Entries are sent in order. The AI SDK call-level `responseFormat: {
       * type: 'json', schema }` still drives JSON-mode and adds a matching
       * text entry automatically; entries listed here are appended.
       */
      responseFormat: external_exports.array(
        external_exports.union([
          external_exports.object({
            type: external_exports.literal("text"),
            mimeType: external_exports.string().nullish(),
            schema: external_exports.unknown().nullish()
          }).loose(),
          external_exports.object({
            type: external_exports.literal("image"),
            mimeType: external_exports.string().nullish(),
            aspectRatio: external_exports.enum([
              "1:1",
              "2:3",
              "3:2",
              "3:4",
              "4:3",
              "4:5",
              "5:4",
              "9:16",
              "16:9",
              "21:9",
              "1:8",
              "8:1",
              "1:4",
              "4:1"
            ]).nullish(),
            imageSize: external_exports.enum(["1K", "2K", "4K", "512"]).nullish()
          }).loose(),
          external_exports.object({
            type: external_exports.literal("audio"),
            mimeType: external_exports.string().nullish()
          }).loose(),
          external_exports.object({
            type: external_exports.literal("video"),
            aspectRatio: external_exports.enum(["16:9", "9:16"]).nullish(),
            resolution: external_exports.enum(["360p", "720p", "1080p", "4k"]).nullish(),
            duration: external_exports.string().nullish(),
            delivery: external_exports.enum(["inline", "uri"]).nullish(),
            gcsUri: external_exports.string().nullish()
          }).loose()
        ])
      ).nullish(),
      /**
       * @deprecated Use `responseFormat` with a `{ type: 'image', ... }`
       * entry instead. Retained for backwards compatibility; the SDK
       * translates it into a matching `response_format` image entry and
       * emits a warning when set.
       */
      imageConfig: external_exports.object({
        aspectRatio: external_exports.enum([
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9",
          "1:8",
          "8:1",
          "1:4",
          "4:1"
        ]).nullish(),
        imageSize: external_exports.enum(["1K", "2K", "4K", "512"]).nullish()
      }).nullish(),
      mediaResolution: external_exports.enum(["low", "medium", "high", "ultra_high"]).nullish(),
      responseModalities: external_exports.array(external_exports.enum(["text", "image", "audio", "video", "document"])).nullish(),
      serviceTier: external_exports.enum(["flex", "standard", "priority"]).nullish(),
      /**
       * Alternative to AI SDK `system` message. If both are set, the AI SDK
       * `system` message wins and a warning is emitted.
       */
      systemInstruction: external_exports.string().nullish(),
      /**
       * Per-block signature for round-tripping `thought.signature` and
       * `function_call.signature` blocks. Set by the SDK on output reasoning /
       * tool-call parts; passed back unchanged on input parts so the API
       * accepts the prior turn.
       */
      signature: external_exports.string().nullish(),
      /**
       * Set by the SDK on output assistant messages. The converter uses it to
       * decide which messages to drop when compacting under
       * `previousInteractionId`.
       */
      interactionId: external_exports.string().nullish(),
      /**
       * Maximum time, in milliseconds, to poll a background interaction (agent
       * call) before giving up. Defaults to 30 minutes. Long-running agents
       * such as deep research can take tens of minutes — increase if needed.
       */
      pollingTimeoutMs: external_exports.number().int().positive().nullish(),
      /**
       * Run the interaction in the background. Required for agents whose
       * server-side workflow cannot complete within a single request/response.
       * When `true`, the POST returns with a non-terminal status and the SDK
       * polls `GET /interactions/{id}` until the work completes. Some agents
       * reject `true`; see the agent's documentation for which mode it
       * requires.
       */
      background: external_exports.boolean().nullish(),
      /**
       * Environment configuration for the agent sandbox. Only applies to agent
       * calls (`google.interactions({ agent })`); ignored on model-id calls.
       *
       *   - `"remote"`: provision a fresh sandbox for this call.
       *   - any other string: an existing `environment_id` to reuse.
       *   - object: provision a fresh sandbox and optionally preload `sources`
       *     and/or constrain outbound traffic via `network`.
       */
      environment: external_exports.union([
        external_exports.string(),
        external_exports.object({
          type: external_exports.literal("remote"),
          sources: external_exports.array(
            external_exports.union([
              external_exports.object({
                type: external_exports.literal("gcs"),
                source: external_exports.string(),
                target: external_exports.string().nullish()
              }),
              external_exports.object({
                type: external_exports.literal("repository"),
                source: external_exports.string(),
                target: external_exports.string().nullish()
              }),
              external_exports.object({
                type: external_exports.literal("inline"),
                content: external_exports.string(),
                target: external_exports.string()
              })
            ])
          ).nullish(),
          network: external_exports.union([
            external_exports.literal("disabled"),
            external_exports.object({
              allowlist: external_exports.array(
                external_exports.object({
                  domain: external_exports.string(),
                  transform: external_exports.array(external_exports.record(external_exports.string(), external_exports.string())).nullish()
                })
              )
            })
          ]).nullish()
        })
      ]).nullish()
    })
  )
);
function googleProviderMetadata({
  signature,
  interactionId
}) {
  const google2 = {};
  if (signature != null) {
    google2.signature = signature;
  }
  if (interactionId != null) {
    google2.interactionId = interactionId;
  }
  return Object.keys(google2).length > 0 ? { providerMetadata: { google: google2 } } : {};
}
__name(googleProviderMetadata, "googleProviderMetadata");
var BUILTIN_TOOL_CALL_TYPES2 = /* @__PURE__ */ new Set([
  "google_search_call",
  "code_execution_call",
  "url_context_call",
  "file_search_call",
  "google_maps_call",
  "mcp_server_tool_call"
]);
var BUILTIN_TOOL_RESULT_TYPES2 = /* @__PURE__ */ new Set([
  "google_search_result",
  "code_execution_result",
  "url_context_result",
  "file_search_result",
  "google_maps_result",
  "mcp_server_tool_result"
]);
function builtinToolNameFromCallType2(type) {
  return type.replace(/_call$/, "");
}
__name(builtinToolNameFromCallType2, "builtinToolNameFromCallType2");
function builtinToolNameFromResultType2(type) {
  return type.replace(/_result$/, "");
}
__name(builtinToolNameFromResultType2, "builtinToolNameFromResultType2");
function parseGoogleInteractionsOutputs({
  steps,
  generateId: generateId3,
  interactionId
}) {
  var _a24, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const content = [];
  let hasFunctionCall = false;
  if (steps == null) {
    return { content, hasFunctionCall };
  }
  for (const step of steps) {
    if (step == null || typeof step !== "object") continue;
    const type = step.type;
    if (typeof type !== "string") continue;
    switch (type) {
      case "user_input": {
        break;
      }
      case "model_output": {
        const blocks = (_a24 = step.content) != null ? _a24 : [];
        for (const block of blocks) {
          if (block == null || typeof block !== "object") continue;
          const blockType = block.type;
          if (blockType === "text") {
            const text2 = (_b17 = block.text) != null ? _b17 : "";
            const annotations = block.annotations;
            content.push({
              type: "text",
              text: text2,
              ...googleProviderMetadata({ interactionId })
            });
            const sources = annotationsToSources({ annotations, generateId: generateId3 });
            for (const source of sources) {
              content.push(source);
            }
          } else if (blockType === "image") {
            const image = block;
            if (image.data != null && image.data.length > 0) {
              content.push({
                type: "file",
                mediaType: (_c = image.mime_type) != null ? _c : "image/png",
                data: image.data,
                ...googleProviderMetadata({ interactionId })
              });
            } else if (image.uri != null && image.uri.length > 0) {
              content.push({
                type: "file",
                mediaType: (_d = image.mime_type) != null ? _d : "image/png",
                data: "",
                providerMetadata: {
                  google: {
                    ...interactionId != null ? { interactionId } : {},
                    imageUri: image.uri
                  }
                }
              });
            }
          } else if (blockType === "video") {
            const video = block;
            if (video.data != null && video.data.length > 0) {
              content.push({
                type: "file",
                mediaType: (_e = video.mime_type) != null ? _e : "video/mp4",
                data: video.data,
                ...googleProviderMetadata({ interactionId })
              });
            } else if (video.uri != null && video.uri.length > 0) {
              content.push({
                type: "file",
                mediaType: (_f = video.mime_type) != null ? _f : "video/mp4",
                data: "",
                providerMetadata: {
                  google: {
                    ...interactionId != null ? { interactionId } : {},
                    videoUri: video.uri
                  }
                }
              });
            }
          }
        }
        break;
      }
      case "thought": {
        const thought = step;
        const summary = Array.isArray(thought.summary) ? thought.summary : [];
        const text2 = summary.filter(
          (item) => (item == null ? void 0 : item.type) === "text" && typeof item.text === "string"
        ).map((item) => item.text).join("\n");
        content.push({
          type: "reasoning",
          text: text2,
          ...googleProviderMetadata({
            signature: thought.signature,
            interactionId
          })
        });
        break;
      }
      case "function_call": {
        hasFunctionCall = true;
        const call = step;
        content.push({
          type: "tool-call",
          toolCallId: call.id,
          toolName: call.name,
          input: JSON.stringify((_g = call.arguments) != null ? _g : {}),
          ...googleProviderMetadata({
            signature: call.signature,
            interactionId
          })
        });
        break;
      }
      default: {
        if (BUILTIN_TOOL_CALL_TYPES2.has(type)) {
          const call = step;
          const toolName = type === "mcp_server_tool_call" ? (_h = call.name) != null ? _h : "mcp_server_tool" : builtinToolNameFromCallType2(type);
          const input = JSON.stringify((_i = call.arguments) != null ? _i : {});
          content.push({
            type: "tool-call",
            toolCallId: (_j = call.id) != null ? _j : generateId3(),
            toolName,
            input,
            providerExecuted: true
          });
        } else if (BUILTIN_TOOL_RESULT_TYPES2.has(type)) {
          const result = step;
          const toolName = type === "mcp_server_tool_result" ? (_k = result.name) != null ? _k : "mcp_server_tool" : builtinToolNameFromResultType2(type);
          content.push({
            type: "tool-result",
            toolCallId: (_l = result.call_id) != null ? _l : generateId3(),
            toolName,
            result: (_m = result.result) != null ? _m : null
          });
          const sources = builtinToolResultToSources({
            block: step,
            generateId: generateId3
          });
          for (const source of sources) {
            content.push(source);
          }
        }
        break;
      }
    }
  }
  return { content, hasFunctionCall };
}
__name(parseGoogleInteractionsOutputs, "parseGoogleInteractionsOutputs");
var getOriginalFetch3 = /* @__PURE__ */ __name(() => globalThis.fetch, "getOriginalFetch");
async function cancelGoogleInteraction({
  baseURL,
  interactionId,
  headers,
  fetch: fetch2 = getOriginalFetch3()
}) {
  if (interactionId == null || interactionId.length === 0) {
    return;
  }
  const url = `${baseURL}/interactions/${encodeURIComponent(interactionId)}/cancel`;
  try {
    const response = await fetch2(url, {
      method: "POST",
      headers: withUserAgentSuffix(
        combineHeaders({ "Content-Type": "application/json" }, headers),
        getRuntimeEnvironmentUserAgent()
      ),
      body: "{}"
    });
    try {
      await response.text();
    } catch (e) {
    }
  } catch (e) {
  }
}
__name(cancelGoogleInteraction, "cancelGoogleInteraction");
var TERMINAL_STATUSES = /* @__PURE__ */ new Set(["completed", "failed", "cancelled", "incomplete"]);
function isTerminalStatus(status) {
  return status != null && TERMINAL_STATUSES.has(status);
}
__name(isTerminalStatus, "isTerminalStatus");
var DEFAULT_INITIAL_DELAY_MS = 1e3;
var DEFAULT_MAX_DELAY_MS = 1e4;
var DEFAULT_TIMEOUT_MS = 30 * 60 * 1e3;
async function pollGoogleInteractionUntilTerminal({
  baseURL,
  interactionId,
  headers,
  fetch: fetch2,
  abortSignal,
  initialDelayMs = DEFAULT_INITIAL_DELAY_MS,
  maxDelayMs = DEFAULT_MAX_DELAY_MS,
  timeoutMs = DEFAULT_TIMEOUT_MS
}) {
  if (interactionId == null || interactionId.length === 0) {
    throw new Error(
      "google.interactions: cannot poll a background interaction without an id. The POST response did not include an interaction id."
    );
  }
  const startedAt = Date.now();
  let nextDelayMs = initialDelayMs;
  const url = `${baseURL}/interactions/${encodeURIComponent(interactionId)}`;
  const cancelOnServer = /* @__PURE__ */ __name(() => cancelGoogleInteraction({ baseURL, interactionId, headers, fetch: fetch2 }), "cancelOnServer");
  try {
    while (true) {
      if (abortSignal == null ? void 0 : abortSignal.aborted) {
        await cancelOnServer();
        throw new DOMException("Polling was aborted", "AbortError");
      }
      if (Date.now() - startedAt > timeoutMs) {
        throw new Error(
          `google.interactions: timed out polling interaction ${interactionId} after ${timeoutMs}ms.`
        );
      }
      await delay(nextDelayMs, { abortSignal });
      const {
        value: response,
        rawValue: rawResponse,
        responseHeaders
      } = await getFromApi({
        url,
        headers,
        failedResponseHandler: googleFailedResponseHandler,
        successfulResponseHandler: createJsonResponseHandler(
          googleInteractionsResponseSchema
        ),
        abortSignal,
        fetch: fetch2
      });
      if (isTerminalStatus(response.status)) {
        return { response, rawResponse, responseHeaders };
      }
      nextDelayMs = Math.min(nextDelayMs * 2, maxDelayMs);
    }
  } catch (error) {
    if (isAbortError(error)) {
      await cancelOnServer();
    }
    throw error;
  }
}
__name(pollGoogleInteractionUntilTerminal, "pollGoogleInteractionUntilTerminal");
function prepareGoogleInteractionsTools({
  tools,
  toolChoice
}) {
  var _a24, _b17, _c, _d;
  const toolWarnings = [];
  const normalized = (tools == null ? void 0 : tools.length) ? tools : void 0;
  if (normalized == null) {
    return { tools: void 0, toolChoice: void 0, toolWarnings };
  }
  const interactionsTools = [];
  for (const tool2 of normalized) {
    if (tool2.type === "function") {
      interactionsTools.push({
        type: "function",
        name: tool2.name,
        description: (_a24 = tool2.description) != null ? _a24 : "",
        parameters: tool2.inputSchema
      });
      continue;
    }
    if (tool2.type === "provider") {
      const args = (_b17 = tool2.args) != null ? _b17 : {};
      switch (tool2.id) {
        case "google.google_search": {
          const searchTypesArg = args.searchTypes;
          let search_types;
          if (searchTypesArg != null && typeof searchTypesArg === "object") {
            const list = [];
            if (searchTypesArg.webSearch != null) list.push("web_search");
            if (searchTypesArg.imageSearch != null) list.push("image_search");
            if (list.length > 0) {
              search_types = list;
            }
          }
          interactionsTools.push({
            type: "google_search",
            ...search_types != null ? { search_types } : {}
          });
          break;
        }
        case "google.code_execution": {
          interactionsTools.push({ type: "code_execution" });
          break;
        }
        case "google.url_context": {
          interactionsTools.push({ type: "url_context" });
          break;
        }
        case "google.file_search": {
          interactionsTools.push({
            type: "file_search",
            ...args.fileSearchStoreNames != null ? {
              file_search_store_names: args.fileSearchStoreNames
            } : {},
            ...args.topK != null ? { top_k: args.topK } : {},
            ...args.metadataFilter != null ? { metadata_filter: args.metadataFilter } : {}
          });
          break;
        }
        case "google.google_maps": {
          interactionsTools.push({
            type: "google_maps",
            ...args.latitude != null ? { latitude: args.latitude } : {},
            ...args.longitude != null ? { longitude: args.longitude } : {},
            ...args.enableWidget != null ? { enable_widget: args.enableWidget } : {}
          });
          break;
        }
        case "google.computer_use": {
          interactionsTools.push({
            type: "computer_use",
            environment: (_c = args.environment) != null ? _c : "browser",
            ...args.excludedPredefinedFunctions != null ? {
              excludedPredefinedFunctions: args.excludedPredefinedFunctions
            } : {}
          });
          break;
        }
        case "google.mcp_server": {
          interactionsTools.push({
            type: "mcp_server",
            ...args.name != null ? { name: args.name } : {},
            ...args.url != null ? { url: args.url } : {},
            ...args.headers != null ? { headers: args.headers } : {},
            ...args.allowedTools != null ? { allowed_tools: args.allowedTools } : {}
          });
          break;
        }
        case "google.retrieval": {
          const vertexAiSearchConfig = (_d = args.vertexAiSearchConfig) != null ? _d : void 0;
          interactionsTools.push({
            type: "retrieval",
            ...args.retrievalTypes != null ? {
              retrieval_types: args.retrievalTypes
            } : { retrieval_types: ["vertex_ai_search"] },
            ...vertexAiSearchConfig != null ? { vertex_ai_search_config: vertexAiSearchConfig } : {}
          });
          break;
        }
        default: {
          toolWarnings.push({
            type: "unsupported",
            feature: `provider-defined tool ${tool2.id}`,
            details: `provider-defined tool ${tool2.id} is not supported by google.interactions; tool dropped.`
          });
          break;
        }
      }
      continue;
    }
    toolWarnings.push({
      type: "unsupported",
      feature: `tool of type ${tool2.type}`,
      details: "Only function tools and google.* provider-defined tools are supported by google.interactions; tool dropped."
    });
  }
  const hasFunctionTool = interactionsTools.some((t) => t.type === "function");
  let mappedToolChoice;
  if (toolChoice != null && hasFunctionTool) {
    switch (toolChoice.type) {
      case "auto":
        mappedToolChoice = "auto";
        break;
      case "required":
        mappedToolChoice = "any";
        break;
      case "none":
        mappedToolChoice = "none";
        break;
      case "tool":
        mappedToolChoice = {
          allowed_tools: {
            mode: "validated",
            tools: [toolChoice.toolName]
          }
        };
        break;
    }
  }
  return {
    tools: interactionsTools.length > 0 ? interactionsTools : void 0,
    toolChoice: mappedToolChoice,
    toolWarnings
  };
}
__name(prepareGoogleInteractionsTools, "prepareGoogleInteractionsTools");
var DEFAULT_MAX_RETRIES = 3;
var DEFAULT_RETRY_DELAY_MS = 500;
function streamGoogleInteractionEvents({
  baseURL,
  interactionId,
  headers,
  fetch: fetch2,
  abortSignal,
  maxRetries = DEFAULT_MAX_RETRIES,
  retryDelayMs = DEFAULT_RETRY_DELAY_MS
}) {
  if (interactionId.length === 0) {
    throw new Error(
      "google.interactions: cannot stream a background interaction without an id."
    );
  }
  const eventSourceHeaders = {
    ...headers,
    accept: "text/event-stream"
  };
  let lastEventId;
  let complete = false;
  let attempt = 0;
  let receivedAnyEventThisAttempt = false;
  let currentReader;
  const internalAbort = new AbortController();
  const upstreamAbortHandler = /* @__PURE__ */ __name(() => internalAbort.abort(), "upstreamAbortHandler");
  if (abortSignal != null) {
    if (abortSignal.aborted) {
      internalAbort.abort();
    } else {
      abortSignal.addEventListener("abort", upstreamAbortHandler, {
        once: true
      });
    }
  }
  const effectiveSignal = internalAbort.signal;
  function buildUrl() {
    const base = `${baseURL}/interactions/${encodeURIComponent(interactionId)}`;
    const params = new URLSearchParams({ stream: "true" });
    if (lastEventId != null) {
      params.set("last_event_id", lastEventId);
    }
    return `${base}?${params.toString()}`;
  }
  __name(buildUrl, "buildUrl");
  async function openReader() {
    const { value: stream } = await getFromApi({
      url: buildUrl(),
      headers: eventSourceHeaders,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createEventSourceResponseHandler(
        googleInteractionsEventSchema
      ),
      abortSignal: effectiveSignal,
      fetch: fetch2
    });
    return stream.getReader();
  }
  __name(openReader, "openReader");
  return new ReadableStream({
    async start(controller) {
      try {
        while (!complete && !effectiveSignal.aborted) {
          if (currentReader == null) {
            try {
              currentReader = await openReader();
              receivedAnyEventThisAttempt = false;
            } catch (error) {
              if (isAbortError(error) || effectiveSignal.aborted) {
                controller.error(error);
                return;
              }
              attempt++;
              if (attempt >= maxRetries) {
                controller.error(error);
                return;
              }
              await delay(retryDelayMs * attempt, {
                abortSignal: effectiveSignal
              });
              continue;
            }
          }
          try {
            const { done, value } = await currentReader.read();
            if (done) {
              currentReader = void 0;
              if (complete) break;
              if (!receivedAnyEventThisAttempt) {
                attempt++;
                if (attempt >= maxRetries) {
                  controller.error(
                    new Error(
                      "google.interactions: SSE stream closed without producing any events."
                    )
                  );
                  return;
                }
                await delay(retryDelayMs * attempt, {
                  abortSignal: effectiveSignal
                });
              } else {
                attempt = 0;
              }
              continue;
            }
            receivedAnyEventThisAttempt = true;
            if (value.success) {
              const ev = value.value;
              if (typeof ev.event_id === "string" && ev.event_id.length > 0) {
                lastEventId = ev.event_id;
              }
              if (ev.event_type === "interaction.completed" || ev.event_type === "error") {
                complete = true;
              }
            }
            controller.enqueue(value);
          } catch (error) {
            if (isAbortError(error) || effectiveSignal.aborted) {
              controller.error(error);
              return;
            }
            currentReader = void 0;
            attempt++;
            if (attempt >= maxRetries) {
              controller.error(error);
              return;
            }
            await delay(retryDelayMs * attempt, {
              abortSignal: effectiveSignal
            });
          }
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      } finally {
        if (abortSignal != null) {
          abortSignal.removeEventListener("abort", upstreamAbortHandler);
        }
        currentReader == null ? void 0 : currentReader.cancel().catch(() => {
        });
        currentReader = void 0;
        if (effectiveSignal.aborted && !complete) {
          await cancelGoogleInteraction({
            baseURL,
            interactionId,
            headers,
            fetch: fetch2
          });
        }
      }
    },
    cancel() {
      internalAbort.abort();
      currentReader == null ? void 0 : currentReader.cancel().catch(() => {
      });
      currentReader = void 0;
    }
  });
}
__name(streamGoogleInteractionEvents, "streamGoogleInteractionEvents");
function synthesizeGoogleInteractionsAgentStream({
  response,
  warnings,
  generateId: generateId3,
  includeRawChunks,
  headerServiceTier
}) {
  return new ReadableStream({
    start(controller) {
      var _a24, _b17, _c;
      controller.enqueue({ type: "stream-start", warnings });
      const interactionId = typeof response.id === "string" && response.id.length > 0 ? response.id : void 0;
      let timestamp;
      const created = response.created;
      if (typeof created === "string") {
        const parsed = new Date(created);
        if (!Number.isNaN(parsed.getTime())) {
          timestamp = parsed;
        }
      }
      controller.enqueue({
        type: "response-metadata",
        ...interactionId != null ? { id: interactionId } : {},
        modelId: (_a24 = response.model) != null ? _a24 : void 0,
        ...timestamp ? { timestamp } : {}
      });
      if (includeRawChunks) {
        controller.enqueue({ type: "raw", rawValue: response });
      }
      const { content, hasFunctionCall } = parseGoogleInteractionsOutputs({
        steps: (_b17 = response.steps) != null ? _b17 : null,
        generateId: generateId3,
        interactionId
      });
      let blockCounter = 0;
      const nextBlockId = /* @__PURE__ */ __name(() => `${interactionId != null ? interactionId : "agent"}:${blockCounter++}`, "nextBlockId");
      for (const part of content) {
        switch (part.type) {
          case "text": {
            const id = nextBlockId();
            const providerMetadata2 = part.providerMetadata;
            controller.enqueue({ type: "text-start", id });
            if (part.text.length > 0) {
              controller.enqueue({ type: "text-delta", id, delta: part.text });
            }
            controller.enqueue({
              type: "text-end",
              id,
              ...providerMetadata2 ? { providerMetadata: providerMetadata2 } : {}
            });
            break;
          }
          case "reasoning": {
            const id = nextBlockId();
            const providerMetadata2 = part.providerMetadata;
            controller.enqueue({ type: "reasoning-start", id });
            if (part.text.length > 0) {
              controller.enqueue({
                type: "reasoning-delta",
                id,
                delta: part.text
              });
            }
            controller.enqueue({
              type: "reasoning-end",
              id,
              ...providerMetadata2 ? { providerMetadata: providerMetadata2 } : {}
            });
            break;
          }
          case "tool-call": {
            const providerMetadata2 = part.providerMetadata;
            controller.enqueue({
              type: "tool-input-start",
              id: part.toolCallId,
              toolName: part.toolName,
              ...part.providerExecuted ? { providerExecuted: part.providerExecuted } : {}
            });
            controller.enqueue({
              type: "tool-input-delta",
              id: part.toolCallId,
              delta: part.input
            });
            controller.enqueue({
              type: "tool-input-end",
              id: part.toolCallId
            });
            controller.enqueue({
              type: "tool-call",
              toolCallId: part.toolCallId,
              toolName: part.toolName,
              input: part.input,
              ...part.providerExecuted ? { providerExecuted: part.providerExecuted } : {},
              ...providerMetadata2 ? { providerMetadata: providerMetadata2 } : {}
            });
            break;
          }
          case "tool-result": {
            controller.enqueue({
              type: "tool-result",
              toolCallId: part.toolCallId,
              toolName: part.toolName,
              result: part.result
            });
            break;
          }
          case "source":
          case "file": {
            controller.enqueue(part);
            break;
          }
          default:
            break;
        }
      }
      const serviceTier = (_c = response.service_tier) != null ? _c : headerServiceTier;
      const finishReason = {
        unified: mapGoogleInteractionsFinishReason({
          status: response.status,
          hasFunctionCall
        }),
        raw: response.status
      };
      const providerMetadata = {
        google: {
          ...interactionId != null ? { interactionId } : {},
          ...serviceTier != null ? { serviceTier } : {}
        }
      };
      controller.enqueue({
        type: "finish",
        finishReason,
        usage: convertGoogleInteractionsUsage(response.usage),
        providerMetadata
      });
      controller.close();
    }
  });
}
__name(synthesizeGoogleInteractionsAgentStream, "synthesizeGoogleInteractionsAgentStream");
var GoogleInteractionsLanguageModel = class {
  static {
    __name(this, "GoogleInteractionsLanguageModel");
  }
  constructor(modelOrAgent, config) {
    this.specificationVersion = "v3";
    if (typeof modelOrAgent === "string") {
      this.modelId = modelOrAgent;
      this.agent = void 0;
    } else if ("managedAgent" in modelOrAgent) {
      this.modelId = modelOrAgent.managedAgent;
      this.agent = modelOrAgent.managedAgent;
    } else {
      this.modelId = modelOrAgent.agent;
      this.agent = modelOrAgent.agent;
    }
    this.config = config;
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    if (this.config.supportedUrls) {
      return this.config.supportedUrls();
    }
    return {
      "image/*": [/^https?:\/\/.+/],
      "application/pdf": [/^https?:\/\/.+/],
      "audio/*": [/^https?:\/\/.+/],
      "video/*": [
        /^https?:\/\/(www\.)?youtube\.com\/watch\?v=.+/,
        /^https?:\/\/youtu\.be\/.+/,
        /^gs:\/\/.+/
      ]
    };
  }
  async getArgs(options) {
    var _a24, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
    const warnings = [];
    const opts = await parseProviderOptions({
      provider: "google",
      providerOptions: options.providerOptions,
      schema: googleInteractionsLanguageModelOptions
    });
    const isAgent = this.agent != null;
    if (!isAgent) {
      if (options.frequencyPenalty != null) {
        warnings.push({
          type: "unsupported",
          feature: "frequencyPenalty"
        });
      }
      if (options.presencePenalty != null) {
        warnings.push({
          type: "unsupported",
          feature: "presencePenalty"
        });
      }
    }
    const hasTools = options.tools != null && options.tools.length > 0;
    let toolsForBody;
    let toolChoiceForBody;
    if (hasTools) {
      const prepared = prepareGoogleInteractionsTools({
        tools: options.tools,
        toolChoice: options.toolChoice
      });
      toolsForBody = prepared.tools;
      toolChoiceForBody = prepared.toolChoice;
      warnings.push(...prepared.toolWarnings);
    }
    const responseFormatEntries = [];
    if (((_a24 = options.responseFormat) == null ? void 0 : _a24.type) === "json") {
      if (isAgent) {
        warnings.push({
          type: "other",
          message: "google.interactions: structured output (responseFormat) is not supported when an agent is set; responseFormat will be ignored."
        });
      } else {
        const entry = {
          type: "text",
          mime_type: "application/json",
          ...options.responseFormat.schema != null ? { schema: options.responseFormat.schema } : {}
        };
        responseFormatEntries.push(entry);
      }
    }
    if ((opts == null ? void 0 : opts.responseFormat) != null) {
      for (const entry of opts.responseFormat) {
        if (entry.type === "text") {
          responseFormatEntries.push(
            pruneUndefined({
              type: "text",
              mime_type: (_b17 = entry.mimeType) != null ? _b17 : void 0,
              schema: (_c = entry.schema) != null ? _c : void 0
            })
          );
        } else if (entry.type === "image") {
          responseFormatEntries.push(
            pruneUndefined({
              type: "image",
              mime_type: (_d = entry.mimeType) != null ? _d : void 0,
              aspect_ratio: (_e = entry.aspectRatio) != null ? _e : void 0,
              image_size: (_f = entry.imageSize) != null ? _f : void 0
            })
          );
        } else if (entry.type === "audio") {
          responseFormatEntries.push(
            pruneUndefined({
              type: "audio",
              mime_type: (_g = entry.mimeType) != null ? _g : void 0
            })
          );
        } else if (entry.type === "video") {
          responseFormatEntries.push(
            pruneUndefined({
              type: "video",
              aspect_ratio: (_h = entry.aspectRatio) != null ? _h : void 0,
              resolution: (_i = entry.resolution) != null ? _i : void 0,
              duration: (_j = entry.duration) != null ? _j : void 0,
              delivery: (_k = entry.delivery) != null ? _k : void 0,
              gcs_uri: (_l = entry.gcsUri) != null ? _l : void 0
            })
          );
        }
      }
    }
    const {
      input,
      systemInstruction: convertedSystemInstruction,
      warnings: convWarnings
    } = convertToGoogleInteractionsInput({
      prompt: options.prompt,
      previousInteractionId: (_m = opts == null ? void 0 : opts.previousInteractionId) != null ? _m : void 0,
      store: (_n = opts == null ? void 0 : opts.store) != null ? _n : void 0,
      mediaResolution: (_o = opts == null ? void 0 : opts.mediaResolution) != null ? _o : void 0
    });
    warnings.push(...convWarnings);
    let systemInstruction = convertedSystemInstruction;
    const optionSystemInstruction = (_p = opts == null ? void 0 : opts.systemInstruction) != null ? _p : void 0;
    if (systemInstruction != null && optionSystemInstruction != null) {
      warnings.push({
        type: "other",
        message: "google.interactions: both AI SDK system message and providerOptions.google.systemInstruction were set; using the AI SDK system message."
      });
    } else if (systemInstruction == null && optionSystemInstruction != null) {
      systemInstruction = optionSystemInstruction;
    }
    let generationConfig;
    if (isAgent) {
      const droppedFields = [];
      if (options.temperature != null) droppedFields.push("temperature");
      if (options.topP != null) droppedFields.push("topP");
      if (options.topK != null) droppedFields.push("topK");
      if (options.frequencyPenalty != null)
        droppedFields.push("frequencyPenalty");
      if (options.presencePenalty != null)
        droppedFields.push("presencePenalty");
      if (options.seed != null) droppedFields.push("seed");
      if (options.stopSequences != null && options.stopSequences.length > 0) {
        droppedFields.push("stopSequences");
      }
      if (options.maxOutputTokens != null)
        droppedFields.push("maxOutputTokens");
      if ((opts == null ? void 0 : opts.thinkingLevel) != null) droppedFields.push("thinkingLevel");
      if ((opts == null ? void 0 : opts.thinkingSummaries) != null) {
        droppedFields.push("thinkingSummaries");
      }
      if ((opts == null ? void 0 : opts.imageConfig) != null) droppedFields.push("imageConfig");
      if (droppedFields.length > 0) {
        warnings.push({
          type: "other",
          message: `google.interactions: ${droppedFields.join(", ")} ${droppedFields.length === 1 ? "is" : "are"} not supported when an agent is set; use providerOptions.google.agentConfig instead. Dropped from the request body.`
        });
      }
      generationConfig = void 0;
    } else {
      generationConfig = pruneUndefined({
        temperature: (_q = options.temperature) != null ? _q : void 0,
        top_p: (_r = options.topP) != null ? _r : void 0,
        top_k: (_s = options.topK) != null ? _s : void 0,
        seed: (_t = options.seed) != null ? _t : void 0,
        stop_sequences: options.stopSequences != null && options.stopSequences.length > 0 ? options.stopSequences : void 0,
        max_output_tokens: (_u = options.maxOutputTokens) != null ? _u : void 0,
        thinking_level: (_v = opts == null ? void 0 : opts.thinkingLevel) != null ? _v : void 0,
        thinking_summaries: (_w = opts == null ? void 0 : opts.thinkingSummaries) != null ? _w : void 0,
        tool_choice: toolChoiceForBody
      });
      if ((opts == null ? void 0 : opts.imageConfig) != null) {
        const alreadyHasImageEntry = responseFormatEntries.some(
          (entry) => entry.type === "image"
        );
        warnings.push({
          type: "other",
          message: alreadyHasImageEntry ? "google.interactions: providerOptions.google.imageConfig is deprecated and was ignored because providerOptions.google.responseFormat already supplies an image entry. Use responseFormat exclusively." : 'google.interactions: providerOptions.google.imageConfig is deprecated. Use providerOptions.google.responseFormat with a { type: "image", ... } entry instead.'
        });
        if (!alreadyHasImageEntry) {
          responseFormatEntries.push({
            type: "image",
            mime_type: "image/png",
            ...opts.imageConfig.aspectRatio != null ? { aspect_ratio: opts.imageConfig.aspectRatio } : {},
            ...opts.imageConfig.imageSize != null ? { image_size: opts.imageConfig.imageSize } : {}
          });
        }
      }
    }
    let agentConfig;
    if (isAgent && (opts == null ? void 0 : opts.agentConfig) != null) {
      const ac = opts.agentConfig;
      if (ac.type === "deep-research") {
        agentConfig = pruneUndefined({
          type: "deep-research",
          thinking_summaries: (_x = ac.thinkingSummaries) != null ? _x : void 0,
          visualization: (_y = ac.visualization) != null ? _y : void 0,
          collaborative_planning: (_z = ac.collaborativePlanning) != null ? _z : void 0
        });
      } else if (ac.type === "dynamic") {
        agentConfig = { type: "dynamic" };
      }
    }
    let environment;
    if ((opts == null ? void 0 : opts.environment) != null) {
      if (!isAgent) {
        warnings.push({
          type: "other",
          message: "google.interactions: environment is only supported when an agent is set; environment will be omitted from the request body."
        });
      } else if (typeof opts.environment === "string") {
        environment = opts.environment;
      } else {
        const env = opts.environment;
        const sources = (_A = env.sources) == null ? void 0 : _A.map((s) => {
          var _a34;
          if (s.type === "inline") {
            return {
              type: "inline",
              content: s.content,
              target: s.target
            };
          }
          return pruneUndefined({
            type: s.type,
            source: s.source,
            target: (_a34 = s.target) != null ? _a34 : void 0
          });
        });
        let network;
        if (env.network === "disabled") {
          network = "disabled";
        } else if (env.network != null) {
          network = {
            allowlist: env.network.allowlist.map(
              (entry) => {
                var _a34;
                return pruneUndefined({
                  domain: entry.domain,
                  transform: (_a34 = entry.transform) != null ? _a34 : void 0
                });
              }
            )
          };
        }
        environment = pruneUndefined({
          type: "remote",
          sources: sources != null && sources.length > 0 ? sources : void 0,
          network
        });
      }
    }
    const args = pruneUndefined({
      ...isAgent ? { agent: this.agent } : { model: this.modelId },
      input,
      system_instruction: systemInstruction,
      tools: toolsForBody,
      response_format: responseFormatEntries.length > 0 ? responseFormatEntries : void 0,
      response_modalities: (opts == null ? void 0 : opts.responseModalities) != null ? opts.responseModalities : void 0,
      previous_interaction_id: (_B = opts == null ? void 0 : opts.previousInteractionId) != null ? _B : void 0,
      service_tier: (_C = opts == null ? void 0 : opts.serviceTier) != null ? _C : void 0,
      store: (_D = opts == null ? void 0 : opts.store) != null ? _D : void 0,
      generation_config: generationConfig != null && Object.keys(generationConfig).length > 0 ? generationConfig : void 0,
      agent_config: agentConfig,
      environment,
      background: (_E = opts == null ? void 0 : opts.background) != null ? _E : void 0
    });
    return {
      args,
      warnings,
      isAgent,
      isBackground: (opts == null ? void 0 : opts.background) === true,
      pollingTimeoutMs: (_F = opts == null ? void 0 : opts.pollingTimeoutMs) != null ? _F : void 0
    };
  }
  async doGenerate(options) {
    var _a24, _b17, _c, _d, _e, _f;
    const { args, warnings, isAgent, pollingTimeoutMs } = await this.getArgs(options);
    const url = `${this.config.baseURL}/interactions`;
    const mergedHeaders = combineHeaders(
      INTERACTIONS_API_REVISION_HEADER,
      this.config.headers ? await resolve(this.config.headers) : void 0,
      options.headers
    );
    const postResult = await postJsonToApi({
      url,
      headers: mergedHeaders,
      body: args,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        googleInteractionsResponseSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    let {
      responseHeaders,
      value: response,
      rawValue: rawResponse
    } = postResult;
    if (isAgent && !isTerminalStatus(response.status)) {
      const polled = await pollGoogleInteractionUntilTerminal({
        baseURL: this.config.baseURL,
        interactionId: response.id,
        headers: mergedHeaders,
        fetch: this.config.fetch,
        abortSignal: options.abortSignal,
        timeoutMs: pollingTimeoutMs
      });
      response = polled.response;
      rawResponse = polled.rawResponse;
      responseHeaders = (_a24 = polled.responseHeaders) != null ? _a24 : responseHeaders;
    }
    const interactionId = typeof response.id === "string" && response.id.length > 0 ? response.id : void 0;
    const { content, hasFunctionCall } = parseGoogleInteractionsOutputs({
      steps: (_b17 = response.steps) != null ? _b17 : null,
      generateId: (_c = this.config.generateId) != null ? _c : generateId,
      interactionId
    });
    const finishReason = {
      unified: mapGoogleInteractionsFinishReason({
        status: response.status,
        hasFunctionCall
      }),
      raw: response.status
    };
    const serviceTier = (_e = (_d = response.service_tier) != null ? _d : responseHeaders == null ? void 0 : responseHeaders["x-gemini-service-tier"]) != null ? _e : void 0;
    const outputTokensByModality = getGoogleInteractionsOutputTokensByModality(
      response.usage
    );
    const providerMetadata = {
      google: {
        ...interactionId != null ? { interactionId } : {},
        ...serviceTier != null ? { serviceTier } : {},
        ...outputTokensByModality != null ? { outputTokensByModality } : {}
      }
    };
    let timestamp;
    if (typeof response.created === "string") {
      const parsed = new Date(response.created);
      if (!Number.isNaN(parsed.getTime())) {
        timestamp = parsed;
      }
    }
    return {
      content,
      finishReason,
      usage: convertGoogleInteractionsUsage(response.usage),
      warnings,
      providerMetadata,
      request: { body: args },
      response: {
        headers: responseHeaders,
        body: rawResponse,
        ...interactionId != null ? { id: interactionId } : {},
        ...timestamp ? { timestamp } : {},
        modelId: (_f = response.model) != null ? _f : void 0
      }
    };
  }
  async doStream(options) {
    var _a24;
    const { args, warnings, isBackground, pollingTimeoutMs } = await this.getArgs(options);
    const url = `${this.config.baseURL}/interactions`;
    const mergedHeaders = combineHeaders(
      INTERACTIONS_API_REVISION_HEADER,
      this.config.headers ? await resolve(this.config.headers) : void 0,
      options.headers
    );
    if (isBackground) {
      return this.doStreamBackground({
        args,
        warnings,
        url,
        mergedHeaders,
        options,
        pollingTimeoutMs
      });
    }
    const body = { ...args, stream: true };
    const { responseHeaders, value: response } = await postJsonToApi({
      url,
      headers: mergedHeaders,
      body,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createEventSourceResponseHandler(
        googleInteractionsEventSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const headerServiceTier = responseHeaders == null ? void 0 : responseHeaders["x-gemini-service-tier"];
    const transform = buildGoogleInteractionsStreamTransform({
      warnings,
      generateId: (_a24 = this.config.generateId) != null ? _a24 : generateId,
      includeRawChunks: options.includeRawChunks,
      serviceTier: headerServiceTier
    });
    return {
      stream: response.pipeThrough(transform),
      request: { body },
      response: { headers: responseHeaders }
    };
  }
  /*
   * Drive the streaming surface for agent calls. Agents require
   * `background: true`, which is incompatible with `stream: true` on POST.
   *
   * Approach:
   *   1. POST `/interactions` with `background: true`. The response includes
   *      the interaction id and an initial (usually non-terminal) status.
   *   2. If the POST status is already terminal (rare), synthesize a stream
   *      from the polled outputs and we're done.
   *   3. Otherwise open `GET /interactions/{id}?stream=true` and pipe the
   *      SSE events through `buildGoogleInteractionsStreamTransform` so the
   *      consumer receives text deltas / thinking summaries / tool events as
   *      they happen instead of all at once at the end.
   *
   * The SSE connection can drop while the agent idles between events
   * (`UND_ERR_BODY_TIMEOUT`); `streamGoogleInteractionEvents` handles the
   * reconnect-with-`last_event_id` loop transparently.
   */
  async doStreamBackground({
    args,
    warnings,
    url,
    mergedHeaders,
    options,
    pollingTimeoutMs
  }) {
    var _a24, _b17;
    const postResult = await postJsonToApi({
      url,
      headers: mergedHeaders,
      body: args,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        googleInteractionsResponseSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const { responseHeaders: postHeaders, value: postResponse } = postResult;
    const interactionId = postResponse.id;
    if (interactionId == null || interactionId.length === 0) {
      throw new Error(
        "google.interactions: background POST response did not include an interaction id; cannot stream the result."
      );
    }
    const headerServiceTier = postHeaders == null ? void 0 : postHeaders["x-gemini-service-tier"];
    if (isTerminalStatus(postResponse.status)) {
      const synthesized = synthesizeGoogleInteractionsAgentStream({
        response: postResponse,
        warnings,
        generateId: (_a24 = this.config.generateId) != null ? _a24 : generateId,
        includeRawChunks: options.includeRawChunks,
        headerServiceTier
      });
      return {
        stream: synthesized,
        request: { body: args },
        response: { headers: postHeaders }
      };
    }
    const events = streamGoogleInteractionEvents({
      baseURL: this.config.baseURL,
      interactionId,
      headers: mergedHeaders,
      fetch: this.config.fetch,
      abortSignal: options.abortSignal
    });
    const transform = buildGoogleInteractionsStreamTransform({
      warnings,
      generateId: (_b17 = this.config.generateId) != null ? _b17 : generateId,
      includeRawChunks: options.includeRawChunks,
      serviceTier: headerServiceTier
    });
    return {
      stream: events.pipeThrough(transform),
      request: { body: args },
      response: { headers: postHeaders }
    };
  }
};
var INTERACTIONS_API_REVISION_HEADER = {
  "Api-Revision": "2026-05-20"
};
function pruneUndefined(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === void 0) continue;
    result[key] = value;
  }
  return result;
}
__name(pruneUndefined, "pruneUndefined");
var supportedExternalUrlMediaTypes = [
  "text/html",
  "text/css",
  "text/plain",
  "text/xml",
  "text/csv",
  "text/rtf",
  "text/javascript",
  "application/json",
  "application/pdf",
  "image/bmp",
  "image/jpeg",
  "image/png",
  "image/webp",
  "video/mp4",
  "video/mpeg",
  "video/quicktime",
  "video/avi",
  "video/x-flv",
  "video/mpg",
  "video/webm",
  "video/wmv",
  "video/3gpp"
];
var externalHttpsUrlPattern = /^https:\/\/.*$/;
function supportsExternalFileUrls(modelId) {
  return /(^|\/)gemini-/.test(modelId) && !/(^|\/)gemini-2\.0/.test(modelId);
}
__name(supportsExternalFileUrls, "supportsExternalFileUrls");
function createGoogleGenerativeAI(options = {}) {
  var _a24, _b17;
  const baseURL = (_a24 = withoutTrailingSlash(options.baseURL)) != null ? _a24 : "https://generativelanguage.googleapis.com/v1beta";
  const providerName = (_b17 = options.name) != null ? _b17 : "google.generative-ai";
  const getHeaders = /* @__PURE__ */ __name(() => withUserAgentSuffix(
    {
      "x-goog-api-key": loadApiKey({
        apiKey: options.apiKey,
        environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
        description: "Google Generative AI"
      }),
      ...options.headers
    },
    `ai-sdk/google/${VERSION2}`
  ), "getHeaders");
  const createChatModel = /* @__PURE__ */ __name((modelId) => {
    var _a34;
    return new GoogleGenerativeAILanguageModel(modelId, {
      provider: providerName,
      baseURL,
      headers: getHeaders,
      generateId: (_a34 = options.generateId) != null ? _a34 : generateId,
      supportedUrls: /* @__PURE__ */ __name(() => ({
        "*": [
          // Google Generative Language "files" endpoint
          // e.g. https://generativelanguage.googleapis.com/v1beta/files/...
          new RegExp(`^${baseURL}/files/.*$`),
          // YouTube URLs (public or unlisted videos)
          new RegExp(
            `^https://(?:www\\.)?youtube\\.com/watch\\?v=[\\w-]+(?:&[\\w=&.-]*)?$`
          ),
          new RegExp(`^https://youtu\\.be/[\\w-]+(?:\\?[\\w=&.-]*)?$`)
        ],
        ...supportsExternalFileUrls(modelId) ? Object.fromEntries(
          supportedExternalUrlMediaTypes.map((mediaType) => [
            mediaType,
            [externalHttpsUrlPattern]
          ])
        ) : {}
      }), "supportedUrls"),
      fetch: options.fetch
    });
  }, "createChatModel");
  const createEmbeddingModel = /* @__PURE__ */ __name((modelId) => new GoogleGenerativeAIEmbeddingModel(modelId, {
    provider: providerName,
    baseURL,
    headers: getHeaders,
    fetch: options.fetch
  }), "createEmbeddingModel");
  const createImageModel = /* @__PURE__ */ __name((modelId, settings = {}) => new GoogleGenerativeAIImageModel(modelId, settings, {
    provider: providerName,
    baseURL,
    headers: getHeaders,
    fetch: options.fetch
  }), "createImageModel");
  const createTranscriptionModel = /* @__PURE__ */ __name((modelId) => new GoogleTranscriptionModel(modelId, {
    provider: `${providerName}.transcription`,
    baseURL,
    headers: getHeaders,
    fetch: options.fetch
  }), "createTranscriptionModel");
  const createVideoModel = /* @__PURE__ */ __name((modelId) => {
    var _a34;
    return new GoogleGenerativeAIVideoModel(modelId, {
      provider: providerName,
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      generateId: (_a34 = options.generateId) != null ? _a34 : generateId
    });
  }, "createVideoModel");
  const createInteractionsModel = /* @__PURE__ */ __name((modelIdOrAgent) => {
    var _a34;
    return new GoogleInteractionsLanguageModel(
      modelIdOrAgent,
      {
        provider: `${providerName}.interactions`,
        baseURL,
        headers: getHeaders,
        generateId: (_a34 = options.generateId) != null ? _a34 : generateId,
        fetch: options.fetch
      }
    );
  }, "createInteractionsModel");
  const provider = /* @__PURE__ */ __name(function(modelId) {
    if (new.target) {
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    }
    return createChatModel(modelId);
  }, "provider");
  provider.specificationVersion = "v3";
  provider.languageModel = createChatModel;
  provider.chat = createChatModel;
  provider.generativeAI = createChatModel;
  provider.embedding = createEmbeddingModel;
  provider.embeddingModel = createEmbeddingModel;
  provider.textEmbedding = createEmbeddingModel;
  provider.textEmbeddingModel = createEmbeddingModel;
  provider.image = createImageModel;
  provider.imageModel = createImageModel;
  provider.transcription = createTranscriptionModel;
  provider.transcriptionModel = createTranscriptionModel;
  provider.video = createVideoModel;
  provider.videoModel = createVideoModel;
  provider.interactions = createInteractionsModel;
  provider.tools = googleTools;
  return provider;
}
__name(createGoogleGenerativeAI, "createGoogleGenerativeAI");
var google = createGoogleGenerativeAI();

// node_modules/zod/index.js
init_esm();

// node_modules/ai/dist/index.mjs
init_esm();

// node_modules/@ai-sdk/gateway/dist/index.mjs
init_esm();
var import_oidc = __toESM(require_dist(), 1);
var import_oidc2 = __toESM(require_dist(), 1);
var marker16 = "vercel.ai.gateway.error";
var symbol16 = Symbol.for(marker16);
var _a17;
var _b16;
var GatewayError = class _GatewayError extends (_b16 = Error, _a17 = symbol16, _b16) {
  static {
    __name(this, "_GatewayError");
  }
  constructor({
    message,
    statusCode = 500,
    cause,
    generationId,
    isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500)
    // server error
  }) {
    super(generationId ? `${message} [${generationId}]` : message);
    this[_a17] = true;
    this.statusCode = statusCode;
    this.cause = cause;
    this.generationId = generationId;
    this.isRetryable = isRetryable;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(error) {
    return _GatewayError.hasMarker(error);
  }
  static hasMarker(error) {
    return typeof error === "object" && error !== null && symbol16 in error && error[symbol16] === true;
  }
};
var name15 = "GatewayAuthenticationError";
var marker22 = `vercel.ai.gateway.error.${name15}`;
var symbol22 = Symbol.for(marker22);
var _a22;
var _b22;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b22 = GatewayError, _a22 = symbol22, _b22) {
  static {
    __name(this, "_GatewayAuthenticationError");
  }
  constructor({
    message = "Authentication failed",
    statusCode = 401,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a22] = true;
    this.name = name15;
    this.type = "authentication_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol22 in error;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided,
    oidcTokenProvided,
    message = "Authentication failed",
    statusCode = 401,
    cause,
    generationId
  }) {
    let contextualMessage;
    if (apiKeyProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
    } else if (oidcTokenProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
    } else {
      contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
    }
    return new _GatewayAuthenticationError({
      message: contextualMessage,
      statusCode,
      cause,
      generationId
    });
  }
};
var name22 = "GatewayInvalidRequestError";
var marker32 = `vercel.ai.gateway.error.${name22}`;
var symbol32 = Symbol.for(marker32);
var _a32;
var _b32;
var GatewayInvalidRequestError = class extends (_b32 = GatewayError, _a32 = symbol32, _b32) {
  static {
    __name(this, "GatewayInvalidRequestError");
  }
  constructor({
    message = "Invalid request",
    statusCode = 400,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a32] = true;
    this.name = name22;
    this.type = "invalid_request_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol32 in error;
  }
};
var name32 = "GatewayRateLimitError";
var marker42 = `vercel.ai.gateway.error.${name32}`;
var symbol42 = Symbol.for(marker42);
var _a42;
var _b42;
var GatewayRateLimitError = class extends (_b42 = GatewayError, _a42 = symbol42, _b42) {
  static {
    __name(this, "GatewayRateLimitError");
  }
  constructor({
    message = "Rate limit exceeded",
    statusCode = 429,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a42] = true;
    this.name = name32;
    this.type = "rate_limit_exceeded";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol42 in error;
  }
};
var name42 = "GatewayModelNotFoundError";
var marker52 = `vercel.ai.gateway.error.${name42}`;
var symbol52 = Symbol.for(marker52);
var modelNotFoundParamSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      modelId: external_exports.string()
    })
  )
);
var _a52;
var _b52;
var GatewayModelNotFoundError = class extends (_b52 = GatewayError, _a52 = symbol52, _b52) {
  static {
    __name(this, "GatewayModelNotFoundError");
  }
  constructor({
    message = "Model not found",
    statusCode = 404,
    modelId,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a52] = true;
    this.name = name42;
    this.type = "model_not_found";
    this.modelId = modelId;
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol52 in error;
  }
};
var name52 = "GatewayInternalServerError";
var marker62 = `vercel.ai.gateway.error.${name52}`;
var symbol62 = Symbol.for(marker62);
var _a62;
var _b62;
var GatewayInternalServerError = class extends (_b62 = GatewayError, _a62 = symbol62, _b62) {
  static {
    __name(this, "GatewayInternalServerError");
  }
  constructor({
    message = "Internal server error",
    statusCode = 500,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a62] = true;
    this.name = name52;
    this.type = "internal_server_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol62 in error;
  }
};
var name62 = "GatewayFailedDependencyError";
var marker72 = `vercel.ai.gateway.error.${name62}`;
var symbol72 = Symbol.for(marker72);
var _a72;
var _b72;
var GatewayFailedDependencyError = class extends (_b72 = GatewayError, _a72 = symbol72, _b72) {
  static {
    __name(this, "GatewayFailedDependencyError");
  }
  constructor({
    message = "Failed dependency",
    statusCode = 424,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a72] = true;
    this.name = name62;
    this.type = "failed_dependency";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol72 in error;
  }
};
var name72 = "GatewayForbiddenError";
var marker82 = `vercel.ai.gateway.error.${name72}`;
var symbol82 = Symbol.for(marker82);
var forbiddenParamSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      ruleId: external_exports.string()
    })
  )
);
var _a82;
var _b82;
var GatewayForbiddenError = class extends (_b82 = GatewayError, _a82 = symbol82, _b82) {
  static {
    __name(this, "GatewayForbiddenError");
  }
  constructor({
    message = "Forbidden",
    statusCode = 403,
    cause,
    generationId,
    ruleId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a82] = true;
    this.name = name72;
    this.type = "forbidden";
    this.ruleId = ruleId;
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol82 in error;
  }
};
var name82 = "GatewayResponseError";
var marker92 = `vercel.ai.gateway.error.${name82}`;
var symbol92 = Symbol.for(marker92);
var _a92;
var _b92;
var GatewayResponseError = class extends (_b92 = GatewayError, _a92 = symbol92, _b92) {
  static {
    __name(this, "GatewayResponseError");
  }
  constructor({
    message = "Invalid response from Gateway",
    statusCode = 502,
    response,
    validationError,
    cause,
    generationId,
    isRetryable
  } = {}) {
    super({ message, statusCode, cause, generationId, isRetryable });
    this[_a92] = true;
    this.name = name82;
    this.type = "response_error";
    this.response = response;
    this.validationError = validationError;
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol92 in error;
  }
};
async function createGatewayErrorFromResponse({
  response,
  statusCode,
  defaultMessage = "Gateway request failed",
  cause,
  authMethod,
  isRetryable
}) {
  var _a113;
  const parseResult = await safeValidateTypes({
    value: response,
    schema: gatewayErrorResponseSchema
  });
  if (!parseResult.success) {
    const rawGenerationId = typeof response === "object" && response !== null && "generationId" in response ? response.generationId : void 0;
    return new GatewayResponseError({
      message: `Invalid error response format: ${defaultMessage}`,
      statusCode,
      response,
      validationError: parseResult.error,
      cause,
      generationId: rawGenerationId,
      isRetryable
    });
  }
  const validatedResponse = parseResult.value;
  const errorType = validatedResponse.error.type;
  const message = validatedResponse.error.message;
  const generationId = (_a113 = validatedResponse.generationId) != null ? _a113 : void 0;
  switch (errorType) {
    case "authentication_error":
      return GatewayAuthenticationError.createContextualError({
        apiKeyProvided: authMethod === "api-key",
        oidcTokenProvided: authMethod === "oidc",
        statusCode,
        cause,
        generationId
      });
    case "invalid_request_error":
      return new GatewayInvalidRequestError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "rate_limit_exceeded":
      return new GatewayRateLimitError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "model_not_found": {
      const modelResult = await safeValidateTypes({
        value: validatedResponse.error.param,
        schema: modelNotFoundParamSchema
      });
      return new GatewayModelNotFoundError({
        message,
        statusCode,
        modelId: modelResult.success ? modelResult.value.modelId : void 0,
        cause,
        generationId
      });
    }
    case "internal_server_error":
      return new GatewayInternalServerError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "failed_dependency":
      return new GatewayFailedDependencyError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "forbidden": {
      const ruleResult = await safeValidateTypes({
        value: validatedResponse.error.param,
        schema: forbiddenParamSchema
      });
      return new GatewayForbiddenError({
        message,
        statusCode,
        cause,
        generationId,
        ruleId: ruleResult.success ? ruleResult.value.ruleId : void 0
      });
    }
    default:
      return new GatewayInternalServerError({
        message,
        statusCode,
        cause,
        generationId
      });
  }
}
__name(createGatewayErrorFromResponse, "createGatewayErrorFromResponse");
var gatewayErrorResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      error: external_exports.object({
        message: external_exports.string(),
        type: external_exports.string().nullish(),
        param: external_exports.unknown().nullish(),
        code: external_exports.union([external_exports.string(), external_exports.number()]).nullish()
      }),
      generationId: external_exports.string().nullish()
    })
  )
);
function extractApiCallResponse(error) {
  if (error.data !== void 0) {
    return error.data;
  }
  if (error.responseBody != null) {
    try {
      return secureJsonParse(error.responseBody);
    } catch (e) {
      return error.responseBody;
    }
  }
  return {};
}
__name(extractApiCallResponse, "extractApiCallResponse");
var name92 = "GatewayTimeoutError";
var marker102 = `vercel.ai.gateway.error.${name92}`;
var symbol102 = Symbol.for(marker102);
var _a102;
var _b102;
var GatewayTimeoutError = class _GatewayTimeoutError extends (_b102 = GatewayError, _a102 = symbol102, _b102) {
  static {
    __name(this, "_GatewayTimeoutError");
  }
  constructor({
    message = "Request timed out",
    statusCode = 408,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a102] = true;
    this.name = name92;
    this.type = "timeout_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol102 in error;
  }
  /**
   * Creates a helpful timeout error message with troubleshooting guidance
   */
  static createTimeoutError({
    originalMessage,
    statusCode = 408,
    cause,
    generationId
  }) {
    const message = `Gateway request timed out: ${originalMessage}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`;
    return new _GatewayTimeoutError({
      message,
      statusCode,
      cause,
      generationId
    });
  }
};
function isTimeoutError(error) {
  if (!(error instanceof Error)) {
    return false;
  }
  const errorCode = error.code;
  if (typeof errorCode === "string") {
    const undiciTimeoutCodes = [
      "UND_ERR_HEADERS_TIMEOUT",
      "UND_ERR_BODY_TIMEOUT",
      "UND_ERR_CONNECT_TIMEOUT"
    ];
    return undiciTimeoutCodes.includes(errorCode);
  }
  return false;
}
__name(isTimeoutError, "isTimeoutError");
async function asGatewayError(error, authMethod) {
  var _a113;
  if (GatewayError.isInstance(error)) {
    return error;
  }
  if (isTimeoutError(error)) {
    return GatewayTimeoutError.createTimeoutError({
      originalMessage: error instanceof Error ? error.message : "Unknown error",
      cause: error
    });
  }
  if (APICallError.isInstance(error)) {
    if (error.cause && isTimeoutError(error.cause)) {
      return GatewayTimeoutError.createTimeoutError({
        originalMessage: error.message,
        cause: error
      });
    }
    return await createGatewayErrorFromResponse({
      response: extractApiCallResponse(error),
      statusCode: (_a113 = error.statusCode) != null ? _a113 : 500,
      defaultMessage: "Gateway request failed",
      cause: error,
      authMethod,
      isRetryable: error.isRetryable && (error.statusCode == null || error.statusCode < 400) ? true : void 0
    });
  }
  return await createGatewayErrorFromResponse({
    response: {},
    statusCode: 500,
    defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
    cause: error,
    authMethod
  });
}
__name(asGatewayError, "asGatewayError");
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
  const result = await safeValidateTypes({
    value: headers[GATEWAY_AUTH_METHOD_HEADER],
    schema: gatewayAuthMethodSchema
  });
  return result.success ? result.value : void 0;
}
__name(parseAuthMethod, "parseAuthMethod");
var gatewayAuthMethodSchema = lazySchema(
  () => zodSchema(external_exports.union([external_exports.literal("api-key"), external_exports.literal("oidc")]))
);
var KNOWN_MODEL_TYPES = [
  "embedding",
  "image",
  "language",
  "reranking",
  "speech",
  "transcription",
  "video"
];
var GatewayFetchMetadata = class {
  static {
    __name(this, "GatewayFetchMetadata");
  }
  constructor(config) {
    this.config = config;
  }
  async getAvailableModels() {
    try {
      const { value } = await getFromApi({
        url: `${this.config.baseURL}/config`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayAvailableModelsResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a113;
            return (_a113 = getErrorMessage2(data)) != null ? _a113 : "unknown error";
          }, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw await asGatewayError(error);
    }
  }
  async getCredits() {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/credits`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayCreditsResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a113;
            return (_a113 = getErrorMessage2(data)) != null ? _a113 : "unknown error";
          }, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw await asGatewayError(error);
    }
  }
};
var gatewayAvailableModelsResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      models: external_exports.array(
        external_exports.object({
          id: external_exports.string(),
          name: external_exports.string(),
          description: external_exports.string().nullish(),
          pricing: external_exports.object({
            input: external_exports.string(),
            output: external_exports.string(),
            input_cache_read: external_exports.string().nullish(),
            input_cache_write: external_exports.string().nullish()
          }).transform(
            ({ input, output, input_cache_read, input_cache_write }) => ({
              input,
              output,
              ...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
              ...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
            })
          ).nullish(),
          specification: external_exports.object({
            specificationVersion: external_exports.literal("v3"),
            provider: external_exports.string(),
            modelId: external_exports.string()
          }),
          modelType: external_exports.string().nullish()
        })
      ).transform(
        (models) => models.filter(
          (m) => m.modelType == null || KNOWN_MODEL_TYPES.includes(m.modelType)
        )
      )
    })
  )
);
var gatewayCreditsResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      balance: external_exports.string(),
      total_used: external_exports.string()
    }).transform(({ balance, total_used }) => ({
      balance,
      totalUsed: total_used
    }))
  )
);
var GatewaySpendReport = class {
  static {
    __name(this, "GatewaySpendReport");
  }
  constructor(config) {
    this.config = config;
  }
  async getSpendReport(params) {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const searchParams = new URLSearchParams();
      searchParams.set("start_date", params.startDate);
      searchParams.set("end_date", params.endDate);
      if (params.groupBy) {
        searchParams.set("group_by", params.groupBy);
      }
      if (params.datePart) {
        searchParams.set("date_part", params.datePart);
      }
      if (params.userId) {
        searchParams.set("user_id", params.userId);
      }
      if (params.model) {
        searchParams.set("model", params.model);
      }
      if (params.provider) {
        searchParams.set("provider", params.provider);
      }
      if (params.credentialType) {
        searchParams.set("credential_type", params.credentialType);
      }
      if (params.tags && params.tags.length > 0) {
        searchParams.set("tags", params.tags.join(","));
      }
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/report?${searchParams.toString()}`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewaySpendReportResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a113;
            return (_a113 = getErrorMessage2(data)) != null ? _a113 : "unknown error";
          }, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw await asGatewayError(error);
    }
  }
};
var gatewaySpendReportResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      results: external_exports.array(
        external_exports.object({
          day: external_exports.string().optional(),
          hour: external_exports.string().optional(),
          user: external_exports.string().optional(),
          model: external_exports.string().optional(),
          tag: external_exports.string().optional(),
          provider: external_exports.string().optional(),
          credential_type: external_exports.enum(["byok", "system"]).optional(),
          total_cost: external_exports.number(),
          market_cost: external_exports.number().optional(),
          input_tokens: external_exports.number().optional(),
          output_tokens: external_exports.number().optional(),
          cached_input_tokens: external_exports.number().optional(),
          cache_creation_input_tokens: external_exports.number().optional(),
          reasoning_tokens: external_exports.number().optional(),
          request_count: external_exports.number().optional()
        }).transform(
          ({
            credential_type,
            total_cost,
            market_cost,
            input_tokens,
            output_tokens,
            cached_input_tokens,
            cache_creation_input_tokens,
            reasoning_tokens,
            request_count,
            ...rest
          }) => ({
            ...rest,
            ...credential_type !== void 0 ? { credentialType: credential_type } : {},
            totalCost: total_cost,
            ...market_cost !== void 0 ? { marketCost: market_cost } : {},
            ...input_tokens !== void 0 ? { inputTokens: input_tokens } : {},
            ...output_tokens !== void 0 ? { outputTokens: output_tokens } : {},
            ...cached_input_tokens !== void 0 ? { cachedInputTokens: cached_input_tokens } : {},
            ...cache_creation_input_tokens !== void 0 ? { cacheCreationInputTokens: cache_creation_input_tokens } : {},
            ...reasoning_tokens !== void 0 ? { reasoningTokens: reasoning_tokens } : {},
            ...request_count !== void 0 ? { requestCount: request_count } : {}
          })
        )
      )
    })
  )
);
var GatewayGenerationInfoFetcher = class {
  static {
    __name(this, "GatewayGenerationInfoFetcher");
  }
  constructor(config) {
    this.config = config;
  }
  async getGenerationInfo(params) {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/generation?id=${encodeURIComponent(params.id)}`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayGenerationInfoResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a113;
            return (_a113 = getErrorMessage2(data)) != null ? _a113 : "unknown error";
          }, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw await asGatewayError(error);
    }
  }
};
var gatewayGenerationInfoResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      data: external_exports.object({
        id: external_exports.string(),
        total_cost: external_exports.number(),
        upstream_inference_cost: external_exports.number(),
        usage: external_exports.number(),
        created_at: external_exports.string(),
        model: external_exports.string(),
        is_byok: external_exports.boolean(),
        provider_name: external_exports.string(),
        streamed: external_exports.boolean(),
        finish_reason: external_exports.string(),
        latency: external_exports.number(),
        generation_time: external_exports.number(),
        native_tokens_prompt: external_exports.number(),
        native_tokens_completion: external_exports.number(),
        native_tokens_reasoning: external_exports.number(),
        native_tokens_cached: external_exports.number(),
        native_tokens_cache_creation: external_exports.number(),
        billable_web_search_calls: external_exports.number()
      }).transform(
        ({
          total_cost,
          upstream_inference_cost,
          created_at,
          is_byok,
          provider_name,
          finish_reason,
          generation_time,
          native_tokens_prompt,
          native_tokens_completion,
          native_tokens_reasoning,
          native_tokens_cached,
          native_tokens_cache_creation,
          billable_web_search_calls,
          ...rest
        }) => ({
          ...rest,
          totalCost: total_cost,
          upstreamInferenceCost: upstream_inference_cost,
          createdAt: created_at,
          isByok: is_byok,
          providerName: provider_name,
          finishReason: finish_reason,
          generationTime: generation_time,
          promptTokens: native_tokens_prompt,
          completionTokens: native_tokens_completion,
          reasoningTokens: native_tokens_reasoning,
          cachedTokens: native_tokens_cached,
          cacheCreationTokens: native_tokens_cache_creation,
          billableWebSearchCalls: billable_web_search_calls
        })
      )
    }).transform(({ data }) => data)
  )
);
var GatewayLanguageModel = class {
  static {
    __name(this, "GatewayLanguageModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
    this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(options) {
    const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
    return {
      args: this.maybeEncodeFileParts(optionsWithoutSignal),
      warnings: []
    };
  }
  async doGenerate(options) {
    var _a113;
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue: rawResponse
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, false),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createJsonResponseHandler(external_exports.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a123;
            return (_a123 = getErrorMessage2(data)) != null ? _a123 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ...responseBody,
        request: { body: args },
        response: { headers: responseHeaders, body: rawResponse },
        warnings: [...(_a113 = responseBody.warnings) != null ? _a113 : [], ...warnings]
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  async doStream(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const { value: response, responseHeaders } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, true),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createEventSourceResponseHandler(external_exports.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a113;
            return (_a113 = getErrorMessage2(data)) != null ? _a113 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        stream: response.pipeThrough(
          new TransformStream({
            start(controller) {
              if (warnings.length > 0) {
                controller.enqueue({ type: "stream-start", warnings });
              }
            },
            transform(chunk, controller) {
              if (chunk.success) {
                const streamPart = chunk.value;
                if (streamPart.type === "raw" && !options.includeRawChunks) {
                  return;
                }
                if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") {
                  streamPart.timestamp = new Date(streamPart.timestamp);
                }
                controller.enqueue(streamPart);
              } else {
                controller.error(
                  chunk.error
                );
              }
            }
          })
        ),
        request: { body: args },
        response: { headers: responseHeaders }
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  isFilePart(part) {
    return part && typeof part === "object" && "type" in part && part.type === "file";
  }
  /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */
  maybeEncodeFileParts(options) {
    for (const message of options.prompt) {
      for (const part of message.content) {
        if (this.isFilePart(part)) {
          const filePart = part;
          if (filePart.data instanceof Uint8Array) {
            const buffer = Uint8Array.from(filePart.data);
            const base64Data = Buffer.from(buffer).toString("base64");
            filePart.data = new URL(
              `data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`
            );
          }
        }
      }
    }
    return options;
  }
  getUrl() {
    return `${this.config.baseURL}/language-model`;
  }
  getModelConfigHeaders(modelId, streaming) {
    return {
      "ai-language-model-specification-version": "3",
      "ai-language-model-id": modelId,
      "ai-language-model-streaming": String(streaming)
    };
  }
};
var GatewayEmbeddingModel = class {
  static {
    __name(this, "GatewayEmbeddingModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
    this.maxEmbeddingsPerCall = 2048;
    this.supportsParallelCalls = true;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values,
    headers,
    abortSignal,
    providerOptions
  }) {
    var _a113, _b112;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          values,
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayEmbeddingResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a123;
            return (_a123 = getErrorMessage2(data)) != null ? _a123 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        embeddings: responseBody.embeddings,
        usage: (_a113 = responseBody.usage) != null ? _a113 : void 0,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue },
        warnings: (_b112 = responseBody.warnings) != null ? _b112 : []
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/embedding-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-embedding-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayEmbeddingWarningSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("unsupported"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("compatibility"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("other"),
    message: external_exports.string()
  })
]);
var gatewayEmbeddingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      embeddings: external_exports.array(external_exports.array(external_exports.number())),
      usage: external_exports.object({ tokens: external_exports.number() }).nullish(),
      warnings: external_exports.array(gatewayEmbeddingWarningSchema).optional(),
      providerMetadata: external_exports.record(external_exports.string(), external_exports.record(external_exports.string(), external_exports.unknown())).optional()
    })
  )
);
function mapGatewayWarnings(warnings) {
  return (warnings != null ? warnings : []).map(
    (warning) => warning.type === "deprecated" ? { type: "other", message: warning.message } : warning
  );
}
__name(mapGatewayWarnings, "mapGatewayWarnings");
var GatewayImageModel = class {
  static {
    __name(this, "GatewayImageModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
    this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt,
    n,
    size,
    aspectRatio,
    seed,
    files,
    mask,
    providerOptions,
    headers,
    abortSignal
  }) {
    var _a113, _b112, _c;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          prompt,
          n,
          ...size && { size },
          ...aspectRatio && { aspectRatio },
          ...seed && { seed },
          ...providerOptions && { providerOptions },
          ...files && {
            files: files.map((file) => maybeEncodeImageFile(file))
          },
          ...mask && { mask: maybeEncodeImageFile(mask) }
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayImageResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a123;
            return (_a123 = getErrorMessage2(data)) != null ? _a123 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        images: responseBody.images,
        // Always base64 strings from server
        ...responseBody.isRetryable != null && {
          isRetryable: responseBody.isRetryable
        },
        warnings: mapGatewayWarnings(responseBody.warnings),
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: responseHeaders
        },
        ...responseBody.usage != null && {
          usage: {
            inputTokens: (_a113 = responseBody.usage.inputTokens) != null ? _a113 : void 0,
            outputTokens: (_b112 = responseBody.usage.outputTokens) != null ? _b112 : void 0,
            totalTokens: (_c = responseBody.usage.totalTokens) != null ? _c : void 0
          }
        }
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/image-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-image-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
function maybeEncodeImageFile(file) {
  if (file.type === "file" && file.data instanceof Uint8Array) {
    return {
      ...file,
      data: convertUint8ArrayToBase64(file.data)
    };
  }
  return file;
}
__name(maybeEncodeImageFile, "maybeEncodeImageFile");
var providerMetadataEntrySchema = external_exports.object({
  images: external_exports.array(external_exports.unknown()).optional()
}).catchall(external_exports.unknown());
var gatewayImageWarningSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("unsupported"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("compatibility"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("deprecated"),
    setting: external_exports.string(),
    message: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("other"),
    message: external_exports.string()
  })
]);
var gatewayImageUsageSchema = external_exports.object({
  inputTokens: external_exports.number().nullish(),
  outputTokens: external_exports.number().nullish(),
  totalTokens: external_exports.number().nullish()
});
var gatewayImageResponseSchema = external_exports.object({
  images: external_exports.array(external_exports.string()),
  // Always base64 strings over the wire
  isRetryable: external_exports.boolean().optional(),
  warnings: external_exports.array(gatewayImageWarningSchema).optional(),
  providerMetadata: external_exports.record(external_exports.string(), providerMetadataEntrySchema).optional(),
  usage: gatewayImageUsageSchema.optional()
});
var GatewayVideoModel = class {
  static {
    __name(this, "GatewayVideoModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
    this.maxVideosPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt,
    n,
    aspectRatio,
    resolution,
    duration,
    fps,
    seed,
    generateAudio,
    image,
    frameImages,
    inputReferences,
    providerOptions,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const { responseHeaders, value: responseBody } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders),
          { accept: "text/event-stream" }
        ),
        body: {
          prompt,
          n,
          ...aspectRatio && { aspectRatio },
          ...resolution && { resolution },
          ...duration && { duration },
          ...fps && { fps },
          ...seed && { seed },
          ...generateAudio !== void 0 && { generateAudio },
          ...providerOptions && { providerOptions },
          ...image && { image: maybeEncodeVideoFile(image) },
          ...frameImages && {
            frameImages: frameImages.map((frame) => ({
              ...frame,
              image: maybeEncodeVideoFile(frame.image)
            }))
          },
          ...inputReferences && {
            inputReferences: inputReferences.map(
              (reference) => maybeEncodeVideoFile(reference)
            )
          }
        },
        successfulResponseHandler: /* @__PURE__ */ __name(async ({
          response,
          url,
          requestBodyValues
        }) => {
          if (response.body == null) {
            throw new APICallError({
              message: "SSE response body is empty",
              url,
              requestBodyValues,
              statusCode: response.status
            });
          }
          const eventStream = parseJsonEventStream({
            stream: response.body,
            schema: gatewayVideoEventSchema
          });
          const reader = eventStream.getReader();
          const { done, value: parseResult } = await reader.read();
          reader.releaseLock();
          if (done || !parseResult) {
            throw new APICallError({
              message: "SSE stream ended without a data event",
              url,
              requestBodyValues,
              statusCode: response.status
            });
          }
          if (!parseResult.success) {
            throw new APICallError({
              message: "Failed to parse video SSE event",
              cause: parseResult.error,
              url,
              requestBodyValues,
              statusCode: response.status
            });
          }
          const event = parseResult.value;
          if (event.type === "error") {
            throw new APICallError({
              message: event.message,
              statusCode: event.statusCode,
              url,
              requestBodyValues,
              responseHeaders: Object.fromEntries([...response.headers]),
              responseBody: JSON.stringify(event),
              data: {
                error: {
                  message: event.message,
                  type: event.errorType,
                  param: event.param
                }
              }
            });
          }
          return {
            value: {
              videos: event.videos,
              warnings: event.warnings,
              providerMetadata: event.providerMetadata
            },
            responseHeaders: Object.fromEntries([...response.headers])
          };
        }, "successfulResponseHandler"),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a113;
            return (_a113 = getErrorMessage2(data)) != null ? _a113 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        videos: responseBody.videos,
        warnings: mapGatewayWarnings(responseBody.warnings),
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: responseHeaders
        }
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/video-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-video-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
function maybeEncodeVideoFile(file) {
  if (file.type === "file" && file.data instanceof Uint8Array) {
    return {
      ...file,
      data: convertUint8ArrayToBase64(file.data)
    };
  }
  return file;
}
__name(maybeEncodeVideoFile, "maybeEncodeVideoFile");
var providerMetadataEntrySchema2 = external_exports.object({
  videos: external_exports.array(external_exports.unknown()).optional()
}).catchall(external_exports.unknown());
var gatewayVideoDataSchema = external_exports.union([
  external_exports.object({
    type: external_exports.literal("url"),
    url: external_exports.string(),
    mediaType: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("base64"),
    data: external_exports.string(),
    mediaType: external_exports.string()
  })
]);
var gatewayVideoWarningSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("unsupported"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("compatibility"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("deprecated"),
    setting: external_exports.string(),
    message: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("other"),
    message: external_exports.string()
  })
]);
var gatewayVideoEventSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("result"),
    videos: external_exports.array(gatewayVideoDataSchema),
    warnings: external_exports.array(gatewayVideoWarningSchema).optional(),
    providerMetadata: external_exports.record(external_exports.string(), providerMetadataEntrySchema2).optional()
  }),
  external_exports.object({
    type: external_exports.literal("error"),
    message: external_exports.string(),
    errorType: external_exports.string(),
    statusCode: external_exports.number(),
    param: external_exports.unknown().nullable()
  })
]);
var GatewayRerankingModel = class {
  static {
    __name(this, "GatewayRerankingModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  async doRerank({
    documents,
    query,
    topN,
    headers,
    abortSignal,
    providerOptions
  }) {
    var _a113;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          documents,
          query,
          ...topN != null ? { topN } : {},
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayRerankingResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a123;
            return (_a123 = getErrorMessage2(data)) != null ? _a123 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ranking: responseBody.ranking,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue },
        warnings: (_a113 = responseBody.warnings) != null ? _a113 : []
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/reranking-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-reranking-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayRerankingWarningSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("unsupported"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("compatibility"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("other"),
    message: external_exports.string()
  })
]);
var gatewayRerankingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      ranking: external_exports.array(
        external_exports.object({
          index: external_exports.number(),
          relevanceScore: external_exports.number()
        })
      ),
      warnings: external_exports.array(gatewayRerankingWarningSchema).optional(),
      providerMetadata: external_exports.record(external_exports.string(), external_exports.record(external_exports.string(), external_exports.unknown())).optional()
    })
  )
);
var GatewaySpeechModel = class {
  static {
    __name(this, "GatewaySpeechModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    text: text2,
    voice,
    outputFormat,
    instructions,
    speed,
    language,
    providerOptions,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          text: text2,
          ...voice && { voice },
          ...outputFormat && { outputFormat },
          ...instructions && { instructions },
          ...speed != null && { speed },
          ...language && { language },
          ...providerOptions && { providerOptions }
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewaySpeechResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a113;
            return (_a113 = getErrorMessage2(data)) != null ? _a113 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        audio: responseBody.audio,
        warnings: mapGatewayWarnings(responseBody.warnings),
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: responseHeaders,
          body: rawValue
        }
      };
    } catch (error) {
      throw await asGatewayError(
        error,
        await parseAuthMethod(resolvedHeaders != null ? resolvedHeaders : {})
      );
    }
  }
  getUrl() {
    return `${this.config.baseURL}/speech-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-speech-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
var providerMetadataEntrySchema3 = external_exports.object({}).catchall(external_exports.unknown());
var gatewaySpeechWarningSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("unsupported"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("compatibility"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("deprecated"),
    setting: external_exports.string(),
    message: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("other"),
    message: external_exports.string()
  })
]);
var gatewaySpeechResponseSchema = external_exports.object({
  audio: external_exports.string(),
  warnings: external_exports.array(gatewaySpeechWarningSchema).optional(),
  providerMetadata: external_exports.record(external_exports.string(), providerMetadataEntrySchema3).optional()
});
var GatewayTranscriptionModel = class {
  static {
    __name(this, "GatewayTranscriptionModel");
  }
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    audio,
    mediaType,
    providerOptions,
    headers,
    abortSignal
  }) {
    var _a113, _b112, _c;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          audio: audio instanceof Uint8Array ? convertUint8ArrayToBase64(audio) : audio,
          mediaType,
          ...providerOptions && { providerOptions }
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayTranscriptionResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => {
            var _a123;
            return (_a123 = getErrorMessage2(data)) != null ? _a123 : "unknown error";
          }, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        text: responseBody.text,
        segments: (_a113 = responseBody.segments) != null ? _a113 : [],
        language: (_b112 = responseBody.language) != null ? _b112 : void 0,
        durationInSeconds: (_c = responseBody.durationInSeconds) != null ? _c : void 0,
        warnings: mapGatewayWarnings(responseBody.warnings),
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: responseHeaders,
          body: rawValue
        }
      };
    } catch (error) {
      throw await asGatewayError(
        error,
        await parseAuthMethod(resolvedHeaders != null ? resolvedHeaders : {})
      );
    }
  }
  getUrl() {
    return `${this.config.baseURL}/transcription-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-transcription-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
var providerMetadataEntrySchema4 = external_exports.object({}).catchall(external_exports.unknown());
var gatewayTranscriptionWarningSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("unsupported"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("compatibility"),
    feature: external_exports.string(),
    details: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("deprecated"),
    setting: external_exports.string(),
    message: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("other"),
    message: external_exports.string()
  })
]);
var gatewayTranscriptionResponseSchema = external_exports.object({
  text: external_exports.string(),
  segments: external_exports.array(
    external_exports.object({
      text: external_exports.string(),
      startSecond: external_exports.number(),
      endSecond: external_exports.number()
    })
  ).optional(),
  language: external_exports.string().nullish(),
  durationInSeconds: external_exports.number().nullish(),
  warnings: external_exports.array(gatewayTranscriptionWarningSchema).optional(),
  providerMetadata: external_exports.record(external_exports.string(), providerMetadataEntrySchema4).optional()
});
var jsonObjectSchema = external_exports.record(external_exports.string(), external_exports.unknown());
var browserbaseFetchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      url: external_exports.string().url().describe("URL of the page to fetch."),
      allow_redirects: external_exports.boolean().optional().describe("Whether to follow HTTP redirects (default: false)."),
      allow_insecure_ssl: external_exports.boolean().optional().describe(
        "Whether to bypass TLS certificate verification (default: false). Only use for trusted hosts."
      ),
      proxies: external_exports.boolean().optional().describe(
        "Whether to route the request through Browserbase proxies (default: false)."
      ),
      format: external_exports.enum(["raw", "json", "markdown"]).optional().describe(
        "Output format. raw returns the response body unchanged, markdown returns page content as Markdown, and json returns structured content using schema."
      ),
      schema: jsonObjectSchema.optional().describe(
        "JSON Schema for structured extraction. Only use with format set to json."
      )
    })
  )
);
var browserbaseFetchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      external_exports.object({
        id: external_exports.string(),
        content: external_exports.union([external_exports.string(), jsonObjectSchema]),
        contentType: external_exports.string(),
        encoding: external_exports.string(),
        headers: external_exports.record(external_exports.string(), external_exports.string()),
        statusCode: external_exports.number()
      }),
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "configuration_error",
          "execution_error",
          "invalid_input",
          "rate_limit",
          "timeout",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var browserbaseFetchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.browserbase_fetch",
  inputSchema: browserbaseFetchInputSchema,
  outputSchema: browserbaseFetchOutputSchema
});
var browserbaseFetch = /* @__PURE__ */ __name((config = {}) => browserbaseFetchToolFactory(config), "browserbaseFetch");
var browserbaseSearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      query: external_exports.string().min(1).max(200).describe("Web search query. Must be between 1 and 200 characters."),
      num_results: external_exports.number().int().min(1).max(25).optional().describe("Maximum number of results to return (1-25, default: 10).")
    })
  )
);
var browserbaseSearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      external_exports.object({
        query: external_exports.string(),
        requestId: external_exports.string(),
        results: external_exports.array(
          external_exports.object({
            id: external_exports.string(),
            title: external_exports.string(),
            url: external_exports.string(),
            author: external_exports.string().optional(),
            favicon: external_exports.string().optional(),
            image: external_exports.string().optional(),
            publishedDate: external_exports.string().optional()
          })
        )
      }),
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "configuration_error",
          "execution_error",
          "invalid_input",
          "rate_limit",
          "timeout",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var browserbaseSearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.browserbase_search",
  inputSchema: browserbaseSearchInputSchema,
  outputSchema: browserbaseSearchOutputSchema
});
var browserbaseSearch = /* @__PURE__ */ __name((config = {}) => browserbaseSearchToolFactory(config), "browserbaseSearch");
var exaSearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      query: external_exports.string().describe("Natural-language web search query. This is required."),
      type: external_exports.enum(["auto", "fast", "instant"]).optional().describe(
        "Search method. Use auto for the default balance of speed and quality."
      ),
      num_results: external_exports.number().optional().describe("Maximum number of results to return (1-100, default: 10)."),
      category: external_exports.enum([
        "company",
        "people",
        "research paper",
        "news",
        "personal site",
        "financial report"
      ]).optional().describe("Optional content category to focus results."),
      user_location: external_exports.string().optional().describe("Two-letter ISO country code such as 'US'."),
      include_domains: external_exports.array(external_exports.string()).optional().describe("Only return results from these domains."),
      exclude_domains: external_exports.array(external_exports.string()).optional().describe("Exclude results from these domains."),
      start_published_date: external_exports.string().optional().describe("Only return links published after this ISO 8601 date."),
      end_published_date: external_exports.string().optional().describe("Only return links published before this ISO 8601 date."),
      contents: external_exports.object({
        text: external_exports.union([
          external_exports.boolean(),
          external_exports.object({
            max_characters: external_exports.number().optional(),
            include_html_tags: external_exports.boolean().optional(),
            verbosity: external_exports.enum(["compact", "standard", "full"]).optional(),
            include_sections: external_exports.array(
              external_exports.enum([
                "header",
                "navigation",
                "banner",
                "body",
                "sidebar",
                "footer",
                "metadata"
              ])
            ).optional(),
            exclude_sections: external_exports.array(
              external_exports.enum([
                "header",
                "navigation",
                "banner",
                "body",
                "sidebar",
                "footer",
                "metadata"
              ])
            ).optional()
          })
        ]).optional(),
        highlights: external_exports.union([
          external_exports.boolean(),
          external_exports.object({
            query: external_exports.string().optional(),
            max_characters: external_exports.number().optional()
          })
        ]).optional(),
        max_age_hours: external_exports.number().optional(),
        livecrawl_timeout: external_exports.number().optional(),
        subpages: external_exports.number().optional(),
        subpage_target: external_exports.union([external_exports.string(), external_exports.array(external_exports.string())]).optional(),
        extras: external_exports.object({
          links: external_exports.number().optional(),
          image_links: external_exports.number().optional()
        }).optional()
      }).optional().describe("Controls extracted page content and freshness.")
    })
  )
);
var exaSearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      external_exports.object({
        requestId: external_exports.string(),
        searchType: external_exports.string().optional(),
        resolvedSearchType: external_exports.string().optional(),
        results: external_exports.array(
          external_exports.object({
            title: external_exports.string(),
            url: external_exports.string(),
            id: external_exports.string(),
            publishedDate: external_exports.string().nullable().optional(),
            author: external_exports.string().nullable().optional(),
            image: external_exports.string().nullable().optional(),
            favicon: external_exports.string().nullable().optional(),
            text: external_exports.string().optional(),
            highlights: external_exports.array(external_exports.string()).optional(),
            highlightScores: external_exports.array(external_exports.number()).optional(),
            summary: external_exports.string().optional(),
            subpages: external_exports.array(external_exports.any()).optional(),
            extras: external_exports.object({
              links: external_exports.array(external_exports.string()).optional(),
              imageLinks: external_exports.array(external_exports.string()).optional()
            }).optional()
          })
        ),
        costDollars: external_exports.object({
          total: external_exports.number().optional(),
          search: external_exports.record(external_exports.number()).optional()
        }).optional()
      }),
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "rate_limit",
          "timeout",
          "invalid_input",
          "configuration_error",
          "execution_error",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var exaSearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.exa_search",
  inputSchema: exaSearchInputSchema,
  outputSchema: exaSearchOutputSchema
});
var exaSearch = /* @__PURE__ */ __name((config = {}) => exaSearchToolFactory(config), "exaSearch");
var parallelSearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      objective: external_exports.string().describe(
        "Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."
      ),
      search_queries: external_exports.array(external_exports.string()).optional().describe(
        "Optional search queries to supplement the objective. Maximum 200 characters per query."
      ),
      mode: external_exports.enum(["one-shot", "agentic"]).optional().describe(
        'Mode preset: "one-shot" for comprehensive results with longer excerpts (default), "agentic" for concise, token-efficient results for multi-step workflows.'
      ),
      max_results: external_exports.number().optional().describe(
        "Maximum number of results to return (1-20). Defaults to 10 if not specified."
      ),
      source_policy: external_exports.object({
        include_domains: external_exports.array(external_exports.string()).optional().describe(
          "Limit results to these domains. Use plain domain names only — e.g. example.com or sub.example.gov, or a bare extension like .edu. Do not include a scheme, path, or port (e.g. not https://example.com/page)."
        ),
        exclude_domains: external_exports.array(external_exports.string()).optional().describe(
          "Exclude results from these domains. Use plain domain names only — e.g. example.com or sub.example.gov, or a bare extension like .edu. Do not include a scheme, path, or port (e.g. not https://example.com/page)."
        ),
        after_date: external_exports.string().optional().describe(
          "Only include results published after this date. Use an ISO 8601 calendar date formatted YYYY-MM-DD (e.g. 2025-01-01); do not include a time."
        )
      }).optional().describe(
        "Source policy for controlling which domains to include/exclude and freshness."
      ),
      excerpts: external_exports.object({
        max_chars_per_result: external_exports.number().optional().describe("Maximum characters per result."),
        max_chars_total: external_exports.number().optional().describe("Maximum total characters across all results.")
      }).optional().describe("Excerpt configuration for controlling result length."),
      fetch_policy: external_exports.object({
        max_age_seconds: external_exports.number().optional().describe(
          "Maximum age in seconds for cached content. Set to 0 to always fetch fresh content."
        )
      }).optional().describe("Fetch policy for controlling content freshness.")
    })
  )
);
var parallelSearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      // Success response
      external_exports.object({
        searchId: external_exports.string(),
        results: external_exports.array(
          external_exports.object({
            url: external_exports.string(),
            title: external_exports.string(),
            excerpt: external_exports.string(),
            publishDate: external_exports.string().nullable().optional(),
            relevanceScore: external_exports.number().optional()
          })
        )
      }),
      // Error response
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "rate_limit",
          "timeout",
          "invalid_input",
          "configuration_error",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var parallelSearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.parallel_search",
  inputSchema: parallelSearchInputSchema,
  outputSchema: parallelSearchOutputSchema
});
var parallelSearch = /* @__PURE__ */ __name((config = {}) => parallelSearchToolFactory(config), "parallelSearch");
var perplexitySearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      query: external_exports.union([external_exports.string(), external_exports.array(external_exports.string())]).describe(
        "Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."
      ),
      max_results: external_exports.number().optional().describe(
        "Maximum number of search results to return (1-20, default: 10)"
      ),
      max_tokens_per_page: external_exports.number().optional().describe(
        "Maximum number of tokens to extract per search result page (256-2048, default: 2048)"
      ),
      max_tokens: external_exports.number().optional().describe(
        "Maximum total tokens across all search results (default: 25000, max: 1000000)"
      ),
      country: external_exports.string().optional().describe(
        "Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"
      ),
      search_domain_filter: external_exports.array(external_exports.string()).optional().describe(
        "List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"
      ),
      search_language_filter: external_exports.array(external_exports.string()).optional().describe(
        "List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"
      ),
      search_after_date: external_exports.string().optional().describe(
        "Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
      ),
      search_before_date: external_exports.string().optional().describe(
        "Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
      ),
      last_updated_after_filter: external_exports.string().optional().describe(
        "Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
      ),
      last_updated_before_filter: external_exports.string().optional().describe(
        "Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
      ),
      search_recency_filter: external_exports.enum(["day", "week", "month", "year"]).optional().describe(
        "Filter results by relative time period. Cannot be used with search_after_date or search_before_date."
      )
    })
  )
);
var perplexitySearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      // Success response
      external_exports.object({
        results: external_exports.array(
          external_exports.object({
            title: external_exports.string(),
            url: external_exports.string(),
            snippet: external_exports.string(),
            date: external_exports.string().optional(),
            lastUpdated: external_exports.string().optional()
          })
        ),
        id: external_exports.string()
      }),
      // Error response
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "rate_limit",
          "timeout",
          "invalid_input",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var perplexitySearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.perplexity_search",
  inputSchema: perplexitySearchInputSchema,
  outputSchema: perplexitySearchOutputSchema
});
var perplexitySearch = /* @__PURE__ */ __name((config = {}) => perplexitySearchToolFactory(config), "perplexitySearch");
var takoDataSourceInputSchema = external_exports.object({
  count: external_exports.number().optional().describe(
    "Maximum number of data results to return (1-20). When include_contents is true, each additional result adds its own data surcharge."
  ),
  include_contents: external_exports.boolean().optional().describe(
    "Inline rows for each data result. This adds a data surcharge based on row count and dataset source. To estimate cost, search with include_contents disabled and inspect cards.content.export_pricing. This applies to every returned card; limit sources.data.count and sources.data.max_rows to control cost."
  ),
  mode: external_exports.enum(["inline", "url"]).optional().describe(
    "Requested data delivery mode. Search card data is always inline."
  ),
  content_format: external_exports.enum(["card_json", "csv", "json_compact", "json_records"]).optional().describe("Serialization for inlined card data."),
  max_rows: external_exports.number().optional().describe(
    "Maximum rows to inline per result. Omit to use the allowance in cards.content.export_pricing. A data surcharge applies per 1,000 exported rows; lower values reduce cost."
  ),
  node_ids: external_exports.array(external_exports.string()).optional().describe("Data Graph node IDs to prioritize. Maximum 20."),
  strict: external_exports.boolean().optional().describe(
    "Only return cards matching node_ids. Requires a non-empty node_ids."
  )
});
var takoWebSourceInputSchema = external_exports.object({
  count: external_exports.number().optional().describe("Maximum number of web results to return (1-20)."),
  include_contents: external_exports.boolean().optional().describe("Inline extracted web page text. This can add a data charge."),
  category: external_exports.enum(["finance", "news", "sports"]).optional().describe("Optional web-result category filter."),
  include_domains: external_exports.array(external_exports.string()).optional().describe("Only return results from these bare domains."),
  exclude_domains: external_exports.array(external_exports.string()).optional().describe("Exclude results from these bare domains."),
  snippet_max_chars: external_exports.number().optional().describe("Maximum characters in each web-result snippet."),
  highlights: external_exports.boolean().optional().describe(
    "Include highlighted passages in web results. Defaults to true in AI Gateway."
  ),
  article_content_max_chars: external_exports.number().optional().describe(
    "Maximum extracted characters per web page when including contents."
  ),
  published_after: external_exports.string().optional().describe("Keep results published on or after this ISO date (YYYY-MM-DD)."),
  published_before: external_exports.string().optional().describe(
    "Keep results published on or before this ISO date (YYYY-MM-DD)."
  )
});
var takoSearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      query: external_exports.string().describe(
        'Natural-language search query. Include the entity, metric, and time period. Quote a phrase to force it to one entity, for example "Tesla":PRODUCT price.'
      ),
      effort: external_exports.enum(["deep", "fast", "instant"]).optional().describe(
        "Search effort. fast is the balanced default, instant favors cached results and low latency, and deep broadens retrieval with reranking at higher cost and latency."
      ),
      sources: external_exports.object({
        data: takoDataSourceInputSchema.optional(),
        web: takoWebSourceInputSchema.optional()
      }).optional().describe(
        "Sources to search. Omit to search both curated data and the web. When provided, only keys present are searched."
      ),
      location: external_exports.object({
        latitude: external_exports.number().describe("Latitude between -90 and 90."),
        longitude: external_exports.number().describe("Longitude between -180 and 180.")
      }).optional().describe("End-user coordinates for localized results."),
      country_code: external_exports.string().optional().describe("Two-letter ISO 3166-1 country code, such as 'US'."),
      locale: external_exports.string().optional().describe("BCP-47 locale, such as 'en-US'."),
      timezone: external_exports.string().optional().describe("IANA timezone, such as 'America/New_York'."),
      output_settings: external_exports.object({
        image_dark_mode: external_exports.boolean().optional().describe("Render card preview images in dark mode."),
        force_refresh: external_exports.boolean().optional().describe(
          "Instant-effort only. Request a refreshed instant result."
        )
      }).optional().describe("Controls card rendering in the search response."),
      include_related: external_exports.number().optional().describe("Maximum related search suggestions to include (1-20).")
    })
  )
);
var takoDatasetCellSchema = external_exports.union([external_exports.boolean(), external_exports.number(), external_exports.string()]).nullable();
var takoResultContentSchema = external_exports.object({
  content_format: external_exports.enum(["card_json", "csv", "json_compact", "json_records"]).nullish(),
  cost: external_exports.number().optional(),
  data: external_exports.string().nullish(),
  records: external_exports.array(external_exports.record(external_exports.string(), takoDatasetCellSchema)).nullish(),
  dataset: external_exports.object({
    columns: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        type: external_exports.enum(["boolean", "date", "datetime", "number", "string"]),
        unit: external_exports.string().nullish()
      })
    ),
    rows: external_exports.array(external_exports.array(takoDatasetCellSchema)),
    total_rows: external_exports.number(),
    truncated: external_exports.boolean(),
    ref: external_exports.string(),
    sources: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        index: external_exports.enum(["data", "web"]).optional()
      })
    ),
    provenance: external_exports.enum(["query", "web_extraction"]).optional()
  }).nullish(),
  card_data: external_exports.object({}).passthrough().nullish(),
  card_data_schema: external_exports.object({}).passthrough().nullish(),
  url: external_exports.string().nullish(),
  expires_at: external_exports.string().nullish(),
  total_rows: external_exports.number().nullish(),
  truncated: external_exports.boolean().optional(),
  export_pricing: external_exports.object({
    baseline_usd: external_exports.number(),
    free_rows: external_exports.number(),
    max_rows_ceiling: external_exports.number(),
    row_cpm_usd: external_exports.number()
  }).nullish(),
  manifest: external_exports.array(
    external_exports.object({
      dtype: external_exports.enum(["boolean", "date", "datetime", "number", "string"]).nullish(),
      entity: external_exports.string().nullish(),
      metric: external_exports.string().nullish(),
      name: external_exports.string().nullish(),
      unit: external_exports.string().nullish()
    })
  ).nullish()
}).passthrough();
var takoCardSchema = external_exports.object({
  card_id: external_exports.string().nullish(),
  title: external_exports.string().nullish(),
  description: external_exports.string().nullish(),
  semantic_description: external_exports.string().nullish(),
  webpage_url: external_exports.string().nullish(),
  image_url: external_exports.string().nullish(),
  embed_url: external_exports.string().nullish(),
  sources: external_exports.array(
    external_exports.object({
      source_name: external_exports.string().nullish(),
      source_description: external_exports.string().nullish(),
      source_index: external_exports.enum(["data", "web"]),
      source_text: external_exports.string().nullish(),
      url: external_exports.string().nullish()
    })
  ).nullish(),
  methodologies: external_exports.array(
    external_exports.object({
      methodology_name: external_exports.string().nullable(),
      methodology_description: external_exports.string().nullable()
    })
  ).nullish(),
  source_indexes: external_exports.array(external_exports.enum(["data", "web"])).nullish(),
  card_type: external_exports.string().nullish(),
  relevance: external_exports.enum(["High", "Low", "Medium"]).nullish(),
  content: takoResultContentSchema.nullish(),
  exportable: external_exports.boolean().optional(),
  nodes: external_exports.array(
    external_exports.object({
      id: external_exports.string(),
      type: external_exports.enum(["entity", "metric"]),
      name: external_exports.string(),
      description: external_exports.string().nullish()
    })
  ).nullish(),
  metric_definitions: external_exports.array(external_exports.object({ name: external_exports.string(), definition: external_exports.string() })).nullish(),
  data_freshness: external_exports.object({
    coverage_end: external_exports.string().nullish(),
    data_as_of: external_exports.string().nullish(),
    last_updated: external_exports.string().nullish()
  }).nullish()
}).passthrough();
var takoWebResultSchema = external_exports.object({
  title: external_exports.string(),
  url: external_exports.string(),
  snippet: external_exports.string().nullish(),
  source_name: external_exports.string().nullish(),
  publish_date: external_exports.string().nullish(),
  content: takoResultContentSchema.nullish()
}).passthrough();
var takoSearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      external_exports.object({
        request_id: external_exports.string(),
        cards: external_exports.array(takoCardSchema).optional(),
        web_results: external_exports.array(takoWebResultSchema).optional(),
        usage: external_exports.object({
          total_cost_usd: external_exports.number(),
          compute: external_exports.object({ cost_usd: external_exports.number() }).nullish(),
          data: external_exports.object({ cost_usd: external_exports.number(), datasets: external_exports.number() }).nullish()
        }).nullish(),
        related: external_exports.array(external_exports.object({}).passthrough()).nullish()
      }).passthrough(),
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "configuration_error",
          "execution_error",
          "invalid_input",
          "rate_limit",
          "timeout",
          "unknown_tool"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var takoSearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.tako_search",
  inputSchema: takoSearchInputSchema,
  outputSchema: takoSearchOutputSchema
});
var takoSearch = /* @__PURE__ */ __name((config = {}) => takoSearchToolFactory(config), "takoSearch");
var gatewayTools = {
  /**
   * Fetch page content using Browserbase's lightweight Fetch API.
   *
   * Supports raw, Markdown, and schema-driven JSON output as well as redirects,
   * proxy routing, and TLS controls.
   */
  browserbaseFetch,
  /**
   * Search the web using Browserbase's Search API for fast, structured results.
   *
   * Returns titles, URLs, and available publication metadata without requiring
   * a browser session.
   */
  browserbaseSearch,
  /**
   * Search the web using Exa for current information and token-efficient
   * excerpts optimized for agent workflows.
   *
   * Supports search type, category, domain, date, location, and content
   * extraction controls.
   */
  exaSearch,
  /**
   * Search the web using Parallel AI's Search API for LLM-optimized excerpts.
   *
   * Takes a natural language objective and returns relevant excerpts,
   * replacing multiple keyword searches with a single call for broad
   * or complex queries. Supports different search types for depth vs
   * breadth tradeoffs.
   */
  parallelSearch,
  /**
   * Search the web using Perplexity's Search API for real-time information,
   * news, research papers, and articles.
   *
   * Provides ranked search results with advanced filtering options including
   * domain, language, date range, and recency filters.
   */
  perplexitySearch,
  /**
   * Search the web and Tako's curated knowledge graph in one call for
   * token-efficient web excerpts and structured data results grounded in
   * premium sources, each with an embed-ready visualization.
   *
   * Supports effort, per-source web and data controls, localization, and inline
   * contents for agents that need to reason over underlying data.
   */
  takoSearch
};
async function getVercelRequestId() {
  var _a113;
  return (_a113 = (0, import_oidc.getContext)().headers) == null ? void 0 : _a113["x-vercel-id"];
}
__name(getVercelRequestId, "getVercelRequestId");
var VERSION3 = true ? "3.0.212" : "0.0.0-test";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
  var _a113, _b112;
  let pendingMetadata = null;
  let metadataCache = null;
  const cacheRefreshMillis = (_a113 = options.metadataCacheRefreshMillis) != null ? _a113 : 1e3 * 60 * 5;
  let lastFetchTime = 0;
  const baseURL = (_b112 = withoutTrailingSlash(options.baseURL)) != null ? _b112 : "https://ai-gateway.vercel.sh/v3/ai";
  const getHeaders = /* @__PURE__ */ __name(async () => {
    try {
      const auth = await getGatewayAuthToken(options);
      return withUserAgentSuffix(
        {
          Authorization: `Bearer ${auth.token}`,
          "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
          [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
          ...options.headers
        },
        `ai-sdk/gateway/${VERSION3}`
      );
    } catch (error) {
      throw GatewayAuthenticationError.createContextualError({
        apiKeyProvided: false,
        oidcTokenProvided: false,
        statusCode: 401,
        cause: error
      });
    }
  }, "getHeaders");
  const createO11yHeaders = /* @__PURE__ */ __name(() => {
    const deploymentId = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    });
    const environment = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    });
    const region = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    const projectId = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_PROJECT_ID"
    });
    return async () => {
      const requestId = await getVercelRequestId();
      return {
        ...deploymentId && { "ai-o11y-deployment-id": deploymentId },
        ...environment && { "ai-o11y-environment": environment },
        ...region && { "ai-o11y-region": region },
        ...requestId && { "ai-o11y-request-id": requestId },
        ...projectId && { "ai-o11y-project-id": projectId }
      };
    };
  }, "createO11yHeaders");
  const createLanguageModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewayLanguageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createLanguageModel");
  const getAvailableModels = /* @__PURE__ */ __name(async () => {
    var _a123, _b122, _c;
    const now2 = (_c = (_b122 = (_a123 = options._internal) == null ? void 0 : _a123.currentDate) == null ? void 0 : _b122.call(_a123).getTime()) != null ? _c : Date.now();
    if (!pendingMetadata || now2 - lastFetchTime > cacheRefreshMillis) {
      lastFetchTime = now2;
      pendingMetadata = new GatewayFetchMetadata({
        baseURL,
        headers: getHeaders,
        fetch: options.fetch
      }).getAvailableModels().then((metadata) => {
        metadataCache = metadata;
        return metadata;
      }).catch(async (error) => {
        throw await asGatewayError(
          error,
          await parseAuthMethod(await getHeaders())
        );
      });
    }
    return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
  }, "getAvailableModels");
  const getCredits = /* @__PURE__ */ __name(async () => {
    return new GatewayFetchMetadata({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getCredits().catch(async (error) => {
      throw await asGatewayError(
        error,
        await parseAuthMethod(await getHeaders())
      );
    });
  }, "getCredits");
  const getSpendReport = /* @__PURE__ */ __name(async (params) => {
    return new GatewaySpendReport({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getSpendReport(params).catch(async (error) => {
      throw await asGatewayError(
        error,
        await parseAuthMethod(await getHeaders())
      );
    });
  }, "getSpendReport");
  const getGenerationInfo = /* @__PURE__ */ __name(async (params) => {
    return new GatewayGenerationInfoFetcher({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getGenerationInfo(params).catch(async (error) => {
      throw await asGatewayError(
        error,
        await parseAuthMethod(await getHeaders())
      );
    });
  }, "getGenerationInfo");
  const provider = /* @__PURE__ */ __name(function(modelId) {
    if (new.target) {
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    }
    return createLanguageModel(modelId);
  }, "provider");
  provider.specificationVersion = "v3";
  provider.getAvailableModels = getAvailableModels;
  provider.getCredits = getCredits;
  provider.getSpendReport = getSpendReport;
  provider.getGenerationInfo = getGenerationInfo;
  provider.imageModel = (modelId) => {
    return new GatewayImageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.languageModel = createLanguageModel;
  const createEmbeddingModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewayEmbeddingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createEmbeddingModel");
  provider.embeddingModel = createEmbeddingModel;
  provider.textEmbeddingModel = createEmbeddingModel;
  provider.videoModel = (modelId) => {
    return new GatewayVideoModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  const createRerankingModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewayRerankingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createRerankingModel");
  provider.rerankingModel = createRerankingModel;
  provider.reranking = createRerankingModel;
  const createSpeechModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewaySpeechModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createSpeechModel");
  provider.speechModel = createSpeechModel;
  provider.speech = createSpeechModel;
  const createTranscriptionModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewayTranscriptionModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createTranscriptionModel");
  provider.transcriptionModel = createTranscriptionModel;
  provider.transcription = createTranscriptionModel;
  provider.chat = provider.languageModel;
  provider.embedding = provider.embeddingModel;
  provider.image = provider.imageModel;
  provider.video = provider.videoModel;
  provider.tools = gatewayTools;
  return provider;
}
__name(createGatewayProvider, "createGatewayProvider");
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
  const apiKey = loadOptionalSetting({
    settingValue: options.apiKey,
    environmentVariableName: "AI_GATEWAY_API_KEY"
  });
  if (apiKey) {
    return {
      token: apiKey,
      authMethod: "api-key"
    };
  }
  const oidcToken = await (0, import_oidc2.getVercelOidcToken)();
  return {
    token: oidcToken,
    authMethod: "oidc"
  };
}
__name(getGatewayAuthToken, "getGatewayAuthToken");

// node_modules/ai/dist/index.mjs
init_esm2();
init_esm2();
var __defProp = Object.defineProperty;
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name232 in all)
    __defProp(target, name232, { get: all[name232], enumerable: true });
}, "__export");
var name16 = "AI_InvalidArgumentError";
var marker17 = `vercel.ai.error.${name16}`;
var symbol17 = Symbol.for(marker17);
var _a18;
var InvalidArgumentError2 = class extends AISDKError {
  static {
    __name(this, "InvalidArgumentError");
  }
  constructor({
    parameter,
    value,
    message
  }) {
    super({
      name: name16,
      message: `Invalid argument for parameter ${parameter}: ${message}`
    });
    this[_a18] = true;
    this.parameter = parameter;
    this.value = value;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker17);
  }
};
_a18 = symbol17;
var name23 = "AI_InvalidStreamPartError";
var marker23 = `vercel.ai.error.${name23}`;
var symbol23 = Symbol.for(marker23);
var _a23;
_a23 = symbol23;
var name33 = "AI_InvalidToolApprovalError";
var marker33 = `vercel.ai.error.${name33}`;
var symbol33 = Symbol.for(marker33);
var _a33;
var InvalidToolApprovalError = class extends AISDKError {
  static {
    __name(this, "InvalidToolApprovalError");
  }
  constructor({ approvalId }) {
    super({
      name: name33,
      message: `Tool approval response references unknown approvalId: "${approvalId}". No matching tool-approval-request found in message history.`
    });
    this[_a33] = true;
    this.approvalId = approvalId;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker33);
  }
};
_a33 = symbol33;
var name43 = "AI_InvalidToolApprovalSignatureError";
var marker43 = `vercel.ai.error.${name43}`;
var symbol43 = Symbol.for(marker43);
var _a43;
var InvalidToolApprovalSignatureError = class extends AISDKError {
  static {
    __name(this, "InvalidToolApprovalSignatureError");
  }
  constructor({
    approvalId,
    toolCallId,
    reason
  }) {
    super({
      name: name43,
      message: `Tool approval signature verification failed for approval "${approvalId}" (tool call "${toolCallId}"): ${reason}`
    });
    this[_a43] = true;
    this.approvalId = approvalId;
    this.toolCallId = toolCallId;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker43);
  }
};
_a43 = symbol43;
var name53 = "AI_InvalidToolInputError";
var marker53 = `vercel.ai.error.${name53}`;
var symbol53 = Symbol.for(marker53);
var _a53;
var InvalidToolInputError = class extends AISDKError {
  static {
    __name(this, "InvalidToolInputError");
  }
  constructor({
    toolInput,
    toolName,
    cause,
    message = `Invalid input for tool ${toolName}: ${getErrorMessage(cause)}`
  }) {
    super({ name: name53, message, cause });
    this[_a53] = true;
    this.toolInput = toolInput;
    this.toolName = toolName;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker53);
  }
};
_a53 = symbol53;
var name63 = "AI_ToolCallNotFoundForApprovalError";
var marker63 = `vercel.ai.error.${name63}`;
var symbol63 = Symbol.for(marker63);
var _a63;
var ToolCallNotFoundForApprovalError = class extends AISDKError {
  static {
    __name(this, "ToolCallNotFoundForApprovalError");
  }
  constructor({
    toolCallId,
    approvalId
  }) {
    super({
      name: name63,
      message: `Tool call "${toolCallId}" not found for approval request "${approvalId}".`
    });
    this[_a63] = true;
    this.toolCallId = toolCallId;
    this.approvalId = approvalId;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker63);
  }
};
_a63 = symbol63;
var name73 = "AI_MissingToolResultsError";
var marker73 = `vercel.ai.error.${name73}`;
var symbol73 = Symbol.for(marker73);
var _a73;
var MissingToolResultsError = class extends AISDKError {
  static {
    __name(this, "MissingToolResultsError");
  }
  constructor({ toolCallIds }) {
    super({
      name: name73,
      message: `Tool result${toolCallIds.length > 1 ? "s are" : " is"} missing for tool call${toolCallIds.length > 1 ? "s" : ""} ${toolCallIds.join(
        ", "
      )}.`
    });
    this[_a73] = true;
    this.toolCallIds = toolCallIds;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker73);
  }
};
_a73 = symbol73;
var name83 = "AI_NoImageGeneratedError";
var marker83 = `vercel.ai.error.${name83}`;
var symbol83 = Symbol.for(marker83);
var _a83;
_a83 = symbol83;
var name93 = "AI_NoObjectGeneratedError";
var marker93 = `vercel.ai.error.${name93}`;
var symbol93 = Symbol.for(marker93);
var _a93;
var NoObjectGeneratedError = class extends AISDKError {
  static {
    __name(this, "NoObjectGeneratedError");
  }
  constructor({
    message = "No object generated.",
    cause,
    text: text2,
    response,
    usage,
    finishReason
  }) {
    super({ name: name93, message, cause });
    this[_a93] = true;
    this.text = text2;
    this.response = response;
    this.usage = usage;
    this.finishReason = finishReason;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker93);
  }
};
_a93 = symbol93;
var name102 = "AI_NoOutputGeneratedError";
var marker103 = `vercel.ai.error.${name102}`;
var symbol103 = Symbol.for(marker103);
var _a103;
var NoOutputGeneratedError = class extends AISDKError {
  static {
    __name(this, "NoOutputGeneratedError");
  }
  // used in isInstance
  constructor({
    message = "No output generated.",
    cause
  } = {}) {
    super({ name: name102, message, cause });
    this[_a103] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker103);
  }
};
_a103 = symbol103;
var name112 = "AI_NoSpeechGeneratedError";
var marker112 = `vercel.ai.error.${name112}`;
var symbol112 = Symbol.for(marker112);
var _a112;
_a112 = symbol112;
var name122 = "AI_NoTranscriptGeneratedError";
var marker122 = `vercel.ai.error.${name122}`;
var symbol122 = Symbol.for(marker122);
var _a122;
_a122 = symbol122;
var name132 = "AI_NoVideoGeneratedError";
var marker132 = `vercel.ai.error.${name132}`;
var symbol132 = Symbol.for(marker132);
var _a132;
_a132 = symbol132;
var name142 = "AI_NoSuchToolError";
var marker142 = `vercel.ai.error.${name142}`;
var symbol142 = Symbol.for(marker142);
var _a142;
var NoSuchToolError = class extends AISDKError {
  static {
    __name(this, "NoSuchToolError");
  }
  constructor({
    toolName,
    availableTools = void 0,
    message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}`
  }) {
    super({ name: name142, message });
    this[_a142] = true;
    this.toolName = toolName;
    this.availableTools = availableTools;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker142);
  }
};
_a142 = symbol142;
var name152 = "AI_ToolChoiceViolationError";
var marker152 = `vercel.ai.error.${name152}`;
var symbol152 = Symbol.for(marker152);
var _a152;
var ToolChoiceViolationError = class extends AISDKError {
  static {
    __name(this, "ToolChoiceViolationError");
  }
  constructor({
    toolChoice,
    finishReason,
    provider,
    modelId,
    content,
    message = toolChoice.type === "required" ? "Model response did not contain a tool call even though tool choice was required." : `Model response did not contain a call to the required tool '${toolChoice.toolName}'.`
  }) {
    super({ name: name152, message });
    this[_a152] = true;
    this.toolChoice = toolChoice;
    this.finishReason = finishReason;
    this.provider = provider;
    this.modelId = modelId;
    this.content = content;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker152);
  }
};
_a152 = symbol152;
var name162 = "AI_ToolCallRepairError";
var marker162 = `vercel.ai.error.${name162}`;
var symbol162 = Symbol.for(marker162);
var _a162;
var ToolCallRepairError = class extends AISDKError {
  static {
    __name(this, "ToolCallRepairError");
  }
  constructor({
    cause,
    originalError,
    message = `Error repairing tool call: ${getErrorMessage(cause)}`
  }) {
    super({ name: name162, message, cause });
    this[_a162] = true;
    this.originalError = originalError;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker162);
  }
};
_a162 = symbol162;
var UnsupportedModelVersionError = class extends AISDKError {
  static {
    __name(this, "UnsupportedModelVersionError");
  }
  constructor(options) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${options.version} for provider "${options.provider}" and model "${options.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    });
    this.version = options.version;
    this.provider = options.provider;
    this.modelId = options.modelId;
  }
};
var name17 = "AI_UIMessageStreamError";
var marker172 = `vercel.ai.error.${name17}`;
var symbol172 = Symbol.for(marker172);
var _a172;
_a172 = symbol172;
var name18 = "AI_InvalidDataContentError";
var marker18 = `vercel.ai.error.${name18}`;
var symbol18 = Symbol.for(marker18);
var _a182;
_a182 = symbol18;
var name19 = "AI_InvalidMessageRoleError";
var marker19 = `vercel.ai.error.${name19}`;
var symbol19 = Symbol.for(marker19);
var _a19;
var InvalidMessageRoleError = class extends AISDKError {
  static {
    __name(this, "InvalidMessageRoleError");
  }
  constructor({
    role,
    message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: name19, message });
    this[_a19] = true;
    this.role = role;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker19);
  }
};
_a19 = symbol19;
var name20 = "AI_MessageConversionError";
var marker20 = `vercel.ai.error.${name20}`;
var symbol20 = Symbol.for(marker20);
var _a20;
_a20 = symbol20;
var name21 = "AI_RetryError";
var marker21 = `vercel.ai.error.${name21}`;
var symbol21 = Symbol.for(marker21);
var _a21;
var RetryError = class extends AISDKError {
  static {
    __name(this, "RetryError");
  }
  constructor({
    message,
    reason,
    errors
  }) {
    super({ name: name21, message });
    this[_a21] = true;
    this.reason = reason;
    this.errors = errors;
    this.lastError = errors[errors.length - 1];
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker21);
  }
};
_a21 = symbol21;
function asArray(value) {
  return value === void 0 ? [] : Array.isArray(value) ? value : [value];
}
__name(asArray, "asArray");
async function notify(options) {
  for (const callback of asArray(options.callbacks)) {
    if (callback == null)
      continue;
    try {
      await callback(options.event);
    } catch (_ignored) {
    }
  }
}
__name(notify, "notify");
function formatWarning({
  warning,
  provider,
  model
}) {
  const prefix = `AI SDK Warning (${provider} / ${model}):`;
  switch (warning.type) {
    case "unsupported": {
      let message = `${prefix} The feature "${warning.feature}" is not supported.`;
      if (warning.details) {
        message += ` ${warning.details}`;
      }
      return message;
    }
    case "compatibility": {
      let message = `${prefix} The feature "${warning.feature}" is used in a compatibility mode.`;
      if (warning.details) {
        message += ` ${warning.details}`;
      }
      return message;
    }
    case "other": {
      return `${prefix} ${warning.message}`;
    }
    default: {
      return `${prefix} ${JSON.stringify(warning, null, 2)}`;
    }
  }
}
__name(formatWarning, "formatWarning");
var FIRST_WARNING_INFO_MESSAGE = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.";
var hasLoggedBefore = false;
var logWarnings = /* @__PURE__ */ __name((options) => {
  if (options.warnings.length === 0) {
    return;
  }
  const logger = globalThis.AI_SDK_LOG_WARNINGS;
  if (logger === false) {
    return;
  }
  if (typeof logger === "function") {
    logger(options);
    return;
  }
  if (!hasLoggedBefore) {
    hasLoggedBefore = true;
    console.info(FIRST_WARNING_INFO_MESSAGE);
  }
  for (const warning of options.warnings) {
    console.warn(
      formatWarning({
        warning,
        provider: options.provider,
        model: options.model
      })
    );
  }
}, "logWarnings");
function logV2CompatibilityWarning({
  provider,
  modelId
}) {
  logWarnings({
    warnings: [
      {
        type: "compatibility",
        feature: "specificationVersion",
        details: `Using v2 specification compatibility mode. Some features may not be available.`
      }
    ],
    provider,
    model: modelId
  });
}
__name(logV2CompatibilityWarning, "logV2CompatibilityWarning");
function asLanguageModelV3(model) {
  if (model.specificationVersion === "v3") {
    return model;
  }
  logV2CompatibilityWarning({
    provider: model.provider,
    modelId: model.modelId
  });
  return new Proxy(model, {
    get(target, prop) {
      switch (prop) {
        case "specificationVersion":
          return "v3";
        case "doGenerate":
          return async (...args) => {
            const result = await target.doGenerate(...args);
            return {
              ...result,
              finishReason: convertV2FinishReasonToV3(result.finishReason),
              usage: convertV2UsageToV3(result.usage)
            };
          };
        case "doStream":
          return async (...args) => {
            const result = await target.doStream(...args);
            return {
              ...result,
              stream: convertV2StreamToV3(result.stream)
            };
          };
        default:
          return target[prop];
      }
    }
  });
}
__name(asLanguageModelV3, "asLanguageModelV3");
function convertV2StreamToV3(stream) {
  return stream.pipeThrough(
    new TransformStream({
      transform(chunk, controller) {
        switch (chunk.type) {
          case "finish":
            controller.enqueue({
              ...chunk,
              finishReason: convertV2FinishReasonToV3(chunk.finishReason),
              usage: convertV2UsageToV3(chunk.usage)
            });
            break;
          default:
            controller.enqueue(chunk);
            break;
        }
      }
    })
  );
}
__name(convertV2StreamToV3, "convertV2StreamToV3");
function convertV2FinishReasonToV3(finishReason) {
  return {
    unified: finishReason === "unknown" ? "other" : finishReason,
    raw: void 0
  };
}
__name(convertV2FinishReasonToV3, "convertV2FinishReasonToV3");
function convertV2UsageToV3(usage) {
  return {
    inputTokens: {
      total: usage.inputTokens,
      noCache: void 0,
      cacheRead: usage.cachedInputTokens,
      cacheWrite: void 0
    },
    outputTokens: {
      total: usage.outputTokens,
      text: void 0,
      reasoning: usage.reasoningTokens
    },
    raw: usage.totalTokens == null ? void 0 : { totalTokens: usage.totalTokens }
  };
}
__name(convertV2UsageToV3, "convertV2UsageToV3");
function resolveLanguageModel(model) {
  if (typeof model !== "string") {
    if (model.specificationVersion !== "v3" && model.specificationVersion !== "v2") {
      const unsupportedModel = model;
      throw new UnsupportedModelVersionError({
        version: unsupportedModel.specificationVersion,
        provider: unsupportedModel.provider,
        modelId: unsupportedModel.modelId
      });
    }
    return asLanguageModelV3(model);
  }
  return getGlobalProvider().languageModel(model);
}
__name(resolveLanguageModel, "resolveLanguageModel");
function getGlobalProvider() {
  var _a232;
  return (_a232 = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? _a232 : gateway;
}
__name(getGlobalProvider, "getGlobalProvider");
function getTotalTimeoutMs(timeout) {
  if (timeout == null) {
    return void 0;
  }
  if (typeof timeout === "number") {
    return timeout;
  }
  return timeout.totalMs;
}
__name(getTotalTimeoutMs, "getTotalTimeoutMs");
function getStepTimeoutMs(timeout) {
  if (timeout == null || typeof timeout === "number") {
    return void 0;
  }
  return timeout.stepMs;
}
__name(getStepTimeoutMs, "getStepTimeoutMs");
var imageMediaTypeSignatures = [
  {
    mediaType: "image/gif",
    bytesPrefix: [71, 73, 70]
    // GIF
  },
  {
    mediaType: "image/png",
    bytesPrefix: [137, 80, 78, 71]
    // PNG
  },
  {
    mediaType: "image/jpeg",
    bytesPrefix: [255, 216]
    // JPEG
  },
  {
    mediaType: "image/webp",
    bytesPrefix: [
      82,
      73,
      70,
      70,
      // "RIFF"
      null,
      null,
      null,
      null,
      // file size (variable)
      87,
      69,
      66,
      80
      // "WEBP"
    ]
  },
  {
    mediaType: "image/bmp",
    bytesPrefix: [66, 77]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [73, 73, 42, 0]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [77, 77, 0, 42]
  },
  {
    mediaType: "image/avif",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      97,
      118,
      105,
      102
    ]
  },
  {
    mediaType: "image/heic",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      104,
      101,
      105,
      99
    ]
  }
];
var DEFAULT_SNIFF_BYTES = 18;
var MAX_SIGNATURE_BYTES = 12;
var MAX_ID3_TAG_BYTES = 128 * 1024;
var ID3_SCAN_BYTES = MAX_ID3_TAG_BYTES + MAX_SIGNATURE_BYTES;
function decodePrefix(data, maxBytes) {
  if (typeof data !== "string") {
    return data.length > maxBytes ? data.subarray(0, maxBytes) : data;
  }
  const maxChars = Math.ceil(maxBytes / 3) * 4;
  const bytes = convertBase64ToUint8Array(
    data.substring(0, Math.min(data.length, maxChars))
  );
  return bytes.length > maxBytes ? bytes.subarray(0, maxBytes) : bytes;
}
__name(decodePrefix, "decodePrefix");
function hasID3(bytes) {
  return bytes.length > 10 && bytes[0] === 73 && // 'I'
  bytes[1] === 68 && // 'D'
  bytes[2] === 51;
}
__name(hasID3, "hasID3");
var stripID3 = /* @__PURE__ */ __name((bytes) => {
  const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
  return bytes.subarray(id3Size + 10);
}, "stripID3");
function detectMediaType({
  data,
  signatures
}) {
  let bytes = decodePrefix(data, DEFAULT_SNIFF_BYTES);
  if (hasID3(bytes)) {
    bytes = stripID3(decodePrefix(data, ID3_SCAN_BYTES));
  }
  for (const signature of signatures) {
    if (bytes.length >= signature.bytesPrefix.length && signature.bytesPrefix.every(
      (byte, index) => byte === null || bytes[index] === byte
    )) {
      return signature.mediaType;
    }
  }
  return void 0;
}
__name(detectMediaType, "detectMediaType");
var VERSION4 = true ? "6.0.303" : "0.0.0-test";
var download = /* @__PURE__ */ __name(async ({
  url,
  maxBytes,
  abortSignal
}) => {
  var _a232;
  const urlText = url.toString();
  try {
    const headers = withUserAgentSuffix(
      {},
      `ai-sdk/${VERSION4}`,
      getRuntimeEnvironmentUserAgent()
    );
    const response = await fetchWithValidatedRedirects({
      url: urlText,
      headers,
      abortSignal
    });
    if (!response.ok) {
      await cancelResponseBody(response);
      throw new DownloadError({
        url: urlText,
        statusCode: response.status,
        statusText: response.statusText
      });
    }
    const data = await readResponseWithSizeLimit({
      response,
      url: urlText,
      maxBytes: maxBytes != null ? maxBytes : DEFAULT_MAX_DOWNLOAD_SIZE
    });
    return {
      data,
      mediaType: (_a232 = response.headers.get("content-type")) != null ? _a232 : void 0
    };
  } catch (error) {
    if (DownloadError.isInstance(error)) {
      throw error;
    }
    throw new DownloadError({ url: urlText, cause: error });
  }
}, "download");
var createDefaultDownloadFunction = /* @__PURE__ */ __name((download2 = download, abortSignal) => (requestedDownloads) => Promise.all(
  requestedDownloads.map(
    async (requestedDownload) => requestedDownload.isUrlSupportedByModel ? null : await download2({ ...requestedDownload, abortSignal })
  )
), "createDefaultDownloadFunction");
function mergeObjects(base, overrides) {
  if (base === void 0 && overrides === void 0) {
    return void 0;
  }
  if (base === void 0) {
    return overrides;
  }
  if (overrides === void 0) {
    return base;
  }
  const result = { ...base };
  for (const key in overrides) {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(overrides, key)) {
      const overridesValue = overrides[key];
      if (overridesValue === void 0)
        continue;
      const baseValue = key in base ? base[key] : void 0;
      const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
      const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
      if (isSourceObject && isTargetObject) {
        result[key] = mergeObjects(
          baseValue,
          overridesValue
        );
      } else {
        result[key] = overridesValue;
      }
    }
  }
  return result;
}
__name(mergeObjects, "mergeObjects");
function splitDataUrl(dataUrl) {
  try {
    const [header, base64Content] = dataUrl.split(",");
    return {
      mediaType: header.split(";")[0].split(":")[1],
      base64Content
    };
  } catch (error) {
    return {
      mediaType: void 0,
      base64Content: void 0
    };
  }
}
__name(splitDataUrl, "splitDataUrl");
var dataContentSchema = external_exports.union([
  external_exports.string(),
  external_exports.instanceof(Uint8Array),
  external_exports.instanceof(ArrayBuffer),
  external_exports.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (value) => {
      var _a232, _b17;
      return (_b17 = (_a232 = globalThis.Buffer) == null ? void 0 : _a232.isBuffer(value)) != null ? _b17 : false;
    },
    { message: "Must be a Buffer" }
  )
]);
function convertToLanguageModelV3DataContent(content) {
  let originalUrl;
  if (content instanceof Uint8Array) {
    return { data: content, mediaType: void 0 };
  }
  if (content instanceof ArrayBuffer) {
    return { data: new Uint8Array(content), mediaType: void 0 };
  }
  if (typeof content === "string") {
    try {
      const url = new URL(content);
      originalUrl = url.toString() !== content ? content : void 0;
      content = url;
    } catch (error) {
    }
  }
  if (content instanceof URL && content.protocol === "data:") {
    const { mediaType: dataUrlMediaType, base64Content } = splitDataUrl(
      content.toString()
    );
    if (dataUrlMediaType == null || base64Content == null) {
      throw new AISDKError({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${content.toString()}`
      });
    }
    return { data: base64Content, mediaType: dataUrlMediaType };
  }
  return {
    data: content,
    mediaType: void 0,
    ...originalUrl != null ? { originalUrl } : {}
  };
}
__name(convertToLanguageModelV3DataContent, "convertToLanguageModelV3DataContent");
function convertDataContentToBase64String(content) {
  if (typeof content === "string") {
    return content;
  }
  if (content instanceof ArrayBuffer) {
    return convertUint8ArrayToBase64(new Uint8Array(content));
  }
  return convertUint8ArrayToBase64(content);
}
__name(convertDataContentToBase64String, "convertDataContentToBase64String");
async function convertToLanguageModelPrompt({
  prompt,
  supportedUrls,
  download: download2,
  abortSignal
}) {
  const downloadedAssets = await downloadAssets(
    prompt.messages,
    download2 != null ? download2 : createDefaultDownloadFunction(void 0, abortSignal),
    supportedUrls
  );
  const approvalIdToToolCallId = /* @__PURE__ */ new Map();
  for (const message of prompt.messages) {
    if (message.role === "assistant" && Array.isArray(message.content)) {
      for (const part of message.content) {
        if (part.type === "tool-approval-request" && "approvalId" in part && "toolCallId" in part) {
          approvalIdToToolCallId.set(
            part.approvalId,
            part.toolCallId
          );
        }
      }
    }
  }
  const approvedToolCallIds = /* @__PURE__ */ new Set();
  for (const message of prompt.messages) {
    if (message.role === "tool") {
      for (const part of message.content) {
        if (part.type === "tool-approval-response") {
          const toolCallId = approvalIdToToolCallId.get(part.approvalId);
          if (toolCallId) {
            approvedToolCallIds.add(toolCallId);
          }
        }
      }
    }
  }
  const messages = [
    ...prompt.system != null ? typeof prompt.system === "string" ? [{ role: "system", content: prompt.system }] : asArray(prompt.system).map((message) => ({
      role: "system",
      content: message.content,
      providerOptions: message.providerOptions
    })) : [],
    ...prompt.messages.map(
      (message) => convertToLanguageModelMessage({ message, downloadedAssets })
    )
  ];
  const combinedMessages = [];
  for (const message of messages) {
    if (message.role !== "tool") {
      combinedMessages.push(message);
      continue;
    }
    const lastCombinedMessage = combinedMessages.at(-1);
    if ((lastCombinedMessage == null ? void 0 : lastCombinedMessage.role) === "tool") {
      const lastContentPart = lastCombinedMessage.content.at(-1);
      if (lastContentPart != null && lastCombinedMessage.providerOptions != null) {
        lastContentPart.providerOptions = mergeObjects(
          lastCombinedMessage.providerOptions,
          lastContentPart.providerOptions
        );
      }
      lastCombinedMessage.content.push(...message.content);
      lastCombinedMessage.providerOptions = message.providerOptions;
    } else {
      combinedMessages.push(message);
    }
  }
  const toolCallIds = /* @__PURE__ */ new Set();
  for (const message of combinedMessages) {
    switch (message.role) {
      case "assistant": {
        for (const content of message.content) {
          if (content.type === "tool-call" && !content.providerExecuted) {
            toolCallIds.add(content.toolCallId);
          }
        }
        break;
      }
      case "tool": {
        for (const content of message.content) {
          if (content.type === "tool-result") {
            toolCallIds.delete(content.toolCallId);
          }
        }
        break;
      }
      case "user":
      case "system":
        for (const id of approvedToolCallIds) {
          toolCallIds.delete(id);
        }
        if (toolCallIds.size > 0) {
          throw new MissingToolResultsError({
            toolCallIds: Array.from(toolCallIds)
          });
        }
        break;
    }
  }
  for (const id of approvedToolCallIds) {
    toolCallIds.delete(id);
  }
  if (toolCallIds.size > 0) {
    throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
  }
  return combinedMessages.filter(
    // Filter out empty tool messages (e.g. if they only contained
    // tool-approval-response parts that were removed).
    // This prevents sending invalid empty messages to the provider.
    // Note: provider-executed tool-approval-response parts are preserved.
    (message) => message.role !== "tool" || message.content.length > 0
  );
}
__name(convertToLanguageModelPrompt, "convertToLanguageModelPrompt");
function convertToLanguageModelMessage({
  message,
  downloadedAssets
}) {
  const role = message.role;
  switch (role) {
    case "system": {
      return {
        role: "system",
        content: message.content,
        providerOptions: message.providerOptions
      };
    }
    case "user": {
      if (typeof message.content === "string") {
        return {
          role: "user",
          content: [{ type: "text", text: message.content }],
          providerOptions: message.providerOptions
        };
      }
      return {
        role: "user",
        content: message.content.map((part) => convertPartToLanguageModelPart(part, downloadedAssets)).filter((part) => part.type !== "text" || part.text !== ""),
        providerOptions: message.providerOptions
      };
    }
    case "assistant": {
      if (typeof message.content === "string") {
        return {
          role: "assistant",
          content: [{ type: "text", text: message.content }],
          providerOptions: message.providerOptions
        };
      }
      return {
        role: "assistant",
        content: message.content.filter(
          // remove empty text parts (no text, and no provider options):
          (part) => part.type !== "text" || part.text !== "" || part.providerOptions != null
        ).filter(
          (part) => part.type !== "tool-approval-request"
        ).map((part) => {
          const providerOptions = part.providerOptions;
          switch (part.type) {
            case "file": {
              const { data, mediaType } = convertToLanguageModelV3DataContent(
                part.data
              );
              return {
                type: "file",
                data,
                filename: part.filename,
                mediaType: mediaType != null ? mediaType : part.mediaType,
                providerOptions
              };
            }
            case "reasoning": {
              return {
                type: "reasoning",
                text: part.text,
                providerOptions
              };
            }
            case "text": {
              return {
                type: "text",
                text: part.text,
                providerOptions
              };
            }
            case "tool-call": {
              return {
                type: "tool-call",
                toolCallId: part.toolCallId,
                toolName: part.toolName,
                input: part.input,
                providerExecuted: part.providerExecuted,
                providerOptions
              };
            }
            case "tool-result": {
              return {
                type: "tool-result",
                toolCallId: part.toolCallId,
                toolName: part.toolName,
                output: mapToolResultOutput({
                  output: part.output,
                  downloadedAssets
                }),
                providerOptions
              };
            }
          }
        }),
        providerOptions: message.providerOptions
      };
    }
    case "tool": {
      return {
        role: "tool",
        content: message.content.filter(
          // Only include tool-approval-response for provider-executed tools
          (part) => part.type !== "tool-approval-response" || part.providerExecuted
        ).map((part) => {
          switch (part.type) {
            case "tool-result": {
              return {
                type: "tool-result",
                toolCallId: part.toolCallId,
                toolName: part.toolName,
                output: mapToolResultOutput({
                  output: part.output,
                  downloadedAssets
                }),
                providerOptions: part.providerOptions
              };
            }
            case "tool-approval-response": {
              return {
                type: "tool-approval-response",
                approvalId: part.approvalId,
                approved: part.approved,
                reason: part.reason
              };
            }
          }
        }),
        providerOptions: message.providerOptions
      };
    }
    default: {
      const _exhaustiveCheck = role;
      throw new InvalidMessageRoleError({ role: _exhaustiveCheck });
    }
  }
}
__name(convertToLanguageModelMessage, "convertToLanguageModelMessage");
async function downloadAssets(messages, download2, supportedUrls) {
  var _a232;
  const downloadableFiles = [];
  for (const message of messages) {
    if (message.role === "user" && Array.isArray(message.content)) {
      for (const part of message.content) {
        if (part.type === "image" || part.type === "file") {
          downloadableFiles.push({
            data: part.type === "image" ? part.image : part.data,
            mediaType: (_a232 = part.mediaType) != null ? _a232 : part.type === "image" ? "image/*" : void 0
          });
        }
      }
    }
    if (message.role === "tool" || message.role === "assistant") {
      if (!Array.isArray(message.content)) {
        continue;
      }
      for (const part of message.content) {
        if (part.type !== "tool-result") {
          continue;
        }
        if (part.output.type !== "content") {
          continue;
        }
        for (const contentPart of part.output.value) {
          if (contentPart.type === "image-url" || contentPart.type === "file-url") {
            downloadableFiles.push({
              data: new URL(contentPart.url),
              mediaType: contentPart.type === "image-url" ? "image/*" : contentPart.mediaType
            });
          }
        }
      }
    }
  }
  const plannedDownloads = downloadableFiles.map((part) => {
    const mediaType = part.mediaType;
    const { data } = convertToLanguageModelV3DataContent(part.data);
    return { mediaType, data };
  }).filter(
    (part) => part.data instanceof URL
  ).map((part) => ({
    url: part.data,
    isUrlSupportedByModel: part.mediaType != null && isUrlSupported({
      url: part.data.toString(),
      mediaType: part.mediaType,
      supportedUrls
    })
  }));
  const downloadedFiles = await download2(plannedDownloads);
  return Object.fromEntries(
    downloadedFiles.map(
      (file, index) => file == null ? null : [
        plannedDownloads[index].url.toString(),
        { data: file.data, mediaType: file.mediaType }
      ]
    ).filter((file) => file != null)
  );
}
__name(downloadAssets, "downloadAssets");
function convertPartToLanguageModelPart(part, downloadedAssets) {
  var _a232;
  if (part.type === "text") {
    return {
      type: "text",
      text: part.text,
      providerOptions: part.providerOptions
    };
  }
  let originalData;
  const type = part.type;
  switch (type) {
    case "image":
      originalData = part.image;
      break;
    case "file":
      originalData = part.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${type}`);
  }
  const {
    data: convertedData,
    mediaType: convertedMediaType,
    originalUrl
  } = convertToLanguageModelV3DataContent(originalData);
  let mediaType = convertedMediaType != null ? convertedMediaType : part.mediaType;
  let data = convertedData;
  if (data instanceof URL) {
    const downloadedFile = downloadedAssets[data.toString()];
    if (downloadedFile) {
      data = downloadedFile.data;
      mediaType != null ? mediaType : mediaType = downloadedFile.mediaType;
    }
  }
  switch (type) {
    case "image": {
      if (data instanceof Uint8Array || typeof data === "string") {
        mediaType = (_a232 = detectMediaType({ data, signatures: imageMediaTypeSignatures })) != null ? _a232 : mediaType;
      }
      return {
        type: "file",
        mediaType: mediaType != null ? mediaType : "image/*",
        // any image
        filename: void 0,
        data,
        ...data instanceof URL && originalUrl != null ? { originalUrl } : {},
        providerOptions: part.providerOptions
      };
    }
    case "file": {
      if (mediaType == null) {
        throw new Error(`Media type is missing for file part`);
      }
      return {
        type: "file",
        mediaType,
        filename: part.filename,
        data,
        ...data instanceof URL && originalUrl != null ? { originalUrl } : {},
        providerOptions: part.providerOptions
      };
    }
  }
}
__name(convertPartToLanguageModelPart, "convertPartToLanguageModelPart");
function mapToolResultOutput({
  output,
  downloadedAssets
}) {
  if (output.type !== "content") {
    return output;
  }
  return {
    type: "content",
    value: output.value.map((item) => {
      var _a232, _b17;
      if (item.type === "image-url") {
        const downloadedFile = downloadedAssets[new URL(item.url).toString()];
        if (downloadedFile) {
          return {
            type: "image-data",
            data: convertDataContentToBase64String(downloadedFile.data),
            mediaType: (_a232 = downloadedFile.mediaType) != null ? _a232 : "image/*",
            providerOptions: item.providerOptions
          };
        }
        return item;
      }
      if (item.type === "file-url") {
        const downloadedFile = downloadedAssets[new URL(item.url).toString()];
        if (downloadedFile) {
          return {
            type: "file-data",
            data: convertDataContentToBase64String(downloadedFile.data),
            mediaType: (_b17 = downloadedFile.mediaType) != null ? _b17 : "application/octet-stream",
            providerOptions: item.providerOptions
          };
        }
        return item;
      }
      if (item.type !== "media") {
        return item;
      }
      if (item.mediaType.startsWith("image/")) {
        return {
          type: "image-data",
          data: item.data,
          mediaType: item.mediaType
        };
      }
      return {
        type: "file-data",
        data: item.data,
        mediaType: item.mediaType
      };
    })
  };
}
__name(mapToolResultOutput, "mapToolResultOutput");
async function createToolModelOutput({
  toolCallId,
  input,
  output,
  tool: tool2,
  errorMode
}) {
  if (errorMode === "text") {
    return { type: "error-text", value: getErrorMessage(output) };
  } else if (errorMode === "json") {
    return { type: "error-json", value: toJSONValue(output) };
  }
  if (tool2 == null ? void 0 : tool2.toModelOutput) {
    return await tool2.toModelOutput({ toolCallId, input, output });
  }
  return typeof output === "string" ? { type: "text", value: output } : { type: "json", value: toJSONValue(output) };
}
__name(createToolModelOutput, "createToolModelOutput");
function toJSONValue(value) {
  return value === void 0 ? null : value;
}
__name(toJSONValue, "toJSONValue");
function prepareCallSettings({
  maxOutputTokens,
  temperature,
  topP,
  topK,
  presencePenalty,
  frequencyPenalty,
  seed,
  stopSequences
}) {
  if (maxOutputTokens != null) {
    if (!Number.isInteger(maxOutputTokens)) {
      throw new InvalidArgumentError2({
        parameter: "maxOutputTokens",
        value: maxOutputTokens,
        message: "maxOutputTokens must be an integer"
      });
    }
    if (maxOutputTokens < 1) {
      throw new InvalidArgumentError2({
        parameter: "maxOutputTokens",
        value: maxOutputTokens,
        message: "maxOutputTokens must be >= 1"
      });
    }
  }
  if (temperature != null) {
    if (typeof temperature !== "number") {
      throw new InvalidArgumentError2({
        parameter: "temperature",
        value: temperature,
        message: "temperature must be a number"
      });
    }
  }
  if (topP != null) {
    if (typeof topP !== "number") {
      throw new InvalidArgumentError2({
        parameter: "topP",
        value: topP,
        message: "topP must be a number"
      });
    }
  }
  if (topK != null) {
    if (typeof topK !== "number") {
      throw new InvalidArgumentError2({
        parameter: "topK",
        value: topK,
        message: "topK must be a number"
      });
    }
  }
  if (presencePenalty != null) {
    if (typeof presencePenalty !== "number") {
      throw new InvalidArgumentError2({
        parameter: "presencePenalty",
        value: presencePenalty,
        message: "presencePenalty must be a number"
      });
    }
  }
  if (frequencyPenalty != null) {
    if (typeof frequencyPenalty !== "number") {
      throw new InvalidArgumentError2({
        parameter: "frequencyPenalty",
        value: frequencyPenalty,
        message: "frequencyPenalty must be a number"
      });
    }
  }
  if (seed != null) {
    if (!Number.isInteger(seed)) {
      throw new InvalidArgumentError2({
        parameter: "seed",
        value: seed,
        message: "seed must be an integer"
      });
    }
  }
  return {
    maxOutputTokens,
    temperature,
    topP,
    topK,
    presencePenalty,
    frequencyPenalty,
    stopSequences,
    seed
  };
}
__name(prepareCallSettings, "prepareCallSettings");
function isNonEmptyObject(object2) {
  return object2 != null && Object.keys(object2).length > 0;
}
__name(isNonEmptyObject, "isNonEmptyObject");
async function prepareToolsAndToolChoice({
  tools,
  toolChoice,
  activeTools
}) {
  if (!isNonEmptyObject(tools)) {
    return {
      tools: void 0,
      toolChoice: void 0
    };
  }
  const filteredTools = activeTools != null ? Object.entries(tools).filter(
    ([name232]) => activeTools.includes(name232)
  ) : Object.entries(tools);
  const languageModelTools = [];
  for (const [name232, tool2] of filteredTools) {
    const toolType = tool2.type;
    switch (toolType) {
      case void 0:
      case "dynamic":
      case "function":
        languageModelTools.push({
          type: "function",
          name: name232,
          description: tool2.description,
          inputSchema: await asSchema(tool2.inputSchema).jsonSchema,
          ...tool2.inputExamples != null ? { inputExamples: tool2.inputExamples } : {},
          providerOptions: tool2.providerOptions,
          ...tool2.strict != null ? { strict: tool2.strict } : {}
        });
        break;
      case "provider":
        languageModelTools.push({
          type: "provider",
          name: name232,
          id: tool2.id,
          args: tool2.args
        });
        break;
      default: {
        const exhaustiveCheck = toolType;
        throw new Error(`Unsupported tool type: ${exhaustiveCheck}`);
      }
    }
  }
  return {
    tools: languageModelTools,
    toolChoice: toolChoice == null ? { type: "auto" } : typeof toolChoice === "string" ? { type: toolChoice } : { type: "tool", toolName: toolChoice.toolName }
  };
}
__name(prepareToolsAndToolChoice, "prepareToolsAndToolChoice");
var jsonValueSchema = external_exports.lazy(
  () => external_exports.union([
    external_exports.null(),
    external_exports.string(),
    external_exports.number(),
    external_exports.boolean(),
    external_exports.record(external_exports.string(), jsonValueSchema.optional()),
    external_exports.array(jsonValueSchema)
  ])
);
var providerMetadataSchema = external_exports.record(
  external_exports.string(),
  external_exports.record(external_exports.string(), jsonValueSchema.optional())
);
var textPartSchema = external_exports.object({
  type: external_exports.literal("text"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = external_exports.object({
  type: external_exports.literal("image"),
  image: external_exports.union([dataContentSchema, external_exports.instanceof(URL)]),
  mediaType: external_exports.string().optional(),
  providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = external_exports.object({
  type: external_exports.literal("file"),
  data: external_exports.union([dataContentSchema, external_exports.instanceof(URL)]),
  filename: external_exports.string().optional(),
  mediaType: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = external_exports.object({
  type: external_exports.literal("reasoning"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = external_exports.object({
  type: external_exports.literal("tool-call"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  input: external_exports.unknown(),
  providerOptions: providerMetadataSchema.optional(),
  providerExecuted: external_exports.boolean().optional()
});
var outputSchema = external_exports.discriminatedUnion(
  "type",
  [
    external_exports.object({
      type: external_exports.literal("text"),
      value: external_exports.string(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("json"),
      value: jsonValueSchema,
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("execution-denied"),
      reason: external_exports.string().optional(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("error-text"),
      value: external_exports.string(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("error-json"),
      value: jsonValueSchema,
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("content"),
      value: external_exports.array(
        external_exports.union([
          external_exports.object({
            type: external_exports.literal("text"),
            text: external_exports.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("media"),
            data: external_exports.string(),
            mediaType: external_exports.string()
          }),
          external_exports.object({
            type: external_exports.literal("file-data"),
            data: external_exports.string(),
            mediaType: external_exports.string(),
            filename: external_exports.string().optional(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("file-url"),
            url: external_exports.string(),
            mediaType: external_exports.string().optional(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("file-id"),
            fileId: external_exports.union([external_exports.string(), external_exports.record(external_exports.string(), external_exports.string())]),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("image-data"),
            data: external_exports.string(),
            mediaType: external_exports.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("image-url"),
            url: external_exports.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("image-file-id"),
            fileId: external_exports.union([external_exports.string(), external_exports.record(external_exports.string(), external_exports.string())]),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("custom"),
            providerOptions: providerMetadataSchema.optional()
          })
        ])
      )
    })
  ]
);
var toolResultPartSchema = external_exports.object({
  type: external_exports.literal("tool-result"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  output: outputSchema,
  providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = external_exports.object({
  type: external_exports.literal("tool-approval-request"),
  approvalId: external_exports.string(),
  toolCallId: external_exports.string(),
  signature: external_exports.string().optional(),
  inputSchemaInput: external_exports.unknown().optional()
});
var toolApprovalResponseSchema = external_exports.object({
  type: external_exports.literal("tool-approval-response"),
  approvalId: external_exports.string(),
  approved: external_exports.boolean(),
  reason: external_exports.string().optional()
});
var systemModelMessageSchema = external_exports.object(
  {
    role: external_exports.literal("system"),
    content: external_exports.string(),
    providerOptions: providerMetadataSchema.optional()
  }
);
var userModelMessageSchema = external_exports.object({
  role: external_exports.literal("user"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(external_exports.union([textPartSchema, imagePartSchema, filePartSchema]))
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var assistantModelMessageSchema = external_exports.object({
  role: external_exports.literal("assistant"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(
      external_exports.union([
        textPartSchema,
        filePartSchema,
        reasoningPartSchema,
        toolCallPartSchema,
        toolResultPartSchema,
        toolApprovalRequestSchema
      ])
    )
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var toolModelMessageSchema = external_exports.object({
  role: external_exports.literal("tool"),
  content: external_exports.array(external_exports.union([toolResultPartSchema, toolApprovalResponseSchema])),
  providerOptions: providerMetadataSchema.optional()
});
var modelMessageSchema = external_exports.union([
  systemModelMessageSchema,
  userModelMessageSchema,
  assistantModelMessageSchema,
  toolModelMessageSchema
]);
async function standardizePrompt({
  allowSystemInMessages,
  system,
  prompt,
  messages
}) {
  if (prompt == null && messages == null) {
    throw new InvalidPromptError({
      prompt,
      message: "prompt or messages must be defined"
    });
  }
  if (prompt != null && messages != null) {
    throw new InvalidPromptError({
      prompt,
      message: "prompt and messages cannot be defined at the same time"
    });
  }
  if (typeof system !== "string" && !asArray(system).every((message) => message.role === "system")) {
    throw new InvalidPromptError({
      prompt,
      message: "system must be a string, SystemModelMessage, or array of SystemModelMessage"
    });
  }
  if (prompt != null && typeof prompt === "string") {
    messages = [{ role: "user", content: prompt }];
  } else if (prompt != null && Array.isArray(prompt)) {
    messages = prompt;
  } else if (messages == null) {
    throw new InvalidPromptError({
      prompt,
      message: "prompt or messages must be defined"
    });
  }
  if (messages.length === 0) {
    throw new InvalidPromptError({
      prompt,
      message: "messages must not be empty"
    });
  }
  if (messages.some((message) => message.role === "system")) {
    if (allowSystemInMessages === false) {
      throw new InvalidPromptError({
        prompt,
        message: "System messages are not allowed in the prompt or messages fields. Use the system option instead."
      });
    }
    if (allowSystemInMessages === void 0) {
      console.warn(
        "AI SDK Warning: System messages in the prompt or messages fields can be a security risk because they may enable prompt injection attacks. Use the system option instead when possible. Set allowSystemInMessages to true to suppress this warning, or false to throw an error."
      );
    }
  }
  const validationResult = await safeValidateTypes({
    value: messages,
    schema: external_exports.array(modelMessageSchema)
  });
  if (!validationResult.success) {
    throw new InvalidPromptError({
      prompt,
      message: "The messages do not match the ModelMessage[] schema.",
      cause: validationResult.error
    });
  }
  return { messages, system };
}
__name(standardizePrompt, "standardizePrompt");
function wrapGatewayError(error) {
  if (!GatewayAuthenticationError.isInstance(error))
    return error;
  const isProductionEnv = (process == null ? void 0 : process.env.NODE_ENV) === "production";
  const moreInfoURL = "https://ai-sdk.dev/unauthenticated-ai-gateway";
  if (isProductionEnv) {
    return new AISDKError({
      name: "GatewayError",
      message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${moreInfoURL}`
    });
  }
  return Object.assign(
    new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${moreInfoURL}\x1B[0m

`),
    { name: "GatewayAuthenticationError" }
  );
}
__name(wrapGatewayError, "wrapGatewayError");
function assembleOperationName({
  operationId,
  telemetry
}) {
  return {
    // standardized operation and resource name:
    "operation.name": `${operationId}${(telemetry == null ? void 0 : telemetry.functionId) != null ? ` ${telemetry.functionId}` : ""}`,
    "resource.name": telemetry == null ? void 0 : telemetry.functionId,
    // detailed, AI SDK specific data:
    "ai.operationId": operationId,
    "ai.telemetry.functionId": telemetry == null ? void 0 : telemetry.functionId
  };
}
__name(assembleOperationName, "assembleOperationName");
function getBaseTelemetryAttributes({
  model,
  settings,
  telemetry,
  headers
}) {
  var _a232;
  return {
    "ai.model.provider": model.provider,
    "ai.model.id": model.modelId,
    // settings:
    ...Object.entries(settings).reduce((attributes, [key, value]) => {
      if (key === "timeout") {
        const totalTimeoutMs = getTotalTimeoutMs(
          value
        );
        if (totalTimeoutMs != null) {
          attributes[`ai.settings.${key}`] = totalTimeoutMs;
        }
      } else {
        attributes[`ai.settings.${key}`] = value;
      }
      return attributes;
    }, {}),
    // add metadata as attributes:
    ...Object.entries((_a232 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a232 : {}).reduce(
      (attributes, [key, value]) => {
        attributes[`ai.telemetry.metadata.${key}`] = value;
        return attributes;
      },
      {}
    ),
    // request headers
    ...Object.entries(headers != null ? headers : {}).reduce((attributes, [key, value]) => {
      if (value !== void 0) {
        attributes[`ai.request.headers.${key}`] = value;
      }
      return attributes;
    }, {})
  };
}
__name(getBaseTelemetryAttributes, "getBaseTelemetryAttributes");
var noopTracer = {
  startSpan() {
    return noopSpan;
  },
  startActiveSpan(name232, arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
      return arg1(noopSpan);
    }
    if (typeof arg2 === "function") {
      return arg2(noopSpan);
    }
    if (typeof arg3 === "function") {
      return arg3(noopSpan);
    }
  }
};
var noopSpan = {
  spanContext() {
    return noopSpanContext;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return false;
  },
  recordException() {
    return this;
  }
};
var noopSpanContext = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function getTracer({
  isEnabled = false,
  tracer
} = {}) {
  if (!isEnabled) {
    return noopTracer;
  }
  if (tracer) {
    return tracer;
  }
  return trace.getTracer("ai");
}
__name(getTracer, "getTracer");
async function recordSpan({
  name: name232,
  tracer,
  attributes,
  fn,
  endWhenDone = true,
  endOnError = endWhenDone
}) {
  return tracer.startActiveSpan(
    name232,
    { attributes: await attributes },
    async (span) => {
      const ctx = context.active();
      try {
        const result = await context.with(ctx, () => fn(span));
        if (endWhenDone) {
          span.end();
        }
        return result;
      } catch (error) {
        try {
          recordErrorOnSpan(span, error);
        } finally {
          if (endOnError) {
            span.end();
          }
        }
        throw error;
      }
    }
  );
}
__name(recordSpan, "recordSpan");
function recordErrorOnSpan(span, error) {
  if (error instanceof Error) {
    span.recordException({
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error.message
    });
  } else {
    span.setStatus({ code: SpanStatusCode.ERROR });
  }
}
__name(recordErrorOnSpan, "recordErrorOnSpan");
function isPrimitiveAttributeValue(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
__name(isPrimitiveAttributeValue, "isPrimitiveAttributeValue");
function sanitizeAttributeValue(value) {
  if (!Array.isArray(value)) {
    return value;
  }
  const primitiveTypes = new Set(
    value.filter(isPrimitiveAttributeValue).map((item) => typeof item)
  );
  if (primitiveTypes.size !== 1) {
    return void 0;
  }
  const [primitiveType] = primitiveTypes;
  if (primitiveType === "string") {
    return value.filter((item) => typeof item === "string");
  }
  if (primitiveType === "number") {
    return value.filter((item) => typeof item === "number");
  }
  return value.filter((item) => typeof item === "boolean");
}
__name(sanitizeAttributeValue, "sanitizeAttributeValue");
async function selectTelemetryAttributes({
  telemetry,
  attributes
}) {
  if ((telemetry == null ? void 0 : telemetry.isEnabled) !== true) {
    return {};
  }
  const resultAttributes = {};
  for (const [key, value] of Object.entries(attributes)) {
    if (value == null) {
      continue;
    }
    if (typeof value === "object" && "input" in value && typeof value.input === "function") {
      if ((telemetry == null ? void 0 : telemetry.recordInputs) === false) {
        continue;
      }
      const result = await value.input();
      if (result != null) {
        const sanitized2 = sanitizeAttributeValue(result);
        if (sanitized2 != null)
          resultAttributes[key] = sanitized2;
      }
      continue;
    }
    if (typeof value === "object" && "output" in value && typeof value.output === "function") {
      if ((telemetry == null ? void 0 : telemetry.recordOutputs) === false) {
        continue;
      }
      const result = await value.output();
      if (result != null) {
        const sanitized2 = sanitizeAttributeValue(result);
        if (sanitized2 != null)
          resultAttributes[key] = sanitized2;
      }
      continue;
    }
    const sanitized = sanitizeAttributeValue(value);
    if (sanitized != null)
      resultAttributes[key] = sanitized;
  }
  return resultAttributes;
}
__name(selectTelemetryAttributes, "selectTelemetryAttributes");
function stringifyForTelemetry(prompt) {
  return JSON.stringify(
    prompt.map((message) => ({
      ...message,
      content: typeof message.content === "string" ? message.content : message.content.map(
        (part) => part.type === "file" ? {
          ...part,
          data: part.data instanceof Uint8Array ? convertDataContentToBase64String(part.data) : part.data
        } : part
      )
    }))
  );
}
__name(stringifyForTelemetry, "stringifyForTelemetry");
function getGlobalTelemetryIntegrations() {
  var _a232;
  return (_a232 = globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) != null ? _a232 : [];
}
__name(getGlobalTelemetryIntegrations, "getGlobalTelemetryIntegrations");
function getGlobalTelemetryIntegration() {
  const globalIntegrations = getGlobalTelemetryIntegrations();
  return (integrations) => {
    const localIntegrations = asArray(integrations);
    const allIntegrations = [...globalIntegrations, ...localIntegrations];
    function createTelemetryComposite(getListenerFromIntegration) {
      const listeners = allIntegrations.map(getListenerFromIntegration).filter(Boolean);
      return async (event) => {
        for (const listener of listeners) {
          try {
            await listener(event);
          } catch (_ignored) {
          }
        }
      };
    }
    __name(createTelemetryComposite, "createTelemetryComposite");
    return {
      onStart: createTelemetryComposite((integration) => integration.onStart),
      onStepStart: createTelemetryComposite(
        (integration) => integration.onStepStart
      ),
      onToolCallStart: createTelemetryComposite(
        (integration) => integration.onToolCallStart
      ),
      onToolCallFinish: createTelemetryComposite(
        (integration) => integration.onToolCallFinish
      ),
      onStepFinish: createTelemetryComposite(
        (integration) => integration.onStepFinish
      ),
      onFinish: createTelemetryComposite((integration) => integration.onFinish)
    };
  };
}
__name(getGlobalTelemetryIntegration, "getGlobalTelemetryIntegration");
function asLanguageModelUsage(usage) {
  return {
    inputTokens: usage.inputTokens.total,
    inputTokenDetails: {
      noCacheTokens: usage.inputTokens.noCache,
      cacheReadTokens: usage.inputTokens.cacheRead,
      cacheWriteTokens: usage.inputTokens.cacheWrite
    },
    outputTokens: usage.outputTokens.total,
    outputTokenDetails: {
      textTokens: usage.outputTokens.text,
      reasoningTokens: usage.outputTokens.reasoning
    },
    totalTokens: addTokenCounts(
      usage.inputTokens.total,
      usage.outputTokens.total
    ),
    raw: usage.raw,
    reasoningTokens: usage.outputTokens.reasoning,
    cachedInputTokens: usage.inputTokens.cacheRead
  };
}
__name(asLanguageModelUsage, "asLanguageModelUsage");
function addLanguageModelUsage(usage1, usage2) {
  var _a232, _b17, _c, _d, _e, _f, _g, _h, _i, _j;
  const raw = isNullLanguageModelUsage(usage1) ? usage2.raw : isNullLanguageModelUsage(usage2) ? usage1.raw : void 0;
  return {
    inputTokens: addTokenCounts(usage1.inputTokens, usage2.inputTokens),
    inputTokenDetails: {
      noCacheTokens: addTokenCounts(
        (_a232 = usage1.inputTokenDetails) == null ? void 0 : _a232.noCacheTokens,
        (_b17 = usage2.inputTokenDetails) == null ? void 0 : _b17.noCacheTokens
      ),
      cacheReadTokens: addTokenCounts(
        (_c = usage1.inputTokenDetails) == null ? void 0 : _c.cacheReadTokens,
        (_d = usage2.inputTokenDetails) == null ? void 0 : _d.cacheReadTokens
      ),
      cacheWriteTokens: addTokenCounts(
        (_e = usage1.inputTokenDetails) == null ? void 0 : _e.cacheWriteTokens,
        (_f = usage2.inputTokenDetails) == null ? void 0 : _f.cacheWriteTokens
      )
    },
    outputTokens: addTokenCounts(usage1.outputTokens, usage2.outputTokens),
    outputTokenDetails: {
      textTokens: addTokenCounts(
        (_g = usage1.outputTokenDetails) == null ? void 0 : _g.textTokens,
        (_h = usage2.outputTokenDetails) == null ? void 0 : _h.textTokens
      ),
      reasoningTokens: addTokenCounts(
        (_i = usage1.outputTokenDetails) == null ? void 0 : _i.reasoningTokens,
        (_j = usage2.outputTokenDetails) == null ? void 0 : _j.reasoningTokens
      )
    },
    totalTokens: addTokenCounts(usage1.totalTokens, usage2.totalTokens),
    reasoningTokens: addTokenCounts(
      usage1.reasoningTokens,
      usage2.reasoningTokens
    ),
    cachedInputTokens: addTokenCounts(
      usage1.cachedInputTokens,
      usage2.cachedInputTokens
    ),
    ...raw == null ? {} : { raw }
  };
}
__name(addLanguageModelUsage, "addLanguageModelUsage");
function isNullLanguageModelUsage(usage) {
  var _a232, _b17, _c, _d, _e;
  return usage.inputTokens == null && ((_a232 = usage.inputTokenDetails) == null ? void 0 : _a232.noCacheTokens) == null && ((_b17 = usage.inputTokenDetails) == null ? void 0 : _b17.cacheReadTokens) == null && ((_c = usage.inputTokenDetails) == null ? void 0 : _c.cacheWriteTokens) == null && usage.outputTokens == null && ((_d = usage.outputTokenDetails) == null ? void 0 : _d.textTokens) == null && ((_e = usage.outputTokenDetails) == null ? void 0 : _e.reasoningTokens) == null && usage.totalTokens == null && usage.raw == null;
}
__name(isNullLanguageModelUsage, "isNullLanguageModelUsage");
function addTokenCounts(tokenCount1, tokenCount2) {
  return tokenCount1 == null && tokenCount2 == null ? void 0 : (tokenCount1 != null ? tokenCount1 : 0) + (tokenCount2 != null ? tokenCount2 : 0);
}
__name(addTokenCounts, "addTokenCounts");
function getRetryDelayInMs({
  error,
  exponentialBackoffDelay
}) {
  const headers = APICallError.isInstance(error) ? error.responseHeaders : APICallError.isInstance(error.cause) ? error.cause.responseHeaders : void 0;
  if (!headers)
    return exponentialBackoffDelay;
  let ms;
  const retryAfterMs = headers["retry-after-ms"];
  if (retryAfterMs) {
    const timeoutMs = parseFloat(retryAfterMs);
    if (!Number.isNaN(timeoutMs)) {
      ms = timeoutMs;
    }
  }
  const retryAfter = headers["retry-after"];
  if (retryAfter && ms === void 0) {
    const timeoutSeconds = parseFloat(retryAfter);
    if (!Number.isNaN(timeoutSeconds)) {
      ms = timeoutSeconds * 1e3;
    } else {
      ms = Date.parse(retryAfter) - Date.now();
    }
  }
  if (ms != null && !Number.isNaN(ms) && 0 <= ms && (ms < 60 * 1e3 || ms < exponentialBackoffDelay)) {
    return ms;
  }
  return exponentialBackoffDelay;
}
__name(getRetryDelayInMs, "getRetryDelayInMs");
var retryWithExponentialBackoffRespectingRetryHeaders = /* @__PURE__ */ __name(({
  maxRetries = 2,
  initialDelayInMs = 2e3,
  backoffFactor = 2,
  abortSignal,
  additionalRetryableError
} = {}) => retryWithExponentialBackoff({
  maxRetries,
  initialDelayInMs,
  backoffFactor,
  abortSignal,
  shouldRetry: /* @__PURE__ */ __name(async (error) => error instanceof Error && (APICallError.isInstance(error) && error.isRetryable === true || GatewayError.isInstance(error) && error.isRetryable === true) || additionalRetryableError != null && await additionalRetryableError(error), "shouldRetry"),
  getDelayInMs: /* @__PURE__ */ __name(({ error, exponentialBackoffDelay }) => getRetryDelayInMs({
    error,
    exponentialBackoffDelay
  }), "getDelayInMs"),
  createRetryError: /* @__PURE__ */ __name(({ message, reason, errors }) => new RetryError({ message, reason, errors }), "createRetryError")
}), "retryWithExponentialBackoffRespectingRetryHeaders");
function prepareRetries({
  maxRetries,
  abortSignal,
  additionalRetryableError
}) {
  if (maxRetries != null) {
    if (!Number.isInteger(maxRetries)) {
      throw new InvalidArgumentError2({
        parameter: "maxRetries",
        value: maxRetries,
        message: "maxRetries must be an integer"
      });
    }
    if (maxRetries < 0) {
      throw new InvalidArgumentError2({
        parameter: "maxRetries",
        value: maxRetries,
        message: "maxRetries must be >= 0"
      });
    }
  }
  const maxRetriesResult = maxRetries != null ? maxRetries : 2;
  return {
    maxRetries: maxRetriesResult,
    retry: retryWithExponentialBackoffRespectingRetryHeaders({
      maxRetries: maxRetriesResult,
      abortSignal,
      additionalRetryableError
    })
  };
}
__name(prepareRetries, "prepareRetries");
function setAbortTimeout({
  abortController,
  label,
  timeoutMs
}) {
  if (abortController == null || timeoutMs == null) {
    return void 0;
  }
  return setTimeout(
    () => abortController.abort(
      new DOMException(
        `${label} timeout of ${timeoutMs}ms exceeded`,
        "TimeoutError"
      )
    ),
    timeoutMs
  );
}
__name(setAbortTimeout, "setAbortTimeout");
function collectToolApprovals({
  messages
}) {
  const lastMessage = messages.at(-1);
  if ((lastMessage == null ? void 0 : lastMessage.role) != "tool") {
    return {
      approvedToolApprovals: [],
      deniedToolApprovals: []
    };
  }
  const toolCallsByToolCallId = {};
  for (const message of messages) {
    if (message.role === "assistant" && typeof message.content !== "string") {
      const content = message.content;
      for (const part of content) {
        if (part.type === "tool-call") {
          toolCallsByToolCallId[part.toolCallId] = part;
        }
      }
    }
  }
  const toolApprovalRequestsByApprovalId = {};
  for (const message of messages) {
    if (message.role === "assistant" && typeof message.content !== "string") {
      const content = message.content;
      for (const part of content) {
        if (part.type === "tool-approval-request") {
          toolApprovalRequestsByApprovalId[part.approvalId] = part;
        }
      }
    }
  }
  const toolResults = {};
  for (const part of lastMessage.content) {
    if (part.type === "tool-result") {
      toolResults[part.toolCallId] = part;
    }
  }
  const approvedToolApprovals = [];
  const deniedToolApprovals = [];
  const approvalResponses = lastMessage.content.filter(
    (part) => part.type === "tool-approval-response"
  );
  for (const approvalResponse of approvalResponses) {
    const approvalRequest = toolApprovalRequestsByApprovalId[approvalResponse.approvalId];
    if (approvalRequest == null) {
      throw new InvalidToolApprovalError({
        approvalId: approvalResponse.approvalId
      });
    }
    if (toolResults[approvalRequest.toolCallId] != null) {
      continue;
    }
    const toolCall = toolCallsByToolCallId[approvalRequest.toolCallId];
    if (toolCall == null) {
      throw new ToolCallNotFoundForApprovalError({
        toolCallId: approvalRequest.toolCallId,
        approvalId: approvalRequest.approvalId
      });
    }
    const approval = {
      approvalRequest,
      approvalResponse,
      toolCall
    };
    if (approvalResponse.approved) {
      approvedToolApprovals.push(approval);
    } else {
      deniedToolApprovals.push(approval);
    }
  }
  return { approvedToolApprovals, deniedToolApprovals };
}
__name(collectToolApprovals, "collectToolApprovals");
function now() {
  var _a232, _b17;
  return (_b17 = (_a232 = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : _a232.now()) != null ? _b17 : Date.now();
}
__name(now, "now");
async function executeToolCall({
  toolCall,
  tools,
  tracer,
  telemetry,
  messages,
  abortSignal,
  experimental_context,
  stepNumber,
  model,
  onPreliminaryToolResult,
  onToolCallStart,
  onToolCallFinish
}) {
  var _a232;
  const { toolName, toolCallId, input } = toolCall;
  const tool2 = tools == null ? void 0 : tools[toolName];
  if ((tool2 == null ? void 0 : tool2.execute) == null) {
    return void 0;
  }
  const baseCallbackEvent = {
    stepNumber,
    model,
    toolCall,
    messages,
    abortSignal,
    functionId: telemetry == null ? void 0 : telemetry.functionId,
    metadata: telemetry == null ? void 0 : telemetry.metadata,
    experimental_context
  };
  return recordSpan({
    name: "ai.toolCall",
    attributes: selectTelemetryAttributes({
      telemetry,
      attributes: {
        ...assembleOperationName({
          operationId: "ai.toolCall",
          telemetry
        }),
        ...Object.fromEntries(
          Object.entries((_a232 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a232 : {}).map(([key, value]) => [
            `ai.telemetry.metadata.${key}`,
            value
          ])
        ),
        "ai.toolCall.name": toolName,
        "ai.toolCall.id": toolCallId,
        "ai.toolCall.args": {
          output: /* @__PURE__ */ __name(() => JSON.stringify(input), "output")
        }
      }
    }),
    tracer,
    fn: /* @__PURE__ */ __name(async (span) => {
      let output;
      await notify({ event: baseCallbackEvent, callbacks: onToolCallStart });
      const startTime = now();
      try {
        const stream = executeTool({
          execute: tool2.execute.bind(tool2),
          input,
          options: {
            toolCallId,
            messages,
            abortSignal,
            experimental_context
          }
        });
        for await (const part of stream) {
          if (part.type === "preliminary") {
            onPreliminaryToolResult == null ? void 0 : onPreliminaryToolResult({
              ...toolCall,
              type: "tool-result",
              output: part.output,
              preliminary: true
            });
          } else {
            output = part.output;
          }
        }
      } catch (error) {
        const durationMs2 = now() - startTime;
        await notify({
          event: {
            ...baseCallbackEvent,
            success: false,
            error,
            durationMs: durationMs2
          },
          callbacks: onToolCallFinish
        });
        recordErrorOnSpan(span, error);
        return {
          type: "tool-error",
          toolCallId,
          toolName,
          input,
          error,
          dynamic: tool2.type === "dynamic",
          ...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
          ...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
        };
      }
      const durationMs = now() - startTime;
      await notify({
        event: {
          ...baseCallbackEvent,
          success: true,
          output,
          durationMs
        },
        callbacks: onToolCallFinish
      });
      try {
        span.setAttributes(
          await selectTelemetryAttributes({
            telemetry,
            attributes: {
              "ai.toolCall.result": {
                output: /* @__PURE__ */ __name(() => JSON.stringify(output), "output")
              }
            }
          })
        );
      } catch (ignored) {
      }
      return {
        type: "tool-result",
        toolCallId,
        toolName,
        input,
        output,
        dynamic: tool2.type === "dynamic",
        ...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
        ...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
      };
    }, "fn")
  });
}
__name(executeToolCall, "executeToolCall");
function extractReasoningContent(content) {
  const parts = content.filter(
    (content2) => content2.type === "reasoning"
  );
  return parts.length === 0 ? void 0 : parts.map((content2) => content2.text).join("\n");
}
__name(extractReasoningContent, "extractReasoningContent");
function extractTextContent(content) {
  const parts = content.filter(
    (content2) => content2.type === "text"
  );
  if (parts.length === 0) {
    return void 0;
  }
  return parts.map((content2) => content2.text).join("");
}
__name(extractTextContent, "extractTextContent");
function filterActiveTools({
  tools,
  activeTools
}) {
  if (tools == null || activeTools == null) {
    return tools;
  }
  return Object.fromEntries(
    Object.entries(tools).filter(
      ([name232]) => activeTools.includes(name232)
    )
  );
}
__name(filterActiveTools, "filterActiveTools");
var DefaultGeneratedFile = class {
  static {
    __name(this, "DefaultGeneratedFile");
  }
  constructor({
    data,
    mediaType
  }) {
    const isUint8Array = data instanceof Uint8Array;
    this.base64Data = isUint8Array ? void 0 : data;
    this.uint8ArrayData = isUint8Array ? data : void 0;
    this.mediaType = mediaType;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    if (this.base64Data == null) {
      this.base64Data = convertUint8ArrayToBase64(this.uint8ArrayData);
    }
    return this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    if (this.uint8ArrayData == null) {
      this.uint8ArrayData = convertBase64ToUint8Array(this.base64Data);
    }
    return this.uint8ArrayData;
  }
};
async function isApprovalNeeded({
  tool: tool2,
  toolCall,
  messages,
  experimental_context
}) {
  if (tool2.needsApproval == null) {
    return false;
  }
  if (typeof tool2.needsApproval === "boolean") {
    return tool2.needsApproval;
  }
  return await tool2.needsApproval(toolCall.input, {
    toolCallId: toolCall.toolCallId,
    messages,
    experimental_context
  });
}
__name(isApprovalNeeded, "isApprovalNeeded");
function isToolExecutionAllowedFinishReason(finishReason) {
  return finishReason === "stop" || finishReason === "tool-calls";
}
__name(isToolExecutionAllowedFinishReason, "isToolExecutionAllowedFinishReason");
var encoder = new TextEncoder();
function canonicalJSON(value) {
  if (value === null || value === void 0) {
    return JSON.stringify(value);
  }
  if (typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map(canonicalJSON).join(",")}]`;
  }
  const keys = Object.keys(value).sort();
  const entries = keys.map(
    (k) => `${JSON.stringify(k)}:${canonicalJSON(value[k])}`
  );
  return `{${entries.join(",")}}`;
}
__name(canonicalJSON, "canonicalJSON");
function toBase64url(bytes) {
  return convertUint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
__name(toBase64url, "toBase64url");
function fromBase64url(str) {
  return convertBase64ToUint8Array(str);
}
__name(fromBase64url, "fromBase64url");
async function importKey(secret) {
  const keyData = typeof secret === "string" ? encoder.encode(secret) : secret;
  return crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}
__name(importKey, "importKey");
async function hashInput(input) {
  const canonical = canonicalJSON(input);
  const digest = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(canonical)
  );
  return toBase64url(new Uint8Array(digest));
}
__name(hashInput, "hashInput");
function buildPayload(approvalId, toolCallId, toolName, inputDigest) {
  return encoder.encode(
    `${approvalId}
${toolCallId}
${toolName}
${inputDigest}`
  );
}
__name(buildPayload, "buildPayload");
async function signToolApproval({
  secret,
  approvalId,
  toolCallId,
  toolName,
  input
}) {
  const key = await importKey(secret);
  const inputDigest = await hashInput(input);
  const payload = buildPayload(approvalId, toolCallId, toolName, inputDigest);
  const sig = await crypto.subtle.sign("HMAC", key, payload);
  return toBase64url(new Uint8Array(sig));
}
__name(signToolApproval, "signToolApproval");
async function verifyToolApprovalSignature({
  secret,
  signature,
  approvalId,
  toolCallId,
  toolName,
  input
}) {
  const key = await importKey(secret);
  const inputDigest = await hashInput(input);
  const payload = buildPayload(approvalId, toolCallId, toolName, inputDigest);
  const sigBytes = fromBase64url(signature);
  return crypto.subtle.verify("HMAC", key, sigBytes, payload);
}
__name(verifyToolApprovalSignature, "verifyToolApprovalSignature");
async function maybeSignApproval({
  secret,
  approvalId,
  toolCallId,
  toolName,
  input
}) {
  if (secret == null)
    return void 0;
  return signToolApproval({ secret, approvalId, toolCallId, toolName, input });
}
__name(maybeSignApproval, "maybeSignApproval");
function isDeepEqualData(obj1, obj2) {
  if (obj1 === obj2)
    return true;
  if (obj1 == null || obj2 == null)
    return false;
  if (typeof obj1 !== "object" && typeof obj2 !== "object")
    return obj1 === obj2;
  if (obj1.constructor !== obj2.constructor)
    return false;
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length)
      return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!isDeepEqualData(obj1[i], obj2[i]))
        return false;
    }
    return true;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length)
    return false;
  for (const key of keys1) {
    if (!keys2.includes(key))
      return false;
    if (!isDeepEqualData(obj1[key], obj2[key]))
      return false;
  }
  return true;
}
__name(isDeepEqualData, "isDeepEqualData");
async function validateApprovedToolApprovals({
  approvedToolApprovals,
  tools,
  messages,
  experimental_context,
  toolApprovalSecret
}) {
  var _a232;
  const approved = [];
  const denied = [];
  const invalid = [];
  for (const approval of approvedToolApprovals) {
    const { toolCall, approvalRequest } = approval;
    const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
    if (toolApprovalSecret != null) {
      if (approvalRequest.signature == null) {
        throw new InvalidToolApprovalSignatureError({
          approvalId: approvalRequest.approvalId,
          toolCallId: toolCall.toolCallId,
          reason: "missing signature"
        });
      }
      const valid = await verifyToolApprovalSignature({
        secret: toolApprovalSecret,
        signature: approvalRequest.signature,
        approvalId: approvalRequest.approvalId,
        toolCallId: toolCall.toolCallId,
        toolName: toolCall.toolName,
        input: toolCall.input
      });
      if (!valid) {
        throw new InvalidToolApprovalSignatureError({
          approvalId: approvalRequest.approvalId,
          toolCallId: toolCall.toolCallId,
          reason: "invalid signature"
        });
      }
    }
    if (tool2 != null && typeof tool2.execute === "function" && tool2.inputSchema != null) {
      const hasInputSchemaInput = Object.prototype.hasOwnProperty.call(
        approvalRequest,
        "inputSchemaInput"
      );
      const validation = await safeValidateTypes({
        value: hasInputSchemaInput ? approvalRequest.inputSchemaInput : toolCall.input,
        schema: asSchema(tool2.inputSchema)
      });
      let validationError;
      if (!validation.success) {
        validationError = validation.error;
      } else if (!isDeepEqualData(validation.value, toolCall.input)) {
        validationError = new Error(
          "Approved tool input does not match the validated schema output."
        );
      }
      if (validationError != null) {
        invalid.push({
          ...approval,
          error: new InvalidToolInputError({
            toolName: toolCall.toolName,
            toolInput: JSON.stringify(toolCall.input),
            cause: validationError
          })
        });
        continue;
      }
    }
    const approvalNeeded = tool2 != null && await isApprovalNeeded({
      tool: tool2,
      toolCall,
      messages,
      experimental_context
    });
    if (approvalNeeded) {
      approved.push(approval);
    } else {
      denied.push({
        ...approval,
        approvalResponse: {
          ...approval.approvalResponse,
          approved: false,
          reason: (_a232 = approval.approvalResponse.reason) != null ? _a232 : `Tool "${toolCall.toolName}" does not require approval`
        }
      });
    }
  }
  return {
    approvedToolApprovals: approved,
    deniedToolApprovals: denied,
    invalidToolApprovals: invalid
  };
}
__name(validateApprovedToolApprovals, "validateApprovedToolApprovals");
var output_exports = {};
__export(output_exports, {
  array: /* @__PURE__ */ __name(() => array, "array"),
  choice: /* @__PURE__ */ __name(() => choice, "choice"),
  json: /* @__PURE__ */ __name(() => json, "json"),
  object: /* @__PURE__ */ __name(() => object, "object"),
  text: /* @__PURE__ */ __name(() => text, "text")
});
function fixJson(input) {
  const stack = ["ROOT"];
  let lastValidIndex = -1;
  let literalStart = null;
  let unicodeEscapeDigits = 0;
  function isHexDigit(char) {
    return char >= "0" && char <= "9" || char >= "A" && char <= "F" || char >= "a" && char <= "f";
  }
  __name(isHexDigit, "isHexDigit");
  function processValueStart(char, i, swapState) {
    {
      switch (char) {
        case '"': {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_STRING");
          break;
        }
        case "f":
        case "t":
        case "n": {
          lastValidIndex = i;
          literalStart = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_LITERAL");
          break;
        }
        case "-": {
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "{": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_OBJECT_START");
          break;
        }
        case "[": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_ARRAY_START");
          break;
        }
      }
    }
  }
  __name(processValueStart, "processValueStart");
  function processAfterObjectValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  __name(processAfterObjectValue, "processAfterObjectValue");
  function processAfterArrayValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  __name(processAfterArrayValue, "processAfterArrayValue");
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const currentState = stack[stack.length - 1];
    switch (currentState) {
      case "ROOT":
        processValueStart(char, i, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (char) {
          case ":": {
            stack.pop();
            stack.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        processAfterObjectValue(char, i);
        break;
      }
      case "INSIDE_STRING": {
        switch (char) {
          case '"': {
            stack.pop();
            lastValidIndex = i;
            break;
          }
          case "\\": {
            stack.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default: {
            lastValidIndex = i;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (char) {
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (char) {
          case ",": {
            stack.pop();
            stack.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        stack.pop();
        if (char === "u") {
          unicodeEscapeDigits = 0;
          stack.push("INSIDE_STRING_UNICODE_ESCAPE");
        } else {
          lastValidIndex = i;
        }
        break;
      }
      case "INSIDE_STRING_UNICODE_ESCAPE": {
        if (isHexDigit(char)) {
          unicodeEscapeDigits++;
          if (unicodeEscapeDigits === 4) {
            stack.pop();
            lastValidIndex = i;
          }
        }
        break;
      }
      case "INSIDE_NUMBER": {
        switch (char) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            lastValidIndex = i;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".": {
            break;
          }
          case ",": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "}": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "]": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            break;
          }
          default: {
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, i + 1);
        if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
          stack.pop();
          if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
            processAfterObjectValue(char, i);
          } else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
            processAfterArrayValue(char, i);
          }
        } else {
          lastValidIndex = i;
        }
        break;
      }
    }
  }
  let result = input.slice(0, lastValidIndex + 1);
  for (let i = stack.length - 1; i >= 0; i--) {
    const state = stack[i];
    switch (state) {
      case "INSIDE_STRING": {
        result += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        result += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        result += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, input.length);
        if ("true".startsWith(partialLiteral)) {
          result += "true".slice(partialLiteral.length);
        } else if ("false".startsWith(partialLiteral)) {
          result += "false".slice(partialLiteral.length);
        } else if ("null".startsWith(partialLiteral)) {
          result += "null".slice(partialLiteral.length);
        }
      }
    }
  }
  return result;
}
__name(fixJson, "fixJson");
async function parsePartialJson(jsonText) {
  if (jsonText === void 0) {
    return { value: void 0, state: "undefined-input" };
  }
  let result = await safeParseJSON({ text: jsonText });
  if (result.success) {
    return { value: result.value, state: "successful-parse" };
  }
  result = await safeParseJSON({ text: fixJson(jsonText) });
  if (result.success) {
    return { value: result.value, state: "repaired-parse" };
  }
  return { value: void 0, state: "failed-parse" };
}
__name(parsePartialJson, "parsePartialJson");
var text = /* @__PURE__ */ __name(() => ({
  name: "text",
  responseFormat: Promise.resolve({ type: "text" }),
  async parseCompleteOutput({ text: text2 }) {
    return text2;
  },
  async parsePartialOutput({ text: text2 }) {
    return { partial: text2 };
  },
  createElementStreamTransform() {
    return void 0;
  }
}), "text");
var object = /* @__PURE__ */ __name(({
  schema: inputSchema,
  name: name232,
  description
}) => {
  const schema = asSchema(inputSchema);
  return {
    name: "object",
    responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
      type: "json",
      schema: jsonSchema2,
      ...name232 != null && { name: name232 },
      ...description != null && { description }
    })),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const validationResult = await safeValidateTypes({
        value: parseResult.value,
        schema
      });
      if (!validationResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: validationResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return validationResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          return {
            // Note: currently no validation of partial results:
            partial: result.value
          };
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
}, "object");
var array = /* @__PURE__ */ __name(({
  element: inputElementSchema,
  name: name232,
  description
}) => {
  const elementSchema = asSchema(inputElementSchema);
  return {
    name: "array",
    // JSON schema that describes an array of elements:
    responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
      const { $schema, ...itemSchema } = jsonSchema2;
      return {
        type: "json",
        schema: {
          $schema: "http://json-schema.org/draft-07/schema#",
          type: "object",
          properties: {
            elements: { type: "array", items: itemSchema }
          },
          required: ["elements"],
          additionalProperties: false
        },
        ...name232 != null && { name: name232 },
        ...description != null && { description }
      };
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object with an elements array"
          }),
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const validatedElements = [];
      for (const element of outerValue.elements) {
        const validationResult = await safeValidateTypes({
          value: element,
          schema: elementSchema
        });
        if (!validationResult.success) {
          throw new NoObjectGeneratedError({
            message: "No object generated: response did not match schema.",
            cause: validationResult.error,
            text: text2,
            response: context2.response,
            usage: context2.usage,
            finishReason: context2.finishReason
          });
        }
        validatedElements.push(validationResult.value);
      }
      return validatedElements;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
            return void 0;
          }
          const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
          const parsedElements = [];
          for (const rawElement of rawElements) {
            const validationResult = await safeValidateTypes({
              value: rawElement,
              schema: elementSchema
            });
            if (validationResult.success) {
              parsedElements.push(validationResult.value);
            }
          }
          return { partial: parsedElements };
        }
      }
    },
    createElementStreamTransform() {
      let publishedElements = 0;
      return new TransformStream({
        transform({ partialOutput }, controller) {
          if (partialOutput != null) {
            for (; publishedElements < partialOutput.length; publishedElements++) {
              controller.enqueue(partialOutput[publishedElements]);
            }
          }
        }
      });
    }
  };
}, "array");
var choice = /* @__PURE__ */ __name(({
  options: choiceOptions,
  name: name232,
  description
}) => {
  return {
    name: "choice",
    // JSON schema that describes an enumeration:
    responseFormat: Promise.resolve({
      type: "json",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
          result: { type: "string", enum: choiceOptions }
        },
        required: ["result"],
        additionalProperties: false
      },
      ...name232 != null && { name: name232 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object that contains a choice value."
          }),
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return outerValue.result;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") {
            return void 0;
          }
          const potentialMatches = choiceOptions.filter(
            (choiceOption) => choiceOption.startsWith(outerValue.result)
          );
          if (result.state === "successful-parse") {
            return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
          } else {
            return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
          }
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
}, "choice");
var json = /* @__PURE__ */ __name(({
  name: name232,
  description
} = {}) => {
  return {
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...name232 != null && { name: name232 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return parseResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          return result.value === void 0 ? void 0 : { partial: result.value };
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
}, "json");
var inputSchemaInputSymbol = Symbol("ai-sdk-tool-call-input-schema-input");
function setToolCallInputSchemaInput(toolCall, inputSchemaInput) {
  Object.defineProperty(toolCall, inputSchemaInputSymbol, {
    value: inputSchemaInput
  });
  return toolCall;
}
__name(setToolCallInputSchemaInput, "setToolCallInputSchemaInput");
function getToolCallInputSchemaInput(toolCall) {
  return inputSchemaInputSymbol in toolCall ? {
    value: toolCall[inputSchemaInputSymbol]
  } : void 0;
}
__name(getToolCallInputSchemaInput, "getToolCallInputSchemaInput");
async function parseToolCall({
  toolCall,
  tools,
  repairToolCall,
  system,
  messages
}) {
  try {
    if (tools == null) {
      if (toolCall.providerExecuted && toolCall.dynamic) {
        return await parseProviderExecutedDynamicToolCall(toolCall);
      }
      throw new NoSuchToolError({ toolName: toolCall.toolName });
    }
    try {
      return await doParseToolCall({ toolCall, tools });
    } catch (error) {
      if (repairToolCall == null || !(NoSuchToolError.isInstance(error) || InvalidToolInputError.isInstance(error))) {
        throw error;
      }
      let repairedToolCall = null;
      try {
        repairedToolCall = await repairToolCall({
          toolCall,
          tools,
          inputSchema: /* @__PURE__ */ __name(async ({ toolName }) => {
            const { inputSchema } = tools[toolName];
            return await asSchema(inputSchema).jsonSchema;
          }, "inputSchema"),
          system,
          messages,
          error
        });
      } catch (repairError) {
        throw new ToolCallRepairError({
          cause: repairError,
          originalError: error
        });
      }
      if (repairedToolCall == null) {
        throw error;
      }
      return await doParseToolCall({ toolCall: repairedToolCall, tools });
    }
  } catch (error) {
    const parsedInput = await safeParseJSON({ text: toolCall.input });
    const input = parsedInput.success ? parsedInput.value : toolCall.input;
    const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
    return {
      type: "tool-call",
      toolCallId: toolCall.toolCallId,
      toolName: toolCall.toolName,
      input,
      dynamic: true,
      invalid: true,
      error,
      title: tool2 == null ? void 0 : tool2.title,
      providerExecuted: toolCall.providerExecuted,
      providerMetadata: toolCall.providerMetadata,
      ...(tool2 == null ? void 0 : tool2.metadata) != null ? { toolMetadata: tool2.metadata } : {}
    };
  }
}
__name(parseToolCall, "parseToolCall");
async function parseProviderExecutedDynamicToolCall(toolCall) {
  const parseResult = toolCall.input.trim() === "" ? { success: true, value: {} } : await safeParseJSON({ text: toolCall.input });
  if (parseResult.success === false) {
    throw new InvalidToolInputError({
      toolName: toolCall.toolName,
      toolInput: toolCall.input,
      cause: parseResult.error
    });
  }
  return {
    type: "tool-call",
    toolCallId: toolCall.toolCallId,
    toolName: toolCall.toolName,
    input: parseResult.value,
    providerExecuted: true,
    dynamic: true,
    providerMetadata: toolCall.providerMetadata
  };
}
__name(parseProviderExecutedDynamicToolCall, "parseProviderExecutedDynamicToolCall");
async function doParseToolCall({
  toolCall,
  tools
}) {
  const toolName = toolCall.toolName;
  const tool2 = tools[toolName];
  if (tool2 == null) {
    if (toolCall.providerExecuted && toolCall.dynamic) {
      return await parseProviderExecutedDynamicToolCall(toolCall);
    }
    throw new NoSuchToolError({
      toolName: toolCall.toolName,
      availableTools: Object.keys(tools)
    });
  }
  const schema = asSchema(tool2.inputSchema);
  const parseResult = toolCall.input.trim() === "" ? await safeValidateTypes({ value: {}, schema }) : await safeParseJSON({ text: toolCall.input, schema });
  if (parseResult.success === false) {
    throw new InvalidToolInputError({
      toolName,
      toolInput: toolCall.input,
      cause: parseResult.error
    });
  }
  return setToolCallInputSchemaInput(
    tool2.type === "dynamic" ? {
      type: "tool-call",
      toolCallId: toolCall.toolCallId,
      toolName: toolCall.toolName,
      input: parseResult.value,
      providerExecuted: toolCall.providerExecuted,
      providerMetadata: toolCall.providerMetadata,
      ...tool2.metadata != null ? { toolMetadata: tool2.metadata } : {},
      dynamic: true,
      title: tool2.title
    } : {
      type: "tool-call",
      toolCallId: toolCall.toolCallId,
      toolName,
      input: parseResult.value,
      providerExecuted: toolCall.providerExecuted,
      providerMetadata: toolCall.providerMetadata,
      ...tool2.metadata != null ? { toolMetadata: tool2.metadata } : {},
      title: tool2.title
    },
    parseResult.rawValue
  );
}
__name(doParseToolCall, "doParseToolCall");
function prepareStepCallSettings({
  callSettings,
  stepSettings
}) {
  var _a232, _b17, _c, _d, _e, _f, _g, _h;
  return prepareCallSettings({
    maxOutputTokens: (_a232 = stepSettings == null ? void 0 : stepSettings.maxOutputTokens) != null ? _a232 : callSettings.maxOutputTokens,
    temperature: (_b17 = stepSettings == null ? void 0 : stepSettings.temperature) != null ? _b17 : callSettings.temperature,
    topP: (_c = stepSettings == null ? void 0 : stepSettings.topP) != null ? _c : callSettings.topP,
    topK: (_d = stepSettings == null ? void 0 : stepSettings.topK) != null ? _d : callSettings.topK,
    presencePenalty: (_e = stepSettings == null ? void 0 : stepSettings.presencePenalty) != null ? _e : callSettings.presencePenalty,
    frequencyPenalty: (_f = stepSettings == null ? void 0 : stepSettings.frequencyPenalty) != null ? _f : callSettings.frequencyPenalty,
    stopSequences: (_g = stepSettings == null ? void 0 : stepSettings.stopSequences) != null ? _g : callSettings.stopSequences,
    seed: (_h = stepSettings == null ? void 0 : stepSettings.seed) != null ? _h : callSettings.seed
  });
}
__name(prepareStepCallSettings, "prepareStepCallSettings");
var DefaultStepResult = class {
  static {
    __name(this, "DefaultStepResult");
  }
  constructor({
    stepNumber,
    model,
    functionId,
    metadata,
    experimental_context,
    content,
    finishReason,
    rawFinishReason,
    usage,
    warnings,
    request,
    response,
    providerMetadata
  }) {
    this.stepNumber = stepNumber;
    this.model = model;
    this.functionId = functionId;
    this.metadata = metadata;
    this.experimental_context = experimental_context;
    this.content = content;
    this.finishReason = finishReason;
    this.rawFinishReason = rawFinishReason;
    this.usage = usage;
    this.warnings = warnings;
    this.request = request;
    this.response = response;
    this.providerMetadata = providerMetadata;
  }
  get text() {
    return this.content.filter((part) => part.type === "text").map((part) => part.text).join("");
  }
  get reasoning() {
    return this.content.filter((part) => part.type === "reasoning");
  }
  get reasoningText() {
    return this.reasoning.length === 0 ? void 0 : this.reasoning.map((part) => part.text).join("");
  }
  get files() {
    return this.content.filter((part) => part.type === "file").map((part) => part.file);
  }
  get sources() {
    return this.content.filter((part) => part.type === "source");
  }
  get toolCalls() {
    return this.content.filter((part) => part.type === "tool-call");
  }
  get staticToolCalls() {
    return this.toolCalls.filter(
      (toolCall) => toolCall.dynamic !== true
    );
  }
  get dynamicToolCalls() {
    return this.toolCalls.filter(
      (toolCall) => toolCall.dynamic === true
    );
  }
  get toolResults() {
    return this.content.filter((part) => part.type === "tool-result");
  }
  get staticToolResults() {
    return this.toolResults.filter(
      (toolResult) => toolResult.dynamic !== true
    );
  }
  get dynamicToolResults() {
    return this.toolResults.filter(
      (toolResult) => toolResult.dynamic === true
    );
  }
};
function stepCountIs(stepCount) {
  return ({ steps }) => steps.length === stepCount;
}
__name(stepCountIs, "stepCountIs");
async function isStopConditionMet({
  stopConditions,
  steps
}) {
  return (await Promise.all(stopConditions.map((condition) => condition({ steps })))).some((result) => result);
}
__name(isStopConditionMet, "isStopConditionMet");
async function toResponseMessages({
  content: inputContent,
  tools
}) {
  const responseMessages = [];
  const toolCallOrder = /* @__PURE__ */ new Map();
  const content = [];
  for (const part of inputContent) {
    if (part.type === "source") {
      continue;
    }
    if ((part.type === "tool-result" || part.type === "tool-error") && !part.providerExecuted) {
      continue;
    }
    if (part.type === "text" && part.text.length === 0) {
      continue;
    }
    switch (part.type) {
      case "text":
        content.push({
          type: "text",
          text: part.text,
          providerOptions: part.providerMetadata
        });
        break;
      case "reasoning":
        content.push({
          type: "reasoning",
          text: part.text,
          providerOptions: part.providerMetadata
        });
        break;
      case "file":
        content.push({
          type: "file",
          data: part.file.base64,
          mediaType: part.file.mediaType,
          providerOptions: part.providerMetadata
        });
        break;
      case "tool-call":
        if (!toolCallOrder.has(part.toolCallId)) {
          toolCallOrder.set(part.toolCallId, toolCallOrder.size);
        }
        content.push({
          type: "tool-call",
          toolCallId: part.toolCallId,
          toolName: part.toolName,
          input: part.invalid && typeof part.input !== "object" ? {} : part.input,
          providerExecuted: part.providerExecuted,
          providerOptions: part.providerMetadata
        });
        break;
      case "tool-result": {
        const output = await createToolModelOutput({
          toolCallId: part.toolCallId,
          input: part.input,
          tool: tools == null ? void 0 : tools[part.toolName],
          output: part.output,
          errorMode: "none"
        });
        content.push({
          type: "tool-result",
          toolCallId: part.toolCallId,
          toolName: part.toolName,
          output,
          providerOptions: part.providerMetadata
        });
        break;
      }
      case "tool-error": {
        const output = await createToolModelOutput({
          toolCallId: part.toolCallId,
          input: part.input,
          tool: tools == null ? void 0 : tools[part.toolName],
          output: part.error,
          errorMode: "json"
        });
        content.push({
          type: "tool-result",
          toolCallId: part.toolCallId,
          toolName: part.toolName,
          output,
          providerOptions: part.providerMetadata
        });
        break;
      }
      case "tool-approval-request":
        const inputSchemaInput = getToolCallInputSchemaInput(part.toolCall);
        content.push({
          type: "tool-approval-request",
          approvalId: part.approvalId,
          toolCallId: part.toolCall.toolCallId,
          ...part.signature != null ? { signature: part.signature } : {},
          ...inputSchemaInput != null && !isDeepEqualData(inputSchemaInput.value, part.toolCall.input) ? { inputSchemaInput: inputSchemaInput.value } : {}
        });
        break;
    }
  }
  if (content.length > 0) {
    responseMessages.push({
      role: "assistant",
      content
    });
  }
  const toolResultContent = [];
  for (const part of inputContent) {
    if (!(part.type === "tool-result" || part.type === "tool-error") || part.providerExecuted) {
      continue;
    }
    const output = await createToolModelOutput({
      toolCallId: part.toolCallId,
      input: part.input,
      tool: tools == null ? void 0 : tools[part.toolName],
      output: part.type === "tool-result" ? part.output : part.error,
      errorMode: part.type === "tool-error" ? "text" : "none"
    });
    toolResultContent.push({
      type: "tool-result",
      toolCallId: part.toolCallId,
      toolName: part.toolName,
      output,
      ...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
    });
  }
  if (toolResultContent.length > 0) {
    responseMessages.push({
      role: "tool",
      content: sortToolResultContentByToolCallOrder({
        toolResultContent,
        toolCallOrder
      })
    });
  }
  return responseMessages;
}
__name(toResponseMessages, "toResponseMessages");
function sortToolResultContentByToolCallOrder({
  toolResultContent,
  toolCallOrder
}) {
  const sortedToolResults = toolResultContent.filter((part) => part.type === "tool-result").map((part, index) => ({ part, index })).sort((a, b) => {
    const aOrder = toolCallOrder.get(a.part.toolCallId);
    const bOrder = toolCallOrder.get(b.part.toolCallId);
    if (aOrder == null && bOrder == null) {
      return a.index - b.index;
    }
    if (aOrder == null) {
      return 1;
    }
    if (bOrder == null) {
      return -1;
    }
    return aOrder - bOrder || a.index - b.index;
  }).map(({ part }) => part);
  let toolResultIndex = 0;
  return toolResultContent.map(
    (part) => part.type === "tool-result" ? sortedToolResults[toolResultIndex++] : part
  );
}
__name(sortToolResultContentByToolCallOrder, "sortToolResultContentByToolCallOrder");
function mergeAbortSignals(...signals) {
  const validSignals = signals.filter(
    (signal) => signal != null
  );
  if (validSignals.length === 0) {
    return void 0;
  }
  if (validSignals.length === 1) {
    return validSignals[0];
  }
  const controller = new AbortController();
  for (const signal of validSignals) {
    if (signal.aborted) {
      controller.abort(signal.reason);
      return controller.signal;
    }
    signal.addEventListener(
      "abort",
      () => {
        controller.abort(signal.reason);
      },
      { once: true }
    );
  }
  return controller.signal;
}
__name(mergeAbortSignals, "mergeAbortSignals");
var originalGenerateId = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
async function generateText({
  model: modelArg,
  tools,
  toolChoice,
  system,
  prompt,
  messages,
  allowSystemInMessages,
  maxRetries: maxRetriesArg,
  abortSignal,
  timeout,
  headers,
  stopWhen = stepCountIs(1),
  experimental_output,
  output = experimental_output,
  experimental_telemetry: telemetry,
  providerOptions,
  experimental_activeTools,
  activeTools = experimental_activeTools,
  experimental_prepareStep,
  prepareStep = experimental_prepareStep,
  experimental_repairToolCall: repairToolCall,
  experimental_download: download2,
  experimental_context,
  experimental_toolApprovalSecret,
  experimental_include: include,
  _internal: { generateId: generateId2 = originalGenerateId } = {},
  experimental_onStart: onStart,
  experimental_onStepStart: onStepStart,
  experimental_onToolCallStart: onToolCallStart,
  experimental_onToolCallFinish: onToolCallFinish,
  onStepFinish,
  onFinish,
  ...settings
}) {
  const model = resolveLanguageModel(modelArg);
  const createGlobalTelemetry = getGlobalTelemetryIntegration();
  const stopConditions = asArray(stopWhen);
  const totalTimeoutMs = getTotalTimeoutMs(timeout);
  const stepTimeoutMs = getStepTimeoutMs(timeout);
  const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
  const mergedAbortSignal = mergeAbortSignals(
    abortSignal,
    totalTimeoutMs != null ? AbortSignal.timeout(totalTimeoutMs) : void 0,
    stepAbortController == null ? void 0 : stepAbortController.signal
  );
  const { maxRetries, retry } = prepareRetries({
    maxRetries: maxRetriesArg,
    abortSignal: mergedAbortSignal
  });
  const callSettings = prepareCallSettings(settings);
  const headersWithUserAgent = withUserAgentSuffix(
    headers != null ? headers : {},
    `ai/${VERSION4}`
  );
  const baseTelemetryAttributes = getBaseTelemetryAttributes({
    model,
    telemetry,
    headers: headersWithUserAgent,
    settings: { ...callSettings, maxRetries }
  });
  const modelInfo = { provider: model.provider, modelId: model.modelId };
  const initialPrompt = await standardizePrompt({
    system,
    prompt,
    messages,
    allowSystemInMessages
  });
  const globalTelemetry = createGlobalTelemetry(telemetry == null ? void 0 : telemetry.integrations);
  await notify({
    event: {
      model: modelInfo,
      system,
      prompt,
      messages,
      tools,
      toolChoice,
      activeTools,
      maxOutputTokens: callSettings.maxOutputTokens,
      temperature: callSettings.temperature,
      topP: callSettings.topP,
      topK: callSettings.topK,
      presencePenalty: callSettings.presencePenalty,
      frequencyPenalty: callSettings.frequencyPenalty,
      stopSequences: callSettings.stopSequences,
      seed: callSettings.seed,
      maxRetries,
      timeout,
      headers,
      providerOptions,
      stopWhen,
      output,
      abortSignal,
      include,
      functionId: telemetry == null ? void 0 : telemetry.functionId,
      metadata: telemetry == null ? void 0 : telemetry.metadata,
      experimental_context
    },
    callbacks: [
      onStart,
      globalTelemetry.onStart
    ]
  });
  const tracer = getTracer(telemetry);
  try {
    return await recordSpan({
      name: "ai.generateText",
      attributes: selectTelemetryAttributes({
        telemetry,
        attributes: {
          ...assembleOperationName({
            operationId: "ai.generateText",
            telemetry
          }),
          ...baseTelemetryAttributes,
          // model:
          "ai.model.provider": model.provider,
          "ai.model.id": model.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: /* @__PURE__ */ __name(() => JSON.stringify({ system, prompt, messages }), "input")
          }
        }
      }),
      tracer,
      fn: /* @__PURE__ */ __name(async (span) => {
        var _a232, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
        const initialMessages = initialPrompt.messages;
        const responseMessages = [];
        const {
          approvedToolApprovals,
          deniedToolApprovals: collectedDeniedToolApprovals
        } = collectToolApprovals({ messages: initialMessages });
        const {
          approvedToolApprovals: localApprovedToolApprovals,
          deniedToolApprovals: revalidationDeniedToolApprovals,
          invalidToolApprovals
        } = await validateApprovedToolApprovals({
          approvedToolApprovals: approvedToolApprovals.filter(
            (toolApproval) => !toolApproval.toolCall.providerExecuted
          ),
          tools,
          messages: initialMessages,
          experimental_context,
          toolApprovalSecret: experimental_toolApprovalSecret
        });
        const deniedToolApprovals = [
          ...collectedDeniedToolApprovals,
          ...revalidationDeniedToolApprovals
        ];
        if (deniedToolApprovals.length > 0 || localApprovedToolApprovals.length > 0 || invalidToolApprovals.length > 0) {
          const toolOutputs = await executeTools({
            toolCalls: localApprovedToolApprovals.map(
              (toolApproval) => toolApproval.toolCall
            ),
            tools,
            tracer,
            telemetry,
            messages: initialMessages,
            abortSignal: mergedAbortSignal,
            experimental_context,
            stepNumber: 0,
            model: modelInfo,
            onToolCallStart: [
              onToolCallStart,
              globalTelemetry.onToolCallStart
            ],
            onToolCallFinish: [
              onToolCallFinish,
              globalTelemetry.onToolCallFinish
            ]
          });
          const toolContent = [];
          for (const output2 of toolOutputs) {
            const modelOutput = await createToolModelOutput({
              toolCallId: output2.toolCallId,
              input: output2.input,
              tool: tools == null ? void 0 : tools[output2.toolName],
              output: output2.type === "tool-result" ? output2.output : output2.error,
              errorMode: output2.type === "tool-error" ? "text" : "none"
            });
            toolContent.push({
              type: "tool-result",
              toolCallId: output2.toolCallId,
              toolName: output2.toolName,
              output: modelOutput
            });
          }
          for (const toolApproval of invalidToolApprovals) {
            toolContent.push({
              type: "tool-result",
              toolCallId: toolApproval.toolCall.toolCallId,
              toolName: toolApproval.toolCall.toolName,
              output: await createToolModelOutput({
                toolCallId: toolApproval.toolCall.toolCallId,
                input: toolApproval.toolCall.input,
                tool: tools == null ? void 0 : tools[toolApproval.toolCall.toolName],
                output: toolApproval.error,
                errorMode: "text"
              })
            });
          }
          for (const toolApproval of deniedToolApprovals) {
            toolContent.push({
              type: "tool-result",
              toolCallId: toolApproval.toolCall.toolCallId,
              toolName: toolApproval.toolCall.toolName,
              output: {
                type: "execution-denied",
                reason: toolApproval.approvalResponse.reason,
                // For provider-executed tools, include approvalId so provider can correlate
                ...toolApproval.toolCall.providerExecuted && {
                  providerOptions: {
                    openai: {
                      approvalId: toolApproval.approvalResponse.approvalId
                    }
                  }
                }
              }
            });
          }
          responseMessages.push({
            role: "tool",
            content: toolContent
          });
        }
        const callSettings2 = prepareCallSettings(settings);
        let currentModelResponse;
        let clientToolCalls = [];
        let clientToolOutputs = [];
        const steps = [];
        const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
        do {
          if (steps.length > 0) {
            mergedAbortSignal == null ? void 0 : mergedAbortSignal.throwIfAborted();
          }
          const stepTimeoutId = setAbortTimeout({
            abortController: stepAbortController,
            label: "Step",
            timeoutMs: stepTimeoutMs
          });
          try {
            const stepInputMessages = [...initialMessages, ...responseMessages];
            const prepareStepResult = await (prepareStep == null ? void 0 : prepareStep({
              model,
              steps,
              stepNumber: steps.length,
              messages: stepInputMessages,
              experimental_context
            }));
            const stepModel = resolveLanguageModel(
              (_a232 = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _a232 : model
            );
            const stepModelInfo = {
              provider: stepModel.provider,
              modelId: stepModel.modelId
            };
            const promptMessages = await convertToLanguageModelPrompt({
              prompt: {
                system: (_b17 = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _b17 : initialPrompt.system,
                messages: (_c = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _c : stepInputMessages
              },
              supportedUrls: await stepModel.supportedUrls,
              download: download2,
              abortSignal: mergedAbortSignal
            });
            experimental_context = (_d = prepareStepResult == null ? void 0 : prepareStepResult.experimental_context) != null ? _d : experimental_context;
            const stepActiveTools = (_e = prepareStepResult == null ? void 0 : prepareStepResult.activeTools) != null ? _e : activeTools;
            const stepToolSet = filterActiveTools({
              tools,
              activeTools: stepActiveTools
            });
            const { toolChoice: stepToolChoice, tools: stepTools } = await prepareToolsAndToolChoice({
              tools,
              toolChoice: (_f = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _f : toolChoice,
              activeTools: stepActiveTools
            });
            const stepMessages = (_g = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _g : stepInputMessages;
            const stepSystem = (_h = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _h : initialPrompt.system;
            const stepProviderOptions = mergeObjects(
              providerOptions,
              prepareStepResult == null ? void 0 : prepareStepResult.providerOptions
            );
            const stepCallSettings = prepareStepCallSettings({
              callSettings: callSettings2,
              stepSettings: prepareStepResult
            });
            await notify({
              event: {
                stepNumber: steps.length,
                model: stepModelInfo,
                system: stepSystem,
                messages: stepMessages,
                tools,
                toolChoice: stepToolChoice,
                activeTools: stepActiveTools,
                steps: [...steps],
                providerOptions: stepProviderOptions,
                timeout,
                headers,
                stopWhen,
                output,
                abortSignal,
                include,
                functionId: telemetry == null ? void 0 : telemetry.functionId,
                metadata: telemetry == null ? void 0 : telemetry.metadata,
                experimental_context
              },
              callbacks: [
                onStepStart,
                globalTelemetry.onStepStart
              ]
            });
            currentModelResponse = await retry(
              () => recordSpan({
                name: "ai.generateText.doGenerate",
                attributes: selectTelemetryAttributes({
                  telemetry,
                  attributes: {
                    ...assembleOperationName({
                      operationId: "ai.generateText.doGenerate",
                      telemetry
                    }),
                    ...baseTelemetryAttributes,
                    // model:
                    "ai.model.provider": stepModel.provider,
                    "ai.model.id": stepModel.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: /* @__PURE__ */ __name(() => stringifyForTelemetry(promptMessages), "input")
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: /* @__PURE__ */ __name(() => stepTools == null ? void 0 : stepTools.map((tool2) => JSON.stringify(tool2)), "input")
                    },
                    "ai.prompt.toolChoice": {
                      input: /* @__PURE__ */ __name(() => stepToolChoice != null ? JSON.stringify(stepToolChoice) : void 0, "input")
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": stepModel.provider,
                    "gen_ai.request.model": stepModel.modelId,
                    "gen_ai.request.frequency_penalty": stepCallSettings.frequencyPenalty,
                    "gen_ai.request.max_tokens": stepCallSettings.maxOutputTokens,
                    "gen_ai.request.presence_penalty": stepCallSettings.presencePenalty,
                    "gen_ai.request.stop_sequences": stepCallSettings.stopSequences,
                    "gen_ai.request.temperature": stepCallSettings.temperature,
                    "gen_ai.request.top_k": stepCallSettings.topK,
                    "gen_ai.request.top_p": stepCallSettings.topP
                  }
                }),
                tracer,
                fn: /* @__PURE__ */ __name(async (span2) => {
                  var _a24, _b23, _c2, _d2, _e2, _f2, _g2, _h2;
                  const result = await stepModel.doGenerate({
                    ...stepCallSettings,
                    tools: stepTools,
                    toolChoice: stepToolChoice,
                    responseFormat: await (output == null ? void 0 : output.responseFormat),
                    prompt: promptMessages,
                    providerOptions: stepProviderOptions,
                    abortSignal: mergedAbortSignal,
                    headers: headersWithUserAgent
                  });
                  const responseData = {
                    id: (_b23 = (_a24 = result.response) == null ? void 0 : _a24.id) != null ? _b23 : generateId2(),
                    timestamp: (_d2 = (_c2 = result.response) == null ? void 0 : _c2.timestamp) != null ? _d2 : /* @__PURE__ */ new Date(),
                    modelId: (_f2 = (_e2 = result.response) == null ? void 0 : _e2.modelId) != null ? _f2 : stepModel.modelId,
                    headers: (_g2 = result.response) == null ? void 0 : _g2.headers,
                    body: (_h2 = result.response) == null ? void 0 : _h2.body
                  };
                  const usage = asLanguageModelUsage(result.usage);
                  span2.setAttributes(
                    await selectTelemetryAttributes({
                      telemetry,
                      attributes: {
                        "ai.response.finishReason": result.finishReason.unified,
                        "ai.response.text": {
                          output: /* @__PURE__ */ __name(() => extractTextContent(result.content), "output")
                        },
                        "ai.response.reasoning": {
                          output: /* @__PURE__ */ __name(() => extractReasoningContent(result.content), "output")
                        },
                        "ai.response.toolCalls": {
                          output: /* @__PURE__ */ __name(() => {
                            const toolCalls = asToolCalls(result.content);
                            return toolCalls == null ? void 0 : JSON.stringify(toolCalls);
                          }, "output")
                        },
                        "ai.response.id": responseData.id,
                        "ai.response.model": responseData.modelId,
                        "ai.response.timestamp": responseData.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          result.providerMetadata
                        ),
                        "ai.usage.inputTokens": result.usage.inputTokens.total,
                        "ai.usage.inputTokenDetails.noCacheTokens": result.usage.inputTokens.noCache,
                        "ai.usage.inputTokenDetails.cacheReadTokens": result.usage.inputTokens.cacheRead,
                        "ai.usage.inputTokenDetails.cacheWriteTokens": result.usage.inputTokens.cacheWrite,
                        "ai.usage.outputTokens": result.usage.outputTokens.total,
                        "ai.usage.outputTokenDetails.textTokens": result.usage.outputTokens.text,
                        "ai.usage.outputTokenDetails.reasoningTokens": result.usage.outputTokens.reasoning,
                        "ai.usage.totalTokens": usage.totalTokens,
                        "ai.usage.reasoningTokens": result.usage.outputTokens.reasoning,
                        "ai.usage.cachedInputTokens": result.usage.inputTokens.cacheRead,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [
                          result.finishReason.unified
                        ],
                        "gen_ai.response.id": responseData.id,
                        "gen_ai.response.model": responseData.modelId,
                        "gen_ai.usage.input_tokens": result.usage.inputTokens.total,
                        "gen_ai.usage.output_tokens": result.usage.outputTokens.total
                      }
                    })
                  );
                  return { ...result, response: responseData };
                }, "fn")
              })
            );
            const stepToolCalls = await Promise.all(
              currentModelResponse.content.filter(
                (part) => part.type === "tool-call"
              ).map(
                (toolCall) => parseToolCall({
                  toolCall,
                  tools: stepToolSet,
                  repairToolCall,
                  system,
                  messages: stepInputMessages
                })
              )
            );
            const enforcedToolChoice = (stepToolChoice == null ? void 0 : stepToolChoice.type) === "required" || (stepToolChoice == null ? void 0 : stepToolChoice.type) === "tool" ? stepToolChoice : void 0;
            if (enforcedToolChoice != null && !stepToolCalls.some(
              (toolCall) => enforcedToolChoice.type === "required" || toolCall.toolName === enforcedToolChoice.toolName
            )) {
              throw new ToolChoiceViolationError({
                toolChoice: enforcedToolChoice,
                finishReason: currentModelResponse.finishReason.unified,
                provider: stepModel.provider,
                modelId: stepModel.modelId,
                content: currentModelResponse.content
              });
            }
            const toolApprovalRequests = {};
            for (const toolCall of stepToolCalls) {
              if (toolCall.invalid) {
                continue;
              }
              const tool2 = stepToolSet == null ? void 0 : stepToolSet[toolCall.toolName];
              if (tool2 == null) {
                continue;
              }
              if (tool2.onInputStart != null) {
                await tool2.onInputStart({
                  toolCallId: toolCall.toolCallId,
                  messages: stepInputMessages,
                  abortSignal: mergedAbortSignal,
                  experimental_context
                });
              }
              if (tool2.onInputAvailable != null) {
                await tool2.onInputAvailable({
                  input: toolCall.input,
                  toolCallId: toolCall.toolCallId,
                  messages: stepInputMessages,
                  abortSignal: mergedAbortSignal,
                  experimental_context
                });
              }
              if (await isApprovalNeeded({
                tool: tool2,
                toolCall,
                messages: stepInputMessages,
                experimental_context
              })) {
                const approvalId = generateId2();
                const signature = await maybeSignApproval({
                  secret: experimental_toolApprovalSecret,
                  approvalId,
                  toolCallId: toolCall.toolCallId,
                  toolName: toolCall.toolName,
                  input: toolCall.input
                });
                toolApprovalRequests[toolCall.toolCallId] = {
                  type: "tool-approval-request",
                  approvalId,
                  toolCall,
                  ...signature != null ? { signature } : {}
                };
              }
            }
            const invalidToolCalls = stepToolCalls.filter(
              (toolCall) => toolCall.invalid && toolCall.dynamic && !toolCall.providerExecuted
            );
            clientToolOutputs = [];
            for (const toolCall of invalidToolCalls) {
              clientToolOutputs.push({
                type: "tool-error",
                toolCallId: toolCall.toolCallId,
                toolName: toolCall.toolName,
                input: toolCall.input,
                error: getErrorMessage2(toolCall.error),
                dynamic: true
              });
            }
            clientToolCalls = stepToolCalls.filter(
              (toolCall) => !toolCall.providerExecuted
            );
            if (stepToolSet != null && isToolExecutionAllowedFinishReason(
              currentModelResponse.finishReason.unified
            )) {
              clientToolOutputs.push(
                ...await executeTools({
                  toolCalls: clientToolCalls.filter(
                    (toolCall) => !toolCall.invalid && toolApprovalRequests[toolCall.toolCallId] == null
                  ),
                  tools: stepToolSet,
                  tracer,
                  telemetry,
                  messages: stepInputMessages,
                  abortSignal: mergedAbortSignal,
                  experimental_context,
                  stepNumber: steps.length,
                  model: stepModelInfo,
                  onToolCallStart: [
                    onToolCallStart,
                    globalTelemetry.onToolCallStart
                  ],
                  onToolCallFinish: [
                    onToolCallFinish,
                    globalTelemetry.onToolCallFinish
                  ]
                })
              );
            }
            for (const toolCall of stepToolCalls) {
              if (!toolCall.providerExecuted)
                continue;
              const tool2 = stepToolSet == null ? void 0 : stepToolSet[toolCall.toolName];
              if ((tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults) {
                const hasResultInResponse = currentModelResponse.content.some(
                  (part) => part.type === "tool-result" && part.toolCallId === toolCall.toolCallId
                );
                if (!hasResultInResponse) {
                  pendingDeferredToolCalls.set(toolCall.toolCallId, {
                    toolName: toolCall.toolName
                  });
                }
              }
            }
            for (const part of currentModelResponse.content) {
              if (part.type === "tool-result") {
                pendingDeferredToolCalls.delete(part.toolCallId);
              }
            }
            const stepContent = asContent({
              content: currentModelResponse.content,
              toolCalls: stepToolCalls,
              toolOutputs: clientToolOutputs,
              toolApprovalRequests: Object.values(toolApprovalRequests),
              tools: stepToolSet
            });
            responseMessages.push(
              ...await toResponseMessages({
                content: stepContent,
                tools: stepToolSet
              })
            );
            const stepRequest = ((_i = include == null ? void 0 : include.requestBody) != null ? _i : true) ? (_j = currentModelResponse.request) != null ? _j : {} : { ...currentModelResponse.request, body: void 0 };
            const stepResponse = {
              ...currentModelResponse.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(responseMessages),
              // Conditionally include response body:
              body: ((_k = include == null ? void 0 : include.responseBody) != null ? _k : true) ? (_l = currentModelResponse.response) == null ? void 0 : _l.body : void 0
            };
            const stepNumber = steps.length;
            const currentStepResult = new DefaultStepResult({
              stepNumber,
              model: stepModelInfo,
              functionId: telemetry == null ? void 0 : telemetry.functionId,
              metadata: telemetry == null ? void 0 : telemetry.metadata,
              experimental_context,
              content: stepContent,
              finishReason: currentModelResponse.finishReason.unified,
              rawFinishReason: currentModelResponse.finishReason.raw,
              usage: asLanguageModelUsage(currentModelResponse.usage),
              warnings: currentModelResponse.warnings,
              providerMetadata: currentModelResponse.providerMetadata,
              request: stepRequest,
              response: stepResponse
            });
            logWarnings({
              warnings: (_m = currentModelResponse.warnings) != null ? _m : [],
              provider: stepModelInfo.provider,
              model: stepModelInfo.modelId
            });
            steps.push(currentStepResult);
            await notify({
              event: currentStepResult,
              callbacks: [onStepFinish, globalTelemetry.onStepFinish]
            });
          } finally {
            if (stepTimeoutId != null) {
              clearTimeout(stepTimeoutId);
            }
          }
        } while (
          // Continue if:
          // 1. There are client tool calls that have all been executed, OR
          // 2. There are pending deferred results from provider-executed tools
          (clientToolCalls.length > 0 && clientToolOutputs.length === clientToolCalls.length || pendingDeferredToolCalls.size > 0) && // continue until a stop condition is met:
          !await isStopConditionMet({ stopConditions, steps })
        );
        span.setAttributes(
          await selectTelemetryAttributes({
            telemetry,
            attributes: {
              "ai.response.finishReason": currentModelResponse.finishReason.unified,
              "ai.response.text": {
                output: /* @__PURE__ */ __name(() => extractTextContent(currentModelResponse.content), "output")
              },
              "ai.response.reasoning": {
                output: /* @__PURE__ */ __name(() => extractReasoningContent(currentModelResponse.content), "output")
              },
              "ai.response.toolCalls": {
                output: /* @__PURE__ */ __name(() => {
                  const toolCalls = asToolCalls(currentModelResponse.content);
                  return toolCalls == null ? void 0 : JSON.stringify(toolCalls);
                }, "output")
              },
              "ai.response.providerMetadata": JSON.stringify(
                currentModelResponse.providerMetadata
              )
            }
          })
        );
        const lastStep = steps[steps.length - 1];
        const totalUsage = steps.reduce(
          (totalUsage2, step) => {
            return addLanguageModelUsage(totalUsage2, step.usage);
          },
          {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0,
            reasoningTokens: void 0,
            cachedInputTokens: void 0
          }
        );
        span.setAttributes(
          await selectTelemetryAttributes({
            telemetry,
            attributes: {
              "ai.usage.inputTokens": totalUsage.inputTokens,
              "ai.usage.inputTokenDetails.noCacheTokens": (_n = totalUsage.inputTokenDetails) == null ? void 0 : _n.noCacheTokens,
              "ai.usage.inputTokenDetails.cacheReadTokens": (_o = totalUsage.inputTokenDetails) == null ? void 0 : _o.cacheReadTokens,
              "ai.usage.inputTokenDetails.cacheWriteTokens": (_p = totalUsage.inputTokenDetails) == null ? void 0 : _p.cacheWriteTokens,
              "ai.usage.outputTokens": totalUsage.outputTokens,
              "ai.usage.outputTokenDetails.textTokens": (_q = totalUsage.outputTokenDetails) == null ? void 0 : _q.textTokens,
              "ai.usage.outputTokenDetails.reasoningTokens": (_r = totalUsage.outputTokenDetails) == null ? void 0 : _r.reasoningTokens,
              "ai.usage.totalTokens": totalUsage.totalTokens,
              "ai.usage.reasoningTokens": (_s = totalUsage.outputTokenDetails) == null ? void 0 : _s.reasoningTokens,
              "ai.usage.cachedInputTokens": (_t = totalUsage.inputTokenDetails) == null ? void 0 : _t.cacheReadTokens
            }
          })
        );
        await notify({
          event: {
            stepNumber: lastStep.stepNumber,
            model: lastStep.model,
            functionId: lastStep.functionId,
            metadata: lastStep.metadata,
            experimental_context: lastStep.experimental_context,
            finishReason: lastStep.finishReason,
            rawFinishReason: lastStep.rawFinishReason,
            usage: lastStep.usage,
            content: lastStep.content,
            text: lastStep.text,
            reasoningText: lastStep.reasoningText,
            reasoning: lastStep.reasoning,
            files: lastStep.files,
            sources: lastStep.sources,
            toolCalls: lastStep.toolCalls,
            staticToolCalls: lastStep.staticToolCalls,
            dynamicToolCalls: lastStep.dynamicToolCalls,
            toolResults: lastStep.toolResults,
            staticToolResults: lastStep.staticToolResults,
            dynamicToolResults: lastStep.dynamicToolResults,
            request: lastStep.request,
            response: lastStep.response,
            warnings: lastStep.warnings,
            providerMetadata: lastStep.providerMetadata,
            steps,
            totalUsage
          },
          callbacks: [
            onFinish,
            globalTelemetry.onFinish
          ]
        });
        let resolvedOutput;
        if (lastStep.finishReason === "stop" || lastStep.finishReason !== "tool-calls" && lastStep.text.length > 0) {
          const outputSpecification = output != null ? output : text();
          resolvedOutput = await outputSpecification.parseCompleteOutput(
            { text: lastStep.text },
            {
              response: lastStep.response,
              usage: lastStep.usage,
              finishReason: lastStep.finishReason
            }
          );
        }
        return new DefaultGenerateTextResult({
          steps,
          totalUsage,
          output: resolvedOutput
        });
      }, "fn")
    });
  } catch (error) {
    throw wrapGatewayError(error);
  }
}
__name(generateText, "generateText");
async function executeTools({
  toolCalls,
  tools,
  tracer,
  telemetry,
  messages,
  abortSignal,
  experimental_context,
  stepNumber,
  model,
  onToolCallStart,
  onToolCallFinish
}) {
  const toolOutputs = await Promise.all(
    toolCalls.map(
      async (toolCall) => executeToolCall({
        toolCall,
        tools,
        tracer,
        telemetry,
        messages,
        abortSignal,
        experimental_context,
        stepNumber,
        model,
        onToolCallStart,
        onToolCallFinish
      })
    )
  );
  return toolOutputs.filter(
    (output) => output != null
  );
}
__name(executeTools, "executeTools");
var DefaultGenerateTextResult = class {
  static {
    __name(this, "DefaultGenerateTextResult");
  }
  constructor(options) {
    this.steps = options.steps;
    this._output = options.output;
    this.totalUsage = options.totalUsage;
  }
  get finalStep() {
    return this.steps[this.steps.length - 1];
  }
  get content() {
    return this.finalStep.content;
  }
  get text() {
    return this.finalStep.text;
  }
  get files() {
    return this.finalStep.files;
  }
  get reasoningText() {
    return this.finalStep.reasoningText;
  }
  get reasoning() {
    return this.finalStep.reasoning;
  }
  get toolCalls() {
    return this.finalStep.toolCalls;
  }
  get staticToolCalls() {
    return this.finalStep.staticToolCalls;
  }
  get dynamicToolCalls() {
    return this.finalStep.dynamicToolCalls;
  }
  get toolResults() {
    return this.finalStep.toolResults;
  }
  get staticToolResults() {
    return this.finalStep.staticToolResults;
  }
  get dynamicToolResults() {
    return this.finalStep.dynamicToolResults;
  }
  get sources() {
    return this.finalStep.sources;
  }
  get finishReason() {
    return this.finalStep.finishReason;
  }
  get rawFinishReason() {
    return this.finalStep.rawFinishReason;
  }
  get warnings() {
    return this.finalStep.warnings;
  }
  get providerMetadata() {
    return this.finalStep.providerMetadata;
  }
  get response() {
    return this.finalStep.response;
  }
  get request() {
    return this.finalStep.request;
  }
  get usage() {
    return this.finalStep.usage;
  }
  get experimental_output() {
    return this.output;
  }
  get output() {
    if (this._output == null) {
      throw new NoOutputGeneratedError();
    }
    return this._output;
  }
};
function asToolCalls(content) {
  const parts = content.filter(
    (part) => part.type === "tool-call"
  );
  if (parts.length === 0) {
    return void 0;
  }
  return parts.map((toolCall) => ({
    toolCallId: toolCall.toolCallId,
    toolName: toolCall.toolName,
    input: toolCall.input
  }));
}
__name(asToolCalls, "asToolCalls");
function asContent({
  content,
  toolCalls,
  toolOutputs,
  toolApprovalRequests,
  tools
}) {
  const contentParts = [];
  for (const part of content) {
    switch (part.type) {
      case "text":
      case "reasoning":
      case "source":
        contentParts.push(part);
        break;
      case "file": {
        contentParts.push({
          type: "file",
          file: new DefaultGeneratedFile(part),
          ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
        });
        break;
      }
      case "tool-call": {
        contentParts.push(
          toolCalls.find((toolCall) => toolCall.toolCallId === part.toolCallId)
        );
        break;
      }
      case "tool-result": {
        const toolCall = toolCalls.find(
          (toolCall2) => toolCall2.toolCallId === part.toolCallId
        );
        if (toolCall == null) {
          const tool2 = tools == null ? void 0 : tools[part.toolName];
          const supportsDeferredResults = (tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults;
          if (!supportsDeferredResults) {
            throw new Error(`Tool call ${part.toolCallId} not found.`);
          }
          if (part.isError) {
            contentParts.push({
              type: "tool-error",
              toolCallId: part.toolCallId,
              toolName: part.toolName,
              input: void 0,
              error: part.result,
              providerExecuted: true,
              dynamic: part.dynamic,
              ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
              ...(tool2 == null ? void 0 : tool2.metadata) != null ? { toolMetadata: tool2.metadata } : {}
            });
          } else {
            contentParts.push({
              type: "tool-result",
              toolCallId: part.toolCallId,
              toolName: part.toolName,
              input: void 0,
              output: part.result,
              providerExecuted: true,
              dynamic: part.dynamic,
              ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
              ...(tool2 == null ? void 0 : tool2.metadata) != null ? { toolMetadata: tool2.metadata } : {}
            });
          }
          break;
        }
        if (part.isError) {
          contentParts.push({
            type: "tool-error",
            toolCallId: part.toolCallId,
            toolName: part.toolName,
            input: toolCall.input,
            error: part.result,
            providerExecuted: true,
            dynamic: toolCall.dynamic,
            ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
            ...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
          });
        } else {
          contentParts.push({
            type: "tool-result",
            toolCallId: part.toolCallId,
            toolName: part.toolName,
            input: toolCall.input,
            output: part.result,
            providerExecuted: true,
            dynamic: toolCall.dynamic,
            ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
            ...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
          });
        }
        break;
      }
      case "tool-approval-request": {
        const toolCall = toolCalls.find(
          (toolCall2) => toolCall2.toolCallId === part.toolCallId
        );
        if (toolCall == null) {
          throw new ToolCallNotFoundForApprovalError({
            toolCallId: part.toolCallId,
            approvalId: part.approvalId
          });
        }
        contentParts.push({
          type: "tool-approval-request",
          approvalId: part.approvalId,
          toolCall
        });
        break;
      }
    }
  }
  return [...contentParts, ...toolOutputs, ...toolApprovalRequests];
}
__name(asContent, "asContent");
var JsonToSseTransformStream = class extends TransformStream {
  static {
    __name(this, "JsonToSseTransformStream");
  }
  constructor() {
    super({
      transform(part, controller) {
        controller.enqueue(`data: ${JSON.stringify(part)}

`);
      },
      flush(controller) {
        controller.enqueue("data: [DONE]\n\n");
      }
    });
  }
};
var toolMetadataSchema = external_exports.record(
  external_exports.string(),
  jsonValueSchema.optional()
);
var uiMessageChunkSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      external_exports.looseObject({
        type: external_exports.literal("text-start"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("text-delta"),
        id: external_exports.string(),
        delta: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("text-end"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("error"),
        errorText: external_exports.string()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-input-start"),
        toolCallId: external_exports.string(),
        toolName: external_exports.string(),
        providerExecuted: external_exports.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        toolMetadata: toolMetadataSchema.optional(),
        dynamic: external_exports.boolean().optional(),
        title: external_exports.string().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-input-delta"),
        toolCallId: external_exports.string(),
        inputTextDelta: external_exports.string()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-input-available"),
        toolCallId: external_exports.string(),
        toolName: external_exports.string(),
        input: external_exports.unknown(),
        providerExecuted: external_exports.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        toolMetadata: toolMetadataSchema.optional(),
        dynamic: external_exports.boolean().optional(),
        title: external_exports.string().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-input-error"),
        toolCallId: external_exports.string(),
        toolName: external_exports.string(),
        input: external_exports.unknown(),
        providerExecuted: external_exports.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        toolMetadata: toolMetadataSchema.optional(),
        dynamic: external_exports.boolean().optional(),
        errorText: external_exports.string(),
        title: external_exports.string().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-approval-request"),
        approvalId: external_exports.string(),
        toolCallId: external_exports.string(),
        approvalDescriptor: external_exports.unknown().optional(),
        inputSchemaInput: external_exports.unknown().optional(),
        signature: external_exports.string().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-output-available"),
        toolCallId: external_exports.string(),
        output: external_exports.unknown(),
        providerExecuted: external_exports.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        toolMetadata: toolMetadataSchema.optional(),
        dynamic: external_exports.boolean().optional(),
        preliminary: external_exports.boolean().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-output-error"),
        toolCallId: external_exports.string(),
        errorText: external_exports.string(),
        providerExecuted: external_exports.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        toolMetadata: toolMetadataSchema.optional(),
        dynamic: external_exports.boolean().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("tool-output-denied"),
        toolCallId: external_exports.string()
      }),
      external_exports.looseObject({
        type: external_exports.literal("reasoning-start"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("reasoning-delta"),
        id: external_exports.string(),
        delta: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("reasoning-end"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("source-url"),
        sourceId: external_exports.string(),
        url: external_exports.string(),
        title: external_exports.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("source-document"),
        sourceId: external_exports.string(),
        mediaType: external_exports.string(),
        title: external_exports.string(),
        filename: external_exports.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("file"),
        url: external_exports.string(),
        mediaType: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.looseObject({
        type: external_exports.custom(
          (value) => typeof value === "string" && value.startsWith("data-"),
          { message: 'Type must start with "data-"' }
        ),
        id: external_exports.string().optional(),
        data: external_exports.unknown(),
        transient: external_exports.boolean().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("start-step")
      }),
      external_exports.looseObject({
        type: external_exports.literal("finish-step")
      }),
      external_exports.looseObject({
        type: external_exports.literal("start"),
        messageId: external_exports.string().optional(),
        messageMetadata: external_exports.unknown().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("finish"),
        finishReason: external_exports.enum([
          "stop",
          "length",
          "content-filter",
          "tool-calls",
          "error",
          "other"
        ]).optional(),
        messageMetadata: external_exports.unknown().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("abort"),
        reason: external_exports.string().optional()
      }),
      external_exports.looseObject({
        type: external_exports.literal("message-metadata"),
        messageMetadata: external_exports.unknown()
      })
    ])
  )
);
var originalGenerateId2 = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
var toolMetadataSchema2 = external_exports.record(
  external_exports.string(),
  jsonValueSchema.optional()
);
var uiMessagesSchema = lazySchema(() => {
  const approvalRequestedSchema = external_exports.object({
    id: external_exports.string(),
    approved: external_exports.never().optional(),
    descriptor: external_exports.unknown().optional(),
    reason: external_exports.never().optional(),
    signature: external_exports.string().optional(),
    inputSchemaInput: external_exports.unknown().optional()
  });
  const approvalRespondedSchema = approvalRequestedSchema.extend({
    approved: external_exports.boolean(),
    reason: external_exports.string().optional()
  });
  const approvalGrantedSchema = approvalRespondedSchema.extend({
    approved: external_exports.literal(true)
  });
  const approvalDeniedSchema = approvalRespondedSchema.extend({
    approved: external_exports.literal(false)
  });
  return zodSchema(
    external_exports.array(
      external_exports.object({
        id: external_exports.string(),
        role: external_exports.enum(["system", "user", "assistant"]),
        metadata: external_exports.unknown().optional(),
        parts: external_exports.array(
          external_exports.union([
            external_exports.object({
              type: external_exports.literal("text"),
              text: external_exports.string(),
              state: external_exports.enum(["streaming", "done"]).optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("reasoning"),
              id: external_exports.string().optional(),
              text: external_exports.string(),
              state: external_exports.enum(["streaming", "done"]).optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("source-url"),
              sourceId: external_exports.string(),
              url: external_exports.string(),
              title: external_exports.string().optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("source-document"),
              sourceId: external_exports.string(),
              mediaType: external_exports.string(),
              title: external_exports.string(),
              filename: external_exports.string().optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("file"),
              mediaType: external_exports.string(),
              filename: external_exports.string().optional(),
              url: external_exports.string(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("step-start")
            }),
            external_exports.object({
              type: external_exports.string().startsWith("data-"),
              id: external_exports.string().optional(),
              data: external_exports.unknown()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              dynamic: external_exports.literal(false).optional(),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("input-streaming"),
              input: external_exports.unknown().optional(),
              rawInput: external_exports.string().optional(),
              providerExecuted: external_exports.boolean().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              dynamic: external_exports.literal(false).optional(),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("input-available"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              dynamic: external_exports.literal(false).optional(),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("approval-requested"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalRequestedSchema
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              dynamic: external_exports.literal(false).optional(),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("approval-responded"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalRespondedSchema
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              dynamic: external_exports.literal(false).optional(),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("output-available"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.unknown(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              preliminary: external_exports.boolean().optional(),
              approval: approvalGrantedSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              dynamic: external_exports.literal(false).optional(),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("output-error"),
              input: external_exports.unknown().optional(),
              rawInput: external_exports.unknown().optional(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.string(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalGrantedSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              dynamic: external_exports.literal(false).optional(),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("output-denied"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalDeniedSchema
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("input-streaming"),
              providerExecuted: external_exports.boolean().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              input: external_exports.unknown().optional(),
              rawInput: external_exports.string().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("input-available"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("approval-requested"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalRequestedSchema
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("approval-responded"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalRespondedSchema
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("output-available"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown(),
              output: external_exports.unknown(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              preliminary: external_exports.boolean().optional(),
              approval: approvalGrantedSchema.optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("output-error"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown().optional(),
              rawInput: external_exports.unknown().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.string(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalGrantedSchema.optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              toolMetadata: toolMetadataSchema2.optional(),
              state: external_exports.literal("output-denied"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: approvalDeniedSchema
            })
          ])
        )
      }).superRefine((message, context2) => {
        if (message.role !== "assistant" && message.parts.length === 0) {
          context2.addIssue({
            origin: "array",
            code: "too_small",
            minimum: 1,
            inclusive: true,
            input: message.parts,
            path: ["parts"],
            message: "Message must contain at least one part"
          });
        }
      })
    ).nonempty("Messages array must not be empty")
  );
});
var textEncoder = new TextEncoder();
var originalGenerateId3 = createIdGenerator({ prefix: "aiobj", size: 24 });
function createDownload(options) {
  return ({ url, abortSignal }) => download({ url, maxBytes: options == null ? void 0 : options.maxBytes, abortSignal });
}
__name(createDownload, "createDownload");
var { atob: atob2 } = globalThis;
var originalGenerateId4 = createIdGenerator({ prefix: "aiobj", size: 24 });
var defaultDownload = createDownload();
var name222 = "AI_NoSuchProviderError";
var marker222 = `vercel.ai.error.${name222}`;
var symbol222 = Symbol.for(marker222);
var _a222;
_a222 = symbol222;
var defaultDownload2 = createDownload();

export {
  tool,
  createGoogleGenerativeAI,
  generateText
};
//# sourceMappingURL=chunk-KMUOWX6J.mjs.map
