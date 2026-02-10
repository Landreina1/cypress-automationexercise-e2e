# Cypress E2E – AutomationExercise

Proyecto de automatización de pruebas **End-to-End (E2E)** con **Cypress** sobre el sitio **AutomationExercise**.

## 🎯 Objetivo
Validar los flujos críticos de usuario mediante pruebas manuales y automatizadas, asegurando el correcto funcionamiento de las funcionalidades principales y facilitando pruebas de regresión.

## 🧪 Alcance de pruebas
Las pruebas cubren los siguientes flujos:
- Registro de usuario
- Login (válido e inválido)
- Navegación y validaciones de interfaz
- Gestión de carrito (agregar y eliminar productos)
- Validaciones adicionales (suscripción, cantidad de productos, páginas informativas)

  ## 🧪 Tipos de pruebas realizadas
- Pruebas funcionales (manuales)
- Pruebas E2E automatizadas
- Pruebas de regresión

  ## 🧠 Enfoque QA
El proyecto fue abordado desde una perspectiva QA integral, combinando análisis funcional, diseño de casos de prueba y automatización con Cypress, priorizando escenarios críticos del negocio y validando flujos positivos y negativos.
  
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

## 📈 Aprendizajes y mejoras futuras

-Mejora en el diseño de pruebas E2E
-Uso de buenas prácticas de automatización
-Integración futura con CI/CD
-Ampliación de cobertura de pruebas

## 👩🏽‍💻 Autor

Leoneidys Andreina – QA Tester



