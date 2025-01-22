# Map Viewer Plugin

A customizable map viewer component supporting GML, XML, and SLD files. Built using Lit, OpenLayers, and Web Components.

## Features

- **GML Support:** Upload or drag-and-drop GML files to add vector tile data to the map.
- **SLD Support:** Upload or drag-and-drop SLD files to apply styles to the map. Works with GML file uploads.
- **XML Support:** Upload or drag-and-drop XML files to add and display metadata.
- **Metadata Handling:** Parse and display XML metadata alongside the map.
- **Layer Management:** Toggle visibility of GML layers.
- **Responsive UI:** Modern, flexible interface built with Lit and Web Components.

## Technologies Used

- **[OpenLayers](https://openlayers.org/):** For rendering maps and handling GML files.
- **[Lit](https://lit.dev/):** For building reusable, efficient web components.
- **[Vite](https://vitejs.dev/):** For fast development and optimized production builds.
- **[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components):** To encapsulate and modularize the UI.

## Getting Started

### Prerequisites

- **Node.js** (version 18 or later)
- **npm** (Node Package Manager, usually included with Node.js)

### Installation

This repository works both as a local project and a plugin with a <map-template> element.

### Local Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/retsgeografi-map-viewer.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd retsgeografi-map-viewer
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Running a Development Server**
   ```bash
   npm run dev
   ```
- This starts a local server, typically at `http://localhost:5000`, with hot module replacement (HMR) for instant updates.

5. **Building for Production**

   ```bash
   npm run build
   ```
   - The build files will be generated in the `dist` folder, ready for deployment.


6. **Previewing the Production Build**

   Test the production build locally:
   ```bash
   npm run preview
   ```

## Usage

### GML Files

- **Upload:** Use the upload button (to be added in the UI) to select a GML file for rendering.
- **Drag & Drop:** Drag and drop a GML file directly onto the map to add it as a new layer.
- **Hard Coded URL:** You can hard code a GML file URL in the UI to add it directly to the map.
- Toggle layer visibility for better visualization.

### XML Metadata

- **Upload:** Use the upload button (to be added in the UI) to select an XML file for parsing metadata.
- **Drag & Drop:** Drag and drop an XML file directly onto the map to parse metadata.
- **Hard Coded URL:** You can hard code an XML file URL in the UI to parse metadata.
- When a GML file is added, its corresponding XML file (if available) is parsed to extract metadata.
- Metadata is displayed in the interface, providing contextual information about the map layers.

### SLD Styles

- **Upload:** Use the upload button (to be added in the UI) to select an SLD file for applying styles to the map.
- **Drag & Drop:** Drag and drop an SLD file directly onto the map to apply styles.
- **Hard Coded URL:** You can hard code an SLD file URL in the UI to apply styles.
- SLD needs to be loaded in relation to the GML file.

### Router

- [MapViewer](localhost:5000/#map) loads the MapExample component
- [MapTemplate](localhost:5000/#map-template) loads the MapExample component
- [MapExample](localhost:5000/#map-example) loads the MapTemplate component

## Project Structure

```plaintext
src/
│
├── examples/                 # Example files for the application
│   ├── 2019/
│   │   └── example2019.js    # Example file for 2019
│   ├── 2022/
│   │   └── example2022.js    # Example file for 2022
│   └── 2024/
│       └── example2024.js    # Example file for 2024
│
├── router/                   # Routing logic for the application
│   └── router.js
│
├── MapViewer.js              # Custom web component for the map viewer
├── MapTemplate.js            # Custom web component for the map template
│
├── main.js                   # Entry point of the application
└── index.css                 # Global styles
```

### Code Overview

- **`MapViewer.js`**: Defines the map component and its properties.
- **`MapTemplate.js`**: Provides a template for rendering the map with custom properties.

### Plugin Installation

1. Install the plugin via npm:
    ```bash
    npm install github:SDFIdk/retsgeografi
    ```

2. Import the plugin to make it available:
    ```javascript
    import 'retsgeografi/main.js';
    ```

3. Include the plugin in your HTML with a <map-template> element:
   
    ```html
    <script type="module">
      import 'retsgeografi/main.js';
    </script>

    <map-template
      gmlFile="path/to/gml/file.gml"
      xmlFile="path/to/xml/file.xml"
      sldFile="path/to/sld/file.sld"
    ></map-template>
