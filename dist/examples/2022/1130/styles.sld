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
        <se:Name>Planomraade</se:Name>
        <!-- human-readable descriptive information -->
        <se:Description>
            <se:Title>planområde</se:Title>
            <se:Abstract>Beskrivelse af hvad et planområde er.</se:Abstract>
        </se:Description>
        <UserStyle>
            <se:Name>Planomraade style</se:Name>
            <se:FeatureTypeStyle>
                <se:Rule>
                    <se:Name>Planomraade rule</se:Name>
                    <se:PolygonSymbolizer>
                        <se:Fill>
                            <se:SvgParameter name="fill">#7AADC6</se:SvgParameter>
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
</StyledLayerDescriptor>
