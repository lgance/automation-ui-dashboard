import sass from '@/styles/layout/content.template.module.scss';

import HeaderLayout from "./HeaderLayout";

function MainLayout({children}:any){

  return (
    <>
      <div className={sass.layout_content_wrapper}>
        <HeaderLayout />
        <main>
        testMainLayout
          {children}
        </main>
      </div>

    </>
  )
}
 
export default MainLayout;
