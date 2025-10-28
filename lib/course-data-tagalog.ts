import {
  Bolt,
  ChartScatter,
  Hand,
  Infinity as InfinityIcon,
  Repeat2,
  SquareMousePointer,
  Target,
} from "lucide-react";

export interface Lesson {
  id: number;
  title: string;
  slug: string;
  xp: number;
  description?: string;
  topics?: string[];
  questions?: any[];
}

export const courseDataTagalog = [
  {
    id: 1,
    title: "Hello World",
    description:
      "Matutunan ang mga basic ng Java at isulat ang iyong unang program!",
    icon: Hand,
    lessons: [
      {
        id: 1,
        title: "Pagpapakilala sa Java",
        slug: "introduction",
        xp: 10,
        description:
          "Alamin kung ano ang Java, bakit ito sikat, at saan ito ginagamit sa totoong buhay.",
        topics: [
          "Ano ang Java?",
          "Kasaysayan ng Java",
          "Bakit aralin ang Java?",
          "Mga aplikasyon ng Java",
        ],
      },
      {
        id: 2,
        title: "Hello World Program",
        slug: "hello-world",
        xp: 10,
        description:
          "Isulat ang iyong pinakaunang Java program at unawain ang structure nito.",
        topics: [
          "Structure ng program",
          "Main method",
          "Print statements",
          "Pagpapatakbo ng Java code",
        ],
      },
      {
        id: 3,
        title: "Comments sa Java",
        slug: "comments",
        xp: 10,
        description:
          "Matutunan kung paano idocument ang iyong code gamit ang single-line at multi-line comments.",
        topics: [
          "Single-line comments",
          "Multi-line comments",
          "Documentation comments",
          "Mga best practices",
        ],
      },
      {
        id: 4,
        title: "Print Statements",
        slug: "print-statements",
        xp: 10,
        description:
          "Masterin ang iba't ibang paraan ng pagpapakita ng text sa console.",
        topics: [
          "System.out.print",
          "System.out.println",
          "Escape sequences",
          "Pagfo-format ng output",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Variables",
    description: "Mag-store at mag-manipula ng data gamit ang variables",
    icon: SquareMousePointer,
    lessons: [
      {
        id: 5,
        title: "Ano ang Variables?",
        slug: "what-are-variables",
        xp: 10,
        description:
          "Unawain ang variables bilang mga lalagyan para sa data values.",
        topics: [
          "Konsepto ng variable",
          "Memory storage",
          "Mga patakaran sa pagpapangalan",
          "Sakop ng variable",
        ],
      },
      {
        id: 6,
        title: "Data Types",
        slug: "data-types",
        xp: 10,
        description:
          "Tuklasin ang primitive data types tulad ng int, double, boolean, at char.",
        topics: [
          "int, double, boolean",
          "char at String",
          "Laki ng bawat type",
          "Pagpili ng tamang type",
        ],
      },
      {
        id: 7,
        title: "Pagde-declare ng Variable",
        slug: "variable-declaration",
        xp: 10,
        description:
          "Matutunan kung paano i-declare, i-initialize, at magbigay ng value sa variables.",
        topics: [
          "Syntax ng declaration",
          "Initialization",
          "Assignment",
          "Constants gamit ang final",
        ],
      },
      {
        id: 8,
        title: "String Operations",
        slug: "string-operations",
        xp: 10,
        description:
          "Gumawa gamit ang text gamit ang String methods at concatenation.",
        topics: [
          "String concatenation",
          "length() method",
          "charAt() method",
          "Karaniwang String methods",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Control Flow",
    description: "Gumawa ng decisions gamit ang if statements at switches",
    icon: Repeat2,
    lessons: [
      {
        id: 9,
        title: "If Statements",
        slug: "if-statements",
        xp: 10,
        description:
          "Gumawa ng decisions sa iyong code base sa mga conditions.",
        topics: [
          "Syntax ng if",
          "Boolean conditions",
          "Code blocks",
          "Conditional execution",
        ],
      },
      {
        id: 10,
        title: "Else at Else If",
        slug: "else-if",
        xp: 10,
        description:
          "I-handle ang multiple conditions gamit ang else at else if statements.",
        topics: [
          "Else clause",
          "Else if chains",
          "Multiple conditions",
          "Decision trees",
        ],
      },
      {
        id: 11,
        title: "Switch Statements",
        slug: "switch-case",
        xp: 10,
        description:
          "Gumamit ng switch statements para sa mas malinis na multi-way branching.",
        topics: [
          "Syntax ng switch",
          "Case labels",
          "Break statement",
          "Default case",
        ],
      },
      {
        id: 12,
        title: "Comparison Operators",
        slug: "comparison-operators",
        xp: 10,
        description:
          "I-compare ang values gamit ang ==, !=, <, >, <=, at >= operators.",
        topics: [
          "Equality operators",
          "Relational operators",
          "Pagko-compare ng numbers",
          "Pagko-compare ng Strings",
        ],
      },
      {
        id: 13,
        title: "Logical Operators",
        slug: "logical-operators",
        xp: 10,
        description:
          "Pagsamahin ang conditions gamit ang AND, OR, at NOT operators.",
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
    description: "Ulitin ang code nang efficient gamit ang loops",
    icon: InfinityIcon,
    lessons: [
      {
        id: 14,
        title: "For Loops",
        slug: "for-loop",
        xp: 10,
        description:
          "Ulitin ang code ng specific na bilang ng beses gamit ang for loops.",
        topics: [
          "Syntax ng for loop",
          "Loop counter",
          "Iteration",
          "Mga pattern ng loop",
        ],
      },
      {
        id: 15,
        title: "While Loops",
        slug: "while-loop",
        xp: 10,
        description:
          "I-execute ang code nang paulit-ulit habang true ang condition.",
        topics: [
          "Syntax ng while",
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
        description:
          "Siguraduhing tatakbo ang code kahit isang beses gamit ang do-while loops.",
        topics: [
          "Syntax ng do-while",
          "Post-test loops",
          "Mga use case",
          "Pagkukumpara sa while loop",
        ],
      },
      {
        id: 17,
        title: "Nested Loops",
        slug: "nested-loops",
        xp: 15,
        description:
          "Gumamit ng loops sa loob ng loops para gumawa gamit ang multi-dimensional data.",
        topics: [
          "Konsepto ng nested loop",
          "2D patterns",
          "Performance considerations",
          "Karaniwang patterns",
        ],
      },
      {
        id: 18,
        title: "Break at Continue",
        slug: "break-continue",
        xp: 10,
        description:
          "Kontrolin ang loop execution gamit ang break at continue statements.",
        topics: [
          "Break statement",
          "Continue statement",
          "Loop control flow",
          "Mga best practices",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Arrays",
    description: "Gumawa gamit ang collections ng data",
    icon: ChartScatter,
    lessons: [
      {
        id: 19,
        title: "Array Basics",
        slug: "array-basics",
        xp: 10,
        description:
          "Mag-store ng multiple values sa isang variable gamit ang arrays.",
        topics: [
          "Array declaration",
          "Array initialization",
          "Pag-access ng elements",
          "Array length",
        ],
      },
      {
        id: 20,
        title: "Array Iteration",
        slug: "array-iteration",
        xp: 10,
        description:
          "I-loop ang arrays gamit ang for loops at enhanced for loops.",
        topics: [
          "For loop gamit ang arrays",
          "Enhanced for loop",
          "Array traversal",
          "Karaniwang patterns",
        ],
      },
      {
        id: 21,
        title: "Multi-dimensional Arrays",
        slug: "multi-arrays",
        xp: 15,
        description:
          "Gumawa gamit ang 2D arrays at matrices para sa complex data structures.",
        topics: [
          "Syntax ng 2D array",
          "Nested arrays",
          "Matrix operations",
          "Pag-access ng 2D elements",
        ],
      },
      {
        id: 22,
        title: "Array Algorithms",
        slug: "array-algorithms",
        xp: 15,
        description:
          "I-implement ang karaniwang array algorithms tulad ng searching at sorting.",
        topics: [
          "Linear search",
          "Paghahanap ng min/max",
          "Pagre-reverse ng arrays",
          "Basic sorting",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Methods",
    description: "Gumawa ng reusable blocks ng code",
    icon: Bolt,
    lessons: [
      {
        id: 23,
        title: "Method Basics",
        slug: "method-basics",
        xp: 10,
        description:
          "I-define at tawagin ang methods para i-organize ang iyong code.",
        topics: [
          "Syntax ng method",
          "Pagta-tawag ng methods",
          "Structure ng method",
          "Bakit gumamit ng methods?",
        ],
      },
      {
        id: 24,
        title: "Parameters at Arguments",
        slug: "parameters",
        xp: 10,
        description:
          "Magpasa ng data sa methods gamit ang parameters at arguments.",
        topics: [
          "Parameters vs arguments",
          "Multiple parameters",
          "Uri ng parameters",
          "Pagpasa ng values",
        ],
      },
      {
        id: 25,
        title: "Return Values",
        slug: "return-values",
        xp: 10,
        description: "Mag-return ng data mula sa methods pabalik sa caller.",
        topics: [
          "Return statement",
          "Return types",
          "Void methods",
          "Paggamit ng return values",
        ],
      },
      {
        id: 26,
        title: "Method Overloading",
        slug: "method-overloading",
        xp: 15,
        description:
          "Gumawa ng multiple methods na may parehong pangalan pero ibang parameters.",
        topics: [
          "Konsepto ng overloading",
          "Iba't ibang signatures",
          "Compile-time polymorphism",
          "Mga use case",
        ],
      },
      {
        id: 27,
        title: "Recursion",
        slug: "recursion",
        xp: 20,
        description:
          "Solusyunan ang mga problema sa pamamagitan ng pagtawag ng method sa sarili nito.",
        topics: [
          "Konsepto ng recursion",
          "Base case",
          "Recursive case",
          "Karaniwang recursive problems",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Classes & Objects",
    description: "Masterin ang object-oriented programming basics",
    icon: Target,
    lessons: [
      {
        id: 28,
        title: "Class Basics",
        slug: "class-basics",
        xp: 10,
        description: "Gumawa ng blueprints para sa objects gamit ang classes.",
        topics: [
          "Class definition",
          "Fields at methods",
          "Paggawa ng objects",
          "Object references",
        ],
      },
      {
        id: 29,
        title: "Constructors",
        slug: "constructors",
        xp: 10,
        description: "I-initialize ang objects gamit ang constructors.",
        topics: [
          "Syntax ng constructor",
          "Default constructor",
          "Parameterized constructors",
          "This keyword",
        ],
      },
      {
        id: 30,
        title: "Encapsulation",
        slug: "encapsulation",
        xp: 15,
        description:
          "Protektahan ang data gamit ang private fields at public methods.",
        topics: [
          "Access modifiers",
          "Getters at setters",
          "Data hiding",
          "Mga benepisyo ng encapsulation",
        ],
      },
      {
        id: 31,
        title: "Inheritance",
        slug: "inheritance",
        xp: 15,
        description: "Gumawa ng bagong classes base sa existing ones.",
        topics: [
          "Extends keyword",
          "Parent at child classes",
          "Method inheritance",
          "Super keyword",
        ],
      },
      {
        id: 32,
        title: "Polymorphism",
        slug: "polymorphism",
        xp: 20,
        description:
          "Gumamit ng objects ng iba't ibang types sa pamamagitan ng common interface.",
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
