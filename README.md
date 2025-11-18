<h1>Blog Post 1 : What are some differences between interfaces and types in TypeScript?</h1>

TypeScript মূলত JavaScript এর উপর ভিত্তি করে তৈরি। এটি আমাদের variable, function, এবং object এর জন্য type নির্ধারণের সুযোগ দেয়। TypeScript-এ আমরা মূলত দুইভাবে object বা custom type define করতে পারি:

i.Interface

ii.Type Alias

এদের কাজ প্রায় এক বলেই চলে কিন্তু দাড়াও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

<hr>

১. Interface

Definition: Interface মূলত একটি object এর structure define করার জন্য ব্যবহৃত হয়। এটি class এর সাথেও ব্যবহার করতে পারি।

Extending / Inheritance: Interface সহজেই extend করতে পারি। একাধিক interface একসাথে extend করাও সম্ভব।

Declaration Merging: একই নামে দুইটি interface declare করলে এগুলো automatic merge হয়ে যায়।

Use case: Interface মূলত object বা class structure define করার জন্য ব্যবহৃত হয়।

<hr>

২. Type Alias

Type alias দিয়ে primitive, union, tuple, function বা object সব ধরনের type তৈরি করতে পারি।

Interface এর মতো extend করতে পারি না। তবে intersection (&) operator দিয়ে combine করা যায়।

Declaration Merging সম্ভব না । একই নামের type পুনরায় declare করলে error দেবে।

Type Alias অনেক বেশি flexible । Union type, tuple, function type ইত্যাদি define করতে পারি বা করা যায়।

<hr>

কোনটা কখন ব্যবহার করা উচিত তাই না?

যদি object বা class structure define করতে চাই এবং inheritance বা merging দরকার হয় তাহলে Interface ব্যবহার করতে পারি।

যদি union, tuple, function type বা advanced combination দরকার হয় তাহলে Type Alias ব্যবহার করতে পারি।




<hr>



<h1>Blog Post 2 : What is the use of the keyof keyword in TypeScript?</h1>

keyof keyword TypeScript এ ব্যবহার করা হয় কোনো type বা interface-এর সব property name বের করার জন্য।
মানে, এটা object-এর key গুলোকে নিয়ে একটা union type বানায়।

এটা খুব সহজ একটা Example দেখলেই বোঝা যাবে।

<hr>

Example => ধরো, ঝংকার ভাইয়ার একটা Interface আছে:

interface Jhankar {
    name: string;
    age: number;
    profession: string;
    cseStudent: boolean;
}


keyof operator শুধুমাত্র Type Alias ও Interface এর সাথে কাজ করে।

এখন আমাদের মূল টপিক =>

ধরো, ঝংকার ভাইয়ার একজন বন্ধু আছে চাংকু।
চাংকু ভাইও ঝংকার ভাইয়ের সাথে একই সাবজেক্টে পড়েছে।
তাই তার প্রয়োজনীয় জিনিস (name, age, profession, cseStudent) সবই একই।

এখন কি চাংকু ভাইয়ের জন্য নতুন করে আরেকটা আলাদা type বানাতে হবে?

না, লাগবে না!
কারণ চাংকু ভাইয়ের দরকারি সব property আগেই Jhankar interface এ আছে।

আমরা শুধু =>

type Chanku = keyof Jhankar;


লিখলেই হয়ে গেল!

এখন Chanku টাইপটি হবে:

"name" | "age" | "profession" | "cseStudent"


মানে এটা শুধু key গুলো রাখবে, value না।
ঝংকার ভাইয়ের টাইপ থেকে key বের করে চাংকু ভাইয়ের টাইপ তৈরি!

আর আটাই বাস্তব হা হা হা.....
