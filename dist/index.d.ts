import React from "react";
import "./styles/scrollbar.css";
type Props = {
    children: React.ReactElement;
    isRTL?: Boolean;
};
declare function Scrollify({ children, isRTL }: Props): React.JSX.Element;
export default Scrollify;
