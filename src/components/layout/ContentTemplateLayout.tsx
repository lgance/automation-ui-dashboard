import sass from '@/styles/layout/content.template.module.scss';
import NavLayout from './NavLayout';
import MainLayout from './MainLayout';

function ContentTemplateLayout({children}:any){

  return (
    <>
        <div className={sass.app}>
          <NavLayout/>
          <MainLayout>
               {children}
          </MainLayout>
        </div>
    </>
  )
}

export default ContentTemplateLayout;

