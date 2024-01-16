import './globals.css'
import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry';

import ContentTemplateLayout from '@/components/layout/ContentTemplateLayout';


export const metadata: Metadata = {
  title: 'process UI Refactoring',
  description: 'UI Refactoring',
}

// app/layout.ts ( 필수  ) 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (  
    <html lang="en">
      <body className={""}>
        <AntdRegistry>
          <ContentTemplateLayout>
            {children}
          </ContentTemplateLayout>
        </AntdRegistry>
        </body>
    </html>
  )
}
