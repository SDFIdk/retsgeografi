<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld"
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd"
                       xmlns:ogc="http://www.opengis.net/ogc"
                       xmlns:xlink="http://www.w3.org/1999/xlink"
                       xmlns:se="http://www.opengis.net/se"
                       version="1.1.0">
    <NamedLayer>
        <!-- well-known name of the layer being referenced; required -->
        <se:Name>OmraadeMedDrikkevandsinteresser</se:Name>
        <UserStyle>
            <se:Name>OmraadeMedDrikkevandsinteresser style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>OD rule</se:Name>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>kategori</ogc:PropertyName>
                            <ogc:Literal>OD</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:SvgParameter name="fill">#52D5EF</se:SvgParameter>
                            <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#000000</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
                <se:Rule>
                    <se:Name>OSD rule</se:Name>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>kategori</ogc:PropertyName>
                            <ogc:Literal>OSD</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:SvgParameter name="fill">#5366EB</se:SvgParameter>
                            <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#000000</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <!-- well-known name of the layer being referenced; required -->
        <se:Name>Indvindingsopland</se:Name>
        <UserStyle>
            <se:Name>Indvindingsopland style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>Indvindingsopland rule</se:Name>
                    <se:PolygonSymbolizer>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#0000FF</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <!-- well-known name of the layer being referenced; required -->
        <se:Name>FoelsomIndvindingsomraade</se:Name>
        <UserStyle>
            <se:Name>FoelsomIndvindingsomraade style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>NFI rule</se:Name>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>kategori</ogc:PropertyName>
                            <ogc:Literal>NFI</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:GraphicFill>
                                <se:Graphic>
                                    <se:Mark>
                                        <!-- cross er defineret i SE-standarden:
                                        The WellKnownName element gives the well-known name of the shape of the mark.
                                        Allowed values include at least “square”, “circle”, “triangle”, “star”, “cross”, and “x” -->
                                        <!--  <se:WellKnownName>cross</se:WellKnownName> -->
                                        <!-- SLDReader understøtter bl.a. også line, horline, slash og backslash,
                                        som også understøttes af QGIS -->
                                        <!-- Det skal afklares hvad retsgeografi vil understøtte -->
                                        <se:WellKnownName>horline</se:WellKnownName>
                                        <se:Stroke>
                                            <se:SvgParameter name="stroke">#FFA500</se:SvgParameter>
                                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                                        </se:Stroke>
                                    </se:Mark>
                                </se:Graphic>
                            </se:GraphicFill>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#FFA500</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
                <se:Rule>
                    <se:Name>SFI rule</se:Name>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>kategori</ogc:PropertyName>
                            <ogc:Literal>SFI</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:SvgParameter name="fill">#BB66D0</se:SvgParameter>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#BB66D0</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <!-- well-known name of the layer being referenced; required -->
        <se:Name>Indsatsomraade</se:Name>
        <UserStyle>
            <se:Name>Indsatsomraade style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>NFI rule</se:Name>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>kategori</ogc:PropertyName>
                            <ogc:Literal>NFI</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:GraphicFill>
                                <se:Graphic>
                                    <se:Mark>
                                        <!-- cross er defineret i SE-standarden:
                                        The WellKnownName element gives the well-known name of the shape of the mark.
                                        Allowed values include at least “square”, “circle”, “triangle”, “star”, “cross”, and “x” -->
                                        <!--  <se:WellKnownName>cross</se:WellKnownName> -->
                                        <!-- SLDReader understøtter bl.a. også line, horline, slash og backslash,
                                        som også understøttes af QGIS -->
                                        <!-- Det skal afklares hvad retsgeografi vil understøtte -->
                                        <se:WellKnownName>slash</se:WellKnownName>
                                        <se:Stroke>
                                            <se:SvgParameter name="stroke">#A9A9A9</se:SvgParameter>
                                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                                        </se:Stroke>
                                    </se:Mark>
                                </se:Graphic>
                            </se:GraphicFill>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#A9A9A9</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
                <se:Rule>
                    <se:Name>SFI rule</se:Name>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>kategori</ogc:PropertyName>
                            <ogc:Literal>SFI</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:SvgParameter name="fill">#DE2B3A</se:SvgParameter>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#DE2B3A</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <!-- well-known name of the layer being referenced; required -->
        <se:Name>BoringsnaerBeskyttelsesomraade</se:Name>
        <UserStyle>
            <se:Name>BoringsnaerBeskyttelsesomraade style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>Indvindingsopland rule</se:Name>
                    <se:PolygonSymbolizer>
                        <!-- TODO lav om til striber -->
                        <se:Fill>
                            <se:SvgParameter name="fill">#ADD8E6</se:SvgParameter>
                            <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#ADD8E6</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
</StyledLayerDescriptor>
