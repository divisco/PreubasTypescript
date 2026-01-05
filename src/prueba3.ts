// 1. String Enum (Mejor para leer en consola/DB)
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

// 2. Literal Type (Es una unión de strings, no un objeto)
type Action = 'CREATE' | 'EDIT' | 'DELETE' | 'VIEW';

// 3. Interface corregida
interface User {
    username: string;
    role: UserRole;
    permissions: Action[]; // Esto ahora es un array de strings específicos
}

// 4. Función de lógica
const canPerformAction = (user: User, action: Action): boolean => {
    // Usamos includes para ver si la acción solicitada está en su lista
    return user.permissions.includes(action);
}

// --- PRUEBAS ---

const admin: User = {
    username: "Nico_Admin",
    role: UserRole.Admin,
    permissions: ['CREATE', 'EDIT', 'DELETE', 'VIEW']
};

const visitante: User = {
    username: "Pepe_Viewer",
    role: UserRole.Viewer,
    permissions: ['VIEW']
};

// Probamos la lógica
console.log(`¿${admin.username} puede borrar?`, canPerformAction(admin, 'DELETE')); // true
console.log(`¿${visitante.username} puede borrar?`, canPerformAction(visitante, 'DELETE')); // false