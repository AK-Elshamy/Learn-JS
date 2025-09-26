# 📘 JavaScript — Day 5

✨ ابدأ من الفيديو **70 → 57** مع أسامة الزيرو 🎥

---

## 📝 Outline (المواضيع)

* Function — تعريف ودعوة.
* DRY — مبدأ اختصار وتجنّب التكرار.
* Rest Parameters — جمع المتغيرات المتغيرة.
* Only One Allowed — يمكن استخدام rest parameter واحد فقط في الدالة.
* Must Be Last Element — يجب أن يأتي الـ rest parameter في نهاية قائمة المعاملات.
* Anonymous Function — دوال بدون اسم.
* Nested Function — دوال داخل دوال.
* Arrow Function — كتابة مختصرة وخصائصها.
* Scope — نطاق المتغيرات (Local, Global).

---

## 📚 1) Function — تعريف سريع

الدالة هي بلوك من الكود يمكن إعادة استخدامه. تتكوَّن من تعريف (function declaration) أو تعبير (function expression) ثم استدعاء (call).

```js
// تعريف ودعوة
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Basha')); // Hello, Basha!
```

## 📌 2) DRY (Don't Repeat Yourself)

لا تكرر الكود — بدلًا من تكرار منطق، حوّله إلى دالة أو وحدة قابلة لإعادة الاستخدام.

```js
// سيء
console.log(Math.max(1,2,3));
console.log(Math.max(4,5,6));

// أفضل
function maxAndLog(...nums) {
  console.log(Math.max(...nums));
}
maxAndLog(1,2,3);
maxAndLog(4,5,6);
```

---

## 🔗 3) Rest Parameters

تسمح لك الدوال باستقبال عدد غير محدد من القيم كصفيف واحد.

```js
function sum(...numbers) {
  return numbers.reduce((a,b) => a + b, 0);
}
console.log(sum(1,2,3,4)); // 10
```

**قواعد مهمة:**

* `Only One Allowed` → لا يمكنك تعريف أكثر من rest parameter في نفس الدالة.
* `Must Be Last Element` → يجب أن يكون في آخر قائمة المعاملات.

```js
// خطأ
function wrong(...a, ...b) {}

// خطأ
function wrongAgain(...a, x) {}

// صحيح
function ok(x, y, ...rest) {}
```

---

## 🕵️‍♂️ 4) Anonymous Function (دالة بدون اسم)

تُستخدم عادة في التعبيرات أو كقيمة تُمرر كـ callback.

```js
const arr = [1,2,3];
arr.forEach(function(n){
  console.log(n);
});

// أو مع arrow
arr.forEach(n => console.log(n));
```

---

## 🧩 5) Nested Function (دوال داخل دوال)

يمكن للدوال أن تُعرّف داخل دوال أخرى وتستخدم متغيرات النطاق الخارجي.

```js
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
const add5 = outer(5);
console.log(add5(3)); // 8
```

---

## ⚡ 6) Arrow Function

اختصار لتعريف الدوال، إلّا أن لديها فروق في التعامل مع `this` ولا يمكن استخدامها كـ constructors.

```js
// كامل
const add = (a, b) => {
  return a + b;
};

// نسخة مختصرة
const addShort = (a, b) => a + b;

// بدون معاملات
const sayHi = () => console.log('Hi');
```

> ملاحظة: Arrow functions لا تملك `arguments` خاص بها — استخدم rest `(...args)` إذا احتجت.

---

## 🌐 7) Scope — Local vs Global

* **Global:** المتغيرات المعلنة خارج أي دالة. متاحة في كل مكان.
* **Local (Function scope & Block scope):** `var` لها نطاق دالة، بينما `let` و `const` لهما نطاق بلوك `{}`.

```js
let g = 'global';
function f(){
  let local = 'inside';
  console.log(g); // متاح
  console.log(local); // متاح
}
console.log(local); // خطأ
```

---

## ⚠️ أخطاء شائعة وسريع الحل

* نسيان وضع `...` قبل rest param.
* محاولة استخدام أكثر من rest param.
* استخدام arrow function كـ constructor.
* الاعتماد على `var` دون فهم نطاقها.

---
