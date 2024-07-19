import React from "react";

export const ChartContainer = ({ children, config, className }) => (
  <div className={`relative ${className}`}>{children}</div>
);

export const ChartTooltip = ({ children, content, cursor }) => (
  <div>{content}</div>
);

export const ChartTooltipContent = ({ hideLabel }) => (
  <div>{!hideLabel && "Tooltip Content"}</div>
);
