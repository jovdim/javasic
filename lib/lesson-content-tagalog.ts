interface LessonContent {
  content: string;
  codeExample?: string;
  keyPoints?: string[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    hint?: string;
  };
}

export const lessonContentTagalog: Record<string, LessonContent> = {
  "1-introduction": {
    content: `Maligayang pagdating sa Java! Isa ang Java sa mga pinakasikat na programming language sa buong mundo. Ginagamit ito para gumawa ng mga mobile app, web application, at malalaking sistema para sa mga kumpanya.

Ginawa ni James Gosling ang Java noong 1995 sa Sun Microsystems. Ang konsepto ng Java ay "Write Once, Run Anywhere" (WORA), ibig sabihin, isang beses mo lang isusulat ang code at pwedeng tumakbo sa kahit anong device na may Java Virtual Machine (JVM).

Ang Java ay isang object-oriented programming language, na nangangahulugang naka-organize ang code bilang mga object na may data at functions. Mas madali itong i-maintain at i-expand.`,
    keyPoints: [
      "Pwede tumakbo sa iba't ibang devices dahil sa JVM",
      "Object-oriented programming language",
      "Ginagamit sa web, mobile, at enterprise applications",
      "Safe at reliable ang mga program na gawa dito",
    ],
    quiz: {
      question: "Ano ang ibig sabihin ng WORA sa Java?",
      options: [
        "Write Once, Read Anywhere",
        "Write Once, Run Anywhere",
        "Work Once, Run Always",
        "Write Often, Run Anywhere",
      ],
      correctAnswer: 1,
      explanation:
        "Ang WORA ay 'Write Once, Run Anywhere', ibig sabihin, kahit saang device na may JVM pwedeng tumakbo ang Java code.",
      hint: "Tungkol ito sa pagiging versatile ng Java sa iba't ibang devices.",
    },
  },

  "1-hello-world": {
    content: `Simulan natin ang programming journey mo sa "Hello World!" Ito ang pinakasimpleng program para matutunan ang basic structure ng Java.

Kailangan ng kahit isang class ang bawat Java program, at dapat match ang pangalan ng class sa filename. Ang main method ang unang tinatawag kapag tumatakbo ang program.

Ginagamit ang System.out.println() para magpakita ng text sa console. Ang "println" ay ibig sabihin "print line" - automatic itong magla-line break pagkatapos mag-print.`,
    codeExample: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Mundo!");
    }
}`,
    keyPoints: [
      "Kailangan ng main method ang bawat Java program",
      "Dapat match ang class name sa filename",
      "System.out.println() ang gamit para mag-print",
      "Kailangan ng semicolon (;) sa dulo ng bawat statement",
    ],
    quiz: {
      question: "Paano tama ang pag-print ng 'Kamusta' sa Java?",
      options: [
        "print('Kamusta');",
        "System.out.println('Kamusta');",
        'System.out.println("Kamusta");',
        'console.log("Kamusta");',
      ],
      correctAnswer: 2,
      explanation:
        'Sa Java, gamitin ang System.out.println("Kamusta"); gamit ang double quotes para sa text.',
      hint: "Double quotes ang gamit sa Java para sa text, hindi single quotes.",
    },
  },

  "1-comments": {
    content: `Ang comments ay mga note sa code na hindi binabasa ng computer. Tumutulong ito para maintindihan mo at ng iba kung ano ang ginagawa ng code.

May tatlong uri ng comments sa Java: single-line (//), multi-line (/* */), at documentation comments (/** */).

Mas maganda kung ang comments ay nag-e-explain kung BAKIT ginagawa ang isang bagay, hindi kung ANO ang ginagawa. Dapat malinaw na mismo sa code kung ano ang nangyayari.`,
    codeExample: `// Ito ay single-line comment

/*
Ito naman ay multi-line comment
Pwedeng multiple lines
*/

/**
 * Ito ay documentation comment
 * Ginagamit para sa paggawa ng documentation
 */
public class Halimbawa {
    // Main method - dito nagsisimula ang program
    public static void main(String[] args) {
        System.out.println("Kamusta!"); // Nagpi-print ng greeting
    }
}`,
    keyPoints: [
      "// para sa single-line comment",
      "/* */ para sa multi-line comment",
      "/** */ para sa documentation comments",
      "Hinindi binabasa ng computer ang comments",
    ],
    quiz: {
      question: "Ano ang simbolo para sa single-line comment sa Java?",
      options: ["#", "//", "/*", "--"],
      correctAnswer: 1,
      explanation:
        "Sa Java, // ang gamit para sa single-line comments. Lahat pagkatapos ng // sa linyang iyon ay hindi babasahin.",
      hint: "Dalawang forward slash ang gamit.",
    },
  },

  "1-print-statements": {
    content: `Iba't ibang paraan ang meron ang Java para magpakita ng text sa console. Mahalaga ito para sa debugging at pagpapakita ng impormasyon.

Ang System.out.println() ay nagpi-print ng text at lumilipat sa bagong line. Ang System.out.print() naman ay nagpi-print ng text pero hindi lumilipat sa bagong line. Pwede ring gumamit ng System.out.printf() para sa formatted output.

Pwede kang mag-print ng multiple values gamit ang + operator. Awtomatikong iko-convert ng Java ang numbers into text kapag ginamit ang +.`,
    codeExample: `public class PrintHalimbawa {
    public static void main(String[] args) {
        System.out.println("Ito ay may bagong line pagkatapos");
        System.out.print("Ito ");
        System.out.print("ay ");
        System.out.println("nasa iisang line");
        
        // Pagsasama-sama ng text
        System.out.println("Ako ay " + 25 + " taong gulang");
        
        // Formatting ng output
        System.out.printf("Ang Pi ay humigit-kumulang %.2f", 3.14159);
    }
}`,
    keyPoints: [
      "println() - nagla-line break pagkatapos mag-print",
      "print() - hindi nagla-line break",
      "Gamitin ang + para pagsamahin ang text at numbers",
      "printf() - pwedeng i-format ang output",
    ],
    quiz: {
      question: "Ano ang pagkakaiba ng print() at println()?",
      options: [
        "Mas mabilis ang print() kaysa println()",
        "Nagla-line break ang println() pagkatapos mag-print",
        "Numbers lang ang pwedeng i-print ng print()",
        "Walang pagkakaiba",
      ],
      correctAnswer: 1,
      explanation:
        "Ang println() ay nagpi-print ng text at lumilipat sa bagong line, habang ang print() ay nananatili sa same line.",
      hint: "Ang 'ln' sa println ay ibig sabihin 'line'.",
    },
  },

  "2-what-are-variables": {
    content: `Ang variables ay parang lalagyan ng data. Para itong mga kahon na may label kung saan mo pwedeng ilagay at kunin ulit ang impormasyon.

Sa Java, may specific na type ang bawat variable na nagsasabi kung anong klaseng data ang pwedeng ilagay. Kapag na-declare na ang variable na may type, hindi na pwedeng palitan ang type nito.

Dapat i-declare muna ang variable bago gamitin. Ang declaration ay nagsasabi sa Java kung anong type ng data ang ilalagay at anong pangalan ang gagamitin para tumukoy dito.`,
    keyPoints: [
      "Ang variables ay nag-i-store ng data",
      "May specific na type ang bawat variable",
      "Dapat i-declare muna bago gamitin",
      "Magbigay ng descriptive na pangalan sa variables",
    ],
    quiz: {
      question: "Ano ang variable sa programming?",
      options: [
        "Uri ng loop",
        "Lalagyan ng data values",
        "Method na nagre-return ng values",
        "Uri ng comment",
      ],
      correctAnswer: 1,
      explanation:
        "Ang variable ay lalagyan ng data values. Para itong kahon na may label kung saan mo pwedeng ilagay ang impormasyon.",
      hint: "Isipin mo itong storage container na may pangalan.",
    },
  },

  "2-data-types": {
    content: `May dalawang kategorya ng data types sa Java: primitive types at reference types. Ang primitive types ay nag-i-store ng simple values, habang ang reference types ay nag-i-store ng reference sa mga objects.

Ang main primitive types ay: int (whole numbers), double (decimal numbers), boolean (true/false), at char (single characters).

Mahalaga ang pagpili ng tamang data type para sa memory efficiency at pag-iwas sa errors. Halimbawa, gamitin ang int para sa pagbilang at double para sa calculations na kailangan ng decimal.`,
    codeExample: `public class DataTypes {
    public static void main(String[] args) {
        int edad = 25;              // Whole number
        double presyo = 19.99;      // Decimal number
        boolean estudyante = true;  // True o false
        char marka = 'A';           // Single character
        String pangalan = "Java";   // Text (reference type)
        
        System.out.println("Edad: " + edad);
        System.out.println("Presyo: $" + presyo);
        System.out.println("Estudyante: " + estudyante);
        System.out.println("Marka: " + marka);
        System.out.println("Pangalan: " + pangalan);
    }
}`,
    keyPoints: [
      "int - para sa whole numbers",
      "double - para sa decimal numbers",
      "boolean - para sa true o false",
      "char - para sa single characters",
      "String - para sa text (reference type)",
    ],
    quiz: {
      question:
        "Anong data type ang gagamitin para i-store ang presyo ng item tulad ng $19.99?",
      options: ["int", "boolean", "double", "char"],
      correctAnswer: 2,
      explanation:
        "Gamitin ang double para sa decimal numbers tulad ng mga presyo. Ang int ay para lang sa whole numbers.",
      hint: "May decimal point ang mga presyo, kaya kailangan ng decimal data type.",
    },
  },

  "2-variable-declaration": {
    content: `Ang pag-declare ng variable ay nangangahulugang gagawa ka nito at sasabihin kung anong type ito. Pwedeng isang step lang ang declaration at pagbibigay ng value, o pwede ring hiwalay.

Dapat descriptive ang pangalan ng variables at sundin ang camelCase convention: nagsisimula sa lowercase, at capitalize ang unang letra ng bawat kasunod na word.

Case-sensitive ang Java, kaya iba ang 'edad' at 'Edad'. Pumili ng meaningful na pangalan para madaling maintindihan ang code.`,
    codeExample: `public class Variables {
    public static void main(String[] args) {
        // Declaration at initialization
        int bilangNgEstudyante = 30;
        
        // Declaration lang muna
        double temperatura;
        temperatura = 72.5;  // Assignment
        
        // Multiple declarations
        int x = 5, y = 10, z = 15;
        
        // Magandang variable names
        int numberOfStudents = 25;
        double averageScore = 87.5;
        boolean isComplete = false;
    }
}`,
    keyPoints: [
      "I-declare ang variables: type name = value;",
      "Gamitin ang camelCase para sa variable names",
      "Dapat descriptive ang mga pangalan",
      "Case-sensitive ang Java",
    ],
    quiz: {
      question:
        "Alin ang tamang paraan para mag-declare ng integer variable na 'bilang' na may value 10?",
      options: [
        "int bilang = 10;",
        "bilang = 10;",
        "integer bilang = 10;",
        "var bilang = 10;",
      ],
      correctAnswer: 0,
      explanation:
        "Ang tamang syntax ay: int bilang = 10; Kailangan ng type (int), pangalan (bilang), at value (10).",
      hint: "Kailangan ng data type, variable name, equals sign, at value.",
    },
  },

  "2-string-operations": {
    content: `Ang Strings ay sequence ng characters na ginagamit para mag-store ng text. Sa Java, ang strings ay objects ng String class at nakapaloob sa double quotes.

Pwedeng pagsamahin ang strings gamit ang + operator. Marami ring useful methods ang Java para sa strings, tulad ng length(), toUpperCase(), at substring().

Immutable ang strings sa Java, ibig sabihin, hindi pwedeng baguhin kapag na-create na. Ang kahit anong operation na mukhang nagba-bago ng string ay gumagawa talaga ng bagong string.`,
    codeExample: `public class StringOps {
    public static void main(String[] args) {
        String pangalan = "Juan";
        String apelyido = "dela Cruz";
        
        // Pagsasama ng strings
        String buongPangalan = pangalan + " " + apelyido;
        System.out.println(buongPangalan);  // Juan dela Cruz
        
        // String methods
        System.out.println(buongPangalan.length());      // 13
        System.out.println(buongPangalan.toUpperCase()); // JUAN DELA CRUZ
        System.out.println(buongPangalan.substring(0, 4)); // Juan
        
        // Pagko-compare ng strings
        String name1 = "Java";
        String name2 = "Java";
        System.out.println(name1.equals(name2));  // true
    }
}`,
    keyPoints: [
      "Nakastore ang text sa double quotes",
      "Gamitin ang + para pagsamahin ang strings",
      "length() - nagbibigay ng bilang ng characters",
      "Gamitin ang equals() para i-compare ang strings, hindi ang ==",
    ],
    quiz: {
      question: "Ano ang ginagawa ng + operator sa strings?",
      options: [
        "Dinadagdag ang length nila",
        "Kinukumpara sila",
        "Pinagsasama-sama sila (concatenation)",
        "Kino-convert sa numbers",
      ],
      correctAnswer: 2,
      explanation:
        "Ang + operator ay nagsasama ng strings. Halimbawa, 'Kamusta' + ' ' + 'Mundo' ay magiging 'Kamusta Mundo'.",
      hint: "Tungkol ito sa pagsasama o pagdugtong ng strings.",
    },
  },

  "3-if-statements": {
    content: `Ang if statements ay nagpapahintulot sa iyong program na gumawa ng decisions. Nag-e-execute lang sila ng code kapag ang condition ay true.

Ang basic syntax ay: if (condition) { code to execute }. Dapat boolean expression ang condition na nag-e-evaluate sa true o false.

Ang if statements ay fundamental sa programming logic. Pinapayagan nila ang iyong program na mag-react nang iba base sa iba't ibang sitwasyon, ginagawang dynamic at interactive ang iyong code.`,
    codeExample: `public class IfHalimbawa {
    public static void main(String[] args) {
        int edad = 18;
        
        if (edad >= 18) {
            System.out.println("Ikaw ay adult na");
        }
        
        int temperatura = 75;
        if (temperatura > 80) {
            System.out.println("Mainit sa labas!");
        }
        
        boolean umuulan = true;
        if (umuulan) {
            System.out.println("Magdala ng payong");
        }
    }
}`,
    keyPoints: [
      "Nag-e-execute ang if statements kapag true ang condition",
      "Dapat boolean expressions ang mga conditions",
      "Gamitin ang comparison operators: >, <, >=, <=, ==, !=",
      "Code sa loob ng { } ay tatakbo lang kapag true ang condition",
    ],
    quiz: {
      question: "Kailan nag-e-execute ang code sa loob ng if statement?",
      options: [
        "Palagi",
        "Hindi kailanman",
        "Kapag true ang condition",
        "Kapag false ang condition",
      ],
      correctAnswer: 2,
      explanation:
        "Ang code sa loob ng if statement ay nag-e-execute lang kapag ang condition ay nag-e-evaluate sa true.",
      hint: "Ang 'if' keyword ay nangangahulugang 'kapag ito ay totoo'.",
    },
  },

  "3-else-if": {
    content: `Ang else statement ay nagbibigay ng alternative path kapag false ang if condition. Ang else if statement ay nagpapahintulot sa iyo na mag-check ng multiple conditions nang sunud-sunod.

Pwedeng mag-chain ng multiple else if statements para i-handle ang iba't ibang cases. Ang unang condition na mag-e-evaluate sa true ang mag-e-execute, at ang iba ay lalampasan.

Laging tapusin ng else statement kung gusto mong i-handle ang lahat ng iba pang cases. Tinitiyak nito na ang iyong program ay may response para sa bawat posibleng sitwasyon.`,
    codeExample: `public class ElseIfHalimbawa {
    public static void main(String[] args) {
        int score = 85;
        
        if (score >= 90) {
            System.out.println("Marka: A");
        } else if (score >= 80) {
            System.out.println("Marka: B");
        } else if (score >= 70) {
            System.out.println("Marka: C");
        } else if (score >= 60) {
            System.out.println("Marka: D");
        } else {
            System.out.println("Marka: F");
        }
        
        // Output: Marka: B
    }
}`,
    keyPoints: [
      "Nagbibigay ang else ng alternative kapag false ang if",
      "Nagche-check ang else if ng additional conditions",
      "Isang condition lang ang nag-e-execute",
      "Nahuhuli ng else ang lahat ng remaining cases",
    ],
    quiz: {
      question:
        "Sa if-else if-else chain, ilang blocks ng code ang pwedeng mag-execute?",
      options: ["Lahat sila", "Wala sa kanila", "Isa lang", "Kahit dalawa"],
      correctAnswer: 2,
      explanation:
        "Sa if-else if-else chain, ISANG block lang ng code ang nag-e-execute - ang unang condition na true, o ang else block kung walang true.",
      hint: "Kapag may isang naging true, ang iba ay nilalampasan na.",
    },
  },

  "3-switch-case": {
    content: `Ang switch statements ay nagbibigay ng mas malinis na paraan para i-handle ang multiple conditions base sa value ng isang variable. Lalong useful ito kapag marami kang possible values na iche-check.

Ang bawat case ay kumakatawan sa isang possible value. Kapag may match na nahanap, ang code para sa case na iyon ang mag-e-execute. Pinipigilan ng break statement ang fall-through sa susunod na case.

Optional ang default case pero recommended. Ito ang nagha-handle ng mga values na hindi match sa specified cases, katulad ng else statement.`,
    codeExample: `public class SwitchHalimbawa {
    public static void main(String[] args) {
        int araw = 3;
        String pangalanNgAraw;
        
        switch (araw) {
            case 1:
                pangalanNgAraw = "Lunes";
                break;
            case 2:
                pangalanNgAraw = "Martes";
                break;
            case 3:
                pangalanNgAraw = "Miyerkules";
                break;
            case 4:
                pangalanNgAraw = "Huwebes";
                break;
            case 5:
                pangalanNgAraw = "Biyernes";
                break;
            default:
                pangalanNgAraw = "Weekend";
        }
        
        System.out.println(pangalanNgAraw);  // Miyerkules
    }
}`,
    keyPoints: [
      "Nagche-check ang switch ng isang variable laban sa multiple values",
      "Ang bawat case ay kumakatawan sa isang possible value",
      "Pinipigilan ng break ang fall-through sa susunod na case",
      "Nagha-handle ang default ng mga unmatched values",
    ],
    quiz: {
      question:
        "Ano ang mangyayari kung makalimutan mo ang break statement sa switch case?",
      options: [
        "Mag-crash ang program",
        "Walang mangyayari",
        "Magtu-tuloy ang execution sa susunod na case (fall-through)",
        "Magre-restart ang switch statement",
      ],
      correctAnswer: 2,
      explanation:
        "Kapag walang break, ang execution ay 'fall-through' sa susunod na case, at mag-e-execute din ang code doon. Karaniwan ay hindi ito gusto.",
      hint: "Isipin kung ano ang ibig sabihin ng 'break' - ito ay para huminto sa switch.",
    },
  },

  "3-comparison-operators": {
    content: `Ang comparison operators ay nagko-compare ng dalawang values at nagre-return ng boolean result (true o false). Mahalaga ang mga ito para sa paggawa ng decisions sa iyong code.

Ang main comparison operators ay: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), at <= (less than or equal to).

Pwedeng pagsamahin ang multiple conditions gamit ang logical operators: && (and), || (or), at ! (not). Pinapayagan ka ng mga ito na gumawa ng complex conditional logic.`,
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
      "== nagche-check kung equal ang values",
      "!= nagche-check kung hindi equal ang values",
      ">, <, >=, <= nagko-compare ng numeric values",
      "&& (and), || (or), ! (not) nagsasama-sama ng conditions",
    ],
    quiz: {
      question: "Ano ang evaluation ng expression na (5 > 3) && (10 < 20)?",
      options: ["true", "false", "5", "Error"],
      correctAnswer: 0,
      explanation:
        "(5 > 3) ay true AT (10 < 20) ay true. true && true ay true.",
      hint: "Dapat parehong true ang conditions para maging true ang && (AND).",
    },
  },

  "3-logical-operators": {
    content: `Ang logical operators ay nagsasama-sama ng multiple boolean expressions. Mahalaga ang mga ito para sa paggawa ng complex conditions sa iyong mga program.

Ang tatlong main logical operators ay: && (AND), || (OR), at ! (NOT). Ang AND ay nangangailangan na parehong conditions ay true, ang OR ay nangangailangan na kahit isa ay true, at ang NOT ay nag-i-invert ng boolean value.

Ang pag-intindi sa logical operators ay nagpapahintulot sa iyo na magsulat ng mas sophisticated na conditional logic at gawing mas matalino ang iyong mga program.`,
    codeExample: `public class LogicalOps {
    public static void main(String[] args) {
        int edad = 25;
        boolean mayLisensya = true;
        
        // AND operator - dapat parehong true
        if (edad >= 18 && mayLisensya) {
            System.out.println("Pwedeng magmaneho");
        }
        
        // OR operator - kahit isa dapat true
        boolean weekend = false;
        boolean holiday = true;
        if (weekend || holiday) {
            System.out.println("Walang pasok ngayon!");
        }
        
        // NOT operator - nag-i-invert ng boolean
        boolean umuulan = false;
        if (!umuulan) {
            System.out.println("Pwedeng lumabas!");
        }
        
        // Complex conditions
        int score = 85;
        boolean pumasa = score >= 60 && score <= 100;
        System.out.println("Pumasa: " + pumasa);
    }
}`,
    keyPoints: [
      "&& (AND) nangangailangan na parehong conditions ay true",
      "|| (OR) nangangailangan na kahit isang condition ay true",
      "! (NOT) nag-i-invert ng boolean value",
      "Gamitin ang parentheses para i-group ang complex conditions",
    ],
    quiz: {
      question: "Ano ang evaluation ng expression na (true && false) || true?",
      options: ["true", "false", "Error", "null"],
      correctAnswer: 0,
      explanation:
        "(true && false) ay false, pero (false || true) ay true. Ang OR operator ang nagpapaging true sa buong expression.",
      hint: "I-evaluate muna ang &&, tapos ang ||. Kailangan lang ng OR ng isang true.",
    },
  },

  "4-for-loop": {
    content: `Ang for loops ay umuulit ng code ng specific na bilang ng beses. Perfect ang mga ito kapag alam mo nang eksakto kung ilang iterations ang kailangan.

Ang for loop ay may tatlong parts: initialization (start), condition (kung kailan hihinto), at increment (paano magbabago). Ang tatlong parts na ito ang kumokontrol sa behavior ng loop.

Karaniwang ginagamit ang for loops para sa pagbilang, pag-iterate sa arrays, at paggawa ng repetitive tasks na may set na bilang ng beses.`,
    codeExample: `public class ForLoop {
    public static void main(String[] args) {
        // Basic for loop
        for (int i = 1; i <= 5; i++) {
            System.out.println("Bilang: " + i);
        }
        // Output: Bilang: 1, Bilang: 2, Bilang: 3, Bilang: 4, Bilang: 5
        
        // Pagbilang pababa
        for (int i = 10; i >= 1; i--) {
            System.out.println(i);
        }
        
        // Pagbilang ng 2s
        for (int i = 0; i <= 10; i += 2) {
            System.out.println(i);  // 0, 2, 4, 6, 8, 10
        }
    }
}`,
    keyPoints: [
      "Umuulit ang for loops ng code ng specific na bilang ng beses",
      "Tatlong parts: initialization, condition, increment",
      "Ang i++ ay nangangahulugang increment by 1",
      "Nagtu-tuloy ang loop habang true ang condition",
    ],
    quiz: {
      question:
        "Ilang beses tatakbo ang loop na ito? for (int i = 0; i < 5; i++)",
      options: ["4 na beses", "5 na beses", "6 na beses", "Infinite na beses"],
      correctAnswer: 1,
      explanation:
        "Ang loop ay tatakbo ng 5 beses: i = 0, 1, 2, 3, 4. Kapag naging 5 na ang i, ang condition (i < 5) ay false, kaya hihinto ito.",
      hint: "Bilangin mula 0 hanggang 4 - iyon ay 5 na numero.",
    },
  },

  "4-while-loop": {
    content: `Ang while loops ay umuulit ng code habang true ang condition. Hindi tulad ng for loops, hindi mo kailangang malaman ang eksaktong bilang ng iterations bago magsimula.

Ang condition ay chiniche-check bago ang bawat iteration. Kung false ito mula sa simula, hindi kailanman mag-e-execute ang loop body.

Kapaki-pakinabang ang while loops kapag naghihintay ka ng isang bagay na mangyari o kapag ang bilang ng iterations ay depende sa user input o iba pang dynamic factors.`,
    codeExample: `public class WhileLoop {
    public static void main(String[] args) {
        // Basic while loop
        int bilang = 1;
        while (bilang <= 5) {
            System.out.println("Bilang: " + bilang);
            bilang++;
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
      "Tumatakbo ang while loops habang true ang condition",
      "Chiniche-check ang condition bago ang bawat iteration",
      "Siguraduhing magiging false ang condition eventually",
      "Kapaki-pakinabang kapag hindi alam ang iteration count",
    ],
    quiz: {
      question:
        "Ano ang mangyayari kung palaging true ang condition ng while loop?",
      options: [
        "Tatakbo ang loop ng isang beses",
        "Hindi kailanman tatakbo ang loop",
        "Magtu-tuloy ang loop magpakailanman (infinite loop)",
        "Mag-crash agad ang program",
      ],
      correctAnswer: 2,
      explanation:
        "Kung palaging true ang condition, magtu-tuloy ang loop magpakailanman, lumilikha ng infinite loop. Laging tiyakin na pwedeng maging false ang iyong condition.",
      hint: "Kung palaging true, kailan ito hihinto?",
    },
  },

  "4-do-while": {
    content: `Ang do-while loops ay katulad ng while loops, pero may isang key difference: palagi silang nag-e-execute kahit isang beses, kahit false ang condition.

Ang condition ay chiniche-check pagkatapos ng bawat iteration, hindi bago. Ginagarantiyahan nito na ang loop body ay tatakbo kahit isang beses.

Kapaki-pakinabang ang do-while loops kapag kailangan mong gumawa ng action muna bago magdecide kung uulitin, tulad ng pagdi-display ng menu at pagtatanong kung gusto pang magpatuloy ng user.`,
    codeExample: `public class DoWhileLoop {
    public static void main(String[] args) {
        // Basic do-while
        int bilang = 1;
        do {
            System.out.println("Bilang: " + bilang);
            bilang++;
        } while (bilang <= 5);
        
        // Tatakbo kahit isang beses kahit false ang condition
        int x = 10;
        do {
            System.out.println("Ito ay magpi-print kahit isang beses");
            x++;
        } while (x < 10);  // False ang condition, pero tumakbo ang loop ng isang beses
    }
}`,
    keyPoints: [
      "Palaging nag-e-execute ang do-while kahit isang beses",
      "Chiniche-check ang condition pagkatapos ng bawat iteration",
      "Syntax: do { code } while (condition);",
      "Kapaki-pakinabang para sa menu-driven programs",
    ],
    quiz: {
      question: "Ano ang pangunahing pagkakaiba ng while at do-while loops?",
      options: [
        "Mas mabilis ang while",
        "Palaging tumatakbo ang do-while kahit isang beses",
        "Hindi pwedeng gumamit ng break statements ang while",
        "Walang pagkakaiba",
      ],
      correctAnswer: 1,
      explanation:
        "Palaging nag-e-execute ang do-while loops kahit isang beses dahil ang condition ay chiniche-check pagkatapos ng loop body, hindi bago.",
      hint: "Isipin kung kailan chiniche-check ang condition - bago o pagkatapos?",
    },
  },

  "4-break-continue": {
    content: `Ang break at continue ay control statements na nagmo-modify ng loop behavior. Binibigyan ka nila ng fine-grained control sa loop execution.

Ang break statement ay agad na lumalabas sa loop, kahit ano pa ang condition. Kapaki-pakinabang ito kapag nahanap mo na ang hinahanap mo at hindi mo na kailangang magpatuloy.

Ang continue statement ay nilalampasan ang natitirang code sa kasalukuyang iteration at lumilipat sa susunod na iteration. Kapaki-pakinabang ito kapag gusto mong laktawan ang ilang values pero magpatuloy sa pag-loop.`,
    codeExample: `public class BreakContinue {
    public static void main(String[] args) {
        // break example
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                break;  // Lumabas sa loop kapag 5 na ang i
            }
            System.out.println(i);  // Magpi-print ng 1, 2, 3, 4
        }
        
        // continue example
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue;  // Laktawan kapag 3 ang i
            }
            System.out.println(i);  // Magpi-print ng 1, 2, 4, 5
        }
    }
}`,
    keyPoints: [
      "Agad na lumalabas ang break sa loop",
      "Lumilipat ang continue sa susunod na iteration",
      "Parehong gumagana sa for, while, at do-while loops",
      "Gamitin ang break para maagang lumabas, continue para laktawan ang values",
    ],
    quiz: {
      question: "Ano ang ginagawa ng continue statement sa isang loop?",
      options: [
        "Lumabas sa loop completely",
        "I-restart ang loop mula sa simula",
        "Laktawan ang natitirang kasalukuyang iteration",
        "I-pause ang loop",
      ],
      correctAnswer: 2,
      explanation:
        "Nilalampasan ng continue ang natitirang code sa kasalukuyang iteration at lumilipat sa susunod na iteration ng loop.",
      hint: "Ito ay nagpa-patuloy sa susunod na iteration, nilalampasan ang natitira sa kasalukuyan.",
    },
  },

  "4-nested-loops": {
    content: `Ang nested loops ay mga loops sa loob ng ibang loops. Makapangyarihan ang mga ito para gumawa gamit ang multi-dimensional data, gumawa ng patterns, at solusyunan ang complex problems.

Ang outer loop ay tumatakbo completely para sa bawat iteration ng inner loop. Kung ang outer loop ay tumatakbo ng 3 beses at ang inner loop ay tumatakbo ng 4 beses, ang inner loop body ay mag-e-execute ng 12 beses total (3 × 4).

Karaniwang ginagamit ang nested loops para sa pagproseso ng 2D arrays, paggawa ng patterns, at pag-implement ng algorithms na nangangailangan ng multiple levels ng iteration.`,
    codeExample: `public class NestedLoops {
    public static void main(String[] args) {
        // Mag-print ng multiplication table
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.print((i * j) + "\\t");
            }
            System.out.println();
        }
        
        // Gumawa ng pattern
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
        
        // Proseso ng 2D array
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
      "Ang nested loops ay mga loops sa loob ng ibang loops",
      "Ang inner loop ay kumukumpleto ng lahat ng iterations para sa bawat outer loop iteration",
      "Total iterations = outer iterations × inner iterations",
      "Karaniwang ginagamit para sa 2D arrays at patterns",
    ],
    quiz: {
      question:
        "Kung ang outer loop ay tumatakbo ng 4 na beses at ang inner loop ay tumatakbo ng 3 beses, ilang beses mag-e-execute ang inner loop body?",
      options: ["4 na beses", "3 na beses", "7 na beses", "12 na beses"],
      correctAnswer: 3,
      explanation:
        "Ang inner loop body ay mag-e-execute ng 12 beses (4 × 3). Para sa bawat 4 na outer iterations, ang inner loop ay tumatakbo ng 3 beses.",
      hint: "I-multiply ang bilang ng outer iterations sa inner iterations.",
    },
  },

  "5-array-basics": {
    content: `Ang arrays ay mga lalagyan na nagho-hold ng multiple values ng parehong type. Isipin ang array bilang isang hanay ng mga kahon, bawat isa ay naglalaman ng isang value.

Ang arrays ay may fixed size na nase-set kapag ginawa mo ang mga ito. Ang bawat element sa array ay may index (position), nagsisimula sa 0.

Kapaki-pakinabang ang arrays kapag kailangan mong mag-store at gumawa gamit ang collections ng related data, tulad ng listahan ng scores, names, o temperatures.`,
    codeExample: `public class ArrayBasics {
    public static void main(String[] args) {
        // Declare at initialize
        int[] mgaNumero = {10, 20, 30, 40, 50};
        
        // Access elements (nagsisimula ang index sa 0)
        System.out.println(mgaNumero[0]);  // 10
        System.out.println(mgaNumero[2]);  // 30
        
        // Baguhin ang elements
        mgaNumero[1] = 25;
        System.out.println(mgaNumero[1]);  // 25
        
        // Array length
        System.out.println("Haba: " + mgaNumero.length);  // 5
        
        // Gumawa ng array na may size
        String[] mgaPangalan = new String[3];
        mgaPangalan[0] = "Maria";
        mgaPangalan[1] = "Juan";
        mgaPangalan[2] = "Pedro";
    }
}`,
    keyPoints: [
      "Nag-i-store ang arrays ng multiple values ng parehong type",
      "Nagsisimula sa 0 ang array indices",
      "Gamitin ang [] para i-access ang elements: array[index]",
      "Nagbibigay ang array.length ng bilang ng elements",
    ],
    quiz: {
      question: "Sa array na may 5 elements, ano ang index ng huling element?",
      options: ["5", "4", "3", "6"],
      correctAnswer: 1,
      explanation:
        "Nagsisimula sa 0 ang array indices, kaya ang array na may 5 elements ay may indices 0, 1, 2, 3, 4. Ang huling index ay 4.",
      hint: "Nagsisimula sa 0 ang pagbilang ng arrays, hindi sa 1.",
    },
  },

  "5-array-iteration": {
    content: `Ang pag-iterate sa array ay nangangahulugang ina-access ang bawat element nang isa-isa. Ito ay isa sa mga pinakakaraniwang operations sa arrays.

Pwedeng gumamit ng regular na for loop na may index, o for-each loop na awtomatikong dumadaan sa bawat element.

Mas simple at less error-prone ang for-each loop kapag kailangan mong i-access ang bawat element. Gumamit ng regular na for loop kapag kailangan mo ang index o gusto mong baguhin ang elements.`,
    codeExample: `public class ArrayIteration {
    public static void main(String[] args) {
        int[] mgaScore = {85, 92, 78, 95, 88};
        
        // Regular for loop
        for (int i = 0; i < mgaScore.length; i++) {
            System.out.println("Score " + (i+1) + ": " + mgaScore[i]);
        }
        
        // For-each loop (enhanced for loop)
        for (int score : mgaScore) {
            System.out.println("Score: " + score);
        }
        
        // Kalkulahin ang average
        int sum = 0;
        for (int score : mgaScore) {
            sum += score;
        }
        double average = (double) sum / mgaScore.length;
        System.out.println("Average: " + average);
    }
}`,
    keyPoints: [
      "Gamitin ang for loop na may index: for (int i = 0; i < array.length; i++)",
      "Gamitin ang for-each loop: for (type element : array)",
      "Mas simple ang for-each pero walang index",
      "Laging gamitin ang array.length para maiwasan ang out of bounds",
    ],
    quiz: {
      question:
        "Aling loop ang pinakamainam para i-access ang bawat element sa array nang hindi kailangan ng index?",
      options: [
        "while loop",
        "do-while loop",
        "for-each loop",
        "switch statement",
      ],
      correctAnswer: 2,
      explanation:
        "Ang for-each loop (enhanced for loop) ay perpekto para i-access ang bawat element kapag hindi mo kailangan ng index.",
      hint: "May special na loop na dinisenyo para lang sa pag-iterate sa collections.",
    },
  },

  "5-array-algorithms": {
    content: `Ang array algorithms ay karaniwang patterns para solusyunan ang mga problema sa arrays. Ang pag-aaral ng mga fundamental algorithms na ito ay makakatulong sa iyo na solusyunan ang maraming programming challenges.

Ang karaniwang array algorithms ay kinabibilangan ng: paghahanap ng maximum/minimum value, pagkalkula ng sum at average, paghahanap ng elements, pag-reverse ng arrays, at pagso-sort.

Ang mga algorithm na ito ang pundasyon para sa mas complex na data manipulation. Ang pag-intindi sa mga ito ay gagawing mas magaling na programmer at problem solver.`,
    codeExample: `public class ArrayAlgorithms {
    public static void main(String[] args) {
        int[] mgaNumero = {45, 23, 67, 12, 89, 34};
        
        // Hanapin ang maximum
        int max = mgaNumero[0];
        for (int num : mgaNumero) {
            if (num > max) max = num;
        }
        System.out.println("Max: " + max);  // 89
        
        // Kalkulahin ang sum at average
        int sum = 0;
        for (int num : mgaNumero) {
            sum += num;
        }
        double average = (double) sum / mgaNumero.length;
        System.out.println("Average: " + average);
        
        // Hanapin ang element
        int target = 67;
        int index = -1;
        for (int i = 0; i < mgaNumero.length; i++) {
            if (mgaNumero[i] == target) {
                index = i;
                break;
            }
        }
        System.out.println("Nahanap sa index: " + index);
        
        // I-reverse ang array
        int[] reversed = new int[mgaNumero.length];
        for (int i = 0; i < mgaNumero.length; i++) {
            reversed[i] = mgaNumero[mgaNumero.length - 1 - i];
        }
    }
}`,
    keyPoints: [
      "Paghahanap ng max/min: iterate at i-compare ang bawat element",
      "Sum/average: i-accumulate ang values at i-divide sa length",
      "Paghahanap: iterate hanggang mahanap ang element",
      "Pag-reverse: i-swap ang elements mula sa dulo papuntang gitna",
    ],
    quiz: {
      question:
        "Ano ang pinakamainam na paraan para hanapin ang maximum value sa array?",
      options: [
        "I-sort ang array at kunin ang huling element",
        "Mag-iterate at itrack ang pinakamalaking value na nakita",
        "Gumamit ng nested loop para i-compare ang lahat ng pairs",
        "Hindi pwedeng mag-store ng maximum values ang arrays",
      ],
      correctAnswer: 1,
      explanation:
        "Ang pinakaefficient na paraan ay mag-iterate ng isang beses sa array, itinatrack ang pinakamalaking value na nakita.",
      hint: "Kailangan mo lang dumaan sa array ng isang beses.",
    },
  },

  "5-multi-arrays": {
    content: `Ang multi-dimensional arrays ay arrays ng arrays. Ang pinakakaraniwan ay ang 2D array, na pwedeng isipin bilang table na may rows at columns.

Ang 2D array ay dine-declare gamit ang dalawang set ng brackets: int[][] matrix. Ang unang index ay kumakatawan sa row, at ang pangalawa ay kumakatawan sa column.

Kapaki-pakinabang ang multi-dimensional arrays para sa pagre-represent ng grids, tables, matrices, game boards, at iba pang structured data.`,
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
        
        // Iterate sa 2D array
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
    keyPoints: [
      "Ang 2D arrays ay arrays ng arrays",
      "Dine-declare gamit ang [][]: int[][] array",
      "Unang index ay row, pangalawa ay column",
      "Gamitin ang nested loops para mag-iterate sa 2D arrays",
    ],
    quiz: {
      question:
        "Paano i-access ang element sa row 2, column 3 ng 2D array na may pangalang 'grid'?",
      options: ["grid[3][2]", "grid[2][3]", "grid(2, 3)", "grid[2, 3]"],
      correctAnswer: 1,
      explanation:
        "Gamitin ang grid[2][3] kung saan ang unang index ay row at ang pangalawa ay column. Tandaan na nagsisimula sa 0 ang indices.",
      hint: "Unang bracket ay row, pangalawang bracket ay column.",
    },
  },

  "6-method-basics": {
    content: `Ang methods ay reusable blocks ng code na gumagawa ng specific na tasks. Tumutulong ang mga ito na i-organize ang iyong code at maiwasan ang repetition.

Ang method ay may pangalan, parameters (inputs), at return type (output). Pwedeng tawagin ang methods nang maraming beses mula sa iba't ibang parte ng iyong program.

Ang paggamit ng methods ay nagpapaging mas modular, mas madaling i-test, at mas madaling i-maintain ang iyong code. Sa halip na isulat ang parehong code nang maraming beses, isusulat mo ito nang isang beses sa method at tatawagin kapag kailangan.`,
    codeExample: `public class MethodBasics {
    // Method na nagpi-print ng greeting
    public static void greet() {
        System.out.println("Hello, Mundo!");
    }
    
    // Method na nagpi-print ng custom greeting
    public static void greetPerson(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static void main(String[] args) {
        greet();                // Hello, Mundo!
        greetPerson("Maria");   // Hello, Maria!
        greetPerson("Juan");    // Hello, Juan!
    }
}`,
    keyPoints: [
      "Ang methods ay reusable blocks ng code",
      "Syntax: public static returnType methodName(parameters)",
      "Ang void ay nangangahulugang walang return value ang method",
      "Tawagin ang methods sa pamamagitan ng pangalan: methodName(arguments)",
    ],
    quiz: {
      question: "Ano ang pangunahing layunin ng paggamit ng methods?",
      options: [
        "Para mas mabilis tumakbo ang programs",
        "Para i-reuse ang code at i-organize nang mas maayos ang programs",
        "Para gumamit ng mas maraming memory",
        "Para gawing mas mahaba ang programs",
      ],
      correctAnswer: 1,
      explanation:
        "Tumutulong ang methods na i-reuse ang code at i-organize nang mas maayos ang programs. Sa halip na ulitin ang code, isusulat mo ito nang isang beses sa method at tatawagin kapag kailangan.",
      hint: "Isipin ang pag-iwas sa repetition at pag-organize ng code.",
    },
  },

  "6-parameters": {
    content: `Ang parameters ay mga variable na tumatanggap ng values kapag tinatawag ang method. Pinapayagan nila ang mga methods na gumawa gamit ang iba't ibang data sa bawat pagtawag.

Kapag iki-define mo ang method, tinutukoy mo ang parameters sa parentheses. Kapag tinatawag mo ang method, ipinapasa mo ang arguments (actual values) na match sa parameters.

Pwedeng magkaroon ng multiple parameters na pinaghihiwalay ng commas. Ang order at type ng arguments ay dapat match sa parameters kapag tinatawag ang method.`,
    codeExample: `public class Parameters {
    // Method na may isang parameter
    public static void printSquare(int number) {
        int result = number * number;
        System.out.println(number + " squared is " + result);
    }
    
    // Method na may multiple parameters
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
      "Ang parameters ay mga variable sa method definition",
      "Ang arguments ay actual values na ipinapasa kapag tinatawag",
      "Pinaghihiwalay ng commas ang multiple parameters",
      "Dapat match ang parameter order at type kapag tinatawag",
    ],
    quiz: {
      question: "Ano ang pagkakaiba ng parameters at arguments?",
      options: [
        "Walang pagkakaiba",
        "Ang parameters ay nasa method definition, ang arguments ay ipinapasa kapag tinatawag",
        "Ang arguments ay nasa method definition, ang parameters ay ipinapasa kapag tinatawag",
        "Para sa numbers ang parameters, para sa strings ang arguments",
      ],
      correctAnswer: 1,
      explanation:
        "Ang parameters ay mga variable sa method definition. Ang arguments ay actual values na ipinapasa mo kapag tinatawag ang method.",
      hint: "Ang parameters ay placeholders, ang arguments ay actual values.",
    },
  },

  "6-return-values": {
    content: `Ang methods ay pwedeng mag-return ng values gamit ang return statement. Ang return type sa method signature ay tumutukoy kung anong type ng value ang iri-return ng method.

Kapag nagre-return ng value ang method, pwedeng i-store ito sa variable o gamitin directly sa expressions. Agad na lumalabas ang return statement sa method.

Kung walang iri-return ang method, gamitin ang void bilang return type. Kapaki-pakinabang ang methods na may return values para sa calculations at data processing.`,
    codeExample: `public class ReturnValues {
    // Method na nagre-return ng integer
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method na nagre-return ng boolean
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    // Method na nagre-return ng String
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
        System.out.println("Even: " + check);  // Even: true
        
        String grade = getGrade(85);
        System.out.println("Marka: " + grade);  // Marka: B
    }
}`,
    keyPoints: [
      "Tumutukoy ang return type kung ano ang iri-return ng method",
      "Gamitin ang return statement para magpadala pabalik ng value",
      "Ang void ay nangangahulugang walang return value",
      "Agad na lumalabas ang return statement sa method",
    ],
    quiz: {
      question: "Ano ang iri-return ng method na may return type na 'void'?",
      options: ["Integer", "String", "Wala", "Boolean"],
      correctAnswer: 2,
      explanation:
        "Ang method na may return type na 'void' ay hindi nagre-return ng anumang value. Gumagawa lang ito ng actions nang hindi nagpapadala ng data pabalik.",
      hint: "Ang void ay nangangahulugang walang laman o wala.",
    },
  },

  "6-method-overloading": {
    content: `Ang method overloading ay nagpapahintulot sa iyo na magkaroon ng multiple methods na may parehong pangalan pero ibang parameters. Tinutukoy ng Java kung aling method ang tatawagin base sa arguments na ibibigay mo.

Ang methods ay na-o-overload kapag may parehong pangalan pero ibang parameter lists (iba ang bilang o type ng parameters).

Kapaki-pakinabang ang overloading kapag gusto mong gumawa ng similar operations na may iba't ibang types o bilang ng inputs. Ginagawang mas flexible at mas madaling gamitin ang iyong code.`,
    codeExample: `public class MethodOverloading {
    // Method na may isang int parameter
    public static int multiply(int a) {
        return a * a;
    }
    
    // Method na may dalawang int parameters
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    // Method na may tatlong int parameters
    public static int multiply(int a, int b, int c) {
        return a * b * c;
    }
    
    // Method na may double parameters
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
      "Overloading = parehong method name, ibang parameters",
      "Dapat magkaiba ang parameters sa bilang o type",
      "Pinipili ng Java ang tamang method base sa arguments",
      "Ginagawang mas flexible at user-friendly ang code",
    ],
    quiz: {
      question: "Ano ang method overloading?",
      options: [
        "Pagkakaroon ng sobrang daming methods sa class",
        "Pagkakaroon ng multiple methods na may parehong pangalan pero ibang parameters",
        "Pagkakaroon ng methods na nagre-return ng multiple values",
        "Pagkakaroon ng methods na masyadong mabagal tumakbo",
      ],
      correctAnswer: 1,
      explanation:
        "Ang method overloading ay pagkakaroon ng multiple methods na may parehong pangalan pero ibang parameter lists (iba ang bilang o type).",
      hint: "Parehong pangalan, ibang parameters.",
    },
  },

  "6-recursion": {
    content: `Ang recursion ay kapag ang method ay tumatawag sa sarili nito. Ito ay makapangyarihang technique para solusyunan ang mga problemang pwedeng hatiin sa mas maliliit, similar na subproblems.

Ang bawat recursive method ay nangangailangan ng dalawang parts: base case (kung kailan hihinto) at recursive case (pagtawag sa sarili nito na may mas simpleng problema). Kung walang base case, magtu-tuloy ang recursion magpakailanman.

Elegante ang recursion para sa mga problema tulad ng pagkalkula ng factorials, pag-traverse ng trees, at pagsosolusyon ng mathematical sequences. Gayunpaman, gumagamit ito ng mas maraming memory kaysa loops, kaya gamitin ito nang matalino.`,
    codeExample: `public class Recursion {
    // Kalkulahin ang factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120
    public static int factorial(int n) {
        // Base case
        if (n <= 1) {
            return 1;
        }
        // Recursive case
        return n * factorial(n - 1);
    }
    
    // Kalkulahin ang Fibonacci number
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
      "Ang recursion ay kapag ang method ay tumatawag sa sarili nito",
      "Kailangan ng base case para huminto ang recursion",
      "Ang recursive case ay nagsosolusyon ng mas simpleng version ng problema",
      "Kapaki-pakinabang para sa mga problemang may repetitive substructure",
    ],
    quiz: {
      question:
        "Ano ang mangyayari kung walang base case ang recursive method?",
      options: [
        "Tatakbo ito ng isang beses at hihinto",
        "Magdudulot ito ng infinite recursion at stack overflow",
        "Awtomatikong hihinto pagkatapos ng 100 calls",
        "Wala, optional lang ang base cases",
      ],
      correctAnswer: 1,
      explanation:
        "Kung walang base case, patuloy na tatawag ang method sa sarili nito magpakailanman, na magdudulot ng stack overflow error.",
      hint: "Kung walang stopping condition, hindi ito hihinto.",
    },
  },

  "7-class-basics": {
    content: `Ang classes ay mga blueprint para gumawa ng objects. Tinutukoy nila ang mga properties (fields) at behaviors (methods) na magkakaroon ang objects ng class na iyon.

Ang object ay instance ng class. Pwedeng gumawa ng multiple objects mula sa parehong class, bawat isa ay may sariling set ng property values.

Ang classes ay pundasyon ng object-oriented programming. Tumutulong sila na i-organize ang code sa pamamagitan ng pag-grupo ng related data at functions.`,
    codeExample: `public class Aso {
    // Fields (properties)
    String pangalan;
    int edad;
    String lahi;
    
    // Method (behavior)
    public void tumahol() {
        System.out.println(pangalan + " says: Aw! Aw!");
    }
    
    public void displayInfo() {
        System.out.println("Pangalan: " + pangalan);
        System.out.println("Edad: " + edad);
        System.out.println("Lahi: " + lahi);
    }
}

// Sa main method:
// Aso akingAso = new Aso();
// akingAso.pangalan = "Bantay";
// akingAso.edad = 3;
// akingAso.lahi = "Aspin";
// akingAso.tumahol();  // Bantay says: Aw! Aw!
// akingAso.displayInfo();`,
    keyPoints: [
      "Ang classes ay mga blueprint para sa objects",
      "Ang objects ay instances ng classes",
      "Nag-i-store ang fields ng object data (properties)",
      "Tinutukoy ng methods ang object behavior",
    ],
    quiz: {
      question: "Ano ang relasyon sa pagitan ng class at object?",
      options: [
        "Pareho lang sila",
        "Ang class ay blueprint, ang object ay instance ng class na iyon",
        "Ang object ay blueprint, ang class ay instance",
        "Walang relasyon ang classes at objects",
      ],
      correctAnswer: 1,
      explanation:
        "Ang class ay blueprint na tumutukoy ng structure at behavior. Ang object ay specific na instance na ginawa mula sa blueprint na iyon.",
      hint: "Isipin ang class bilang blueprint o template.",
    },
  },

  "7-constructors": {
    content: `Ang constructors ay special methods na nag-i-initialize ng objects kapag ginagawa ang mga ito. May parehong pangalan sila ng class at walang return type.

Awtomatikong tumatakbo ang constructors kapag ginamit mo ang 'new' keyword para gumawa ng object. Ginagamit ang mga ito para mag-set ng initial values para sa object fields.

Pwedeng magkaroon ng multiple constructors na may iba't ibang parameters (constructor overloading). Kung hindi ka magsusulat ng constructor, nagpro-provide ang Java ng default one.`,
    codeExample: `public class Estudyante {
    String pangalan;
    int edad;
    String major;
    
    // Constructor na walang parameters
    public Estudyante() {
        pangalan = "Hindi Kilala";
        edad = 0;
        major = "Hindi Pa Declare";
    }
    
    // Constructor na may parameters
    public Estudyante(String studentName, int studentAge, String studentMajor) {
        pangalan = studentName;
        edad = studentAge;
        major = studentMajor;
    }
}

// Sa main method:
// Estudyante estudyante1 = new Estudyante();
// Estudyante estudyante2 = new Estudyante("Maria", 20, "Computer Science");`,
    keyPoints: [
      "Nag-i-initialize ang constructors ng objects",
      "Parehong pangalan ng class, walang return type",
      "Awtomatikong tinatawag gamit ang 'new' keyword",
      "Pwedeng magkaroon ng multiple constructors (overloading)",
    ],
    quiz: {
      question: "Ano ang layunin ng constructor?",
      options: [
        "Para sirain ang objects",
        "Para i-initialize ang objects kapag ginagawa ang mga ito",
        "Para kopyahin ang objects",
        "Para ikumpara ang objects",
      ],
      correctAnswer: 1,
      explanation:
        "Nag-i-initialize ang constructors ng objects kapag ginagawa ang mga ito. Nagse-set sila ng initial values para sa fields ng object.",
      hint: "Isipin kung ano ang nangyayari kapag gumagawa ka ng bagong object.",
    },
  },

  "7-encapsulation": {
    content: `Ang encapsulation ay ang practice ng pagtatago ng internal details at pagbibigay ng controlled access sa object data. Nakakamit ito gamit ang private fields at public getter/setter methods.

Ang private fields ay pwedeng ma-access lang sa loob ng class. Ang public methods ay nagbibigay ng controlled access, na nagpapahintulot sa iyo na i-validate ang data bago i-set.

Pinoprotektahan ng encapsulation ang data integrity at ginagawang mas maintainable ang code. Pwedeng baguhin ang internal implementation nang hindi naaapektuhan ang code na gumagamit ng iyong class.`,
    codeExample: `public class BankAccount {
    // Private fields (nakatago sa labas)
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
      "Itinatago ng encapsulation ang internal details",
      "Gamitin ang private para sa fields, public para sa methods",
      "Nagbibigay ang getters ng read access",
      "Nagbibigay ang setters ng controlled write access",
    ],
    quiz: {
      question:
        "Bakit gumagamit tayo ng private fields na may public getter/setter methods?",
      options: [
        "Para gawing mas mahaba ang code",
        "Para kontrolin ang access at protektahan ang data integrity",
        "Para mas mabilis tumakbo ang code",
        "Hindi mahalaga ang private at public",
      ],
      correctAnswer: 1,
      explanation:
        "Ang private fields na may public getters/setters ay kumokontrol sa access sa data, na nagpapahintulot ng validation at pagproprotekta sa data integrity.",
      hint: "Isipin ang pagproprotekta at pagkontrol sa access sa data.",
    },
  },

  "7-inheritance": {
    content: `Ang inheritance ay nagpapahintulot sa class na magmana ng fields at methods mula sa ibang class. Ang class na nagmamana ay tinatawag na subclass, at ang class na pinagmamanaan ay ang superclass.

Gamitin ang 'extends' keyword para gumawa ng subclass. Nakukuha ng subclass ang lahat ng non-private members ng superclass at pwedeng magdagdag ng sariling unique features.

Pinopromote ng inheritance ang code reuse at lumilikha ng hierarchical relationships sa pagitan ng classes. Ito ay fundamental concept sa object-oriented programming.`,
    codeExample: `// Superclass
public class Hayop {
    String pangalan;
    
    public void kumain() {
        System.out.println(pangalan + " ay kumakain");
    }
    
    public void matulog() {
        System.out.println(pangalan + " ay natutulog");
    }
}

// Subclass
public class Aso extends Hayop {
    String lahi;
    
    // Namana ng Aso ang kumain() at matulog()
    // Nagdagdag ang Aso ng sariling method
    public void tumahol() {
        System.out.println(pangalan + " says: Aw! Aw!");
    }
}

// Sa main:
// Aso akingAso = new Aso();
// akingAso.pangalan = "Bantay";
// akingAso.lahi = "Aspin";
// akingAso.kumain();    // Namana mula sa Hayop
// akingAso.tumahol();   // Idefine sa Aso`,
    keyPoints: [
      "Lumilikha ang inheritance ng parent-child relationships",
      "Gamitin ang 'extends' keyword para sa inheritance",
      "Namamana ng subclass ang non-private members",
      "Pwedeng magdagdag ang subclass ng sariling unique features",
    ],
    quiz: {
      question:
        "Anong keyword ang ginagamit para magmana mula sa ibang class sa Java?",
      options: ["inherits", "extends", "implements", "super"],
      correctAnswer: 1,
      explanation:
        "Ang 'extends' keyword ang ginagamit para gumawa ng subclass na nagmamana mula sa superclass.",
      hint: "Ito ay salita na nangangahulugang gawing mas malaki o mas mahaba.",
    },
  },

  "7-polymorphism": {
    content: `Ang polymorphism ay nangangahulugang "maraming anyo." Pinapayagan nito ang mga objects ng iba't ibang classes na ituring bilang objects ng common parent class, habang pinapanatili ang kanilang unique behaviors.

Ang method overriding ay key aspect ng polymorphism. Pwedeng magbigay ang subclass ng sariling implementation ng method na minana mula sa parent class.

Ginagawang mas flexible at extensible ng polymorphism ang code. Pwedeng magsulat ng code na gumagana sa parent class types, pero awtomatikong gumagamit ng tamang subclass behavior sa runtime.`,
    codeExample: `// Parent class
class Hayop {
    public void tumahol() {
        System.out.println("Generic na tunog");
    }
}

// Override ng subclasses ang tumahol()
class Aso extends Hayop {
    @Override
    public void tumahol() {
        System.out.println("Aw! Aw!");
    }
}

class Pusa extends Hayop {
    @Override
    public void tumahol() {
        System.out.println("Meow!");
    }
}

class Baka extends Hayop {
    @Override
    public void tumahol() {
        System.out.println("Moo!");
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        // Polymorphism in action
        Hayop[] mgaHayop = {new Aso(), new Pusa(), new Baka()};
        
        for (Hayop hayop : mgaHayop) {
            hayop.tumahol();  // Tatawag ang tamang version
        }
        // Output:
        // Aw! Aw!
        // Meow!
        // Moo!
    }
}`,
    keyPoints: [
      "Pinapayagan ng polymorphism ang objects na magkaroon ng maraming anyo",
      "Pwedeng i-override ng subclasses ang parent class methods",
      "Gamitin ang @Override annotation para sa clarity",
      "Nag-e-enable ng flexible, extensible code design",
    ],
    quiz: {
      question: "Ano ang polymorphism sa Java?",
      options: [
        "Pagkakaroon ng multiple constructors",
        "Pagtrato sa objects ng iba't ibang classes bilang objects ng common parent class",
        "Paggamit ng multiple inheritance",
        "Paglikha ng multiple objects",
      ],
      correctAnswer: 1,
      explanation:
        "Pinapayagan ng polymorphism ang objects ng iba't ibang classes na ituring bilang objects ng common parent class, habang pinapanatili ang kanilang unique behaviors.",
      hint: "Ang poly ay marami, ang morph ay anyo - maraming anyo.",
    },
  },
};
