
# 📘 JavaScript Arrays  
> ✨ ابدأ من الفيديو **40 → 56** مع أسامة الزيرو 🎥  

---

## 🔹 1. Array
- الـ Array هي **بنية بيانات** بتخزن مجموعة عناصر (Numbers, Strings, Objects...).
- الإنشاء:
```js
let nums = [1, 2, 3, 4];
let fruits = ["apple", "banana", "mango"];
let mixed = [1, "Hello", true, { name: "Basha" }];
````

---

## 🔹 2. Length

* خاصية `length` بتجيب عدد العناصر:

```js
let arr = [10, 20, 30];
console.log(arr.length); // 3
```

* لو غيّرت `length` → بتتغير المصفوفة:

```js
arr.length = 1;
console.log(arr); // [10]
```

---

## 🔹 3. shift()

* حذف أول عنصر:

```js
let arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]
```

---

## 🔹 4. unshift()

* إضافة عنصر في الأول:

```js
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
```

---

## 🔹 5. push()

* إضافة عنصر في الآخر:

```js
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
```

---

## 🔹 6. pop()

* حذف آخر عنصر:

```js
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
```

---

## 🔹 7. Array Methods (Search, Sort, Reverse)

### 🔍 Search

```js
let arr = ["a", "b", "c"];
console.log(arr.indexOf("b")); // 1
console.log(arr.includes("d")); // false
```

### 🔃 sort()

```js
let nums = [30, 5, 100, 2];
nums.sort((a, b) => a - b);
console.log(nums); // [2, 5, 30, 100]
```

### 🔄 reverse()

```js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

---

## 🔹 8. slice() , splice()

### slice(start, end)

* بيرجع نسخة جزئية (من غير ما يعدل الأصلية).

```js
let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
```

### splice(start, deleteCount, ...items)

* بيعدل على الأصلية (إضافة/حذف).

```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99, 100);
console.log(arr); // [1, 99, 100, 4]
```

---

## 🔹 9. concat() & join()

### concat()

```js
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]
```

### join()

```js
let arr = ["Hello", "World"];
console.log(arr.join(" ")); // "Hello World"
```

---

## 🔹 10. Loops with Arrays

### for loop

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### for...of

```js
for (let item of arr) {
  console.log(item);
}
```

### forEach

```js
arr.forEach((val, i) => console.log(i, val));
```

---

## 🔹 11. Label in Loops

* استخدام `label` مع `break` أو `continue`:

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break outer;
    console.log(i, j);
  }
}
```
---