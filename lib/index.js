"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var dropdown_1 = __importDefault(require("./dropdown"));
;
var PredictiveSearch = function (_a) {
    var keyword = _a.keyword, getKeyword = _a.getKeyword, placeholder = _a.placeholder, wrapperClass = _a.wrapperClass, results = _a.results;
    var _b = react_1.useState(""), value = _b[0], setValue = _b[1];
    var _c = react_1.useState(false), show = _c[0], setShow = _c[1];
    react_1.useEffect(function () {
        if (keyword) {
            setValue(keyword);
            setShow(true);
        }
        else {
            setValue(keyword);
            setShow(false);
        }
    }, [keyword]);
    var getVal = function (event) {
        getKeyword(event.target.value);
    };
    var selectValue = function (item) {
        getKeyword(item);
        setShow(false);
    };
    return react_1.default.createElement("div", { className: "__autocomplete" + (wrapperClass ? " wrapperClass" : "") },
        react_1.default.createElement("input", { id: "myInput", type: "text", value: value ? value : "", name: "myCountry", onChange: getVal, placeholder: placeholder }),
        (show) &&
            react_1.default.createElement(dropdown_1.default, { results: results, setShow: setShow, selectValue: selectValue }),
        react_1.default.createElement("style", null, "\n            .__autocomplete{\n                position: relative;\n            }\n            #myInput{\n                height: 30px;\n                width: 100%;\n                padding: 3px;\n                font-size: 16px;\n\n            }\n            .__resultsWrapper{\n                position: absolute;\n                top: 40px;\n                left: 0;\n                right: 0;\n                text-align: left;\n                max-height: 308px;\n                overflow: auto;\n                background-color: #fff;\n                color: black;\n                z-index: 999;\n                padding-bottom: 10px;\n            }\n            .__results{\n                padding-top: 10px;\n                padding-left: 10px;\n                cursor: pointer;\n            }\n        "));
};
exports.default = PredictiveSearch;
//# sourceMappingURL=index.js.map