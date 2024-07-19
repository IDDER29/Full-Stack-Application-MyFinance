import React from "react";

export const Card = ({ children, className }) => (
  <div className={`p-4 bg-white shadow rounded-lg ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

export const CardContent = ({ children, className }) => (
  <div className={`flex-1 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
  <div className={`mt-4 ${className}`}>{children}</div>
);
