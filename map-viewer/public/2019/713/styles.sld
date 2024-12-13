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
        <se:Name>Modtageterminal</se:Name>
        <!-- human-readable descriptive information -->
        <se:Description>
            <se:Title>modtageterminal</se:Title>
            <se:Abstract>Beskrivelse af hvad en modtageterminal er.</se:Abstract>
        </se:Description>
        <UserStyle>
            <se:Name>Modtageterminal style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>Modtageterminal rule</se:Name>
                    <se:PolygonSymbolizer>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#A80000</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">5</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <!-- well-known name of the layer being referenced; required -->
        <se:Name>Kompressorstation</se:Name>
        <!-- human-readable descriptive information -->
        <se:Description>
            <se:Title>kompressorstation</se:Title>
            <se:Abstract>Beskrivelse af hvad en kompressorstation er.</se:Abstract>
        </se:Description>
        <UserStyle>
            <se:Name>Kompressorstation style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>Kompressorstation rule</se:Name>
                    <se:PolygonSymbolizer>
						<se:Fill>
                            <se:SvgParameter name="fill">#ff0519</se:SvgParameter>
                            <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#ff0519</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <se:Name>Station</se:Name>
        <UserStyle>
            <!-- well-known name of the layer being referenced; required -->
            <se:Name>Station</se:Name>
            <!-- human-readable descriptive information -->
            <se:Description>
                <se:Title>station</se:Title>
                <se:Abstract>Beskrivelse af hvad en station er.</se:Abstract>
            </se:Description>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>ny linjeventilstation</se:Name>
                    <se:Description>
                        <se:Title>Nye linjeventilstationer</se:Title>
                    </se:Description>
                    <ogc:Filter>
                        <ogc:And>
                            <ogc:PropertyIsEqualTo>
                                <ogc:PropertyName>type</ogc:PropertyName>
                                <ogc:Literal>linjeventilstation</ogc:Literal>
                            </ogc:PropertyIsEqualTo>
                            <ogc:PropertyIsEqualTo>
                                <ogc:PropertyName>eksisterer</ogc:PropertyName>
                                <ogc:Literal>false</ogc:Literal>
                            </ogc:PropertyIsEqualTo>
                        </ogc:And>
                    </ogc:Filter>
                    <se:PointSymbolizer>
                        <se:Graphic>
                            <se:Mark>
                                <se:WellKnownName>triangle</se:WellKnownName>
                                <se:Fill>
                                    <se:SvgParameter name="fill">#6e6e6e</se:SvgParameter>
                                </se:Fill>
                            </se:Mark>
                            <se:Size>21</se:Size>
                            <se:Rotation>
                                <ogc:Literal>90</ogc:Literal>
                            </se:Rotation>
                        </se:Graphic>
                    </se:PointSymbolizer>
                </se:Rule>
                <se:Rule>
                    <se:Name>eksisterende linjeventilstation</se:Name>
                    <se:Description>
                        <se:Title>Linjeventilstation på eks. stationsområder</se:Title>
                    </se:Description>
                    <ogc:Filter>
                        <ogc:And>
                            <ogc:PropertyIsEqualTo>
                                <ogc:PropertyName>type</ogc:PropertyName>
                                <ogc:Literal>linjeventilstation</ogc:Literal>
                            </ogc:PropertyIsEqualTo>
                            <ogc:PropertyIsEqualTo>
                                <ogc:PropertyName>eksisterer</ogc:PropertyName>
                                <ogc:Literal>true</ogc:Literal>
                            </ogc:PropertyIsEqualTo>
                        </ogc:And>
                    </ogc:Filter>
                    <se:PointSymbolizer>
                        <se:Graphic>
                            <se:Mark>
                                <se:WellKnownName>circle</se:WellKnownName>
                                <se:Fill>
                                    <se:SvgParameter name="fill">#76c5fe</se:SvgParameter>
                                </se:Fill>
                            </se:Mark>
                            <se:Size>21</se:Size>
                            <se:Rotation>
                                <ogc:Literal>90</ogc:Literal>
                            </se:Rotation>
                        </se:Graphic>
                    </se:PointSymbolizer>
                </se:Rule>
                <se:Rule>
                    <se:Name>Kompressorstation</se:Name>
                    <se:Description>
                        <se:Title>Kompressorstation (Næstved)</se:Title>
                    </se:Description>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>type</ogc:PropertyName>
                            <ogc:Literal>Kompressorstation</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PointSymbolizer>
                        <se:Graphic>
                            <se:Mark>
                                <se:WellKnownName>circle</se:WellKnownName>
                                <se:Fill>
                                    <se:SvgParameter name="fill">#4eaf58</se:SvgParameter>
                                </se:Fill>
                                <se:Stroke>
                                    <se:SvgParameter name="stroke">#232323</se:SvgParameter>
                                    <se:SvgParameter name="stroke-opacity">0</se:SvgParameter>
                                    <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
                                </se:Stroke>
                            </se:Mark>
                            <se:Size>18</se:Size>
                        </se:Graphic>
                    </se:PointSymbolizer>
                </se:Rule>
                <se:Rule>
                    <se:Name>Modtageterminal</se:Name>
                    <se:Description>
                        <se:Title>Modtagerstation (Nybro)</se:Title>
                    </se:Description>
                    <ogc:Filter>
                        <ogc:PropertyIsEqualTo>
                            <ogc:PropertyName>type</ogc:PropertyName>
                            <ogc:Literal>Modtageterminal</ogc:Literal>
                        </ogc:PropertyIsEqualTo>
                    </ogc:Filter>
                    <se:PointSymbolizer>
                        <se:Graphic>
                            <se:Mark>
                                <se:WellKnownName>circle</se:WellKnownName>
                                <se:Fill>
                                    <se:SvgParameter name="fill">#ff0519</se:SvgParameter>
                                </se:Fill>
                                <se:Stroke>
                                    <se:SvgParameter name="stroke">#232323</se:SvgParameter>
                                    <se:SvgParameter name="stroke-opacity">0</se:SvgParameter>
                                    <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
                                </se:Stroke>
                            </se:Mark>
                            <se:Size>18</se:Size>
                        </se:Graphic>
                    </se:PointSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <!-- well-known name of the layer being referenced; required -->
        <se:Name>Arealreservation</se:Name>
        <!-- human-readable descriptive information -->
        <se:Description>
            <se:Title>arealreservation</se:Title>
            <se:Abstract>Beskrivelse af hvad en arealreservation er.</se:Abstract>
        </se:Description>
        <UserStyle>
            <se:Name>Arealreservation style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>Arealreservation rule</se:Name>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:SvgParameter name="fill">#e49e11</se:SvgParameter>
							<se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>
                        </se:Fill>
                        <se:Stroke>
                            <se:SvgParameter name="stroke">#e49e11</se:SvgParameter>
                            <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                            <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
                        </se:Stroke>
                    </se:PolygonSymbolizer>
                </se:Rule>
            </se:FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
</StyledLayerDescriptor>
