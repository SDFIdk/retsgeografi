
# Retsgeografi Map Viewer

A simple map viewer designed for "retsgeografi," allowing users to visualize vector tile data from GML files with associated XML metadata. Built using OpenLayers, Lit, Vite, and Web Components to provide a modern, responsive, and lightweight application.

## Features

- **GML Support:** Upload or drag-and-drop GML files to add vector tile data to the map.
- **Metadata Handling:** Utilize XML files for metadata, parsed and displayed alongside the map.
- **Layer Management:** Switch added GML layers on and off as needed.
- **Responsive UI:** A flexible and modern interface built using Lit and Web Components.

## Technologies Used

- **[OpenLayers](https://openlayers.org/):** For rendering maps and handling GML files.
- **[Lit](https://lit.dev/):** For building reusable and efficient web components.
- **[Vite](https://vitejs.dev/):** For fast development and optimized production builds.
- **Web Components:** To encapsulate and modularize the UI.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or later)
- **npm** (Node Package Manager, usually included with Node.js)

### Installation

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

### Running the Development Server

Start the development server with Vite:
```bash
npm run dev
```
- This command will start a local server, usually at `http://localhost:5173`, where you can see the application in action. The server supports hot module replacement (HMR), so changes to the code will automatically refresh the page.

### Building for Production

To create an optimized build for production:
```bash
npm run build
```
- This will generate a `dist` folder containing the compiled and minified files for deployment.

### Previewing the Production Build

To test the production build locally:
```bash
npm run preview
```

## Usage

### Adding GML Files

- **Upload:** Click the upload button (to be added in the UI) to select a GML file for rendering on the map.
- **Drag & Drop:** Drag and drop a GML file directly onto the map to add it as a new layer.
- The added layers can be toggled on and off for better visualization.

### XML Metadata

- When a GML file is added, the corresponding XML file (if available) is parsed to extract metadata. This metadata can be displayed in the interface, providing users with contextual information about the map layers.

## Project Structure

```plaintext
src/
│
├── components/
│   └── MapViewer.js  # The custom web component for the map viewer.
│
├── main.js           # The entry point of the application.
│
└── index.html        # The main HTML file for the application.
```

## Code Overview

- **`MapViewer.js`**: Defines a custom web component using Lit
