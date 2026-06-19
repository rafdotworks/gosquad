import { Play } from "lucide-react";
import type { HiringManagerVideo } from "@/features/role-brief/data/role-brief.data";
import { cn } from "@/lib/utils";

interface HmVideoEmbedProps {
  video: HiringManagerVideo;
  className?: string;
}

function getEmbedUrl(video: HiringManagerVideo): string | null {
  if (!video.url) return null;

  const { url, provider } = video;

  if (provider === "native") return url;

  if (provider === "loom") {
    const match = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
    if (match) return `https://www.loom.com/embed/${match[1]}`;
    return url.includes("/embed/") ? url : null;
  }

  if (provider === "youtube") {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
    );
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url.includes("/embed/") ? url : null;
  }

  if (provider === "vimeo") {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (match) return `https://player.vimeo.com/video/${match[1]}`;
    return url.includes("player.vimeo.com") ? url : null;
  }

  return url;
}

export function HmVideoEmbed({ video, className }: HmVideoEmbedProps) {
  const embedUrl = getEmbedUrl(video);
  const initials = video.speaker
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (embedUrl && video.provider === "native") {
    return (
      <div className={cn("relative aspect-video overflow-hidden rounded-[20px] border border-border", className)}>
        <video
          className="size-full object-cover"
          controls
          poster={video.thumbnailUrl}
          src={embedUrl}
        >
          <track kind="captions" />
        </video>
      </div>
    );
  }

  if (embedUrl) {
    return (
      <div className={cn("relative aspect-video overflow-hidden rounded-[20px] border border-border", className)}>
        <iframe
          src={embedUrl}
          title={video.title}
          className="size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-[20px] border border-border bg-gradient-to-br from-secondary to-background",
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-16 items-center justify-center rounded-full border border-border bg-card shadow-float-md">
          <Play
            className="ml-[3px] size-[23px] fill-foreground text-foreground"
            strokeWidth={2}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[rgba(22,21,15,0.55)] to-transparent px-4 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex size-[30px] items-center justify-center rounded-full bg-card text-xs font-semibold text-body">
            {initials}
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-white">{video.title}</div>
            <div className="text-xs text-white/85">{video.speaker}</div>
          </div>
        </div>
        {video.duration ? (
          <span className="rounded-md bg-black/40 px-2 py-[3px] font-mono text-[11.5px] font-medium text-white">
            {video.duration}
          </span>
        ) : null}
      </div>
    </div>
  );
}
