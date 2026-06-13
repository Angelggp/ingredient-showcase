# 🌿 Ingredientes que inspiran

Landing page para showcase de ingredientes naturales construida con Next.js 15, Tailwind CSS v4 y Framer Motion. Arquitectura orientada a la separación de responsabilidades para facilitar la integración con un backend cuando esté disponible.

---

## 🚀 Stack tecnológico

- **Next.js 15** — App Router, Server y Client Components
- **TypeScript** — tipado estricto en toda la aplicación
- **Tailwind CSS v4** — sistema de diseño centralizado en `globals.css`
- **Framer Motion** — animaciones de entrada en scroll, carrusel hero y hojas flotantes
- **Axios** — cliente HTTP con instancia centralizada
- **TanStack React Query** — gestión de estado del servidor y caché
- **Lucide React** — iconografía

---

## 📁 Estructura del proyecto

```
ingredient-showcase/
├── app/
│   ├── globals.css             # sistema de diseño: colores, fuentes, escala tipográfica
│   ├── layout.tsx              # layout raíz con providers y fuentes
│   └── page.tsx                # página principal
├── components/
│   ├── hero/
│   │   ├── HeroSection.tsx     # sección hero con parallax y hojas animadas
│   │   ├── HeroCarousel.tsx    # carrusel automático de imágenes de fondo
│   │   └── LeafShape.tsx       # hoja SVG animada reutilizable
│   ├── ingredients/
│   │   ├── IngredientList.tsx  # lista conectada al hook de datos
│   │   ├── IngredientCard.tsx  # tarjeta de ingrediente con animación scroll
│   │   └── DetailRow.tsx       # fila de detalle con icono, label y valor
│   └── layout/
│       └── Footer.tsx          # pie de página
├── constants/
│   ├── hero.ts                 # slides y contenido del hero
│   └── ingredients.ts          # datos mock de ingredientes
├── hooks/
│   └── useIngredients.ts       # hooks de React Query para ingredientes
├── providers/
│   └── QueryProvider.tsx       # wrapper de TanStack React Query
├── services/
│   └── ingredientService.ts    # llamadas axios al backend
├── types/
│   └── ingredient.ts           # interfaces y tipos TypeScript
└── public/
    ├── hero/                   # imágenes del carrusel hero
    └── ingredients/            # imágenes de cada ingrediente
```

---

## ⚙️ Instalación y desarrollo

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/ingredient-showcase.git
cd ingredient-showcase

# 2. Instala las dependencias
pnpm install

# 3. Copia las variables de entorno
cp .env.example .env.local

# 4. Arranca el servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🖼️ Imágenes

Coloca tus imágenes en la carpeta `public/` siguiendo esta estructura:

```
public/
├── hero/
│   ├── fondo1.jpg
│   ├── fondo2.jpg
│   └── fondo3.jpg
└── ingredients/
    ├── lemon.jpg
    └── tomato.jpg
```

---

## 🔌 Integración con backend

El proyecto funciona en dos modos dependiendo de si existe la variable `NEXT_PUBLIC_API_URL`:

**Sin backend (modo actual)** — los hooks detectan que no hay URL configurada y usan los datos mock de `constants/ingredients.ts` directamente, sin lanzar ninguna petición.

**Con backend** — añade la URL en `.env.local` y los hooks empiezan a consumir la API automáticamente sin cambiar nada más en el código.

```env
NEXT_PUBLIC_API_URL=https://tu-api.com
```

### Endpoints esperados

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/ingredients` | Lista todos los ingredientes |
| GET | `/ingredients/:id` | Obtiene un ingrediente por id |
| GET | `/ingredients?category=citrico` | Filtra por categoría |

### Contrato de datos

El backend debe devolver objetos que respeten la interfaz definida en `types/ingredient.ts`:

```ts
interface Ingredient {
  id: number;
  category: string;
  categoryColor: string;
  name: string;
  bgColor: string;
  image: string;
  imageAlt: string;
  details: {
    icon: string;
    label: string;
    value: string;
  }[];
}
```

---

## 🎨 Sistema de diseño

Todos los tokens de diseño están centralizados en `app/globals.css` bajo el bloque `@theme` de Tailwind v4. Para modificar cualquier aspecto visual edita únicamente ese archivo.

```css
@theme {
  --color-brand-green:  #1D3A1F;
  --color-bg-lemon:     #F5F2D0;
  --font-serif:         'Playfair Display', Georgia, serif;
  --text-4xl:           3.75rem;
}
```

---

## 📦 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Servidor de desarrollo con Turbopack |
| `pnpm build` | Build de producción |
| `pnpm start` | Servidor de producción |
| `pnpm lint` | Análisis estático con ESLint |

---

## 📄 Licencia

MIT © 2024 Ingredientes que inspiran