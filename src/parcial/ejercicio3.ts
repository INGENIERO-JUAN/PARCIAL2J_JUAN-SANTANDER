interface ContactInfo {
    id: number;
    name: string;
    phoneNumber: string;
}

function validatePhoneNumber(phoneNumber: string): boolean {
    return phoneNumber.length > 0;
}

class Contact implements ContactInfo {
    id: number;
    name: string;
    phoneNumber: string;

    constructor(id: number, name: string, phoneNumber: string) {
        if (!validatePhoneNumber(phoneNumber)) {
            throw new Error("Número de teléfono no válido");
        }
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getContactInfo(): string {
        return "ID: " + this.id + ", Name: " + this.name + ", Phone Number: " + this.phoneNumber;
    }
}

const contacto = new Contact(1, "Juan Perez", "123456789");
console.log(contacto.getContactInfo()); // Imprime toda la información del contacto