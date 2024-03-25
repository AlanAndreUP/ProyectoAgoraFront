*   **import { useMediaQuery } from 'react-responsive';**
    
    *   Importa el hook useMediaQuery de la biblioteca react-responsive. Este hook sirve para detectar características del dispositivo, como el tamaño de pantalla, y adaptar el comportamiento del componente.
        

**Interfaz del Componente**

*   Define la estructura de las propiedades (props) que el componente Image espera recibir:
    
    *   src: Puede ser una cadena de texto (ruta a una sola imagen) o un array de cadenas de texto (varias imágenes).
        
    *   alt: Texto alternativo para la imagen.
        
    *   className: Clases CSS adicionales opcionales.
        
    *   buttonText: Texto opcional para mostrar en un botón.
        

**Hooks de Estado**

*   **useState(0):** Crea la variable de estado currentSlide para rastrear la imagen mostrada actualmente en el carrusel. Se inicia en 0 (primera imagen).
    
*   **useState(0):** Crea la variable de estado initialX para detectar movimientos del mouse y controlar el carrusel en dispositivos táctiles.
    

**useMediaQuery**

*   **isSmallScreen:** La variable isSmallScreen se obtiene con el hook useMediaQuery({ maxWidth: 768 }). Será true en pantallas de máximo 768 píxeles de ancho (consideradas pantallas pequeñas).
    

**Lógica del componente**

1.  **Tipo de src:** Si src es una cadena (una imagen), se guarda en un array images para manejarlo uniformemente. Si ya es un array, se asigna directamente.
    
2.  **Manejadores de Eventos:**
    
    *   handleMouseMove: Se activa al mover el mouse sobre la imagen. Calcula si el movimiento es suficiente para cambiar de imagen.
        
    *   handleMouseDown: Se activa al hacer clic sobre la imagen. Prepara la variable initialX para la lógica de arrastre o swipe.
        
3.  **Renderizado condicional:**
    
    *   \*\*Pantallas pequeñas (isSmallScreen = true): \*\* Muestra una sola imagen y habilita la interacción de desplazamiento a través de arrastre o swipe.
        
    *   **Pantallas grandes (isSmallScreen = false):** Muestra todas las imágenes como un carrusel, y utiliza una clase 'active' para destacar la actual.