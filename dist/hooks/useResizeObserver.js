"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useResizeObserver(ref, onSizeChange) {
    (0, react_1.useEffect)(() => {
        const ro = new ResizeObserver(() => {
            onSizeChange();
        });
        if (ref.current) {
            ro.observe(ref.current);
            return () => ro.disconnect();
        }
    }, [ref.current]);
}
exports.default = useResizeObserver;
