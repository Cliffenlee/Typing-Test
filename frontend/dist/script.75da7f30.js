// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"script.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var regeneratorRuntime = require("regenerator-runtime");

AOS.init();
var paragraph_api = "https://litipsum.com/api/1/json";
var paragraph_api_time = "https://litipsum.com/api/7";
var started = false;
var completed = false;
var inputItem = document.getElementById("inputArea");
var ctrl = false;
var startingTime;
var currentTime;
var countId;
var speed;
var accuracy;
var input;
var incorrect = 0;
var incorrectChain = 0;
var timeMode = false;
var wordMode = false;
var theme = "light";
var timer = 60;
var scrollOffSet = 0;
var prevOffSet = 0;
var line = 0;
var sound = "typewriter";
var modalSuccess = document.getElementById("modalSuccess");
var modalFailed = document.getElementById("modalFailed");
var modalSuccessDark = document.getElementById("modalSuccessDark");
var modalFailedDark = document.getElementById("modalFailedDark");
var spanSuccess = document.getElementsByClassName("close")[0];
var spanFailed = document.getElementsByClassName("close")[1];
var spanSuccessDark = document.getElementsByClassName("close")[2];
var spanFailedDark = document.getElementsByClassName("close")[3];
var modalHome = document.getElementsByClassName("button1");
var modalTryAgain = document.getElementsByClassName("button2");
var loaderWrapperWord = document.getElementById("loaderWrapperWord");
var loaderWrapperTime = document.getElementById("loaderWrapperTime");
var timeAxis = [];
var wpmAxis = [];
var accuracyAxis = [];
var statsChart = "";
var chart = document.getElementById("chart").getContext('2d');
var chartDark = document.getElementById("chartDark").getContext('2d');
var previousPointer = 0;
var currentPointer = 0;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onclick = function (event) {
  inputItem.focus();
};

var _iterator = _createForOfIteratorHelper(modalHome),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var button = _step.value;
    button.addEventListener("click", function () {
      home();
      modalExit();
      started = false;
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(modalTryAgain),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _button = _step2.value;

    _button.addEventListener("click", function () {
      if (wordMode) {
        reset();
        resetWord();
        inputItem.focus();
        timeMode = false;
        wordMode = true;
      } else if (timeMode) {
        reset();
        resetTime();
        inputItem.focus();
        timeMode = true;
        wordMode = false;
      }

      started = false;
      modalExit();
    });
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

document.getElementById("slideOut").addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "250px";
});
document.getElementsByClassName("closebtn")[0].addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "0";
});
document.getElementsByClassName("buttonTheme")[0].addEventListener("click", function () {
  if (theme == "light") {
    document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(0, 0, 0, 0.92)";
    document.getElementById("logo").style.display = "none";
    document.getElementById("logoDark").style.display = "";
    var navLinks = document.getElementsByClassName("buttonMode");

    var _iterator3 = _createForOfIteratorHelper(navLinks),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var links = _step3.value;
        links.style.color = "#F5F5F7";
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    document.getElementsByClassName("buttonTheme")[0].style.borderColor = "#F5F5F7";
    document.getElementsByClassName("buttonTheme")[0].style.color = "#F5F5F7";
    document.getElementsByClassName("ml11")[0].style.color = "#F5F5F7";
    document.getElementById("main").style.backgroundColor = "#12161B";
    document.getElementById("subtitle").style.color = "#F5F5F7";
    document.getElementById("huskey").style.color = "#F5F5F7";
    document.getElementById("flex-options").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.getElementById("subtitleTime").style.color = "#fefefea4";
    document.getElementById("subtitleWord").style.color = "#fefefea4";
    document.getElementById("wordMode").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.getElementById("timeMode").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.getElementById("buttonTime").style.backgroundColor = "rgba(255,255,255,0.5)";
    document.getElementById("buttonWord").style.backgroundColor = "rgba(255,255,255,0.5)";
    document.getElementById("buttonTime").style.color = "rgba(0,0,0,0.7)";
    document.getElementById("buttonWord").style.color = "rgba(0,0,0,0.7)";
    document.getElementsByClassName("loader")[0].style.borderTopColor = "#4b4b4b";
    document.getElementsByClassName("loader")[1].style.borderTopColor = "#4b4b4b";
    document.getElementsByClassName("gameTitle")[0].style.color = "#cccccc";
    document.getElementById("timerTime").style.color = "#cccccc";
    document.getElementById("secondsTime").style.color = "#cccccc";
    document.getElementById("timer").style.color = "#cccccc";
    document.getElementById("seconds").style.color = "#cccccc";
    document.getElementById("miniFlex").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("time").style.color = "#cccccc";
    document.getElementById("wpm").style.color = "#cccccc";
    document.getElementById("percent").style.color = "#cccccc";
    document.getElementById("speed").style.color = "#cccccc";
    document.getElementById("speed").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("accuracy").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("accuracy").style.color = "#cccccc";
    document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("passage").style.color = "#A0A0A0";
    document.getElementsByClassName("gameTitle")[1].style.color = "#cccccc";
    document.getElementById("miniFlexTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("timeTime").style.color = "#cccccc";
    document.getElementById("wpmTime").style.color = "#cccccc";
    document.getElementById("percentTime").style.color = "#cccccc";
    document.getElementById("speedTime").style.color = "#cccccc";
    document.getElementById("speedTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("accuracyTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("accuracyTime").style.color = "#cccccc";
    document.getElementById("bodyTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    var spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime");

    var _iterator4 = _createForOfIteratorHelper(spanList),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var item = _step4.value;

        if (item.classList.contains("correct")) {
          item.classList.remove("correct");
          item.classList.add("correctDark");
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    document.getElementById("passageTime").style.color = "#A0A0A0";
    document.getElementById("darkIcon").style.display = "none";
    document.getElementsByTagName("html")[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    theme = "dark";
  } else if (theme == "dark") {
    document.getElementsByTagName("header")[0].style.backgroundColor = "#F4F5F4";
    document.getElementById("logo").style.display = "";
    document.getElementById("logoDark").style.display = "none";

    var _navLinks = document.getElementsByClassName("buttonMode");

    var _iterator5 = _createForOfIteratorHelper(_navLinks),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _links = _step5.value;
        _links.style.color = "#3C64B1";
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    document.getElementsByClassName("buttonTheme")[0].style.borderColor = "#3C64B1";
    document.getElementsByClassName("buttonTheme")[0].style.color = "#3C64B1";
    document.getElementsByClassName("ml11")[0].style.color = "#7e7e7e";
    document.getElementById("main").style.backgroundColor = "rgb(60,100,177,0.06)";
    document.getElementById("subtitle").style.color = "#3C64B1";
    document.getElementById("huskey").style.color = "#3C64B1";
    document.getElementById("flex-options").style.backgroundColor = "transparent";
    document.getElementById("subtitleTime").style.color = "#3C64B1";
    document.getElementById("subtitleWord").style.color = "#3C64B1";
    document.getElementById("wordMode").style.backgroundColor = "#FBFBFD";
    document.getElementById("timeMode").style.backgroundColor = "#FBFBFD";
    document.getElementById("buttonTime").style.backgroundColor = "#3C64B1";
    document.getElementById("buttonWord").style.backgroundColor = "#3C64B1";
    document.getElementById("buttonTime").style.color = "#FFFFFF";
    document.getElementById("buttonWord").style.color = "#FFFFFF";
    document.getElementsByClassName("loader")[0].style.borderTopColor = "#b8b8b8";
    document.getElementsByClassName("loader")[1].style.borderTopColor = "#b8b8b8";
    document.getElementsByClassName("gameTitle")[0].style.color = "#3C64B1";
    document.getElementById("miniFlex").style.backgroundColor = "#3C64B1";
    document.getElementById("time").style.color = "#3C64B1";
    document.getElementById("wpm").style.color = "#3C64B1";
    document.getElementById("percent").style.color = "#3C64B1";
    document.getElementById("speed").style.color = "#3C64B1";
    document.getElementById("speed").style.backgroundColor = "#F6F6F7";
    document.getElementById("accuracy").style.backgroundColor = "#F6F6F7";
    document.getElementById("accuracy").style.color = "#3C64B1";
    document.getElementById("body").style.backgroundColor = "#FBFBFD";
    document.getElementById("timer").style.color = "#FFFFFF";
    document.getElementById("seconds").style.color = "#FFFFFF";
    document.getElementById("timerTime").style.color = "#FFFFFF";
    document.getElementById("secondsTime").style.color = "#FFFFFF";
    document.getElementById("passage").style.color = "#A0A0A0";
    document.getElementsByClassName("gameTitle")[1].style.color = "#3C64B1";
    document.getElementById("miniFlexTime").style.backgroundColor = "#3C64B1";
    document.getElementById("timeTime").style.color = "#3C64B1";
    document.getElementById("wpmTime").style.color = "#3C64B1";
    document.getElementById("percentTime").style.color = "#3C64B1";
    document.getElementById("speedTime").style.color = "#3C64B1";
    document.getElementById("speedTime").style.backgroundColor = "#F6F6F7";
    document.getElementById("accuracyTime").style.backgroundColor = "#F6F6F7";
    document.getElementById("accuracyTime").style.color = "#3C64B1";
    document.getElementById("bodyTime").style.backgroundColor = "#FBFBFD";
    document.getElementById("passageTime").style.color = "#A0A0A0";
    document.getElementsByTagName("html")[0].style.backgroundColor = "white"; // let lightCorrects = document.getElementsByClassName("correctDark")
    // for (let lightCorrect of lightCorrects) {
    //     lightCorrect.classList.remove("correctDark")
    //     lightCorrect.classList.add("correct")
    // }

    var _spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime");

    var _iterator6 = _createForOfIteratorHelper(_spanList),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _item = _step6.value;

        if (_item.classList.contains("correctDark")) {
          _item.classList.remove("correctDark");

          _item.classList.add("correct");
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    theme = "light";
    document.getElementById("darkIcon").style.display = "";
  }
});
document.getElementById("choice1").addEventListener("click", function () {
  window.scrollTo(0, 0);
  document.getElementById("mySidenav").style.width = 0;
  startHeaders();
  reset();
  resetTime();
  document.getElementById("gameWord").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("flex-options").style.display = "none";
  document.getElementById("gameTime").style.display = "";
  inputItem.focus();
  wordMode = false;
  timeMode = true;
});
document.getElementsByTagName("li")[0].addEventListener("click", function () {
  window.scrollTo(0, 0);
  startHeaders();
  reset();
  resetTime();
  document.getElementById("gameWord").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("flex-options").style.display = "none";
  document.getElementById("gameTime").style.display = "";
  inputItem.focus();
  wordMode = false;
  timeMode = true;
});
document.getElementById("choice2").addEventListener("click", function () {
  window.scrollTo(0, 0);
  startHeaders();
  reset();
  resetWord();
  document.getElementById("mySidenav").style.width = 0;
  document.getElementById("gameTime").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("flex-options").style.display = "none";
  document.getElementById("gameWord").style.display = "";
  inputItem.focus();
  timeMode = false;
  wordMode = true;
});
document.getElementsByTagName("li")[1].addEventListener("click", function () {
  window.scrollTo(0, 0);
  startHeaders();
  reset();
  resetWord();
  document.getElementById("gameTime").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("flex-options").style.display = "none";
  document.getElementById("gameWord").style.display = "";
  inputItem.focus();
  timeMode = false;
  wordMode = true;
});
document.getElementById("buttonWord").addEventListener("click", function () {
  startHeaders();
  reset();
  resetWord();
  document.getElementById("gameTime").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("flex-options").style.display = "none";
  document.getElementById("gameWord").style.display = "";
  window.scrollTo(0, 0);
  inputItem.focus();
  timeMode = false;
  wordMode = true;
});
document.getElementById("buttonTime").addEventListener("click", function () {
  startHeaders();
  reset();
  resetTime();
  document.getElementById("gameWord").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("flex-options").style.display = "none";
  document.getElementById("gameTime").style.display = "";
  window.scrollTo(0, 0);
  inputItem.focus();
  timeMode = true;
  wordMode = false;
});
document.getElementById("choiceHome").addEventListener("click", function () {
  home();
});
document.getElementsByTagName("img")[0].addEventListener("click", function () {
  home();
});
document.getElementsByTagName("img")[1].addEventListener("click", function () {
  home();
});

inputItem.onpaste = function (e) {
  return e.preventDefault();
};

inputItem.addEventListener("keyup", function (e) {
  if (e.key === "Control") {
    ctrl = false;
  }
});

inputItem.onblur = function (e) {
  inputItem.focus();
};

inputItem.addEventListener("input", function () {
  var spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime");
  input = document.getElementById("inputArea").value.split("");
  var latest = spanList[input.length - 1];
  var quota = Math.floor((parseInt(getComputedStyle(document.getElementById("bodyTime")).height) + parseInt(getComputedStyle(document.getElementById("bodyTime")).padding) * 4) / (43.2 * 2)) - 1;

  if (!started && wordMode) {
    started = true;
    startingTime = new Date();
    countId = setInterval(function () {
      currentTime = new Date();
      var time = Math.floor((currentTime - startingTime) / 1000);
      document.getElementById("timer").innerText = time;
      speed = Math.floor((input.length - incorrect) / 5 / ((currentTime - startingTime) / 1000 / 60));
      accuracy = Math.floor((input.length - incorrect) / input.length * 100);
      speed = speed < 0 ? 0 : speed;
      accuracy = accuracy < 0 ? 0 : accuracy;
      document.getElementById("speed").innerHTML = speed;
      document.getElementById("accuracy").innerText = accuracy;
      wpmAxis.push(speed);
      accuracyAxis.push(accuracy);
      timeAxis.push(time);
    }, 1000);
  } else if (!started && timeMode) {
    started = true;
    startingTime = new Date();
    countId = setInterval(function () {
      currentTime = new Date();
      document.getElementById("timerTime").innerText = --timer;
      speed = Math.floor((input.length - incorrect) / 5 / ((currentTime - startingTime) / 1000 / 60));
      accuracy = Math.floor((input.length - incorrect) / input.length * 100);
      speed = speed < 0 ? 0 : speed;
      accuracy = accuracy < 0 ? 0 : accuracy;
      document.getElementById("speedTime").innerHTML = speed;
      document.getElementById("accuracyTime").innerText = accuracy;
      wpmAxis.push(speed);
      accuracyAxis.push(accuracy);
      timeAxis.push(Math.abs(timer - 60));

      if (timer == 0) {
        clearInterval(countId);
        generateCompletedModal();
        completed = true;
      }
    }, 1000);
  }

  if (latest != null) {
    if (latest.offsetTop > prevOffSet) {
      prevOffSet = latest.offsetTop;
      line++;

      if (line > quota) {
        scrollDown();
      }
    } else if (latest.offsetTop < prevOffSet) {
      prevOffSet = latest.offsetTop;
      line--;

      if (line >= quota) {
        scrollUp();
      }
    }
  }

  if (!completed) {
    var incorrectCount = 0;
    var previousIncorrect = true;
    currentPointer = input.length;

    if (currentPointer >= spanList.length) {
      generateCompletedModal();
      completed = true;
      clearInterval(countId);
      return;
    }

    if (currentPointer <= previousPointer) {
      spanList[currentPointer].classList.remove("incorrect");
      spanList[currentPointer].classList.remove("correct");
      spanList[currentPointer].classList.remove("correctDark");
      previousPointer == 0 ? previousPointer = -1 : previousPointer--;
    } else {
      if (input[currentPointer - 1] === spanList[currentPointer - 1].innerText) {
        spanList[currentPointer - 1].classList.remove("incorrect");
        theme == "dark" ? spanList[currentPointer - 1].classList.add("correctDark") : spanList[currentPointer - 1].classList.add("correct");

        if (currentPointer == 1) {
          previousPointer = 0;
        } else if (currentPointer == 0) {
          previousPointer = -1;
        } else {
          previousPointer++;
        }
      } else {
        spanList[currentPointer - 1].classList.remove("correct");
        spanList[currentPointer - 1].classList.remove("correctDark");
        spanList[currentPointer - 1].classList.add("incorrect");

        if (currentPointer == 1) {
          previousPointer = 0;
        } else if (currentPointer == 0) {
          previousPointer = -1;
        } else {
          previousPointer++;
        }
      }
    }

    for (var item in input) {
      if (spanList[item].classList.contains("incorrect")) {
        incorrectCount++;

        if (previousIncorrect) {
          incorrectChain++;
        }

        previousIncorrect = true;
      } else {
        previousIncorrect = false;
        incorrectChain = 1;
      }
    }

    incorrect = incorrectCount;

    if (incorrectChain >= 15) {
      generateFailedModal();
      completed = true;
      clearInterval(countId);
      return;
    } else {
      incorrectChain = 0;
    }

    if (wordMode && input.length >= spanList.length) {
      generateCompletedModal();
      completed = true;
      clearInterval(countId);
    }
  }
});
inputItem.addEventListener("keydown", function (e) {
  if (e.key === "Control") {
    ctrl = true;
    e.preventDefault();
    return;
  }

  if (ctrl) {
    if (e.key === "a") {
      e.preventDefault();
    }

    if (e.key === "Backspace") {
      e.preventDefault();
    }

    return;
  }

  if (inputItem === document.activeElement && !completed) {
    playKeyPress();
  }

  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].indexOf(e.key) > -1) {
    e.preventDefault();
  }
});

function getParagraphs(para_api) {
  return fetch(para_api).then(function (response) {
    return response.text();
  });
}

function getNextParagraph() {
  return _getNextParagraph.apply(this, arguments);
}

function _getNextParagraph() {
  _getNextParagraph = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var spanList, paragraph, paragraphList, _iterator7, _step7, miniParagraph, para, _iterator8, _step8, character, itemSpan;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime");
            paragraph = "";
            loaderWrapperWord.style.display = "flex";

          case 3:
            if (!(paragraph.length < 150)) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return getParagraphs(paragraph_api);

          case 6:
            paragraph = _context.sent;
            _context.next = 3;
            break;

          case 9:
            paragraph = JSON.parse(paragraph).text[0];

            if (paragraph.length > 200) {
              paragraph = shorten(paragraph);
            }

            paragraph = paragraph.replaceAll(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g, '"');
            paragraph = paragraph.replaceAll(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g, "'");
            paragraph = paragraph.replaceAll(/[\u0020\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2029\u202f\u205f]/g, " ");
            paragraph = paragraph.replaceAll("’", "'");
            paragraph = paragraph.replaceAll("  ", " ");
            paragraphList = paragraph.split("\n");
            document.getElementById("passage").innerText = "";
            loaderWrapperWord.style.display = "none";
            _iterator7 = _createForOfIteratorHelper(paragraphList);

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                miniParagraph = _step7.value;
                para = document.createElement('p');
                _iterator8 = _createForOfIteratorHelper(miniParagraph);

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    character = _step8.value;
                    itemSpan = document.createElement('span');
                    itemSpan.className = "charSpan";
                    itemSpan.innerText = character;
                    para.appendChild(itemSpan);
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }

                document.getElementById("passage").appendChild(para);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            return _context.abrupt("return");

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getNextParagraph.apply(this, arguments);
}

function shorten(paragraph) {
  var modified = paragraph.substring(200, paragraph.length);
  var stoppingIndex1 = modified.indexOf(".") == -1 ? 999999999 : modified.indexOf(".");
  var stoppingIndex2 = modified.indexOf("!") == -1 ? 999999999 : modified.indexOf("!");
  var stoppingIndex3 = modified.indexOf("?") == -1 ? 999999999 : modified.indexOf("?");
  var stoppingIndex4 = modified.indexOf(";") == -1 ? 999999999 : modified.indexOf(";");
  var min = Math.min(stoppingIndex1, stoppingIndex2, stoppingIndex3, stoppingIndex4);

  if (modified.charAt(min + 1) == '"' || modified.charAt(min + 1) == "'") {
    min++;
  }

  return paragraph.substring(0, 200 + min + 1);
}

function getNextParagraphTime() {
  return _getNextParagraphTime.apply(this, arguments);
}

function _getNextParagraphTime() {
  _getNextParagraphTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var paragraph, paragraphList, _iterator9, _step9, miniParagraph, div, para, _iterator10, _step10, character, itemSpan;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loaderWrapperTime.style.display = "flex";
            paragraph = "";

          case 2:
            if (!(paragraph.length < 1000)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 5;
            return getParagraphs(paragraph_api_time);

          case 5:
            paragraph = _context2.sent;
            _context2.next = 2;
            break;

          case 8:
            paragraph = paragraph.replaceAll(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g, '"');
            paragraph = paragraph.replaceAll(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g, "'");
            paragraph = paragraph.replaceAll(/[\u0020\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2029\u202f\u205f]/g, " ");
            paragraph = paragraph.replaceAll("’", "'");
            paragraph = paragraph.replaceAll("  ", " ");
            paragraphList = paragraph.split("\n");
            document.getElementById("passageTime").innerText = "";
            loaderWrapperTime.style.display = "none";
            _iterator9 = _createForOfIteratorHelper(paragraphList);

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                miniParagraph = _step9.value;
                div = document.createElement('div');
                para = document.createElement('p');
                _iterator10 = _createForOfIteratorHelper(miniParagraph);

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    character = _step10.value;
                    itemSpan = document.createElement('span');
                    itemSpan.className = "charSpanTime";
                    itemSpan.innerText = character;
                    para.appendChild(itemSpan);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }

                div.appendChild(para);
                document.getElementById("passageTime").appendChild(div);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            document.getElementById("bodyTime").scrollTo(0, 0);
            document.getElementById("body").scrollTo(0, 0);
            return _context2.abrupt("return");

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getNextParagraphTime.apply(this, arguments);
}

function reset() {
  if (statsChart != "") {
    statsChart.destroy();
  }

  document.getElementById("timer").innerText = "0";
  document.getElementById("speed").innerText = "0";
  document.getElementById("accuracy").innerText = "0";
  document.getElementById("inputArea").value = "";
  wpmAxis = [];
  accuracyAxis = [];
  timeAxis = [];
  clearInterval(countId);
  document.getElementById("bodyTime").scrollTo(0, 0);
  document.getElementById("body").scrollTo(0, 0);
  document.getElementById("passage").innerText = "";
  document.getElementById("passageTime").innerText = "";
  inputItem.focus();
  completed = false;
  started = false;
  wordMode = false;
  timeMode = false;
  previousPointer = 0;
  timer = 60;
  incorrectChain = 0;
  scrollOffSet = 0;
  return;
}

function resetWord() {
  document.getElementById("timer").innerText = "0";
  document.getElementById("speed").innerText = "0";
  document.getElementById("accuracy").innerText = "0";
  document.getElementById("inputArea").value = "";
  clearInterval(countId);
  getNextParagraph();
  completed = false;
  started = false;
  wordMode = false;
  timeMode = false;
  incorrectChain = 0;
  scrollOffSet = 0;
  return;
}

function resetTime() {
  document.getElementById("timerTime").innerText = "60";
  document.getElementById("speedTime").innerText = "0";
  document.getElementById("accuracyTime").innerText = "0";
  document.getElementById("inputArea").value = "";
  clearInterval(countId);
  getNextParagraphTime();
  incorrectChain = 0;
  completed = false;
  started = false;
  wordMode = false;
  timeMode = false;
  timer = 60;
  scrollOffSet = 0;
  return;
}

function scrollDown() {
  if (timeMode) {
    scrollOffSet += document.getElementsByClassName("charSpanTime")[0].offsetHeight * 1.75;
    document.getElementById("bodyTime").scrollTo({
      top: scrollOffSet,
      left: 0,
      behavior: "smooth"
    });
  } else if (wordMode) {
    scrollOffSet += document.getElementsByClassName("charSpan")[0].offsetHeight * 1.75;
    document.getElementById("body").scrollTo({
      top: scrollOffSet,
      left: 0,
      behavior: "smooth"
    });
  }

  return;
}

function scrollUp() {
  if (timeMode) {
    scrollOffSet -= document.getElementsByClassName("charSpanTime")[0].offsetHeight * 1.75;
    document.getElementById("bodyTime").scrollTo({
      top: scrollOffSet,
      left: 0,
      behavior: "smooth"
    });
  } else if (wordMode) {
    scrollOffSet -= document.getElementsByClassName("charSpan")[0].offsetHeight * 1.75;
    document.getElementById("body").scrollTo({
      top: scrollOffSet,
      left: 0,
      behavior: "smooth"
    });
  }

  return;
}

function playKeyPress() {
  var title = "";

  if (sound == "apple") {
    title += "./macPress";
  } else if (sound == "mechanical") {
    title += "./buttonPress";
  } else if (sound == "typewriter") {
    title += "./typewriterPress";
  }

  var select = Math.floor(Math.random() * 5 + 1);
  title += select + ".mp3";
  var audio = new Audio(title);
  audio.loop = false;
  audio.play();
  return;
}

function playSpaceBar() {
  var title = "";

  if (sound == "apple") {
    title += "./macPressSpaceBar";
  } else if (sound == "mechanical") {
    title += "./buttonPressSpaceBar";
  } else if (sound == "typewriter") {
    title += "./typewriterPressSpaceBar2";
  }

  title += ".mp3";
  var audio = new Audio(title);
  audio.loop = false;
  audio.play();
  return;
}

function generateCompletedModal() {
  if (theme == "light") {
    statsChart = new Chart(chart, {
      responsive: true,
      type: 'line',
      data: {
        labels: timeAxis,
        datasets: [{
          data: wpmAxis,
          label: "Words per Minute",
          fill: true,
          borderColor: "#3e95cd"
        }, {
          data: accuracyAxis,
          label: "Accuracy",
          fill: false,
          borderColor: "#c45850"
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
              stepSize: 4
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: Math.ceil(Math.max(Math.max.apply(Math, _toConsumableArray(accuracyAxis)), Math.max.apply(Math, _toConsumableArray(wpmAxis))) / 20) * 20,
              stepSize: 20
            }
          }]
        }
      }
    });
  } else {
    statsChart = new Chart(chartDark, {
      backgroundColor: "#7a7a7a",
      responsive: true,
      type: 'line',
      data: {
        labels: timeAxis,
        datasets: [{
          data: wpmAxis,
          label: "Words per Minute",
          backgroundColor: "#313131",
          borderColor: "#3e95cd"
        }, {
          data: accuracyAxis,
          label: "Accuracy",
          fill: false,
          borderColor: "#c45850"
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
              stepSize: 4,
              fontColor: "#CCCCCC"
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: Math.floor(Math.max(Math.max.apply(Math, _toConsumableArray(accuracyAxis)), Math.max.apply(Math, _toConsumableArray(wpmAxis))) / 20) * 20 + 20,
              stepSize: 20,
              fontColor: "#CCCCCC"
            }
          }]
        },
        legend: {
          labels: {
            fontColor: '#CCCCCC'
          }
        }
      }
    });
  }

  var remark = "";

  if (speed > 100 && accuracy > 95) {
    remark = "WOW! You're blazing fast!";
  } else if (speed > 90 && accuracy > 95) {
    remark = "Well done! That was remarkable.";
  } else if (speed > 75 && accuracy > 85) {
    remark = "Great job! You're getting better!";
  } else {
    remark = "Not bad! Keep on practicing!";
  }

  if (wordMode) {
    document.getElementById("resultsSuccess").innerHTML = "Congrats! You've completed the passage.";
    document.getElementById("resultsSuccessDark").innerHTML = "Congrats! You've completed the passage.";
  } else if (timeMode) {
    document.getElementById("resultsSuccess").innerHTML = "Awesome! Thats another minute of practice today.";
    document.getElementById("resultsSuccessDark").innerHTML = "Awesome! Thats another minute of practice today.";
  }

  document.getElementById("statsSuccess").innerHTML = "You typed ".concat(inputItem.value.length, " characters at <span style=\"color: #3e95cd;\">").concat(speed, " wpm</span> with <span style=\"color: #c45850;\">").concat(accuracy, "% accuracy</span>!");
  document.getElementById("remark").innerHTML = remark;
  document.getElementById("statsSuccessDark").innerHTML = "You typed ".concat(inputItem.value.length, " characters at <span style=\"color: #3e95cd;\">").concat(speed, " wpm</span> with <span style=\"color: #c45850;\">").concat(accuracy, "% accuracy</span>!");
  document.getElementById("remarkDark").innerHTML = "<span style=\"color: #CCCCCC;\">".concat(remark, "</span>");

  if (theme == 'light') {
    modalSuccess.style.display = "block";
  } else {
    modalSuccessDark.style.display = "block";
  }

  return;
}

function generateFailedModal() {
  if (theme == 'light') {
    modalFailed.style.display = "block";
  } else {
    modalFailedDark.style.display = "block";
  }

  return;
}

function modalExit() {
  modalSuccess.style.display = "none";
  modalFailed.style.display = "none";
  modalSuccessDark.style.display = "none";
  modalFailedDark.style.display = "none";

  if (timeMode) {
    resetTime();
    timeMode = true;
  } else if (wordMode) {
    resetWord();
    wordMode = true;
  }
}

function home() {
  reset();
  document.getElementsByClassName("navLinks")[0].style.display = "";
  document.getElementsByClassName("ml11")[0].style.display = "none";
  document.getElementById("mySidenav").style.width = 0;
  document.getElementById("main").style.display = "";
  document.getElementById("flex-options").style.display = "";
  document.getElementById("gameWord").style.display = "none";
  document.getElementById("gameTime").style.display = "none";
}

function startHeaders() {
  document.getElementsByClassName("navLinks")[0].style.display = "none";
  document.getElementsByClassName("ml11")[0].style.display = "flex";
  var textWrapper = document.querySelector('.ml11 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replaceAll(/([^\x00-\x80]|\w|\u0021)/g, "<span class='letter'>$&</span>");
  anime.timeline({
    loop: false
  }).add({
    targets: '.ml11 .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700
  }).add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function delay(el, i) {
      return 34 * (i + 1);
    }
  }).add({
    targets: '.ml11 .line',
    opacity: 0,
    duration: 700,
    easing: "easeOutExpo",
    delay: 0
  });
  ;
}
},{"regenerator-runtime":"../node_modules/regenerator-runtime/runtime.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62290" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map