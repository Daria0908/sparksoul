import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Map.scss';

const YandexMap: React.FC = () => {
    const initialCoordinates: number[] = [55.806080, 36.856897];
    const [coordinates, setCoordinates] = useState<number[]>(initialCoordinates);
    const [address, setAddress] = useState<string>('Россия, Московская область, Новорижское ш. (40км от МКАДа), д. Сватово, д.6');

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=b0fd020c-9c51-441f-b859-69d08ed0a15b&format=json&geocode=${coordinates.join(',')}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch coordinates');
                }
                const data = await response.json();
                const address = data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
                setAddress(address);
            } catch (error) {
                console.error('Error fetching coordinates:', error);
            }
        };

        fetchCoordinates();
    }, [coordinates]);

    return (
        <section className="yandex">  
            <YMaps>
                <div style={{ width: '100%', height: '100%'}}>
                    <Map
                        defaultState={{ center: initialCoordinates, zoom: 14 }}
                        width="100%"
                        height="100%"
                    >
                        <Placemark
                            geometry={coordinates}
                            options={{
                                preset: 'islands#blueDotIcon',
                            }}
                        />
                    </Map>
                </div>
            </YMaps>
        </section>
    )
}

export default YandexMap;
