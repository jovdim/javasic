"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CertificateProps {
  score: number;
  onClose: () => void;
}

export function Certificate({ score, onClose }: CertificateProps) {
  const [name, setName] = useState("");
  const [showCert, setShowCert] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certRef.current) return;

    try {
      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(certRef.current, {
        backgroundColor: "#fef3c7",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });
      const link = document.createElement("a");
      link.download = `javasic-certificate-${name.replace(/\s+/g, "-")}.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading certificate:", error);
      alert("Error downloading certificate. Please try again.");
    }
  };

  if (!showCert) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900/80 backdrop-blur-sm border-4 border-yellow-400 rounded-lg p-8 pixel-corners">
          <h2 className="text-3xl font-black text-yellow-400 text-center mb-6 pixel-text">
            ENTER YOUR NAME
          </h2>
          <p className="text-white text-center mb-6">
            Enter your name to generate your certificate:
          </p>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className="mb-6 text-lg p-6 text-center"
          />
          <div className="flex gap-4">
            <Button
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 pixel-corners"
            >
              CANCEL
            </Button>
            <Button
              onClick={() => name.trim() && setShowCert(true)}
              disabled={!name.trim()}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 pixel-corners disabled:opacity-50"
            >
              GENERATE
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div
          ref={certRef}
          className="bg-yellow-50 p-12 rounded-lg shadow-2xl mb-6"
          style={{
            aspectRatio: "1.414/1",
            backgroundColor: "#fef3c7",
          }}
        >
          <div
            className="h-full flex flex-col items-center justify-center p-12 relative"
            style={{
              border: "8px double #92400e",
              backgroundColor: "#fffbeb",
            }}
          >
            {/* Decorative ornamental corners */}
            <div
              className="absolute top-6 left-6 w-12 h-12"
              style={{
                borderTop: "4px solid #b45309",
                borderLeft: "4px solid #b45309",
              }}
            ></div>
            <div
              className="absolute top-6 right-6 w-12 h-12"
              style={{
                borderTop: "4px solid #b45309",
                borderRight: "4px solid #b45309",
              }}
            ></div>
            <div
              className="absolute bottom-6 left-6 w-12 h-12"
              style={{
                borderBottom: "4px solid #b45309",
                borderLeft: "4px solid #b45309",
              }}
            ></div>
            <div
              className="absolute bottom-6 right-6 w-12 h-12"
              style={{
                borderBottom: "4px solid #b45309",
                borderRight: "4px solid #b45309",
              }}
            ></div>

            {/* Decorative lines */}
            <div
              className="absolute top-16 left-12 right-12 h-1"
              style={{
                background:
                  "linear-gradient(to right, transparent, #b45309, transparent)",
              }}
            ></div>
            <div
              className="absolute bottom-16 left-12 right-12 h-1"
              style={{
                background:
                  "linear-gradient(to right, transparent, #b45309, transparent)",
              }}
            ></div>

            <div className="text-center space-y-6 relative z-10">
              {/* Header */}
              <div className="space-y-3">
                <p
                  className="text-sm font-bold tracking-widest"
                  style={{ color: "#b45309" }}
                >
                  CERTIFICATE OF ACHIEVEMENT
                </p>
                <h1
                  className="text-6xl font-black pixel-text"
                  style={{ color: "#78350f" }}
                >
                  JAVASIC
                </h1>
                <p
                  className="text-xl font-semibold"
                  style={{ color: "#b45309" }}
                >
                  Java Fundamentals Mastery
                </p>
              </div>

              {/* Main content */}
              <div className="py-8 space-y-4">
                <p style={{ color: "#92400e" }} className="text-sm">
                  This is proudly presented to
                </p>
                <p
                  className="text-5xl font-black pixel-text"
                  style={{
                    color: "#78350f",
                    borderBottom: "3px solid #b45309",
                    paddingBottom: "12px",
                  }}
                >
                  {name}
                </p>
                <p style={{ color: "#92400e" }} className="text-sm">
                  For successfully completing the comprehensive
                </p>
                <p className="text-2xl font-bold" style={{ color: "#b45309" }}>
                  Java Fundamentals Course
                </p>
              </div>

              {/* Achievement details */}
              <div
                className="rounded-lg p-4 space-y-2"
                style={{
                  backgroundColor: "#fcd34d",
                  border: "2px solid #b45309",
                }}
              >
                <p style={{ color: "#78350f" }} className="text-sm">
                  Demonstrating mastery with a score of{" "}
                  <span
                    className="font-black text-lg"
                    style={{ color: "#15803d" }}
                  >
                    {score.toFixed(1)}%
                  </span>
                </p>
                <p style={{ color: "#92400e" }} className="text-xs">
                  Completed on{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Signature section */}
              <div className="pt-6 flex justify-center gap-12">
                <div className="text-center">
                  <div
                    className="pt-2 px-8 w-32"
                    style={{
                      borderTop: "2px solid #b45309",
                    }}
                  >
                    <p
                      className="text-xs font-bold"
                      style={{ color: "#78350f" }}
                    >
                      Javasic Team
                    </p>
                    <p style={{ color: "#b45309" }} className="text-xs">
                      Authorized Instructor
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer seal */}
              <div className="pt-4">
                <div
                  className="inline-block rounded-full p-3"
                  style={{
                    border: "2px solid #b45309",
                    backgroundColor: "#fef08a",
                  }}
                >
                  <p
                    className="text-xs font-black text-center"
                    style={{ color: "#78350f" }}
                  >
                    VERIFIED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={onClose}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 pixel-corners"
          >
            CLOSE
          </Button>
          <Button
            onClick={handleDownload}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 pixel-corners"
          >
            📥 DOWNLOAD CERTIFICATE
          </Button>
        </div>
      </div>
    </div>
  );
}
