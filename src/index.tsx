import React, { useCallback, useEffect, useRef, useState } from "react";
import useResizeObserver from "./hooks/useResizeObserver";

import "./styles/Scrollbar.scss";

// Define the props for the Scrollbar component
type Props = {
  children: React.ReactElement;
};

const prefix = "react-scrollify";

function Scrollify({ children }: Props) {
  // Refs for DOM elements
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Custom hook to observe size changes in content and container
  useResizeObserver(contentRef, measureContent);
  useResizeObserver(contentContainerRef, measureContent);

  // State to manage the visibility of the scrollbar
  const [shouldHideScrollbar, setShouldHideScrollbar] = useState(false);

  // Measure content size on initial render
  useEffect(() => {
    measureContent();
  }, []);

  // Handle content scroll to update thumb position
  const handleScrollContent = () => {
    const thumbEle = thumbRef.current;
    const contentEle = contentContainerRef.current;
    if (!thumbEle || !contentEle) return;

    // Calculate thumb position based on content scroll
    thumbEle.style.top = `${
      (contentEle.scrollTop * 100) / contentEle.scrollHeight
    }%`;
  };

  // Handle click on the scrollbar track to jump to the clicked position
  const handleClickTrack = (e: MouseEvent) => {
    const trackEle = trackRef.current;
    const contentEle = contentContainerRef.current;
    if (!trackEle || !contentEle) return;

    const bound = trackEle.getBoundingClientRect();
    const percentage = (e.clientY - bound.top) / bound.height;

    // Scroll the content container based on the click position
    contentEle.scrollTop =
      percentage * (contentEle.scrollHeight - contentEle.clientHeight);
  };

  // Measure the content size and adjust scrollbar visibility and thumb size
  function measureContent() {
    const thumbEle = thumbRef.current;
    const contentEle = contentContainerRef.current;
    if (!thumbEle || !contentEle) return;

    const scrollRatio = contentEle.clientHeight / contentEle.scrollHeight;
    if (scrollRatio < 1) {
      setShouldHideScrollbar(false);
      thumbEle.style.height = `${scrollRatio * 100}%`;
    } else {
      setShouldHideScrollbar(true);
    }
  }

  // Handle mouse drag on the scrollbar thumb
  const handleMouseDown = useCallback((e: MouseEvent) => {
    const ele = thumbRef.current;
    const contentEle = contentContainerRef.current;
    if (!ele || !contentEle) return;

    const startPos = {
      top: contentEle.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    // Move the thumb and scroll content as the mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      const dy = e.clientY - startPos.y;
      const scrollRatio = contentEle.clientHeight / contentEle.scrollHeight;
      contentEle.scrollTop = startPos.top + dy / scrollRatio;
      updateCursor(ele);
    };

    // Clean up event listeners on mouse up
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      resetCursor(ele);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  // Handle touch drag on the scrollbar thumb
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const ele = thumbRef.current;
    const contentEle = contentContainerRef.current;
    if (!ele || !contentEle) return;

    const touch = e.touches[0];
    const startPos = {
      top: contentEle.scrollTop,
      x: touch.clientX,
      y: touch.clientY,
    };

    // Move the thumb and scroll content as the touch moves
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const dy = touch.clientY - startPos.y;
      const scrollRatio = contentEle.clientHeight / contentEle.scrollHeight;
      contentEle.scrollTop = startPos.top + dy / scrollRatio;
      updateCursor(ele);
    };

    // Clean up event listeners on touch end
    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      resetCursor(ele);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  }, []);

  // Update the cursor style to prevent text selection during drag
  const updateCursor = (ele: HTMLDivElement) => {
    ele.style.userSelect = "none";
    document.body.style.userSelect = "none";
  };

  // Reset the cursor style after drag ends
  const resetCursor = (ele: HTMLDivElement) => {
    ele.style.userSelect = "";
    document.body.style.userSelect = "";
  };

  return (
    <div className={`${prefix}-scroll-bar-wrapper`}>
      <div
        className={`${prefix}-scroll-bar-content-container`}
        ref={contentContainerRef}
        onScroll={handleScrollContent}
      >
        <div ref={contentRef}>{children}</div>
      </div>

      <div
        className={`${prefix}-scroll-bar ${shouldHideScrollbar ? "hide" : ""}`}
      >
        <div
          className={`${prefix}-scroll-bar-track`}
          ref={trackRef}
          onClick={(e) => handleClickTrack(e.nativeEvent)}
        />
        <div
          className={`${prefix}-scroll-bar-thumb`}
          ref={thumbRef}
          onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
          onTouchStart={(e) => handleTouchStart(e.nativeEvent)}
        />
      </div>
    </div>
  );
}

export default Scrollify;
