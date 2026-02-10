# Cypress E2E – AutomationExercise

Proyecto de automatización de pruebas **End-to-End (E2E)** con **Cypress** sobre el sitio **AutomationExercise**.

## 🎯 Objetivo
Realizar una revisión completa del sitio [https://automationexercise.com](https://automationexercise.com/), evaluando sus funcionalidades críticas desde el enfoque de calidad.
El objetivo fue validar el correcto funcionamiento del e-commerce a través de pruebas automatizadas end-to-end con Cypress, enfocándose en los flujos de registro, login, pagina principa y carrito de compras.

## 🧪 Alcance de pruebas
El alcance de las pruebas abarcó funcionalidades críticas del sitio:
- Registro de nuevos usuarios
- Login válido e inválido
- Navegación por productos
- Visualización de detalles de producto
- Búsqueda de productos
- Agregado de productos al carrito
- Modificación y verificación de cantidades (en productos)
- Eliminación de productos del carrito
- Suscripción desde el footer
- Acceso a la página de Test Cases

  ## 🧪 Tipos de pruebas realizadas
- Pruebas funcionales
- Pruebas de regresión
- Pruebas E2E

  ## 🧠 Estrategia de testing
Las pruebas fueron diseñadas priorizando los flujos más críticos del negocio, validando escenarios positivos y negativos, y asegurando estabilidad ante cambios futuros mediante regresión automatizada.
  
## 🛠️ Tecnologías y herramientas
- Cypress
- JavaScript (ES6+)
- Node.js / npm
- Mochawesome (reportes)
- GitHub

## 📁 Estructura del proyecto
- `cypress/e2e/` → specs de pruebas automatizadas
- `cypress/fixtures/` → datos de prueba
- `cypress/support/` → comandos y configuraciones
- `cypress.config.js` → configuración general de Cypress

## ✅ Casos de prueba automatizados (resumen)
- Registro exitoso de usuario
- Login exitoso
- Login inválido
- Agregar productos al carrito
- Eliminar productos del carrito

## 📊 Reportes de pruebas
Las ejecuciones generan reportes automáticos en formato **HTML** utilizando **Mochawesome**, permitiendo visualizar:
- Casos ejecutados.

## 📚 Documentación completa
La documentación funcional y QA detallada del proyecto (plan de pruebas, historias de usuario, casos de prueba y reporte de defectos) se encuentra en Notion:

https://neon-trust-754.notion.site/Proyecto-QA-2-Cypress-Proyecto-de-Automatizaci-n-E2E-sobre-AutomationExercise-23187c98b8c381fa93caff5b8bdc1716

## ▶️ Cómo ejecutar el proyecto
### Instalar dependencias
-npm install
### Ejecutar Cypress Modo UI
-npx cypress open
### Modo headless (ideal para reportes)
- npx cypress run
### Instalar Mochawesome (reportes)
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
### 1) Clonar el repositorio
git clone https://github.com/Landreina1/cypress-automationexercise-e2e.git
cd cypress-automationexercise-e2e

## 🧠 Aprendizajes obtenidos

- Comprensión del flujo completo de un e-commerce desde la perspectiva del usuario final
- Uso de Cypress para automatizar pruebas end-to-end de forma estructurada
- Importancia de seleccionar selectores estables para mantener los tests
- Diferencias entre validaciones en formularios, detalles de producto y carrito
- Mejora en la organización de pruebas por funcionalidad
- Aplicación de criterios de aceptación y salida en un proyecto real





