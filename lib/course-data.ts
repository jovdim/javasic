export interface Lesson {
  id: number;
  title: string;
  slug: string;
  xp: number;
  description?: string;
  topics?: string[];
  questions?: any[];
}

export const courseData = [
  {
    id: 1,
    title: "Hello World",
    description: "Learn the basics of Java and write your first program!",
    icon: "👋",
    lessons: [
      {
        id: 1,
        title: "Introduction to Java",
        slug: "introduction",
        xp: 10,
        description:
          "Discover what Java is, why it's popular, and where it's used in the real world.",
        topics: [
          "What is Java?",
          "Java's history",
          "Why learn Java?",
          "Java applications",
        ],
      },
      {
        id: 2,
        title: "Hello World Program",
        slug: "hello-world",
        xp: 10,
        description:
          "Write your very first Java program and understand its structure.",
        topics: [
          "Program structure",
          "Main method",
          "Print statements",
          "Running Java code",
        ],
      },
      {
        id: 3,
        title: "Comments in Java",
        slug: "comments",
        xp: 10,
        description:
          "Learn how to document your code with single-line and multi-line comments.",
        topics: [
          "Single-line comments",
          "Multi-line comments",
          "Documentation comments",
          "Best practices",
        ],
      },
      {
        id: 4,
        title: "Print Statements",
        slug: "print-statements",
        xp: 10,
        description: "Master different ways to output text to the console.",
        topics: [
          "System.out.print",
          "System.out.println",
          "Escape sequences",
          "Formatting output",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Variables",
    description: "Store and manipulate data with variables",
    icon: "📦",
    lessons: [
      {
        id: 5,
        title: "What are Variables?",
        slug: "what-are-variables",
        xp: 10,
        description:
          "Understand variables as containers for storing data values.",
        topics: [
          "Variable concept",
          "Memory storage",
          "Naming rules",
          "Variable scope",
        ],
      },
      {
        id: 6,
        title: "Data Types",
        slug: "data-types",
        xp: 10,
        description:
          "Explore primitive data types like int, double, boolean, and char.",
        topics: [
          "int, double, boolean",
          "char and String",
          "Type sizes",
          "Choosing types",
        ],
      },
      {
        id: 7,
        title: "Variable Declaration",
        slug: "variable-declaration",
        xp: 10,
        description:
          "Learn how to declare, initialize, and assign values to variables.",
        topics: [
          "Declaration syntax",
          "Initialization",
          "Assignment",
          "Constants with final",
        ],
      },
      {
        id: 8,
        title: "String Operations",
        slug: "string-operations",
        xp: 10,
        description: "Work with text using String methods and concatenation.",
        topics: [
          "String concatenation",
          "length() method",
          "charAt() method",
          "Common String methods",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Control Flow",
    description: "Make decisions with if statements and switches",
    icon: "🔀",
    lessons: [
      {
        id: 9,
        title: "If Statements",
        slug: "if-statements",
        xp: 10,
        description: "Make decisions in your code based on conditions.",
        topics: [
          "if syntax",
          "Boolean conditions",
          "Code blocks",
          "Conditional execution",
        ],
      },
      {
        id: 10,
        title: "Else and Else If",
        slug: "else-if",
        xp: 10,
        description:
          "Handle multiple conditions with else and else if statements.",
        topics: [
          "else clause",
          "else if chains",
          "Multiple conditions",
          "Decision trees",
        ],
      },
      {
        id: 11,
        title: "Switch Statements",
        slug: "switch-case",
        xp: 10,
        description: "Use switch statements for cleaner multi-way branching.",
        topics: [
          "switch syntax",
          "case labels",
          "break statement",
          "default case",
        ],
      },
      {
        id: 12,
        title: "Comparison Operators",
        slug: "comparison-operators",
        xp: 10,
        description: "Compare values using ==, !=, <, >, <=, and >= operators.",
        topics: [
          "Equality operators",
          "Relational operators",
          "Comparing numbers",
          "Comparing Strings",
        ],
      },
      {
        id: 13,
        title: "Logical Operators",
        slug: "logical-operators",
        xp: 10,
        description: "Combine conditions with AND, OR, and NOT operators.",
        topics: [
          "&& (AND) operator",
          "|| (OR) operator",
          "! (NOT) operator",
          "Complex conditions",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Loops",
    description: "Repeat code efficiently with loops",
    icon: "🔁",
    lessons: [
      {
        id: 14,
        title: "For Loops",
        slug: "for-loop",
        xp: 10,
        description: "Repeat code a specific number of times with for loops.",
        topics: [
          "for loop syntax",
          "Loop counter",
          "Iteration",
          "Loop patterns",
        ],
      },
      {
        id: 15,
        title: "While Loops",
        slug: "while-loop",
        xp: 10,
        description: "Execute code repeatedly while a condition is true.",
        topics: [
          "while syntax",
          "Loop conditions",
          "Infinite loops",
          "Loop control",
        ],
      },
      {
        id: 16,
        title: "Do-While Loops",
        slug: "do-while",
        xp: 10,
        description: "Ensure code runs at least once with do-while loops.",
        topics: [
          "do-while syntax",
          "Post-test loops",
          "Use cases",
          "Comparison with while",
        ],
      },
      {
        id: 17,
        title: "Nested Loops",
        slug: "nested-loops",
        xp: 15,
        description:
          "Use loops inside loops to work with multi-dimensional data.",
        topics: [
          "Nested loop concept",
          "2D patterns",
          "Performance considerations",
          "Common patterns",
        ],
      },
      {
        id: 18,
        title: "Break and Continue",
        slug: "break-continue",
        xp: 10,
        description:
          "Control loop execution with break and continue statements.",
        topics: [
          "break statement",
          "continue statement",
          "Loop control flow",
          "Best practices",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Arrays",
    description: "Work with collections of data",
    icon: "📊",
    lessons: [
      {
        id: 19,
        title: "Array Basics",
        slug: "array-basics",
        xp: 10,
        description: "Store multiple values in a single variable using arrays.",
        topics: [
          "Array declaration",
          "Array initialization",
          "Accessing elements",
          "Array length",
        ],
      },
      {
        id: 20,
        title: "Array Iteration",
        slug: "array-iteration",
        xp: 10,
        description:
          "Loop through arrays using for loops and enhanced for loops.",
        topics: [
          "for loop with arrays",
          "Enhanced for loop",
          "Array traversal",
          "Common patterns",
        ],
      },
      {
        id: 21,
        title: "Multi-dimensional Arrays",
        slug: "multi-arrays",
        xp: 15,
        description:
          "Work with 2D arrays and matrices for complex data structures.",
        topics: [
          "2D array syntax",
          "Nested arrays",
          "Matrix operations",
          "Accessing 2D elements",
        ],
      },
      {
        id: 22,
        title: "Array Algorithms",
        slug: "array-algorithms",
        xp: 15,
        description:
          "Implement common array algorithms like searching and sorting.",
        topics: [
          "Linear search",
          "Finding min/max",
          "Reversing arrays",
          "Basic sorting",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Methods",
    description: "Create reusable blocks of code",
    icon: "⚙️",
    lessons: [
      {
        id: 23,
        title: "Method Basics",
        slug: "method-basics",
        xp: 10,
        description: "Define and call methods to organize your code.",
        topics: [
          "Method syntax",
          "Calling methods",
          "Method structure",
          "Why use methods?",
        ],
      },
      {
        id: 24,
        title: "Parameters and Arguments",
        slug: "parameters",
        xp: 10,
        description: "Pass data to methods using parameters and arguments.",
        topics: [
          "Parameters vs arguments",
          "Multiple parameters",
          "Parameter types",
          "Passing values",
        ],
      },
      {
        id: 25,
        title: "Return Values",
        slug: "return-values",
        xp: 10,
        description: "Return data from methods to the caller.",
        topics: [
          "return statement",
          "Return types",
          "void methods",
          "Using return values",
        ],
      },
      {
        id: 26,
        title: "Method Overloading",
        slug: "method-overloading",
        xp: 15,
        description:
          "Create multiple methods with the same name but different parameters.",
        topics: [
          "Overloading concept",
          "Different signatures",
          "Compile-time polymorphism",
          "Use cases",
        ],
      },
      {
        id: 27,
        title: "Recursion",
        slug: "recursion",
        xp: 20,
        description: "Solve problems by having methods call themselves.",
        topics: [
          "Recursive concept",
          "Base case",
          "Recursive case",
          "Common recursive problems",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Classes & Objects",
    description: "Master object-oriented programming basics",
    icon: "🎯",
    lessons: [
      {
        id: 28,
        title: "Class Basics",
        slug: "class-basics",
        xp: 10,
        description: "Create blueprints for objects using classes.",
        topics: [
          "Class definition",
          "Fields and methods",
          "Creating objects",
          "Object references",
        ],
      },
      {
        id: 29,
        title: "Constructors",
        slug: "constructors",
        xp: 10,
        description: "Initialize objects with constructors.",
        topics: [
          "Constructor syntax",
          "Default constructor",
          "Parameterized constructors",
          "this keyword",
        ],
      },
      {
        id: 30,
        title: "Encapsulation",
        slug: "encapsulation",
        xp: 15,
        description: "Protect data with private fields and public methods.",
        topics: [
          "Access modifiers",
          "Getters and setters",
          "Data hiding",
          "Encapsulation benefits",
        ],
      },
      {
        id: 31,
        title: "Inheritance",
        slug: "inheritance",
        xp: 15,
        description: "Create new classes based on existing ones.",
        topics: [
          "extends keyword",
          "Parent and child classes",
          "Method inheritance",
          "super keyword",
        ],
      },
      {
        id: 32,
        title: "Polymorphism",
        slug: "polymorphism",
        xp: 20,
        description:
          "Use objects of different types through a common interface.",
        topics: [
          "Method overriding",
          "Runtime polymorphism",
          "Dynamic binding",
          "Polymorphic behavior",
        ],
      },
    ],
  },
];
