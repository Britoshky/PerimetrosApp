// Clase abstracta FiguraGeometrica
export abstract class FiguraGeometrica {
    constructor(public nombre: string) {}
  
    abstract calcularPerimetro(): number;
  }
  
  // Clase Círculo
  export class Circulo extends FiguraGeometrica {
    constructor(public radio: number) {
      super("Círculo");
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  // Clase Triángulo Escaleno
  export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(
      public ladoA: number,
      public ladoB: number,
      public ladoC: number
    ) {
      super("Triángulo Escaleno");
    }
  
    calcularPerimetro(): number {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  }
  
  // Clase Triángulo Equilátero
export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(public override ladoA: number) { // Se agrega 'override' aquí
      super(ladoA, ladoA, ladoA);
    }
  
    // Sobrescritura explícita de la propiedad 'nombre'
    override nombre: string = "Triángulo Equilátero";
  }
  
  