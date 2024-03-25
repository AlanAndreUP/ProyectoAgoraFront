## Componente NavbarBlog

**Descripción:**
Componente de navegación que despliega una serie de enlaces filtrables para controlar el contenido mostrado.

**Propiedades (Props):**

* **setFilterType:** (type: string | null) => void
    * **Descripción:** Función callback para establecer el tipo de filtro a aplicar a otros componentes en la página.
    * **Tipos aceptados:** string (para tipos específicos) o null (todos los elementos).

 * - Blog: Muestra solo contenido del blog.
 * - Convocatoria: Muestra convocatorias abiertas.
 * - Oferta Laboral: Muestra oportunidades laborales.
 * - Programa: Muestra información general del programa.
 * - Ejecucion: Muestra programas en ejecución.
 * - Ejecutados: Muestra programas ya ejecutados.
 * - Prensa: Muestra noticias y comunicados de prensa.
 * - Todos: Muestra todos los tipos de contenido.

