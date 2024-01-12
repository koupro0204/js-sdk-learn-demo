import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';
import { Alert, AlertProps } from 'antd';
import Map from './Map';
import './Map.css';

import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoadApp/>
  </React.StrictMode>
)

function LoadApp() {
  const [info, setInfo] = useState('get table name, please waiting ....');
  const [alertType, setAlertType] = useState<AlertProps['type']>('info');
  useEffect(() => {
    const fn = async () => {
      const table = await bitable.base.getActiveTable();
      const tableName = await table.getName();
      setInfo(`The table Name is ${tableName}`);
      setAlertType('success');
    };
    fn();
  }, []);

  return <div style={{ display: 'flex' }}>
    {/* レイジーローディングのためのSuspenseコンポーネント */}
    <Suspense fallback={<div>Now loading</div>}>
      {/* レイヤーツリーコンポーネントにレイヤーのデータを渡す */}
      {/* <LayerTree layers={layers} /> */}
    </Suspense>
    {/* Mapコンポーネント */}
    <Map />
</div>
}