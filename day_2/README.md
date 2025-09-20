# JavaScript Basics

## أساسيات جافاسكريبت | Osama Elzero (Videos 11 → 22)

---

## 🔹 Variables Declaration | تعريف المتغيرات

### الفروقات الأساسية

| النوع   | النطاق (Scope) | قابلية التعديل  | الاستخدام       |
| ------- | -------------- | --------------- | --------------- |
| `var`   | Function Scope | ✅ قابل للتعديل | قديم - غير محبذ |
| `let`   | Block Scope    | ✅ قابل للتعديل | حديث - محبذ     |
| `const` | Block Scope    | ❌ ثابت         | للقيم الثابتة   |

### مثال عملي

```javascript
if (true) {
  var a = 1; // Global scope (if not in function)
  let b = 2; // Block scope only
  const c = 3; // Block scope only
}

console.log(a); // Output: 1
console.log(b); // ❌ ReferenceError: b is not defined
console.log(c); // ❌ ReferenceError: c is not defined
```

---

## 🔹 Variable Scope | نطاق المتغيرات

### أنواع النطاقات

1. **Global Scope** → المتغير مرئي في كل مكان
2. **Function Scope** → مرئي داخل الدالة فقط
3. **Block Scope** → مرئي داخل الأقواس `{}` فقط

### مثال توضيحي

```javascript
// Global Scope
var globalVar = "I'm global";

function testScope() {
  // Function Scope
  var functionVar = "I'm in function";

  if (true) {
    // Block Scope
    let blockVar = "I'm in block";
    const blockConst = "I'm constant in block";

    console.log(globalVar); // ✅ Accessible
    console.log(functionVar); // ✅ Accessible
    console.log(blockVar); // ✅ Accessible
  }

  console.log(blockVar); // ❌ Error: not defined
}

console.log(functionVar); // ❌ Error: not defined
```

---

## 🔹 Escape Sequences | رموز الهروب

### الرموز الأساسية

| الرمز | الوظيفة             | مثال                  |
| ----- | ------------------- | --------------------- |
| `\n`  | سطر جديد (New Line) | `"First\nSecond"`     |
| `\t`  | مسافة أفقية (Tab)   | `"Name:\tAli"`        |
| `\"`  | علامة اقتباس مزدوجة | `"He said \"Hello\""` |
| `\'`  | علامة اقتباس مفردة  | `'It\'s me'`          |
| `\\`  | شرطة مائلة عكسية    | `"C:\\Users\\File"`   |

### أمثلة عملية

```javascript
console.log("Line 1\nLine 2\nLine 3");
console.log("Name:\tAhmed\nAge:\t25");
console.log('She said: "JavaScript is awesome!"');
console.log("Path: C:\\Program Files\\App");
```

---

## 🔹 String Concatenation | دمج النصوص

### الطريقة التقليدية باستخدام `+`

```javascript
let firstName = "Ahmed";
let lastName = "Ali";
let age = 25;

// Traditional concatenation
let message =
  "My name is " +
  firstName +
  " " +
  lastName +
  " and I am " +
  age +
  " years old.";

console.log(message);
```

---

## 🔹 Template Literals | القوالب النصية

### استخدام Backticks مع `${}`

```javascript
let firstName = "Ahmed";
let lastName = "Ali";
let age = 25;

// Modern way with template literals
let message = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

console.log(message);

// Multi-line strings
let paragraph = `
  This is line 1
  This is line 2
  This is line 3
`;

// Expressions inside template literals
let calculation = `The result is: ${10 * 5 + 2}`;
console.log(calculation); // The result is: 52
```

---

## 🔹 Unary Operators | العوامل الأحادية

### تحويل القيم باستخدام `+` و `-`

```javascript
// Unary Plus (+) - يحول إلى رقم
console.log(+"100"); // 100 (number)
console.log(+"3.14"); // 3.14 (number)
console.log(+true); // 1
console.log(+false); // 0
console.log(+"hello"); // NaN

// Unary Minus (-) - يحول إلى رقم ويعكس الإشارة
console.log(-"100"); // -100 (number)
console.log(-"3.14"); // -3.14 (number)
console.log(-true); // -1
console.log(-false); // -0
```

---

## 🔹 Type Coercion | التحويل التلقائي للأنواع

### قواعد التحويل التلقائي

```javascript
// مع الجمع (+) - يحول إلى نص
console.log("5" + 2); // "52" (string)
console.log(2 + "5"); // "25" (string)
console.log("Hello" + true); // "Hellotrue"

// مع باقي العمليات - يحول إلى رقم
console.log("6" - 2); // 4 (number)
console.log("6" * 2); // 12 (number)
console.log("10" / 2); // 5 (number)
console.log("10" % 3); // 1 (number)

// حالات خاصة
console.log(true + true); // 2
console.log(true + false); // 1
console.log("5" - "2"); // 3
```

---

## 🔹 Operators | العوامل

### 1️⃣ العوامل الحسابية (Arithmetic Operators)

| العامل | الوظيفة     | مثال     | النتيجة |
| ------ | ----------- | -------- | ------- |
| `+`    | الجمع       | `5 + 3`  | `8`     |
| `-`    | الطرح       | `5 - 3`  | `2`     |
| `*`    | الضرب       | `5 * 3`  | `15`    |
| `/`    | القسمة      | `10 / 2` | `5`     |
| `%`    | باقي القسمة | `10 % 3` | `1`     |
| `**`   | الأس        | `2 ** 3` | `8`     |

### 2️⃣ عوامل الإسناد (Assignment Operators)

```javascript
let x = 10;
x += 5; // x = x + 5  → 15
x -= 3; // x = x - 3  → 12
x *= 2; // x = x * 2  → 24
x /= 4; // x = x / 4  → 6
x %= 4; // x = x % 4  → 2
x **= 3; // x = x ** 3 → 8
```

### 3️⃣ عوامل المقارنة (Comparison Operators)

| العامل | الوظيفة                   | مثال        | النتيجة |
| ------ | ------------------------- | ----------- | ------- |
| `==`   | المساواة (مع تحويل النوع) | `5 == "5"`  | `true`  |
| `===`  | المساواة الصارمة          | `5 === "5"` | `false` |
| `!=`   | عدم المساواة              | `5 != 3`    | `true`  |
| `!==`  | عدم المساواة الصارمة      | `5 !== "5"` | `true`  |
| `>`    | أكبر من                   | `5 > 3`     | `true`  |
| `<`    | أصغر من                   | `5 < 3`     | `false` |
| `>=`   | أكبر من أو يساوي          | `5 >= 5`    | `true`  |
| `<=`   | أصغر من أو يساوي          | `5 <= 3`    | `false` |

### 4️⃣ العوامل المنطقية (Logical Operators)

```javascript
// AND (&&) - كل الشروط لازم تكون صحيحة
console.log(true && true); // true
console.log(true && false); // false

// OR (||) - شرط واحد على الأقل يكون صحيح
console.log(true || false); // true
console.log(false || false); // false

// NOT (!) - عكس القيمة
console.log(!true); // false
console.log(!false); // true
```

---

## 🔹 Math Object | كائن الرياضيات

### الدوال الأساسية

| الدالة          | الوظيفة          | مثال                | النتيجة |
| --------------- | ---------------- | ------------------- | ------- |
| `Math.round()`  | التقريب العادي   | `Math.round(4.7)`   | `5`     |
| `Math.ceil()`   | التقريب لأعلى    | `Math.ceil(4.1)`    | `5`     |
| `Math.floor()`  | التقريب لأسفل    | `Math.floor(4.9)`   | `4`     |
| `Math.trunc()`  | إزالة الكسور     | `Math.trunc(4.9)`   | `4`     |
| `Math.max()`    | أكبر قيمة        | `Math.max(1, 5, 3)` | `5`     |
| `Math.min()`    | أصغر قيمة        | `Math.min(1, 5, 3)` | `1`     |
| `Math.pow()`    | الأس             | `Math.pow(2, 3)`    | `8`     |
| `Math.sqrt()`   | الجذر التربيعي   | `Math.sqrt(16)`     | `4`     |
| `Math.abs()`    | القيمة المطلقة   | `Math.abs(-10)`     | `10`    |
| `Math.random()` | رقم عشوائي [0,1) | `Math.random()`     | `0.xxx` |

### أمثلة متقدمة

```javascript
// رقم عشوائي بين 0 و 10
let random1to10 = Math.floor(Math.random() * 10) + 1;

// رقم عشوائي بين min و max
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomBetween(5, 15)); // رقم بين 5 و 15

// حساب المسافة بين نقطتين
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
```

---

## 📝 ملخص سريع | Quick Summary

### النقاط الأساسية

- ✅ استخدم `let` و `const` بدلاً من `var`
- ✅ فهم الـ Scope مهم جداً لتجنب الأخطاء
- ✅ Template Literals أسهل وأوضح من Concatenation
- ✅ انتبه للتحويل التلقائي للأنواع في JavaScript
- ✅ استخدم `===` بدلاً من `==` للمقارنة الدقيقة
- ✅ Math Object يوفر دوال رياضية جاهزة ومفيدة

### Best Practices

```javascript
// ❌ تجنب
var name = "Ahmed";
console.log("Hello " + name);
if (5 == "5") {
}

// ✅ استخدم
const name = "Ahmed";
console.log(`Hello ${name}`);
if (5 === 5) {
}
```

---

## 🔗 روابط مفيدة | Useful Links

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Elzero Web School](https://elzero.org/)

---
