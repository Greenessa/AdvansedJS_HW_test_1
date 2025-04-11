
export class HealthHero {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.status = 'healthy';
    }
    healthStatusCheck() {
        if (this.health < 50 && this.health >= 15) {
            this.status = 'wounded';
        };
        if (this.health < 15) {
            this.status = 'critical';
        };
        return this.status;
    }
} 

const heroHealth1 = new HealthHero('Петр Первый', 99);
console.log(heroHealth1.healthStatusCheck());
