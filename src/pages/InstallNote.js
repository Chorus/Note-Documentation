
import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


export default function Hello() {
  return (
    <Layout title="Install Note" description="Install Note">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
        <Tabs>
  <TabItem value="mobile" label="Mobile Devices" default>
    Note is available on Apple and Android mobile devices, Windows PCs, and Apple PCs with the M1 chip.
  </TabItem>
  <TabItem value="windows" label="Windows PCs">
    Note is available on Windows PCs through manual installation.
  </TabItem>
  <TabItem value="mac" label="Apple PCs">
    Note is available on Apple PCs with the M1 chip.
  </TabItem>
</Tabs>
        </p>
      </div>
    </Layout>
  );
}

