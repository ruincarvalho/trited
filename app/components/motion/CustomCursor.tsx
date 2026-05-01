"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector =
  'a, button, input, textarea, select, label, [role="button"], [data-cursor="link"]';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const lastPoint = useRef({ x: -100, y: -100 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!fine) {
      document.documentElement.classList.remove("has-custom-cursor", "cursor-ready");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor", "cursor-ready");

    const setPosition = (x: number, y: number) => {
      lastPoint.current = { x, y };
      const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = transform;
      if (dotRef.current) dotRef.current.style.transform = transform;
    };

    const updateHover = () => {
      const { x, y } = lastPoint.current;
      const target = document.elementFromPoint(x, y) as HTMLElement | null;
      setHovering(!!target?.closest(interactiveSelector));
    };

    const move = (e: PointerEvent) => {
      setPosition(e.clientX, e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest(interactiveSelector));
    };

    const syncAfterScroll = () => {
      setPosition(lastPoint.current.x, lastPoint.current.y);
      updateHover();
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", syncAfterScroll, { passive: true });
    window.addEventListener("resize", syncAfterScroll);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      document.documentElement.classList.remove("cursor-ready");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", syncAfterScroll);
      window.removeEventListener("resize", syncAfterScroll);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="custom-cursor custom-cursor-ring"
        data-visible={visible}
        data-hovering={hovering}
        data-pressed={pressed}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="custom-cursor custom-cursor-dot"
        data-visible={visible}
        data-hovering={hovering}
      />
    </>
  );
}
