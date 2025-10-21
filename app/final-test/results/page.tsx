"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Certificate } from "@/components/certificate";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  Home,
  RotateCcw,
} from "lucide-react";

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<any>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("final-test-results");
    if (!saved) {
      router.push("/final-test");
      return;
    }
    setResults(JSON.parse(saved));
  }, [router]);

  const toggleQuestion = (index: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="text-white text-lg font-semibold">
          Loading results...
        </div>
      </div>
    );
  }

  const { score, correct, total, questions, userAnswers, passed } = results;

  if (showCertificate && passed) {
    return (
      <Certificate score={score} onClose={() => setShowCertificate(false)} />
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-slate-700">
            <div className="text-center">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                  passed
                    ? "bg-gradient-to-br from-emerald-500 to-green-600"
                    : "bg-gradient-to-br from-rose-500 to-red-600"
                }`}
              >
                {passed ? (
                  <CheckCircle2 className="w-10 h-10 text-white" />
                ) : (
                  <XCircle className="w-10 h-10 text-white" />
                )}
              </div>

              <h1 className="text-2xl font-bold text-white mb-3">
                {passed ? "Congratulations!" : "Assessment Complete"}
              </h1>

              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {score.toFixed(1)}%
                  </div>
                  <p className="text-slate-400 text-sm">Score</p>
                </div>

                <div className="h-12 w-px bg-slate-600"></div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {correct}
                    <span className="text-slate-400">/{total}</span>
                  </div>
                  <p className="text-slate-400 text-sm">Correct</p>
                </div>
              </div>

              {passed ? (
                <p className="text-emerald-400 font-semibold text-base">
                  Java fundamentals mastered!
                </p>
              ) : (
                <p className="text-rose-400 font-semibold text-base">
                  {70 - score > 0
                    ? `Need ${(70 - score).toFixed(1)}% more to pass`
                    : "Keep practicing!"}
                </p>
              )}
            </div>
          </div>

          {/* Performance Summary */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-lg font-bold text-cyan-400">{correct}</div>
              <div className="text-slate-400 text-xs mt-1">Correct</div>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-lg font-bold text-rose-400">
                {total - correct}
              </div>
              <div className="text-slate-400 text-xs mt-1">Incorrect</div>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-lg font-bold text-blue-400">
                {Math.round((correct / total) * 100)}%
              </div>
              <div className="text-slate-400 text-xs mt-1">Accuracy</div>
            </div>
          </div>

          {/* Certificate CTA */}
          {passed && (
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">🏆</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-base truncate">
                    Earn Your Certificate
                  </h3>
                  <p className="text-slate-400 text-xs truncate">
                    Download your professional certificate
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setShowCertificate(true)}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl text-base"
              >
                View Certificate
              </Button>
            </div>
          )}

          {/* Detailed Results */}
          <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">
              Detailed Results
            </h2>
            <div className="space-y-3">
              {questions.map((question: any, index: number) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                const isExpanded = expandedQuestions.includes(index);

                return (
                  <div
                    key={index}
                    className="bg-slate-900/50 rounded-xl border border-slate-600 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isCorrect
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-rose-500/20 text-rose-400"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <XCircle className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium text-sm truncate">
                            Q{index + 1}: {question.question.substring(0, 40)}
                            ...
                          </div>
                          <div className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                            <span>Your answer:</span>
                            {userAnswer === -1 ? (
                              <span className="text-rose-400">
                                Not answered
                              </span>
                            ) : (
                              <span
                                className={
                                  isCorrect
                                    ? "text-emerald-400"
                                    : "text-rose-400"
                                }
                              >
                                {String.fromCharCode(65 + userAnswer)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="p-4 border-t border-slate-600 bg-slate-800/30">
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-2">
                              Question:
                            </h4>
                            <p className="text-slate-300 text-sm">
                              {question.question}
                            </p>
                          </div>

                          {!isCorrect && userAnswer !== -1 && (
                            <div>
                              <h4 className="text-rose-400 font-semibold text-sm mb-1">
                                Your Answer:
                              </h4>
                              <p className="text-rose-300 text-sm">
                                {question.options[userAnswer]}
                              </p>
                            </div>
                          )}

                          {!isCorrect && (
                            <div>
                              <h4 className="text-emerald-400 font-semibold text-sm mb-1">
                                Correct Answer:
                              </h4>
                              <p className="text-emerald-300 text-sm">
                                {question.options[question.correctAnswer]}
                              </p>
                            </div>
                          )}

                          {question.explanation && (
                            <div>
                              <h4 className="text-cyan-400 font-semibold text-sm mb-1">
                                Explanation:
                              </h4>
                              <p className="text-slate-300 text-sm">
                                {question.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => router.push("/")}
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 text-base"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
            {!passed && (
              <Button
                onClick={() => {
                  localStorage.removeItem("final-test-results");
                  router.push("/final-test");
                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 text-base"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Test
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
