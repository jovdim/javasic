"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Sparkles,
  Lightbulb,
  Flame,
  RotateCcw,
  Heart,
  Target,
  CircleX,
  House,
} from "lucide-react";
import { useProgress } from "@/hooks/use-progress";
import { useSound } from "@/hooks/use-sound";
import { courseData } from "@/lib/course-data";
import { lessonContent } from "@/lib/lesson-content";
import { TypewriterText } from "@/components/typewriter-text";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LessonPageProps {
  moduleId: number;
  slug: string;
}

export function LessonPage({ moduleId, slug }: LessonPageProps) {
  const router = useRouter();
  const {
    completeLesson,
    completedLessons,
    xp,
    level,
    energy,
    loseEnergy,
    energyRegenTime,
  } = useProgress();
  const {
    playClick,
    playCorrect,
    playWrong,

    playToggleHint,
    playSelect,
  } = useSound();

  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [previousLevel, setPreviousLevel] = useState(level);
  const [combo, setCombo] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [quizProgress, setQuizProgress] = useState(0);
  const [showEnergyLoss, setShowEnergyLoss] = useState(false);

  const module = courseData.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.slug === slug);
  const content = lessonContent[`${moduleId}-${slug}`];

  const currentLessonIndex =
    module?.lessons.findIndex((l) => l.slug === slug) ?? -1;
  const nextLesson = module?.lessons[currentLessonIndex + 1];
  const previousLesson =
    currentLessonIndex > 0 ? module?.lessons[currentLessonIndex - 1] : null;

  useEffect(() => {
    if (lesson) {
      setHasCompleted(completedLessons.includes(lesson.id));
    }
  }, [lesson, completedLessons]);

  useEffect(() => {
    if (level > previousLevel) {
      setPreviousLevel(level);
    }
  }, [level, previousLevel]);

  if (!module || !lesson || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <Card className="p-8 text-center border-4 border-red-500 pixel-card bg-black/60">
          <h1 className="text-2xl font-bold pixel-text mb-4 text-red-400">
            LESSON NOT FOUND
          </h1>
          <Link href="/">
            <Button
              className="retro-button pixel-text bg-yellow-400 text-black"
              onClick={playClick}
            >
              RETURN HOME
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const handleRetakeLesson = () => {
    playClick();
    setShowQuiz(true); // Start quiz immediately
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowTypewriter(false); // Skip typewriter on retake
    setShowHint(false);
    setQuizProgress(0);
    setCombo(0);
  };

  const handleStartQuiz = () => {
    playClick();
    setShowQuiz(true);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowTypewriter(true);
    setShowHint(false);
    setQuizProgress(0);
  };

  const handleAnswerSelect = (index: number) => {
    if (isCorrect !== null) return;
    playSelect();
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    const correct = selectedAnswer === content.quiz.correctAnswer;
    setIsCorrect(correct);
    setQuizProgress(100);

    if (correct) {
      playCorrect();
      const newCombo = combo + 1;
      setCombo(newCombo);

      if (!hasCompleted) {
        const earnedXP = lesson.xp || 10;
        const bonusXP = newCombo > 1 ? newCombo * 2 : 0;

        completeLesson(lesson.id);
        setHasCompleted(true);
      }
    } else {
      playWrong();
      setCombo(0);
      loseEnergy(1);
    }
  };

  const handleNext = () => {
    playClick();
    if (nextLesson) {
      router.push(`/lesson/${moduleId}/${nextLesson.slug}`);
      setShowQuiz(false);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowTypewriter(true);
      setShowHint(false);
      setQuizProgress(0);
    } else {
      router.push("/");
    }
  };

  const handlePrevious = () => {
    playClick();
    if (previousLesson) {
      router.push(`/lesson/${moduleId}/${previousLesson.slug}`);
      setShowQuiz(false);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowTypewriter(true);
      setShowHint(false);
      setQuizProgress(0);
    }
  };

  const toggleHint = () => {
    playToggleHint();
    setShowHint(!showHint);
  };

  const progressPercentage =
    ((currentLessonIndex + 1) / module.lessons.length) * 100;
  const getProgressColor = () => {
    if (progressPercentage < 33) return "bg-red-400";
    if (progressPercentage < 66) return "bg-yellow-400";
    return "bg-green-400";
  };

  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Header */}
      <div className="border-b-4 border-yellow-400 bg-black/60 backdrop-blur sticky top-0 z-10 shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between mb-2">
            <Button
              variant="ghost"
              size="sm"
              className=" pixel-text hover:bg-yellow-400/20 transition-colors border-2 border-yellow-400/50 text-yellow-400 cursor-pointer hover:text-white "
              onClick={() => {
                playClick?.();
                router.back(); // 👈 this goes to the previous page
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">BACK</span>
            </Button>
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold pixel-text">
              <div
                className={`flex flex-col items-center gap-1 text-red-400 ${
                  showEnergyLoss ? "animate-shake" : ""
                }`}
              >
                <div className="flex items-center gap-1">
                  <Heart
                    className={`w-4 h-4 ${energy > 0 ? "fill-red-400" : ""}`}
                  />
                  <span>{energy}/10</span>
                </div>
                {energy < 10 && energyRegenTime && (
                  <span className="text-[10px] text-red-300">
                    +1 in {energyRegenTime}s
                  </span>
                )}
              </div>
              <span className="text-white">•</span>
              {combo > 1 && (
                <div className="flex items-center gap-1 text-orange-400 animate-pulse">
                  <Flame className="w-4 h-4" />
                  <span>{combo}x COMBO!</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-yellow-400">
                <Trophy className="w-4 h-4" />
                <span>LVL {level}</span>
              </div>
              <span className="text-white">•</span>
              <span className="text-cyan-400">{xp} XP</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs md:text-sm">
              <span className="font-bold pixel-text text-yellow-400">
                {module.title}
              </span>
              <span className="text-white pixel-text">
                {currentLessonIndex + 1}/{module.lessons.length}
              </span>
            </div>
            <div className="relative">
              <Progress
                value={progressPercentage}
                className="h-3 bg-black/60 border-2 border-yellow-400/50"
              />
              <div
                className={`absolute inset-0 ${getProgressColor()} transition-all duration-500 ease-out rounded-full`}
                style={{ width: `${progressPercentage}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold pixel-text text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] z-10">
                {Math.round(progressPercentage)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        {!showQuiz ? (
          <Card className="p-6 md:p-8 border-4 border-cyan-400 pixel-card hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all bg-indigo-950  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-6">
              <h1 className="text-2xl md:text-4xl font-bold pixel-text mb-2 text-yellow-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                {showTypewriter ? (
                  <TypewriterText
                    text={lesson.title}
                    speed={50}
                    onComplete={() => setShowTypewriter(false)}
                  />
                ) : (
                  lesson.title
                )}
              </h1>
              <p className="text-sm md:text-base text-cyan-300 pixel-text font-bold">
                {module.title} • Lesson {currentLessonIndex + 1}
              </p>
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                {content.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-white/90 bg-black/30 p-4 rounded border-2 border-white/20"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {content.codeExample && (
                <div className="my-6 bg-black/60 border-4 border-green-400 rounded p-4 overflow-x-auto hover:border-green-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <pre className="text-xs md:text-sm font-mono text-green-400">
                    <code>{content.codeExample}</code>
                  </pre>
                </div>
              )}

              {content.keyPoints && (
                <div className="my-6 bg-[#16476A] border-4 border-yellow-400 rounded p-4 hover:from-pink-900/60 hover:to-purple-900/60 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-base md:text-lg font-bold pixel-text mb-3 flex items-center gap-2 text-yellow-400">
                    <Sparkles className="w-5 h-5" />
                    KEY POINTS:
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    {content.keyPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-white"
                      >
                        <span className="text-yellow-400 mt-1 font-bold">
                          ▸
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {previousLesson &&
                completedLessons.includes(previousLesson.id) && (
                  <Button
                    onClick={handlePrevious}
                    size="lg"
                    variant="outline"
                    className="flex-1 border-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 retro-button pixel-text text-sm md:text-base bg-transparent cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    PREVIOUS
                  </Button>
                )}
              {hasCompleted ? (
                <Button
                  onClick={handleRetakeLesson}
                  size="lg"
                  disabled={energy === 0}
                  className="flex-1 bg-purple-400 text-black hover:bg-purple-300 retro-button pixel-text text-sm md:text-base hover:scale-105 transition-transform border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0pwerx_0pwerx_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />

                  {energy === 0 ? "NOT ENOUGH ENERGY" : "RETAKE QUIZ "}
                </Button>
              ) : (
                <Button
                  onClick={handleStartQuiz}
                  size="lg"
                  disabled={energy === 0}
                  className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300 retro-button pixel-text text-sm md:text-base hover:scale-105 transition-transform border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {energy === 0 ? "NOT ENOUGH ENERGY" : "TAKE THE QUIZ "}
                </Button>
              )}
            </div>
          </Card>
        ) : (
          <Card className="p-6 md:p-8 border-4 border-orange-400 pixel-card hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all bg-gradient-to-br from-orange-950 to-red-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl md:text-3xl font-bold pixel-text text-orange-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                  QUIZ TIME!
                  <Target className="inline-block w-6 h-6 text-orange-400 -mt-2" />
                </h2>
                <div className="text-right">
                  <p className="text-xs text-orange-300 pixel-text font-bold">
                    PROGRESS
                  </p>
                  <p className="text-lg font-bold text-orange-400 pixel-text">
                    {quizProgress}%
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-orange-300 pixel-text font-bold">
                Test your knowledge
              </p>
              <div className="mt-3 h-2 bg-black/60 rounded-full overflow-hidden border-2 border-orange-400/50">
                <div
                  className="h-full bg-orange-400 transition-all duration-500 ease-out"
                  style={{ width: `${quizProgress}%` }}
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-base md:text-lg font-medium mb-4 text-white bg-gradient-to-r from-black/60 to-black/40 p-4 rounded border-2 border-white/30">
                {content.quiz.question}
              </p>

              {content.quiz.hint && (
                <Button
                  onClick={toggleHint}
                  variant="outline"
                  size="sm"
                  className="mb-4 pixel-text text-xs border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/20 bg-transparent"
                >
                  <Lightbulb className="w-4 h-4 mr-1" />
                  {showHint ? "HIDE HINT" : "SHOW HINT"}
                </Button>
              )}

              {showHint && content.quiz.hint && (
                <div className="mb-4 p-3 bg-yellow-400/20 border-2 border-yellow-400 rounded text-sm text-yellow-100 animate-in slide-in-from-top duration-300">
                  {content.quiz.hint}
                </div>
              )}

              <div className="space-y-3">
                {content.quiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isCorrect !== null}
                    className={`w-full p-3 md:p-4 text-left rounded border-4 transition-all text-sm md:text-base font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] ${
                      selectedAnswer === index
                        ? isCorrect === null
                          ? "border-cyan-400 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 scale-105"
                          : isCorrect
                          ? "border-green-400 bg-gradient-to-r from-green-400/30 to-emerald-400/30 scale-105 animate-pulse"
                          : "border-red-400 bg-gradient-to-r from-red-400/30 to-pink-400/30 scale-95 animate-shake"
                        : isCorrect !== null &&
                          index === content.quiz.correctAnswer
                        ? "border-green-400 bg-gradient-to-r from-green-400/30 to-emerald-400/30"
                        : "border-white/30 bg-gradient-to-r from-black/40 to-black/30 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:border-cyan-400/70"
                    } ${
                      isCorrect !== null
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    <span className="font-bold mr-2 text-yellow-400 pixel-text">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-white">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {isCorrect === null ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                size="lg"
                className="w-full bg-cyan-400 text-black hover:bg-cyan-300 retro-button pixel-text text-sm md:text-base disabled:opacity-50 hover:scale-105 transition-transform border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
              >
                SUBMIT ANSWER
              </Button>
            ) : (
              <div className="space-y-4">
                <div
                  className={`p-4 rounded border-4 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    isCorrect
                      ? "border-green-400 bg-green-400/20 animate-pulse"
                      : "border-red-400 bg-red-400/20 animate-shake"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-400 animate-bounce" />
                        <span className="font-bold pixel-text text-green-400 text-sm md:text-base">
                          CORRECT!
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl animate-bounce">
                          <CircleX className="w-5 h-5 text-red-400" />
                        </span>
                        <span className="font-bold pixel-text text-red-400 text-sm md:text-base">
                          INCORRECT
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-white">
                    {content.quiz.explanation}
                  </p>
                  {isCorrect && !completedLessons.includes(lesson.id) && (
                    <div className="mt-3 flex items-center gap-2 text-yellow-400 animate-bounce">
                      <Trophy className="w-4 h-4" />
                      <span className="text-xs md:text-sm font-bold pixel-text">
                        +{lesson.xp || 10} XP EARNED!{" "}
                        {combo > 1 && `(${combo}x COMBO!)`}
                      </span>
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleNext}
                  size="lg"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300 retro-button pixel-text text-sm md:text-base hover:scale-105 transition-transform border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
                >
                  {nextLesson ? (
                    <>
                      NEXT LESSON
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    <>
                      BACK TO HOME
                      <House className="w-4 h-4 " />
                    </>
                  )}
                </Button>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
