class Espada{
    constructor(material, durabilidad, efecto){
        this.dano = 10;
        this.material = material;
        this.info = [];
        this.setMaterial = material;
        this.setDurabilidad = durabilidad;
        this.info.push(this.getDano,durabilidad,efecto);
        console.log(this.info);        
    }
    atacar(){
        let durabilidad = this.getDurabilidad;
        let info = "";
        if(durabilidad<=0 && this.getMaterial!=null){
            this.setMaterial = 'Atacar con la mano.';
            this.info[0] = 1;
            info = `'${this.material}' Daño ${this.info[0]}. 'Arma ha explotado'. Efecto al enemigo: ${this.info[2]}`;
        }else if (durabilidad>0){
            durabilidad-=3;
            info = `'${this.material}' Daño ${this.info[0]}. Durabilidad ${this.getDurabilidad}. Efecto al enemigo: ${this.info[2]}`;
            this.setDurabilidad = durabilidad;
        }else{
            info = `'${this.material}' golpeo con la mano.`;
        }
        return info;
    }
    defender(){
        let durabilidad = this.getDurabilidad;
        let info = "";
        if(durabilidad<=0 && this.getMaterial!=null){
            this.setMaterial = 'Defensa con la mano.';
            this.info[0] = 0;
            info = `'${this.material}' Daño ${this.info[0]}. 'Arma se ha roto'. Efecto al usuario ${this.info[2]}`;
        }else if (durabilidad>0){
            durabilidad-=10;
            info = `'${this.material}' Daño ${this.info[0]}. Durabilidad ${this.info[2]} / ${this.getDurabilidad} Efecto al usuario: ${this.info[2]}`;
            this.setDurabilidad = durabilidad;
        }else{
            info = `'${this.material}' defiendo con escudo.`;
        }
        return info;        
    }
    set setDurabilidad(durabilidad){
        this.durabilidad = durabilidad;
    }
    get getDurabilidad(){
        return this.durabilidad;
    }
    set setDano(Dano){
        this.dano = Dano;
    }
    get getDano(){
        return this.dano;
    }
    set setMaterial(material){
        this.material = material;
        switch (material) {
            case "Madera":
                this.info[0] = (this.getDano+5);
                break;
            case "Piedra":
                this.info[0] = (this.getDano+15);
                break;
            case "Hierro":
                this.info[0] = (this.getDano+25);
                break;
        }
    }
    get getMaterial(){
        return this.material;
    }
}

class EspadaMadera extends Espada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}
class EspadaHierro extends Espada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}
class EspadaPiedra extends Espada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}
const obj1 = new EspadaMadera("Espada de Madera (ATK)",10,"Reduce agilidad.");
const obj2 = new EspadaHierro("Espada de Hierro (ATK)",20,"Envenena.");
const obj3 = new EspadaPiedra("Espada de Piedra (ATK)",80,"Ralentiza.");

for (var i = 0; i < 9; i++) {
    console.log(obj1.atacar());
}

for (var i = 0; i < 9; i++) {
    console.log(obj2.atacar());
}

for (var i = 0; i < 9; i++) {
    console.log(obj3.atacar());
}

const obj4 = new EspadaMadera("Espada de Madera (DEF)",20,"Recupera fuerza.");
const obj5 = new EspadaHierro("Espada de Hierro (DEF)",40,"Recupera salud.");
const obj6 = new EspadaPiedra("Espada de Piedra (DEF)",60,"Incrementa Stamina.");

for (var i = 0; i < 9; i++) {
        console.log(obj4.defender());
}

for (var i = 0; i < 9; i++) {
    console.log(obj5.defender());
}

for (var i = 0; i < 9; i++) {
    console.log(obj6.defender());
}