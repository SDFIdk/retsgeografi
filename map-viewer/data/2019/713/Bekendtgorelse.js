import { LitElement, html, css } from 'lit';

class Bekendtgorelse extends LitElement {
	static styles = css`
    body {
      font-family: Questa-Regular;
      font-size: 0.9375rem;
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
      background-color: #c6e1d3;
    }
    .forskrift {
      float: left;
      width: 800px;
      margin: 15px;
    }
    .forskriftID,
    .organisation {
      font-family: Questa-Regular;
      font-size: 1.25rem;
      font-weight: 500;
    }
    .forskriftID {
      flex: 50%;
    }
    .organisation {
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
    .kapitel {}
    .kapitelOverskrift {}
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
    map-viewer {
      width: 1000px;
      height: 500px;
      border: 1px solid #ccc;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: relative;
    }
  `;

	render() {
		return html`
          <div class="sidekontainer">
            <div class="Sidehoved">
              <h1>Retsinformation</h1>
            </div>
            <div class="menu">
              <ul>
                <li>Indholdsfortegnelse</li>
                <li>Senere ændringer til forskriften</li>
                <Li>Ændrer i/ophæver</li>
                <li>Yderligere dokumenter</li>
              </ul>
            </div>
            <div class="forskrift">
              <div
                  style="width:100px; background-color:#c6e1d3; text-align: center; margin-bottom: 15px;padding: 5px 5px 5px;">
                GÆLDENDE
              </div>
              <div class="row">
                <div class="forskriftID">BEK nr 713 af 09/07/2019</div>
                <div class="organisation">Erhvervsministeriet</div>
              </div>
              <hr style="width: 100%;"/>
              <p class="titel2">Bekendtgørelse om landsplandirektiv for gastransmissionsledning med tilhørende tekniske
                anlæg</p>
              <p class="indledning">I medfør af § 3, stk. 1 og 2, i lov om planlægning, jf. lovbekendtgørelse nr. 287 af
                16. april 2018, fastsættes:</p>
              <div class="kapitel">
                <p class="kapitelOverskrift">Kapitel 1</p>
                <p class="paragrafTekst">Reservation af arealer til en ny gastransmissions-ledning med tilhørende
                  tekniske anlæg – Baltic Pipe
                <p class="paragrafTekst">Formål</p>
                <p class="paragrafTekst"><span class="paraSign">§ 1</span>. Bekendtgørelsens formål er at reservere
                  arealer til en ny gastransmissionsledning fra Houstrup Strand via Fyn til Faxe Bugt på Sjælland,
                  udvidelse af modtageterminal i Nybro i Varde Kommune og en ny kompressorstation ved Everdrup i Næstved
                  Kommune, som vist på bilag 1.</p>
              </div>
              <div class="kapitel">
                <p class="kapitelOverskrift">Kapitel 2</p>
                <p class="paragrafOverskrift">Reservation af arealer til gastransmissionsledning og
                  linjeventilstationer</p>
                <p class="paragrafOverskrift">Formål og retsvirkning</p>
                <p class="paragrafTekst"><span class="paraSign">§ 2</span>. Reglerne i dette kapitel har til formål at
                  reservere landzonearealer til en ny gastransmissionsledning fra Houstrup Strand via Fyn til Faxe Bugt
                  på Sjælland, som vist på bilag 2.</p>
                <p class="paragrafTekst">Stk. 2. Reservationen skal, i tiden frem til gastransmissionsledningen er
                  anlagt, sikre at der ikke planlægges eller etableres anlæg, der ikke er forenelige med de
                  restriktioner, der er forbundet med en gastransmissionsledning til 10 milliarder kubikmeter pr.
                  år.</p>
                <p class="paragrafTekst">Stk. 3. Bestemmelserne i §§ 4-8 tillægges retsvirkning som kommuneplan og
                  anlægsarbejder, der er nævnt i §§ 5-8, kan iværksættes uden landzonetilladelse efter lovens § 35, stk.
                  1.</p>
                <p class="paragrafTekst"><span class="paraSign">§ 3</span>. Kommunalbestyrelsen kan ikke give
                  landzonetilladelse efter lovens § 35 eller byggetilladelser iht. bygningsreglementet, der er i strid
                  med arealreservationen, indtil gastransmissionsledningen er anlagt.</p>
                <p class="paragrafTekst"><span class="paraSign">§ 4</span>. Mindre ændringer i arealreservationen kan
                  ske efter godkendelse af erhvervsministeren eller den, ministeren bemyndiger hertil.</p>
                <p class="paragrafOverskrift">Områdets afgrænsning</p>
                <p class="paragrafTekst"><span class="paraSign">§ 5</span>. Reservationen gælder i et bælte på 250 meter
                  på hver side af den planlagte gastransmissionsledning. Eksisterende kommuneplanlagte arealer, fredede
                  fortidsminder, arealfredninger ved Wedellsborg Banker, Davinde Mølledam og Hindemae Hovedgård,
                  fredning omkring Roholte Kirke, og Natura 2000 N112 Lillebælt er ikke omfattet af reservationen, som
                  vist på bilag 2.</p>
                <p class="paragrafTekst">Stk. 2. Når gastransmissionsledningen er anlagt, ændres reservationen til en
                  zone på 200 m på hver side af gastransmissionsledningen, hvor der ikke uden en konkret vurdering af
                  sikkerheden ift. gastransmissionsledningen og den konkrete anvendelse, kan planlægges for ny
                  bebyggelse eller ændret arealanvendelse.</p>
                <p class="paragrafTekst">Stk. 3. Berørte kommuner er oplistet i bilag 3.</p>
                <p class="paragrafOverskrift">Anvendelse</p>
                <p class="paragrafTekst"><span class="paraSign">§ 6</span>. Indenfor arealreservationen i Jylland fra
                  Houstrup Strand til modtageterminal Nybro i Varde Kommune samt fra kompressorstation Egtved til
                  Lillebælt ved Stenderup Hage i Kolding Kommune kan der anlægges en gastransmissionsledning samt
                  etableres 5 linjeventilstationer, som vist på bilag 4a og 4b samt midlertidige arbejdspladser, som er
                  vist på bilag A.</p>
                <p class="paragrafTekst"><span class="paraSign">§ 7</span>. Indenfor arealreservationen fra Skrillinge
                  Strand ved Middelfart til Nordenhuse nord for Nyborg kan der anlægges en gastransmissionsledning samt
                  etableres 7 linjeventilstationer, som vist på bilag 5 og midlertidige arbejdspladser, som er vist på
                  bilag A.</p>
                <p class="paragrafTekst"><span class="paraSign">§ 8</span>. Indenfor arealreservationen fra Kongsmark
                  ved Slagelse til Faxe Bugt kan der anlægges en gastransmissionsledning samt etableres 5
                  linjeventilstationer, som vist på bilag 6 og midlertidige arbejdspladser, som er vist på bilag A.</p>
              </div>
              <div class="kapitel">
                <p class="kapitelOverskrift">Kapitel 3</p>
                <p class="paragrafOverskrift">Nye tekniske anlæg indenfor den eksisterende modtageterminal i Nybro i
                  Varde Kommune</p>
                <p class="paragrafOverskrift">Formål og retsvirkning</p>
                <p class="paragrafTekst"><span class="paraSign">§ 9</span>. Reglerne i dette kapitel har til formål at
                  udlægge et område, der er beliggende indenfor afgrænsningen af den eksisterende Nybro modtageterminal
                  i Varde Kommune, til nye tekniske anlæg og ny adgangsvej, som vist på bilag 7.</p>
                <p class="paragrafTekst">Stk. 2. Bestemmelserne i §§ 10-11 tillægges retsvirkning som kommuneplan, og
                  bygge og anlægsarbejder, der er forudsat i § 11, kan iværksættes uden lokalplan.</p>
                <p class="paragrafTekst">Stk. 3. Bestemmelserne træder i stedet for bestemmelserne for det pågældende
                  område i lokalplan nr. L701-1 for et område ved Nybro i Varde Kommune af 5. maj 1981 og Tillæg nr. 1
                  og Tillæg 2 til lokalplan nr. L701-1 for et område ved Nybro i Varde Kommune af henholdsvis 6.
                  september 1983 og 27. september 1988.</p>
                <p class="paragrafOverskrift">Områdets afgrænsning</p>
                <p class="paragrafTekst"><span class="paraSign">§ 10</span>. Bekendtgørelsen gælder for et mindre område
                  i byzone indenfor afgrænsningen af Nybro modtageterminal i Varde Kommune, som er vist på bilag 7.</p>
                <p class="paragrafTekst">Stk. 2. Hele arealet er beliggende indenfor afgrænsningen af Nybro
                  modtagestation, og afskærmes mod omgivelserne af den nuværende beplantning og hegn omkring den
                  eksisterende modtageterminal.</p>
                <p class="paragrafOverskrift">Bebyggelsens omfang, bebyggelsens ydre fremtræden og vejforhold</p>
                <p class="paragrafTekst"><span class="paraSign">§ 11</span>. Inden for det i § 10 afgrænsede område må
                  der opføres ny bebyggelse i form af en servicebygning med tilhørende installationer, tre skorstene,
                  adgangsvej og fordelingsveje med en principiel placering, som vist på bilag 8.</p>
                <p class="paragrafTekst">Stk. 2. Servicebygningen kan etableres med en højde på op til 11 m, bredde 18 m
                  og længde 60 m. De tre skorstene kan være op til 20 m høje. Servicebygningen og skorstene skal opføres
                  i mørke afdæmpede farver og i ikke reflekterende materialer.</p>
                <p class="paragrafTekst">Stk. 3. Der kan etableres fordelingsveje indenfor området og en adgangsvej fra
                  Nybrovej.</p>
                <p class="paragrafTekst">Stk. 4. Arealer i en afstand af 50 m fra midten af Nybrovej må ikke anvendes
                  til bebyggelse.
              </div>
              <div class="kapitel">
                <p class="kapitelOverskrift">Kapitel 4</p>
                <p class="paragrafOverskrift">Kompressorstation ved Everdrup i Næstved Kommune</p>
                <p class="paragrafOverskrift">Formål og retsvirkning</p>
                <p class="paragrafTekst"><span class="paraSign">§ 12</span>. Reglerne i dette kapitel har til formål at
                  udlægge et areal i landzone til en kompressorstation ved Everdrup i Næstved Kommune.</p>
                <p class="paragrafTekst">Stk. 2. Bestemmelserne i §§ 13-16 tillægges retsvirkning som kommuneplan, og
                  bygge- og anlægsarbejder, der er forudsat i §§ 14-16, kan iværksættes uden lokalplan og uden
                  landzonetilladelse efter lovens § 35, stk. 1.</p>
                <p class="paragrafOverskrift">Områdets afgrænsning</p>
                <p class="paragrafTekst"><span class="paraSign">§ 13</span>. Bekendtgørelsen gælder for et område i
                  Næstved Kommune beliggende i det åbne land, ca. 1 kilometer nordøst for landsbyen Everdrup. Området er
                  landbrugsarealer og omfatter del af matr.nr. 1b, 1c, 1h, 1i, 1o, 1p, 2g, 7000 1, 7000b og 7000c
                  Tågeskov By, Everdrup samt 4c Stavnstrup By, Everdrup. Området afgrænses mod vest af Hestehavevej og
                  Sydmotorvejen, mod nord af skovområdet Tågeskov Hestehave, mod øst af Rønnedevej og mod syd af et
                  levende hegn/beskyttet dige samt Tågeskovvej. Områdets afgrænsning er vist på bilag 9.</p>
                <p class="paragrafOverskrift">Området anvendelse</p>
                <p class="paragrafTekst"><span class="paraSign">§ 14</span>. Inden for det i § 13 afgrænsede område kan
                  der anlægges en kompressorstation i overensstemmelse med reglerne i §§ 14 og 17 som en del af
                  gastransmissionsnettet Baltic Pipe.</p>
                <p class="paragrafTekst">Stk. 2. Der må inden for det i § 13 afgrænsede område opføres en
                  kompressorstation med tilhørende bygninger og fritstående el-tekniske anlæg. I tilknytning hertil kan
                  der etableres veje, hegn, parkering o.l., som er nødvendige for anlæggets drift samt beplantning til
                  afskærmning af anlægget.</p>
                <p class="paragrafTekst">Stk. 3. Området skal afgrænses af et mindst 15 m bredt beplantningsbælte med
                  primært hjemmehørende arter, jf. principskitse vist på bilag 10. Beplantningsbæltet etableres som
                  flerrækket hegn med karakter af skovbryn. Hegnet skal hovedsagelig bestå af løvfældende træer og buske
                  samt stedsegrønne træer plantet i grupper på strategiske steder. En ydre ring af beplantning skal være
                  på plads ved ibrugtagningstidspunktet. Resten af beplantningen skal være etableret hurtigst muligt og
                  senest 1 år efter ibrugtagningstidspunkt.</p>
                <p class="paragrafOverskrift">Bebyggelsens omfang</p>
                <p class="paragrafTekst"><span class="paraSign">§ 15</span>. Inden for området må der opføres ny
                  bebyggelse i form af teknikbygninger, lagerhaller, afblæsningsskorsten og administrationsbygninger med
                  en principiel placering som vist på bilag 10. Bygningerne skal fremstå med facader og tage i ikke
                  skinnende materialer og være i jordfarver herunder grå. Afblæsningsskorstenen skal være lysegrå.</p>
                <p class="paragrafTekst">Stk. 2. I delområde 1 kan der etableres administrations- og lagerbygninger i en
                  højde op til 9,5 m. Der kan desuden etableres parkeringsareal og forsinkelsesbassin.</p>
                <p class="paragrafTekst">Stk. 3. I delområde 2 kan der etableres servicebygning, som indeholder
                  elinstallation, nødgenerator, trykluftkompressor, kedelrum, varmeforsyning, kontrolrum og værksted med
                  en bygningshøjde op til 10 m.</p>
                <p class="paragrafTekst">Stk. 4. I delområde 3 kan der etableres tre kompressorbygninger med tilhørende
                  procesanlæg og en målebygning. Kompressorbygningerne kan være op til 13 m høje og kan etableres
                  indenfor byggefeltet vist på kortbilag 10.</p>
                <p class="paragrafTekst">Stk. 5. I delområde 4 kan der etableres transformerstation med tilhørende
                  installationer og en bygning med en højde op til 9 m og højst 6 lynfangsmaster med en højde på op til
                  25 m.</p>
                <p class="paragrafTekst">Stk. 6. I delområde 5 kan der etableres interne vejanlæg, grønne områder,
                  forsinkelsesbassin og en afblæsningsskorsten med en højde op til 45 m.</p>
                <p class="paragrafTekst">Stk. 7. I delområde 6 kan der anlægges vejadgang til kompressorstationen.</p>
                <p class="paragrafTekst"><span class="paraSign">§ </span>. Der kan ske terrænændringer i delområde 1, 2,
                  og 3, så alle områderne ligger i kote ca. 95. Delområde 4 kan terrænreguleres, så hele området ligger
                  i kote ca. 97. Herudover må der ikke ske terrænændringer på mere end +/- 1 m undtagen i forbindelse
                  med adgangsvejen, forsinkelsesbassinet og i overgange mellem delområde 3, 4 og 5.</p>
                <p class="paragrafTekst">Stk. 2. Bestemmelsen i stk. 1 er ikke til hinder for, at kommunalbestyrelsen
                  kan meddele tilladelse efter lovens § 35, stk. 1, til etablering af jordvolde med tilhørende
                  terrænændringer omkring kompressorstationen inden for områdets afgrænsning.</p>
                <p class="paragrafOverskrift">Sikkerhedszoner</p>
                <p class="paragrafTekst"><span class="paraSign">§ 17</spa>. De tekniske anlæg på kompressorstationen afkaster sikkerhedszoner, som skal respekteres ved fremtidig kommunal planlægning i området omkring kompressorstationen.
                </p>
              </div>
              <div class="kapitel">
                <p class="kapitelOverskrift">Kapitel 5</p>
                <p class="paragrafOverskrift">Ikrafttrædelse</p>
                <p class="paragrafTekst"><span class="paraSign">§ 18</span>. Bekendtgørelsen træder i kraft den 12. juli
                  2019.</p>
                <p class="paragrafOverskrift">Erhvervsministeriet, den 9. juli 2019</p>
                <p class="paragrafOverskrift">Simon Kollerup / Sigmund Lubanski</p>
              </div>
              <!-- Include the JavaScript entry file generated by Vite -->
              <script type="module" src="/main.js"></script>
            </div>
          </div>
        `;
  }
}

		customElements.define('bekendtgorelse-page', Bekendtgorelse);