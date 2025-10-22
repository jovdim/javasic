"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Search, X } from "lucide-react";
import { useSound } from "@/hooks/use-sound";

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CheatItem {
  title: string;
  description: string;
  code: string;
}

type Category =
  | "basics"
  | "controlFlow"
  | "loops"
  | "arrays"
  | "methods"
  | "oop";

export function CheatSheetModal({ isOpen, onClose }: CheatSheetModalProps) {
  const { playClick } = useSound();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("basics");

  const cheatSheetData: Record<Category, CheatItem[]> = {
    basics: [
      {
        title: "Hello World",
        description: "The classic first program in Java",
        code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
      },
      {
        title: "Variables",
        description: "Declaring and initializing variables",
        code: 'int age = 25;\nString name = "Java";\ndouble price = 19.99;\nboolean isActive = true;',
      },
      {
        title: "Comments",
        description: "Adding comments to your code",
        code: "// Single line comment\n/* Multi-line\n   comment */\n/** Documentation comment */",
      },
      {
        title: "Data Types",
        description: "Primitive data types in Java",
        code: "byte b = 127;\nshort s = 32000;\nint i = 2147483647;\nlong l = 9223372036854775807L;\nfloat f = 3.14f;\ndouble d = 3.14159;\nchar c = 'A';\nboolean bool = true;",
      },
    ],
    controlFlow: [
      {
        title: "If-Else",
        description: "Conditional statements",
        code: "if (condition) {\n  // code\n} else if (otherCondition) {\n  // code\n} else {\n  // code\n}",
      },
      {
        title: "Switch",
        description: "Multi-way branch statement",
        code: "switch (variable) {\n  case 1:\n    // code\n    break;\n  case 2:\n    // code\n    break;\n  default:\n    // code\n}",
      },
      {
        title: "Ternary Operator",
        description: "Shorthand if-else",
        code: "int result = (condition) ? value1 : value2;",
      },
    ],
    loops: [
      {
        title: "For Loop",
        description: "Iterate a specific number of times",
        code: "for (int i = 0; i < 10; i++) {\n  System.out.println(i);\n}",
      },
      {
        title: "While Loop",
        description: "Loop while condition is true",
        code: "while (condition) {\n  // code\n}",
      },
      {
        title: "Do-While Loop",
        description: "Execute at least once",
        code: "do {\n  // code\n} while (condition);",
      },
      {
        title: "For-Each Loop",
        description: "Iterate through collections",
        code: "for (String item : array) {\n  System.out.println(item);\n}",
      },
      {
        title: "Nested Loops",
        description: "Loop inside another loop",
        code: 'for (int i = 0; i < 3; i++) {\n  for (int j = 0; j < 3; j++) {\n    System.out.println(i + ", " + j);\n  }\n}',
      },
    ],
    arrays: [
      {
        title: "Array Declaration",
        description: "Creating and initializing arrays",
        code: 'int[] numbers = new int[5];\nString[] names = {"Alice", "Bob", "Charlie"};',
      },
      {
        title: "2D Array",
        description: "Multi-dimensional arrays",
        code: "int[][] matrix = new int[3][3];\nmatrix[0][0] = 1;",
      },
      {
        title: "Array Methods",
        description: "Common array operations",
        code: "int length = array.length;\nArrays.sort(array);\nArrays.toString(array);\nArrays.fill(array, value);",
      },
    ],
    methods: [
      {
        title: "Method Declaration",
        description: "Creating methods",
        code: "public static int add(int a, int b) {\n  return a + b;\n}",
      },
      {
        title: "Method Overloading",
        description: "Multiple methods with same name",
        code: "public int add(int a, int b) { return a + b; }\npublic double add(double a, double b) { return a + b; }",
      },
      {
        title: "Void Methods",
        description: "Methods that don't return values",
        code: "public void printMessage(String msg) {\n  System.out.println(msg);\n}",
      },
    ],
    oop: [
      {
        title: "Class Definition",
        description: "Creating a class",
        code: "public class Person {\n  private String name;\n  private int age;\n  \n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  public String getName() {\n    return name;\n  }\n}",
      },
      {
        title: "Inheritance",
        description: "Extending classes",
        code: "public class Student extends Person {\n  private String studentId;\n  \n  public Student(String name, int age, String id) {\n    super(name, age);\n    this.studentId = id;\n  }\n}",
      },
      {
        title: "Interface",
        description: "Defining contracts",
        code: "public interface Drawable {\n  void draw();\n}\n\npublic class Circle implements Drawable {\n  public void draw() {\n    // implementation\n  }\n}",
      },
      {
        title: "Polymorphism",
        description: "Method overriding",
        code: 'public class Animal {\n  public void makeSound() {\n    System.out.println("Some sound");\n  }\n}\n\npublic class Dog extends Animal {\n  @Override\n  public void makeSound() {\n    System.out.println("Woof!");\n  }\n}',
      },
    ],
  };

  const categories: { key: Category; label: string }[] = [
    { key: "basics", label: "Basics" },
    { key: "controlFlow", label: "Control Flow" },
    { key: "loops", label: "Loops" },
    { key: "arrays", label: "Arrays" },
    { key: "methods", label: "Methods" },
    { key: "oop", label: "OOP" },
  ];

  const copyToClipboard = (code: string, title: string) => {
    playClick();

    const fallbackCopy = (text: string) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        return true;
      } catch (err) {
        return false;
      } finally {
        document.body.removeChild(textArea);
      }
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopiedCode(title);
          setTimeout(() => setCopiedCode(null), 2000);
        })
        .catch(() => {
          if (fallbackCopy(code)) {
            setCopiedCode(title);
            setTimeout(() => setCopiedCode(null), 2000);
          } else {
            alert("Failed to copy code. Please select and copy manually.");
          }
        });
    } else {
      if (fallbackCopy(code)) {
        setCopiedCode(title);
        setTimeout(() => setCopiedCode(null), 2000);
      } else {
        alert("Failed to copy code. Please select and copy manually.");
      }
    }
  };
  const filterItems = (items: CheatItem[]) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Get all filtered items for search across all categories
  const getAllFilteredItems = () => {
    return Object.values(cheatSheetData).flatMap(filterItems);
  };

  const isSearching = searchQuery.length > 0;
  const allSearchResults = getAllFilteredItems();
  const currentItems = cheatSheetData[activeCategory];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[95vh] bg-[#020617] border-2 border-yellow-400 shadow-lg mx-2 sm:mx-4">
        <DialogHeader className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
              JAVA CHEAT SHEET
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-300 hover:bg-white rounded-lg click-animation-3d"
            >
              <X className="h-7 w-7 text-bold" />
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search cheat sheet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-12 focus:border-yellow-400 transition-colors"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 sm:h-8 sm:w-8 text-gray-400 hover:text-white"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            )}
          </div>
        </DialogHeader>

        {/* Custom Category Navigation - Much more control! */}
        <div className="w-full mb-4">
          <div className="flex flex-wrap gap-2 bg-white/10 p-2 border border-white/20 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  playClick();
                  setActiveCategory(category.key);
                }}
                className={`px-4 py-2 text-sm rounded-md transition-all cursor-pointer whitespace-nowrap flex-1 min-w-[120px] text-center ${
                  activeCategory === category.key
                    ? "bg-yellow-400 text-black font-bold shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <ScrollArea className="h-[50vh] sm:h-[55vh] pr-2 sm:pr-4">
          {isSearching ? (
            // Search results view
            <div className="space-y-4">
              {allSearchResults.length > 0 ? (
                allSearchResults.map((item, index) => (
                  <CheatItemCard
                    key={`search-${index}`}
                    item={item}
                    copiedCode={copiedCode}
                    onCopy={copyToClipboard}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-white/60 text-sm sm:text-base">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          ) : (
            // Regular category view
            <div className="space-y-4">
              {filterItems(currentItems).map((item, index) => (
                <CheatItemCard
                  key={index}
                  item={item}
                  copiedCode={copiedCode}
                  onCopy={copyToClipboard}
                />
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

interface CheatItemCardProps {
  item: CheatItem;
  copiedCode: string | null;
  onCopy: (code: string, title: string) => void;
}

function CheatItemCard({ item, copiedCode, onCopy }: CheatItemCardProps) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-lg p-4 hover:border-yellow-400/50 transition-all duration-200 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-yellow-400 break-words">
            {item.title}
          </h4>
          <p className="text-sm text-white/70 mt-1">{item.description}</p>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => onCopy(item.code, item.title)}
          className="flex-shrink-0 h-8 w-8 text-white hover:bg-white/20 hover:text-yellow-400 rounded-lg transition-all"
          title="Copy code"
        >
          {copiedCode === item.title ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre className="text-sm font-mono text-green-400 bg-black/30 p-3 rounded border border-green-400/30 overflow-x-auto whitespace-pre-wrap">
        <code>{item.code}</code>
      </pre>
    </div>
  );
}
