"use strict";
exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 79760:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46145);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var uploadcare_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49624);
/* harmony import */ var _default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20429);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77015);






var _excluded = ["value", "apiRef", "onTabChange", "onChange", "onProgress", "customTabs", "previewUrlCallback", "metadataCallback"];
var containerStyles = {
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};
var getHiddenDoneButtonStyle = function getHiddenDoneButtonStyle(containerId) {
  return (/* css */"\n  .".concat(containerId, " .uploadcare--preview__done:not(.uploadcare-tab-effects--done),\n  .").concat(containerId, " .uploadcare--panel__done:not(.uploadcare-tab-effects--done) {\n    display: none;\n  }\n")
  );
};
var getValueItems = function getValueItems(value, props) {
  var uuids = [];
  if (value) {
    uuids = Array.isArray(value) ? value : [value];
  }
  return uuids;
};
var useDialog = function useDialog(props, uploadcare) {
  var value = props.value,
    apiRef = props.apiRef,
    onTabChange = props.onTabChange,
    onChange = props.onChange,
    onProgress = props.onProgress,
    customTabs = props.customTabs,
    previewUrlCallback = props.previewUrlCallback,
    metadataCallback = props.metadataCallback,
    restProps = (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__._)(props, _excluded);
  var tabsCss = restProps.tabsCss,
    locale = restProps.locale,
    localeTranslations = restProps.localeTranslations,
    localePluralize = restProps.localePluralize;
  var panelContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var panelInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onTabChangeCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onTabChange);
  var onChangeCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onChange);
  var onProgressCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(onProgress);
  var metadataCommitedCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(metadataCallback);
  var previewUrlCommitedCallback = (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.u)(previewUrlCallback || _default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.d);
  (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.a)(customTabs, uploadcare);
  (0,_default_preview_url_callback_23ab7c4e_mjs__WEBPACK_IMPORTED_MODULE_4__.b)(function () {
    if (locale) window.UPLOADCARE_LOCALE = locale;
    if (localePluralize) window.UPLOADCARE_LOCALE_PLURALIZE = localePluralize;
    if (localeTranslations) {
      window.UPLOADCARE_LOCALE_TRANSLATIONS = localeTranslations;
    }
    return function () {
      if (locale) delete window.UPLOADCARE_LOCALE;
      if (localePluralize) delete window.UPLOADCARE_LOCALE_PLURALIZE;
      if (localeTranslations) delete window.UPLOADCARE_LOCALE_TRANSLATIONS;
    };
  }, [locale, localePluralize, localeTranslations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (uploadcare && tabsCss && typeof tabsCss === 'string') {
      if (tabsCss.indexOf('https://') === 0) {
        uploadcare.tabsCss.addUrl(tabsCss);
      } else {
        uploadcare.tabsCss.addStyle(tabsCss);
      }
    }
  }, [uploadcare, tabsCss]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var files = getValueItems(value);
    panelInstance.current && panelInstance.current.reject();
    panelInstance.current = uploadcare.openPanel(panelContainer.current, files, (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.a)((0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.a)({
      multipleMax: restProps.multiple ? undefined : 1
    }, restProps), {}, {
      multiple: true,
      metadataCallback: restProps.metadata ? undefined : metadataCommitedCallback,
      previewUrlCallback: previewUrlCommitedCallback
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadcare].concat((0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(Object.values(restProps))));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var dialogApi = panelInstance.current;
    dialogApi.progress(onTabChangeCallback);
    var onChangeWrapper = function onChangeWrapper() {
      var items = panelInstance.current.fileColl.__items.map(function (deferred) {
        return deferred.promise();
      });
      onChangeCallback(items);
    };
    var onProgressWrapper = function onProgressWrapper() {
      var lastProgresses = panelInstance.current.fileColl.lastProgresses();
      onProgressCallback(lastProgresses);
    };
    dialogApi.fileColl.anyProgressList.add(onProgressWrapper);
    dialogApi.fileColl.anyDoneList.add(onChangeWrapper);
    dialogApi.fileColl.anyFailList.add(onChangeWrapper);
    dialogApi.fileColl.onRemove.add(onChangeWrapper);
    dialogApi.fileColl.onReplace.add(onChangeWrapper);
    dialogApi.fileColl.onSort.add(onChangeWrapper);
    return function () {
      var dialogApi = panelInstance.current;
      dialogApi.fileColl.anyProgressList.remove(onProgressWrapper);
      dialogApi.fileColl.anyDoneList.remove(onChangeWrapper);
      dialogApi.fileColl.anyFailList.remove(onChangeWrapper);
      dialogApi.fileColl.onRemove.remove(onChangeWrapper);
      dialogApi.fileColl.onReplace.remove(onChangeWrapper);
      dialogApi.fileColl.onSort.remove(onChangeWrapper);
    };
  }, [].concat((0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(Object.values(restProps)), [onTabChangeCallback, onChangeCallback, onProgressCallback]));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(apiRef, function () {
    return {
      onTabVisibility: function onTabVisibility(cb) {
        return panelInstance.current.onTabVisibility(cb);
      },
      hideTab: function hideTab(tab) {
        return panelInstance.current.hideTab(tab);
      },
      showTab: function showTab(tab) {
        return panelInstance.current.showTab(tab);
      },
      switchTab: function switchTab(tab) {
        return panelInstance.current.switchTab(tab);
      },
      addFiles: function addFiles(files) {
        return panelInstance.current.addFiles(files);
      },
      isTabVisible: function isTabVisible(tab) {
        return panelInstance.current.isTabVisible(tab);
      },
      getFileColl: function getFileColl() {
        return panelInstance.current.fileColl;
      },
      getRawDialogApi: function getRawDialogApi() {
        return panelInstance.current;
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return panelInstance.current && panelInstance.current.reject();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var isUpdated = false;
    panelInstance.current.fileColl.clear();
    var files = getValueItems(value);
    var _iterator = (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.d)(files),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (typeof item === 'string' && item.includes('~')) {
          uploadcare.loadFileGroup(item, props).then(function (fileGroup) {
            // value could be changed after group loaded
            if (!isUpdated) {
              var _files = fileGroup.files();
              panelInstance.current.addFiles(_files);
            }
          });
          break;
        }
        panelInstance.current.fileColl.add(uploadcare.fileFrom('uploaded', item, props));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return function () {
      isUpdated = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return [panelContainer];
};
var Dialog = function Dialog(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return "uploadcare-".concat(Date.now());
    }),
    _useState2 = (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.b)(_useState, 1),
    containerId = _useState2[0];
  var styleElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null, getHiddenDoneButtonStyle(containerId));
  }, [containerId]);
  var _useDialog = useDialog(props, uploadcare_widget__WEBPACK_IMPORTED_MODULE_1__),
    _useDialog2 = (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_3__.b)(_useDialog, 1),
    containerRef = _useDialog2[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: props.id,
    className: containerId,
    style: containerStyles
  }, styleElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: containerRef
  }));
};




/***/ })

};
;