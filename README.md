# PerimetrosApp

## Descripción del Proyecto
**PerimetrosApp** es una aplicación desarrollada con Ionic Framework y Angular que permite calcular los perímetros de un círculo y un triángulo de manera sencilla. Diseñada para dispositivos web y móviles, esta aplicación ofrece una interfaz intuitiva para ingresar los datos y obtener los resultados rápidamente.

## Características Principales
- **Círculo:** Permite ingresar el radio para calcular el perímetro utilizando la fórmula:
  \[ Perímetro = 2 × π × radio \]
- **Triángulo:** Permite ingresar las longitudes de los tres lados para calcular el perímetro mediante:
  \[ Perímetro = ladoA + ladoB + ladoC \]
- Interfaz desarrollada con Ionic Components para un diseño moderno y adaptable.

## Tecnologías Utilizadas
- **Ionic Framework** (Angular)
- **Capacitor** para capacidades nativas
- **TypeScript** para la lógica del proyecto
- **HTML & SCSS** para la estructura y estilos

## Estructura del Proyecto
- **HomePage:** Contiene dos secciones:
  1. **Círculo:** Campo de entrada para el radio y botón para calcular el perímetro.
  2. **Triángulo:** Campos de entrada para los tres lados y botón para calcular el perímetro.
- **Cálculos:** Realizados en TypeScript, con validaciones para asegurar que los valores ingresados sean positivos y numéricos.

## Instalación y Ejecución
Sigue los pasos a continuación para ejecutar el proyecto en tu entorno local:

### Requisitos Previos
- Node.js (v16 o superior)
- Ionic CLI instalado globalmente:
  ```bash
  npm install -g @ionic/cli
  ```

### Clonar el Repositorio
```bash
git clone https://github.com/Britoshky/PerimetrosApp
cd PerimetrosApp
```

### Instalar Dependencias
```bash
npm install
```

### Ejecutar la Aplicación en el Navegador
```bash
ionic serve
```

### Compilar para Móviles
- Android:
  ```bash
  ionic capacitor build android
  ```
- iOS:
  ```bash
  ionic capacitor build ios
  ```

## Pantallas
1. **Pantalla Inicial:**
   - Pantalla incio.
3. **Pantalla de Cálculo**
   - Cálculo de perímetro de círculo con campo de entrada para el radio.
   - Cálculo de perímetro de triángulo con campos para los tres lados.
4. **Resultados:**
   - Visualización de los perímetros calculados después de ingresar los datos.

## Autor
**[Héctor Brito Tapia]** - Desarrollador de aplicaciones y estudiante de Ingeniería en Informática

## Licencia
Este proyecto está bajo la licencia MIT - consulta el archivo `LICENSE` para más detalles.

## Enlace al Proyecto
[Repositorio en GitHub](https://github.com/Britoshky/PerimetrosApp)
