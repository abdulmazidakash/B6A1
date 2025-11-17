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


type TGetLength = string | unknown[];

const getLength = (value: TGetLength): number =>{

	if(typeof value === 'string'){
			return value.length;
	}else if(Array.isArray(value)){
			return value.length;
	}

	return 0;
};


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


type TBooks = {
	title: string;
	rating: number;
};

const filterByRating = (values: TBooks[]): TBooks[] =>{
	return values.filter((value)=> value.rating >= 4);

};

type TUser = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
};


const filterActiveUsers = (values: TUser[]): TUser[] =>{
	return values.filter((value) => value.isActive);
};


interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
};

const printBookDetails = (value: Book): void =>{
  
	console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable? 'Yes': 'No'}`);
};


type AllowedValue = string | number;

const getUniqueValues = (arr1: AllowedValue[], arr2: AllowedValue[]): AllowedValue[] => {

  const uniqueValues: AllowedValue[] = [];

  const addIfNotExists = (value: AllowedValue): void => {
    let exists = false;

    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      uniqueValues[uniqueValues.length] = value;
    }
  };

  for (let i = 0; i < arr1.length; i++) {
    addIfNotExists(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    addIfNotExists(arr2[i]);
  }

  return uniqueValues;
};


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




