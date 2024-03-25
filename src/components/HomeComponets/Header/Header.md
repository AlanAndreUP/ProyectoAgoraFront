**Hooks de Estado**

*   **useState(false):** El hook useState se usa para crear la variable de estado isOpen, que controla si el menú de navegación está abierto o cerrado. Se inicializa como false (cerrado).
    
*   **useState("ES"):** Crea la variable de estado activo para controlar el idioma.
    

**useEffect**

*   **useEffect:** Se utiliza para detectar la ruta actual (window.location.pathname) y actualizar el estado activo a "EN" si la ruta es en inglés, o "ES" de lo contrario. Se ejecuta solo una vez al montar el componente.
    

**Funciones**

*   **toggleMenu():** Actualiza el estado isOpen para mostrar u ocultar el menú de navegación en dispositivos pequeños.
    
*   **handleSetActive(lang: string):** Actualiza el estado activo determinando el idioma seleccionado, obligando al componente a re-renderizarse.
    
*   **renderLinkText(text: string):** Función para traducir dinámicamente los textos de los enlaces según el idioma activo y la ruta actual.