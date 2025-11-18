function formatValue(Input: string | number | boolean) {
    if (typeof Input === 'string') {
        return Input.toUpperCase()
    }
    if (typeof Input === 'number') {
        return (Input * 10)
    }
    if (typeof Input === 'boolean') {
        return (!Input)
    }

    const ex: never = Input
    return ex;

}





function getLength(Input: string | unknown[]): number {
    if (typeof Input === 'string') {
        return Input.length
    }
    else if (Array.isArray(Input)) {
        return Input.length
    }


    const ex: never = Input;
    return ex;
}





class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}





function filterByRating(Input: { title: string, rating: number }[]) {
    return Input.filter(item => (item.rating >= 4))
}





function filterActiveUsers(Input: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] {
    return Input.filter(item => (item.isActive === true))
}





interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}

function printBookDetails(Input: Book) {
    console.log(`Title: ${Input.title}, Author: ${Input.author}, Published: ${Input.publishedYear}, Available: ${Input.isAvailable ? "Yes" : "No"}`);
}




function getUniqueValues<T extends string | number>(array1: T[], array2: T[]) {
    const result: T[] = []
    function exists(value: T): boolean {

        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }
    for (let item of array1) {
        if (!exists(item)) {
            result.push(item);
        }
    }
    for (let item of array2) {
        if (!exists(item)) { 
            result.push(item);
        }
    }
    return result;
}







interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(Input: Product[]) {

    return Input.reduce((total, product) => {
        if (product.discount !== undefined && (product.discount < 0 || product.discount > 100)) {
            throw new Error(`Discount for "${product.name}" must be between 0 and 100`);
        }

        const productTotal = product.price * product.quantity;
        const discountedTotal = product.discount ? productTotal * (1 - product.discount / 100) : productTotal;

        return total + discountedTotal
    }, 0)

}