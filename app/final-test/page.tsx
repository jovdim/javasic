"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/use-progress";
import { lessonContent } from "@/lib/lesson-content";
import { useSound } from "@/hooks/use-sound";
import { Navbar } from "@/components/navbar";

export default function FinalTestPage() {
  const router = useRouter();
  const progress = useProgress();
  const { playClick } = useSound();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [questions, setQuestions] = useState<any[]>([]);

  const totalLessons = 32;
  const allCompleted = progress.completedLessons.length >= totalLessons;

  useEffect(() => {
    console.log(
      "[v0] Final test - completed lessons:",
      progress.completedLessons.length
    );
    console.log("[v0] Final test - all completed:", allCompleted);

    if (!progress.isLoaded) return;

    if (!allCompleted) {
      console.log("[v0] Not all lessons completed, redirecting to home");
      router.push("/");
      return;
    }

    const allQuestions: any[] = [];
    Object.entries(lessonContent).forEach(([key, lesson]) => {
      if (lesson.quiz) {
        allQuestions.push({
          ...lesson.quiz,
          lessonKey: key,
        });
      }
    });

    console.log("[v0] Total questions available:", allQuestions.length);

    // Shuffle and take 20 questions
    const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, 20);
    setQuestions(shuffled);
    setUserAnswers(new Array(20).fill(-1));
  }, [progress.isLoaded, allCompleted, router]);

  useEffect(() => {
    if (!started || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const handleStart = () => {
    playClick();
    setStarted(true);
  };

  const handleAnswer = (answerIndex: number) => {
    playClick();
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (userAnswers[currentQuestion] === -1) {
      alert("Please select an answer before proceeding!");
      return;
    }
    playClick();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    playClick();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (userAnswers.includes(-1)) {
      const unanswered = userAnswers.filter((answer) => answer === -1).length;
      if (
        !confirm(`You have ${unanswered} unanswered questions. Submit anyway?`)
      ) {
        return;
      }
    }
    playClick();
    // Calculate score
    let correct = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) {
        correct++;
      }
    });
    const score = (correct / questions.length) * 100;

    // Save results and redirect
    localStorage.setItem(
      "final-test-results",
      JSON.stringify({
        score,
        correct,
        total: questions.length,
        questions,
        userAnswers,
        passed: score >= 70,
      })
    );
    router.push("/final-test/results");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!progress.isLoaded) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-white text-2xl font-bold pixel-text animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  if (allCompleted && questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#020617] to-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl font-bold pixel-text animate-pulse">
          Preparing your test...
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 pt-20">
          <div className="max-w-2xl w-full bg-slate-800/90 backdrop-blur-sm border-2 border-cyan-400 rounded-xl p-8 shadow-2xl shadow-cyan-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-3 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <h1 className="text-5xl font-black bg-red-700  bg-clip-text text-transparent pixel-text">
                  FINAL BOSS BATTLE
                </h1>
                <div className="w-3 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-cyan-300 font-bold text-lg mb-2 tracking-wide">
                PROVE YOUR JAVA MASTERY
              </p>
            </div>

            <div className="space-y-6 text-white mb-8">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-slate-900 px-6 py-3 rounded-full font-black text-xl mb-4 shadow-lg">
                  CONGRATULATIONS, CODER!
                </div>
                <p className="text-lg text-slate-300">
                  You've conquered all lessons. Now face the ultimate challenge!
                </p>
              </div>

              <div className="bg-slate-900/80 border-2 border-cyan-500/50 rounded-xl p-6 space-y-4 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-6 bg-cyan-400 rounded-full"></div>
                  <h3 className="text-xl font-black text-cyan-400">
                    MISSION BRIEFING
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-black text-slate-900 text-sm">
                      20
                    </div>
                    <span className="font-semibold">Questions Total</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center font-black text-white text-sm">
                      30
                    </div>
                    <span className="font-semibold">Minutes Time Limit</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-black text-white text-sm">
                      70%
                    </div>
                    <span className="font-semibold">Passing Score</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-black text-white text-sm">
                      ★
                    </div>
                    <span className="font-semibold">Certificate Reward</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-cyan-300 font-bold text-lg">
                Ready to claim your place among Java masters?
              </p>
            </div>

            <Button
              onClick={handleStart}
              className="click-animation-3d w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl border-0 shadow-lg shadow-green-500/25 text-xl"
            >
              ACCEPT CHALLENGE
            </Button>
          </div>
        </div>
      </>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-[#020617]">
        <div className="text-white text-xl font-bold">
          Loading Battle Arena...
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  const answeredCount = userAnswers.filter((a) => a !== -1).length;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#020617] p-4 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header Stats */}
          <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-cyan-500/50 rounded-xl p-4 mb-6 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 px-3 py-1 rounded-lg border border-cyan-500/30">
                  <span className="text-cyan-400 font-bold text-sm">
                    Q{currentQuestion + 1}/{questions.length}
                  </span>
                </div>
                <div className="bg-purple-500/20 px-3 py-1 rounded-lg border border-purple-500/30">
                  <span className="text-purple-400 font-bold text-sm">
                    {answeredCount}/{questions.length} Answered
                  </span>
                </div>
              </div>

              <div
                className={`px-4 py-2 rounded-lg border-2 font-mono font-black text-lg ${
                  timeLeft < 300
                    ? "bg-red-500/20 border-red-500 text-red-400 animate-pulse"
                    : timeLeft < 600
                    ? "bg-yellow-500/20 border-yellow-500 text-yellow-400"
                    : "bg-green-500/20 border-green-500 text-green-400"
                }`}
              >
                ⏱ {formatTime(timeLeft)}
              </div>
            </div>

            <div className="space-y-2">
              <Progress value={progressPercent} className="h-3 bg-slate-700" />
              <div className="flex justify-between text-xs text-slate-400">
                <span>Progress</span>
                <span className="font-bold text-cyan-400">
                  {progressPercent.toFixed(0)}% Complete
                </span>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-slate-800 border-2 border-cyan-500/30 rounded-xl p-1 mb-6 shadow-xl">
            <div className="bg-slate-800/90 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-8 bg-cyan-400 rounded-full"></div>
                <h2 className="text-2xl font-black text-white leading-relaxed">
                  {question.question}
                </h2>
              </div>

              <div className="space-y-3">
                {question.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group ${
                      userAnswers[currentQuestion] === index
                        ? "bg-gradient-to-r from-cyan-500 to-cyan-600 border-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/25 transform scale-102"
                        : "bg-slate-900/80 border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:transform hover:scale-101 cursor-pointer"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-black border-2 ${
                          userAnswers[currentQuestion] === index
                            ? "bg-white border-white text-cyan-600"
                            : "bg-slate-800 border-slate-600 text-slate-400 group-hover:border-cyan-400"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-lg font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-xl border-2 border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all click-animation-3d"
            >
              ← Previous
            </Button>

            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 font-bold py-4 rounded-xl border-0 transform hover:scale-105 transition-all shadow-lg shadow-green-500/25 click-animation-3d "
              >
                SUBMIT TEST
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={userAnswers[currentQuestion] === -1}
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl border-0 transform hover:scale-105 transition-all disabled:opacity-50 disabled:transform-none shadow-lg shadow-cyan-500/25 click-animation-3d"
              >
                Next Question →
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
