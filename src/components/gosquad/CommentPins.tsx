import { Fragment } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageSquarePlus,
  Trash2,
  X,
} from "lucide-react";
import type { CommentPin } from "@/features/role-page/hooks/useCommentPins";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export interface CommentPinsProps {
  commentMode: boolean;
  setCommentMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  pins: CommentPin[];
  activePin: number | null;
  setActivePin: (value: number | null | ((prev: number | null) => number | null)) => void;
  listOpen: boolean;
  setListOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  containerW: number;
  storageOn: boolean;
  addPin: (e: React.MouseEvent<HTMLDivElement>) => void;
  updatePinLocal: (id: number, patch: Partial<CommentPin>) => void;
  savePins: () => void;
  deletePin: (id: number) => void;
  clearAll: () => void;
  openPin: (pin: CommentPin) => void;
}

export function CommentPins({
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
}: CommentPinsProps) {
  return (
    <>
      <div
        onClick={addPin}
        className={cn(
          "absolute inset-0 z-40",
          commentMode ? "cursor-crosshair" : "pointer-events-none"
        )}
      />

      <div className="pointer-events-none absolute inset-0 z-41">
        {pins.map((pin, index) => {
          const flip = pin.x > containerW - 280;

          return (
            <Fragment key={pin.id}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePin(activePin === pin.id ? null : pin.id);
                }}
                aria-label={`Comment ${index + 1}`}
                className={cn(
                  "pointer-events-auto absolute flex size-[26px] -translate-x-1/2 -translate-y-full cursor-pointer items-center justify-center rounded-[14px_14px_14px_3px] border-none bg-primary font-mono text-xs font-medium text-primary-foreground shadow-float-md",
                  activePin === pin.id && "outline-2 outline-offset-2 outline-primary"
                )}
                style={{ left: pin.x, top: pin.y }}
              >
                {index + 1}
              </button>

              {activePin === pin.id && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="pointer-events-auto absolute w-[248px] rounded-[14px] border border-border bg-card p-[13px] shadow-float-lg"
                  style={{
                    left: flip ? undefined : pin.x + 16,
                    right: flip ? containerW - pin.x + 16 : undefined,
                    top: pin.y,
                  }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-[7px] text-xs font-semibold text-foreground">
                      <span className="inline-flex size-[18px] items-center justify-center rounded-[10px_10px_10px_2px] bg-primary font-mono text-[10.5px] font-medium text-primary-foreground">
                        {index + 1}
                      </span>
                      Comment
                    </span>
                    <button
                      type="button"
                      onClick={() => deletePin(pin.id)}
                      aria-label="Delete comment"
                      className="flex cursor-pointer border-none bg-transparent p-0.5 text-faint"
                    >
                      <Trash2 className="size-[15px]" strokeWidth={1.5} />
                    </button>
                  </div>
                  <Input
                    value={pin.author}
                    onChange={(e) => updatePinLocal(pin.id, { author: e.target.value })}
                    onBlur={savePins}
                    placeholder="Your name (optional)"
                    className="mb-2"
                  />
                  <Textarea
                    autoFocus
                    value={pin.text}
                    onChange={(e) => updatePinLocal(pin.id, { text: e.target.value })}
                    onBlur={savePins}
                    placeholder="Add a note for the team..."
                    rows={3}
                  />
                  <div className="mt-2 flex justify-end">
                    <Button
                      size="sm"
                      onClick={() => {
                        savePins();
                        setActivePin(null);
                      }}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      {commentMode && (
        <div className="fixed top-4 left-1/2 z-60 inline-flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-primary px-4 py-2 text-[13px] text-primary-foreground shadow-float-md">
          <span className="size-[7px] rounded-full bg-primary-foreground" />
          Comment mode on. Click anywhere to drop a pin.
          <button
            type="button"
            onClick={() => setCommentMode(false)}
            aria-label="Exit comment mode"
            className="ml-1 flex cursor-pointer rounded-[7px] border-none bg-white/15 p-[3px] text-primary-foreground"
          >
            <X className="size-3.5" strokeWidth={2} />
          </button>
        </div>
      )}

      <div className="fixed right-5 bottom-5 z-60 flex flex-col items-end gap-2.5">
        {listOpen && pins.length > 0 && (
          <ScrollArea className="max-h-[280px] w-[280px] rounded-2xl border border-border bg-card p-2 shadow-float-lg">
            <div className="flex items-center justify-between px-2 py-1.5">
              <span className="text-[12.5px] font-semibold text-muted-foreground">
                {pins.length} comment{pins.length > 1 ? "s" : ""}
              </span>
              <button
                type="button"
                onClick={clearAll}
                className="cursor-pointer border-none bg-transparent text-xs font-medium text-caution"
              >
                Clear all
              </button>
            </div>
            {pins.map((pin, index) => (
              <button
                key={pin.id}
                type="button"
                onClick={() => openPin(pin)}
                className="flex w-full cursor-pointer items-start gap-2.5 rounded-[10px] border-none bg-transparent p-2 text-left hover:bg-secondary"
              >
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-[10px_10px_10px_2px] bg-primary font-mono text-[10.5px] font-medium text-primary-foreground">
                  {index + 1}
                </span>
                <span className="flex flex-col gap-0.5">
                  {pin.author ? (
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      {pin.author}
                    </span>
                  ) : null}
                  <span
                    className={cn(
                      "text-[13px] leading-snug",
                      pin.text ? "text-body" : "text-faint italic"
                    )}
                  >
                    {pin.text || "Empty note"}
                  </span>
                </span>
              </button>
            ))}
          </ScrollArea>
        )}

        {commentMode && (
          <div className="max-w-[232px] rounded-[10px] border border-border bg-card px-3 py-[7px] text-right text-[11.5px] leading-snug text-muted-foreground shadow-float-md">
            {storageOn
              ? "Saved in this browser. Persists across refreshes."
              : "Session only. Storage unavailable in this browser."}
          </div>
        )}

        <div className="flex items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-float-md">
          {pins.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setListOpen((value) => !value)}
              aria-label="Toggle comment list"
              className="rounded-full px-2.5 text-[13px] text-muted-foreground"
            >
              <span className="font-mono text-[12.5px]">{pins.length}</span>
              {listOpen ? (
                <ChevronDown className="size-[15px]" strokeWidth={2} />
              ) : (
                <ChevronUp className="size-[15px]" strokeWidth={2} />
              )}
            </Button>
          )}
          <Button
            variant={commentMode ? "default" : "outline"}
            size="sm"
            onClick={() => setCommentMode((value) => !value)}
            aria-pressed={commentMode}
            className={cn(
              "rounded-full px-4 py-2.5",
              !commentMode && "border-border bg-card"
            )}
          >
            <MessageSquarePlus className="size-4" strokeWidth={2} />
            {commentMode ? "Commenting" : "Comment"}
          </Button>
        </div>
      </div>
    </>
  );
}
