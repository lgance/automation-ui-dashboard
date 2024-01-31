import sass from '@/styles/layout/content.template.module.scss';
import AsideLayout from './AsideLayout';
import MainLayout from './MainLayout';

function ContentTemplateLayout({children}:any){

  return (
    <>
        <div className={sass.app}>
          <AsideLayout/>
          <MainLayout>
               {children}
          </MainLayout>
        </div>
    </>
  )
}

export default ContentTemplateLayout;

