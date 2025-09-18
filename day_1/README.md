# ابدأ من الفيديو 1 للفيديو 10 مع أسامة الزيرو 🎥

> [!info] الملاحظات 📝
>
> - الـ Console لا يتبع لغة JavaScript، بل يتبع واجهة المستخدم للتطبيق (Application User Interface - API) 💻
> - الهدف من Console هو عرض أخطاء المطور (Developer) ومعلومات التصحيح أثناء تطوير التطبيق ⚠️

---

## 1️⃣ Document 📄

الـ **Document** هو كل حاجة موجودة في صفحة الويب (HTML Page) اللي بيشوفها المستخدم.

من خلال **Document Object Model (DOM)** تقدر تتحكم في عناصر الصفحة زي النصوص، الصور، والأزرار.

**أمثلة على استخدامه:**

```javascript
// تغيير النصوص
document.getElementById("demo").innerText = "Hello!";

// التحكم في الصور أو إضافة عناصر جديدة
```

---

## 2️⃣ Window 🌐

الـ **Window** هو النافذة اللي بتعرض الصفحة وبتحتوي على كل حاجة زي الـ Document وConsole وTimer Functions.

> [!note]
> كل صفحة ويب موجودة جوا **Window Object**.

**أمثلة على استخدامه:**

```javascript
// تظهر رسالة للمستخدم
window.alert("Hi!");

// تنفذ كود بعد ثانية
window.setTimeout(() => { ... }, 1000);
```

---

## 3️⃣ Console 💻

الـ **Console** هو أداة للمطور (Developer) علشان تشوف الأخطاء وتعمل **Debugging** للكود.

> [!warning]
> مش جزء من الصفحة نفسها، لكنه جزء من الـ **Browser Developer Tools**.

**أمثلة على استخدامه:**

```javascript
// تطبع رسالة في الـ Console
console.log("Hello World!");

// تعرض خطأ للمطور
console.error("Error!");
```

---

# ملاحظات ES6 البسيطة 📝

## 1️⃣ إيه هو ES6? ⚡

**ES6** = **ECMAScript 2015**، نسخة جديدة من JavaScript.
بتخلي الكود أسهل وأوضح.

---

## 2️⃣ أهم الحاجات اللي ممكن تبدأ بيها 🌟

### 🔹 let و const

- **let**: متغير ممكن يتغير.
- **const**: متغير ثابت.

```javascript
let age = 20;
const pi = 3.14;
```

### 🔹 Arrow Functions ➡️

دوال أصغر وسهلة.

```javascript
const sum = (a, b) => a + b;
```

### 🔹 Template Literals 📝

كتابة نصوص فيها متغيرات بسهولة.

```javascript
const name = "Basha";
console.log(`Hello, ${name}!`);
```

---

# مقدمة عن Data Types 📝

## 1️⃣ إيه هي Data Types؟

**Data Types** = أنواع البيانات اللي نقدر نخزنها في المتغيرات.
كل حاجة في JavaScript ليها نوع معين.

---

## 2️⃣ أهم أنواع البيانات 🌟

### 🔹 String 📝

نصوص أو حروف.

**مثال:**

```javascript
let name = "Basha";
```

### 🔹 Number 🔢

أرقام صحيحة أو عشرية.

**مثال:**

```javascript
let age = 20;
let price = 99.99;
```

### 🔹 Boolean ✅❌

قيمة صح أو خطأ.

**مثال:**

```javascript
let isStudent = true;
let hasJob = false;
```

### 🔹 Array => Object 📚

مجموعة بيانات مترتبة.

> [!important]
> Array هو نوع خاص من **Object**.

**مثال:**

```javascript
let fruits = ["apple", "banana", "orange"];
```

### 🔹 Object 🏠

بيانات منظمة على شكل أزواج key:value.

**مثال:**

```javascript
let person = {
  name: "Basha",
  age: 20,
  isStudent: true,
};
```

---

## 📋 خلاصة سريعة

| النوع        | الوصف                     | المثال                      |
| ------------ | ------------------------- | --------------------------- |
| **Document** | كل حاجة في الصفحة         | `document.getElementById()` |
| **Window**   | النافذة اللي بتعرض الصفحة | `window.alert()`            |
| **Console**  | أداة المطور               | `console.log()`             |
| **String**   | نصوص أو حروف              | `"Basha"`                   |
| **Number**   | أرقام                     | `20`, `99.99`               |
| **Boolean**  | صح أو خطأ                 | `true`, `false`             |
| **Array**    | مجموعة بيانات             | `["apple", "banana"]`       |
| **Object**   | بيانات منظمة              | `{name: "Basha"}`           |

---

# الحمد لله
