import { useEffect, useRef, useState } from "react";
import type { MouseEvent, RefObject } from "react";
import { getComments, isStorageAvailable, setComments } from "@/lib/storage";

export interface CommentPin {
  id: number;
  x: number;
  y: number;
  text: string;
  author: string;
}

interface UseCommentPinsOptions {
  containerRef: RefObject<HTMLDivElement | null>;
}

export function useCommentPins({ containerRef }: UseCommentPinsOptions) {
  const [commentMode, setCommentMode] = useState(false);
  const [pins, setPins] = useState<CommentPin[]>([]);
  const [activePin, setActivePin] = useState<number | null>(null);
  const [listOpen, setListOpen] = useState(false);
  const [containerW, setContainerW] = useState(1120);
  const [storageOn, setStorageOn] = useState(false);
  const pinsRef = useRef<CommentPin[]>([]);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerW(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [containerRef]);

  useEffect(() => {
    pinsRef.current = pins;
  }, [pins]);

  const persist = async (next: CommentPin[]) => {
    await setComments(next);
  };

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setStorageOn(isStorageAvailable());
      try {
        const saved = await getComments<CommentPin[]>();
        if (!cancelled && saved) {
          setPins(saved);
        }
      } catch {
        // no comments saved yet
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const addPin = (e: MouseEvent<HTMLDivElement>) => {
    if (!commentMode || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setPins((p) => {
      const next = [...p, { id, x, y, text: "", author: "" }];
      void persist(next);
      return next;
    });
    setActivePin(id);
  };

  const updatePinLocal = (id: number, patch: Partial<CommentPin>) =>
    setPins((p) => p.map((pin) => (pin.id === id ? { ...pin, ...patch } : pin)));

  const savePins = () => {
    void persist(pinsRef.current);
  };

  const deletePin = (id: number) => {
    setPins((p) => {
      const next = p.filter((pin) => pin.id !== id);
      void persist(next);
      return next;
    });
    setActivePin((a) => (a === id ? null : a));
  };

  const clearAll = () => {
    setPins([]);
    void persist([]);
    setActivePin(null);
  };

  const openPin = (pin: CommentPin) => {
    setActivePin(pin.id);
    window.scrollTo({ top: Math.max(pin.y - 140, 0), behavior: "smooth" });
  };

  return {
    commentMode,
    setCommentMode,
    pins,
    activePin,
    setActivePin,
    listOpen,
    setListOpen,
    containerW,
    storageOn,
    addPin,
    updatePinLocal,
    savePins,
    deletePin,
    clearAll,
    openPin,
  };
}
