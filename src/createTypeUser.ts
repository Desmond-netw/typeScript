// creating type user.

type user = {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
    roles: string[]; // array
    contactNumber?: string;
    address: {
        street: string;
        city: string;
        postalcode: number;
    };
    status: "Active" | "inactive" | "suspended";
    lastLogin: Date; // date of last login
};

//create use one

const user1: user = {
    name: "John Smith",
    age: 45,
    email: "enter@computer.com",
    isAdmin: true,
    roles: ["Admin", "Editor"],
    address: {
        street: "123 maain bvld",
        city: " Finland",
        postalcode: 23423,
    },
    status: "Active",
    lastLogin: new Date()
};

const user2: user = {
    name: "Bright Appea",
    age: 54,
    email: "email@home",
    isAdmin: false,
    roles: ["User"],
    address: {
        street: "23SW MAIN",
        city: " Kitee",
        postalcode: 84584,
    },
    status: "inactive",
    lastLogin: new Date("2003-09-21"),
}

// display user info

console.log (user1);
console.log(user2);