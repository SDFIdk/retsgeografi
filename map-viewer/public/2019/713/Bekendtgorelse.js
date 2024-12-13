import { LitElement, html, css } from 'lit';

export class Bekendtgorelse extends LitElement {
	static styles = css`
    body {
        font-family: Questa-Regular;
        font-size: .9375rem;
    }

    h1 {
        font-size: 50px;
    }

    p {
        text-align: center;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .sidekontainer {
        width: 52%;
        margin: auto;
    }

    .sidehoved {
        width: 1077px;
        height: 75px;
        border-bottom: 2px solid green;
        margin-bottom: 15px;
    }

    .menu {
        float: left;
        width: 260px;
    }

    .menu ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .menu li {
        padding: 8px;
        margin-bottom: 8px;
        border-bottom: 1px solid green;
        background-color: #fff;
        color: #000;
    }

    .menu li:hover {
        color: #ffffff;
        background-color: #e1ecdf;
    }

    .referencer li {
        background-color: #e1ecdf;
    }

    .forskrift {
        float: left;
        width: 800px;
        margin: 15px;
    }

    .forskriftID {
        font-family: Questa-Regular;
        font-size: 1.25rem;
        font-weight: 500;
        flex: 50%;
    }

    .organisation {
        font-family: Questa-Regular;
        font-size: 1.25rem;
        font-weight: 500;
        text-align: right !important;
        flex: 0;
    }

    .titel2 {
        font-size: 165%;
        margin-bottom: 10pt;
        margin-top: 10pt;
        text-align: center;
    }

    .indledning {
        margin: 0;
        text-indent: 12pt;
    }

    .kapitel {

    }

    .kapitelOverskrift {

    }

    .paragrafOverskrift {
        text-align: center;
    }

    .paragrafTekst {
        text-align: left;
        text-indent: 25px;

    }

    .paraSign {
        font-weight: 900;
    }
    .map-container {
        min-width: 60rem;
        width: 100%; /* Set desired width */
        height: 600px; /* Set desired height */
        border: 1px solid #ccc; /* Optional: border for visibility */
        position: relative; /* To control positioning of child elements */
    }        
  `;

	render() {
      const gmlFile = 'map-viewer/public/2019/713/data_demo.gml';
      const xmlFile = 'map-viewer/public/2019/713/metadata.xml';
      const sldFile = 'map-viewer/public/2019/713/styles.sld';
      console.log("Bekendtgørelse XML", xmlFile);
      console.log('Bekendtgørelse GML', gmlFile);
      console.log('Bekendtgørelse SLD', sldFile);


      return html`
        <div class="map-container">
          <map-viewer
              .gmlFile="${gmlFile}"
              .xmlFile="${xmlFile}"
              .sldFile="${sldFile}">
          </map-viewer>
        </div>
      `;
  }
}
