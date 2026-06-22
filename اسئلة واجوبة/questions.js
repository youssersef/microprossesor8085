// بنك الأسئلة الخارجي - يمكنك التعديل والإضافة هنا بكل سهولة
const quizData = {
    "salahQuestions":[
    {
        "q": "Which instruction adds an 8-bit number directly to the accumulator?",
        "q_ar": "ما هي التعليمة التي تضيف رقم 8-بت مباشرة إلى المجمع؟",
        "options": [
            "SUB",
            "ADD",
            "CMP",
            "ORA"
        ],
        "opt_ar": [
            "طرح",
            "جمع",
            "مقارنة",
            "OR منطقي"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction subtracts data from the accumulator?",
        "q_ar": "ما هي التعليمة التي تقوم بطرح البيانات من الـ Accumulator؟",
        "options": [
            "INR",
            "ADD",
            "SUB",
            "ANA"
        ],
        "opt_ar": [
            "زيادة بمقدار 1",
            "جمع",
            "طرح",
            "AND منطقي"
        ],
        "answer": 2
    },
    {
        "q": "What is the function of INR instruction?",
        "q_ar": "ما وظيفة التعليمة INR؟",
        "options": [
            "Decrement by 1",
            "Increment by 1",
            "Rotate data",
            "Compare data"
        ],
        "opt_ar": [
            "إنقاص بمقدار 1",
            "زيادة بمقدار 1",
            "تدوير البيانات",
            "مقارنة البيانات"
        ],
        "answer": 1
    },
    {
        "q": "Which register pair is used to identify memory location in ADD M instruction?",
        "q_ar": "أي زوج Registers يُستخدم لتحديد موقع الذاكرة في التعليمة ADD M؟",
        "options": [
            "BC",
            "DE",
            "HL",
            "SP"
        ],
        "opt_ar": [
            "BC",
            "DE",
            "HL",
            "SP"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction performs logical AND operation?",
        "q_ar": "ما التعليمة التي تنفذ عملية AND المنطقية؟",
        "options": [
            "ORA",
            "XRA",
            "ANA",
            "CMP"
        ],
        "opt_ar": [
            "ORA",
            "XRA",
            "ANA",
            "CMP"
        ],
        "answer": 2
    },
    {
        "q": "What does CMA instruction do?",
        "q_ar": "ماذا تفعل التعليمة CMA؟",
        "options": [
            "Adds data",
            "Rotates bits",
            "Complements accumulator",
            "Clears memory"
        ],
        "opt_ar": [
            "إضافة بيانات",
            "تدوير البتات",
            "أخذ المتمم للـ Accumulator",
            "مسح الذاكرة"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction rotates accumulator left?",
        "q_ar": "ما التعليمة التي تدور الـ Accumulator جهة اليسار؟",
        "options": [
            "RRC",
            "RAR",
            "RLC",
            "CMP"
        ],
        "opt_ar": [
            "RRC",
            "RAR",
            "RLC",
            "CMP"
        ],
        "answer": 2
    },
    {
        "q": "In RRC instruction, which bit goes to carry flag?",
        "q_ar": "في التعليمة RRC، أي Bit ينتقل إلى Carry Flag؟",
        "options": [
            "Bit 7",
            "Bit 0",
            "Bit 3",
            "Bit 5"
        ],
        "opt_ar": [
            "البت رقم 7",
            "البت رقم 0",
            "البت رقم 3",
            "البت رقم 5"
        ],
        "answer": 1
    },
    {
        "q": "CMP instruction affects which flags?",
        "q_ar": "تعليمة CMP تؤثر على أي Flags؟",
        "options": [
            "Carry only",
            "Zero only",
            "Z, CY, S",
            "None"
        ],
        "opt_ar": [
            "Carry فقط",
            "Zero فقط",
            "Z, CY, S (Zero و Carry و Sign)",
            "لا شيء"
        ],
        "answer": 2
    },
    {
        "q": "Which branch instruction always jumps?",
        "q_ar": "أي تعليمة Jump تقفز دائمًا بدون شرط؟",
        "options": [
            "JNZ",
            "JC",
            "JMP",
            "JZ"
        ],
        "opt_ar": [
            "JNZ",
            "JC",
            "JMP",
            "JZ"
        ],
        "answer": 2
    },
    {
        "q": "JZ instruction jumps when ________.",
        "q_ar": "تعليمة JZ تنفذ القفز عندما ________.",
        "options": [
            "Carry = 1",
            "Zero flag = 1",
            "Sign = 1",
            "Carry = 0"
        ],
        "opt_ar": [
            "Carry = 1",
            "Zero flag = 1",
            "Sign = 1",
            "Carry = 0"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction stops program execution?",
        "q_ar": "ما التعليمة التي توقف تنفيذ البرنامج؟",
        "options": [
            "NOP",
            "HLT",
            "JMP",
            "CMP"
        ],
        "opt_ar": [
            "NOP",
            "HLT",
            "JMP",
            "CMP"
        ],
        "answer": 1
    },
    {
        "q": "What is the function of NOP instruction?",
        "q_ar": "ما وظيفة التعليمة NOP؟",
        "options": [
            "Addition",
            "No operation",
            "Subtraction",
            "Rotate"
        ],
        "opt_ar": [
            "جمع",
            "لا تنفذ أي عملية",
            "طرح",
            "تدوير"
        ],
        "answer": 1
    },
    {
        "q": "Which addressing mode uses immediate data?",
        "q_ar": "أي نوع Addressing Mode يستخدم بيانات مباشرة؟",
        "options": [
            "Direct",
            "Immediate",
            "Indirect",
            "Implied"
        ],
        "opt_ar": [
            "Direct",
            "فوري",
            "غير مباشر",
            "ضمني"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction is an example of direct addressing mode?",
        "q_ar": "أي تعليمة تعتبر مثال على Direct Addressing Mode؟",
        "options": [
            "CMA",
            "MVI B,45H",
            "LDA 4000H",
            "MOV A,B"
        ],
        "opt_ar": [
            "CMA",
            "MVI B,45H",
            "LDA 4000H",
            "MOV A,B"
        ],
        "answer": 2
    },
    {
        "q": "Instructions containing memory address occupy how many bytes?",
        "q_ar": "التعليمات التي تحتوي على عنوان ذاكرة تشغل كام Byte؟",
        "options": [
            "1 Byte",
            "2 Bytes",
            "3 Bytes",
            "4 Bytes"
        ],
        "opt_ar": [
            "1 بايت",
            "2 بايت",
            "3 بايت",
            "4 بايت"
        ],
        "answer": 2
    },
    {
        "q": "Which data format represents letters and symbols?",
        "q_ar": "أي صيغة بيانات تمثل الحروف والرموز؟",
        "options": [
            "BCD",
            "ASCII",
            "Binary",
            "Hexadecimal"
        ],
        "opt_ar": [
            "BCD",
            "ASCII",
            "ثنائي",
            "سداسي عشر"
        ],
        "answer": 1
    },
    {
        "q": "What is the maximum loop count using a single register?",
        "q_ar": "ما أكبر عدد للتكرار باستخدام Register واحد؟",
        "options": [
            "16",
            "64",
            "255",
            "1024"
        ],
        "opt_ar": [
            "16",
            "64",
            "255",
            "1024"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction decrements a register pair?",
        "q_ar": "ما التعليمة التي تنقص قيمة Register Pair؟",
        "options": [
            "INR",
            "DCR",
            "DCX",
            "CMP"
        ],
        "opt_ar": [
            "INR",
            "DCR",
            "DCX",
            "CMP"
        ],
        "answer": 2
    },
    {
        "q": "Delay time can be calculated using:",
        "q_ar": "يمكن حساب زمن التأخير باستخدام:",
        "options": [
            "Frequency * T-States",
            "T-States / Frequency",
            "Frequency / Address",
            "Bytes * Frequency"
        ],
        "opt_ar": [
            "التردد × T-States",
            "T-States ÷ التردد",
            "التردد ÷ العنوان",
            "Bytes × التردد"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction is used for decimal adjustment?",
        "q_ar": "أي تعليمة تستخدم للضبط العشري؟",
        "options": [
            "DAA",
            "ADD",
            "SUB",
            "CMP"
        ],
        "opt_ar": [
            "DAA",
            "ADD",
            "SUB",
            "CMP"
        ],
        "answer": 0
    },
    {
        "q": "What does PUSH instruction do?",
        "q_ar": "ماذا تفعل التعليمة PUSH؟",
        "options": [
            "Reads data from memory",
            "Stores data on stack",
            "Clears stack",
            "Rotates accumulator"
        ],
        "opt_ar": [
            "تقرأ البيانات من الذاكرة",
            "تخزن البيانات على الـ Stack",
            "تمسح الـ Stack",
            "تدوير الـ Accumulator"
        ],
        "answer": 1
    },
    {
        "q": "Stack follows which principle?",
        "q_ar": "الـ Stack يعمل بأي مبدأ؟",
        "options": [
            "FIFO",
            "FILO",
            "LIFO",
            "Random"
        ],
        "opt_ar": [
            "أول داخل أول خارج",
            "أول داخل آخر خارج",
            "آخر داخل أول خارج",
            "عشوائي"
        ],
        "answer": 2
    },
    {
        "q": "Which register defines the stack location?",
        "q_ar": "أي Register يحدد مكان الـ Stack؟",
        "options": [
            "PC",
            "SP",
            "HL",
            "ACC"
        ],
        "opt_ar": [
            "PC",
            "SP",
            "HL",
            "ACC"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction retrieves data from stack?",
        "q_ar": "ما التعليمة التي تسترجع البيانات من الـ Stack؟",
        "options": [
            "PUSH",
            "POP",
            "CALL",
            "JMP"
        ],
        "opt_ar": [
            "PUSH",
            "POP",
            "CALL",
            "JMP"
        ],
        "answer": 1
    },
    {
        "q": "CALL instruction is used for ________.",
        "q_ar": "تعليمة CALL تستخدم من أجل ________.",
        "options": [
            "Addition",
            "Delay",
            "Calling subroutine",
            "Ending program"
        ],
        "opt_ar": [
            "الجمع",
            "التأخير",
            "استدعاء Subroutine",
            "إنهاء البرنامج"
        ],
        "answer": 2
    },
    {
        "q": "RET instruction does what?",
        "q_ar": "ماذا تفعل التعليمة RET؟",
        "options": [
            "Stops processor",
            "Returns from subroutine",
            "Clears accumulator",
            "Increments SP"
        ],
        "opt_ar": [
            "توقف المعالج",
            "الرجوع من الـ Subroutine",
            "مسح الـ Accumulator",
            "زيادة SP"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction loads immediate data into accumulator?",
        "q_ar": "أي تعليمة تحمل بيانات مباشرة إلى الـ Accumulator؟",
        "options": [
            "MOV A,M",
            "MVI A,32H",
            "ADD M",
            "CMP B"
        ],
        "opt_ar": [
            "MOV A,M",
            "MVI A,32H",
            "ADD M",
            "CMP B"
        ],
        "answer": 1
    },
    {
        "q": "What is the opcode of MOV A,B instruction?",
        "q_ar": "ما هو Opcode الخاص بالتعليمة MOV A,B؟",
        "options": [
            "3E",
            "7E",
            "78",
            "77"
        ],
        "opt_ar": [
            "3E",
            "7E",
            "78",
            "77"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction transfers accumulator data to memory?",
        "q_ar": "أي تعليمة تنقل بيانات الـ Accumulator إلى الذاكرة؟",
        "options": [
            "MOV A,M",
            "MOV M,A",
            "ADD M",
            "ORA"
        ],
        "opt_ar": [
            "MOV A,M",
            "MOV M,A",
            "ADD M",
            "ORA"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction compares data without changing accumulator content?",
        "q_ar": "أي تعليمة تقارن البيانات بدون تغيير محتوى الـ Accumulator؟",
        "options": [
            "ADD",
            "CMP",
            "INR",
            "SUB"
        ],
        "opt_ar": [
            "ADD",
            "CMP",
            "INR",
            "SUB"
        ],
        "answer": 1
    },
    {
        "q": "What is the purpose of JNC instruction?",
        "q_ar": "ما الغرض من التعليمة JNC؟",
        "options": [
            "Jump if carry",
            "Jump if no carry",
            "Jump if zero",
            "Jump always"
        ],
        "opt_ar": [
            "القفز إذا وجد Carry",
            "القفز إذا لم يوجد Carry",
            "القفز إذا كان صفرًا",
            "القفز دائمًا"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction exchanges HL and DE register pairs?",
        "q_ar": "أي تعليمة تبدل بين زوجي السجلات HL و DE؟",
        "options": [
            "MOV",
            "LHLD",
            "XCHG",
            "SHLD"
        ],
        "opt_ar": [
            "MOV",
            "LHLD",
            "XCHG",
            "SHLD"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction stores HL pair directly into memory?",
        "q_ar": "أي تعليمة تخزن زوج HL مباشرة في الذاكرة؟",
        "options": [
            "LHLD",
            "SHLD",
            "MOV",
            "ADD"
        ],
        "opt_ar": [
            "LHLD",
            "SHLD",
            "MOV",
            "ADD"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction loads 16-bit data into HL pair?",
        "q_ar": "أي تعليمة تحمل بيانات 16-bit إلى HL Pair؟",
        "options": [
            "MOV",
            "LXI",
            "INR",
            "CMP"
        ],
        "opt_ar": [
            "MOV",
            "LXI",
            "INR",
            "CMP"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction loads accumulator from memory indirectly?",
        "q_ar": "أي تعليمة تقوم بتحميل الـ Accumulator من الذاكرة بطريقة غير مباشرة؟",
        "options": [
            "LDA",
            "LDAX",
            "MOV",
            "STA"
        ],
        "opt_ar": [
            "LDA",
            "LDAX",
            "MOV",
            "STA"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction increments a register pair by 1?",
        "q_ar": "أي تعليمة تزيد قيمة Register Pair بمقدار 1؟",
        "options": [
            "INR",
            "DCR",
            "INX",
            "DCX"
        ],
        "opt_ar": [
            "INR",
            "DCR",
            "INX",
            "DCX"
        ],
        "answer": 2
    },
    {
        "q": "Which operation is performed by XRA instruction?",
        "q_ar": "ما العملية التي تنفذها التعليمة XRA؟",
        "options": [
            "AND",
            "OR",
            "XOR",
            "ADD"
        ],
        "opt_ar": [
            "AND",
            "OR",
            "XOR",
            "ADD"
        ],
        "answer": 2
    },
    {
        "q": "What is the destination of logic operations in 8085?",
        "q_ar": "ما هو مكان تخزين ناتج العمليات المنطقية في 8085؟",
        "options": [
            "Register B",
            "Register C",
            "Accumulator",
            "Stack Pointer"
        ],
        "opt_ar": [
            "مسجل B",
            "مسجل C",
            "المجمع",
            "مؤشر المكدس"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction rotates accumulator right through carry?",
        "q_ar": "أي تعليمة تدور الـ Accumulator يمينًا خلال الـ Carry؟",
        "options": [
            "RLC",
            "RRC",
            "RAR",
            "RAL"
        ],
        "opt_ar": [
            "RLC",
            "RRC",
            "RAR",
            "RAL"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction rotates accumulator left through carry?",
        "q_ar": "أي تعليمة تدور الـ Accumulator يسارًا خلال الـ Carry؟",
        "options": [
            "RLC",
            "RAL",
            "RRC",
            "CMA"
        ],
        "opt_ar": [
            "RLC",
            "RAL",
            "RRC",
            "CMA"
        ],
        "answer": 1
    },
    {
        "q": "Which flag becomes set when result equals zero?",
        "q_ar": "أي Flag يتم تفعيله عندما تكون النتيجة صفر؟",
        "options": [
            "Carry Flag",
            "Sign Flag",
            "Zero Flag",
            "Auxiliary Flag"
        ],
        "opt_ar": [
            "مؤشر الحمل",
            "مؤشر الإشارة",
            "مؤشر الصفر",
            "مؤشر الحمل المساعد"
        ],
        "answer": 2
    },
    {
        "q": "JP instruction jumps when ________.",
        "q_ar": "تعليمة JP تقفز عندما ________.",
        "options": [
            "Sign flag is set",
            "Carry flag is reset",
            "Sign flag is reset",
            "Zero flag is set"
        ],
        "opt_ar": [
            "مؤشر الإشارة مفعل",
            "مؤشر الحمل غير مفعل",
            "مؤشر الإشارة غير مفعل",
            "مؤشر الصفر مفعل"
        ],
        "answer": 2
    },
    {
        "q": "JM instruction jumps when ________.",
        "q_ar": "تعليمة JM تقفز عندما ________.",
        "options": [
            "Zero flag is set",
            "Carry flag is set",
            "Sign flag is set",
            "Overflow occurs"
        ],
        "opt_ar": [
            "مؤشر الصفر مفعل",
            "مؤشر الحمل مفعل",
            "مؤشر الإشارة مفعل",
            "حدوث طفح"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction uses no operand?",
        "q_ar": "أي تعليمة لا تستخدم Operand؟",
        "options": [
            "LDA 4000H",
            "MVI A,32H",
            "CMA",
            "ADD B"
        ],
        "opt_ar": [
            "LDA 4000H",
            "MVI A,32H",
            "CMA",
            "ADD B"
        ],
        "answer": 2
    },
    {
        "q": "Immediate instructions occupy how many bytes?",
        "q_ar": "التعليمات Immediate تشغل كام Byte؟",
        "options": [
            "1 Byte",
            "2 Bytes",
            "3 Bytes",
            "4 Bytes"
        ],
        "opt_ar": [
            "1 بايت",
            "2 بايت",
            "3 بايت",
            "4 بايت"
        ],
        "answer": 1
    },
    {
        "q": "In instruction MVI A,32H what is 32H?",
        "q_ar": "في التعليمة MVI A,32H ما هو 32H؟",
        "options": [
            "Opcode",
            "Address",
            "Immediate Data",
            "Register"
        ],
        "opt_ar": [
            "Opcode",
            "عنوان",
            "بيانات مباشرة",
            "سجل"
        ],
        "answer": 2
    },
    {
        "q": "Which addressing mode uses register pair to access memory?",
        "q_ar": "أي Addressing Mode يستخدم Register Pair للوصول للذاكرة؟",
        "options": [
            "Direct",
            "Immediate",
            "Indirect",
            "Implied"
        ],
        "opt_ar": [
            "مباشر",
            "فوري",
            "غير مباشر",
            "ضمني"
        ],
        "answer": 2
    },
    {
        "q": "ASCII stands for ________.",
        "q_ar": "اختصار ASCII يعني ________.",
        "options": [
            "American Standard Code for Information Interchange",
            "Advanced Standard Coding Interface",
            "Automatic System Code Instruction",
            "American System Communication Interface"
        ],
        "opt_ar": [
            "الترميز الأمريكي القياسي لتبادل المعلومات",
            "واجهة الترميز القياسية المتقدمة",
            "تعليمات كود النظام التلقائي",
            "واجهة اتصال النظام الأمريكي"
        ],
        "answer": 0
    },
    {
        "q": "Which format represents decimal numbers in binary form?",
        "q_ar": "أي صيغة تمثل الأرقام العشرية في صورة ثنائية؟",
        "options": [
            "ASCII",
            "BCD",
            "Hexadecimal",
            "Unicode"
        ],
        "opt_ar": [
            "ASCII",
            "BCD",
            "ست عشري",
            "يونيكود"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction is commonly used in loop counters?",
        "q_ar": "أي تعليمة تُستخدم غالبًا في العدادات Loop Counters؟",
        "options": [
            "DCR",
            "ORA",
            "RLC",
            "CMA"
        ],
        "opt_ar": [
            "DCR",
            "ORA",
            "RLC",
            "CMA"
        ],
        "answer": 0
    },
    {
        "q": "Which instruction checks loop continuation condition?",
        "q_ar": "أي تعليمة تتحقق من استمرار الـ Loop؟",
        "options": [
            "ADD",
            "MOV",
            "JNZ",
            "ANA"
        ],
        "opt_ar": [
            "ADD",
            "MOV",
            "JNZ",
            "ANA"
        ],
        "answer": 2
    },
    {
        "q": "What is the T-State?",
        "q_ar": "ما المقصود بـ T-State؟",
        "options": [
            "Memory block",
            "Clock cycle",
            "Register",
            "Opcode"
        ],
        "opt_ar": [
            "كتلة ذاكرة",
            "دورة نبضة واحدة",
            "سجل",
            "Opcode"
        ],
        "answer": 1
    },
    {
        "q": "MVI instruction requires how many T-States?",
        "q_ar": "تعليمة MVI تحتاج كام T-State؟",
        "options": [
            "4",
            "5",
            "7",
            "10"
        ],
        "opt_ar": [
            "4",
            "5",
            "7",
            "10"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction is often used to create delays?",
        "q_ar": "أي تعليمة تستخدم غالبًا لصنع Delay؟",
        "options": [
            "NOP",
            "MOV",
            "CMP",
            "XRA"
        ],
        "opt_ar": [
            "NOP",
            "MOV",
            "CMP",
            "XRA"
        ],
        "answer": 0
    },
    {
        "q": "Why are nested loops used?",
        "q_ar": "لماذا يتم استخدام Nested Loops؟",
        "options": [
            "Reduce memory",
            "Increase delay",
            "Clear flags",
            "Rotate bits"
        ],
        "opt_ar": [
            "تقليل الذاكرة",
            "لزيادة زمن التأخير",
            "مسح المؤشرات",
            "تدوير البتات"
        ],
        "answer": 1
    },
    {
        "q": "Which signal indicates memory read operation?",
        "q_ar": "أي إشارة تدل على عملية قراءة من الذاكرة؟",
        "options": [
            "WR",
            "ALE",
            "RD",
            "IO/M"
        ],
        "opt_ar": [
            "WR",
            "ALE",
            "RD",
            "IO/M"
        ],
        "answer": 2
    },
    {
        "q": "Which signal indicates memory write operation?",
        "q_ar": "أي إشارة تدل على عملية كتابة في الذاكرة؟",
        "options": [
            "RD",
            "WR",
            "ALE",
            "IO/M"
        ],
        "opt_ar": [
            "RD",
            "WR",
            "ALE",
            "IO/M"
        ],
        "answer": 1
    },
    {
        "q": "What does ALE stand for?",
        "q_ar": "ماذا يعني ALE؟",
        "options": [
            "Address Latch Enable",
            "Address Logic Enable",
            "Automatic Latch Encoder",
            "Address Loop Enable"
        ],
        "opt_ar": [
            "تمكين قفل العنوان",
            "تمكين منطق العنوان",
            "مشفر القفل التلقائي",
            "تمكين حلقة العنوان"
        ],
        "answer": 0
    },
    {
        "q": "Which cycle fetches the opcode from memory?",
        "q_ar": "أي Cycle يجلب الـ Opcode من الذاكرة؟",
        "options": [
            "Memory Write Cycle",
            "Opcode Fetch Cycle",
            "Interrupt Cycle",
            "Bus Cycle"
        ],
        "opt_ar": [
            "دورة كتابة الذاكرة",
            "دورة جلب الـ Opcode",
            "دورة المقاطعة",
            "دورة الناقل"
        ],
        "answer": 1
    },
    {
        "q": "What is the opcode of MVI A,45H?",
        "q_ar": "ما هو Opcode الخاص بالتعليمة MVI A,45H؟",
        "options": [
            "78H",
            "7EH",
            "3EH",
            "77H"
        ],
        "opt_ar": [
            "78H",
            "7EH",
            "3EH",
            "77H"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction loads data from memory to accumulator using HL pair?",
        "q_ar": "أي تعليمة تحمل البيانات من الذاكرة إلى الـ Accumulator باستخدام HL Pair؟",
        "options": [
            "MOV A,M",
            "MOV M,A",
            "STA",
            "CMP"
        ],
        "opt_ar": [
            "MOV A,M",
            "MOV M,A",
            "STA",
            "CMP"
        ],
        "answer": 0
    },
    {
        "q": "Which instruction stores accumulator into memory using HL pair?",
        "q_ar": "أي تعليمة تخزن الـ Accumulator في الذاكرة باستخدام HL Pair؟",
        "options": [
            "MOV A,M",
            "MOV M,A",
            "ADD M",
            "SUB M"
        ],
        "opt_ar": [
            "MOV A,M",
            "MOV M,A",
            "ADD M",
            "SUB M"
        ],
        "answer": 1
    },
    {
        "q": "The stack normally grows toward ________.",
        "q_ar": "الـ Stack ينمو عادة باتجاه ________.",
        "options": [
            "Higher addresses",
            "Lower addresses",
            "I/O ports",
            "Registers"
        ],
        "opt_ar": [
            "العناوين الأعلى",
            "العناوين الأقل",
            "منافذ الإدخال/الإخراج",
            "المسجلات"
        ],
        "answer": 1
    },
    {
        "q": "PUSH operation first ________.",
        "q_ar": "عملية PUSH تقوم بـ ________ أولاً.",
        "options": [
            "Increment SP",
            "Store data",
            "Decrement SP",
            "Clear memory"
        ],
        "opt_ar": [
            "زيادة قيمة SP",
            "تخزين البيانات",
            "إنقاص قيمة SP أولاً",
            "مسح الذاكرة"
        ],
        "answer": 2
    },
    {
        "q": "POP instruction first ________.",
        "q_ar": "تعليمة POP تقوم بـ ________ أولاً.",
        "options": [
            "Increment SP",
            "Read data from stack",
            "Clear stack",
            "Rotate accumulator"
        ],
        "opt_ar": [
            "زيادة قيمة SP",
            "تقرأ البيانات من الـ Stack",
            "مسح الـ Stack",
            "تدوير الـ Accumulator"
        ],
        "answer": 1
    },
    {
        "q": "PSW register pair contains ________.",
        "q_ar": "زوج الـ PSW يحتوي على ________.",
        "options": [
            "BC registers",
            "DE registers",
            "Accumulator and Flags",
            "PC and SP"
        ],
        "opt_ar": [
            "مسجلات BC",
            "مسجلات DE",
            "المجمع والـ Flags",
            "PC و SP"
        ],
        "answer": 2
    },
    {
        "q": "What is the main purpose of subroutines?",
        "q_ar": "ما الهدف الأساسي من الـ Subroutines؟",
        "options": [
            "Increase hardware size",
            "Repeat commonly used code",
            "Stop execution",
            "Clear memory"
        ],
        "opt_ar": [
            "زيادة حجم العتاد",
            "إعادة استخدام الكود المتكرر",
            "إيقاف التنفيذ",
            "مسح الذاكرة"
        ],
        "answer": 1
    },
    {
        "q": "CALL instruction stores return address in ________.",
        "q_ar": "تعليمة CALL تخزن عنوان الرجوع في ________.",
        "options": [
            "Accumulator",
            "Flags",
            "Stack",
            "Register B"
        ],
        "opt_ar": [
            "المجمع",
            "المؤشرات",
            "الـ Stack",
            "المسجل B"
        ],
        "answer": 2
    },
    {
        "q": "RET instruction retrieves address from ________.",
        "q_ar": "تعليمة RET تسترجع العنوان من ________.",
        "options": [
            "Accumulator",
            "Stack",
            "HL pair",
            "Carry flag"
        ],
        "opt_ar": [
            "المجمع",
            "الـ Stack",
            "زوج HL",
            "مؤشر الحمل"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction is used to return from subroutine?",
        "q_ar": "أي تعليمة تستخدم للرجوع من الـ Subroutine؟",
        "options": [
            "JMP",
            "CALL",
            "RET",
            "HLT"
        ],
        "opt_ar": [
            "JMP",
            "CALL",
            "RET",
            "HLT"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction calls a subroutine only if Carry flag = 1?",
        "q_ar": "أي تعليمة تستدعي Subroutine فقط إذا كان Carry Flag = 1؟",
        "options": [
            "CNC",
            "CC",
            "JNC",
            "RC"
        ],
        "opt_ar": [
            "CNC",
            "CC",
            "JNC",
            "RC"
        ],
        "answer": 1
    },
    {
        "q": "RC instruction means ________.",
        "q_ar": "تعليمة RC تعني ________.",
        "options": [
            "Return if Carry",
            "Reset Carry",
            "Rotate Carry",
            "Read Carry"
        ],
        "opt_ar": [
            "الرجوع إذا كان هناك Carry",
            "إعادة ضبط الحمل",
            "تدوير الحمل",
            "قراءة الحمل"
        ],
        "answer": 0
    },
    {
        "q": "Why should PUSH and POP be in opposite order?",
        "q_ar": "لماذا يجب أن تكون أوامر PUSH و POP بترتيب عكسي؟",
        "options": [
            "To reduce memory",
            "Because stack is FIFO",
            "Because stack is LIFO",
            "To stop execution"
        ],
        "opt_ar": [
            "لتقليل الذاكرة",
            "لأن الـ Stack يعتمد FIFO",
            "لأن الـ Stack يعمل بنظام LIFO",
            "لإيقاف التنفيذ"
        ],
        "answer": 2
    },
    {
        "q": "What happens if PUSH and POP numbers are unequal?",
        "q_ar": "ماذا يحدث إذا كان عدد PUSH لا يساوي عدد POP؟",
        "options": [
            "Faster execution",
            "Wrong return address",
            "Reset occurs",
            "No effect"
        ],
        "opt_ar": [
            "تنفيذ أسرع",
            "سيحدث خطأ في عنوان الرجوع",
            "حدث إعادة ضبط",
            "لا يوجد تأثير"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction loads stack pointer with immediate data?",
        "q_ar": "أي تعليمة تحمل بيانات مباشرة إلى Stack Pointer؟",
        "options": [
            "LXI SP",
            "MOV SP",
            "MVI SP",
            "SHLD"
        ],
        "opt_ar": [
            "LXI SP",
            "MOV SP",
            "MVI SP",
            "SHLD"
        ],
        "answer": 0
    },
    {
        "q": "Which memory location is commonly used as stack start in 8085?",
        "q_ar": "أي عنوان ذاكرة يُستخدم غالبًا كبداية للـ Stack في 8085؟",
        "options": [
            "0000H",
            "8500H",
            "FFFFH",
            "2000H"
        ],
        "opt_ar": [
            "0000H",
            "8500H",
            "FFFFH",
            "2000H"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction transfers HL content with DE content?",
        "q_ar": "أي تعليمة تبدل محتويات HL مع DE؟",
        "options": [
            "XTHL",
            "XCHG",
            "PUSH",
            "POP"
        ],
        "opt_ar": [
            "XTHL",
            "XCHG",
            "PUSH",
            "POP"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction stores accumulator directly into memory?",
        "q_ar": "أي تعليمة تخزن الـ Accumulator مباشرة في الذاكرة؟",
        "options": [
            "STA",
            "LDA",
            "MOV",
            "ADD"
        ],
        "opt_ar": [
            "STA",
            "LDA",
            "MOV",
            "ADD"
        ],
        "answer": 0
    },
    {
        "q": "Which instruction loads accumulator directly from memory?",
        "q_ar": "أي تعليمة تحمل الـ Accumulator مباشرة من الذاكرة؟",
        "options": [
            "MOV",
            "ADD",
            "LDA",
            "SUB"
        ],
        "opt_ar": [
            "MOV",
            "ADD",
            "LDA",
            "SUB"
        ],
        "answer": 2
    },
    {
        "q": "What is the function of LHLD instruction?",
        "q_ar": "ما وظيفة التعليمة LHLD؟",
        "options": [
            "Load immediate data",
            "Load HL pair directly from memory",
            "Store accumulator",
            "Rotate bits"
        ],
        "opt_ar": [
            "تحميل بيانات فورية",
            "تحميل زوج HL مباشرة من الذاكرة",
            "تخزين المجمع",
            "تدوير البتات"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction stores HL pair directly to memory?",
        "q_ar": "أي تعليمة تخزن زوج HL مباشرة في الذاكرة؟",
        "options": [
            "SHLD",
            "LHLD",
            "STA",
            "XCHG"
        ],
        "opt_ar": [
            "SHLD",
            "LHLD",
            "STA",
            "XCHG"
        ],
        "answer": 0
    },
    {
        "q": "What is the result size when adding two 8-bit numbers with carry?",
        "q_ar": "ما حجم الناتج عند جمع رقمين 8-bit مع وجود Carry؟",
        "options": [
            "4-bit",
            "8-bit",
            "16-bit",
            "32-bit"
        ],
        "opt_ar": [
            "4 بت",
            "8 بت",
            "16 بت",
            "32 بت"
        ],
        "answer": 2
    },
    {
        "q": "Which register is commonly used to store carry in 16-bit addition programs?",
        "q_ar": "أي Register يُستخدم غالبًا لتخزين الـ Carry في برامج جمع 16-bit؟",
        "options": [
            "A",
            "B",
            "C",
            "H"
        ],
        "opt_ar": [
            "مسجل A",
            "مسجل B",
            "مسجل C",
            "مسجل H"
        ],
        "answer": 2
    },
    {
        "q": "What does JNC mean?",
        "q_ar": "ماذا يعني JNC؟",
        "options": [
            "Jump No Compare",
            "Jump No Carry",
            "Jump Negative Carry",
            "Jump New Code"
        ],
        "opt_ar": [
            "قفز بدون مقارنة",
            "القفز عند عدم وجود Carry",
            "قفز حمل سالبي",
            "قفز كود جديد"
        ],
        "answer": 1
    },
    {
        "q": "DAA instruction is mainly used in ________.",
        "q_ar": "تعليمة DAA تُستخدم أساساً في ________.",
        "options": [
            "Binary subtraction",
            "Decimal arithmetic",
            "Memory transfer",
            "Stack operation"
        ],
        "opt_ar": [
            "الطرح الثنائي",
            "العمليات الحسابية العشرية",
            "نقل الذاكرة",
            "عمليات الـ Stack"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction performs decimal adjustment after addition?",
        "q_ar": "أي تعليمة تقوم بالضبط العشري بعد عملية الجمع؟",
        "options": [
            "CMA",
            "DAA",
            "ANA",
            "RLC"
        ],
        "opt_ar": [
            "CMA",
            "DAA",
            "ANA",
            "RLC"
        ],
        "answer": 1
    },
    {
        "q": "In decimal subtraction program, 99H is used for ________.",
        "q_ar": "في برنامج الطرح العشري يتم استخدام 99H من أجل ________.",
        "options": [
            "Rotation",
            "Carry generation",
            "9's complement",
            "Memory clearing"
        ],
        "opt_ar": [
            "التدوير",
            "توليد الحمل",
            "إيجاد المتمم التساعي",
            "مسح الذاكرة"
        ],
        "answer": 2
    },
    {
        "q": "Which instruction decrements HL pair?",
        "q_ar": "أي تعليمة تنقص قيمة HL Pair؟",
        "options": [
            "INX H",
            "DCX H",
            "DCR H",
            "INR H"
        ],
        "opt_ar": [
            "INX H",
            "DCX H",
            "DCR H",
            "INR H"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction terminates execution in many lab programs?",
        "q_ar": "أي تعليمة تُستخدم لإنهاء التنفيذ في أغلب برامج المعمل؟",
        "options": [
            "ADD",
            "RST 5",
            "MOV",
            "CMP"
        ],
        "opt_ar": [
            "ADD",
            "RST 5",
            "MOV",
            "CMP"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction copies data from memory to accumulator?",
        "q_ar": "أي تعليمة تنقل البيانات من الذاكرة إلى الـ Accumulator؟",
        "options": [
            "MOV A,M",
            "MOV M,A",
            "STA",
            "SHLD"
        ],
        "opt_ar": [
            "MOV A,M",
            "MOV M,A",
            "STA",
            "SHLD"
        ],
        "answer": 0
    },
    {
        "q": "What is the purpose of flowchart in programming?",
        "q_ar": "ما الهدف من الـ Flowchart في البرمجة؟",
        "options": [
            "Increase memory",
            "Represent program steps graphically",
            "Reduce registers",
            "Stop execution"
        ],
        "opt_ar": [
            "زيادة الذاكرة",
            "تمثيل خطوات البرنامج رسومياً",
            "تقليل السجلات",
            "إيقاف التنفيذ"
        ],
        "answer": 1
    },
    {
        "q": "Which key starts execution from address 0000H in ES-85 kit?",
        "q_ar": "أي زر يبدأ التنفيذ من العنوان 0000H في لوحة ES-85؟",
        "options": [
            "RESET",
            "HELP",
            "EXECUTE",
            "MODIFY"
        ],
        "opt_ar": [
            "RESET",
            "HELP",
            "EXECUTE",
            "MODIFY"
        ],
        "answer": 0
    },
    {
        "q": "Which command is used to execute program in ES-85 kit?",
        "q_ar": "أي أمر يُسُتخدم لتنفيذ البرنامج في ES-85 kit؟",
        "options": [
            "A",
            "G",
            "M",
            "T"
        ],
        "opt_ar": [
            "A",
            "G",
            "M",
            "T"
        ],
        "answer": 1
    },
    {
        "q": "Which command is used for Assemble mode?",
        "q_ar": "أي أمر يُستخدم للدخول إلى وضع الـ Assemble؟",
        "options": [
            "A",
            "D",
            "G",
            "H"
        ],
        "opt_ar": [
            "A",
            "D",
            "G",
            "H"
        ],
        "answer": 0
    },
    {
        "q": "Which command displays register contents?",
        "q_ar": "أي أمر يعرض محتويات الـ Registers؟",
        "options": [
            "S",
            "U",
            "R",
            "Q"
        ],
        "opt_ar": [
            "S",
            "U",
            "R",
            "Q"
        ],
        "answer": 2
    },
    {
        "q": "Which command is used for Help menu?",
        "q_ar": "أي أمر يُستخدم لعرض قائمة المساعدة؟",
        "options": [
            "G",
            "H",
            "D",
            "T"
        ],
        "opt_ar": [
            "G",
            "H",
            "D",
            "T"
        ],
        "answer": 1
    },
    {
        "q": "Which instruction stores sum result into memory?",
        "q_ar": "أي تعليمة تخزن ناتج الجمع في الذاكرة؟",
        "options": [
            "MOV M,A",
            "ADD M",
            "CMP M",
            "INR M"
        ],
        "opt_ar": [
            "MOV M,A",
            "ADD M",
            "CMP M",
            "INR M"
        ],
        "answer": 0
    },
    {
        "q": "Which register pair is mostly used for memory addressing in 8085 programs?",
        "q_ar": "أي Register Pair يُستخدم غالبًا للوصول إلى الذاكرة في برامج 8085؟",
        "options": [
            "BC",
            "DE",
            "HL",
            "SP"
        ],
        "opt_ar": [
            "BC",
            "DE",
            "HL",
            "SP"
        ],
        "answer": 2
    },
    {
        "q": "What is the full form of PSW?",
        "q_ar": "ما هو الاسم الكامل لـ PSW؟",
        "options": [
            "Program Status Word",
            "Processor System Word",
            "Program Stack Write",
            "Primary Status Work"
        ],
        "opt_ar": [
            "كلمة حالة البرنامج",
            "كلمة نظام المعالج",
            "كتابة مكدس البرنامج",
            "عمل الحالة الأساسية"
        ],
        "answer": 0
    },
    {
        "q": "What is the first machine cycle in instruction execution?",
        "q_ar": "ما أول Machine Cycle في تنفيذ التعليمة؟",
        "options": [
            "Memory Write Cycle",
            "Opcode Fetch Cycle",
            "Interrupt Cycle",
            "I/O Read Cycle"
        ],
        "opt_ar": [
            "دورة كتابة الذاكرة",
            "دورة جلب التعليمة",
            "دورة المقاطعة",
            "دورة قراءة الإدخال والإخراج"
        ],
        "answer": 1
    },
    {
        "q": "Opcode Fetch Cycle in 8085 usually contains how many T-states?",
        "q_ar": "دورة جلب التعليمة Opcode Fetch تحتوي غالبًا على كام T-State؟",
        "options": [
            "2",
            "3",
            "4",
            "6"
        ],
        "opt_ar": [
            "2",
            "3",
            "4",
            "6"
        ],
        "answer": 2
    },
    {
        "q": "During Opcode Fetch Cycle, the processor reads ________.",
        "q_ar": "أثناء Opcode Fetch Cycle يقوم المعالج بقراءة ________.",
        "options": [
            "Data",
            "Address",
            "Opcode",
            "Flags"
        ],
        "opt_ar": [
            "البيانات",
            "العنوان",
            "كود العملية",
            "المؤشرات"
        ],
        "answer": 2
    },
    {
        "q": "Which signal becomes LOW during memory read operation?",
        "q_ar": "أي إشارة تصبح LOW أثناء عملية قراءة الذاكرة؟",
        "options": [
            "WR",
            "RD",
            "ALE",
            "IO/M"
        ],
        "opt_ar": [
            "WR",
            "RD",
            "ALE",
            "IO/M"
        ],
        "answer": 1
    },
    {
        "q": "Which signal becomes LOW during memory write operation?",
        "q_ar": "أي إشارة تصبح LOW أثناء عملية كتابة الذاكرة؟",
        "options": [
            "RD",
            "ALE",
            "WR",
            "READY"
        ],
        "opt_ar": [
            "RD",
            "ALE",
            "WR",
            "READY"
        ],
        "answer": 2
    },
    {
        "q": "ALE signal is used to ________.",
        "q_ar": "إشارة ALE تُستخدم من أجل ________.",
        "options": [
            "Read memory",
            "Write memory",
            "Latch lower address",
            "Stop processor"
        ],
        "opt_ar": [
            "قراءة الذاكرة",
            "كتابة الذاكرة",
            "تثبيت الجزء السفلي من العنوان",
            "إيقاف المعالج"
        ],
        "answer": 2
    },
    {
        "q": "In Timing Diagram, AD0–AD7 lines carry ________ during T1 state.",
        "q_ar": "في الـ Timing Diagram، ماذا تحمل الخطوط AD0–AD7 أثناء T1؟",
        "options": [
            "Data only",
            "Address only",
            "Address/Data multiplexed",
            "Flags"
        ],
        "opt_ar": [
            "بيانات فقط",
            "عنوان فقط",
            "عنوان وبيانات معاً بطريقة متعددة الإرسال",
            "المؤشرات"
        ],
        "answer": 2
    },
    {
        "q": "During T1 state, AD0–AD7 contain ________.",
        "q_ar": "أثناء T1، تحتوي AD0–AD7 على ________.",
        "options": [
            "Opcode",
            "Lower address",
            "Upper address",
            "Carry data"
        ],
        "opt_ar": [
            "Opcode",
            "الجزء السفلي من العنوان",
            "الجزء العلوي من العنوان",
            "بيانات الحمل"
        ],
        "answer": 1
    },
    {
        "q": "A15–A8 lines carry ________.",
        "q_ar": "الخطوط A15–A8 تحمل ________.",
        "options": [
            "Lower address",
            "Data",
            "Higher address",
            "Opcode"
        ],
        "opt_ar": [
            "الجزء السفلي من العنوان",
            "البيانات",
            "الجزء العلوي من العنوان",
            "Opcode"
        ],
        "answer": 2
    },
    {
        "q": "Which signal differentiates memory and I/O operation?",
        "q_ar": "أي إشارة تفرق بين عمليات الذاكرة وعميات الـ I/O؟",
        "options": [
            "WR",
            "RD",
            "IO/M",
            "ALE"
        ],
        "opt_ar": [
            "WR",
            "RD",
            "IO/M",
            "ALE"
        ],
        "answer": 2
    },
    {
        "q": "In Memory Write Cycle, data is available on bus during ________.",
        "q_ar": "في Memory Write Cycle تظهر البيانات على الـ Bus أثناء ________.",
        "options": [
            "T1",
            "T2",
            "T2 and T3",
            "T4 only"
        ],
        "opt_ar": [
            "T1",
            "T2",
            "أثناء T2 و T3",
            "T4 فقط"
        ],
        "answer": 2
    },
    {
        "q": "The falling edge of ALE indicates ________.",
        "q_ar": "الحافة الهابطة لإشارة ALE تدل على ________.",
        "options": [
            "End of address latch",
            "Start of opcode",
            "Carry generation",
            "Reset operation"
        ],
        "opt_ar": [
            "نهاية تثبيت العنوان",
            "بداية جلب الـ Opcode",
            "توليد الحمل",
            "عملية إعادة الضبط"
        ],
        "answer": 0
    },
    {
        "q": "In MOV M,A instruction, data moves from ________.",
        "q_ar": "في التعليمة MOV M,A تنتقل البيانات من ________.",
        "options": [
            "Memory to A",
            "A to memory",
            "HL to A",
            "Stack to A"
        ],
        "opt_ar": [
            "الذاكرة إلى المسجل A",
            "من المجمع Accumulator إلى الذاكرة",
            "HL إلى A",
            "الـ Stack إلى A"
        ],
        "answer": 1
    },
    {
        "q": "Which machine cycle is used in MOV M,A instruction?",
        "q_ar": "أي Machine Cycle تُستخدم في التعليمة MOV M,A؟",
        "options": [
            "Memory Read",
            "Memory Write",
            "I/O Read",
            "Interrupt Cycle"
        ],
        "opt_ar": [
            "قراءة الذاكرة",
            "كتابة الذاكرة",
            "قراءة I/O",
            "دورة المقاطعة"
        ],
        "answer": 1
    },
    {
        "q": "The address bus in 8085 is ________ bits wide.",
        "q_ar": "حجم الـ Address Bus في 8085 هو ________ بت.",
        "options": [
            "8",
            "12",
            "16",
            "32"
        ],
        "opt_ar": [
            "8",
            "12",
            "16 بت",
            "32"
        ],
        "answer": 2
    },
    {
        "q": "The data bus in 8085 is ________ bits wide.",
        "q_ar": "حجم الـ Data Bus في 8085 هو ________ بت.",
        "options": [
            "4",
            "8",
            "16",
            "32"
        ],
        "opt_ar": [
            "4",
            "8 بت",
            "16",
            "32"
        ],
        "answer": 1
    },
    {
        "q": "Which T-state activates ALE signal?",
        "q_ar": "أي T-State يتم فيه تفعيل إشارة ALE؟",
        "options": [
            "T1",
            "T2",
            "T3",
            "T4"
        ],
        "opt_ar": [
            "T1",
            "T2",
            "T3",
            "T4"
        ],
        "answer": 0
    },
    {
        "q": "During Memory Write Cycle, WR signal becomes LOW in ________.",
        "q_ar": "أثناء Memory Write Cycle تصبح إشارة WR منخفضة في ________.",
        "options": [
            "T1",
            "T2",
            "T4",
            "T5"
        ],
        "opt_ar": [
            "T1",
            "T2",
            "T4",
            "T5"
        ],
        "answer": 1
    },
    {
        "q": "Opcode Fetch Cycle is always followed by ________.",
        "q_ar": "دورة جلب التعليمة يتبعها دائمًا ________.",
        "options": [
            "Instruction decoding",
            "Reset",
            "Interrupt",
            "Halt"
        ],
        "opt_ar": [
            "فك شفرة التعليمة",
            "إعادة ضبط",
            "مقاطعة",
            "إيقاف"
        ],
        "answer": 0
    },
    {
        "q": "Which bus carries opcode from memory to processor?",
        "q_ar": "أي Bus ينقل الـ Opcode من الذاكرة إلى المعالج؟",
        "options": [
            "Address Bus",
            "Data Bus",
            "Control Bus",
            "Stack Bus"
        ],
        "opt_ar": [
            "Address Bus",
            "Data Bus",
            "Control Bus",
            "Stack Bus"
        ],
        "answer": 1
    },
    {
        "q": "In Timing Diagram, READY signal is used for ________.",
        "q_ar": "في الـ Timing Diagram تُستخدم إشارة READY من أجل ________.",
        "options": [
            "Reset processor",
            "Slow memory synchronization",
            "Increment SP",
            "Carry operation"
        ],
        "opt_ar": [
            "إعادة ضبط المعالج",
            "مزامنة الذاكرة البطيئة",
            "زيادة SP",
            "عملية الحمل"
        ],
        "answer": 1
    },
    {
        "q": "Wait states are inserted when READY signal is ________.",
        "q_ar": "يتم إدخال الـ Wait States عندما تكون إشارة READY ________.",
        "options": [
            "HIGH",
            "LOW",
            "Floating",
            "Reset"
        ],
        "opt_ar": [
            "مرتفعة",
            "منخفضة",
            "عائمة",
            "إعادة ضبط"
        ],
        "answer": 1
    },
    {
        "q": "Which control signal is active LOW?",
        "q_ar": "أي إشارة تحكم تعمل بمنطق Active LOW؟",
        "options": [
            "ALE",
            "RD",
            "IO/M",
            "READY"
        ],
        "opt_ar": [
            "ALE",
            "RD",
            "IO/M",
            "READY"
        ],
        "answer": 1
    },
    {
        "q": "Memory Write Cycle transfers data from ________.",
        "q_ar": "دورة الـ Memory Write تنقل البيانات من ________.",
        "options": [
            "Memory to CPU",
            "CPU to Memory",
            "I/O to CPU",
            "Stack to Memory"
        ],
        "opt_ar": [
            "الذاكرة إلى المعالج",
            "المعالج إلى الذاكرة",
            "الإدخال والإخراج إلى المعالج",
            "المكدس إلى الذاكرة"
        ],
        "answer": 1
    },
    {
        "q": "In Opcode Fetch Cycle, IO/M signal equals ________.",
        "q_ar": "في Opcode Fetch Cycle تكون قيمة إشارة IO/M مساوية لـ ________.",
        "options": [
            "0",
            "1",
            "Floating",
            "Undefined"
        ],
        "opt_ar": [
            "0",
            "1",
            "عائمة",
            "غير معرفة"
        ],
        "answer": 0
    },
    {
        "q": "The multiplexed bus in 8085 is ________.",
        "q_ar": "الـ Multiplexed Bus في 8085 هو ________.",
        "options": [
            "A15–A8",
            "AD0–AD7",
            "RD",
            "WR"
        ],
        "opt_ar": [
            "A15–A8",
            "AD0–AD7",
            "RD",
            "WR"
        ],
        "answer": 1
    },
    {
        "q": "Which operation occurs during T1 state?",
        "q_ar": "أي عملية تحدث أثناء الـ T1 state؟",
        "options": [
            "Data transfer only",
            "Address output",
            "Carry generation",
            "Stack update"
        ],
        "opt_ar": [
            "نقل البيانات فقط",
            "إخراج العنوان",
            "توليد الحمل",
            "تحديث المكدس"
        ],
        "answer": 1
    },
    {
        "q": "The control bus contains signals like ________.",
        "q_ar": "الـ Control Bus يحتوي على إشارات مثل ________.",
        "options": [
            "RD and WR",
            "A15 and A8",
            "D0 and D7",
            "HL and SP"
        ],
        "opt_ar": [
            "RD و WR",
            "A15 و A8",
            "D0 و D7",
            "HL و SP"
        ],
        "answer": 0
    },
    {
        "q": "The opcode is stored in memory and fetched during ________.",
        "q_ar": "يتم تخزين الـ Opcode في الذاكرة وجلبه أثناء ________.",
        "options": [
            "Memory Write",
            "Opcode Fetch",
            "Interrupt Cycle",
            "Bus Idle"
        ],
        "opt_ar": [
            "كتابة الذاكرة",
            "دورة جلب العملية",
            "دورة المقاطعة",
            "خمول الناقل"
        ],
        "answer": 1
    },
    {
        "q": "Which machine cycle takes maximum T-states usually?",
        "q_ar": "أي Machine Cycle يأخذ أكبر عدد من الـ T-States عادة؟",
        "options": [
            "Memory Read",
            "Opcode Fetch",
            "Memory Write",
            "Bus Idle"
        ],
        "opt_ar": [
            "قراءة الذاكرة",
            "دورة جلب العملية",
            "كتابة الذاكرة",
            "خمول الناقل"
        ],
        "answer": 1
    }
],
    "exameQuestions":[
    {
        "q": "The instruction MOV A, M means:",
        "q_ar": "ماذا تعني التعليمية MOV A, M؟",
        "options": [
            "Move the content of memory location to the accumulator",
            "Move the content of the accumulator to memory",
            "Move the content of register M to register A",
            "Move the content of register A to register M"
        ],
        "opt_ar": [
            "نقل محتوى موقع الذاكرة إلى المركم (Accumulator)",
            "نقل محتوى المركم إلى الذاكرة",
            "نقل محتوى السجل M إلى السجل A",
            "نقل محتوى السجل A إلى السجل M"
        ],
        "answer": 0
    },
    {
        "q": "Which register pair can be used as a 16-bit register in 8085?",
        "q_ar": "أي من أزواج السجلات التالية يمكن استخدامه كسجل 16-بت في 8085؟",
        "options": [
            "A and B",
            "B and C",
            "C and D",
            "D and A"
        ],
        "opt_ar": [
            "A و B",
            "B و C",
            "C و D",
            "D و A"
        ],
        "answer": 1
    },
    {
        "q": "Which of the following instructions is a one-byte instruction in 8085?",
        "q_ar": "أي من التعليمات التالية تتكون من بايت واحد (One-byte) في 8085؟",
        "options": [
            "MVI A, 45H",
            "LDA 2500H",
            "ADD B",
            "CALL 4000H"
        ],
        "opt_ar": [
            "MVI A, 45H",
            "LDA 2500H",
            "ADD B",
            "CALL 4000H"
        ],
        "answer": 2
    },
    {
        "q": "The 8085 microprocessor has how many pins?",
        "q_ar": "كم عدد الأطراف (Pins) في المعالج الدقيق 8085؟",
        "options": [
            "20",
            "30",
            "40",
            "50"
        ],
        "opt_ar": [
            "20",
            "30",
            "40",
            "50"
        ],
        "answer": 2
    },
    {
        "q": "The instruction PUSH B performs:",
        "q_ar": "ماذا تفعل التعليمية PUSH B؟",
        "options": [
            "Pushes BC register pair onto stack",
            "Pushes B register onto stack",
            "Pushes C register onto stack",
            "None of the above"
        ],
        "opt_ar": [
            "دفع زوج السجلات BC داخل المكدس",
            "دفع السجل B فقط داخل المكدس",
            "دفع السجل C فقط داخل المكدس",
            "لا شيء مما سبق"
        ],
        "answer": 0
    },
    {
        "q": "The instruction CALL 2050H belongs to which addressing mode?",
        "q_ar": "إلى أي نمط عنونة (Addressing Mode) تنتمي التعليمية CALL 2050H؟",
        "options": [
            "Direct",
            "Indirect",
            "Immediate",
            "Register"
        ],
        "opt_ar": [
            "مباشر",
            "غير مباشر",
            "فوري",
            "سجل"
        ],
        "answer": 0
    },
    {
        "q": "What is the operation performed by the instruction CMA?",
        "q_ar": "ما هي العملية التي تقوم بها التعليمية CMA؟",
        "options": [
            "Clears accumulator",
            "Complements accumulator",
            "Moves data to accumulator",
            "Adds the content of memory to accumulator"
        ],
        "opt_ar": [
            "تصفير المركم",
            "إيجاد المتمم للمركم",
            "نقل البيانات إلى المركم",
            "إضافة محتوى الذاكرة إلى المركم"
        ],
        "answer": 1
    },
    {
        "q": "The instruction LXI H, 2500H does what?",
        "q_ar": "ماذا تفعل التعليمية LXI H, 2500H؟",
        "options": [
            "Loads 2500H into HL pair",
            "Moves HL pair into 2500H",
            "Adds 2500H to HL register",
            "Loads 2500H into stack"
        ],
        "opt_ar": [
            "تحميل القيمة 2500H في زوج السجلات HL",
            "نقل زوج السجلات HL إلى 2500H",
            "إضافة 2500H إلى السجل HL",
            "تحميل 2500H في المكدس"
        ],
        "answer": 0
    },
    {
        "q": "The instruction DCX H does what?",
        "q_ar": "ماذا تفعل التعليمية DCX H؟",
        "options": [
            "Decrements HL register pair",
            "Increments HL register pair",
            "Decrements accumulator",
            "Decrements memory"
        ],
        "opt_ar": [
            "إنقاص زوج السجلات HL بمقدار 1",
            "زيادة زوج السجلات HL بمقدار 1",
            "إنقاص المركم بمقدار 1",
            "إنقاص الذاكرة بمقدار 1"
        ],
        "answer": 0
    },
    {
        "q": "The NOP instruction in 8085 performs:",
        "q_ar": "ماذا تفعل التعليمية NOP في 8085؟",
        "options": [
            "No operation",
            "Next operation processing",
            "Nullifying one instruction",
            "None of the above"
        ],
        "opt_ar": [
            "لا عملية",
            "معالجة العملية التالية",
            "إلغاء تعليمية واحدة",
            "لا شيء مما سبق"
        ],
        "answer": 0
    },
    {
        "q": "What is the word size of the 8085 microprocessor?",
        "q_ar": "ما هو حجم الكلمة (Word Size) للمعالج 8085؟",
        "options": [
            "4-bit",
            "8-bit",
            "16-bit",
            "32-bit"
        ],
        "opt_ar": [
            "4-بت",
            "8-بت",
            "16-بت",
            "32-بت"
        ],
        "answer": 1
    },
    {
        "q": "How many address lines are present in the 8085 microprocessor?",
        "q_ar": "كم عدد خطوط العناوين (Address Lines) في المعالج 8085؟",
        "options": [
            "8",
            "12",
            "16",
            "32"
        ],
        "opt_ar": [
            "8",
            "12",
            "16",
            "32"
        ],
        "answer": 2
    },
    {
        "q": "What is the function of the program counter in 8085?",
        "q_ar": "ما هي وظيفة عداد البرنامج (Program Counter) في 8085؟",
        "options": [
            "Holds the opcode",
            "Stores the address of the next instruction",
            "Stores data",
            "Acts as an accumulator"
        ],
        "opt_ar": [
            "الاحتفاظ برمز العملية",
            "تخزين عنوان التعليمية التالية المراد تنفيذها",
            "تخزين البيانات",
            "العمل كمركم"
        ],
        "answer": 1
    },
    {
        "q": "What is the size of the address bus in the 8085 microprocessor?",
        "q_ar": "ما هو حجم ناقل العناوين (Address Bus) في معالج 8085؟",
        "options": [
            "8-bit",
            "16-bit",
            "32-bit",
            "64-bit"
        ],
        "opt_ar": [
            "8-بت",
            "16-بت",
            "32-بت",
            "64-بت"
        ],
        "answer": 1
    },
    {
        "q": "Which flag is set when the result of an arithmetic or logic operation is zero in 8085?",
        "q_ar": "أي من الأعلام (Flags) يتم تفعيله عندما يكون ناتج عملية حسابية أو منطقية صفراً في 8085؟",
        "options": [
            "Carry flag",
            "Zero flag",
            "Sign flag",
            "Parity flag"
        ],
        "opt_ar": [
            "علم الحمل",
            "علم الصفر",
            "علم الإشارة",
            "علم التماثل"
        ],
        "answer": 1
    },
    {
        "q": "What is the maximum memory that can be addressed by the 8085 microprocessor?",
        "q_ar": "ما هي أقصى سعة ذاكرة يمكن عنونتها بواسطة معالج 8085؟",
        "options": [
            "8 KB",
            "16 KB",
            "32 KB",
            "64 KB"
        ],
        "opt_ar": [
            "8 كيلوبايت",
            "16 كيلوبايت",
            "32 كيلوبايت",
            "64 كيلوبايت"
        ],
        "answer": 3
    },
    {
        "q": "What is the function of the ALE signal in 8085?",
        "q_ar": "ما هي وظيفة إشارة ALE في معالج 8085؟",
        "options": [
            "Latches the address",
            "Enables interrupts",
            "Controls the execution speed",
            "Indicates arithmetic operation"
        ],
        "opt_ar": [
            "تثبيت ومسك العنوان",
            "تفعيل المقاطعات",
            "التحكم في سرعة التنفيذ",
            "الإشارة إلى عملية حسابية"
        ],
        "answer": 0
    },
    {
        "q": "Which of the following is a 16-bit register in the 8085 microprocessor?",
        "q_ar": "أي مما يلي يعتبر سجل 16-بت في معالج 8085؟",
        "options": [
            "Accumulator",
            "Stack Pointer",
            "Temporary Register",
            "Instruction Register"
        ],
        "opt_ar": [
            "المركم",
            "مؤشر المكدس",
            "السجل المؤقت",
            "سجل التعليمات"
        ],
        "answer": 1
    },
    {
        "q": "Which of the following is not an addressing mode in the 8085 microprocessor?",
        "q_ar": "أي مما يلي ليس من أنماط العنونة في معالج 8085؟",
        "options": [
            "Immediate",
            "Direct",
            "Register Indirect",
            "Stack Addressing"
        ],
        "opt_ar": [
            "فوري",
            "مباشر",
            "غير مباشر عبر السجل",
            "عنونة المكدس"
        ],
        "answer": 3
    },
    {
        "q": "The instruction CPI 45H belongs to which addressing mode?",
        "q_ar": "إلى أي نمط عنونة تنتمي التعليمية CPI 45H؟",
        "options": [
            "Immediate",
            "Direct",
            "Register",
            "Indirect"
        ],
        "opt_ar": [
            "فوري",
            "مباشر",
            "سجل",
            "غير مباشر"
        ],
        "answer": 0
    }
],
    "extraQuestions":[
    {
        "q": "If we have a RAM memory addressed starting at 8000H and ending at 83FFH, what is the memory size?",
        "q_ar": "إذا كان لدينا ذاكره RAM معنونه بالعنوان 8000H كبدايه للذاكره والعنوان 83fffH كنهايه فكم يكون حجم الذاكرة؟",
        "options": [
            "12 KB",
            "16 KB",
            "4 KB",
            "14 KB"
        ],
        "opt_ar": [
            "١٢ كيلوبايت",
            "١٦ كيلوبايت",
            "٤ كيلوبايت",
            "١٤ كيلوبايت"
        ],
        "answer": 1
    },
    {
        "q": "A memory has an 8-bit data bus and an 8-bit address bus. What is the maximum storage capacity?",
        "q_ar": "ذاكره تحتوي علي ناقل بيانات حجمه ٨بت، ناقل عنوان حجمه ٨ بت يمكن ان يخزن كحد اقصي:",
        "options": [
            "256 Bytes",
            "256 Bits",
            "1 KB",
            "255 Bytes"
        ],
        "opt_ar": [
            "٢٥٦ بايت",
            "٢٥٦ بت",
            "١ كيلوبايت",
            "٢٥٥ بايت"
        ],
        "answer": 0
    },
    {
        "q": "How many bits are required to execute a microprocessor with 115 instructions?",
        "q_ar": "كم عدد البتات المطلوبة لتنفيذ معالج دقيق ١١٥ امر؟",
        "options": [
            "5 bits",
            "6 bits",
            "7 bits",
            "8 bits"
        ],
        "opt_ar": [
            "5 بت",
            "٦ بت",
            "٧ بت",
            "٨بت"
        ],
        "answer": 2
    },
    {
        "q": "The number of memory locations in the 8085 microprocessor is determined by ...... which has a size of ......",
        "q_ar": "يتم تحديد عدد مواقع الذاكره في المعالج الدقيق ٨٠٨٥ بواسطة........والذي يقدر حجمه في المعالج الدقيق.",
        "options": [
            "Data bus, 8-bit",
            "Address bus, 8-bit",
            "Data bus, 16-bit",
            "Address bus, 16-bit"
        ],
        "opt_ar": [
            "ناقل البيانات ،٨بت",
            "ناقل العنوان، ٨بت",
            "ناقل البيانات ، ١٦ بت",
            "ناقل العنوان ، ١٦ بت"
        ],
        "answer": 3
    },
    {
        "q": "The capability and speed of the 8085 processor is determined by ...... which has a size of ......",
        "q_ar": "يتم تحديد قدرة وسرعة المعالج ٨٠٨٥ بواسطة............والذي يقدر حجمه بـ:",
        "options": [
            "Data bus, 8-bit",
            "Address bus, 8-bit",
            "Data bus, 16-bit",
            "Address bus, 16-bit"
        ],
        "opt_ar": [
            "ناقل البيانات ،٨بت",
            "ناقل العنوان، ٨ بت",
            "ناقل البيانات ، ١٦ بت",
            "ناقل العنوان ، ١٦ بت"
        ],
        "answer": 0
    },
    {
        "q": "The register used to store the address of the next instruction to be executed is:",
        "q_ar": "المسجل الذي يستخدم لتخزين عنوان الامر الذي يستخدم تنفيذه تالياً:",
        "options": [
            "Flags Register",
            "Program Counter",
            "Accumulator Register",
            "Other"
        ],
        "opt_ar": [
            "مسجل الأعلام",
            "عداد البرنامج",
            "مسجل المركم",
            "غير ذلك"
        ],
        "answer": 1
    },
    {
        "q": "Which of the following will occur in 8085 when executing the instruction LXI H, 2050H?",
        "q_ar": "أي مما يلي سيتم تنفيذه في المعالج الدقيق ٨٠٨٥ عند تنفيذ الأمر LXI H, 2050H؟",
        "options": [
            "50 will be stored in register C, 20 in register B",
            "20 will be stored in register C, 50 in register B",
            "The contents of address 2050H will be stored in B",
            "B will be stored in 2050H"
        ],
        "opt_ar": [
            "50 سيتم تخزينها في المسجل L، و 20 في المسجل H ",
            "20 سيتم تخزينها في المسجل L، و 50 في المسجل H",
            "محتوى العنوان 2050H سيتم تخزينه في المسجل",
            "2050H سيتم تخزينها في المسجل B"
        ],
        "answer": 2
    },
    {
        "q": "What is the size of the Program Counter register in the 8085 processor?",
        "q_ar": "ما هو حجم مسجل عداد البرنامج في المعالج 8085؟",
        "options": [
            "8-bit",
            "32-bit",
            "16-bit",
            "4-bit"
        ],
        "opt_ar": [
            "8بت",
            "32بت",
            "16بت",
            "4بت"
        ],
        "answer": 2
    },
    {
        "q": "The main purpose of the Accumulator register in the 8085 processor is:",
        "q_ar": "الغرض الرئيسي من مسجل المركم في المعالج ٨٠٨٥:",
        "options": [
            "Store data temporarily during arithmetic/logic operations",
            "Store instructions",
            "Used as a pointer",
            "Other"
        ],
        "opt_ar": [
            "تخزين البيانات بشكل مؤقت وإجراء العمليات",
            "تخزين الأوامر",
            "يستخدم كمؤشر",
            "غير ذلك"
        ],
        "answer": 0
    },
    {
        "q": "Which of the following flags is NOT available in the 8085 microprocessor?",
        "q_ar": "أي من الأعلام الآتيه غير متاح في المعالج ٨٠٨٥؟",
        "options": [
            "Zero Flag",
            "Carry Flag",
            "Sign Flag",
            "Other (Overflow is not available, so 'Other')"
        ],
        "opt_ar": [
            "علم الصفر",
            "علم الحمل",
            "علم الاشاره",
            "غير ذلك"
        ],
        "answer": 3
    },
    {
        "q": "The 8085 processor contains:",
        "q_ar": "المعالج ٨٠٨٥ يحتوي علي:",
        "options": [
            "8-bit data bus, 8-bit address bus",
            "16-bit address bus, 8-bit data bus",
            "16-bit data bus, 16-bit address bus",
            "8-bit address bus, 16-bit data bus"
        ],
        "opt_ar": [
            "٨ بت ناقل البيانات ، ٨بت ناقل العنوان",
            "١٦ بت ناقل العنوان،٨بت ناقل البيانات",
            "١٦ بت ناقل البيانات ، ١٦ بت ناقل العنوان",
            "٨بت ناقل العنوان ، ١٦ بت ناقل البيانات"
        ],
        "answer": 1
    },
    {
        "q": "What is the size of the Stack Pointer register in the 8085 microprocessor?",
        "q_ar": "ما هو حجم مسجل مؤشر المكدسة في المعالج ٨٠٨٥؟",
        "options": [
            "6-bit",
            "8-bit",
            "12-bit",
            "16-bit"
        ],
        "opt_ar": [
            "6بت",
            "8بت",
            "12بت",
            "16بت"
        ],
        "answer": 3
    },
    {
        "q": "If the address bus in a processor is 16 bits, what is the maximum memory size?",
        "q_ar": "إذا كان ناقل العنواين في المعالج يساوي ١٦ بت فإن اقصي حجم للذاكرة يساوي:",
        "options": [
            "64 KB",
            "12 KB",
            "10 KB",
            "16 KB"
        ],
        "opt_ar": [
            "٦٤ كيلوبايت",
            "١٢ كيلوبايت",
            "١٠ كيلوبايت",
            "١٦ كيلوبايت"
        ],
        "answer": 0
    },
    {
        "q": "The 8085 microprocessor contains:",
        "q_ar": "المعالج الدقيق ٨٠٨٥ يحتوي علي:",
        "options": [
            "ROM memory",
            "RAM memory",
            "I/O ports",
            "Arithmetic and Logic Unit (ALU)"
        ],
        "opt_ar": [
            "ROM ذاكره",
            "RAM ذاكره",
            "وحدات إدخال وإخراج",
            "وحدة حساب ومنطق"
        ],
        "answer": 3
    },
    {
        "q": "RAM is:",
        "q_ar": "RAM هي:",
        "options": [
            "Write-only memory",
            "Read and write memory",
            "Volatile memory",
            "Read/Write and Volatile memory"
        ],
        "opt_ar": [
            "ذاكره للكتابه فقط",
            "ذاكره للقراءة والكتابة",
            "ذاكره متطايره",
            "ذاكرة للقراءة والكتابة وذاكرة متطايرة"
        ],
        "answer": 3
    },
    {
        "q": "ROM is:",
        "q_ar": "ROM هي:",
        "options": [
            "Non-volatile memory",
            "Read-only memory",
            "Volatile memory",
            "Non-volatile and Read-only memory"
        ],
        "opt_ar": [
            "ذاكره غير متطايره",
            "ذاكره للقراءة فقط",
            "ذاكره متطيره",
            "ذاكرة غير متطايرة وذاكرة للقراءة فقط"
        ],
        "answer": 3
    },
    {
        "q": "The address bus:",
        "q_ar": "ناقل العناوين:",
        "options": [
            "Transfers address from input unit to processor",
            "Transfers address bidirectionally",
            "Transfers address from memory to processor",
            "Transfers address unidirectionally"
        ],
        "opt_ar": [
            "ينقل العنوان من وحدة الإدخال للمعالج",
            "ينقل العناوين في اتجاهين",
            "ينقل العنوان من الذاكره للمعالج",
            "ينقل العنواين في اتجاه واحد"
        ],
        "answer": 3
    },
    {
        "q": "If the accumulator contains 50H, after executing ADI 3FH, it will contain:",
        "q_ar": "لو أن مسجل المركم يحتوي علي 50H فإن بعد تنفيذ الأمر ADI 3FH سيحتوي علي:",
        "options": [
            "36H",
            "50H",
            "3FH",
            "8FH"
        ],
        "opt_ar": [
            "36H",
            "50H",
            "3F H",
            "8F H"
        ],
        "answer": 3
    },
    {
        "q": "The instruction MOV A, B takes up how many bytes in memory?",
        "q_ar": "الأمر MOV A,B يوضع في الذاكره في:",
        "options": [
            "2 Bytes",
            "1 Byte",
            "3 Bytes",
            "Other"
        ],
        "opt_ar": [
            "٢ بايت",
            "١ بايت",
            "٣ بايت",
            "غير ذلك"
        ],
        "answer": 1
    },
    {
        "q": "The instruction LXI H, 2050H takes up how many bytes in memory?",
        "q_ar": "الأمر LXI H,2050H يوضع في الذاكره في:",
        "options": [
            "2 Bytes",
            "1 Byte",
            "3 Bytes",
            "Other"
        ],
        "opt_ar": [
            "٢ بايت",
            "١ بايت",
            "٣ بايت",
            "غير ذلك"
        ],
        "answer": 2
    },
    {
        "q": "The instruction MVI A, 50H takes up how many bytes in memory?",
        "q_ar": "الأمر MVI A,50H يوضع في الذاكره في:",
        "options": [
            "2 Bytes",
            "1 Byte",
            "3 Bytes",
            "Other"
        ],
        "opt_ar": [
            "٢ بايت",
            "١ بايت",
            "٣ بايت",
            "غير ذلك"
        ],
        "answer": 0
    },
    {
        "q": "The instruction CMA takes up how many bytes in memory?",
        "q_ar": "الأمر CMA يوضع في الذاكره في:",
        "options": [
            "2 Bytes",
            "1 Byte",
            "3 Bytes",
            "Other"
        ],
        "opt_ar": [
            "٢ بايت",
            "١ بايت",
            "٣ بايت",
            "غير ذلك"
        ],
        "answer": 1
    },
    {
        "q": "After the operation 11001011 + 00110001, which of the following is true?",
        "q_ar": "بعد إجراء العملية 11001011+00110001 فإن:",
        "options": [
            "Cy=1",
            "Cy=0",
            "AC=1",
            "Other"
        ],
        "opt_ar": [
            "Cy=1",
            "Cy=0",
            "AC=1",
            "غير ذلك"
        ],
        "answer": 1
    },
    {
        "q": "After the operation 11001011 + 00110001, what is the parity flag (P)?",
        "q_ar": "بعد إجراء العملية 11001011+00110001 فإن (تابع أعلام الباريتي):",
        "options": [
            "P=1",
            "P=0",
            "AC=1",
            "Other"
        ],
        "opt_ar": [
            "P=1",
            "P=0",
            "AC=1",
            "غير ذلك"
        ],
        "answer": 0
    },
    {
        "q": "After the operation 11001011 + 00110001, what are the flags status?",
        "q_ar": "بعد إجراء العملية 11001011+00110001 فإن:",
        "options": [
            "P=1",
            "AC=0",
            "AC=1",
            "AC=0, P=1"
        ],
        "opt_ar": [
            "P=1",
            "AC=0",
            "AC=1",
            "AC=0, P=1"
        ],
        "answer": 3
    },
    {
        "q": "The instruction JC NEXT means:",
        "q_ar": "الأمر JC NEXT:",
        "options": [
            "Jump to NEXT if Carry flag is 0",
            "Jump to NEXT if Carry flag is 1",
            "Jump to NEXT if Flags register is 0",
            "Jump to NEXT if Flags register is 1"
        ],
        "opt_ar": [
            "يتم القفز إلي العنوان NEXT إذا احتوي علم الحمل علي صفر",
            "يتم القفز إلى العنوان NEXT إذا احتوي علم الحمل علي ١",
            "يتم القفز إلي العنوان NEXT إذا احتوي مسجل الأعلام علي صفر",
            "يتم القفز إلى العنوان NEXT إذا احتوي مسجل الأعلام علي ١"
        ],
        "answer": 1
    },
    {
        "q": "The instruction MVI A, 50H belongs to which addressing mode?",
        "q_ar": "الأمر MVI A,50H من نوع:",
        "options": [
            "Immediate Addressing Mode",
            "Register Addressing Mode",
            "Direct Addressing Mode",
            "Indirect Addressing Mode"
        ],
        "opt_ar": [
            "Immediate Addressing Mode",
            "Register Addressing Mode",
            "Direct Addressing Mode",
            "Indirect Addressing Mode"
        ],
        "answer": 0
    },
    {
        "q": "The instruction MOV A, B belongs to which addressing mode?",
        "q_ar": "الأمر MOV A,B من نوع:",
        "options": [
            "Immediate Addressing Mode",
            "Register Addressing Mode",
            "Direct Addressing Mode",
            "Indirect Addressing Mode"
        ],
        "opt_ar": [
            "Immediate Addressing Mode",
            "Register Addressing Mode",
            "Direct Addressing Mode",
            "Indirect Addressing Mode"
        ],
        "answer": 1
    },
    {
        "q": "Which of the following instructions occupies 2 bytes in memory in 8085?",
        "q_ar": "أي من الأوامر التالية يوضع في ٢ بايت في الذاكره في المعالج ٨٠٨٥؟",
        "options": [
            "MOV",
            "CMA",
            "ADD",
            "MVI"
        ],
        "opt_ar": [
            "MOV",
            "CMA",
            "ADD",
            "MVI"
        ],
        "answer": 3
    },
    {
        "q": "POP and PUSH operations are executed using which register?",
        "q_ar": "عمليات POP , PUSH يتم تنفيذها بواسطة:",
        "options": [
            "Program Counter register",
            "General purpose registers",
            "Stack Pointer register",
            "Accumulator register"
        ],
        "opt_ar": [
            "مسجل عداد البرنامج",
            "المسجلات عامة الأغراض",
            "مسجل مؤشر المكدسة",
            "مسجل المركم"
        ],
        "answer": 2
    },
    {
        "q": "What action does the POP operation perform on the Stack Pointer?",
        "q_ar": "ما نوع الإجراء الذي تقوم به العمليه POP؟",
        "options": [
            "Increments the Stack Pointer",
            "Increments the Program Counter",
            "Decrements the Stack Pointer",
            "Decrements the Program Counter"
        ],
        "opt_ar": [
            "زيادة مسجل مؤشر المكدسه",
            "زيادة عداد البرنامج",
            "نقصان مسجل مؤشر المكدسة",
            "نقصان عداد البرنامج"
        ],
        "answer": 0
    },
    {
        "q": "Which command in the 8085 stores the content of H and L registers into memory locations 2050 and 2051 respectively?",
        "q_ar": "ما هو الأمر في المعالج ٨٠٨٥ الذي يخزن محتوي المسجل H ,L في مواقع الذاكره ٢٠٥١،٢٠٥٠ علي التوالي هو؟",
        "options": [
            "SPHL 2050H",
            "SPHL 2051H",
            "SHLD 2050H",
            "STAX 2050H"
        ],
        "opt_ar": [
            "SPHL 2050H",
            "SPHL2051H",
            "SHLD 2050H",
            "STAX 2050H"
        ],
        "answer": 2
    },
    {
        "q": "After executing the following program, what will the accumulator contain? (MVI A,05H; MVI B,05H; NEXT: ADD B; DCR B; JNZ NEXT; ADI 03H; HLT)",
        "q_ar": "عند تنفيذ البرنامج المذكور (إضافة تناقصية B من 5 إلى 1)، ماذا سيحتوي المركم في النهاية؟",
        "options": [
            "17H",
            "20H",
            "23H",
            "05H"
        ],
        "opt_ar": [
            "17H",
            "20H",
            "23H",
            "05H"
        ],
        "answer": 2
    },
    {
        "q": "What is the content of the accumulator after executing XRI F0H?",
        "q_ar": "ما هو محتوي مسجل المركم في المعالج ٨٠٨٥ بعد تنفيذ الأمر XRI F0H؟",
        "options": [
            "F0H",
            "0FH",
            "00H",
            "Other"
        ],
        "opt_ar": [
            "F0H",
            "OFH",
            "00H",
            "غير ذلك"
        ],
        "answer": 3
    },
    {
        "q": "In the program (MVI A,07H; RLC; MOV B,A; RLC; RLC; ADD B; RRC), what is the accumulator content?",
        "q_ar": "في البرنامج التالي افترض ان 0=CY ، محتوي مسجل المركم بعد تنفيذ البرنامج سيكون:",
        "options": [
            "8CH",
            "64H",
            "23H",
            "15H"
        ],
        "opt_ar": [
            "8CH",
            "64H",
            "23H",
            "15H"
        ],
        "answer": 2
    },
    {
        "q": "Locations 2002H and 2001H contain 98H and B1H. After executing the program, what is stored in memory?",
        "q_ar": "يحتوي الموقعان 2002H, 2001H علي 98H, B1H بالترتيب. بعد تنفيذ البرنامج، ما النتيجة؟",
        "options": [
            "D2H",
            "21H",
            "2DH",
            "98H"
        ],
        "opt_ar": [
            "D2H",
            "21H",
            "2DH",
            "98H"
        ],
        "answer": 1
    },
    {
        "q": "The accumulator contains FFH. What are the states of CY, S, Z flags after adding 01H?",
        "q_ar": "يحتوي مسجل المركم علي FFH. بين حالة علم الحمل ، علم الصفر ، علم الاشاره عند إضافة 01H:",
        "options": [
            "CY=0, S=0, Z=1",
            "CY=1, S=0, Z=1",
            "CY=0, S=0, Z=0",
            "CY=1, S=1, Z=1"
        ],
        "opt_ar": [
            "CY=0 ,S=0,Z=1",
            "CY=1,S=0,Z=1",
            "CY=0 ,S=0,Z=0",
            "CY=1 ,S=1,Z=1"
        ],
        "answer": 1
    },
    {
        "q": "The accumulator contains FFH. What are the states of CY, S, Z flags after incrementing by 1 (INR A)?",
        "q_ar": "يحتوي مسجل المركم علي FFH. بين حالة علم الحمل ، علم الصفر ، علم الاشاره عند زيادة محتوي مسجل المركم بواحد:",
        "options": [
            "CY=1, S=1, Z=0",
            "CY=1, S=0, Z=1",
            "CY=0, S=1, Z=1",
            "CY=1, S=0, Z=0"
        ],
        "opt_ar": [
            "CY=1 ,S=1,Z=0",
            "CY=1,S=0,Z=1",
            "CY=0,S=0,Z=1 (تعديل: INR لا تؤثر على الكاري فحمله القديم يبقى، وتصبح Z=1, S=0)",
            "CY=1 ,S=0,Z=0"
        ],
        "answer": 1
    },
    {
        "q": "After executing the program (MVI A,33H; MVI B,78H; ADD B; CMA; ANI 32H), the accumulator will contain:",
        "q_ar": "عند تنفيذ البرنامج التالي في المعالج ٨٠٨٥ فإن محتوي مسجل المركم سيكون:",
        "options": [
            "00H",
            "10H",
            "11H",
            "32H"
        ],
        "opt_ar": [
            "00H",
            "10H",
            "11H",
            "32H"
        ],
        "answer": 1
    },
    {
        "q": "What is the accumulator content after executing MVI A, B7H; ORA A; RAL?",
        "q_ar": "محتوي مسجل المركم بعد تنفيذ الأوامر التالية سيكون (MVI A,B7H; ORA A; RAL):",
        "options": [
            "7EH",
            "6FH",
            "EEH",
            "EFH"
        ],
        "opt_ar": [
            "7EH",
            "6FH",
            "EEH",
            "EFH"
        ],
        "answer": 0
    },
    {
        "q": "Which of the following is correct regarding SPHL instruction?",
        "q_ar": "أي من التالي صحيح فيما يخص الأمر SPHL؟",
        "options": [
            "It is a 3-byte instruction",
            "It copies the contents of HL pair into SP",
            "Both a and b",
            "Other"
        ],
        "opt_ar": [
            "أنه امر ٣ بايت",
            "ينقل إلى SP محتوي زوج المسجلات HL",
            "a,b معاً",
            "غير ذلك"
        ],
        "answer": 1
    },
    {
        "q": "Which of the following belongs to the indirect/register indirect instruction set?",
        "q_ar": "أي من التالي من مجموعة التعليمات الغير مباشره (Indirect)؟",
        "options": [
            "LDA 2700H",
            "ADI 36H",
            "DAA",
            "LDAX B"
        ],
        "opt_ar": [
            "LDA 2700H",
            "ADI 36H",
            "DAA",
            "LDAX B"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following instructions occupies 2 bytes in memory in 8085?",
        "q_ar": "أي من الأوامر التالية يوضع في ٢ بايت في الذاكره في المعالج ٨٠٨٥؟",
        "options": [
            "LDA 2500H",
            "MOV A, B",
            "IN 01H",
            "JMP 2065H"
        ],
        "opt_ar": [
            "LDA 2500H",
            "MOV A ,B",
            "IN 01H",
            "JMP 2065H"
        ],
        "answer": 2
    },
    {
        "q": "When the data required for an instruction is inside a microprocessor register, which addressing mode is used?",
        "q_ar": "عندما تكون البيانات المطلوبة للتعليمات موجودة داخل مسجل في المعالج الدقيق أي من أساليب العنونه يتم استخدامها؟",
        "options": [
            "Immediate Addressing Mode",
            "Register Addressing Mode",
            "Direct Addressing Mode",
            "Indirect Addressing Mode"
        ],
        "opt_ar": [
            "Immediate Addressing Mode",
            "Register Addressing Mode",
            "Direct Addressing Mode",
            "Indirect Addressing Mode"
        ],
        "answer": 1
    },
    {
        "q": "What will be the contents of HL and DE registers after executing LXI H,2500H; LXI D,0200H; DAD D; XCHG?",
        "q_ar": "ماذا سيكون محتوي المسجلين HL ,DE بعد تنفيذ الأوامر التاليه؟",
        "options": [
            "0200H, 2500H",
            "0200H, 2700H",
            "2500H, 0200H",
            "2700H, 0200H"
        ],
        "opt_ar": [
            "0200 H,2500H",
            "0200H,2700H",
            "2500H,0200H",
            "2700H,0200H"
        ],
        "answer": 1
    },
    {
        "q": "What will be the content of the accumulator after executing the given loop program?",
        "q_ar": "ماذا سيكون محتوي مسجل المركم عند تنفيذ البرنامج التالي؟ (XRA A; MVI B,04H; Loop: MVI A,03H; RAR; DCR B; JNZ Loop)",
        "options": [
            "60H",
            "30H",
            "06H",
            "03H"
        ],
        "opt_ar": [
            "60H",
            "30H",
            "06H",
            "03H"
        ],
        "answer": 1
    }
],
};