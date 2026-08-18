# PFO1-Cattalin-Landing-Personal

https://pfo-1-cattalin-landing-personal.vercel.app/

[GitHub: NILATTAC](https://github.com/nilattac)

IA utilizadas: 
- Código: Claude (Sonnet 5 - Gratuito) 
    * Experiencia: Desarrollo personal de comando de Autocad (DLL) y debugeado durante aprendizaje.
- Preguntas en general: Gemini (Gratuito)
    * Experiencia: Preguntas generales como puntapie inicial de investigación.
- Generacion de imagenes: DaVinci (Nano Banana - Gratuito)
    * Experiencia: Modificacion de fotografias de edificios y 3d esquematicos para visualizacion de obra terminada por parte de clientes.


Procedimiento de trabajo:
1. Busqué formatos de Portfolios de otras personas.

2. Utilice la Claude para que me suguiera combinaciones de colores y de fuentes con el siguiente prompt:
"Voy a crear una landing de portafolio en HTML y CSS. Actúa como un diseñador UX/UI profesional y confiable. Sugerime 3 paletas de colores modernas (una oscura, una clara y una creativa) y una combinaciones de Google Fonts."

3. Le solicité a Claude el maquetado del html según la consigna:
"Escribí el código HTML5 semántico para mi portafolio. Debe incluir obligatoriamente: Presentación, Habilidades (lista), Contacto (con un formulario funcional que use etiquetas e inputs), Sección Personal y un enlace visible a mi perfil de GitHub. Asegurate que todas las etiquetas tengan el atributo 'alt' vacío para que yo los complete."

4. Le pedí a Claude que desarrollara el CSS con el estilo elegido:
"Ahora actua como un desarrollador Frontend experto. Escribí el archivo CSS para el HTML anterior utilizando la paleta de colores Grafito & Cobre y las Google Fonts "Fraunces" para titulos y "Inter" para el body. Requisitos estrictos: usa Flexbox para la distribución de las secciones, implementá un diseño responsive usando Media Queries (para móviles y escritorio), agrega al menos una transición o animación suave en los botones o enlaces al pasar el mouse (hover) y asegúrate que el diseño sea limpio y creativo."

5. Agregue algo de información, los link de github, algunas imagenes y logos para botones.

6. Googlee como incorporar una imagen de fondo con un fade y lo incorporé la CSS body

7. Modifique el CSS de Personal incorporando una configuracion para h2 igual al de presentacion. Esto lo hice porque sino ponia el primer valor de la grilla al costado del texto y no me gustaba como quedaba esteticamente.

8. Le solicité a Claude que modifique el CSS para incorporar una imagen de fondo solo en la seccion de inicio y que le agregue un degradado:
"Modifica el CSS agrgando una imagen de fondo en la seccion de inicio y agregale un degradado."
Cabe señalar que como fui modificando lineas de código que no le actualizaba a la IA, para estos cambios compartimentados miraba en donde se realizaba el cambio y solo modificaba esas líneas de código, no todo el archivo.

9. Edité la foto para que la mano quedara aproximadamente atras del nombre, tanto en computadora como en celular.

10. Le pregunté a Claude:
"se puede hacer que al hacer click en los botones de habilidad se habra una imagen?"
Me planteo unas modificaciones en el HTML, en el CSS e incorporó un pequeño script.
Modifiqué las habilidades de texto a botones y agregue un script de javascript para hacer las ventanas modales.

11. Creé unas imagenes place holder para estas habilidades y complete todos los alt. Mejoré el texto de "Sobre mi" y de "Mas allá del teclado"

12. Vinculé con Vercel e hice el deploy. Quedando solo cambiar las imagenes placeholder y hacer funcional el form de contacto.

13. Como Claude dejo de funcionar le pregunté a Gemini "como hago para que funcione el boton de contacto: (index.html)"
De las alternativas que me recomendó usar elegí Web3Forms.

14. Me creé una cuenta en Web3Forms, configuré todo con el access key gratuito y un pequeño script.

15. Me dio un error de comunicacion con el servidor que Gemini dice que se da cuando se usa el LiveServer. "CORS (Cross-Origin Resource Sharing)"

16. Hago otro deploy para saber si el formulario está funcionando. Agrego acentos faltantes.

17. Habia un error y lo corrijo con ayuda de Gemini

18. Cambio la imagenes place holder por otras generadas con DaVinci

19. Para probar otros estilos le pedi a claude que genere otros CSS
"Crea otro CSS que el estilo sea 'El señor de los anillos'"
"Crea otro CSS que el estilo sea 'Club Atlético Colón'"
"Crea otro CSS que el estilo sea 'Chocolate'"