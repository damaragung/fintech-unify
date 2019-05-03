import React from 'react';
import { storiesOf } from '@storybook/react';

import UploadMobile from '../lib/UploadMobile';

storiesOf('Upload', module).add('mobile', () => (
  <div style={{ margin: '16px' }}>
    <UploadMobile
      type="KTP"
      howToText="Cara Foto KTP"
      howToInfo="Pastikan foto KTP tidak terpotong & terbaca jelas. Gunakan KTP asli, bukan hasil fotokopi."
      previewInfo="Cek kembali hasil fotomu. Pastikan informasi di KTP terbaca jelas dan tidak terpotong."
    />
  </div>
));
