function validatePhoneNumber(phoneNumber) {
    return phoneNumber.length > 0;
}
class Contact {
    constructor(id, name, phoneNumber) {
        if (!validatePhoneNumber(phoneNumber)) {
            throw new Error("Número de teléfono no válido");
        }
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getContactInfo() {
        return "ID: " + this.id + ", Name: " + this.name + ", Phone Number: " + this.phoneNumber;
    }
}
const contacto = new Contact(1, "Juan Perez", "123456789");
console.log(contacto.getContactInfo());
//# sourceMappingURL=ejercicio3.js.map