"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var outside_click_1 = __importDefault(require("@alphasquad/outside-click"));
var Dropdown = function (_a) {
    var results = _a.results, selectValue = _a.selectValue, setShow = _a.setShow;
    var setShowMain = function () {
        setShow(false);
    };
    return react_1.default.createElement(outside_click_1.default, { onClose: setShowMain },
        react_1.default.createElement("div", { className: "__resultsWrapper" }, results.length === 0 ? react_1.default.createElement("div", { className: "__results" }, "No result found") : results.map(function (item, index) {
            return react_1.default.createElement("div", { className: "__results", key: index, onClick: function () { return selectValue(item); } }, item);
        })));
};
exports.default = Dropdown;
//# sourceMappingURL=dropdown.js.map