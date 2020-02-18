"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Content = function (_a) {
    var onClose = _a.onClose, children = _a.children;
    var ref = react_1.useRef(null);
    var escapeListener = react_1.useCallback(function (e) {
        if (e.key === 'Escape') {
            onClose();
        }
    }, []);
    var clickListener = react_1.useCallback(function (e) {
        if (!ref.current.contains(e.target)) {
            onClose();
        }
    }, [ref.current]);
    // Below is the 10 lines of code you need.
    react_1.useEffect(function () {
        // Attach the listeners on component mount.
        document.addEventListener('click', clickListener);
        document.addEventListener('keyup', escapeListener);
        // Detach the listeners on component unmount.
        return function () {
            document.removeEventListener('click', clickListener);
            document.removeEventListener('keyup', escapeListener);
        };
    }, []);
    return (react_1.default.createElement("div", { ref: ref }, children));
};
exports.default = Content;
//# sourceMappingURL=closeDiv.js.map