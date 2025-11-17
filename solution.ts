// problem no 1 ===========================

type TFormatValue = number | string | boolean;

const formatValue = (value: TFormatValue): TFormatValue =>{

	if(typeof value === 'string'){
		return value.toUpperCase();
	}else if(typeof value === 'number'){
		return value * 10;
	}else{
		return !value;
	}
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));
// console.log(formatValue(false));


// problem 02 =======================
type TGetLength = string | unknown[];

const getLength = (value: TGetLength): number =>{

	if(typeof value === 'string'){
			return value.length;
	}else if(Array.isArray(value)){
			return value.length;
	}

	return 0;
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));


// problem 03 =============================
class Person{
	name: string;
	age: number;

	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	};

	getDetails(): string {
		return `'Name: ${this.name}, Age: ${this.age}'`;
	}
};

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// problem 04 =======================

type TBooks = {
	title: string;
	rating: number;
};

const filterByRating = (values: TBooks[]): TBooks[] =>{
	return values.filter((value)=> value.rating >= 4);

};

const books: TBooks[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));


// problem 05 =======================
type TUser = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
};


const filterActiveUsers = (values: TUser[]): TUser[] =>{
	return values.filter((value) => value.isActive);
};

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


// problem 06 ========================

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
};

const printBookDetails = (value: Book): void =>{
  
	console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable? 'Yes': 'No'}`);
};

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

//output
// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes


// problem 07 =================================
const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];

  const isExist = (value: number): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!isExist(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isExist(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));


// problem 08 ===================================

type TProduct = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

const calculateTotalPrice = (products: TProduct[]): number => {
  if (products.length === 0) {
    return 0;
  }

  const total = products.reduce((sum, product) => {
    const { price, quantity, discount } = product;

    const totalWithoutDiscount = price * quantity;

    let finalPrice = totalWithoutDiscount;

    if (typeof discount === 'number') {
      const discountAmount = (totalWithoutDiscount * discount) / 100;
      finalPrice = totalWithoutDiscount - discountAmount;
    }

    return sum + finalPrice;
  }, 0);

  return total;
};

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));



