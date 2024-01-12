import React, { useEffect } from 'react';
import mapboxgl from 'maplibre-gl';

const Map: React.FC = () => {
  useEffect(() => {
    // Mapの初期化
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
        center: [139.7024, 35.6598], // 中心座標
        zoom: 16, // ズームレベル
    });

    // マーカーを追加
    var marker = new mapboxgl.Marker().setLngLat([139.70356, 35.65901]).addTo(map);

    return () => {
      // コンポーネントがアンマウントされる際にMapの状態をクリーンアップ
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default Map;
