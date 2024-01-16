import sass from '@/styles/layout/content.template.module.scss';

import HeaderLayout from "./HeaderLayout";
import FooterLayout from './FooterLayout';

function MainLayout({children}:any){

  return (
    <>
    
      <div className={sass.layout_content_wrapper}>
        <HeaderLayout />
        <main>
          <div className={sass.content}>
            {children}
          </div>
          <FooterLayout/>
        </main>
      </div>

    </>
  )
}
 
export default MainLayout;
