# 🎬 Manual de usuario de Jimeng Seedance 2.0 (Nueva experiencia de creación multimodal)

Todavía recuerdo que desde el día en que sólo podíamos "contar historias" con texto y primeros/últimos cuadros, queríamos hacer un modelo de video que realmente entendiera tus expresiones. ¡Hoy realmente llegó!

Jimeng Seedance 2.0 ahora admite cuatro modos de entrada modales: imagen, video, audio y texto, con expresiones más ricas y generación más controlable.

Puedes usar una imagen para establecer el estilo de la imagen, usar un video para especificar los movimientos del personaje y los cambios de lente, y luego usar unos segundos de audio para resaltar el ritmo y la atmósfera... con palabras rápidas, el proceso creativo se vuelve más natural, más eficiente y más parecido a un verdadero "director".

En esta actualización, las "capacidades de referencia" son lo más destacado:
- 📷 Las imágenes de referencia pueden restaurar con precisión la composición de la imagen y los detalles de los personajes
- 🎥 Los videos de referencia apoyan la reproducción del lenguaje de la lente, ritmos de acción complejos y efectos especiales creativos.
- ⏱ El video admite una extensión y conexión fluidas y puede generar imágenes continuas según las indicaciones del usuario. No sólo generación, sino también "seguir disparando"
- ✂️ Las capacidades de edición se mejoran simultáneamente, lo que admite el reemplazo de roles, la eliminación y la adición de videos existentes.

Sabemos que la creación de videos no se trata sólo de “generación”, sino también de control de la expresión. 2.0 no es sólo multimodal, sino también una forma de creación verdaderamente controlable.

Seedance 2.0, la creación multimodal, comienza aquí. Imagínelo con valentía y déjele el resto a él.

## Vista previa de parámetros

| Dimensiones del núcleo | Semilla 2.0 |
| --- | --- |
| Entrada y formato de imagen: jpeg, png, webp, bmp, tiff, gif | ≤ 9 imágenes <br/> Tamaño: menos de 30 MB |
| Entrada y formato de vídeo: mp4, mov | ≤ 3, duración total [2,15]s <br/> Tamaño: menos de 50 MB<br/> Rango total de píxeles del vídeo: [409600 (640×640,480p), 927408 (834×1112,720p)] |
| Entrada y formato de audio: mp3, wav | ≤ 3, duración total no superior a 15 s<br/> Tamaño: menos de 15 MB |
| Entrada de texto | lenguaje natural |
| tiempo de generacion | ≤ 15s, puedes elegir libremente entre 4 y 15s |
| Salida de sonido | Viene con efectos de sonido/banda sonora. |
| Límite de interacción: el número máximo total de entradas mixtas admitidas actualmente es de 12 archivos. Se recomienda dar prioridad a la carga de materiales que tengan el mayor impacto en la imagen o el ritmo, y asignar razonablemente la cantidad de archivos en diferentes modos. |

## ⚠️Recordatorio: instrucciones para cargar materiales faciales realistas
Debido a los requisitos de cumplimiento de la plataforma, actualmente no se admite la carga de materiales que contengan caras reales realistas (no se permiten imágenes ni videos). Para proteger los derechos del usuario y la seguridad de generación, el sistema bloqueará automáticamente dichos materiales y no se generará contenido de video después de cargarlo.
Esto significa que si subes una foto de una persona real (especialmente una cara claramente identificable), el modelo no podrá manejar la generación de correspondencia.
Entendemos que esto puede traer algunas limitaciones, pero esta medida es para garantizar la seguridad del contenido y el funcionamiento de la plataforma. ¡Gracias a todos por su comprensión y cooperación! Si hay alguna actualización en el futuro, la actualizaremos en el documento a tiempo. Gracias de nuevo por su comprensión ~

# Las habilidades básicas se han mejorado significativamente: ¡más estables, más fluidas y más reales!

No sólo es multimodal, Seedance 2.0 se ha mejorado significativamente en el nivel básico. Las leyes físicas son más razonables, la ejecución de la acción es más natural y fluida, la comprensión de las órdenes es más precisa y el estilo permanece más estable. No solo puede completar de manera estable acciones complejas, movimientos continuos y otras tareas de generación difíciles, sino que también hace que el efecto general del video sea más realista y fluido. ¡Es una evolución integral de las capacidades subyacentes!


## Caso 1

### Aporte

#### 📝 Aviso
```
La chica estaba secando su ropa con elegancia. Después de secarse, sacó otro trozo del cubo y sacudió la ropa vigorosamente.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-1.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-1.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2

### Aporte

#### 📝 Aviso
```
El personaje del cuadro tiene una expresión de culpa. Mira a izquierda y derecha y mira fuera del marco. Rápidamente sale del cuadro para tomar la Coca-Cola y toma un sorbo. Luego muestra una expresión de satisfacción. En ese momento se escuchan pasos y el personaje del cuadro rápidamente devuelve la Coca-Cola. En ese momento, un vaquero occidental toma la Coca-Cola del vaso y se aleja. Finalmente, la cámara avanza y la imagen cambia lentamente a un fondo negro puro con sólo la lata de Coca-Cola iluminada por la luz superior. En la parte inferior de la imagen aparecen subtítulos artísticos y una narración: "¡Yikou Cola, debes probarlo!"
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3

### Aporte

#### 📝 Aviso
```
La cámara se aleja ligeramente (revelando una vista panorámica de la calle) y sigue a la heroína. El viento sopla la falda de la heroína. La heroína camina por las calles del Londres del siglo XIX. La heroína camina por la calle de la derecha y llega una locomotora de vapor. Pasa rápidamente junto a la heroína. El viento levanta la falda de la heroína. La heroína parece sorprendida y rápidamente se cubre la falda con las manos. Los efectos de sonido de fondo son el sonido de caminar, multitudes, automóviles, etc.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4

### Aporte

#### 📝 Aviso
```
La cámara sigue al hombre de negro mientras huye rápidamente, seguido por un grupo de personas que lo persiguen. La cámara cambia al seguimiento lateral. El personaje entra en pánico y derriba un puesto de frutas al borde de la carretera, se levanta y sigue huyendo. La multitud hace sonidos de pánico.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/1-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

# Actualización integral multimodal: ¡la creación de videos ingresa a la era de la "combinación libre"!

## Introducción multimodal a Seedance 2.0

- Admite la carga de texto, imágenes, videos y audios. Estos materiales pueden utilizarse como objetos u objetos de referencia. Puedes consultar los movimientos, efectos especiales, formas, movimientos de cámara, personajes, escenas y sonidos de cualquier contenido. Siempre que las palabras clave estén escritas con claridad, el modelo podrá entenderlas.
- Seedance 2.0 = capacidad de referencia multimodal (puede referirse a todo) + fuerte generación creativa + respuesta de comando precisa (gran comprensión)
- Simplemente use lenguaje natural para describir las imágenes y acciones que desee. Deja claro si se trata de una referencia o una edición. Cuando hay muchos materiales, se recomienda verificar si cada objeto @ está claramente marcado y no confundir imágenes, videos y personajes.

## Uso especial (sin límite, solo como referencia):
- ¿Hay una imagen del primer/último fotograma? ¿Aún quieres consultar la acción del vídeo?
→ Escriba claramente en el mensaje, como por ejemplo: "@Imagen 1 es el primer fotograma, consulte la acción de lucha de @Video 1".
- ¿Quieres ampliar un vídeo existente?
→ Describe el tiempo de extensión, como "Extender @Video 1 por 5 segundos". Nota: La duración generada seleccionada en este momento debe ser la duración de la "parte nueva" (por ejemplo, si se extiende en 5 segundos, la duración generada también debe seleccionarse como 5 segundos.
- ¿Quieres fusionar varios videos?
→ Explique la lógica de síntesis en la palabra clave, como por ejemplo: "Quiero agregar una escena entre @ video1 y @ video2, el contenido es xxx".
- ¿Sin material de audio? Puedes consultar directamente el sonido en el vídeo.
- ¿Quieres generar movimiento continuo?
→ Puedes agregar una descripción de continuidad en las palabras clave, como por ejemplo: "El personaje pasa directamente de saltar a rodar, manteniendo los movimientos coherentes y suaves" @Figura 1 @ Figura 2 @ Figura 3...

## ¡Esos problemas de vídeo que siempre han sido difíciles de resolver ahora realmente pueden resolverse!
Al hacer videos, siempre encontrarás algunos aspectos problemáticos: por ejemplo, la cara cambia, los movimientos no son los mismos, el video se extiende de manera poco natural y todo el ritmo cambia cuando lo cambias... Esta vez la multimodalidad puede resolver estos "viejos y difíciles" problemas de una sola vez. Estos son los casos de uso específicos👇

### Mejora integral de la coherencia
Es posible que te hayas encontrado con estos problemas: los personajes de la imagen se ven diferentes de adelante hacia atrás, los detalles del producto se pierden, el texto pequeño está borroso, las escenas saltan, los estilos de lentes no se pueden unificar... Estos problemas comunes de coherencia en la creación ahora están en 2.0
se puede solucionar. Desde rostros hasta ropa y detalles de fuentes, la coherencia general es más estable y precisa.

## Caso 1
### Aporte

#### 📝 Aviso
```
Hombre@Imagen 1 Después de salir del trabajo, caminó cansado por el pasillo, su paso disminuyó y finalmente se detuvo en la puerta de su casa. Un primer plano de su rostro. El hombre respiró hondo, ajustó sus emociones, dejó de lado las negativas y se relajó. Luego miró a través del primer plano para encontrar la llave e insertó la cerradura de la puerta. Después de entrar a la casa, su pequeña hija y un perro mascota corrieron felices para recibir un abrazo. La habitación era muy cálida y toda la conversación fue natural.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-1.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-1-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
Reemplaza a las chicas del @Video 1 con actrices de ópera. La escena está en un hermoso escenario. Consulte los movimientos de la cámara y los efectos de transición de @Video 1 y use la lente para igualar los movimientos de los personajes para crear la máxima belleza escénica y mejorar el impacto visual.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-2-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
Consulte todas las transiciones y movimientos de cámara en @Video 1, un plano hasta el final. La imagen comienza con una partida de ajedrez. La cámara se mueve hacia la izquierda para mostrar la grava amarilla en el suelo. La cámara se acerca a una playa. Hay huellas en la playa. Una chica vestida de civil blanca se aleja poco a poco en la playa. La cámara pasa a una toma cenital en el aire. El agua del mar se está lavando (no deben mostrarse caracteres). Transición de gradiente perfecta. Las olas lavadas se convierten en cortinas ondeantes. La cámara se aleja para mostrar un primer plano del rostro de la niña. Un tiro hasta el final.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
Pantalla de 0 a 2 segundos: corte rápido de cuatro fotogramas, cuatro lazos en rojo, rosa, morado y estampado de leopardo congelados en secuencia, con un primer plano del brillo satinado y la palabra de la marca "chéri". Voz en off "¡Crea una belleza infinita con las cintas magnéticas Chéri!"
3-6 segundos: primer plano de la hebilla magnética plateada que hace clic y luego se separa suavemente, mostrando la textura sedosa y la comodidad. Voz en off "¡Ciérralo en sólo 1 segundo y consigue tu mejor estilo!"
7-12 segundos de pantalla: cambie rápidamente la escena de uso: el estilo burdeos está abrochado al cuello del abrigo, brindando una atmósfera de viaje total; el estilo rosa está atado a una cola de caballo y la dulce niña está en la calle; el estilo morado está atado a la correa del bolso, que es de nicho y de alta gama; El estilo con estampado de leopardo cuelga del cuello del traje y la chica sexy está llena de aura. Voz en off "코트, 가방, 헤어 액세서리까지, 다재다능하고 개성 넘치는 스타일을 완성하세요!"
Pantalla de 13 a 15 segundos: se muestran cuatro tipos de lazos uno al lado del otro, con la marca “chéri, ¡brindándote belleza instantánea!”
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-1.png" width="600">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-4-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 5
### Aporte

#### 📝 Aviso
```
Realice una exhibición de fotografía comercial del bolso desde @Imagen 2. El costado del bolso se refiere a @Imagen 1 y el material de la superficie del bolso se refiere a @Imagen 3. Se requiere que se muestren todos los detalles del bolso y que el sonido de fondo sea magnífico.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-3.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-5-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 6
### Aporte

#### 📝 Aviso
```
Tome @Imagen 1 como el primer cuadro de la imagen, perspectiva en primera persona, consulte el efecto de movimiento de la cámara de @Video 1, la escena de arriba se refiere a @Imagen 2, la escena de la izquierda se refiere a @Imagen 3 y la escena de la derecha se refiere a @Imagen 4.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-5.gif" alt="1" width="400" height="auto">

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-3.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/2-6-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-6-6.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Movimientos de cámara muy difíciles/controlables y reproducción precisa de los movimientos.
En el pasado, si quería que el modelo imitara el movimiento, el movimiento de la cámara o los movimientos complejos de la película, tenía que escribir un montón de indicaciones detalladas o simplemente no podía hacerlo. Pero ahora sólo necesitas subir un vídeo de referencia y listo.

## Caso 1
### Aporte

#### 📝 Aviso
```
Consulte la imagen del hombre en @Imagen 1. Está en el ascensor en @Imagen 2. Consulte completamente todos los efectos de cámara y expresiones faciales del protagonista en @Video 1. Cuando el protagonista está asustado, Hitchcock hace zoom y luego varias tomas envolventes muestran la perspectiva dentro del ascensor. La puerta del ascensor se abre, sigue la cámara fuera del ascensor. Para ver la escena fuera del ascensor, consulte la @Imagen 3. El hombre mira a su alrededor. Consulta el @Video 1 para usar un brazo robótico para seguir la línea de visión del personaje desde múltiples ángulos.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-4.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-1-5.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
Haciendo referencia a la imagen del hombre en @Imagen 1, se encuentra en el pasillo de @Imagen 2, refiriéndose completamente a todos los efectos de cámara del @Video 1, así como a las expresiones faciales del protagonista. La cámara sigue al protagonista corriendo alrededor de la esquina de @Imagen 2, y luego en el pasillo de @Imagen 3, la cámara sigue la perspectiva desde atrás y rodea el frente del protagonista a través de un ángulo de visión bajo; luego, la cámara gira hacia la derecha en un giro de 90 grados para disparar en la intersección bifurcada en @Imagen 4, se detiene repentinamente, gira hacia la derecha 180 grados y dispara a la cara del personaje principal: el personaje principal está jadeando, la cámara sigue la perspectiva del personaje principal y mira a su alrededor, consulte el rápido giro hacia la izquierda y hacia la derecha del @Video 1 para mostrar la escena, luego amplía la escena en la @Imagen 5 y continúa siguiendo la vista lateral del personaje principal corriendo.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-5.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-6.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-2-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-2-7.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
@Imagen 1 utiliza una tableta como tema principal. Consulte @Video 1 para ver el movimiento de la cámara. Acérquese a un primer plano de la pantalla. Después de girar la lente, la tableta se invierte para mostrar la imagen completa. El flujo de datos en la pantalla cambia constantemente y el entorno circundante se convierte gradualmente en un espacio de datos de estilo ciencia ficción.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-3-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
La actriz en @Imagen 1 actúa como tema, refiriéndose al método de movimiento de cámara de @Video 1 para realizar movimientos rítmicos de empujar, tirar y girar. Los movimientos de la actriz también hacen referencia a los movimientos de baile de la mujer del @Video 1, actuando enérgicamente en el escenario.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-4-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 5
### Aporte

#### 📝 Aviso
```
Consulte @Imagen 1 @Imagen 2 para el personaje de lanza, @Imagen 3 @Imagen 4 para el personaje de espada doble, imite los movimientos de @Video 1 y luche en el bosque de hojas de arce de @Imagen 5
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-5.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-6.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-5-7.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-5-7.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 6
### Aporte

#### 📝 Aviso
```
En referencia a los movimientos de los personajes en el Video 1 y el lenguaje de la lente circundante del Video 2, se generó una escena de pelea entre el Personaje 1 y el Personaje 2. La pelea tuvo lugar en la noche estrellada. Durante la pelea se levantó polvo blanco. La escena de la pelea era muy hermosa y el ambiente muy tenso.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-3.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-4.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-6-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-6-5.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 7
### Aporte

#### 📝 Aviso
```
Consulte el movimiento de la cámara y el ritmo de cambio de pantalla en el Video 1 y reproduzca el superdeportivo rojo en la Imagen 1.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/3-7-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/3-7-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Plantillas creativas/Reproducción precisa de efectos especiales complejos.
No sólo puede crear imágenes y escribir historias, Seedance 2.0 también admite la "imitación": transiciones creativas, comerciales, clips de películas y ediciones complejas. Siempre que tenga imágenes o vídeos de referencia, el modelo puede identificar el ritmo de la acción, el lenguaje de la lente y la estructura visual, y reproducirlos con precisión. No importa si no comprende la terminología profesional. Escriba claramente las partes a las que desea hacer referencia, como "Consulte el ritmo y el movimiento de la cámara de @ Video1, el modelado de personajes de @ Imagen 1", y el modelo podrá generar una versión que le pertenezca con alta calidad. ¡Sé valiente y pruébalo! it can really do it

## Caso 1
### Aporte

#### 📝 Aviso
```
Reemplace los personajes en @Video 1 con @Picture 1, @Picture 1 es el primer fotograma, el personaje se pone gafas virtuales de ciencia ficción, consulte los movimientos de la cámara de @Video 1 y la lente envolvente de primer plano, desde la perspectiva de tercera persona hasta la perspectiva subjetiva del personaje, se coloca las gafas virtuales de IA y llega al universo azul profundo de @Picture 2, varias naves espaciales aparecieron y se alejaron. La cámara siguió a la nave espacial hasta el mundo de píxeles de @Imagen 3. La cámara voló sobre el mundo del bosque montañoso de píxeles a baja altura y aparecieron las formas de crecimiento de los árboles en su interior. Luego disparó desde un ángulo hacia arriba y rápidamente se dirigió al planeta de textura verde claro de @Imagen 4. La cámara se movió y pasó sobre la superficie del planeta.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-4.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-5.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-1-6.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
Consulte los rasgos faciales del modelo en la primera imagen. Las modelos usan la ropa de las imágenes de referencia 2 a 6 y se acercan a la cámara, haciendo looks traviesos, fríos, lindos, sorprendidos y geniales. Cada look lleva prendas diferentes. Cada vez que se cambie, la imagen se cortará. Consulte el efecto de lente ojo de pez y el efecto de doble parpadeo en el vídeo. Consulte el efecto del @Video 1.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-6.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-7.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-2-8.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
Consulte la creatividad publicitaria del video, utilice las imágenes de chaquetas de plumas proporcionadas, consulte las imágenes de plumas de ganso y de cisnes y combínelas con las siguientes palabras publicitarias: "Esto es plumón de ganso, este es un cisne cálido, esta es una chaqueta de plumas de terciopelo polar que se puede usar. Use ropa abrigada en el Año Nuevo y viva una vida cálida". Generar un nuevo vídeo publicitario de plumíferos.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-4.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-3-5.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
En estilo de tinta en blanco y negro, los personajes de @Imagen 1 hacen referencia a los efectos especiales y movimientos en @Video 1 para representar un episodio de Tai Chi Kung Fu con tinta.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-4-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 5
### Aporte

#### 📝 Aviso
```
Reemplace el personaje en el primer cuadro de @Video 1 con @Imagen 1, completamente @ consulte los efectos especiales y movimientos del Video 1. Los pétalos de rosa crecen de los estambres en la mano y las grietas se extienden hacia arriba en la cara, cubriendo gradualmente por la maleza. El personaje se cepilla la cara con ambas manos y las malas hierbas se convierten en partículas y se disipan, y finalmente adquieren la apariencia de @Imagen 2.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-5-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-5-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 6
### Aporte

#### 📝 Aviso
```
Comenzando desde el techo de @Imagen 1, consulte el efecto de ruptura de rompecabezas de @Video 1 para la transición, reemplace la fuente "BELIEVE" con "Seedance", consulte la fuente de @Imagen 2
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-6-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-6-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 7
### Aporte

#### 📝 Aviso
```
Comienza con una pantalla negra. Consulte los efectos de partículas y materiales del Video 1. El material de grava dorada flota desde el lado izquierdo de la pantalla y la cubre hacia la derecha. Consulte el efecto de soplado de partículas de @Video 1. La fuente de @Picture 1 aparece gradualmente en el centro de la pantalla.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-7-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-7-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 8
### Aporte

#### 📝 Aviso
```
Los personajes de @Imagen 1 se refieren a los movimientos y cambios de expresión en @Video 1 para mostrar el comportamiento abstracto de comer fideos instantáneos.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/4-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/4-8-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## La creatividad y la capacidad de completar la trama del modelo.

## Caso 1
### Aporte

#### 📝 Aviso
```
Realice una interpretación cómica de @Imagen 1 en orden de izquierda a derecha y de arriba a abajo, manteniendo las líneas pronunciadas por los personajes consistentes con las imágenes, agregando efectos de sonido especiales al cambio del guión gráfico y a las interpretaciones clave de la trama, y ​​el estilo general es humorístico; consulte @Video 1 para conocer el método de interpretación.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-1.jpg" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-1-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-1-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
Consulte el guión gráfico del largometraje de @Picture1, consulte los guiones gráficos, escenas, movimientos de cámara, imágenes y redacción publicitaria de @Picture1, y cree una secuencia de título curativa de 15 segundos sobre "Las cuatro estaciones de la infancia".
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-2-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
Consulte el audio del video 1 y use las Figuras 1, 2, 3, 4 y 5 como inspiración para crear un video emotivo. Referencia de música de fondo @ video 1
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/5-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/5-4-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Extensión de vídeo

## Caso 1
### Aporte

#### 📝 Aviso
```
Amplíe el vídeo a 15 segundos, consulte la imagen de un burro conduciendo una motocicleta en @Imagen 1 y @Imagen 2 y agregue un anuncio imaginativo.
Imagen 1: Toma fija desde un costado, el burro monta una motocicleta y sale corriendo del cobertizo, y la gallina que está al lado está asustada.
Pantalla 2: El burro anda en motocicleta y da vueltas en la arena. Primero, un primer plano de los neumáticos de la motocicleta, y luego un corte en el aire del burro haciendo acrobacias en círculos en una motocicleta, levantando humo.
Imagen 3: El fondo es una toma de montañas nevadas, con un burro montado en un automóvil volando sobre la ladera. El lema está detrás del tema, y ​​en el medio aparece "Inspire Creativity, Enrich Life" en forma de máscara (cuando pasan volando el burro y la moto), y finalmente cuando la moto pasa volando, se levanta una nube de polvo y humo.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-1-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
El vídeo se prolonga durante 6 segundos, y aparece la emocionante música de guitarra eléctrica. La fuente publicitaria de "JUST DO IT" aparece en el medio del vídeo y luego se desvanece gradualmente. La cámara sube hasta el techo. Un hombre fuerte tira del anillo colgante. La parte superior de su cuerpo lleva ropa deportiva ajustada de @Picture 1, con el logo "Fitness" de @Picture 2 impreso en la espalda. El hombre levanta el anillo colgante con sus fuertes extremidades superiores, y luego aparece la fuente final del anuncio "HACER ALGÚN DEPORTE" en el medio del video.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-2-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-2-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
Extiende @video1 por 15 segundos. 1-5 segundos: la luz y la sombra se deslizan lentamente sobre la mesa de madera y el cuerpo de la taza a través de las persianas, y las ramas se balancean como un ligero soplo. 6 a 10 segundos: un grano de café cae suavemente desde la parte superior de la pantalla y la cámara se mueve hacia el grano de café hasta que la pantalla se vuelve negra. 11-15 segundos: la primera línea en inglés es "Lucky Coffee", la segunda línea es "Breakfast" y la tercera línea es "AM 7:00-10:00".
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-3-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
Extendiéndose hacia adelante durante 10 segundos, bajo la cálida luz de la tarde, la cámara comienza desde la fila de toldos en la esquina de la calle que fueron ondeados por la brisa, y lentamente desciende hasta unas cuantas pequeñas margaritas que asoman sus cabezas en la base de la pared. Acto seguido, aparecieron en pantalla las zapatillas rojas del protagonista. Estaba en cuclillas frente a un puesto de flores en la calle, sonriendo mientras recogía un gran puñado de girasoles en sus brazos y los pétalos se frotaban contra su camiseta blanca. Cuando se dio la vuelta y subió a la patineta, el dueño del puesto de flores sonrió y gritó: "¡Cuidado con los pétalos que vuelan!". Saludó al jefe y luego comenzó a patinar. Varios pétalos dorados ya se habían liberado del ramo y aterrizaron en la tabla de la patineta.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/6-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/6-4-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## El timbre es más preciso y el sonido es más realista.

## Caso 1
### Aporte

#### 📝 Aviso
```
Lente fija, la lente ojo de pez central mira hacia abajo a través del orificio circular, consulte la lente ojo de pez en el Video 1, deje que el caballo en el @Video 2 mire hacia la lente ojo de pez, consulte la acción de hablar en el @Video 1, la música de fondo se refiere al efecto de sonido en el @Video 3.
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-1.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-2.gif" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-1-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
A partir de las fotografías promocionales del edificio de oficinas proporcionadas, se generó un documental inmobiliario de 15 segundos a nivel de película, utilizando una pantalla panorámica de 2,35:1, 24 fps y un estilo de imagen delicado. La voz de la narración fue remitida al @Video 1, y se filmó la "ecología del edificio de oficinas" para presentar las operaciones de las diferentes empresas en el edificio. La narración se utilizó para explicar cómo el edificio de oficinas se convirtió en un vibrante ecosistema empresarial.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-3.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-4.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-2-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-2-5.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
Un diálogo de quejas en la "Sala de quejas de perros y gatos" requiere emociones intensas y es coherente con la actuación de un programa de entrevistas:
Meow Jiang (presentado por Cat, lamiendo el pelaje y poniendo los ojos en blanco): "Mi familia, ¿quién sabe? El chico a mi lado, además de menear la cola y derribar el sofá todos los días, solo usa sus ojos como "Soy tan bueno, quiero que me toquen" para engañar a los humanos para que coman bocadillos. Obviamente es más agresivo que nadie cuando se trata de derribar casas, pero todavía tiene el descaro de llamarlo Wangzai. Creo que llamarlo "Wangzai" es más o menos, jajaja."
Wang Zai (anfitrión del perro, inclinando la cabeza y moviendo la cola): "¿Todavía tienes el descaro de hablar conmigo? Duermes 18 horas al día y, cuando te despiertas, frotas las piernas humanas para pedir latas. Pierdes tanto pelo que la ropa negra del humano se cubre con tu pelo. Después de barrer el suelo, te das la vuelta y te revolcas en el sofá. ¿Cómo sigues teniendo el descaro de fingir ser un noble frío?"
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-1.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-3-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-3-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
Sonó el acompañamiento de "El caso de la belleza de la guillotina" en el preludio de la ópera de Henan. Bao Zheng, vestido de negro a la izquierda, señaló a Chen Shimei vestido de rojo a la derecha y cantó la ópera de Henan con los dientes apretados: "Espada contra vaina, con evidencia real, ¿te atreves a no moverte?" Los ojos de Chen Shimei se movían rápidamente, buscando expedientes, con una mirada de extrema vergüenza. En ese momento, una voz de un actor principal de la Ópera de Henan llegó desde fuera de la pantalla: "¡Espera un minuto!" Bao Zheng y Chen Shimei miraron hacia el lado derecho de la pantalla.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-4-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-4-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 5
### Aporte

#### 📝 Aviso
```
Genera un vídeo MV de 15 segundos. Palabras clave: encuadre estable / empujar y tirar de la luz / sentido heroico de ángulo bajo / documental pero de alta gama Una toma de gran angular, un ángulo de cámara ligeramente bajo, el camino de tierra del acantilado y la camioneta retro ocupan el tercio inferior de la pantalla, el mar y el horizonte en la distancia abren el espacio, la luz volumétrica del lado del atardecer pasa a través de las partículas de polvo, composición a nivel de película, granos de película reales, la brisa sopla en las esquinas de la ropa.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-1.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-5-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-5-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 6
### Aporte

#### 📝 Aviso
```
La niña con sombrero en el medio de la imagen canta suavemente "¡Estoy tan orgullosa de mi familia!", luego se da vuelta y abraza a la niña negra en el medio. La chica negra respondió emocionada: "Cariño mío, eres el corazón de nuestra familia" y le devolvió el abrazo. El niño vestido de amarillo a la izquierda dijo alegremente: "¡Amigos, bailemos juntos para celebrar!". La chica de la extrema derecha respondió inmediatamente: "¡Traeré la música!", sonaba música latinoamericana de fondo, la mujer de la falda naranja de la izquierda (Julietta) sonrió y asintió, y la mujer de las trenzas de la derecha (Louisa) apretó los puños y agitó los brazos. Alguien entre la multitud comenzó a dar pasos, los niños aplaudieron al ritmo y toda la familia estaba a punto de formar un círculo. Acompañadas de música alegre, con las faldas al viento, bailaron por las coloridas calles, contagiando alegría y calidez.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-6-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-6-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 7
### Aporte

#### 📝 Aviso
```
Lente fija. El hombre fuerte de pie (capitán) apretó los puños, agitó los brazos y dijo en español: "¡Ataque en tres minutos!" El miembro rubio del equipo estaba revisando las armas de fuego y el miembro del equipo de cabello verde sostenía la linterna táctica. Los integrantes del equipo negro se pusieron los hombros y preguntaron en español a sus compañeros: "¿Flanqueando?" El capitán asintió y dijo en español: "Viejas reglas, manténgase con vida para el interrogatorio". Todos los miembros se mostraron solemnes, completaron gestos tácticos en medio del sonido del choque de equipos y se pusieron de pie en un entendimiento tácito. Todos estaban listos y los dos chicos de la izquierda también se levantaron primero y se prepararon para pelear.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-1.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-7-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-7-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 8
### Aporte

#### 📝 Aviso
```
0-3 segundos: el despertador suena al principio y la imagen 1 aparece en la pantalla borrosa;
3-10 segundos: mueva la cámara rápidamente y gire hacia el lado opuesto para tomar un primer plano del rostro del hombre. El hombre, impotente, le pide a la niña que se levante. El tono y timbre se refieren al @Video 1;
10-12 segundos: la niña hizo un puchero y se escondió debajo de la colcha;
12-15 segundos: cambia a todo el cuerpo del protagonista masculino, suspiró y dijo: "¡Realmente no hay nada que pueda hacer contra ti!"
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-8-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-8-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 9
### Aporte

#### 📝 Aviso
```
El mono en la @Imagen 1 camina hacia el mostrador de la tienda de té con leche. La cámara lo sigue. Un camarero Bichon Frise en @Imagen 2 está limpiando las herramientas de producción en la barra. Mono le ordena al camarero con acento de Sichuan: "Yao Meier, ¿quieres despedirte de mi concubina?"
Toma cortada, primer plano.
El camarero dejó lo que estaba haciendo, le dirigió una mirada extrañada al anciano y respondió: "No, ¿quieres estilo americano?".
Corte para mostrar el mono.
Se rascó la cabeza y murmuró algo: "¿Está todo bien...? ¡Tengo algo que hacer! Mi nieto me pidió que comprara un té con leche, así que simplemente lo llamé Adiós, mi concubina".
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-3.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-9-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-9-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 10
### Aporte

#### 📝 Aviso
```
Utilice el estilo y el tono de la ciencia popular para interpretar el contenido de la imagen 1, incluido Wukong yendo a la montaña Cuiyun para pedir prestado un abanico de plátanos a la Princesa Iron Fan para cruzar la Montaña Flame. La princesa Iron Fan quería vengarse porque Wukong entregó a su chico rojo y adoraba a Guanyin cuando era niño. Madre e hijo fueron separados y ella se negó a pedir prestado el abanico a cambio. Wukong intentó persuadirlo en vano, y los dos inmediatamente comenzaron a contar una historia sobre su disputa.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-1.jpg" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/7-10-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/7-10-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## La continuidad de la lente (un disparo hasta el final) es más fuerte

## Caso 1
### Aporte

#### 📝 Aviso
```
@Imagen 1@Imagen 2@Imagen 3@Imagen 4@Imagen 5, un travelling de un solo disparo, que sigue al corredor desde la calle hasta las escaleras, a través del pasillo, hasta el tejado y, finalmente, con vistas a la ciudad.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-3.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
Tomando @Picture 1 como primer cuadro, la imagen se aleja de la ventana del plano. Las nubes flotan lentamente en el marco. Uno de ellos es una nube decorada con gominolas de colores, siempre en el centro de la imagen, y luego se transforma lentamente en el helado de @Imagen 2. La cámara vuelve a acercarse a la cabina. @Imagen 3, que está sentada junto a la ventana, extiende la mano para tomar el helado de la ventana y le da un mordisco. Su boca está cubierta de crema y una dulce sonrisa se dibuja en su rostro.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-3.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-2-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
Al estilo de una película de espías, la @Imagen 1 es el primer fotograma. La cámara sigue a la agente con una cazadora roja caminando hacia adelante. La cámara sigue la vista panorámica. Los transeúntes siguen bloqueando a la mujer de rojo mientras camina hacia una esquina. Consulte el edificio de la esquina en @Imagen 2. La toma fija de la mujer vestida de rojo sale de la pantalla y desaparece al doblar la esquina. Una chica que lleva una máscara se esconde en un rincón y la mira fijamente. La imagen de la chica enmascarada se refiere a @Imagen 3. Solo se hace referencia a la imagen. La chica está parada en la esquina. La cámara avanzó hacia la agente vestida de rojo. Entró en una mansión y desapareció. Para la mansión, consulte la @Imagen 4. No corte la cámara durante todo el proceso, solo tome una foto hasta el final.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-3-4.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-1-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-1-5.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
Basada en la toma exterior de la @Imagen 1, la perspectiva subjetiva en primera persona se acerca a una vista de primer plano del entorno dentro de la casa de madera. Un ciervo @Imagen 2 y una oveja @Imagen 3 están bebiendo té y charlando junto al fuego. El estilo de la taza de té en primer plano cuando la cámara avanza se refiere a la @Imagen 4.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-4.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-4-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-4-5.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 5
### Aporte

#### 📝 Aviso
```
@Imagen 1@Imagen 2@Imagen 3@Imagen 4@Imagen 5, una emocionante toma de la montaña rusa desde la perspectiva subjetiva. La velocidad de la montaña rusa es cada vez más rápida.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-5.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/8-5-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/8-5-6.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Alta usabilidad para la edición de vídeo.
A veces ya tienes un vídeo y no quieres buscar una imagen desde cero ni rehacerla, sino que simplemente quieres ajustar una pequeña parte de la acción, ampliarla unos segundos o acercar la actuación del personaje a tu idea. Ahora puede utilizar directamente vídeos existentes como entrada y especificar clips, acciones o ritmos para modificaciones específicas sin cambiar otro contenido. No es necesario volver a generar y los ajustes se pueden completar rápidamente

## Caso 1
### Aporte

#### 📝 Aviso
```
Subvirtiendo la trama en @Video 1, los ojos del hombre repentinamente cambiaron de gentiles a fríos y feroces. En el momento en que la heroína estaba indefensa, la empujó violentamente desde el puente y la empujó al agua. Los movimientos son nítidos y prolijos, con determinación planificada desde hace mucho tiempo y sin vacilación, subvirtiendo por completo el afectuoso entorno original del personaje. En el momento en que la heroína cayó al agua, no hubo ningún grito, sólo una mirada de incredulidad. Levantó la vista y le gritó al héroe: "¡Me has estado mintiendo desde el principio!" El héroe se paró en el puente con una sonrisa fría en el rostro y le susurró al agua: "Esto es lo que le debes a mi familia".
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
Subvierte toda la trama del @video 1
0-3 segundos: Un hombre de traje está sentado en un bar con expresión tranquila y una copa de vino en la mano. La cámara avanza lentamente, la luz y la sombra avanzan y el ambiente es serio. El sonido ambiental era bajo y el hombre de traje susurró: "Este negocio es enorme".
3-6 segundos: la mujer detrás de ella parece nerviosa y pregunta: "¿Qué tamaño tiene?" El hombre del traje levanta los ojos y baja la voz: "Es muy grande". La cámara muestra un primer plano de sus manos: deja la copa de vino, llena de aura.
6-9 segundos de metraje: De repente, el hombre de traje sacó una gran bolsa de regalo de bocadillos de debajo de la mesa y la colocó sobre la mesa con un ruido sordo.
9-12 segundos: la mujer detrás de sus manos originalmente colocadas en su cintura, sus músculos cambiaron de rígidos a relajados y toda su expresión se relajó. La atmósfera de la imagen se vuelve relajada.
Pantalla de 13 a 15 segundos: el hombre de traje saca una bolsa de bocadillos para la mujer, la cámara se aleja para mostrar la vista panorámica de la taberna, la imagen se vuelve transparente y borrosa; aparece el subtítulo "No importa lo ocupado que estés, recuerda comer algunos bocadillos~".
```

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-1.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-2-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-2-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
La cantante principal femenina en el video 1 es reemplazada por el cantante principal masculino en la imagen 1. Los movimientos están completamente imitados en el video original. No debería haber cortes de cámara. La banda canta la música.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-3-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-3-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
Cambie el peinado de la mujer en el video 1 a cabello largo y rojo, y el gran tiburón blanco en la imagen 1 emerge lentamente con la mitad de su cabeza detrás de ella.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-4-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-4-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 5
### Aporte

#### 📝 Aviso
```
En el Video 1, la cámara se desplaza hacia la derecha. El jefe del pollo frito está ocupado entregando el pollo frito a los clientes que hacen cola y dice en mandarín: "Haz su trabajo, haz tu trabajo, todos hacen cola de manera civilizada". Después de decir esto, va a buscar la bolsa de papel para poner el pollo frito. Un primer plano muestra al jefe tomando la bolsa de papel con la imagen 1 impresa y un primer plano muestra la mano pasándola al cliente.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-1.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-2.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-5-3.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-5-3.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Puede realizar puntos de tarjetas de música.

## Caso 1
### Aporte

#### 📝 Aviso
```
La chica del cartel se cambia constantemente de ropa. La ropa hace referencia al estilo de @Imagen 1 @Imagen 2. Ella sostiene el bolso de @Imagen 3. El ritmo del video hace referencia a @Video.
```
#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-4.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-5.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-1-6.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-1-6.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
@Imagen 1 @Imagen 2 @Imagen 3 @Imagen 4 @Imagen 5 @Imagen 6 @Imagen 7 Las imágenes de la imagen están pegadas de acuerdo con la posición y el ritmo general de los fotogramas clave en el @ video. Los personajes de la imagen son más dinámicos, el estilo general de la imagen es más soñador y la tensión de la imagen es fuerte. Puede cambiar la escena de la imagen de referencia según las necesidades de la música y la imagen, y complementar los cambios de luces y sombras en la imagen.
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-6.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-7.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-2-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-2-8.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
@Imagen 1@Imagen 2@Imagen 3@Imagen 4@Imagen 5@Imagen 6 de la imagen de la escena del paisaje, consulte el ritmo de la imagen en el @video, el estilo de la imagen y el ritmo de la música entre las transiciones para marcar puntos
```

#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-4.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-5.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-6.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-7.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/10-3-8.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/10-3-8.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 4
### Aporte

#### 📝 Aviso
```
Un clip de animación de combate de estilo juego intelectual de 8 segundos que encaja con el tema de la venganza. 0-3 segundos: en el guión gráfico 1, la heroína se da vuelta y se sienta, luego gira la cámara. La heroína hace un movimiento y dice "pierdes", consulta el guión gráfico 2. 3-4 segundos: mueve la cámara rápidamente y gira hacia el primer plano del hombre de enfrente, consulta el guión gráfico 3. El hombre aprieta los dientes y está muy insatisfecho con el resultado. 4-6 segundos: corte a una toma aérea, la mujer hace un movimiento y las personas en el lado opuesto se sorprenden, consulte el guión gráfico 4. 6-8 segundos: la cámara se desplaza hacia abajo rápidamente, la pantalla pasa a negro, luego la pantalla se ilumina gradualmente, en una habitación oscura, la mujer mira la luz de la luna fuera de la ventana y dice en voz baja "Ya veremos", consulte el guión gráfico 5.
```

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/9-1-2.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/9-1-2.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## La interpretación emocional es mejor.

## Caso 1
### Aporte

#### 📝 Aviso
```
La chica del cartel se cambia constantemente de ropa. La ropa hace referencia al estilo de @Imagen 1 @Imagen 2. Ella sostiene el bolso de @Imagen 3. El ritmo del video hace referencia a @Video.
```
#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-2.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-3.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-1-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-1-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 2
### Aporte

#### 📝 Aviso
```
La chica del cartel se cambia constantemente de ropa. La ropa hace referencia al estilo de @Imagen 1 @Imagen 2. Ella sostiene el bolso de @Imagen 3. El ritmo del video hace referencia a @Video.
```
#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-3.png" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-2-4.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-2-4.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*

## Caso 3
### Aporte

#### 📝 Aviso
```
La chica del cartel se cambia constantemente de ropa. La ropa hace referencia al estilo de @Imagen 1 @Imagen 2. Ella sostiene el bolso de @Imagen 3. El ritmo del video hace referencia a @Video.
```
#### Imagen
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-1.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-2.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-3.png" alt="1" width="400" height="auto">
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-4.png" alt="1" width="400" height="auto">

#### Video
<img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" alt="1" width="400" height="auto">

### Producción
<a href="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-1/11-3-5.mp4"><img src="https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/11-3-5.gif" width="600"></a>

📥 *Haz clic en la imagen Gif para descargar el vídeo*


# 🏁 Dos palabras finales
Las capacidades multimodales de Seedance 2.0 están en constante evolución y continuaremos actualizando las capacidades y admitiendo más combinaciones de entradas. ¡Espero que este manual de usuario te ayude a expresar tu creatividad más libremente!

Si encuentra un error, tiene sugerencias de uso o escenarios de demanda, deje un mensaje, envíe un mensaje privado o toque los tambores y háganoslo saber. Continuaremos optimizando y trabajando juntos para convertir a Jimeng en una herramienta de productividad que realmente lo haga feliz y conveniente ❤️
