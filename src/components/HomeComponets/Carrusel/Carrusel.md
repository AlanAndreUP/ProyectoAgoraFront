**Interfaz de Propiedades**

*   Define un prop llamado folderName de tipo string. Este nombre de carpeta determinará dónde están las imágenes del carrusel.
    

**Componente Carrusel**

*   **useState:** El hook useState establece la variable de estado currentImageIndex para rastrear la imagen mostrada actualmente. Se inicializa en 0.
    
*   **images:** Se crea un array llamado images que contiene dinámicamente los nombres de archivos de las imágenes
    
*   **useEffect:**
    
    *   Se configura un temporizador con setIntervalpara cambiar automáticamente la imagen actual cada 5 segundos.
        
    *   La función de limpieza (return() => clearInterval(interval)) detiene el temporizador cuando el componente se desmonta.
        
*   **changeSlide:** Función para manejar el cambio de imagen cuando se hace clic en los botones. Actualiza el currentImageIndex y usa el operador módulo (%) para asegurarse de que el índice esté dentro del array.
    
*   **leftIndex, rightIndex:** Calcula dinámicamente los índices de imágenes para la izquierda y derecha de la imagen actual.
    
*   **handleImageError:** Función para ocultar imágenes si hay un error de carga.