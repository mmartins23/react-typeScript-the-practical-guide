# Adding Type Guards

TypeScript allows you to use type guards to narrow down the type of a variable within a certain block of code. Type guards are conditional statements that check the type of a variable at runtime, allowing you to make decisions based on that type. Let's explore type guards with a commented code example:


```typescript
// Define a union type for roles
type Role = "admin" | "user" | "editor";

// Define types for different roles
interface Admin {
    role: "admin";
    permissions: string[];
}

interface User {
    role: "user";
    username: string;
}

interface Editor {
    role: "editor";
    articles: string[];
}

// Function using custom type guards
function handleRole(role: Role): void {
    if (role === "admin") {
        console.log("Admin actions: manage users, edit permissions");
    } else if (role === "user") {
        console.log("User actions: view content, interact with the platform");
    } else if (role === "editor") {
        console.log("Editor actions: write articles, edit content");
    } else {
        console.log("Unknown role");
    }
}

// Example usage
let admin: Admin = { role: "admin", permissions: ["manageUsers", "editPermissions"] };
let user: User = { role: "user", username: "john_doe" };
let editor: Editor = { role: "editor", articles: ["article1", "article2"] };

handleRole(admin.role);   // Output: Admin actions: manage users, edit permissions
handleRole(user.role);    // Output: User actions: view content, interact with the platform
handleRole(editor.role);  // Output: Editor actions: write articles, edit content
```

### Commented Explanation:

- We define a union type `Role` that represents the possible roles: "admin", "user", and "editor".
- We define three interface types: `Admin`, `User`, and `Editor`, each representing a role with specific properties.
- We create a function `handleRole` that takes a `Role` parameter and performs different actions based on the role using custom type guards.
- Inside the function, we use conditional statements to check the value of the `role` parameter and perform corresponding actions for each role.
- We test the `handleRole` function with examples of each role, demonstrating how type guards allow us to handle different roles appropriately.

Type guards in TypeScript enable us to write more robust and readable code by handling different types of data dynamically at runtime, ensuring type safety and providing clear logic for handling different scenarios.