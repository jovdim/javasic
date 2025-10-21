interface LessonContent {
  content: string
  codeExample?: string
  keyPoints?: string[]
  quiz: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    hint?: string
  }
}

export const lessonContent: Record<string, LessonContent> = {
  "1-introduction": {
    content: `Welcome to Java! Java is one of the most popular programming languages in the world. It's used to build everything from mobile apps to large enterprise systems.

Java was created by James Gosling at Sun Microsystems in 1995. The language was designed with the philosophy of "Write Once, Run Anywhere" (WORA), meaning Java code can run on any device that has a Java Virtual Machine (JVM).

Java is an object-oriented programming language, which means it organizes code into objects that contain both data and methods. This makes code more modular, flexible, and easier to maintain.`,
    keyPoints: [
      "Java is platform-independent thanks to the JVM",
      "It's an object-oriented programming language",
      "Java is used for web, mobile, and enterprise applications",
      "The language emphasizes security and reliability",
    ],
    quiz: {
      question: "What does WORA stand for in Java?",
      options: [
        "Write Once, Read Anywhere",
        "Write Once, Run Anywhere",
        "Work Once, Run Always",
        "Write Often, Run Anywhere",
      ],
      correctAnswer: 1,
      explanation:
        "WORA stands for 'Write Once, Run Anywhere', which means Java code can run on any platform with a JVM without modification.",
      hint: "Think about Java's platform independence feature.",
    },
  },
  "1-hello-world": {
    content: `Every programmer's journey begins with "Hello World!" This simple program teaches you the basic structure of a Java program.

A Java program must have at least one class, and the class name must match the filename. The main method is the entry point where your program starts executing.

The System.out.println() method is used to print text to the console. "println" stands for "print line" and automatically adds a new line after the text.`,
    codeExample: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    keyPoints: [
      "Every Java program needs a main method",
      "Class name must match the filename",
      "System.out.println() prints text to console",
      "Semicolons end each statement",
    ],
    quiz: {
      question: "What is the correct syntax to print 'Hello' in Java?",
      options: [
        "print('Hello');",
        "System.out.println('Hello');",
        'System.out.println("Hello");',
        'console.log("Hello");',
      ],
      correctAnswer: 2,
      explanation: 'In Java, we use System.out.println("Hello"); with double quotes for strings.',
      hint: "Java uses double quotes for strings, not single quotes.",
    },
  },
  "1-comments": {
    content: `Comments are notes in your code that the computer ignores. They help you and other programmers understand what the code does.

Java has three types of comments: single-line comments (//), multi-line comments (/* */), and documentation comments (/** */).

Good comments explain WHY you're doing something, not WHAT you're doing. The code itself should be clear enough to show what it does.`,
    codeExample: `// This is a single-line comment

/*
This is a multi-line comment
It can span multiple lines
*/

/**
 * This is a documentation comment
 * Used for generating documentation
 */
public class Example {
    // Main method - program starts here
    public static void main(String[] args) {
        System.out.println("Hello!"); // Prints greeting
    }
}`,
    keyPoints: [
      "// creates a single-line comment",
      "/* */ creates a multi-line comment",
      "/** */ creates documentation comments",
      "Comments are ignored by the compiler",
    ],
    quiz: {
      question: "Which symbol starts a single-line comment in Java?",
      options: ["#", "//", "/*", "--"],
      correctAnswer: 1,
      explanation: "In Java, // is used for single-line comments. Everything after // on that line is ignored.",
      hint: "It's two forward slashes together.",
    },
  },
  "1-print-statements": {
    content: `Java provides different ways to output text to the console. Understanding these methods is essential for debugging and displaying information.

System.out.println() prints text and moves to a new line. System.out.print() prints text without moving to a new line. System.out.printf() allows formatted output.

You can print multiple values by concatenating them with the + operator. Java automatically converts numbers to strings when concatenating.`,
    codeExample: `public class PrintExample {
    public static void main(String[] args) {
        System.out.println("This prints with a new line");
        System.out.print("This ");
        System.out.print("stays ");
        System.out.println("on one line");
        
        // Concatenation
        System.out.println("I am " + 25 + " years old");
        
        // Formatted output
        System.out.printf("Pi is approximately %.2f", 3.14159);
    }
}`,
    keyPoints: [
      "println() adds a new line after printing",
      "print() keeps the cursor on the same line",
      "Use + to concatenate strings and numbers",
      "printf() allows formatted output",
    ],
    quiz: {
      question: "What's the difference between print() and println()?",
      options: [
        "print() is faster than println()",
        "println() adds a new line after printing",
        "print() can only print numbers",
        "There is no difference",
      ],
      correctAnswer: 1,
      explanation:
        "println() prints the text and moves to a new line, while print() keeps the cursor on the same line.",
      hint: "The 'ln' in println stands for 'line'.",
    },
  },
  "2-what-are-variables": {
    content: `Variables are containers that store data values. Think of them as labeled boxes where you can put information and retrieve it later.

In Java, every variable has a type that determines what kind of data it can hold. Once you declare a variable with a type, you can't change that type.

Variables must be declared before you can use them. Declaration tells Java what type of data the variable will hold and what name you'll use to refer to it.`,
    keyPoints: [
      "Variables store data values",
      "Each variable has a specific type",
      "Variables must be declared before use",
      "Variable names should be descriptive",
    ],
    quiz: {
      question: "What is a variable in programming?",
      options: [
        "A type of loop",
        "A container that stores data values",
        "A method that returns values",
        "A type of comment",
      ],
      correctAnswer: 1,
      explanation:
        "A variable is a container that stores data values. It's like a labeled box where you can put information.",
      hint: "Think of it as a storage container with a label.",
    },
  },
  "2-data-types": {
    content: `Java has two categories of data types: primitive types and reference types. Primitive types store simple values directly, while reference types store references to objects.

The main primitive types are: int (whole numbers), double (decimal numbers), boolean (true/false), and char (single characters).

Choosing the right data type is important for memory efficiency and preventing errors. For example, use int for counting and double for calculations that need decimal precision.`,
    codeExample: `public class DataTypes {
    public static void main(String[] args) {
        int age = 25;              // Whole number
        double price = 19.99;      // Decimal number
        boolean isStudent = true;  // True or false
        char grade = 'A';          // Single character
        String name = "Java";      // Text (reference type)
        
        System.out.println("Age: " + age);
        System.out.println("Price: $" + price);
        System.out.println("Student: " + isStudent);
        System.out.println("Grade: " + grade);
        System.out.println("Name: " + name);
    }
}`,
    keyPoints: [
      "int stores whole numbers",
      "double stores decimal numbers",
      "boolean stores true or false",
      "char stores single characters",
      "String stores text (reference type)",
    ],
    quiz: {
      question: "Which data type would you use to store the price of an item like $19.99?",
      options: ["int", "boolean", "double", "char"],
      correctAnswer: 2,
      explanation: "double is used for decimal numbers like prices. int only stores whole numbers without decimals.",
      hint: "Prices have decimal points, so you need a decimal data type.",
    },
  },
  "2-variable-declaration": {
    content: `Declaring a variable means creating it and specifying its type. You can declare a variable and assign it a value in one step, or do it separately.

Variable names should be descriptive and follow camelCase convention: start with a lowercase letter, and capitalize the first letter of each subsequent word.

Java is case-sensitive, so 'age' and 'Age' are different variables. Choose meaningful names that make your code self-documenting.`,
    codeExample: `public class Variables {
    public static void main(String[] args) {
        // Declaration and initialization
        int studentCount = 30;
        
        // Declaration only
        double temperature;
        temperature = 72.5;  // Assignment
        
        // Multiple declarations
        int x = 5, y = 10, z = 15;
        
        // Good variable names
        int numberOfStudents = 25;
        double averageScore = 87.5;
        boolean isComplete = false;
    }
}`,
    keyPoints: [
      "Declare variables with: type name = value;",
      "Use camelCase for variable names",
      "Names should be descriptive",
      "Java is case-sensitive",
    ],
    quiz: {
      question: "Which is the correct way to declare an integer variable named 'count' with value 10?",
      options: ["int count = 10;", "count = 10;", "integer count = 10;", "var count = 10;"],
      correctAnswer: 0,
      explanation:
        "The correct syntax is: int count = 10; You need to specify the type (int), name (count), and value (10).",
      hint: "You need the data type, variable name, equals sign, and value.",
    },
  },
  "2-string-operations": {
    content: `Strings are sequences of characters used to store text. In Java, strings are objects of the String class and are enclosed in double quotes.

You can concatenate (join) strings using the + operator. Java also provides many useful methods for working with strings, like length(), toUpperCase(), and substring().

Strings in Java are immutable, meaning once created, they cannot be changed. Any operation that seems to modify a string actually creates a new string.`,
    codeExample: `public class StringOps {
    public static void main(String[] args) {
        String firstName = "John";
        String lastName = "Doe";
        
        // Concatenation
        String fullName = firstName + " " + lastName;
        System.out.println(fullName);  // John Doe
        
        // String methods
        System.out.println(fullName.length());      // 8
        System.out.println(fullName.toUpperCase()); // JOHN DOE
        System.out.println(fullName.substring(0, 4)); // John
        
        // String comparison
        String name1 = "Java";
        String name2 = "Java";
        System.out.println(name1.equals(name2));  // true
    }
}`,
    keyPoints: [
      "Strings store text in double quotes",
      "Use + to concatenate strings",
      "length() returns the number of characters",
      "Use equals() to compare strings, not ==",
    ],
    quiz: {
      question: "What does the + operator do with strings?",
      options: [
        "Adds their lengths",
        "Compares them",
        "Joins them together (concatenation)",
        "Converts them to numbers",
      ],
      correctAnswer: 2,
      explanation:
        "The + operator concatenates (joins) strings together. For example, 'Hello' + ' ' + 'World' becomes 'Hello World'.",
      hint: "Think about joining or combining strings.",
    },
  },
  "3-if-statements": {
    content: `If statements allow your program to make decisions. They execute code only when a certain condition is true.

The basic syntax is: if (condition) { code to execute }. The condition must be a boolean expression that evaluates to true or false.

If statements are fundamental to programming logic. They let your program respond differently based on different situations, making your code dynamic and interactive.`,
    codeExample: `public class IfExample {
    public static void main(String[] args) {
        int age = 18;
        
        if (age >= 18) {
            System.out.println("You are an adult");
        }
        
        int temperature = 75;
        if (temperature > 80) {
            System.out.println("It's hot outside!");
        }
        
        boolean isRaining = true;
        if (isRaining) {
            System.out.println("Bring an umbrella");
        }
    }
}`,
    keyPoints: [
      "if statements execute code when a condition is true",
      "Conditions must be boolean expressions",
      "Use comparison operators: >, <, >=, <=, ==, !=",
      "Code inside { } only runs if condition is true",
    ],
    quiz: {
      question: "When does the code inside an if statement execute?",
      options: ["Always", "Never", "Only when the condition is true", "Only when the condition is false"],
      correctAnswer: 2,
      explanation: "The code inside an if statement only executes when the condition evaluates to true.",
      hint: "The 'if' keyword means 'only when this is true'.",
    },
  },
  "3-else-if": {
    content: `The else statement provides an alternative path when the if condition is false. The else if statement allows you to check multiple conditions in sequence.

You can chain multiple else if statements to handle different cases. The first condition that evaluates to true will execute, and the rest will be skipped.

Always end with an else statement if you want to handle all other cases. This ensures your program has a response for every possible situation.`,
    codeExample: `public class ElseIfExample {
    public static void main(String[] args) {
        int score = 85;
        
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
        
        // Output: Grade: B
    }
}`,
    keyPoints: [
      "else provides an alternative when if is false",
      "else if checks additional conditions",
      "Only the first true condition executes",
      "else catches all remaining cases",
    ],
    quiz: {
      question: "In an if-else if-else chain, how many blocks of code can execute?",
      options: ["All of them", "None of them", "Only one", "At least two"],
      correctAnswer: 2,
      explanation:
        "In an if-else if-else chain, only ONE block of code executes - the first condition that is true, or the else block if none are true.",
      hint: "Once one condition is true, the rest are skipped.",
    },
  },
  "3-switch-case": {
    content: `Switch statements provide a cleaner way to handle multiple conditions based on a single variable's value. They're especially useful when you have many possible values to check.

Each case represents a possible value. When a match is found, the code for that case executes. The break statement prevents fall-through to the next case.

The default case is optional but recommended. It handles any values that don't match the specified cases, similar to an else statement.`,
    codeExample: `public class SwitchExample {
    public static void main(String[] args) {
        int day = 3;
        String dayName;
        
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            default:
                dayName = "Weekend";
        }
        
        System.out.println(dayName);  // Wednesday
    }
}`,
    keyPoints: [
      "switch checks one variable against multiple values",
      "Each case represents a possible value",
      "break prevents fall-through to next case",
      "default handles unmatched values",
    ],
    quiz: {
      question: "What happens if you forget the break statement in a switch case?",
      options: [
        "The program crashes",
        "Nothing happens",
        "Execution continues to the next case (fall-through)",
        "The switch statement restarts",
      ],
      correctAnswer: 2,
      explanation:
        "Without break, execution 'falls through' to the next case, executing its code too. This is usually not desired.",
      hint: "Think about what 'break' means - it breaks out of the switch.",
    },
  },
  "3-comparison-operators": {
    content: `Comparison operators compare two values and return a boolean result (true or false). They're essential for making decisions in your code.

The main comparison operators are: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to).

You can combine multiple conditions using logical operators: && (and), || (or), and ! (not). These allow you to create complex conditional logic.`,
    codeExample: `public class Comparisons {
    public static void main(String[] args) {
        int a = 10, b = 20;
        
        System.out.println(a == b);   // false
        System.out.println(a != b);   // true
        System.out.println(a < b);    // true
        System.out.println(a > b);    // false
        System.out.println(a <= 10);  // true
        System.out.println(b >= 20);  // true
        
        // Logical operators
        boolean result1 = (a < b) && (b > 15);  // true AND true = true
        boolean result2 = (a > b) || (b > 15);  // false OR true = true
        boolean result3 = !(a == b);            // NOT false = true
    }
}`,
    keyPoints: [
      "== checks if values are equal",
      "!= checks if values are not equal",
      ">, <, >=, <= compare numeric values",
      "&& (and), || (or), ! (not) combine conditions",
    ],
    quiz: {
      question: "What does the expression (5 > 3) && (10 < 20) evaluate to?",
      options: ["true", "false", "5", "Error"],
      correctAnswer: 0,
      explanation: "(5 > 3) is true AND (10 < 20) is true. true && true equals true.",
      hint: "Both conditions must be true for && (AND) to be true.",
    },
  },
  "3-logical-operators": {
    content: `Logical operators combine multiple boolean expressions. They're essential for creating complex conditions in your programs.

The three main logical operators are: && (AND), || (OR), and ! (NOT). AND requires both conditions to be true, OR requires at least one to be true, and NOT inverts a boolean value.

Understanding logical operators allows you to write more sophisticated conditional logic and make your programs smarter.`,
    codeExample: `public class LogicalOps {
    public static void main(String[] args) {
        int age = 25;
        boolean hasLicense = true;
        
        // AND operator - both must be true
        if (age >= 18 && hasLicense) {
            System.out.println("Can drive");
        }
        
        // OR operator - at least one must be true
        boolean isWeekend = false;
        boolean isHoliday = true;
        if (isWeekend || isHoliday) {
            System.out.println("No work today!");
        }
        
        // NOT operator - inverts boolean
        boolean isRaining = false;
        if (!isRaining) {
            System.out.println("Go outside!");
        }
        
        // Complex conditions
        int score = 85;
        boolean passed = score >= 60 && score <= 100;
        System.out.println("Passed: " + passed);
    }
}`,
    keyPoints: [
      "&& (AND) requires both conditions to be true",
      "|| (OR) requires at least one condition to be true",
      "! (NOT) inverts a boolean value",
      "Use parentheses to group complex conditions",
    ],
    quiz: {
      question: "What does the expression (true && false) || true evaluate to?",
      options: ["true", "false", "Error", "null"],
      correctAnswer: 0,
      explanation:
        "(true && false) is false, but (false || true) is true. The OR operator makes the entire expression true.",
      hint: "Evaluate the && first, then the ||. OR only needs one true.",
    },
  },
  "4-for-loop": {
    content: `For loops repeat code a specific number of times. They're perfect when you know exactly how many iterations you need.

A for loop has three parts: initialization (start), condition (when to stop), and increment (how to change). These three parts control the loop's behavior.

For loops are commonly used for counting, iterating through arrays, and performing repetitive tasks a set number of times.`,
    codeExample: `public class ForLoop {
    public static void main(String[] args) {
        // Basic for loop
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
        // Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5
        
        // Counting down
        for (int i = 10; i >= 1; i--) {
            System.out.println(i);
        }
        
        // Counting by 2s
        for (int i = 0; i <= 10; i += 2) {
            System.out.println(i);  // 0, 2, 4, 6, 8, 10
        }
    }
}`,
    keyPoints: [
      "for loops repeat code a specific number of times",
      "Three parts: initialization, condition, increment",
      "i++ means increment by 1",
      "Loop continues while condition is true",
    ],
    quiz: {
      question: "How many times will this loop run? for (int i = 0; i < 5; i++)",
      options: ["4 times", "5 times", "6 times", "Infinite times"],
      correctAnswer: 1,
      explanation:
        "The loop runs 5 times: i = 0, 1, 2, 3, 4. When i becomes 5, the condition (i < 5) is false, so it stops.",
      hint: "Count from 0 to 4 - that's 5 numbers.",
    },
  },
  "4-while-loop": {
    content: `While loops repeat code as long as a condition is true. Unlike for loops, you don't need to know the exact number of iterations beforehand.

The condition is checked before each iteration. If it's false from the start, the loop body never executes.

While loops are useful when you're waiting for something to happen or when the number of iterations depends on user input or other dynamic factors.`,
    codeExample: `public class WhileLoop {
    public static void main(String[] args) {
        // Basic while loop
        int count = 1;
        while (count <= 5) {
            System.out.println("Count: " + count);
            count++;
        }
        
        // User input simulation
        int attempts = 0;
        boolean success = false;
        while (!success && attempts < 3) {
            System.out.println("Attempt " + (attempts + 1));
            attempts++;
            // success = checkSomething();
        }
    }
}`,
    keyPoints: [
      "while loops run as long as condition is true",
      "Condition is checked before each iteration",
      "Make sure the condition eventually becomes false",
      "Useful when iteration count is unknown",
    ],
    quiz: {
      question: "What happens if a while loop's condition is always true?",
      options: [
        "The loop runs once",
        "The loop never runs",
        "The loop runs forever (infinite loop)",
        "The program crashes immediately",
      ],
      correctAnswer: 2,
      explanation:
        "If the condition is always true, the loop runs forever, creating an infinite loop. Always ensure your condition can become false.",
      hint: "If it's always true, when would it stop?",
    },
  },
  "4-do-while": {
    content: `Do-while loops are similar to while loops, but with one key difference: they always execute at least once, even if the condition is false.

The condition is checked after each iteration, not before. This guarantees the loop body runs at least one time.

Do-while loops are useful when you need to perform an action first and then decide whether to repeat it, like displaying a menu and asking if the user wants to continue.`,
    codeExample: `public class DoWhileLoop {
    public static void main(String[] args) {
        // Basic do-while
        int count = 1;
        do {
            System.out.println("Count: " + count);
            count++;
        } while (count <= 5);
        
        // Runs at least once even if condition is false
        int x = 10;
        do {
            System.out.println("This prints once");
            x++;
        } while (x < 10);  // Condition is false, but loop ran once
    }
}`,
    keyPoints: [
      "do-while always executes at least once",
      "Condition is checked after each iteration",
      "Syntax: do { code } while (condition);",
      "Useful for menu-driven programs",
    ],
    quiz: {
      question: "What's the main difference between while and do-while loops?",
      options: [
        "while is faster",
        "do-while always runs at least once",
        "while can't use break statements",
        "There is no difference",
      ],
      correctAnswer: 1,
      explanation:
        "do-while loops always execute at least once because the condition is checked after the loop body, not before.",
      hint: "Think about when the condition is checked - before or after?",
    },
  },
  "4-break-continue": {
    content: `Break and continue are control statements that modify loop behavior. They give you fine-grained control over loop execution.

The break statement immediately exits the loop, regardless of the condition. It's useful when you've found what you're looking for and don't need to continue.

The continue statement skips the rest of the current iteration and moves to the next one. It's useful when you want to skip certain values but keep looping.`,
    codeExample: `public class BreakContinue {
    public static void main(String[] args) {
        // break example
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                break;  // Exit loop when i is 5
            }
            System.out.println(i);  // Prints 1, 2, 3, 4
        }
        
        // continue example
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue;  // Skip when i is 3
            }
            System.out.println(i);  // Prints 1, 2, 4, 5
        }
    }
}`,
    keyPoints: [
      "break exits the loop immediately",
      "continue skips to the next iteration",
      "Both work in for, while, and do-while loops",
      "Use break to exit early, continue to skip values",
    ],
    quiz: {
      question: "What does the continue statement do in a loop?",
      options: [
        "Exits the loop completely",
        "Restarts the loop from the beginning",
        "Skips the rest of the current iteration",
        "Pauses the loop",
      ],
      correctAnswer: 2,
      explanation:
        "continue skips the remaining code in the current iteration and moves to the next iteration of the loop.",
      hint: "It continues to the next iteration, skipping the rest of the current one.",
    },
  },
  "4-nested-loops": {
    content: `Nested loops are loops inside other loops. They're powerful for working with multi-dimensional data, creating patterns, and solving complex problems.

The outer loop runs completely for each iteration of the inner loop. If the outer loop runs 3 times and the inner loop runs 4 times, the inner loop body executes 12 times total (3 × 4).

Nested loops are commonly used for processing 2D arrays, creating patterns, and implementing algorithms that require multiple levels of iteration.`,
    codeExample: `public class NestedLoops {
    public static void main(String[] args) {
        // Print a multiplication table
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.print((i * j) + "\\t");
            }
            System.out.println();
        }
        
        // Create a pattern
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        // Output:
        // *
        // * *
        // * * *
        // * * * *
        // * * * * *
        
        // Process 2D array
        int[][] matrix = {{1,2,3}, {4,5,6}, {7,8,9}};
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
    keyPoints: [
      "Nested loops are loops inside other loops",
      "Inner loop completes all iterations for each outer loop iteration",
      "Total iterations = outer iterations × inner iterations",
      "Commonly used for 2D arrays and patterns",
    ],
    quiz: {
      question:
        "If the outer loop runs 4 times and the inner loop runs 3 times, how many times does the inner loop body execute?",
      options: ["4 times", "3 times", "7 times", "12 times"],
      correctAnswer: 3,
      explanation:
        "The inner loop body executes 12 times (4 × 3). For each of the 4 outer iterations, the inner loop runs 3 times.",
      hint: "Multiply the number of outer iterations by inner iterations.",
    },
  },
  "5-array-basics": {
    content: `Arrays are containers that hold multiple values of the same type. Think of an array as a row of boxes, each holding one value.

Arrays have a fixed size that's set when you create them. Each element in an array has an index (position), starting from 0.

Arrays are useful when you need to store and work with collections of related data, like a list of scores, names, or temperatures.`,
    codeExample: `public class ArrayBasics {
    public static void main(String[] args) {
        // Declare and initialize
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Access elements (index starts at 0)
        System.out.println(numbers[0]);  // 10
        System.out.println(numbers[2]);  // 30
        
        // Modify elements
        numbers[1] = 25;
        System.out.println(numbers[1]);  // 25
        
        // Array length
        System.out.println("Length: " + numbers.length);  // 5
        
        // Create array with size
        String[] names = new String[3];
        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";
    }
}`,
    keyPoints: [
      "Arrays store multiple values of the same type",
      "Array indices start at 0",
      "Use [] to access elements: array[index]",
      "array.length gives the number of elements",
    ],
    quiz: {
      question: "In an array with 5 elements, what is the index of the last element?",
      options: ["5", "4", "3", "6"],
      correctAnswer: 1,
      explanation:
        "Array indices start at 0, so an array with 5 elements has indices 0, 1, 2, 3, 4. The last index is 4.",
      hint: "Arrays start counting at 0, not 1.",
    },
  },
  "5-array-iteration": {
    content: `Iterating through an array means accessing each element one by one. This is one of the most common operations with arrays.

You can use a regular for loop with an index, or a for-each loop that automatically goes through each element.

The for-each loop is simpler and less error-prone when you need to access every element. Use a regular for loop when you need the index or want to modify elements.`,
    codeExample: `public class ArrayIteration {
    public static void main(String[] args) {
        int[] scores = {85, 92, 78, 95, 88};
        
        // Regular for loop
        for (int i = 0; i < scores.length; i++) {
            System.out.println("Score " + (i+1) + ": " + scores[i]);
        }
        
        // For-each loop (enhanced for loop)
        for (int score : scores) {
            System.out.println("Score: " + score);
        }
        
        // Calculate average
        int sum = 0;
        for (int score : scores) {
            sum += score;
        }
        double average = (double) sum / scores.length;
        System.out.println("Average: " + average);
    }
}`,
    keyPoints: [
      "Use for loop with index: for (int i = 0; i < array.length; i++)",
      "Use for-each loop: for (type element : array)",
      "For-each is simpler but doesn't provide index",
      "Always use array.length to avoid going out of bounds",
    ],
    quiz: {
      question: "Which loop is best for accessing every element in an array without needing the index?",
      options: ["while loop", "do-while loop", "for-each loop", "switch statement"],
      correctAnswer: 2,
      explanation:
        "The for-each loop (enhanced for loop) is perfect for accessing every element when you don't need the index.",
      hint: "There's a special loop designed just for iterating through collections.",
    },
  },
  "5-array-algorithms": {
    content: `Array algorithms are common patterns for solving problems with arrays. Learning these fundamental algorithms will help you solve many programming challenges.

Common array algorithms include: finding the maximum/minimum value, calculating sum and average, searching for elements, reversing arrays, and sorting.

These algorithms form the foundation for more complex data manipulation. Understanding them will make you a better programmer and problem solver.`,
    codeExample: `public class ArrayAlgorithms {
    public static void main(String[] args) {
        int[] numbers = {45, 23, 67, 12, 89, 34};
        
        // Find maximum
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) max = num;
        }
        System.out.println("Max: " + max);  // 89
        
        // Calculate sum and average
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        double average = (double) sum / numbers.length;
        System.out.println("Average: " + average);
        
        // Search for element
        int target = 67;
        int index = -1;
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                index = i;
                break;
            }
        }
        System.out.println("Found at index: " + index);
        
        // Reverse array
        int[] reversed = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            reversed[i] = numbers[numbers.length - 1 - i];
        }
    }
}`,
    keyPoints: [
      "Finding max/min: iterate and compare each element",
      "Sum/average: accumulate values and divide by length",
      "Searching: iterate until element is found",
      "Reversing: swap elements from ends toward middle",
    ],
    quiz: {
      question: "What's the best way to find the maximum value in an array?",
      options: [
        "Sort the array and take the last element",
        "Iterate through and keep track of the largest value seen",
        "Use a nested loop to compare all pairs",
        "Arrays can't store maximum values",
      ],
      correctAnswer: 1,
      explanation:
        "The most efficient way is to iterate once through the array, keeping track of the largest value seen so far.",
      hint: "You only need to go through the array once.",
    },
  },
  "5-multi-arrays": {
    content: `Multi-dimensional arrays are arrays of arrays. The most common is a 2D array, which you can think of as a table with rows and columns.

A 2D array is declared with two sets of brackets: int[][] matrix. The first index represents the row, and the second represents the column.

Multi-dimensional arrays are useful for representing grids, tables, matrices, game boards, and other structured data.`,
    codeExample: `public class MultiArrays {
    public static void main(String[] args) {
        // 2D array (3 rows, 4 columns)
        int[][] matrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        
        // Access elements
        System.out.println(matrix[0][0]);  // 1 (row 0, col 0)
        System.out.println(matrix[1][2]);  // 7 (row 1, col 2)
        
        // Iterate through 2D array
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
    keyPoints: [
      "2D arrays are arrays of arrays",
      "Declared with [][]: int[][] array",
      "First index is row, second is column",
      "Use nested loops to iterate through 2D arrays",
    ],
    quiz: {
      question: "How do you access the element in row 2, column 3 of a 2D array named 'grid'?",
      options: ["grid[3][2]", "grid[2][3]", "grid(2, 3)", "grid[2, 3]"],
      correctAnswer: 1,
      explanation:
        "Use grid[2][3] where the first index is the row and the second is the column. Remember indices start at 0.",
      hint: "First bracket is row, second bracket is column.",
    },
  },
  "6-method-basics": {
    content: `Methods are reusable blocks of code that perform specific tasks. They help organize your code and avoid repetition.

A method has a name, parameters (inputs), and a return type (output). Methods can be called multiple times from different parts of your program.

Using methods makes your code more modular, easier to test, and easier to maintain. Instead of writing the same code multiple times, you write it once in a method and call it when needed.`,
    codeExample: `public class MethodBasics {
    // Method that prints a greeting
    public static void greet() {
        System.out.println("Hello, World!");
    }
    
    // Method that prints a custom greeting
    public static void greetPerson(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static void main(String[] args) {
        greet();                // Hello, World!
        greetPerson("Alice");   // Hello, Alice!
        greetPerson("Bob");     // Hello, Bob!
    }
}`,
    keyPoints: [
      "Methods are reusable blocks of code",
      "Syntax: public static returnType methodName(parameters)",
      "void means the method doesn't return a value",
      "Call methods by name: methodName(arguments)",
    ],
    quiz: {
      question: "What is the main purpose of using methods?",
      options: [
        "To make programs run faster",
        "To reuse code and organize programs better",
        "To use more memory",
        "To make programs longer",
      ],
      correctAnswer: 1,
      explanation:
        "Methods help reuse code and organize programs better. Instead of repeating code, you write it once in a method and call it when needed.",
      hint: "Think about avoiding repetition and organizing code.",
    },
  },
  "6-parameters": {
    content: `Parameters are variables that receive values when a method is called. They allow methods to work with different data each time they're called.

When you define a method, you specify parameters in parentheses. When you call the method, you pass arguments (actual values) that match the parameters.

You can have multiple parameters separated by commas. The order and type of arguments must match the parameters when calling the method.`,
    codeExample: `public class Parameters {
    // Method with one parameter
    public static void printSquare(int number) {
        int result = number * number;
        System.out.println(number + " squared is " + result);
    }
    
    // Method with multiple parameters
    public static void printSum(int a, int b) {
        int sum = a + b;
        System.out.println(a + " + " + b + " = " + sum);
    }
    
    public static void main(String[] args) {
        printSquare(5);      // 5 squared is 25
        printSquare(10);     // 10 squared is 100
        
        printSum(3, 7);      // 3 + 7 = 10
        printSum(15, 25);    // 15 + 25 = 40
    }
}`,
    keyPoints: [
      "Parameters are variables in method definition",
      "Arguments are actual values passed when calling",
      "Multiple parameters are separated by commas",
      "Parameter order and type must match when calling",
    ],
    quiz: {
      question: "What's the difference between parameters and arguments?",
      options: [
        "There is no difference",
        "Parameters are in the method definition, arguments are passed when calling",
        "Arguments are in the method definition, parameters are passed when calling",
        "Parameters are for numbers, arguments are for strings",
      ],
      correctAnswer: 1,
      explanation:
        "Parameters are variables in the method definition. Arguments are the actual values you pass when calling the method.",
      hint: "Parameters are placeholders, arguments are actual values.",
    },
  },
  "6-return-values": {
    content: `Methods can return values using the return statement. The return type in the method signature specifies what type of value the method will return.

When a method returns a value, you can store it in a variable or use it directly in expressions. The return statement immediately exits the method.

If a method doesn't return anything, use void as the return type. Methods with return values are useful for calculations and data processing.`,
    codeExample: `public class ReturnValues {
    // Method that returns an integer
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method that returns a boolean
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    // Method that returns a String
    public static String getGrade(int score) {
        if (score >= 90) return "A";
        else if (score >= 80) return "B";
        else if (score >= 70) return "C";
        else return "F";
    }
    
    public static void main(String[] args) {
        int sum = add(5, 3);
        System.out.println("Sum: " + sum);  // Sum: 8
        
        boolean check = isEven(10);
        System.out.println("Is even: " + check);  // Is even: true
        
        String grade = getGrade(85);
        System.out.println("Grade: " + grade);  // Grade: B
    }
}`,
    keyPoints: [
      "Return type specifies what the method returns",
      "Use return statement to send back a value",
      "void means no return value",
      "Return statement exits the method immediately",
    ],
    quiz: {
      question: "What does a method with return type 'void' return?",
      options: ["An integer", "A string", "Nothing", "A boolean"],
      correctAnswer: 2,
      explanation:
        "A method with return type 'void' doesn't return any value. It just performs actions without sending back data.",
      hint: "Void means empty or nothing.",
    },
  },
  "6-method-overloading": {
    content: `Method overloading allows you to have multiple methods with the same name but different parameters. Java determines which method to call based on the arguments you provide.

Methods are overloaded when they have the same name but different parameter lists (different number or types of parameters).

Overloading is useful when you want to perform similar operations with different types or numbers of inputs. It makes your code more flexible and easier to use.`,
    codeExample: `public class MethodOverloading {
    // Method with one int parameter
    public static int multiply(int a) {
        return a * a;
    }
    
    // Method with two int parameters
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    // Method with three int parameters
    public static int multiply(int a, int b, int c) {
        return a * b * c;
    }
    
    // Method with double parameters
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    public static void main(String[] args) {
        System.out.println(multiply(5));        // 25
        System.out.println(multiply(5, 3));     // 15
        System.out.println(multiply(2, 3, 4));  // 24
        System.out.println(multiply(2.5, 4.0)); // 10.0
    }
}`,
    keyPoints: [
      "Overloading = same method name, different parameters",
      "Parameters must differ in number or type",
      "Java chooses the right method based on arguments",
      "Makes code more flexible and user-friendly",
    ],
    quiz: {
      question: "What is method overloading?",
      options: [
        "Having too many methods in a class",
        "Having multiple methods with the same name but different parameters",
        "Having methods that return multiple values",
        "Having methods that run too slowly",
      ],
      correctAnswer: 1,
      explanation:
        "Method overloading is having multiple methods with the same name but different parameter lists (different number or types).",
      hint: "Same name, different parameters.",
    },
  },
  "6-recursion": {
    content: `Recursion is when a method calls itself. It's a powerful technique for solving problems that can be broken down into smaller, similar subproblems.

Every recursive method needs two parts: a base case (when to stop) and a recursive case (calling itself with a simpler problem). Without a base case, the recursion would continue forever.

Recursion is elegant for problems like calculating factorials, traversing trees, and solving mathematical sequences. However, it uses more memory than loops, so use it wisely.`,
    codeExample: `public class Recursion {
    // Calculate factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120
    public static int factorial(int n) {
        // Base case
        if (n <= 1) {
            return 1;
        }
        // Recursive case
        return n * factorial(n - 1);
    }
    
    // Calculate Fibonacci number
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Count down
    public static void countdown(int n) {
        if (n <= 0) {
            System.out.println("Blast off!");
            return;
        }
        System.out.println(n);
        countdown(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));  // 120
        System.out.println("Fib(6) = " + fibonacci(6));  // 8
        countdown(5);
    }
}`,
    keyPoints: [
      "Recursion is when a method calls itself",
      "Must have a base case to stop recursion",
      "Recursive case solves a simpler version of the problem",
      "Useful for problems with repetitive substructure",
    ],
    quiz: {
      question: "What happens if a recursive method doesn't have a base case?",
      options: [
        "It runs once and stops",
        "It causes infinite recursion and stack overflow",
        "It automatically stops after 100 calls",
        "Nothing, base cases are optional",
      ],
      correctAnswer: 1,
      explanation:
        "Without a base case, the method keeps calling itself forever, eventually causing a stack overflow error.",
      hint: "Without a stopping condition, it never stops.",
    },
  },
  "7-class-basics": {
    content: `Classes are blueprints for creating objects. They define the properties (fields) and behaviors (methods) that objects of that class will have.

An object is an instance of a class. You can create multiple objects from the same class, each with its own set of property values.

Classes are the foundation of object-oriented programming. They help organize code by grouping related data and functions together.`,
    codeExample: `public class Dog {
    // Fields (properties)
    String name;
    int age;
    String breed;
    
    // Method (behavior)
    public void bark() {
        System.out.println(name + " says: Woof!");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Breed: " + breed);
    }
}

// In main method:
// Dog myDog = new Dog();
// myDog.name = "Buddy";
// myDog.age = 3;
// myDog.breed = "Golden Retriever";
// myDog.bark();  // Buddy says: Woof!
// myDog.displayInfo();`,
    keyPoints: [
      "Classes are blueprints for objects",
      "Objects are instances of classes",
      "Fields store object data (properties)",
      "Methods define object behavior",
    ],
    quiz: {
      question: "What is the relationship between a class and an object?",
      options: [
        "They are the same thing",
        "A class is a blueprint, an object is an instance of that class",
        "An object is a blueprint, a class is an instance",
        "Classes and objects are unrelated",
      ],
      correctAnswer: 1,
      explanation:
        "A class is a blueprint that defines structure and behavior. An object is a specific instance created from that blueprint.",
      hint: "Think of a class as a blueprint or template.",
    },
  },
  "7-constructors": {
    content: `Constructors are special methods that initialize objects when they're created. They have the same name as the class and no return type.

Constructors run automatically when you use the 'new' keyword to create an object. They're used to set initial values for object fields.

You can have multiple constructors with different parameters (constructor overloading). If you don't write a constructor, Java provides a default one.`,
    codeExample: `public class Student {
    String name;
    int age;
    String major;
    
    // Constructor with no parameters
    public Student() {
        name = "Unknown";
        age = 0;
        major = "Undeclared";
    }
    
    // Constructor with parameters
    public Student(String studentName, int studentAge, String studentMajor) {
        name = studentName;
        age = studentAge;
        major = studentMajor;
    }
}

// In main method:
// Student student1 = new Student();
// Student student2 = new Student("Alice", 20, "Computer Science");`,
    keyPoints: [
      "Constructors initialize objects",
      "Same name as class, no return type",
      "Called automatically with 'new' keyword",
      "Can have multiple constructors (overloading)",
    ],
    quiz: {
      question: "What is the purpose of a constructor?",
      options: [
        "To destroy objects",
        "To initialize objects when they're created",
        "To copy objects",
        "To compare objects",
      ],
      correctAnswer: 1,
      explanation:
        "Constructors initialize objects when they're created. They set initial values for the object's fields.",
      hint: "Think about what happens when you create a new object.",
    },
  },
  "7-encapsulation": {
    content: `Encapsulation is the practice of hiding internal details and providing controlled access to object data. It's achieved using private fields and public getter/setter methods.

Private fields can only be accessed within the class. Public methods provide controlled access, allowing you to validate data before setting it.

Encapsulation protects data integrity and makes code more maintainable. You can change internal implementation without affecting code that uses your class.`,
    codeExample: `public class BankAccount {
    // Private fields (hidden from outside)
    private String accountNumber;
    private double balance;
    
    // Constructor
    public BankAccount(String accNum, double initialBalance) {
        accountNumber = accNum;
        balance = initialBalance;
    }
    
    // Getter methods (read access)
    public double getBalance() {
        return balance;
    }
    
    // Setter methods (controlled write access)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}`,
    keyPoints: [
      "Encapsulation hides internal details",
      "Use private for fields, public for methods",
      "Getters provide read access",
      "Setters provide controlled write access",
    ],
    quiz: {
      question: "Why do we use private fields with public getter/setter methods?",
      options: [
        "To make code longer",
        "To control access and protect data integrity",
        "To make code run faster",
        "Private and public don't matter",
      ],
      correctAnswer: 1,
      explanation:
        "Private fields with public getters/setters control access to data, allowing validation and protecting data integrity.",
      hint: "Think about protecting and controlling access to data.",
    },
  },
  "7-inheritance": {
    content: `Inheritance allows a class to inherit fields and methods from another class. The class that inherits is called a subclass, and the class being inherited from is the superclass.

Use the 'extends' keyword to create a subclass. The subclass gets all non-private members of the superclass and can add its own unique features.

Inheritance promotes code reuse and creates hierarchical relationships between classes. It's a fundamental concept in object-oriented programming.`,
    codeExample: `// Superclass
public class Animal {
    String name;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Subclass
public class Dog extends Animal {
    String breed;
    
    // Dog inherits eat() and sleep()
    // Dog adds its own method
    public void bark() {
        System.out.println(name + " says: Woof!");
    }
}

// In main:
// Dog myDog = new Dog();
// myDog.name = "Buddy";
// myDog.breed = "Golden Retriever";
// myDog.eat();    // Inherited from Animal
// myDog.bark();   // Defined in Dog`,
    keyPoints: [
      "Inheritance creates parent-child relationships",
      "Use 'extends' keyword for inheritance",
      "Subclass inherits non-private members",
      "Subclass can add its own unique features",
    ],
    quiz: {
      question: "What keyword is used to inherit from another class in Java?",
      options: ["inherits", "extends", "implements", "super"],
      correctAnswer: 1,
      explanation: "The 'extends' keyword is used to create a subclass that inherits from a superclass.",
      hint: "It's a word that means to make something bigger or longer.",
    },
  },
  "7-polymorphism": {
    content: `Polymorphism means "many forms." It allows objects of different classes to be treated as objects of a common parent class, while still maintaining their unique behaviors.

Method overriding is a key aspect of polymorphism. A subclass can provide its own implementation of a method inherited from the parent class.

Polymorphism makes code more flexible and extensible. You can write code that works with parent class types, but automatically uses the correct subclass behavior at runtime.`,
    codeExample: `// Parent class
class Animal {
    public void makeSound() {
        System.out.println("Some generic sound");
    }
}

// Subclasses override makeSound()
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

class Cow extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Moo!");
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        // Polymorphism in action
        Animal[] animals = {new Dog(), new Cat(), new Cow()};
        
        for (Animal animal : animals) {
            animal.makeSound();  // Calls the correct version
        }
        // Output:
        // Woof! Woof!
        // Meow!
        // Moo!
    }
}`,
    keyPoints: [
      "Polymorphism allows objects to take many forms",
      "Subclasses can override parent class methods",
      "Use @Override annotation for clarity",
      "Enables flexible, extensible code design",
    ],
    quiz: {
      question: "What is polymorphism in Java?",
      options: [
        "Having multiple constructors",
        "Objects of different classes being treated as objects of a common parent class",
        "Using multiple inheritance",
        "Creating multiple objects",
      ],
      correctAnswer: 1,
      explanation:
        "Polymorphism allows objects of different classes to be treated as objects of a common parent class, while maintaining their unique behaviors.",
      hint: "Poly means many, morph means forms - many forms.",
    },
  },
}
