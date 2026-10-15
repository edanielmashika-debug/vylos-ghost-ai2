import type { LiveMap, LiveObject, Lson } from "@liveblocks/client";
import type { CanvasNode, CanvasEdge } from "@/types/canvas";

declare global {
  interface Liveblocks {
    Presence: {
      cursor?: { x: number; y: number } | null;
      thinking?: boolean;
    };

    Storage: {
      flow: LiveObject<{
        nodes: LiveMap<string, Lson>;
        edges: LiveMap<string, Lson>;
      }>;
    };

    UserMeta: {
      id: string;
      info: {
        name: string;
        avatar: string;
        color: string;
      };
    };

    RoomEvent: {
      type: "ai-status";
      status: "start" | "thinking" | "complete" | "error";
      message: string;
    };

    ThreadMetadata: {};
    RoomInfo: {};
  }
}

export {};