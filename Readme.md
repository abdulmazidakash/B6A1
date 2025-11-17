````md
## 🎯 Interview Questions - Blog Task

### 📝 ব্লগ ১: TypeScript এ `interface` আর `type` এর মধ্যে পার্থক্য

---

### ১️⃣ সংজ্ঞা:

**`interface`**  
TypeScript এ `interface` ব্যবহার করা হয় **object-এর structure / shape define করার জন্য** – মানে কোন object-এ কোন property থাকবে, তাদের টাইপ কী হবে সেটার চুক্তি (contract) বানিয়ে দেয়।

```ts
interface User {
  name: string;
  age: number;
}
````

**`type`**
`type` হলো **type alias** – কোনো টাইপ (primitive, union, intersection, object, function, tuple ইত্যাদি) এর জন্য নতুন একটা নাম দেওয়া। এটা শুধু object না, অনেক ধরণের টাইপের জন্য ব্যবহার করা যায়।

```ts
type User = {
  name: string;
  age: number;
};
```

---

### ২️⃣ মূল পয়েন্টগুলো:

#### ✅ মিল:

* দুটো দিয়েই **object structure** define করা যায়
* দুটোই **type checking** এর জন্য ব্যবহার হয়
* দুটোই IntelliSense / auto-complete-এ সাহায্য করে

#### ✅ পার্থক্য:

* `interface` → মূলত **object / class structure** এর জন্য
* `type` → **সব ধরনের টাইপের জন্য** (primitive, union, intersection, tuple, ইত্যাদি)
* `interface` → **extend** / **merge** করা যায়
* `type` → একবার declare করলে **rewrite / re-open** করা যায় না

---

### ৩️⃣ উদাহরণ:

#### 🔹 Example 1: Interface দিয়ে object type

```ts
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: 'Akash',
  age: 24,
};
```

#### 🔹 Example 2: Type দিয়ে object type

```ts
type User = {
  name: string;
  age: number;
};

const user2: User = {
  name: 'Rakib',
  age: 28,
};
```

#### 🔹 Example 3: Type দিয়ে union / primitive handle করা যায়

```ts
type ID = string | number;

let userId: ID;

userId = 101;
userId = 'user-101';
```

#### 🔹 Example 4: Interface extend করা

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}

const student: Student = {
  name: 'Rafi',
  roll: 5,
};
```

#### 🔹 Example 5: Type দিয়ে intersection করা

```ts
type Person = {
  name: string;
};

type Student = Person & {
  roll: number;
};

const student2: Student = {
  name: 'Sami',
  roll: 10,
};
```

---

### ৪️⃣  `interface` vs `type` – পার্থক্য এক নজরে

| বিষয়                     | `interface`                              | `type`                                              |
| ------------------------ | ---------------------------------------- | --------------------------------------------------- |
| Basic উদ্দেশ্য           | Object / Class-এর structure define       | যেকোনো টাইপের alias: object, union, tuple, ইত্যাদি  |
| Object define করা        | করা যায়                                  | করা যায়                                             |
| Union type               | সরাসরি কমন না                            | খুব সহজে করা যায় (`type A = B \| C`)                |
| Intersection type        | সাধারণত কম ব্যবহার                       | খুব কমন (`type A = B & C`)                          |
| Extend / Inherit         | `extends` দিয়ে সহজে                      | `&` (intersection) ব্যবহার করে                      |
| Re-open (add new fields) | একই নামে interface আবার লিখে যোগ করা যায় | সম্ভব না, একবার declare করলে নতুন করে বাড়ানো যায় না |
| Class-এর সাথে কাজ        | বেশি natural (implements)                | use করা যায়, তবে interface বেশি ব্যবহৃত হয়          |
| Flexibility (non-object) | object-centric                           | বেশি flexible (primitive, union, tuple সবই support) |

---

### ৫️⃣ ছোট রিক্যাপ:

* **সাধারণত object structure → `interface` / `type` যেকোনোটা ব্যবহার হয়**
* **Union, Intersection, Primitive alias → `type` বেশি ব্যবহার হয়**
* **Class design, বড় সিস্টেম, contract style design → `interface` বেশি common**

---

---

### 📝 ব্লগ ২: Union Type এবং Intersection Type – উদাহরণসহ ব্যাখ্যা

---

### ১️⃣ সংজ্ঞা:

#### 🔹 Union Type (`|`)

**Union type** মানে:
একটা ভেরিয়েবল বা প্যারামিটার **একাধিক টাইপের** যে কোনো একটাকে নিতে পারবে।

> “এই ভেরিয়েবল হয় number হবে, নয়তো string হবে – দুটো একসাথে না, যেকোনো একটা।”

```ts
type ID = string | number;
```

এখানে `ID` হচ্ছে একটা union type → string **অথবা** number.

---

#### 🔹 Intersection Type (`&`)

**Intersection type** মানে:
দুই বা ততোধিক টাইপকে **merge করে** এমন একটা টাইপ বানানো, যেখানে **সবগুলো টাইপের property একসাথে থাকতে হবে**।

> “Person আর Employee – দুইটার সব field মিলিয়ে একটা নতুন টাইপ বানালাম।”

```ts
type Person = { name: string };
type Employee = { employeeId: number };

type EmployeePerson = Person & Employee;
```

এখানে `EmployeePerson`-এর মধ্যে `name` এবং `employeeId` – দুটোই লাগবে।

---

### ২️⃣ Union Type – উদাহরণ:

#### Example 1: Number অথবা String ID

```ts
type ID = number | string;

const printId = (id: ID) => {
  console.log('Your ID is:', id);
};

printId(101);
printId('user-101');
```

#### Example 2: Function parameter – string বা number

```ts
type InputValue = string | number;

const formatValue = (value: InputValue) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  return value * 10;
};

// formatValue('hello') -> 'HELLO'
// formatValue(5)       -> 50
```

---

### ৩️⃣ Intersection Type – উদাহরণ:

ধরি, একজন user একই সাথে **Person** এবং **Admin**:

```ts
type Person = {
  name: string;
  email: string;
};

type Admin = {
  role: 'admin';
  permissionLevel: number;
};

type AdminUser = Person & Admin;

const adminUser: AdminUser = {
  name: 'Akash',
  email: 'akash@example.com',
  role: 'admin',
  permissionLevel: 5,
};
```

এখানে `AdminUser`-এর মধ্যে **Person** এবং **Admin** – দুইটাই মিলে গেছে।

---

### ৪️⃣ Realistic Example: Union + Intersection একসাথে ব্যবহার

ধরি, তোমার সিস্টেমে কিছু user আছে:

* কিছু **Basic User**
* কিছু **Admin User**
* কিছু **Guest** user

```ts
type BasicUser = {
  name: string;
  email: string;
};

type AdminInfo = {
  role: 'admin';
  permissions: string[];
};

type AdminUser = BasicUser & AdminInfo; // Intersection

type GuestUser = {
  name: string;
};

type AnyUser = AdminUser | BasicUser | GuestUser; // Union

const printUserInfo = (user: AnyUser) => {
  console.log('Name:', user.name);

  if ('email' in user) {
    console.log('Email:', (user as BasicUser).email);
  }

  if ('role' in user) {
    console.log('Role:', (user as AdminUser).role);
    console.log('Permissions:', (user as AdminUser).permissions.join(', '));
  }
};
```

এখানে:

* `AdminUser` = `BasicUser` & `AdminInfo` → **intersection**
* `AnyUser` = `AdminUser` | `BasicUser` | `GuestUser` → **union**

---

### ৫️⃣ Union vs Intersection – এ পার্থক্য:

| বিষয়               | Union (`A \| B`)                          | Intersection (`A & B`)                 |
| ------------------ | ----------------------------------------- | -------------------------------------- |
| অর্থ               | A অথবা B (যেকোনো একটা)                    | A এবং B – দুইটার সব property একসাথে    |
| উদাহরণ             | `string \| number`                        | `{ name } & { age }` → `{ name, age }` |
| কোথায় বেশি ব্যবহার | Flexible input, multiple টাইপ allow করতে  | Multiple type এর feature merge করতে    |
| Field requirement  | যেকোনো টাইপের field subset থাকতে পারে     | সব টাইপের সব field থাকতে হবে           |
| Real-life analogy  | “Visa **বা** Passport যে কোনো একটায় চলবে” | “Visa **আর** Passport – দুইটাই লাগবে”  |

---

### ৬️⃣ ছোট রিক্যাপ:

* **Union (`|`)** 👉 choice: “either this or that”

  * যেমন: `string | number`
* **Intersection (`&`)** 👉 combination: “this and that together”

  * যেমন: `{ name } & { age }` → object-এ name + age দুটোই থাকবে


