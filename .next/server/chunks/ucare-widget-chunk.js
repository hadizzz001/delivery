"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 48137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Uploader)
/* harmony export */ });
/* harmony import */ var _index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46145);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var uploadcare_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49624);
/* harmony import */ var _default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20429);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77015);






var useValidators = function useValidators(widget, validators) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (validators != null) {
      var instance = widget.current;
      validators.forEach(function (validator) {
        instance.validators.push(validator);
      });
      return function () {
        instance.validators.length = 0;
      };
    }
  }, [widget, validators]);
};

function useDeepMemo(factory, deps) {
  var isValid = true;
  var valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  // initial hook call
  if (!valueRef.current) {
    valueRef.current = {
      deps: deps,
      result: factory()
    };
    // subsequent calls
  } else {
    isValid = !!(deps && valueRef.current.deps && react_fast_compare__WEBPACK_IMPORTED_MODULE_2__(deps, valueRef.current.deps));
  }
  var cache = isValid ? valueRef.current : {
    deps: deps,
    result: factory()
  };
  // must update immediately so any sync renders here don't cause an infinite loop
  valueRef.current = cache;
  return cache.result;
}

var _excluded = ["id", "name", "value", "onFileSelect", "onChange", "onDialogOpen", "onDialogClose", "onTabChange", "apiRef", "customTabs", "validators", "tabsCss", "locale", "localeTranslations", "localePluralize", "previewUrlCallback", "metadataCallback"];
var useWidget = function useWidget(_ref, uploadcare) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    onFileSelect = _ref.onFileSelect,
    onChange = _ref.onChange,
    onDialogOpen = _ref.onDialogOpen,
    onDialogClose = _ref.onDialogClose,
    onTabChange = _ref.onTabChange,
    apiRef = _ref.apiRef,
    customTabs = _ref.customTabs,
    validators = _ref.validators,
    tabsCss = _ref.tabsCss,
    locale = _ref.locale,
    localeTranslations = _ref.localeTranslations,
    localePluralize = _ref.localePluralize,
    previewUrlCallback = _ref.previewUrlCallback,
    metadataCallback = _ref.metadataCallback,
    options = (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__._)(_ref, _excluded);
  var input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var widget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var cachedValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fileSelectedCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onFileSelect);
  var changeCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onChange);
  var dialogOpenCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onDialogOpen);
  var dialogCloseCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onDialogClose);
  var tabChangeCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onTabChange);
  var metadataCommitedCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(metadataCallback);
  var previewUrlCommitedCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(previewUrlCallback || _default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.d);
  var widgetOptions = useDeepMemo(function () {
    return options;
  }, [options]);
  (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.a)(customTabs, uploadcare);
  (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.b)(function () {
    if (locale) window.UPLOADCARE_LOCALE = locale;
    if (localePluralize) window.UPLOADCARE_LOCALE_PLURALIZE = localePluralize;
    if (localeTranslations) {
      window.UPLOADCARE_LOCALE_TRANSLATIONS = localeTranslations;
    }
    uploadcare.plugin(function (internal) {
      internal.locale.rebuild({
        locale: locale || null,
        localeTranslations: localeTranslations || null,
        localePluralize: localePluralize || null
      });
    });
    return function () {
      if (locale) delete window.UPLOADCARE_LOCALE;
      if (localePluralize) delete window.UPLOADCARE_LOCALE_PLURALIZE;
      if (localeTranslations) delete window.UPLOADCARE_LOCALE_TRANSLATIONS;
    };
  }, [locale, localeTranslations, localePluralize]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var inputEl = input.current;
    widget.current = uploadcare.Widget(inputEl, (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.a)((0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.a)({}, widgetOptions), {}, {
      metadataCallback: widgetOptions.metadata ? undefined : metadataCommitedCallback,
      previewUrlCallback: previewUrlCommitedCallback
    }));
    var widgetElement = inputEl.nextSibling;
    if (cachedValueRef.current) {
      // restore widget value when called twice in React.StrictMode
      widget.current.value(cachedValueRef.current);
    }
    return function () {
      // useEffect could be called twice inside React.StrictMode
      // to reinitialize widget on the same input element, we need to cleanup bounded jquery data on it
      // `uploadcareWidget` is a data attr that is used to store widget api
      // see https://github.com/uploadcare/uploadcare-widget/blob/feat/unsplash-tab/src/widget/live.js#L11
      uploadcare.jQuery(inputEl).removeData('uploadcareWidget');
      widgetElement && widgetElement.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadcare, widgetOptions, metadataCommitedCallback, previewUrlCommitedCallback]);
  useValidators(widget, validators);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    widget.current.onUploadComplete.add(changeCallback);
    widget.current.onChange.add(fileSelectedCallback);
    return function () {
      widget.current.onUploadComplete.remove(changeCallback);
      widget.current.onChange.remove(fileSelectedCallback);
    };
  }, [changeCallback, fileSelectedCallback, uploadcare, widgetOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var dialog;
    var saveDialog = function saveDialog(ref) {
      dialog = ref;
      dialog.done(dialogCloseCallback).fail(dialogCloseCallback).progress(tabChangeCallback);
      dialogOpenCallback(ref);
    };
    widget.current.onDialogOpen.add(saveDialog);
    return function () {
      widget.current.onDialogOpen.remove(saveDialog);
      dialog && dialog.reject();
    };
  }, [dialogCloseCallback, dialogOpenCallback, tabChangeCallback, widgetOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var files = [];
    var saveFiles = function saveFiles(file) {
      if (file) {
        files = file.files ? file.files() : [file];
      } else {
        files = [];
      }
    };
    widget.current.onChange.add(saveFiles);
    return function () {
      files.forEach(function (file) {
        return file.cancel();
      });
      widget.current.onChange.remove(saveFiles);
    };
  }, [widgetOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (cachedValueRef.current !== value) {
      widget.current.value(value);
    }
    cachedValueRef.current = value;
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (uploadcare && tabsCss && typeof tabsCss === 'string') {
      if (tabsCss.indexOf('https://') === 0) {
        uploadcare.tabsCss.addUrl(tabsCss);
      } else {
        uploadcare.tabsCss.addStyle(tabsCss);
      }
    }
  }, [uploadcare, tabsCss]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(apiRef, function () {
    return {
      openDialog: function openDialog() {
        return widget.current.openDialog();
      },
      reloadInfo: function reloadInfo() {
        return widget.current.reloadInfo();
      },
      getInput: function getInput() {
        return widget.current.inputElement;
      },
      value: function value(_value) {
        return widget.current.value(_value);
      }
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "hidden",
      ref: input,
      id: id,
      name: name
    });
  }, [id, name]);
};
var Uploader = function Uploader(props) {
  var Input = useWidget(props, uploadcare_widget__WEBPACK_IMPORTED_MODULE_1__);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Input, null);
};




/***/ })

};
;