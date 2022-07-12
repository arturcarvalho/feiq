import { useState, useEffect, useRef } from "react";

/**
 * Mark headings selected with `selector`
 * with "active" class.
 * @param selector like "main h2, main h3"
 */
const useActiveHeading = (selector: string) => {
  const [activeId, setActiveId] = useState("");

  const headingElementsRef: any = useRef({});
  useEffect(() => {
    const callback: IntersectionObserverCallback = (headings) => {
      headingElementsRef.current = headings.reduce(
        (map: any, headingElement: IntersectionObserverEntry) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: any[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length >= 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, z) => getIndexFromId(a.target.id) - getIndexFromId(z.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-40px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll(selector));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, setActiveId]);

  return activeId;
};

export default useActiveHeading;
