import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button } from "@mantine/core";

interface CanvasProps {
  containerWidth: number;
  containerHeight: number;
  contentWidth: number;
  contentHeight: number;
}

type Coordinate = {
  x: number;
  y: number;
};

const Canvas = ({
  containerWidth,
  containerHeight,
  contentWidth,
  contentHeight,
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  );

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsPainting(true);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mousedown", startPaint);
    return () => {
      canvas.removeEventListener("mousedown", startPaint);
    };
  }, [startPaint]);

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mousemove", paint);
    return () => {
      canvas.removeEventListener("mousemove", paint);
    };
  }, [paint]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mouseup", exitPaint);
    canvas.addEventListener("mouseleave", exitPaint);
    return () => {
      canvas.removeEventListener("mouseup", exitPaint);
      canvas.removeEventListener("mouseleave", exitPaint);
    };
  }, [exitPaint]);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left + canvas.parentElement!.scrollLeft,
      y: event.clientY - rect.top + canvas.parentElement!.scrollTop,
    };
  };

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (context) {
      context.strokeStyle = "red";
      context.lineJoin = "round";
      context.lineWidth = 5;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <Box
      style={{
        position: "relative",
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
        overflow: "auto", // Enable scrollbars
        border: "1px solid #ccc",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          position: "relative",
          width: `${contentWidth}px`, // Scrollable width
          height: `${contentHeight}px`, // Scrollable height
        }}
      >
        <img
          src="/images/outside-building.jpg"
          alt="3D Floor"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        <canvas
          ref={canvasRef}
          width={contentWidth} // Match canvas size to content
          height={contentHeight}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            background: "transparent",
          }}
        />
      </div>
      <Button
        onClick={resetCanvas}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 3,
        }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Canvas;
