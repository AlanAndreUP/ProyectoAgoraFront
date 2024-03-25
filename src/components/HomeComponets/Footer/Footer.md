*   Importa los hooks useState y useEffect de la biblioteca de React.
    
    *   useState: Se usa para gestionar el estado de una variable (en este caso la variable activo para establecer el idioma).
        
    *   useEffect: Se usa para realizar efectos secundarios, como detectar cambios en el navegador o ejecutar acciones basadas en dependencias.
        

**Estado y useEffect**

*   **useState:** El hook useState('ES') inicializa la variable de estado activo, que se usará para determinar el idioma actual (Español o Inglés).
    
*   **useEffect:**
    
    *   Se ejecuta después de que el componente se renderiza.
        
    *   Comprueba si la ruta actual de la ventana (window.location.pathname) comienza con '/en'.
        
    *   Actualiza el estado activo a "EN" si la ruta es en inglés, de lo contrario, queda en "ES".
        

*   **handleSetActive(lang: string):** Actualiza el estado activo en función del idioma seleccionado, provocando que el componente se vuelva a renderizar.
    
*   **renderLinkText(text: string):**
    
    *   Toma el texto de un enlace y lo traduce si el idioma actual es 'EN' y la página se muestra en el segmento '/en'. Utiliza una estructura switch para la traducción.