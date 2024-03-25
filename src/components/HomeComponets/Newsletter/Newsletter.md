*   **Componente Newsletter**
    
*   **Hooks de estado**
    
*   **useState('')**
    

*   : Se utiliza para almacenar los valores de los campos del formulario:
    
*   **useState({})** : Almacena los posibles errores de validación en un objeto.
    
*   **useState(false)** : Controla si el captcha ha sido resuelto.
    
*   **useState(false)** : Controla si el formulario está enviándose.
    
*   **useState(false)** : Controla si el formulario se envío exitosamente.
    
*   **Lógica del componente:**
    
*   **validarCampos:** Función encargada de validar los campos del formulario. Recorre las propiedades del estado de los campos y verifica si alguno está vacío o no cumple con algún formato (correoElectronico).
    
*   **handleSubmit:** Maneja el envío del formulario.
    
    *   Previene la acción por defecto del formulario (e.preventDefault()).
        
    *   Realiza la validación. Si hay errores o el captcha no está resuelto, muestra los errores y termina.
        
    *   Prepara los datos del formulario en un objeto datos.
        
    *   Cambia el estado enviando a true.
        
    *   Ejecuta un fetch para enviar los datos del formulario a la API (process.env.API\_ENDPOINT\_NEWSLETTER! ).
        
    *   Cambia el estado enviado a true.
        
    *   Actualiza el estado enviando a false.
        
*   **HCaptcha:** Integra el componente de hCaptcha, proporcionando una siteKey obtenida por tu cuenta de hCaptcha.
    
*   **Renderizado Condicional**
    
    *   Muestra un formulario con idioma dinámico dependiendo del window.location.pathname
        
    *   Muestra los diferentes campos e incluye validaciones usando los estados previamente definidos.
        
    *   Maneja el estado de envío del formulario (enviando,enviado ) y muestra un botón con el texto apropiado.