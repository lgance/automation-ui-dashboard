
import AsideMenu from '@/components/clientLayout/AsideMenu';
import sass from '@/styles/layout/content.template.module.scss';

function AsideLayout(){

  return (
    <>  
      <aside>
        <div className={sass.aside_logo_box}>
            Aside Logo Box ARea wrapper
        </div>
              
        <div className={sass.aside_menu_overflow}>
          <div className={sass.aside_menu_wrapper}>
            <AsideMenu />
          </div>
        </div>
        <div className={sass.aside_menu_footer}>
          Aside Footer 
        </div>
              
      </aside>
    </>
  ) 

  
}

export default AsideLayout;
