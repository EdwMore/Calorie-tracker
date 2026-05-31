# Calorie Tracker 🍎🔥

Aplicación web desarrollada con React y TypeScript para registrar alimentos consumidos y actividades físicas, permitiendo llevar un control de calorías consumidas, quemadas y el balance total.

Este proyecto fue creado con fines de aprendizaje para reforzar conceptos fundamentales de React, TypeScript, manejo de estado con `useReducer`, comunicación entre componentes mediante props y operaciones CRUD.

## 🚀 Características

* Registro de alimentos y actividades.
* Cálculo automático de calorías consumidas y quemadas.
* Visualización del balance total de calorías.
* Edición de registros existentes.
* Eliminación de registros.
* Actualización dinámica de la interfaz.
* Gestión centralizada del estado mediante `useReducer`.

## 🛠️ Tecnologías utilizadas

* React
* TypeScript
* Tailwind CSS
* useReducer
* Props Drilling para compartir estado y acciones entre componentes
* CRUD (Create, Read, Update, Delete)

## 🧠 Aprendizajes

Durante el desarrollo de este proyecto se trabajaron los siguientes conceptos:

* Creación de componentes reutilizables en React.
* Tipado de props, estados y acciones utilizando TypeScript.
* Gestión de estados complejos mediante `useReducer`.
* Comunicación entre componentes utilizando props.
* Implementación de operaciones CRUD.
* Manipulación de arreglos y actualización inmutable del estado.
* Diseño responsive con Tailwind CSS.

## ⚙️ Gestión del estado

El estado de la aplicación se administra mediante `useReducer` en un componente principal. Las acciones y los datos son distribuidos a los componentes hijos a través de props, permitiendo mantener una arquitectura simple sin necesidad de implementar soluciones de estado global como Context API, Redux o Zustand.

## 📖 Funcionalidades CRUD

* Crear nuevos alimentos o actividades.
* Visualizar el listado de registros.
* Editar registros existentes.
* Eliminar registros del sistema.

## 🎯 Objetivo del proyecto

El objetivo principal de este proyecto fue practicar el manejo de estados complejos en React, el uso de TypeScript para mejorar la seguridad del código y la implementación de operaciones CRUD en una aplicación real.
